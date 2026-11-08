#!/usr/bin/env node
/* tools/medir-benchmark.js — llegeix les respostes d'un solucionador
   sobre el conjunt mutants+controls (tools/benchmark/preguntes-cegues.json)
   i tools/benchmark/claves.json, i calcula quants errors sembrats va
   detectar i quantes falses alarmes va donar sobre les preguntes netes.
   Escriu un informe amb el detall per id (per defecte a
   tools/benchmark/informe-benchmark.md, que no es versiona perquè hi
   surten els ids dels mutants). Veure tools/README.md. */

const fs = require("fs");
const path = require("path");
const { arrel } = require("./lib/dades");
const { respostaCoincideix } = require("./lib/comparacio");

const args = process.argv.slice(2);
function getArg(name) {
  const i = args.indexOf(name);
  return i !== -1 ? args[i + 1] : null;
}
const resultatsDir = getArg("--resultados");
const informeArg = getArg("--informe");
if (!resultatsDir) {
  console.error("Ús: node tools/medir-benchmark.js --resultados <carpeta> [--informe <fitxer.md>]");
  process.exit(2);
}

// Llindar per passar de fase (veure documentos/informe-calibracio-solucionador.md).
// Els mutants "estructurals" els detecta validar.js, no cal que els detecti
// el solucionador: es mostren a part i no compten per al llindar.
const TIPUS_LLINDAR = ["test-clau-canviada", "veritat-fals-invertit", "ordenar-elements-intercanviats"];
const TIPUS_ESTRUCTURALS = ["test-opcio-duplicada", "emparellar-dreta-duplicada"];
const LLINDAR_DETECCIO = 0.9;
const LLINDAR_FALSES_ALARMES = 0.1;

const ROOT = arrel();
const clausPath = path.join(ROOT, "tools", "benchmark", "claves.json");
if (!fs.existsSync(clausPath)) {
  console.error(`No existeix ${path.relative(ROOT, clausPath)}. Executa primer tools/sembrar-fallos.js.`);
  process.exit(2);
}
const claus = JSON.parse(fs.readFileSync(clausPath, "utf8"));

// clau original (sense l'error sembrat), només per mostrar-la a l'informe
const originalsPerId = new Map();
const mutantesPath = path.join(ROOT, "tools", "benchmark", "mutantes.json");
if (fs.existsSync(mutantesPath)) {
  JSON.parse(fs.readFileSync(mutantesPath, "utf8")).forEach((m) => originalsPerId.set(m.id, m.original));
}

const dir = path.isAbsolute(resultatsDir) ? resultatsDir : path.join(ROOT, resultatsDir);
if (!fs.existsSync(dir)) {
  console.error(`No existeix la carpeta de resultats: ${dir}`);
  process.exit(2);
}
const fitxers = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
const respostesPerId = new Map();
fitxers.forEach((f) => {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    (data.respostes || []).forEach((r) => respostesPerId.set(r.id, r));
  } catch (e) {
    console.error(`No s'ha pogut llegir ${f}: ${e.message}`);
  }
});

function descriuClau(q) {
  if (q.tipus === "veritat_fals") return q.resposta_correcta;
  if (q.tipus === "ordenar") return q.elements_ordre_correcte;
  if (q.tipus === "emparellar") return q.parelles;
  if (q.tipus === "resposta_escrita") return [q.resposta_correcta, ...(q.respostes_acceptades || [])];
  return q.resposta_correcta;
}

function motiu(coincideix, ambigua) {
  if (!coincideix && ambigua) return "resposta diferent + marca ambigua";
  if (!coincideix) return "resposta diferent";
  return "marca ambigua";
}

const totalPerTipus = {};
const detectatsPerTipus = {};
const viaPerTipus = {}; // tipusMutacio -> { "resposta diferent": n, ... }
const mutantsDetectats = [];
const noDetectats = [];
const noRetornats = [];
let mutantsResposts = 0;

claus.mutants.forEach((m) => {
  totalPerTipus[m.tipusMutacio] = (totalPerTipus[m.tipusMutacio] || 0) + 1;
  const r = respostesPerId.get(m.id);
  if (!r) {
    noRetornats.push(m.id);
    return;
  }
  mutantsResposts++;
  const coincideix = respostaCoincideix(m.clau, r.resposta);
  // el mutant té la clau ESTROPEJADA: si el solucionador hi coincideix,
  // vol dir que NO ha detectat l'error (ha "confirmat" la resposta dolenta)
  const detectat = !coincideix || !!r.ambigua;
  const fila = {
    id: m.id,
    tipusMutacio: m.tipusMutacio,
    tipus: m.clau.tipus,
    resposta: r.resposta,
    clauSembrada: descriuClau(m.clau),
    clauOriginal: originalsPerId.has(m.id) ? descriuClau(originalsPerId.get(m.id)) : null,
    ambigua: !!r.ambigua,
    nota: r.nota || "",
    altres: r.altres_opcions_defensables || []
  };
  if (detectat) {
    detectatsPerTipus[m.tipusMutacio] = (detectatsPerTipus[m.tipusMutacio] || 0) + 1;
    const v = motiu(coincideix, r.ambigua);
    viaPerTipus[m.tipusMutacio] = viaPerTipus[m.tipusMutacio] || {};
    viaPerTipus[m.tipusMutacio][v] = (viaPerTipus[m.tipusMutacio][v] || 0) + 1;
    mutantsDetectats.push({ ...fila, via: v });
  } else noDetectats.push(fila);
});

const controlsPerTipus = {};
const falsesAlarmesPerTipus = {};
const falsesAlarmes = [];
let controlsResposts = 0;

claus.controls.forEach((c) => {
  controlsPerTipus[c.clau.tipus] = (controlsPerTipus[c.clau.tipus] || 0) + 1;
  const r = respostesPerId.get(c.id);
  if (!r) {
    noRetornats.push(c.id);
    return;
  }
  controlsResposts++;
  const coincideix = respostaCoincideix(c.clau, r.resposta);
  if (!coincideix || r.ambigua) {
    falsesAlarmesPerTipus[c.clau.tipus] = (falsesAlarmesPerTipus[c.clau.tipus] || 0) + 1;
    falsesAlarmes.push({
      id: c.id,
      tipus: c.clau.tipus,
      resposta: r.resposta,
      clau: descriuClau(c.clau),
      via: motiu(coincideix, r.ambigua),
      nota: r.nota || "",
      altres: r.altres_opcions_defensables || []
    });
  }
});

const pct = (n, d) => (d ? ((n / d) * 100).toFixed(1) : "0.0");
const json = (x) => JSON.stringify(x);
const celda = (x) => String(x == null ? "" : x).replace(/\|/g, "\\|").replace(/\s*\n\s*/g, " ");

// --- veredicte del llindar ---
const veredicteTipus = TIPUS_LLINDAR.map((t) => {
  const n = detectatsPerTipus[t] || 0;
  const total = totalPerTipus[t] || 0;
  return { tipus: t, n, total, ok: total > 0 && n / total >= LLINDAR_DETECCIO };
});
const fa = controlsResposts ? falsesAlarmes.length / controlsResposts : 1;
const faOk = controlsResposts > 0 && fa <= LLINDAR_FALSES_ALARMES;
const llindarOk = veredicteTipus.every((v) => v.ok) && faOk && noRetornats.length === 0;

// --- sortida per pantalla ---
console.log(`Mutants: ${claus.mutants.length} (respostos: ${mutantsResposts})`);
console.log("Detecció per tipus de mutació:");
Object.keys(totalPerTipus).forEach((t) => {
  const n = detectatsPerTipus[t] || 0;
  const marca = TIPUS_ESTRUCTURALS.includes(t) ? "  [estructural: no compta per al llindar]" : "";
  console.log(`  - ${t}: ${n}/${totalPerTipus[t]} (${pct(n, totalPerTipus[t])}%)${marca}`);
});
console.log(`Controls: ${claus.controls.length} (respostos: ${controlsResposts})`);
console.log(`Falses alarmes sobre controls: ${falsesAlarmes.length}/${controlsResposts} (${pct(falsesAlarmes.length, controlsResposts)}%)`);
console.log("Falses alarmes per tipus de pregunta:");
Object.keys(controlsPerTipus).forEach((t) => {
  const n = falsesAlarmesPerTipus[t] || 0;
  console.log(`  - ${t}: ${n}/${controlsPerTipus[t]} (${pct(n, controlsPerTipus[t])}%)`);
});
console.log(`No retornats (ni mutants ni controls): ${noRetornats.length}`);
console.log(`\nLLINDAR (detecció >= ${LLINDAR_DETECCIO * 100}% en ${TIPUS_LLINDAR.join(", ")}; falses alarmes <= ${LLINDAR_FALSES_ALARMES * 100}%):`);
veredicteTipus.forEach((v) => console.log(`  - ${v.tipus}: ${v.n}/${v.total} -> ${v.ok ? "OK" : "NO ARRIBA"}`));
console.log(`  - falses alarmes: ${(fa * 100).toFixed(1)}% -> ${faOk ? "OK" : "NO ARRIBA"}`);
console.log(`  => ${llindarOk ? "LLINDAR SUPERAT" : "LLINDAR NO SUPERAT"}`);

// --- informe ---
const L = [];
L.push("# Informe de benchmark (mutants vs controls)");
L.push("");
L.push(`Generat: ${new Date().toISOString()}`);
L.push(`Curs: ${claus.curs} · Llavor: ${claus.llavor} · Carpeta de resultats: ${resultatsDir}`);
L.push("");
L.push("## Detecció per tipus de mutació");
L.push("");
L.push("| tipus de mutació | detectats | total | % | com s'ha detectat |");
L.push("|---|---|---|---|---|");
Object.keys(totalPerTipus).forEach((t) => {
  const n = detectatsPerTipus[t] || 0;
  const via = Object.entries(viaPerTipus[t] || {}).map(([k, v]) => `${k}: ${v}`).join("; ");
  L.push(`| ${t}${TIPUS_ESTRUCTURALS.includes(t) ? " (estructural)" : ""} | ${n} | ${totalPerTipus[t]} | ${pct(n, totalPerTipus[t])}% | ${via} |`);
});
L.push("");
L.push(`**Total detectats: ${Object.values(detectatsPerTipus).reduce((a, b) => a + b, 0)} / ${claus.mutants.length}**`);
L.push("");
L.push("Els mutants estructurals (`test-opcio-duplicada`, `emparellar-dreta-duplicada`) els detecta `validar.js`; no compten per al llindar.");
L.push("");
L.push("## Falses alarmes sobre controls (preguntes netes), per tipus de pregunta");
L.push("");
L.push("| tipus de pregunta | falses alarmes | controls | % |");
L.push("|---|---|---|---|");
Object.keys(controlsPerTipus).forEach((t) => {
  const n = falsesAlarmesPerTipus[t] || 0;
  L.push(`| ${t} | ${n} | ${controlsPerTipus[t]} | ${pct(n, controlsPerTipus[t])}% |`);
});
L.push(`| **total** | **${falsesAlarmes.length}** | **${controlsResposts}** | **${pct(falsesAlarmes.length, controlsResposts)}%** |`);
L.push("");
L.push("## Llindar");
L.push("");
veredicteTipus.forEach((v) => L.push(`- ${v.tipus}: ${v.n}/${v.total} (${pct(v.n, v.total)}%), cal >= ${LLINDAR_DETECCIO * 100}% -> ${v.ok ? "OK" : "NO ARRIBA"}`));
L.push(`- falses alarmes: ${(fa * 100).toFixed(1)}%, cal <= ${LLINDAR_FALSES_ALARMES * 100}% -> ${faOk ? "OK" : "NO ARRIBA"}`);
L.push(`- **${llindarOk ? "LLINDAR SUPERAT" : "LLINDAR NO SUPERAT"}**`);
L.push("");
L.push("## Mutants NO detectats (el solucionador va confirmar la clau estropejada)");
L.push("");
L.push("| id | mutació | resposta del solucionador | clau sembrada (errònia) | clau original | nota |");
L.push("|---|---|---|---|---|---|");
noDetectats.forEach((d) => L.push(`| ${d.id} | ${d.tipusMutacio} | ${celda(json(d.resposta))} | ${celda(json(d.clauSembrada))} | ${celda(d.clauOriginal == null ? "?" : json(d.clauOriginal))} | ${celda(d.nota)} |`));
L.push("");
L.push("## Mutants detectats (detall)");
L.push("");
L.push("| id | mutació | resposta del solucionador | clau sembrada (errònia) | clau original | com | nota |");
L.push("|---|---|---|---|---|---|---|");
mutantsDetectats.forEach((d) => L.push(`| ${d.id} | ${d.tipusMutacio} | ${celda(json(d.resposta))} | ${celda(json(d.clauSembrada))} | ${celda(d.clauOriginal == null ? "?" : json(d.clauOriginal))} | ${d.via} | ${celda(d.nota)} |`));
L.push("");
L.push("## Falses alarmes (controls)");
L.push("");
L.push("| id | tipus | resposta del solucionador | clau | com | nota |");
L.push("|---|---|---|---|---|---|");
falsesAlarmes.forEach((d) => L.push(`| ${d.id} | ${d.tipus} | ${celda(json(d.resposta))} | ${celda(json(d.clau))} | ${d.via} | ${celda(d.nota || (d.altres.length ? json(d.altres) : ""))} |`));
L.push("");
L.push("## No retornats pel solucionador");
L.push("");
noRetornats.forEach((id) => L.push(`- ${id}`));
L.push("");

const outPath = informeArg
  ? (path.isAbsolute(informeArg) ? informeArg : path.join(ROOT, informeArg))
  : path.join(ROOT, "tools", "benchmark", "informe-benchmark.md");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, L.join("\n"));
console.log(`\nInforme escrit a ${outPath}`);
