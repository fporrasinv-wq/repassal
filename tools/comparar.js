#!/usr/bin/env node
/* tools/comparar.js — compara les respostes d'un solucionador (generades
   a partir dels fitxers de tools/exportar-ciego.js) amb les claus reals
   de data/questions.js, i escriu documentos/informe-solucionador.md.
   Veure tools/README.md. */

const fs = require("fs");
const path = require("path");
const { carregarDades, arrel } = require("./lib/dades");
const { normalitza } = require("./lib/text");
const { respostaCoincideix } = require("./lib/comparacio");

const args = process.argv.slice(2);
function getArg(name) {
  const i = args.indexOf(name);
  return i !== -1 ? args[i + 1] : null;
}
const resultatsDir = getArg("--resultados");
const curs = getArg("--curs");
const nivellFiltre = getArg("--nivell");

if (!resultatsDir || !curs) {
  console.error("Ús: node tools/comparar.js --resultados <carpeta> --curs 5è [--nivell normal]");
  process.exit(2);
}

const ROOT = arrel();
const { QUESTIONS } = carregarDades();
const byId = new Map(QUESTIONS.map((q) => [q.id, q]));

const dir = path.isAbsolute(resultatsDir) ? resultatsDir : path.join(ROOT, resultatsDir);
if (!fs.existsSync(dir)) {
  console.error(`No existeix la carpeta de resultats: ${dir}`);
  process.exit(2);
}

const fitxers = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
if (fitxers.length === 0) {
  console.error(`No hi ha cap fitxer .json a ${dir}`);
  process.exit(2);
}

const totesLesRespostes = [];
fitxers.forEach((f) => {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    (data.respostes || []).forEach((r) => totesLesRespostes.push(r));
  } catch (e) {
    console.error(`No s'ha pogut llegir ${f}: ${e.message}`);
  }
});

const idsEsperats = QUESTIONS.filter((q) => q.curs === curs && !q.id.startsWith("TEST_") && (!nivellFiltre || q.nivell === nivellFiltre)).map((q) => q.id);
const respostesPerId = new Map(totesLesRespostes.map((r) => [r.id, r]));

const discrepancies = [];
const ambigues = [];
const altresRespostesProposades = [];
const notesSenseAmbiguitat = [];
const noRetornades = [];
let totalComparades = 0;
let totalCorrectes = 0;

idsEsperats.forEach((id) => {
  const q = byId.get(id);
  const r = respostesPerId.get(id);
  if (!r) {
    noRetornades.push(id);
    return;
  }
  totalComparades++;
  const correcte = respostaCoincideix(q, r.resposta);
  if (correcte) totalCorrectes++;
  else
    discrepancies.push({
      id,
      tipus: q.tipus,
      respostaSolucionador: JSON.stringify(r.resposta),
      nota: r.nota || "",
      clau: q.tipus === "test" || q.tipus === "resposta_escrita" ? q.resposta_correcta : JSON.stringify(correctAnswerDescriu(q))
    });
  if (r.ambigua) ambigues.push({ id, tipus: q.tipus, altres: r.altres_opcions_defensables || [], nota: r.nota || "" });
  if (r.nota && !r.ambigua) notesSenseAmbiguitat.push({ id, tipus: q.tipus, nota: r.nota });
  if (q.tipus === "resposta_escrita" && Array.isArray(r.altres_respostes_possibles) && r.altres_respostes_possibles.length) {
    const noCobertes = r.altres_respostes_possibles.filter(
      (alt) => ![q.resposta_correcta, ...(q.respostes_acceptades || [])].some((c) => normalitza(c) === normalitza(alt))
    );
    if (noCobertes.length) altresRespostesProposades.push({ id, propostes: noCobertes });
  }
});

function correctAnswerDescriu(q) {
  if (q.tipus === "veritat_fals") return q.resposta_correcta;
  if (q.tipus === "ordenar") return q.elements_ordre_correcte;
  if (q.tipus === "emparellar") return q.parelles;
  return q.resposta_correcta;
}

// una cel·la de taula markdown no pot tenir "|" ni salts de línia
function celda(text) {
  return String(text || "").replace(/\|/g, "\\|").replace(/\s*\n\s*/g, " ");
}

const pctEncert = totalComparades ? ((totalCorrectes / totalComparades) * 100).toFixed(1) : "0.0";

console.log(`Preguntes esperades (curs ${curs}): ${idsEsperats.length}`);
console.log(`Respostes rebudes i comparades: ${totalComparades}`);
console.log(`Encerts: ${totalCorrectes} (${pctEncert}%)`);
console.log(`Discrepàncies: ${discrepancies.length}`);
console.log(`Marcades com a ambigües: ${ambigues.length}`);
console.log(`Notes en preguntes no marcades com a ambigües: ${notesSenseAmbiguitat.length}`);
console.log(`No retornades: ${noRetornades.length}`);

const lines = [];
lines.push("# Informe del solucionador cec");
lines.push("");
lines.push(`Generat: ${new Date().toISOString()}`);
lines.push(`Curs: ${curs}${nivellFiltre ? ` · Nivell: ${nivellFiltre}` : ""} · Carpeta de resultats: ${resultatsDir}`);
lines.push("");
lines.push(`- Preguntes esperades: ${idsEsperats.length}`);
lines.push(`- Respostes comparades: ${totalComparades}`);
lines.push(`- Encerts: ${totalCorrectes} (${pctEncert}%)`);
lines.push(`- Discrepàncies: ${discrepancies.length}`);
lines.push(`- Marcades com a ambigües pel solucionador: ${ambigues.length}`);
lines.push(`- No retornades: ${noRetornades.length}`);
lines.push("");

lines.push("## Discrepàncies (resposta del solucionador vs clau)");
lines.push("");
lines.push("| id | tipus | resposta del solucionador | clau | nota del solucionador |");
lines.push("|---|---|---|---|---|");
discrepancies.forEach((d) => lines.push(`| ${d.id} | ${d.tipus} | ${celda(d.respostaSolucionador)} | ${celda(JSON.stringify(d.clau))} | ${celda(d.nota)} |`));
lines.push("");

lines.push("## Preguntes marcades com a ambigües pel solucionador");
lines.push("");
ambigues.forEach((a) => {
  const detall = [a.altres.length ? JSON.stringify(a.altres) : "", a.nota ? `nota: ${a.nota}` : ""].filter(Boolean).join(" · ");
  lines.push(`- **${a.id}** (${a.tipus}): ${detall || "(sense detall)"}`);
});
lines.push("");

lines.push("## Notes del solucionador en preguntes NO marcades com a ambigües");
lines.push("");
notesSenseAmbiguitat.forEach((n) => lines.push(`- **${n.id}** (${n.tipus}): ${n.nota}`));
lines.push("");

lines.push("## Respostes alternatives per a resposta_escrita no cobertes per respostes_acceptades");
lines.push("");
altresRespostesProposades.forEach((a) => {
  lines.push(`- **${a.id}**: ${a.propostes.map((p) => `"${p}"`).join(", ")}`);
});
lines.push("");

lines.push("## Preguntes que el solucionador no va respondre");
lines.push("");
noRetornades.forEach((id) => lines.push(`- ${id}`));
lines.push("");

const outPath = path.join(ROOT, "documentos", "informe-solucionador.md");
fs.writeFileSync(outPath, lines.join("\n"));
console.log(`\nInforme escrit a ${path.relative(ROOT, outPath)}`);
