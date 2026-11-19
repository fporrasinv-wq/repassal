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
node tools/exportar-ciego.js --curs 5è --nivell normal --salida /tmp/solucionador/fase2/ciego
```

`--salida` pot ser una carpeta relativa a l'arrel del projecte o una
ruta absoluta (útil per deixar els fitxers **fora** del repositori,
que és el que convé quan els respon una IA que no ha de poder veure
`data/questions.js`).

**Què produeix.** Dins de `tools/ciego/` (carpeta de treball, no es
versiona), un fitxer `.json` per cada lliçó i un
`instruccions-solucionador.md` amb el format exacte que ha de seguir
qui respongui. Entre els camps de cada resposta hi ha `ambigua`,
`altres_opcions_defensables`, `altres_respostes_possibles` i `nota`
(text breu, opcional, per explicar qualsevol problema de la pregunta).

---

## 3. `comparar.js` — corregeix les respostes d'un solucionador

**Què fa.** Un cop algú (o alguna IA) ha respost els fitxers generats
per `exportar-ciego.js`, aquest script compara les seves respostes
amb les respostes reals del banc de preguntes.

**Com es llança.**

```bash
node tools/comparar.js --resultados tools/resultados --curs 5è
node tools/comparar.js --resultados tools/resultados --curs 5è --nivell normal
```

(`--nivell` és opcional: limita la comparació a un nivell, perquè les
preguntes d'altres nivells no surtin com a "no retornades".)

(`tools/resultados` ha de ser una carpeta amb els fitxers `.json` de
respostes, amb el mateix format que explica
`tools/ciego/instruccions-solucionador.md`.)

**Què produeix.** `documentos/informe-solucionador.md`: on ha fallat,
quines preguntes ha marcat com a ambigües (amb la seva `nota`), les
notes que ha deixat en preguntes que no ha marcat com a ambigües, quines
respostes alternatives ha proposat per a preguntes de resposta escrita
que potser caldria afegir, i quines preguntes no ha respost. **Aquest
informe només llista: no corregeix res.** Cada desacord l'ha de revisar
una persona, perquè el desacord pot ser un error de la clau o un error
del solucionador.

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

Opcionalment, `--informe <fitxer.md>` canvia on s'escriu l'informe.

**Què produeix.** Un informe (per defecte
`tools/benchmark/informe-benchmark.md`, que **no es versiona** perquè hi
surten els ids dels mutants i les seves claus) amb:

- detecció per tipus de mutació, i per quina via s'ha detectat
  (resposta diferent de la clau sembrada, o marca d'ambigua);
- falses alarmes sobre els controls, **desglossades per tipus de
  pregunta**;
- per a cada mutant no detectat i cada fals alarma: la resposta del
  solucionador, la clau (sembrada i original) i la seva `nota`;
- el veredicte del **llindar** (detecció >= 90% en `test-clau-canviada`,
  `veritat-fals-invertit` i `ordenar-elements-intercanviats`, i falses
  alarmes <= 10% sobre els controls).

Els mutants `test-opcio-duplicada` i `emparellar-dreta-duplicada` es
mostren a part i **no compten per al llindar**: els detecta
`validar.js`, no cal que els detecti el solucionador.

Cal saber que a 5è no hi surt cap mutant `aritmetica-numero-alterat`
(no hi ha preguntes amb el patró "a op b" exacte) i que només hi ha 7
preguntes `ordenar` en tot el curs: amb 7 mutants, el 90% exigeix
detectar-los tots 7.

---

## 6. `prompt-solucionador.md` — l'encàrrec literal als agents

**Què és.** El text exacte (en castellà, tal com el reben els agents)
que es dona a cada agent solucionador, amb les rutes per substituir. El
guardem perquè la prova sigui repetible. No porta cap pista de quines
preguntes són mutants ni que hi ha errors sembrats.

**Com s'usa.** Es copia el text, es substitueixen `{CURS}`,
`{CARPETA}`, `{FITXERS}` i `{RESULTATS}`, i es dona a un agent
independent. Les regles d'independència (carpetes fora del repo, un
lot per agent, descartar resultats si l'agent ha llegit el repo) són
al propi fitxer i al pas a pas de
`documentos/informe-calibracio-solucionador.md`.

---

## 7. `provar-resposta.js` — prova la correcció de les respostes escrites

**Què fa.** Comprova, sense navegador, com corregeix l'app les preguntes
de tipus `resposta_escrita`. Extreu d'`app.js` el bloc que hi ha entre els
marcadors `>>> correcció de resposta_escrita` i `<<< fi de la correcció de
resposta_escrita` (funcions pures, sense DOM) i l'executa en un entorn
aïllat de Node: és exactament el mateix text que fa servir l'app, no una
còpia. Per això cal no esborrar aquests marcadors ni posar-hi codi que
necessiti el navegador. Fa cinc grups de proves sobre les 74 preguntes
`resposta_escrita` dels 4 cursos: (a) que la clau i cada resposta acceptada
segueixin essent acceptades; (b) que s'acceptin un article inicial ("el
25%", "L'euro") i la unitat darrere d'un número ("18 cm"); (c) que es
rebutgin les respostes que no s'han d'acceptar ("18 m", "19", "to swim", un
article sol, una resposta buida); (d) un control negatiu automàtic, que
posa com a resposta d'una pregunta la clau de les altres i comprova que
cap resposta nova és acceptada; (e) un escombrat d'unitats sobre totes les
claus numèriques. Les regles són: s'ignora un article inicial (el, la, els,
les, l', un, una, los, las, the, a, an) però mai si la resposta queda buida;
una unitat només es tolera darrere d'un número i si surt a l'enunciat (si
l'enunciat diu "(en cm²)", només aquesta); "%" i "per cent" només si la clau
acaba en %. Les preguntes amb `conjunt` no canvien.

**Com es llança.**

```bash
node tools/provar-resposta.js
```

**Què produeix.** Un llistat per pantalla amb OK/FALLA per cada prova i el
recompte final. Surt amb codi 1 si alguna falla, així que serveix per
comprovar-ho abans d'unir qualsevol canvi a `app.js` o a les respostes
acceptades. No modifica cap fitxer.

---

## 8. `ancoratge.js` — ancoratge curricular de les lliçons de 1r

**Què fa.** Mesura fins a quin punt les 144 preguntes de 1r (24 lliçons)
estan ancorades als sabers oficials del cicle inicial
(`documentos/curriculum-cicle-inicial.md`, 166 sabers de 1r i 2n) i si el
seu nivell és adequat per a 1r, i detecta quins sabers no toca cap lliçó.
És **només un diagnòstic**: no canvia cap pregunta ni `data/questions.js`;
els resultats són per a revisió humana. El judici el fan agents d'IA
independents (dos per matèria, A i B, que no es veuen entre ells), amb
l'encàrrec literal de `tools/prompt-ancoratge.md`. Té tres subcomandes:

- `preparar` crea, **fora del repositori**, `/tmp/c1/<matèria>/`
  (`curriculum.md` amb només la secció de l'àrea, `preguntes.json` sense
  dificultat, nivell, origen, cicle ni explicació, i `instruccions.md`) i
  els prompts ja omplerts a `/tmp/c1/prompts/`.
- `comprovar` valida els JSON dels agents (`/tmp/c1/resultats/`): format,
  que hi sigui cada pregunta una sola vegada, que cada codi de saber
  existeixi i la cita coincideixi amb el principi del seu text, que
  «cap» vulgui dir sense sabers, que hi hagi nota quan cal, i que la
  cobertura tingui tots els sabers de l'àrea. També mostra els fitxers que
  cada agent diu que ha llegit, per comprovar l'aïllament.
- `informe` escriu `documentos/informe-ancoratge-1r.md` (recompte per
  ancoratge i nivell, lliçons a REVISAR segons els llindars de la constant
  `LLINDARS`, preguntes marcades, concordança entre A i B i sabers sense
  cobrir).

**Com repetir-ho, pas a pas.**

```bash
node tools/ancoratge.js preparar
```

Llança 12 agents (A i B de `mat`, `cat`, `cas`, `eng`, `soc` i `nat`), un
per cada prompt de `/tmp/c1/prompts/`, com a màxim 6 alhora i amb un model
diferent del que edita el contingut. Mira a les transcripcions que cap
agent no ha llegit res fora de la seva carpeta (ni `data/questions.js`, ni
resultats d'altres agents); si ho ha fet, descarta el seu resultat i
repeteix aquell agent.

```bash
node tools/ancoratge.js comprovar
node tools/ancoratge.js informe --model "..." --consum "..." --relancats "..."
```

Relança una sola vegada els agents el resultat dels quals sigui invàlid. Els
agents poden donar respostes lleugerament diferents cada vegada, així que no
esperis un informe idèntic en repetir-ho.

---

## Un flux de treball típic

1. `node tools/validar.js` — revisió ràpida, sense dependre de ningú
   més.
2. Si vols que algú (o una IA) repassi el contingut de debò:
   `exportar-ciego.js` → es respon → `comparar.js`.
3. Si vols saber si aquest "algú" realment s'adona quan alguna cosa
   està malament: `sembrar-fallos.js` → es responen les 120 preguntes
   barrejades → `medir-benchmark.js`. Només si supera el llindar té
   sentit fiar-se'n per a l'auditoria real (pas 2).

El pas a pas complet, amb el que es va fer i els resultats de la
primera calibració, és a
`documentos/informe-calibracio-solucionador.md`.

## Carpetes que no es versionen

`tools/ciego/`, `tools/resultados/` i el contingut de
`tools/benchmark/` (excepte el seu README) són dades de treball que es
regeneren executant els scripts — per això estan a `.gitignore`. Els
informes finals (`documentos/informe-*.md`) sí que es versionen, **excepte**
l'informe del benchmark (`tools/benchmark/informe-benchmark.md`), que
conté ids i claus dels mutants i viu dins la carpeta no versionada.

Compte: `tools/resultados/` ha de contenir només els resultats d'una
mateixa prova. Els scripts llegeixen tots els `.json` de la carpeta i,
si hi barreges els resultats del benchmark amb els d'una auditoria
real, les respostes de les preguntes amb el mateix id se sobreescriuen
entre elles. Buida la carpeta entre una prova i l'altra.
