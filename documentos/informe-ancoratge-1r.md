# Informe d'ancoratge curricular de 1r

Generat: 2026-11-19T00:08:48.586Z
Preguntes: 144 (24 lliçons de 1r) · Currículum: `documentos/curriculum-cicle-inicial.md` (166 sabers del cicle inicial, 1r i 2n)

**Només diagnòstic: no s'ha canviat cap pregunta. Les marques i els desacords són per a revisió humana.**

## 1. Resum

- Model dels agents: claude-opus-5-5 (sol·licitat «opus»; model servit segons les transcripcions dels 12 agents; el model que edita el repositori és un altre: Claude Sonnet 5.5)
- Consum: ≈ 1,07 milions d'unitats segons el comptador de l'eina (12 agents, entre 50 i 101 s cadascun; no distingeix entrada, sortida ni memòria cau)
- Agents amb resultat vàlid: 12 de 12
- Relançaments: 0 (els 12 resultats van ser vàlids a la primera)
- Aïllament: a les transcripcions cap agent no ha llegit res fora de la seva carpeta (ni el repositori, ni data/questions.js, ni resultats d'altres agents); alguns han creat un script auxiliar a la carpeta temporal de la sessió, fora del repositori i de /tmp/c1. Els agents d'una mateixa matèria (A i B) van treballar alhora i sense veure's.

Recompte de preguntes per ancoratge i per nivell dins del cicle, per agent (ancoratge: directe/indirecte/cap; nivell: 1r/2n/més enllà/sota 1r):

| agent | directe | indirecte | cap | 1r | 2n | més enllà | sota 1r |
|---|---|---|---|---|---|---|---|
| mat-A | 22 | 2 | 0 | 24 | 0 | 0 | 0 |
| mat-B | 21 | 3 | 0 | 24 | 0 | 0 | 0 |
| cat-A | 16 | 8 | 0 | 24 | 0 | 0 | 0 |
| cat-B | 16 | 8 | 0 | 24 | 0 | 0 | 0 |
| cas-A | 16 | 8 | 0 | 24 | 0 | 0 | 0 |
| cas-B | 16 | 8 | 0 | 24 | 0 | 0 | 0 |
| eng-A | 3 | 21 | 0 | 15 | 5 | 4 | 0 |
| eng-B | 6 | 18 | 0 | 17 | 5 | 2 | 0 |
| soc-A | 15 | 9 | 0 | 22 | 1 | 0 | 1 |
| soc-B | 15 | 8 | 1 | 22 | 1 | 0 | 1 |
| nat-A | 18 | 6 | 0 | 23 | 1 | 0 | 0 |
| nat-B | 18 | 6 | 0 | 23 | 1 | 0 | 0 |
| total agents A | 90 | 54 | 0 | 132 | 7 | 4 | 1 |
| total agents B | 92 | 51 | 1 | 134 | 7 | 2 | 1 |
| **total (A+B)** | 182 | 105 | 1 | 266 | 14 | 6 | 2 |

## 2. Lliçons de 1r

Cada cel·la és un recompte sobre les 6 preguntes de la lliçó: ancoratge **directe/indirecte/cap** i nivell **1r/2n/més enllà/sota 1r**. Una lliçó es marca **REVISAR** si en qualsevol dels dos agents es compleix: cap ≥ 2, o més enllà ≥ 1, o 2n ≥ 3 (llindars provisionals, constant `LLINDARS` de `tools/ancoratge.js`).

| matèria | lliçó | A: ancoratge | A: nivell | B: ancoratge | B: nivell | |
|---|---|---|---|---|---|---|
| mat | Nombres fins a 20 | 6/0/0 | 6/0/0/0 | 5/1/0 | 6/0/0/0 |  |
| mat | Sumes i restes fins a 20 | 6/0/0 | 6/0/0/0 | 6/0/0 | 6/0/0/0 |  |
| mat | El doble i la meitat | 4/2/0 | 6/0/0/0 | 4/2/0 | 6/0/0/0 |  |
| mat | Problemes i mesures | 6/0/0 | 6/0/0/0 | 6/0/0 | 6/0/0/0 |  |
| cat | Síl·labes i lletres | 6/0/0 | 6/0/0/0 | 6/0/0 | 6/0/0/0 |  |
| cat | Plurals i paraules | 0/6/0 | 6/0/0/0 | 0/6/0 | 6/0/0/0 |  |
| cat | Comprensió lectora | 6/0/0 | 6/0/0/0 | 6/0/0 | 6/0/0/0 |  |
| cat | Rimes i categories | 4/2/0 | 6/0/0/0 | 4/2/0 | 6/0/0/0 |  |
| cas | Sílabas y letras | 6/0/0 | 6/0/0/0 | 6/0/0 | 6/0/0/0 |  |
| cas | Plurales y palabras | 0/6/0 | 6/0/0/0 | 0/6/0 | 6/0/0/0 |  |
| cas | Comprensión lectora | 6/0/0 | 6/0/0/0 | 6/0/0 | 6/0/0/0 |  |
| cas | Rimas y categorías | 4/2/0 | 6/0/0/0 | 4/2/0 | 6/0/0/0 |  |
| eng | Numbers 1-10 | 0/6/0 | 4/2/0/0 | 0/6/0 | 6/0/0/0 |  |
| eng | Family & body | 0/6/0 | 6/0/0/0 | 0/6/0 | 6/0/0/0 |  |
| eng | Food & animals | 0/6/0 | 5/1/0/0 | 1/5/0 | 5/1/0/0 |  |
| eng | Simple sentences | 3/3/0 | 0/2/4/0 | 5/1/0 | 0/4/2/0 | **REVISAR** |
| soc | La família | 1/5/0 | 4/1/0/1 | 1/4/1 | 4/1/0/1 |  |
| soc | L'escola i les normes | 4/2/0 | 6/0/0/0 | 4/2/0 | 6/0/0/0 |  |
| soc | El poble o la ciutat | 4/2/0 | 6/0/0/0 | 4/2/0 | 6/0/0/0 |  |
| soc | Feines i oficis | 6/0/0 | 6/0/0/0 | 6/0/0 | 6/0/0/0 |  |
| nat | Animals i les seves cries | 0/6/0 | 6/0/0/0 | 0/6/0 | 6/0/0/0 |  |
| nat | On viuen els animals | 6/0/0 | 6/0/0/0 | 6/0/0 | 6/0/0/0 |  |
| nat | El cicle de vida | 6/0/0 | 6/0/0/0 | 6/0/0 | 6/0/0/0 |  |
| nat | El temps i les estacions | 6/0/0 | 5/1/0/0 | 6/0/0 | 5/1/0/0 |  |

Lliçons marcades REVISAR: 1 de 24.

## 3. Preguntes marcades

Preguntes on algun agent ha dit ancoratge «cap», un nivell diferent de 1r, dubte, o ha vist un error evident. «Coincideixen» vol dir que A i B donen el mateix nivell i les dues tenen (o les dues no tenen) cap saber.

| id | enunciat | A | B | coincideixen |
|---|---|---|---|---|
| 1r_mat-1_q6 | Quin signe fem servir quan un número és més gran que un altre? | directe MAT-34 · 1r · dubte — Reconèixer el signe > pel nom es pot fer a 1r, però sol consolidar-se a final de 1r o a 2n. El saber parla d'expressions amb operacions; aquí només es pregunta el signe. | indirecte MAT-34+MAT-08 · 1r · dubte — Només demana reconèixer el signe >, no comparar expressions amb operacions com diu MAT-34. Els signes < > sovint s'introdueixen a final de 1r o a 2n. | sí |
| 1r_mat-2_q2 | 12 - 4 = ? | directe MAT-05+MAT-06 · 1r · dubte — Resta passant per la desena sense suport visual: assolible a final de 1r, però a l'inici de curs costa (el primer pla treballa sumes amb material manipulatiu). | directe MAT-05 · 1r | sí |
| 1r_mat-2_q4 | 15 - 6 = ? | directe MAT-05+MAT-06 · 1r · dubte — Resta passant per la desena sense suport visual: assolible a final de 1r, però a l'inici de curs costa (el primer pla treballa sumes amb material manipulatiu). | directe MAT-05 · 1r | sí |
| 1r_mat-3_q2 | Quina és la meitat de 10? | indirecte MAT-05 · 1r · dubte — La meitat no apareix explícitament als sabers; encaixa com a invers del doble i descomposició del 10. Amb nombres petits és de 1r, però sovint es treballa més a 2n. | indirecte MAT-05 · 1r · dubte — La meitat no apareix explícitament als sabers del cicle; MAT-05 parla de dobles. Amb 10 és assequible a 1r amb material, però el concepte de meitat és més propi de 2n. | sí |
| 1r_mat-3_q5 | Quina és la meitat de 8? | indirecte MAT-05 · 1r · dubte — La meitat no apareix explícitament als sabers; encaixa com a invers del doble. Amb nombres petits és de 1r, però sovint es treballa més a 2n. | indirecte MAT-05 · 1r · dubte — Igual que la meitat de 10: el saber parla de dobles, no de meitats. Assequible a 1r si s'ha treballat el doble de 4. | sí |
| 1r_cat-1_q4 | Quina d'aquestes lletres és una vocal? | directe LLE-37+LLE-35 · 1r | directe LLE-37+LLE-35 · 1r · dubte — Reconèixer una vocal entre tres consonants és molt bàsic; sovint ja es treballa a P5. Útil com a repàs d'inici de 1r, però a tocar de sota_1r. | sí |
| 1r_cat-2_q1 | Quin és el plural de «Casa»? | indirecte LLE-35 · 1r · dubte — El currículum no esmenta explícitament el nombre (singular/plural); només hi encaixa pel metallenguatge bàsic. Nivell assequible a 1r, sobretot a final de curs. | indirecte LLE-35+LLE-18 · 1r · dubte — El currículum no esmenta explícitament el nombre (singular/plural); l'ancoro al metallenguatge i a l'escriptura. El canvi a→e (casa/cases) pot costar a principi de 1r. | sí |
| 1r_cat-2_q2 | Quin és el plural de «Flor»? | indirecte LLE-35 · 1r · dubte — Morfologia de nombre no explícita als sabers; ancoratge indirecte via metallenguatge bàsic. | indirecte LLE-35+LLE-18 · 1r | sí |
| 1r_cat-2_q3 | El plural de «Llibre» és «Llibris». | indirecte LLE-35 · 1r · dubte — Morfologia de nombre no explícita als sabers; ancoratge indirecte via metallenguatge bàsic. | indirecte LLE-35+LLE-18 · 1r | sí |
| 1r_cat-2_q4 | Quin és el singular de «Gats»? | indirecte LLE-35 · 1r · dubte — Morfologia de nombre no explícita als sabers. El distractor «Gat's» imita l'anglès i no aporta res a 1r. | indirecte LLE-35 · 1r | sí |
| 1r_cat-2_q5 | Quina paraula és el contrari de «Gran»? | indirecte LLE-05 · 1r · dubte — Antònims: vocabulari que sosté la comprensió, cap saber ho descriu directament. No té relació amb el tema «Plurals i paraules». | indirecte LLE-05 · 1r · dubte — Antònims de vocabulari bàsic: cap saber ho descriu directament; l'ancoro a la comprensió (lèxic). El parell gran/petit és molt fàcil, gairebé de P5. | sí |
| 1r_cat-2_q6 | Relaciona cada paraula amb la seva forma femenina. | indirecte LLE-35 · 1r · dubte — Gènere no explícit als sabers. «Gos/gossa» i «avi/àvia» són formes menys regulars, però emparellar-les és assequible a 1r. | indirecte LLE-35 · 1r | sí |
| 1r_cat-4_q1 | Quina paraula NO és una fruita? | indirecte LLE-05 · 1r — Classificació semàntica (fruites): vocabulari que sosté la comprensió; no hi ha saber específic. | indirecte LLE-05 · 1r · dubte — Classificar per camps semàntics és lèxic de suport a la comprensió; cap saber ho descriu directament. La tria és fàcil: l'exigència real és llegir les paraules. | sí |
| 1r_cat-4_q2 | Quina paraula rima amb «Pastís»? | directe LLE-37 · 1r · dubte — «Anís» és un mot poc conegut per a infants de 6-7 anys; la rima s'endevina, però el lèxic pot despistar. | directe LLE-37 · 1r | sí |
| 1r_cat-4_q4 | Quina paraula NO és un animal? | indirecte LLE-05 · 1r — Classificació semàntica (animals): vocabulari que sosté la comprensió; no hi ha saber específic. | indirecte LLE-05 · 1r · dubte — Igual que 4_q1: categoria semàntica, ancoratge feble. La resposta és «Cadira» en totes dues preguntes, cosa que la fa previsible. | sí |
| 1r_cat-4_q5 | Quina paraula rima amb «Casa»? | directe LLE-37 · 1r · dubte — «Casa» (s sonora) i «massa» (ss sorda) només fan rima assonant; justament LLE-37 treballa aquesta discriminació. | directe LLE-37 · 1r · dubte · ERROR: «Casa» i «massa» només rimen en assonant (s sonora / s sorda); caldria una rima consonant, p. ex. «rasa» o «brasa». — La rima casa/massa no és perfecta: «casa» té essa sonora i «massa» essa sorda. Pot confondre just la distinció s/ss que es treballa a 1r. | sí |
| 1r_cas-2_q1 | ¿Cuál es el plural de «Casa»? | indirecte LLE-35+LLE-07 · 1r — El currículum del cicle no té un saber específic de morfologia (nombre); s'hi acosta pel metallenguatge (plural) i la correcció. | indirecte LLE-35 · 1r · dubte — La morfologia (gènere i nombre) no apareix explícitament als sabers; només encaixa amb l'ús de metallenguatge bàsic. | sí |
| 1r_cas-2_q2 | ¿Cuál es el plural de «Flor»? | indirecte LLE-35+LLE-07 · 1r — El distractor «Flors» recull bé la interferència del català. | indirecte LLE-35 · 1r · dubte — La morfologia (gènere i nombre) no apareix explícitament als sabers; només encaixa amb l'ús de metallenguatge bàsic. Bon distractor «Flors» (interferència del català). | sí |
| 1r_cas-2_q3 | El plural de «Libro» es «Libres». | indirecte LLE-35+LLE-07 · 1r | indirecte LLE-35 · 1r · dubte — La morfologia (gènere i nombre) no apareix explícitament als sabers; només encaixa amb l'ús de metallenguatge bàsic. | sí |
| 1r_cas-2_q4 | ¿Cuál es el singular de «Gatos»? | indirecte LLE-35+LLE-07 · 1r — El distractor «Gato's» és una forma estranya (anglesa) poc adequada per a infants de 1r. | indirecte LLE-35 · 1r · dubte — La morfologia (gènere i nombre) no apareix explícitament als sabers; només encaixa amb l'ús de metallenguatge bàsic. El distractor «Gato's» és estrany (forma anglesa). | sí |
| 1r_cas-2_q6 | Relaciona cada palabra con su forma femenina. | indirecte LLE-35+LLE-07 · 1r — Gènere (masculí/femení) sense saber específic al cicle; ancoratge per metallenguatge bàsic. | indirecte LLE-35 · 1r · dubte — La morfologia (gènere i nombre) no apareix explícitament als sabers; només encaixa amb l'ús de metallenguatge bàsic. | sí |
| 1r_cas-4_q1 | ¿Qué palabra NO es una fruta? | indirecte LLE-05 · 1r · dubte — Classificació semàntica (fruites): vocabulari bàsic, potser més propi d'infantil; l'ancoratge a un saber és feble. | indirecte LLE-05 · 1r · dubte — Classificació semàntica de vocabulari; encaix feble amb els sabers. Molt fàcil, però adequada per a lèxic en castellà. | sí |
| 1r_cas-4_q4 | ¿Qué palabra NO es un animal? | indirecte LLE-05 · 1r · dubte — Classificació semàntica (animals): vocabulari bàsic, potser més propi d'infantil; l'ancoratge a un saber és feble. | indirecte LLE-05 · 1r · dubte — Classificació semàntica de vocabulari; encaix feble. «Silla» torna a ser la resposta correcta (també a q1 i q6). | sí |
| 1r_eng-1_q3 | «Ten» is number 9. | indirecte EST-09 · 2n — Cal llegir i validar una frase sencera en anglès sense suport visual; a 1r l'anglès és sobretot oral. | indirecte EST-09 · 1r | no |
| 1r_eng-1_q4 | What number is «eight»? | indirecte EST-09 · 1r · dubte — Reconeixement escrit de «eight» sense imatge: a 1r costa llegir paraules en anglès; el lèxic sí que és de 1r. | indirecte EST-09 · 1r | sí |
| 1r_eng-1_q5 | Write the number for «seven». | indirecte EST-09 · 1r · dubte — Lèxic de 1r, però demana llegir «seven» sense suport ni àudio; pot ser més propi del final de 1r o de 2n. | indirecte EST-09 · 1r · dubte — Cal llegir «seven» escrit en anglès; a 1r l'anglès és sobretot oral i la lectura de paraules angleses és incipient. | sí |
| 1r_eng-1_q6 | Order these numbers from smallest to biggest. | indirecte EST-09 · 2n — Ordenar quatre numerals escrits en anglès exigeix lectura fluida de paraules estrangeres; el contingut és de 1r, el format és de 2n. | indirecte EST-09 · 1r · dubte — Ordenar números escrits en anglès exigeix llegir quatre paraules; el contingut és de 1r però la lectura pot costar. | no |
| 1r_eng-3_q6 | Order the words to make a sentence. | indirecte EST-40+EST-09 · 2n — «I like apples» és una fórmula fixa de 1r a l'oral, però ordenar-la per escrit és més propi de 2n. | directe EST-40 · 2n — Construir una frase escrita en anglès ordenant paraules és més propi de 2n; a 1r «I like apples» es treballa oralment. | sí |
| 1r_eng-4_q1 | Complete: «This ___ a dog.» | directe EST-40 · mes_enlla — Triar is/are/am/be és gramàtica explícita del verb to be; a cicle inicial es treballa com a fórmula oral, no com a tria. | directe EST-40 · 2n — «This is a...» és un patró conegut a 1r oralment, però triar la forma del verb per escrit és reflexió gramatical més pròpia de 2n. | no |
| 1r_eng-4_q2 | Complete: «These ___ cats.» | directe EST-40 · mes_enlla — Concordança plural «These are» amb distractors gramaticals: propi de cicle mitjà. | directe EST-40 · mes_enlla · dubte — La concordança plural «These are» per escrit és gramàtica explícita pròpia de 3r o posterior. | sí |
| 1r_eng-4_q3 | «This is a book» is correct English. | indirecte EST-09 · 2n · dubte — Judici metalingüístic («is correct English») sobre una fórmula fixa; a 1r no es demana valorar la correcció d'una frase escrita. | directe EST-40 · 2n — Jutjar si una frase és correcta en anglès és un judici metalingüístic que costa a 1r. | sí |
| 1r_eng-4_q4 | Complete: «I ___ six years old.» | indirecte EST-09+EST-40 · 2n · dubte — «I'm six» és fórmula oral de 1r, però completar-la triant entre am/is/are/be és més de 2n. | indirecte EST-09+EST-40 · 2n · dubte — «I'm six» és fórmula fixa de 1r, però triar «am» entre formes del verb és reflexió gramatical més pròpia de 2n. | sí |
| 1r_eng-4_q5 | Complete: «She ___ happy.» | directe EST-40 · mes_enlla — Escriure «is» amb 3a persona («She») sense opcions és gramàtica explícita: fora de cicle inicial. | directe EST-40 · mes_enlla · dubte — Escriure la forma «is» amb subjecte «she» sense opcions és conjugació explícita, pròpia de 3r o posterior. | sí |
| 1r_eng-4_q6 | Order the words to make a sentence. | indirecte EST-40 · mes_enlla · dubte — Ordenar cinc paraules amb «has got» (3a persona) és exigent; podria ser de 2n en algunes escoles. | directe EST-40 · 2n — Ordenar una frase de cinc paraules amb «has got» és massa llarg per a 1r; més propi de 2n. | no |
| 1r_soc-1_q1 | Com es diu el fill del teu germà? | indirecte MED-31 · 2n · dubte — El parentiu de segon grau (nebot) demana un raonament en dos passos poc habitual a 1r; a 1r es treballen pares, germans, avis, oncles i cosins. | indirecte MED-27+MED-31 · 2n · dubte · ERROR: L'opció 'Net' va sense accent: hauria de ser 'Nét' (net vol dir 'polit'); a q6 sí que s'escriu 'nét'. — Vocabulari de parentiu indirecte (fill del germà): a 1r costa; més propi de 2n. | sí |
| 1r_soc-1_q2 | On viuen normalment els avis? | indirecte MED-31 · sota_1r · dubte — Pregunta trivial amb distractors absurds; a més, molts avis viuen amb la família, cosa que xoca amb la diversitat familiar del saber. | cap · sota_1r · dubte — Pregunta trivial que no treballa cap saber; a més, molts avis viuen amb la família i la pregunta pot confondre. | no |
| 1r_soc-1_q3 | Els cosins són fills dels teus avis. | indirecte MED-31 · 1r · dubte — Vocabulari de parentiu: entendre que els cosins són néts dels avis demana pensar l'arbre genealògic; assequible a 1r amb suport, però al límit. | indirecte MED-27+MED-31 · 1r · dubte — Cal raonar dues generacions (cosins = fills dels tiets); assumible a 1r però pot costar. | sí |
| 1r_soc-1_q6 | Qui sol ser més gran, l'avi o el nét? | directe MED-27 · 1r · ERROR: 'nét' porta un accent diacrític suprimit per la normativa del 2017 (ara 'net'); a més, és incoherent amb 'Net' de 1r_soc-1_q1. | directe MED-27 · 1r | sí |
| 1r_nat-1_q2 | Com es diu la cria del gat? | indirecte MED-03+MED-06 · 1r · ERROR: El distractor 'Cadell' és discutible: el DIEC accepta 'cadell' per a la cria d'altres mamífers, no només del gos. | indirecte MED-06 · 1r | sí |
| 1r_nat-4_q2 | A quina estació els arbres es queden sense fulles? | directe MED-22 · 1r | directe MED-22 · 1r · ERROR: Lleugerament ambigu: els arbres perden les fulles a la tardor però en queden sense a l'hivern, i els de fulla perenne no les perden. | sí |
| 1r_nat-4_q4 | Què fa que es formin els núvols? | directe MED-14+MED-36 · 2n · dubte — Relacionar l'evaporació amb els núvols demana entendre un canvi d'estat; a 1r costa i sovint es treballa a 2n o més tard. Dubto si és 2n o més enllà. | directe MED-36+MED-14 · 2n · dubte — L'evaporació i la formació de núvols demanen una abstracció més pròpia de 2n; a 1r es pot fer si s'ha treballat amb experiència. | sí |

Preguntes marcades: 41 de 144.

## 4. Concordança entre A i B

Sobre les preguntes on tots dos agents tenen resultat vàlid.

| matèria | preguntes comparades | mateix nivell | mateix «té saber / no té saber» |
|---|---|---|---|
| mat | 24 | 24 (100.0%) | 24 (100.0%) |
| cat | 24 | 24 (100.0%) | 24 (100.0%) |
| cas | 24 | 24 (100.0%) | 24 (100.0%) |
| eng | 24 | 20 (83.3%) | 24 (100.0%) |
| soc | 24 | 24 (100.0%) | 23 (95.8%) |
| nat | 24 | 24 (100.0%) | 24 (100.0%) |
| **total** | 144 | 140 (97.2%) | 143 (99.3%) |

## 5. Cobertura dels sabers

Un saber es considera **tocat** si algun agent de l'àrea l'ha assignat a alguna pregunta (directe o indirecte). Es considera **avaluable** si almenys la meitat dels agents de l'àrea diuen «si» o «parcial» (una aplicació amb test, vertader/fals, resposta escrita curta, ordenar i emparellar el podria avaluar). Només es llisten els sabers **no tocats i avaluables**; dels no avaluables només es dona el recompte.

### Matemàtiques (MAT) — matèries: mat

Agents vàlids de l'àrea: mat-A, mat-B · sabers: 48 · tocats: 10 · no tocats: 38 · no avaluables: 5

**Sabers no tocats per cap lliçó i avaluables (33):**

- `MAT-02` (p. 2) Realització d’estimacions raonades de quantitats en contextos de resolució de problemes.
- `MAT-04` (p. 3) Exploració de la representació d’una mateixa quantitat de diferents maneres (manipulativa, gràfica o numèrica) i estratègies d’elecció de la representació adequada per a cada situació problematitzada fent especial esment al nombre 10.
- `MAT-10` (p. 6) Reconeixement del sistema monetari europeu: monedes i bitllets d’euro (1, 2, 5, 10, 20 i 50), valor i equivalència.
- `MAT-11` (p. 7) Apreciació dels atributs mesurables dels objectes (longitud, massa, capacitat), distàncies i temps.
- `MAT-12` (p. 7) Introducció de les unitats convencionals (metre, quilo i litre) i no convencionals en situacions en què es facin mesuraments en el context escolar o de la vida quotidiana.
- `MAT-14` (p. 7) Aplicació de processos de mesura a través d’una repetició d’una unitat i a través de la utilització d’instruments no convencionals.
- `MAT-15` (p. 7) Experimentació de processos de mesura amb instruments convencionals (regles, cintes mètriques, balances, calendaris...) en contextos quotidians.
- `MAT-16` (p. 8) Selecció d’estratègies de comparació directa i ordenació de mesures de la mateixa magnitud segons la demanda del problema.
- `MAT-17` (p. 8) Estimació de mesures (distàncies, mides, masses, capacitats...) cercant formes de comparar-les amb altres mesures.
- `MAT-18` (p. 9) Identificació i classificació de formes geomètriques de dues dimensions en objectes de la vida quotidiana tenint en compte els seus elements.
- `MAT-20` (p. 9) Introducció del vocabulari geomètric bàsic en la descripció verbal dels elements i les propietats de formes geomètriques senzilles.
- `MAT-21` (p. 9) Reconeixement de les propietats de formes geomètriques de dues i tres dimensions explorant amb materials manipulables (mecanos, tangram, jocs de figures…) i també amb eines digitals.
- `MAT-22` (p. 10) Descripció de la posició relativa d’objectes en l’espai amb relació a un mateix amb el vocabulari adequat (a dalt, a baix, davant, darrere, entremig, a prop, lluny…) i també de dos objectes entre si (junts, separats, l'un sobre l’altre, etc.) en situacions d’interpretació de moviments.
- `MAT-23` (p. 10) Representació i elaboració d’itineraris senzills amb referents de l’entorn proper.
- `MAT-24` (p. 10) Construcció de figures a partir de moviments, girs, fent simetries, superposant figures per comprovar semblances, diferències, encaixos, fer noves agrupacions…
- `MAT-25` (p. 11) Utilització de models geomètrics en la resolució de problemes relacionats amb els altres sentits.
- `MAT-26` (p. 11) Reconeixement de l’entorn a través de les relacions geomètriques.
- `MAT-27` (p. 11) Reconeixement i representació d’una figura en tres dimensions a partir d’una fotografia o fent una predicció de la part oculta d’un cos.
- `MAT-29` (p. 11) Reconeixement d’objectes des de diverses perspectives.
- `MAT-31` (p. 13) Agrupació d’elements a partir de semblances i diferències d’objectes, en aspectes diversos, i ordenació seguint criteris qualitatius i quantitatius.
- `MAT-33` (p. 13) Descoberta d’estratègies de modelització de situacions de la vida quotidiana mitjançant dibuixos, esquemes, diagrames, objectes manipulables, dramatitzacions…
- `MAT-35` (p. 13) Comprensió i representació de la igualtat com a expressió d’una relació d’equivalència entre dos elements i obtenció de dades senzilles desconegudes (representades a través d’un símbol) en qualsevol dels dos elements.
- `MAT-36` (p. 13) Identificació dels canvis que es produeixen com a resultat d’una acció.
- `MAT-37` (p. 14) Descoberta i comprensió d’estratègies quan s’interpreten, modifiquen o creen algorismes senzills que incorporen processos seqüencials i instruccions de bucle i condicionals.
- `MAT-38` (p. 15) Reconeixement i formulació de preguntes en situacions properes que es resolen recollint dades.
- `MAT-39` (p. 15) Organització i estratègies per a la recollida de dades.
- `MAT-40` (p. 15) Representació gràfica i interpretació de les dades recollides (tenint en compte la classificació de les dades, la durada de la recollida i el context).
- `MAT-41` (p. 15) Introducció a la lectura i interpretació de la freqüència absoluta.
- `MAT-42` (p. 15) Identificació dels elements que intervenen en els gràfics estadístics de fets o situacions de la vida quotidiana.
- `MAT-43` (p. 16) Reconeixement en situacions concretes de si un esdeveniment és impossible, possible o segur, i fins a quin punt és més o menys possible.
- `MAT-45` (p. 17) Adquisició d’autonomia i estratègies per a la presa de decisions en situacions de resolució de problemes, tant per donar resposta a la situació plantejada com per fer-se altres preguntes i continuar aprenent.
- `MAT-46` (p. 17) Identificació de la contribució de les matemàtiques (numeració, geometria, estadística…) als diversos àmbits de coneixement humà des d’una perspectiva de gènere.
- `MAT-48` (p. 17) Identificació i rebuig d’actituds discriminatòries mostrant sensibilitat i respecte envers les diferències individuals, també les referents a la diversitat de gènere, presents a l’aula.

### Llengües (catalana, castellana i aranès) (LLE) — matèries: cat, cas

Agents vàlids de l'àrea: cat-A, cat-B, cas-A, cas-B · sabers: 37 · tocats: 7 · no tocats: 30 · no avaluables: 12

**Sabers no tocats per cap lliçó i avaluables (18):**

- `LLE-03` (p. 2) Ús d’un llenguatge no discriminatori i respectuós amb les diferències en la vida quotidiana.
- `LLE-06` (p. 3) Identificació de la incidència dels components (situació, participants o intenció) en l’acte comunicatiu en diferents situacions comunicatives pròpies de l’aula i d’altres entorns informals.
- `LLE-08` (p. 3) Identificació d’elements bàsics de contingut (tema, fórmules fixes, lèxic) i forma (estructura, format, imatges) en les produccions orals.
- `LLE-09` (p. 3) Reproducció de textos orals memoritzats (cançons, poemes, dramatitzacions) en el marc de les propostes didàctiques d’aula.
- `LLE-11` (p. 3) Interacció oral adequada en situacions d’aula. Reconeixement i utilització d’estratègies bàsiques de cortesia lingüística.
- `LLE-15` (p. 5) Ús d’elements gràfics i paratextuals bàsics que afavoreixen la comprensió abans, durant i després de l’experiència lectora, en textos propers de la vida quotidiana, de mitjans de comunicació i escolars.
- `LLE-17` (p. 5) Detecció d’usos clarament discriminatoris del llenguatge verbal i icònic, de forma guiada, en contextos quotidians i mitjans de comunicació.
- `LLE-20` (p. 6) Aplicació d’estratègies elementals, individuals o grupals, de planificació, redacció, revisió i edició de textos escrits i multimodals propers a la seva experiència personal, en diferents suports, amb diferents propòsits i de forma acompanyada.
- `LLE-21` (p. 6) Utilització d’elements gràfics i paratextuals adequats al suport, de forma acompanyada, que facilitin l’organització i la comprensió del text produït a l’aula.
- `LLE-23` (p. 7) Aplicació d’estratègies bàsiques per a la recerca guiada d’informació senzilla en fonts documentals variades i amb diferents suports i formats, reconeixent l’autoria.
- `LLE-24` (p. 7) Aplicació d’estratègies bàsiques per comparar informació de diferents fonts, reelaborar-la i comunicar-la en situacions properes i amb acompanyament.
- `LLE-27` (p. 8) Lectura d’obres o fragments variats i diversos de la literatura infantil adequats als seus interessos i organitzats en itineraris lectors
- `LLE-28` (p. 8) Comprensió dels elements constitutius essencials de l’obra literària (tema, personatges, trama, escenari) i dels diferents gèneres literaris, a partir de la lectura compartida i guiada d’obres de qualitat.
- `LLE-29` (p. 8) Establiment de vincles de la literatura amb altres manifestacions artístiques i culturals amb acompanyament.
- `LLE-32` (p. 8) Reconeixement de les dades bàsiques d’un llibre (persones autores, il·lustradores, editorial, col·lecció) en el context de les lectures d’aula i de la biblioteca, amb acompanyament.
- `LLE-33` (p. 8) Escriptura de textos literaris senzills (rodolins, endevinalles, contes…) a partir de models coneguts i analitzats, amb acompanyament.
- `LLE-34` (p. 9) Exploració de les il·lustracions i de la relació que s’estableix amb el text en els àlbums il·lustrats, amb acompanyament.
- `LLE-36` (p. 10) Diferències elementals entre llengua oral i llengua escrita en l’ús quotidià.

### Llengua estrangera (EST) — matèries: eng

Agents vàlids de l'àrea: eng-A, eng-B · sabers: 43 · tocats: 3 · no tocats: 40 · no avaluables: 20

**Sabers no tocats per cap lliçó i avaluables (20):**

- `EST-04` (p. 2) Reconeixement d’aspectes socioculturals i sociolingüístics elementals i més significatius relatius als costums, la vida quotidiana i les manifestacions culturals i artístiques en països on es parla la llengua estrangera.
- `EST-06` (p. 4) Comprensió de textos orals de tipologia diversa en diferents formats i mitjans.
- `EST-07` (p. 4) Identificació de la incidència dels components (situació, participants o intenció) en l’acte comunicatiu en diferents situacions comunicatives de l’aula.
- `EST-08` (p. 4) Aplicació d’estratègies lingüístiques elementals amb acompanyament, en contextos propers, per dotar textos breus i senzills d’adequació, coherència, cohesió i correcció.
- `EST-12` (p. 5) Interacció oral adequada en situacions d’aula. Reconeixement i utilització d’estratègies bàsiques de cortesia lingüística.
- `EST-15` (p. 7) Lectura individual i silenciosa, amb fluïdesa adequada al nivell cognitiu, de textos de l’aula i del seu entorn.
- `EST-17` (p. 7) Ús d’elements gràfics i paratextuals bàsics que afavoreixen la comprensió abans, durant i després de l’experiència lectora, en textos propers de la vida quotidiana, de mitjans de comunicació i escolars.
- `EST-18` (p. 7) Aplicació d’estratègies de comprensió lectora abans, durant i després de la lectura (planificació, anticipació, inferències…), en textos diversos i amb acompanyament.
- `EST-19` (p. 7) Detecció d’usos clarament discriminatoris del llenguatge verbal i icònic, de forma guiada, en contextos quotidians i mitjans de comunicació.
- `EST-20` (p. 8) Comprensió i ús de convencions del codi escrit en el marc de les propostes de comprensió o producció de textos d’ús escolar i social.
- `EST-26` (p. 9) Aplicació d’estratègies bàsiques per comparar informació de diferents fonts, reelaborar-la i comunicar-la en situacions properes i amb acompanyament.
- `EST-30` (p. 10) Comprensió dels elements constitutius essencials de l’obra literària (tema, personatges, trama, escenari) i dels diferents gèneres literaris, a partir de la lectura compartida i guiada d’obres de qualitat.
- `EST-34` (p. 10) Reconeixement de les dades bàsiques d’un llibre (persones autores, il·lustradores, editorial, col·lecció) en el context de les lectures d’aula i de la biblioteca, amb acompanyament.
- `EST-36` (p. 11) Exploració de les il·lustracions i de la relació que s’estableix amb el text en els àlbums il·lustrats, amb acompanyament.
- `EST-37` (p. 12) Utilització de metallenguatge específic bàsic en el marc de propostes de producció i comprensió de textos orals, escrits o multimodals.
- `EST-38` (p. 12) Diferències elementals entre llengua oral i llengua escrita en l’ús quotidià.
- `EST-39` (p. 12) Discriminació fonètica de sons, síl·labes i accents i correspondència entre els sons i les grafies en la lectura i en les diferents produccions escrites, tenint en compte les diferents etapes del procés evolutiu.
- `EST-41` (p. 12) Ús de signes bàsics de puntuació com a mecanisme organitzador del text escrit.
- `EST-42` (p. 12) Comprensió i ús de les modalitats oracionals en relació amb la intenció comunicativa.
- `EST-43` (p. 13) Comprensió i ús de mecanismes bàsics de cohesió textual, amb especial atenció als connectors temporals i explicatius a partir de la reflexió compartida sobre les produccions escrites.

### Coneixement del Medi Natural, Social i Cultural (MED) — matèries: soc, nat

Agents vàlids de l'àrea: soc-A, soc-B, nat-A, nat-B · sabers: 38 · tocats: 16 · no tocats: 22 · no avaluables: 5

**Sabers no tocats per cap lliçó i avaluables (17):**

- `MED-01` (p. 2) Selecció de tècniques d’indagació adequades (observació, formulació de preguntes i prediccions, planificació i realització d’experiments, cerca d’informació, mesura, cerca de patrons, comunicació…) a les necessitats de la investigació.
- `MED-04` (p. 2) Reconeixement de la ciència i la tecnologia com a activitats humanes, similituds i diferències en les professions relacionades amb la ciència i la tecnologia des d’una perspectiva de gènere.
- `MED-05` (p. 2) Valoració dels coneixements científics com a mitjà per entendre els fets i fenòmens de l’entorn natural i de la vida quotidiana.
- `MED-09` (p. 3) Valoració de les relacions entre els éssers humans, els animals i les plantes per aplicar normes de cura i respecte als éssers vius i a l’entorn en què viuen.
- `MED-11` (p. 3) Identificació i ús d’hàbits saludables relacionats amb el benestar emocional i social: estratègies d’identificació de les pròpies emocions per respectar i acceptar la diversitat present a l’aula i a l’entorn proper.
- `MED-12` (p. 4) Reconeixement de la llum i el so com a formes d’energia que es poden percebre i de les seves propietats descobrint i experimentant el seu funcionament i ús en situacions de la vida quotidiana.
- `MED-13` (p. 4) Distinció dels materials, les seves característiques, propietats i procedència en objectes de la vida quotidiana per justificar-ne l’ús.
- `MED-15` (p. 4) Comprensió de l’efecte de les forces de càrrega sobre estructures construïdes amb materials d’ús comú amb diferents seccions i geometria, per construir estructures resistents, estables i útils
- `MED-17` (p. 5) Utilització de recursos digitals de forma segura per compartir contextos d’aprenentatge a través de la comunicació amb persones o entitats.
- `MED-18` (p. 6) Identificació de les fases del pensament computacional en reptes simples: aplicació d’ordres i seqüències bàsiques per a la resolució d’un problema senzill.
- `MED-23` (p. 7) Apreciació de les diferències i semblances en els elements geològics que constitueixen l’entorn proper per entendre les dinàmiques que es produeixen i els seus efectes en la vida quotidiana.
- `MED-24` (p. 7) Creació guiada d’itineraris, trajectes, desplaçaments i viatges utilitzant el pensament espacial i temporal i les interaccions amb el medi.
- `MED-26` (p. 8) Introducció als objectius de desenvolupament sostenible a partir de l’anàlisi de problemes i de les accions quotidianes
- `MED-28` (p. 9) Ús de recursos i mitjans analògics i digitals, de les fonts orals i de la memòria col·lectiva per conèixer la història local i la biografia familiar.
- `MED-30` (p. 9) Coneixement del patrimoni material i immaterial de la seva localitat per valorar-lo i preservar-lo.
- `MED-34` (p. 10) Reconeixement d’identitat i diversitat cultural: l’existència de realitats diferents i aproximació a les diferents ètnies i cultures presents en l’entorn, per afavorir la integració, rebutjar les actituds discriminatòries tot afavorint la cultura de la pau i no-violència.
- `MED-38` (p. 12) Reconeixement d’actuacions responsables orientades a la reducció, reutilització i reciclatge de residus en l’entorn proper.

## 6. Limitacions

- El judici és d'agents d'IA, no d'un mestre.
- Els sabers no distingeixen 1r de 2n.
- Els sabers de llengües són competencials, per la qual cosa «indirecte» és esperable.
- Sense mostreig humà, això NO és una validació.
