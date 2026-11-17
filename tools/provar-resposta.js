#!/usr/bin/env node
/* tools/provar-resposta.js — prova, sense navegador, la correcció de les
   preguntes resposta_escrita d'app.js. Extreu d'app.js el bloc delimitat
   pels marcadors "correcció de resposta_escrita" (funcions pures, sense
   DOM) i l'executa en un sandbox de Node: és exactament el text que fa
   servir l'app. No modifica res (ni data/questions.js ni app.js).
   Surt amb codi 1 si alguna prova falla. Veure tools/README.md. */

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { carregarDades, arrel } = require("./lib/dades");

const ROOT = arrel();
const font = fs.readFileSync(path.join(ROOT, "app.js"), "utf8");
const INICI = "/* >>> correcció de resposta_escrita";
const FI = "/* <<< fi de la correcció de resposta_escrita */";
const i0 = font.indexOf(INICI);
const i1 = font.indexOf(FI);
if (i0 === -1 || i1 === -1 || i1 < i0) {
  console.error("No trobo els marcadors de la correcció de resposta_escrita a app.js.");
  process.exit(2);
}
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(
  font.slice(i0, i1) + "\nthis.nova = respostaEscritaCorrecta; this.normalizeAnswer = normalizeAnswer; this.answerSetsMatch = answerSetsMatch;",
  sandbox
);
const { nova, normalizeAnswer, answerSetsMatch } = sandbox;

// Comportament anterior de checkAnswer() (Bloc V3, abans de V3b), per comparar
const antiga = (q, val) =>
  q.conjunt
    ? q.respostes_acceptades.some((a) => answerSetsMatch(a, val))
    : q.respostes_acceptades.some((a) => normalizeAnswer(a) === normalizeAnswer(val));

const { QUESTIONS } = carregarDades();
const RE = QUESTIONS.filter((q) => q.tipus === "resposta_escrita");
const NORMALS = RE.filter((q) => !q.conjunt);
const perId = (id) => QUESTIONS.find((q) => q.id === id);

let fallades = 0;
const ok = (cond, text) => {
  if (!cond) fallades++;
  console.log((cond ? "  OK     " : "  FALLA  ") + text);
};
const cap = (t) => console.log("\n=== " + t + " ===");

console.log(`resposta_escrita: ${RE.length} (${NORMALS.length} normals + ${RE.length - NORMALS.length} amb "conjunt") de ${QUESTIONS.length} preguntes`);

/* a) Regressió: la clau i cada resposta acceptada segueixen essent acceptades */
cap("a) Regressió: claus i respostes acceptades segueixen acceptades");
{
  let formes = 0;
  const mal = [];
  RE.forEach((q) => {
    [q.resposta_correcta, ...q.respostes_acceptades].forEach((f) => {
      formes++;
      if (!nova(q, f)) mal.push(q.id + " " + JSON.stringify(f));
    });
  });
  ok(mal.length === 0, `${RE.length} preguntes, ${formes} formes (claus + acceptades): ${formes - mal.length} acceptades, ${mal.length} rebutjades ${mal.length ? JSON.stringify(mal) : ""}`);
  const dif = [];
  RE.forEach((q) => q.respostes_acceptades.forEach((f) => { if (antiga(q, f) !== true) dif.push(q.id + " " + f); }));
  ok(dif.length === 0, "el comportament anterior també les acceptava totes (cap acceptada era ja rebutjada)");
}

/* b) Noves acceptades */
cap("b) Noves acceptades (abans eren rebutjades)");
const casosB = [
  ["5è_mat-5-4_q2", "18 cm"],
  ["5è_mat-5-4_q2", "18cm"],
  ["5è_mat-5-4_q4", "20 cm²"],
  ["5è_mat-5-4_q4", "20cm²"],
  ["5è_mat-5-4_q4", "20 cm2"],
  ["5è_mat-5-2_q2", "el 25%"],
  ["5è_mat-5-2_q2", "25 per cent"],
  ["5è_mat-5-2_q2", "25 por ciento"],
  ["5è_eng-5-5_q2", "a question mark"],
  ["5è_eng-5-5_q2", "the question mark"],
  ["6è_mat-6-3_q5", "20 €"],
  ["6è_mat-6-3_q5", "20 euros"],
  ["6è_soc-6-4_q2", "euro"],
  ["6è_soc-6-4_q2", "L’euro"]
];
// Llista mínima: la mateixa pregunta sense les respostes acceptades amb article o amb unitat (la clau es conserva sempre),
// per comprovar que la regla sola ja les resol (i no només les formes afegides a mà al Bloc V3)
const ARTICLE = /^(?:(?:el|la|els|les|los|las|un|una|the|an|a)\s+|l['’])/i;
const AMB_UNITAT = /\d\s*(?:cm²|cm2|m²|m2|km|kg|cm|ml|m|g|l|€|euros|%|per cent|por ciento)$/i;
const minima = (q) => ({
  ...q,
  respostes_acceptades: q.respostes_acceptades.filter((a) => a === q.resposta_correcta || (!ARTICLE.test(a.trim()) && !AMB_UNITAT.test(a.trim())))
});
casosB.forEach(([id, v]) => {
  const q = perId(id);
  const m = minima(q);
  ok(
    nova(q, v) && nova(m, v),
    `${id} ${JSON.stringify(v)} -> acceptada (llista real: sí; només amb la regla, sense les formes afegides a mà: ${nova(m, v) ? "sí" : "NO"}; codi anterior: ${antiga(m, v) ? "sí" : "no"})`
  );
});
// Les acceptades afegides al Bloc V3 ja hi eren i s'han de mantenir; les d'article que ja no calen, també
{
  // simulem una pregunta sense les formes amb article perquè es vegi que la regla sola ho resol
  const q = { id: "SINTETICA", pregunta: "Quin tipus de text explica com és algú?", resposta_correcta: "Text descriptiu", respostes_acceptades: ["Text descriptiu"] };
  ok(nova(q, "El text descriptiu"), 'sintètica: clau "Text descriptiu", resposta "El text descriptiu" -> acceptada');
  ok(nova(q, "un text descriptiu"), 'sintètica: "un text descriptiu" -> acceptada');
  const q2 = { id: "SINTETICA2", pregunta: "Quin tipus de text explica com és algú?", resposta_correcta: "La descripció", respostes_acceptades: ["La descripció"] };
  ok(!nova(q2, "El text descriptiu"), 'sintètica: clau "La descripció", resposta "El text descriptiu" -> rebutjada (és contingut, no article)');
  ok(nova(q2, "descripcio") && nova(q2, "Una descripció") && nova(q2, "la descripció"), 'sintètica: "descripcio", "Una descripció", "la descripció" -> acceptades');
}
// Inserir un article davant de qualsevol clau ha de ser acceptat (no distingeix gènere)
{
  let n = 0, mal = [];
  NORMALS.forEach((q) => {
    const clau = String(q.resposta_correcta);
    ["el ", "la ", "l'", "un ", "the "].forEach((a) => {
      if (/^(?:el|la|els|les|los|las|un|una|the|an|a)\s|^l['’]/i.test(clau)) return; // ja en porta
      n++;
      if (!nova(q, a + clau)) mal.push(q.id + " " + a + clau);
    });
  });
  ok(mal.length === 0, `article davant de la clau acceptat: ${n - mal.length}/${n} ${mal.length ? JSON.stringify(mal.slice(0, 8)) : ""}`);
}

/* c) Rebutjades */
cap("c) Rebutjades (obligatori)");
const casosC = [
  ["5è_mat-5-4_q2", "18 m", "unitat que no surt a l'enunciat (perímetre en cm)"],
  ["5è_mat-5-4_q2", "18 cm2", "unitat d'àrea en una pregunta en cm"],
  ["5è_mat-5-4_q4", "20 cm", "àrea en cm en una pregunta en cm² (cm surt a '5 cm de base')"],
  ["5è_mat-5-4_q2", "18 kg", "unitat de pes"],
  ["5è_soc-5-3_q2", "19", "resposta errònia"],
  ["5è_soc-5-3_q2", "el 19", "article + resposta errònia"],
  ["5è_eng-5-1_q2", "to swim", "forma no demanada"],
  ["1r_mat-2_q3", "16%", "% en una pregunta que no és un percentatge"],
  ["6è_mat-6-2_q1", "20%", "10% de 200 = 20, no 20%"],
  ["6è_mat-6-2_q1", "20 per cent", "idem"],
  ["5è_mat-5-2_q2", "30%", "percentatge erroni"]
];
casosC.forEach(([id, v, per]) => ok(!nova(perId(id), v), `${id} ${JSON.stringify(v)} -> rebutjada (${per})`));
{
  const mal = [];
  RE.forEach((q) => ["el", "la", "els", "les", "los", "las", "un", "una", "the", "an", "a", "l'", "L’"].forEach((v) => { if (nova(q, v) && !antiga(q, v)) mal.push(q.id + " " + v); }));
  ok(mal.length === 0, `article sol ("el", "la", "a", "an"...) a les ${RE.length} preguntes: cap nova acceptació ${mal.length ? JSON.stringify(mal) : ""}`);
  const buides = RE.filter((q) => nova(q, "") || nova(q, "   "));
  ok(buides.length === 0, `resposta buida o d'espais a les ${RE.length} preguntes: rebutjada a totes ${buides.length ? JSON.stringify(buides.map((q) => q.id)) : ""}`);
}
// "conjunt": no ha de canviar
{
  const q = perId("5è_mat-5-3_q4");
  const sondes = ["1, 2, 5 i 10", "10 5 2 1", "1,2,5,10", "1 2 5", "el 1, 2, 5 i 10", "1, 2, 5, 10, 20", "1 cm 2 5 10", "", "la"];
  const dif = sondes.filter((s) => nova(q, s) !== antiga(q, s));
  ok(q.conjunt === true && dif.length === 0, `"conjunt" (5è_mat-5-3_q4): ${sondes.length} sondes, resultat idèntic al d'abans (${dif.length} diferències)`);
}

/* d) Control negatiu automàtic: la clau d'una altra pregunta no s'ha d'acceptar */
cap("d) Control negatiu: clau d'una altra pregunta com a resposta de l'alumne");
{
  const lliço = (q) => [q.curs, q.materia, q.tema, q.nivell].join("|");
  const materia = (q) => [q.curs, q.materia].join("|");
  let deLliço = 0, deMateria = 0, sense = 0, sondes = 0;
  const sensePar = [];
  const falsesNoves = [], jaAcceptades = [];
  NORMALS.forEach((q) => {
    let altres = RE.filter((r) => r.id !== q.id && lliço(r) === lliço(q));
    if (altres.length) deLliço++;
    else {
      altres = RE.filter((r) => r.id !== q.id && materia(r) === materia(q));
      if (altres.length) deMateria++;
      else { sense++; sensePar.push(q.id); return; }
    }
    altres.forEach((r) => {
      sondes++;
      const v = String(r.resposta_correcta);
      if (nova(q, v)) (antiga(q, v) ? jaAcceptades : falsesNoves).push(q.id + " <- clau de " + r.id + " " + JSON.stringify(v));
    });
  });
  console.log(`  ${NORMALS.length} preguntes: ${deLliço} amb altres de la mateixa lliçó, ${deMateria} només de la mateixa matèria i curs, ${sense} sense cap altra (${sensePar.join(", ") || "-"}); ${sondes} sondes`);
  ok(falsesNoves.length === 0, `falses acceptacions NOVES (les accepta la regla nova i l'anterior no): ${falsesNoves.length} ${falsesNoves.length ? JSON.stringify(falsesNoves) : ""}`);
  console.log(`  (informatiu) ja acceptades abans de V3b, perquè dues preguntes tenen la mateixa clau: ${jaAcceptades.length}`);
  jaAcceptades.forEach((c) => console.log("      " + c));

  // ampliació: totes les formes acceptades d'altres preguntes de tot el banc (4 cursos)
  const noves = [];
  let n = 0;
  NORMALS.forEach((q) => RE.forEach((r) => {
    if (r.id === q.id) return;
    [r.resposta_correcta, ...r.respostes_acceptades].forEach((f) => {
      n++;
      if (nova(q, f) && !antiga(q, f)) noves.push(q.id + " <- " + r.id + " " + JSON.stringify(f));
    });
  }));
  ok(noves.length === 0, `ampliació a tot el banc (${n} sondes: totes les formes de les altres preguntes): acceptacions noves ${noves.length} ${noves.length ? JSON.stringify(noves.slice(0, 10)) : ""}`);
}

/* e) Escombrat d'unitats: només s'han d'acceptar les esperades */
cap("e) Escombrat d'unitats sobre claus numèriques (número + unitat)");
{
  const unitats = ["cm", "cm²", "cm2", "m", "m²", "m2", "km", "kg", "g", "l", "ml", "€", "euros", "%", "per cent", "por ciento"];
  const nombre = /^-?\d+(?:[.,]\d+)?$/;
  const acceptades = [];
  let sondes = 0;
  NORMALS.forEach((q) => {
    const clau = String(q.resposta_correcta).trim();
    if (!nombre.test(clau)) return;
    unitats.forEach((u) => ["", " "].forEach((sep) => {
      sondes++;
      const v = clau + sep + u;
      if (nova(minima(q), v)) acceptades.push(q.id + " " + JSON.stringify(v));
    }));
  });
  const esperades = [
    "4t_mat-6_q3 cm", "4t_mat-6_q7 cm²", "4t_mat-6_q7 cm2", "5è_mat-5-4_q2 cm", "5è_mat-5-4_q4 cm²", "5è_mat-5-4_q4 cm2", "6è_mat-6-3_q5 €", "6è_mat-6-3_q5 euros"
  ];
  const trobades = [...new Set(acceptades.map((s) => { const m = s.match(/^(\S+) "-?[\d.,]+\s?(.*)"$/); return m[1] + " " + m[2]; }))].sort();
  console.log(`  ${sondes} sondes (amb la llista mínima, perquè es vegi només la regla); combinacions número+unitat acceptades: ${trobades.length}`);
  trobades.forEach((t) => console.log("      " + t));
  ok(JSON.stringify(trobades) === JSON.stringify(esperades.slice().sort()), "són exactament les esperades (unitat de l'enunciat; '(en cm²)' fixa cm²)");
  // percentatges: només si la clau acaba en %
  const pct = NORMALS.filter((q) => /%\s*$/.test(String(q.resposta_correcta).trim()));
  console.log(`  preguntes amb clau en %: ${pct.map((q) => q.id).join(", ")}`);
  pct.forEach((q) => ["25 %", "25%", "25 per cent", "25 por ciento", "el 25%"].forEach((v) => ok(nova(q, v), `${q.id} ${JSON.stringify(v)} -> acceptada`)));
}

console.log(`\n${fallades === 0 ? "TOTES LES PROVES OK" : "PROVES FALLADES: " + fallades}`);
process.exit(fallades === 0 ? 0 : 1);
