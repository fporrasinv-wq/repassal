#!/usr/bin/env node
/* tools/ancoratge.js — ancoratge curricular de les lliçons de 1r (només
   diagnòstic: no modifica res, ni data/questions.js). Tres subcomandes:

     preparar   crea /tmp/c1/<matèria>/ (curriculum.md, preguntes.json,
                instruccions.md) i els prompts dels agents a /tmp/c1/prompts/
     comprovar  valida els JSON que han escrit els agents (/tmp/c1/resultats/)
     informe    escriu documentos/informe-ancoratge-1r.md

   Veure tools/README.md i tools/prompt-ancoratge.md. */

const fs = require("fs");
const path = require("path");
const { carregarDades, arrel } = require("./lib/dades");
const { normalitza } = require("./lib/text");

// Llindars provisionals per marcar una lliçó com "REVISAR" (en QUALSEVOL dels dos agents)
const LLINDARS = { cap: 2, mesEnlla: 1, segonN: 3 };

const CURS = "1r";
const AGENTS = ["A", "B"];
const ANCORATGES = ["directe", "indirecte", "cap"];
const NIVELLS = ["1r", "2n", "mes_enlla", "sota_1r"];
const AVALUABLES = ["si", "parcial", "no"];
const MAX_NOTA = 200;

// {MATERIA} del prompt va en castellà (com la resta de l'encàrrec); {AREA} és el títol del document
const MATERIES = {
  mat: { materia: "matemáticas", area: "Matemàtiques", prefix: "MAT" },
  cat: { materia: "lengua catalana", area: "Llengües (catalana, castellana i aranès)", prefix: "LLE" },
  cas: { materia: "lengua castellana", area: "Llengües (catalana, castellana i aranès)", prefix: "LLE" },
  eng: { materia: "inglés", area: "Llengua estrangera", prefix: "EST" },
  soc: { materia: "conocimiento del medio social", area: "Coneixement del Medi Natural, Social i Cultural", prefix: "MED" },
  nat: { materia: "conocimiento del medio natural", area: "Coneixement del Medi Natural, Social i Cultural", prefix: "MED" }
};

// Camps de cada pregunta que es donen a l'agent (sense dificultat, nivell, origen, cicle ni explicacio)
const CAMPS_PREGUNTA = ["id", "tema", "tipus", "pregunta", "text", "opcions", "resposta_correcta", "respostes_acceptades", "conjunt", "parelles", "elements_ordre_correcte"];

const ROOT = arrel();
const args = process.argv.slice(2);
const ordre = args[0];
function getArg(name, def) {
  const i = args.indexOf(name);
  return i !== -1 ? args[i + 1] : def;
}
const DIR = getArg("--dir", "/tmp/c1");
const RESULTATS = getArg("--resultats", path.join(DIR, "resultats"));
const CURRICULUM = path.join(ROOT, "documentos", "curriculum-cicle-inicial.md");

function sortir(missatge, codi) {
  console.error(missatge);
  process.exit(codi === undefined ? 2 : codi);
}

/* ---------------- Currículum i prompt ---------------- */

function llegeixCurriculum() {
  const linies = fs.readFileSync(CURRICULUM, "utf8").split("\n");
  const sabers = new Map();
  linies.forEach((l) => {
    const m = l.match(/^- `([A-Z]+-\d+)` \(p\. (\d+)\) (.+)$/);
    if (m) sabers.set(m[1], { codi: m[1], pagina: Number(m[2]), text: m[3], prefix: m[1].split("-")[0] });
  });
  return { linies, sabers };
}

// Secció tal cual: del títol "# ..." fins al següent títol "# ..." o a la línia "---"
function seccio(linies, titol) {
  const ini = linies.indexOf(titol);
  if (ini === -1) sortir(`No trobo la secció "${titol}" a ${path.relative(ROOT, CURRICULUM)}.`);
  let fi = linies.length;
  for (let i = ini + 1; i < linies.length; i++) {
    if (linies[i].startsWith("# ") || linies[i] === "---") {
      fi = i;
      break;
    }
  }
  return linies.slice(ini, fi).join("\n").replace(/\n+$/, "") + "\n";
}

function llegeixPrompt() {
  const text = fs.readFileSync(path.join(ROOT, "tools", "prompt-ancoratge.md"), "utf8");
  const blocs = [...text.matchAll(/```\n([\s\S]*?)\n```/g)].map((m) => m[1]);
  if (blocs.length < 3) sortir("tools/prompt-ancoratge.md ha de tenir 3 blocs de codi (encàrrec, aïllament, rutes).");
  return { encarrec: blocs[0], aillament: blocs[1], rutes: blocs[2] };
}

const omple = (text, valors) => Object.entries(valors).reduce((t, [k, v]) => t.split("{" + k + "}").join(v), text);

function campsPregunta(q) {
  const o = {};
  CAMPS_PREGUNTA.forEach((c) => {
    if (q[c] !== undefined) o[c] = q[c];
  });
  return o;
}

function instruccions(codi, m, p) {
  return `# Instruccions de l'agent d'ancoratge curricular — ${codi} (${m.materia})

Aquesta carpeta conté tres fitxers: \`curriculum.md\` (els sabers oficials de l'àrea), \`preguntes.json\` (les preguntes de 1r d'aquesta matèria) i aquest \`instruccions.md\`. El teu prompt t'indica quina lletra d'agent ets (A o B) i on has de desar el resultat.

## Format de la sortida

Un únic fitxer JSON amb aquesta forma:

\`\`\`json
{
  "materia": "${codi}",
  "agent": "A",
  "preguntes": [
    {
      "id": "1r_...",
      "ancoratge": "directe | indirecte | cap",
      "sabers": [{ "codi": "MAT-05", "cita": "les 8 primeres paraules del saber" }],
      "nivell_curs": "1r | 2n | mes_enlla | sota_1r",
      "dubte": false,
      "nota": "",
      "error_evident": null
    }
  ],
  "cobertura": [{ "codi": "MAT-01", "avaluable": "si | parcial | no" }],
  "fitxers_llegits": ["..."],
  "fitxers_escrits": ["..."]
}
\`\`\`

- Una entrada a \`preguntes\` per **cada** pregunta de \`preguntes.json\`, sense repetir cap id ni afegir-ne d'estranys.
- \`sabers\` té 0, 1 o 2 elements; és buit si i només si \`ancoratge\` és \`"cap"\`. Cada \`codi\` ha d'existir a \`curriculum.md\` i \`cita\` ha de ser el principi literal del text d'aquest saber.
- \`nota\` (en català, màxim ${MAX_NOTA} caràcters) és obligatòria si \`ancoratge\` és \`"cap"\`, si \`nivell_curs\` no és \`"1r"\` o si \`dubte\` és \`true\`.
- \`error_evident\` és un text breu o \`null\`.
- \`cobertura\` té una entrada per **cada** saber de \`curriculum.md\` (cap codi inventat, cap repetit).
- \`fitxers_llegits\` i \`fitxers_escrits\`: llistes de rutes.

## Encàrrec

${omple(p.encarrec, { MATERIA: m.materia, AREA: m.area })}

## Aïllament

${p.aillament}
`;
}

function promptAgent(codi, m, agent, p) {
  return [
    omple(p.encarrec, { MATERIA: m.materia, AREA: m.area }),
    p.aillament,
    omple(p.rutes, { MAT: codi, AGENT: agent })
  ].join("\n\n");
}

/* ---------------- preparar ---------------- */

function preparar() {
  const { linies } = llegeixCurriculum();
  const { QUESTIONS } = carregarDades();
  const p = llegeixPrompt();
  fs.mkdirSync(path.join(DIR, "resultats"), { recursive: true });
  fs.mkdirSync(path.join(DIR, "prompts"), { recursive: true });
  console.log(`Carpeta de treball: ${DIR}`);
  Object.entries(MATERIES).forEach(([codi, m]) => {
    const qs = QUESTIONS.filter((q) => q.curs === CURS && q.materia === codi);
    const dir = path.join(DIR, codi);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "curriculum.md"), seccio(linies, "# " + m.area));
    fs.writeFileSync(path.join(dir, "preguntes.json"), JSON.stringify({ materia: codi, total: qs.length, preguntes: qs.map(campsPregunta) }, null, 2) + "\n");
    fs.writeFileSync(path.join(dir, "instruccions.md"), instruccions(codi, m, p));
    AGENTS.forEach((a) => fs.writeFileSync(path.join(DIR, "prompts", `${codi}-${a}.txt`), promptAgent(codi, m, a, p) + "\n"));
    console.log(`  ${codi}: ${qs.length} preguntes, ${new Set(qs.map((q) => q.tema)).size} lliçons, àrea "${m.area}"`);
  });
  console.log(`Prompts dels agents: ${path.join(DIR, "prompts")}/<matèria>-<A|B>.txt`);
  console.log(`Resultats esperats a: ${path.join(DIR, "resultats")}/<matèria>-<A|B>.json`);
}

/* ---------------- comprovar ---------------- */

const norm = (s) => normalitza(String(s).replace(/[’‘]/g, "'"));
const esText = (x) => typeof x === "string" && x.trim() !== "";

function contextComprovacio() {
  const { sabers } = llegeixCurriculum();
  const { QUESTIONS } = carregarDades();
  const lot = {};
  Object.keys(MATERIES).forEach((c) => (lot[c] = QUESTIONS.filter((q) => q.curs === CURS && q.materia === c)));
  return { sabers, lot };
}

function validaResultat(codi, lletra, dades, ctx) {
  const errors = [];
  const avisos = [];
  const m = MATERIES[codi];
  if (!dades || typeof dades !== "object" || Array.isArray(dades)) return { errors: ["no és un objecte JSON"], avisos };
  if (dades.materia !== codi) errors.push(`materia="${dades.materia}" (esperat "${codi}")`);
  if (dades.agent !== lletra) errors.push(`agent="${dades.agent}" (esperat "${lletra}")`);
  ["fitxers_llegits", "fitxers_escrits"].forEach((k) => {
    if (!Array.isArray(dades[k]) || dades[k].some((x) => typeof x !== "string")) errors.push(`${k} ha de ser una llista de textos`);
  });

  // (1) format i (2) ids del lot
  const esperats = new Set(ctx.lot[codi].map((q) => q.id));
  if (!Array.isArray(dades.preguntes)) errors.push("falta la llista preguntes[]");
  else {
    const vistos = new Map();
    dades.preguntes.forEach((p, i) => {
      const on = `preguntes[${i}]${p && p.id ? " " + p.id : ""}`;
      if (!p || typeof p !== "object") return errors.push(`${on}: no és un objecte`);
      if (!esText(p.id)) return errors.push(`${on}: falta id`);
      vistos.set(p.id, (vistos.get(p.id) || 0) + 1);
      if (!esperats.has(p.id)) errors.push(`${on}: id que no és del lot`);
      if (!ANCORATGES.includes(p.ancoratge)) errors.push(`${on}: ancoratge "${p.ancoratge}" no vàlid`);
      if (!NIVELLS.includes(p.nivell_curs)) errors.push(`${on}: nivell_curs "${p.nivell_curs}" no vàlid`);
      if (typeof p.dubte !== "boolean") errors.push(`${on}: dubte ha de ser true/false`);
      if (typeof p.nota !== "string") errors.push(`${on}: nota ha de ser un text (pot ser buit)`);
      if (!(p.error_evident === null || esText(p.error_evident))) errors.push(`${on}: error_evident ha de ser null o un text`);
      if (!Array.isArray(p.sabers)) return errors.push(`${on}: sabers ha de ser una llista`);
      if (p.sabers.length > 2) errors.push(`${on}: més de 2 sabers (${p.sabers.length})`);
      // (4) cap <=> sabers buit
      if ((p.ancoratge === "cap") !== (p.sabers.length === 0)) errors.push(`${on}: ancoratge="${p.ancoratge}" amb ${p.sabers.length} sabers (cap ⇔ llista buida)`);
      // (3) codis i cites
      p.sabers.forEach((s) => {
        const saber = s && ctx.sabers.get(s.codi);
        if (!saber) return errors.push(`${on}: codi "${s && s.codi}" no existeix al currículum`);
        if (saber.prefix !== m.prefix) avisos.push(`${on}: ${s.codi} no és de l'àrea ${m.prefix}`);
        if (!esText(s.cita)) return errors.push(`${on}: ${s.codi} sense cita`);
        const textNorm = norm(saber.text);
        const citaNorm = norm(s.cita);
        if (!textNorm.startsWith(citaNorm)) errors.push(`${on}: la cita de ${s.codi} no és el principi del saber ("${String(s.cita).slice(0, 50)}")`);
        else {
          const paraules = textNorm.split(" ").length;
          if (citaNorm.split(" ").length !== Math.min(8, paraules)) avisos.push(`${on}: la cita de ${s.codi} no té ${Math.min(8, paraules)} paraules`);
        }
      });
      // (5) nota obligatòria
      const calNota = p.ancoratge === "cap" || p.nivell_curs !== "1r" || p.dubte === true;
      if (calNota && !esText(p.nota)) errors.push(`${on}: falta la nota (obligatòria perquè ancoratge=cap, nivell≠1r o dubte)`);
      if (typeof p.nota === "string" && p.nota.length > MAX_NOTA) avisos.push(`${on}: la nota té ${p.nota.length} caràcters (màxim ${MAX_NOTA})`);
    });
    esperats.forEach((id) => {
      if (!vistos.has(id)) errors.push(`falta la pregunta ${id}`);
    });
    vistos.forEach((n, id) => {
      if (n > 1) errors.push(`la pregunta ${id} apareix ${n} vegades`);
    });
  }

  // (6) cobertura: tots els sabers de l'àrea, sense codis inventats ni repetits
  const esperatsCob = [...ctx.sabers.values()].filter((s) => s.prefix === m.prefix).map((s) => s.codi);
  if (!Array.isArray(dades.cobertura)) errors.push("falta la llista cobertura[]");
  else {
    const vistos = new Map();
    dades.cobertura.forEach((c, i) => {
      if (!c || typeof c !== "object") return errors.push(`cobertura[${i}]: no és un objecte`);
      vistos.set(c.codi, (vistos.get(c.codi) || 0) + 1);
      if (!ctx.sabers.has(c.codi)) errors.push(`cobertura[${i}]: codi "${c.codi}" inventat`);
      else if (!esperatsCob.includes(c.codi)) errors.push(`cobertura[${i}]: ${c.codi} no és de l'àrea ${m.prefix}`);
      if (!AVALUABLES.includes(c.avaluable)) errors.push(`cobertura[${i}] ${c.codi}: avaluable "${c.avaluable}" no vàlid`);
    });
    const falten = esperatsCob.filter((c) => !vistos.has(c));
    if (falten.length) errors.push(`a la cobertura falten ${falten.length} sabers (${falten.slice(0, 5).join(", ")}${falten.length > 5 ? ", …" : ""})`);
    vistos.forEach((n, c) => {
      if (n > 1) errors.push(`cobertura: ${c} apareix ${n} vegades`);
    });
  }

  // lectures declarades fora de la carpeta de l'agent (només advertència: es declara l'agent mateix)
  const meu = `/tmp/c1/resultats/${codi}-${lletra}.json`;
  (Array.isArray(dades.fitxers_llegits) ? dades.fitxers_llegits : []).forEach((f) => {
    if (typeof f !== "string") return;
    if (!(f.startsWith(`/tmp/c1/${codi}/`) || f === meu)) avisos.push(`ha declarat llegir fora de la seva carpeta: ${f}`);
  });
  return { errors, avisos };
}

function carregaResultats(ctx) {
  const resultat = [];
  Object.keys(MATERIES).forEach((codi) =>
    AGENTS.forEach((lletra) => {
      const fitxer = path.join(RESULTATS, `${codi}-${lletra}.json`);
      const entrada = { codi, lletra, fitxer, clau: `${codi}-${lletra}`, existeix: fs.existsSync(fitxer), errors: [], avisos: [], dades: null, valid: false };
      if (!entrada.existeix) entrada.errors.push("el fitxer no existeix");
      else {
        try {
          entrada.dades = JSON.parse(fs.readFileSync(fitxer, "utf8"));
          const v = validaResultat(codi, lletra, entrada.dades, ctx);
          entrada.errors = v.errors;
          entrada.avisos = v.avisos;
        } catch (e) {
          entrada.errors.push("JSON no vàlid: " + e.message);
        }
      }
      entrada.valid = entrada.errors.length === 0;
      resultat.push(entrada);
    })
  );
  return resultat;
}

function comprovar() {
  const ctx = contextComprovacio();
  const res = carregaResultats(ctx);
  console.log(`Resultats a ${RESULTATS}\n`);
  res.forEach((r) => {
    console.log(`${r.valid ? "VÀLID   " : "INVÀLID "} ${r.clau}.json${r.avisos.length ? `  (${r.avisos.length} advertències)` : ""}`);
    r.errors.slice(0, 12).forEach((e) => console.log("            - " + e));
    if (r.errors.length > 12) console.log(`            … i ${r.errors.length - 12} errors més`);
  });
  const valids = res.filter((r) => r.valid).length;
  console.log(`\nVàlids: ${valids} de ${res.length}`);
  console.log("\nFitxers llegits i escrits que ha declarat cada agent (comprova l'aïllament):");
  res.forEach((r) => {
    if (!r.dades) return;
    console.log(`  ${r.clau}: llegits=${JSON.stringify(r.dades.fitxers_llegits)}  escrits=${JSON.stringify(r.dades.fitxers_escrits)}`);
    r.avisos.filter((a) => a.startsWith("ha declarat")).forEach((a) => console.log("      ⚠ " + a));
  });
  const altres = res.filter((r) => r.avisos.some((a) => !a.startsWith("ha declarat")));
  if (altres.length) {
    console.log("\nAdvertències (no invaliden el resultat):");
    altres.forEach((r) => r.avisos.filter((a) => !a.startsWith("ha declarat")).slice(0, 8).forEach((a) => console.log(`  ${r.clau}: ${a}`)));
  }
  process.exit(valids === res.length ? 0 : 1);
}

/* ---------------- informe ---------------- */

const cel = (x) => String(x == null ? "" : x).replace(/\|/g, "\\|").replace(/\s*\n\s*/g, " ");
const abreuja = (t, n) => (String(t).length > n ? String(t).slice(0, n - 1) + "…" : String(t));
const pct = (n, d) => (d ? ((n / d) * 100).toFixed(1) + "%" : "—");

function comptes(agent, ids) {
  const c = { directe: 0, indirecte: 0, cap: 0, "1r": 0, "2n": 0, mes_enlla: 0, sota_1r: 0 };
  agent.preguntes.filter((p) => ids.includes(p.id)).forEach((p) => {
    c[p.ancoratge]++;
    c[p.nivell_curs]++;
  });
  return c;
}
const cAnc = (c) => `${c.directe}/${c.indirecte}/${c.cap}`;
const cNiv = (c) => `${c["1r"]}/${c["2n"]}/${c.mes_enlla}/${c.sota_1r}`;

function informe() {
  const ctx = contextComprovacio();
  const { QUESTIONS } = carregarDades();
  const res = carregaResultats(ctx);
  const valids = res.filter((r) => r.valid);
  const perClau = Object.fromEntries(valids.map((r) => [r.clau, r.dades]));
  const q1r = QUESTIONS.filter((q) => q.curs === CURS);
  const perId = new Map(q1r.map((q) => [q.id, q]));
  const model = getArg("--model", "no indicat");
  const consum = getArg("--consum", "no indicat");
  const relancats = getArg("--relancats", "no indicat");
  const nota = getArg("--nota", "");
  const L = [];

  L.push("# Informe d'ancoratge curricular de 1r");
  L.push("");
  L.push(`Generat: ${new Date().toISOString()}`);
  L.push(`Preguntes: ${q1r.length} (${new Set(q1r.map((q) => q.materia + "|" + q.tema)).size} lliçons de 1r) · Currículum: \`documentos/curriculum-cicle-inicial.md\` (${ctx.sabers.size} sabers del cicle inicial, 1r i 2n)`);
  L.push("");
  L.push("**Només diagnòstic: no s'ha canviat cap pregunta. Les marques i els desacords són per a revisió humana.**");
  L.push("");

  /* 1. Resum */
  L.push("## 1. Resum");
  L.push("");
  L.push(`- Model dels agents: ${model}`);
  L.push(`- Consum: ${consum}`);
  L.push(`- Agents amb resultat vàlid: ${valids.length} de ${res.length}${valids.length < res.length ? " (no vàlids: " + res.filter((r) => !r.valid).map((r) => r.clau).join(", ") + ")" : ""}`);
  L.push(`- Relançaments: ${relancats}`);
  if (nota) L.push(`- ${nota}`);
  L.push("");
  L.push("Recompte de preguntes per ancoratge i per nivell dins del cicle, per agent (ancoratge: directe/indirecte/cap; nivell: 1r/2n/més enllà/sota 1r):");
  L.push("");
  L.push("| agent | directe | indirecte | cap | 1r | 2n | més enllà | sota 1r |");
  L.push("|---|---|---|---|---|---|---|---|");
  const totals = { A: null, B: null, tot: null };
  const buit = () => ({ directe: 0, indirecte: 0, cap: 0, "1r": 0, "2n": 0, mes_enlla: 0, sota_1r: 0 });
  Object.keys(totals).forEach((k) => (totals[k] = buit()));
  valids.forEach((r) => {
    const c = comptes(r.dades, q1r.map((q) => q.id));
    ["directe", "indirecte", "cap", "1r", "2n", "mes_enlla", "sota_1r"].forEach((k) => {
      totals[r.lletra][k] += c[k];
      totals.tot[k] += c[k];
    });
    L.push(`| ${r.clau} | ${c.directe} | ${c.indirecte} | ${c.cap} | ${c["1r"]} | ${c["2n"]} | ${c.mes_enlla} | ${c.sota_1r} |`);
  });
  [["total agents A", totals.A], ["total agents B", totals.B], ["**total (A+B)**", totals.tot]].forEach(([n, c]) =>
    L.push(`| ${n} | ${c.directe} | ${c.indirecte} | ${c.cap} | ${c["1r"]} | ${c["2n"]} | ${c.mes_enlla} | ${c.sota_1r} |`)
  );
  L.push("");

  /* 2. Taula de lliçons */
  L.push("## 2. Lliçons de 1r");
  L.push("");
  L.push(`Cada cel·la és un recompte sobre les 6 preguntes de la lliçó: ancoratge **directe/indirecte/cap** i nivell **1r/2n/més enllà/sota 1r**. Una lliçó es marca **REVISAR** si en qualsevol dels dos agents es compleix: cap ≥ ${LLINDARS.cap}, o més enllà ≥ ${LLINDARS.mesEnlla}, o 2n ≥ ${LLINDARS.segonN} (llindars provisionals, constant \`LLINDARS\` de \`tools/ancoratge.js\`).`);
  L.push("");
  L.push("| matèria | lliçó | A: ancoratge | A: nivell | B: ancoratge | B: nivell | |");
  L.push("|---|---|---|---|---|---|---|");
  const lliçons = [];
  q1r.forEach((q) => {
    let l = lliçons.find((x) => x.materia === q.materia && x.tema === q.tema);
    if (!l) lliçons.push((l = { materia: q.materia, tema: q.tema, ids: [] }));
    l.ids.push(q.id);
  });
  let nRevisar = 0;
  lliçons.forEach((l) => {
    const cel2 = ["A", "B"].map((a) => {
      const d = perClau[`${l.materia}-${a}`];
      return d ? comptes(d, l.ids) : null;
    });
    const marca = cel2.some((c) => c && (c.cap >= LLINDARS.cap || c.mes_enlla >= LLINDARS.mesEnlla || c["2n"] >= LLINDARS.segonN));
    if (marca) nRevisar++;
    L.push(`| ${l.materia} | ${cel(l.tema)} | ${cel2[0] ? cAnc(cel2[0]) : "—"} | ${cel2[0] ? cNiv(cel2[0]) : "—"} | ${cel2[1] ? cAnc(cel2[1]) : "—"} | ${cel2[1] ? cNiv(cel2[1]) : "—"} | ${marca ? "**REVISAR**" : ""} |`);
  });
  L.push("");
  L.push(`Lliçons marcades REVISAR: ${nRevisar} de ${lliçons.length}.`);
  L.push("");

  /* 3. Preguntes marcades */
  L.push("## 3. Preguntes marcades");
  L.push("");
  L.push("Preguntes on algun agent ha dit ancoratge «cap», un nivell diferent de 1r, dubte, o ha vist un error evident. «Coincideixen» vol dir que A i B donen el mateix nivell i les dues tenen (o les dues no tenen) cap saber.");
  L.push("");
  L.push("| id | enunciat | A | B | coincideixen |");
  L.push("|---|---|---|---|---|");
  const resumAgent = (p) =>
    p
      ? `${p.ancoratge}${p.sabers.length ? " " + p.sabers.map((s) => s.codi).join("+") : ""} · ${p.nivell_curs}${p.dubte ? " · dubte" : ""}${p.error_evident ? " · ERROR: " + p.error_evident : ""}${p.nota ? " — " + p.nota : ""}`
      : "—";
  let nMarcades = 0;
  q1r.forEach((q) => {
    const pa = ["A", "B"].map((a) => {
      const d = perClau[`${q.materia}-${a}`];
      return d ? d.preguntes.find((p) => p.id === q.id) : null;
    });
    const marcada = pa.some((p) => p && (p.ancoratge === "cap" || p.nivell_curs !== "1r" || p.dubte || p.error_evident));
    if (!marcada) return;
    nMarcades++;
    const coincideix = pa[0] && pa[1] ? (pa[0].nivell_curs === pa[1].nivell_curs && (pa[0].ancoratge === "cap") === (pa[1].ancoratge === "cap") ? "sí" : "no") : "—";
    L.push(`| ${q.id} | ${cel(abreuja(q.pregunta, 70))} | ${cel(resumAgent(pa[0]))} | ${cel(resumAgent(pa[1]))} | ${coincideix} |`);
  });
  L.push("");
  L.push(`Preguntes marcades: ${nMarcades} de ${q1r.length}.`);
  L.push("");

  /* 4. Concordança */
  L.push("## 4. Concordança entre A i B");
  L.push("");
  L.push("Sobre les preguntes on tots dos agents tenen resultat vàlid.");
  L.push("");
  L.push("| matèria | preguntes comparades | mateix nivell | mateix «té saber / no té saber» |");
  L.push("|---|---|---|---|");
  let cT = 0, nT = 0, sT = 0;
  Object.keys(MATERIES).forEach((codi) => {
    const a = perClau[`${codi}-A`];
    const b = perClau[`${codi}-B`];
    if (!a || !b) return L.push(`| ${codi} | — | — | — |`);
    let n = 0, nv = 0, sb = 0;
    a.preguntes.forEach((pa) => {
      const pb = b.preguntes.find((p) => p.id === pa.id);
      if (!pb) return;
      n++;
      if (pa.nivell_curs === pb.nivell_curs) nv++;
      if ((pa.ancoratge === "cap") === (pb.ancoratge === "cap")) sb++;
    });
    cT += n; nT += nv; sT += sb;
    L.push(`| ${codi} | ${n} | ${nv} (${pct(nv, n)}) | ${sb} (${pct(sb, n)}) |`);
  });
  L.push(`| **total** | ${cT} | ${nT} (${pct(nT, cT)}) | ${sT} (${pct(sT, cT)}) |`);
  L.push("");

  /* 5. Cobertura */
  L.push("## 5. Cobertura dels sabers");
  L.push("");
  L.push("Un saber es considera **tocat** si algun agent de l'àrea l'ha assignat a alguna pregunta (directe o indirecte). Es considera **avaluable** si almenys la meitat dels agents de l'àrea diuen «si» o «parcial» (una aplicació amb test, vertader/fals, resposta escrita curta, ordenar i emparellar el podria avaluar). Només es llisten els sabers **no tocats i avaluables**; dels no avaluables només es dona el recompte.");
  const arees = [...new Set(Object.values(MATERIES).map((m) => m.prefix))];
  arees.forEach((prefix) => {
    const matèries = Object.keys(MATERIES).filter((c) => MATERIES[c].prefix === prefix);
    const agents = valids.filter((r) => MATERIES[r.codi].prefix === prefix);
    const sabersArea = [...ctx.sabers.values()].filter((s) => s.prefix === prefix);
    L.push("");
    L.push(`### ${MATERIES[matèries[0]].area} (${prefix}) — matèries: ${matèries.join(", ")}`);
    L.push("");
    if (!agents.length) return L.push("Sense cap agent vàlid d'aquesta àrea.");
    const tocats = new Set();
    agents.forEach((r) => r.dades.preguntes.forEach((p) => p.sabers.forEach((s) => tocats.add(s.codi))));
    const avaluable = (codi) => agents.filter((r) => { const c = r.dades.cobertura.find((x) => x.codi === codi); return c && (c.avaluable === "si" || c.avaluable === "parcial"); }).length * 2 >= agents.length;
    const noTocats = sabersArea.filter((s) => !tocats.has(s.codi));
    const llista = noTocats.filter((s) => avaluable(s.codi));
    const noAval = sabersArea.filter((s) => !avaluable(s.codi));
    L.push(`Agents vàlids de l'àrea: ${agents.map((r) => r.clau).join(", ")} · sabers: ${sabersArea.length} · tocats: ${tocats.size} · no tocats: ${noTocats.length} · no avaluables: ${noAval.length}`);
    L.push("");
    L.push(`**Sabers no tocats per cap lliçó i avaluables (${llista.length}):**`);
    L.push("");
    if (!llista.length) L.push("- (cap)");
    llista.forEach((s) => L.push(`- \`${s.codi}\` (p. ${s.pagina}) ${s.text}`));
  });
  L.push("");

  /* 6. Limitacions */
  L.push("## 6. Limitacions");
  L.push("");
  L.push("- El judici és d'agents d'IA, no d'un mestre.");
  L.push("- Els sabers no distingeixen 1r de 2n.");
  L.push("- Els sabers de llengües són competencials, per la qual cosa «indirecte» és esperable.");
  L.push("- Sense mostreig humà, això NO és una validació.");
  L.push("");

  const sortida = getArg("--informe", path.join(ROOT, "documentos", "informe-ancoratge-1r.md"));
  fs.writeFileSync(sortida, L.join("\n"));
  console.log(`Informe escrit a ${sortida} (${valids.length} agents vàlids de ${res.length}; ${nRevisar} lliçons REVISAR; ${nMarcades} preguntes marcades)`);
}

/* ---------------- ordre principal ---------------- */

const ORDRES = { preparar, comprovar, informe };
if (!ORDRES[ordre]) {
  sortir(
    "Ús:\n  node tools/ancoratge.js preparar  [--dir /tmp/c1]\n  node tools/ancoratge.js comprovar [--dir /tmp/c1] [--resultats <carpeta>]\n" +
      "  node tools/ancoratge.js informe   [--dir /tmp/c1] [--resultats <carpeta>] [--informe <fitxer.md>] [--model <text>] [--consum <text>] [--relancats <text>] [--nota <text>]"
  );
}
ORDRES[ordre]();
