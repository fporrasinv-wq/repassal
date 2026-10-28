# tools/ — eines per revisar el contingut, sense IA

Aquesta carpeta conté programes petits (scripts de Node.js, sense cap
dependència externa que calgui instal·lar) per comprovar la qualitat
del banc de preguntes (`data/questions.js`) de forma automàtica i
repetible. **Cap d'aquests scripts modifica `data/questions.js`**:
només el llegeixen i escriuen informes a `documentos/` o fitxers de
treball dins de `tools/`.

Es llancen a mà, des d'un terminal, dins de la carpeta del projecte.
Cal tenir Node.js instal·lat (el mateix que ja fa falta per als tests
del projecte); no cal instal·lar res més (`npm install` no fa falta).

A sota tens, per a cada script: què fa, com es llança, i què produeix.

---

## 1. `validar.js` — el corrector automàtic del contingut

**Què fa.** Repassa totes les preguntes buscant dos tipus de
problemes:

- **Errors** (cosa que cal arreglar sí o sí: camps que falten, ids
  repetits, una resposta que no existeix entre les opcions, un test
  amb menys de 3 o més de 5 opcions, una operació matemàtica mal
  calculada...). Si en troba algun, l'script acaba amb un codi de
  sortida d'error (útil per aturar un procés automàtic, encara que
  normalment el llançaràs tu a mà).
- **Avisos** (coses que no trenquen res però que val la pena que una
  persona hi doni un cop d'ull: preguntes molt semblants entre si —o
  idèntiques en enunciat i contingut—, un test amb 3 o 5 opcions en
  lloc de 4, uns elements repetits dins un "ordenar", un veritat/fals
  massa desequilibrat, una pregunta que conté paraules com "sempre" o
  "mai" quan la resposta és "fals", etc.).

Els duplicats (exactes o "quasi") es detecten mirant tant l'enunciat
com el contingut propi de cada tipus (opcions i resposta en un test,
elements en un ordenar, parelles en un emparellar): dues preguntes amb
el mateix enunciat genèric però contingut diferent (p. ex. dos
"Ordena les paraules per formar una frase." amb frases diferents) no
es marquen com a duplicades.

**Com es llança.**

```bash
node tools/validar.js
node tools/validar.js --curs 5è   # només aquest curs
```

**Què produeix.** Un resum per pantalla i un informe complet a
`documentos/informe-validacio.md` (aquest fitxer sí que es versiona,
perquè és un informe, no una dada de treball).

---

## 2. `exportar-ciego.js` — prepara preguntes "a cegues" per a algú que les respongui

**Què fa.** Agafa totes les preguntes d'un curs (i, si vols, d'un
nivell concret) i en genera una còpia "cega": amb l'enunciat i les
opcions (barrejades), però **sense cap resposta correcta**. Serveix
per donar-les a algú —o a una altra IA— perquè les respongui com ho
faria un alumne, sense haver vist mai el fitxer de respostes.

**Com es llança.**

```bash
node tools/exportar-ciego.js --curs 5è
node tools/exportar-ciego.js --curs 5è --nivell normal --salida tools/ciego
```

**Què produeix.** Dins de `tools/ciego/` (carpeta de treball, no es
versiona), un fitxer `.json` per cada lliçó i un
`instruccions-solucionador.md` amb el format exacte que ha de seguir
qui respongui.

---

## 3. `comparar.js` — corregeix les respostes d'un solucionador

**Què fa.** Un cop algú (o alguna IA) ha respost els fitxers generats
per `exportar-ciego.js`, aquest script compara les seves respostes
amb les respostes reals del banc de preguntes.

**Com es llança.**

```bash
node tools/comparar.js --resultados tools/resultados --curs 5è
```

(`tools/resultados` ha de ser una carpeta amb els fitxers `.json` de
respostes, amb el mateix format que explica
`tools/ciego/instruccions-solucionador.md`.)

**Què produeix.** `documentos/informe-solucionador.md`: on ha fallat,
quines preguntes ha marcat com a ambigües, quines respostes
alternatives ha proposat per a preguntes de resposta escrita que
potser caldria afegir, i quines preguntes no ha respost.

**Validat amb un solucionador real (Bloc V2).** Aquest flux
(`exportar-ciego.js` → respondre → `comparar.js`) s'havia construït
però mai s'havia executat de cap a cap amb algú responent de debò.
Al Bloc V2 es va provar amb un solucionador honest (sense llegir
`data/questions.js`) sobre dues lliçons de 1r (12 preguntes, tipus
test/veritat_fals/resposta_escrita/ordenar): 12/12 encerts, 0
discrepàncies, 0 ambigües. El camp `altres_respostes_possibles` va
funcionar com cal: per a "Quants ous hi ha? 🥚×12" el solucionador va
proposar "dotze" com a alternativa raonable no coberta encara per
`respostes_acceptades` — exactament el tipus de senyal que aquest
script hauria de donar. Detall complet a `documentos/avances.md`.

---

## 4. `sembrar-fallos.js` — "sembra" errors a propòsit per posar a prova el corrector

**Què fa.** Perquè els altres scripts tinguin sentit, cal demostrar
que realment detecten errors quan n'hi ha. Aquest script agafa 60
preguntes d'un curs i en fa versions "trencades" a propòsit (per
exemple, canviant la resposta correcta d'un test per un distractor, o
invertint un veritat/fals), i agafa 60 preguntes més que deixa tal
qual (controls). Ho barreja tot sense dir quines són quines.

Fa servir sempre la mateixa "llavor" (seed) aleatòria, així que si el
tornes a executar amb el mateix curs obtindràs exactament les
mateixes 120 preguntes i els mateixos errors sembrats — és
reproduïble.

**Com es llança.**

```bash
node tools/sembrar-fallos.js --curs 4t
```

**Què produeix.** Dins de `tools/benchmark/` (no es versiona, excepte
el seu propi README): `preguntes-cegues.json` (les 120 barrejades,
sense pistes de quines estan trencades), `mutantes.json` i
`controles.json` (el mateix desglossat, per si vols mirar-t'ho),
i `claves.json` (la "solució" per poder corregir-ho després amb
`medir-benchmark.js`).

---

## 5. `medir-benchmark.js` — mesura si un solucionador detecta els errors sembrats

**Què fa.** Agafa les respostes que algú ha donat sobre el conjunt
barrejat de `sembrar-fallos.js` i calcula dues coses: quants dels
errors sembrats ha detectat (per cada tipus d'error), i quantes
"falses alarmes" ha donat sobre preguntes que en realitat estaven bé.

**Com es llança.**

```bash
node tools/medir-benchmark.js --resultados tools/resultados
```

**Què produeix.** `documentos/informe-benchmark.md` amb les
estadístiques de detecció i la llista d'ids no detectats.

---

## Un flux de treball típic

1. `node tools/validar.js` — revisió ràpida, sense dependre de ningú
   més.
2. Si vols que algú (o una IA) repassi el contingut de debò:
   `exportar-ciego.js` → es respon → `comparar.js`.
3. Si vols saber si aquest "algú" realment s'adona quan alguna cosa
   està malament: `sembrar-fallos.js` → es responen les 120 preguntes
   barrejades → `medir-benchmark.js`.

## Carpetes que no es versionen

`tools/ciego/`, `tools/resultados/` i el contingut de
`tools/benchmark/` (excepte el seu README) són dades de treball que es
regeneren executant els scripts — per això estan a `.gitignore`. Els
informes finals (`documentos/informe-*.md`) sí que es versionen.
