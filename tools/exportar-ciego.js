#!/usr/bin/env node
/* tools/exportar-ciego.js — genera, per a cada lliçó d'un curs (i nivell
   opcional), un fitxer JSON "cec": les preguntes amb les opcions/elements
   barrejats però SENSE cap clau de resposta. Pensat per donar-lo a
   algú (o alguna cosa) que hagi de respondre sense haver vist mai
   data/questions.js. Veure tools/README.md. */

const fs = require("fs");
const path = require("path");
const { carregarDades, arrel } = require("./lib/dades");
const { mulberry32, shuffleAmbRng } = require("./lib/text");

const args = process.argv.slice(2);
function getArg(name) {
  const i = args.indexOf(name);
  return i !== -1 ? args[i + 1] : null;
}
const curs = getArg("--curs");
const nivellFiltre = getArg("--nivell");
const sortidaDir = getArg("--salida") || "tools/ciego";

if (!curs) {
  console.error("Cal indicar --curs <curs>, p. ex. node tools/exportar-ciego.js --curs 5è");
  process.exit(2);
}

const ROOT = arrel();
const { QUESTIONS, LESSON_META } = carregarDades();

let seleccionades = QUESTIONS.filter((q) => q.curs === curs && !q.id.startsWith("TEST_"));
if (nivellFiltre) seleccionades = seleccionades.filter((q) => q.nivell === nivellFiltre);

if (seleccionades.length === 0) {
  console.error(`No s'ha trobat cap pregunta per a curs="${curs}"${nivellFiltre ? ` nivell="${nivellFiltre}"` : ""}.`);
  process.exit(2);
}

// --salida pot ser una ruta absoluta (p. ex. una carpeta fora del repo) o relativa a l'arrel
const outDir = path.isAbsolute(sortidaDir) ? sortidaDir : path.join(ROOT, sortidaDir);
fs.mkdirSync(outDir, { recursive: true });

const rng = mulberry32(42); // llavor fixa: reproduïble entre execucions

function preguntaCega(q) {
  const base = { id: q.id, tipus: q.tipus, pregunta: q.pregunta };
  if (q.text) base.text = q.text;
  if (q.tipus === "test") {
    base.opcions = shuffleAmbRng(q.opcions, rng);
  } else if (q.tipus === "ordenar") {
    base.elements = shuffleAmbRng(q.elements_ordre_correcte, rng);
  } else if (q.tipus === "emparellar") {
    base.part_esquerra = shuffleAmbRng(q.parelles.map((p) => p.a), rng);
    base.part_dreta = shuffleAmbRng(q.parelles.map((p) => p.b), rng);
  }
  // veritat_fals i resposta_escrita no necessiten cap camp extra:
  // la pregunta sola ja és tot el que es pot mostrar sense clau.
  return base;
}

const grups = {};
seleccionades.forEach((q) => {
  const key = `${q.curs}__${q.materia}__${q.tema}__${q.nivell}`;
  grups[key] = grups[key] || { curs: q.curs, materia: q.materia, tema: q.tema, nivell: q.nivell, preguntes: [] };
  grups[key].preguntes.push(preguntaCega(q));
});

let fitxersGenerats = 0;
Object.values(grups).forEach((lliçó) => {
  const nomFitxer = `${lliçó.curs}__${lliçó.materia}__${lliçó.tema.replace(/[^a-zA-Z0-9]+/g, "-")}__${lliçó.nivell}.json`;
  fs.writeFileSync(path.join(outDir, nomFitxer), JSON.stringify(lliçó, null, 2));
  fitxersGenerats++;
});

const instruccions = `# Instruccions per al solucionador

Tens a aquesta mateixa carpeta un fitxer JSON per cada lliçó. Cada
fitxer té aquesta forma:

\`\`\`json
{
  "curs": "5è",
  "materia": "mat",
  "tema": "Nombres decimals",
  "nivell": "normal",
  "preguntes": [
    { "id": "...", "tipus": "test", "pregunta": "...", "opcions": ["...", "...", "...", "..."] },
    { "id": "...", "tipus": "veritat_fals", "pregunta": "..." },
    { "id": "...", "tipus": "resposta_escrita", "pregunta": "..." },
    { "id": "...", "tipus": "ordenar", "pregunta": "...", "elements": ["...", "..."] },
    { "id": "...", "tipus": "emparellar", "pregunta": "...", "part_esquerra": ["...", "..."], "part_dreta": ["...", "..."] }
  ]
}
\`\`\`

**Important: NO has de llegir \`data/questions.js\` ni cap altre fitxer
fora d'aquesta carpeta de treball.** Has de respondre només amb el que
veus en aquests fitxers JSON, com faria un alumne del curs indicat.

## Format de la resposta esperada

Per cada fitxer d'entrada, genera un fitxer de sortida amb el mateix
nom que repliqui aquesta estructura:

\`\`\`json
{
  "curs": "5è",
  "materia": "mat",
  "tema": "Nombres decimals",
  "nivell": "normal",
  "respostes": [
    {
      "id": "...",
      "resposta": "<la teva resposta>",
      "ambigua": false,
      "altres_opcions_defensables": [],
      "altres_respostes_possibles": [],
      "nota": ""
    }
  ]
}
\`\`\`

Per a cada pregunta:
- **"resposta"**: la teva resposta.
  - \`test\`: el text exacte de l'opció triada (tal com apareix a "opcions").
  - \`veritat_fals\`: \`true\` o \`false\`.
  - \`resposta_escrita\`: el text que escriuries.
  - \`ordenar\`: la llista d'"elements" en l'ordre que creus correcte.
  - \`emparellar\`: una llista de parelles \`{"a": "...", "b": "..."}\`
    amb els elements de "part_esquerra" i "part_dreta" que creus que
    van junts.
- **"ambigua"**: posa \`true\` si creus que més d'una opció és
  defensable (per exemple, dues respostes semblen igual de vàlides).
- **"altres_opcions_defensables"**: si "ambigua" és \`true\`, quines
  altres opcions (test) o respostes consideres també vàlides, i per
  què (una frase breu).
- **"altres_respostes_possibles"** (només per a \`resposta_escrita\`):
  altres maneres en què un alumne d'aquest curs podria escriure
  correctament la mateixa resposta — sinònims, variants ortogràfiques
  raonables, amb o sense unitats, ordre diferent si la resposta és una
  llista, etc. Deixa-ho buit si no se t'acut cap alternativa raonable.
- **"nota"** (opcional, text breu): si la pregunta té algun problema
  (ambigua, imprecisa, més d'una resposta defensable, cap opció
  correcta...), explica'l aquí en una o dues frases. Deixa-ho buit
  ("") si no hi ha cap problema.

Desa els fitxers de sortida a la carpeta de resultats que se't
indiqui, amb el mateix nom que el fitxer d'entrada.
`;

fs.writeFileSync(path.join(outDir, "instruccions-solucionador.md"), instruccions);

console.log(`Generats ${fitxersGenerats} fitxers de lliçó a ${outDir}/`);
console.log(`Preguntes totals exportades: ${seleccionades.length}`);
console.log(`Instruccions per al solucionador: ${path.join(outDir, "instruccions-solucionador.md")}`);
