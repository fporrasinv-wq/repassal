# Informe de calibratge del solucionador cec (Bloc V2)

Objectiu: mesurar si un "solucionador cec" (agents d'IA independents que
resolen les preguntes sense veure les claus) detecta de debò errors
sembrats a propòsit i quantes falses alarmes dona; i, si ho fa prou bé,
fer-lo servir per auditar les 180 preguntes de 5è nivell normal.

**Resultat en una frase.** El solucionador supera el llindar fixat
(Fase 1) i l'auditoria de 5è (Fase 2) dona 178 coincidències de 180, 2
discrepàncies i 8 preguntes marcades com a ambigües. **No s'ha corregit
res del contingut**: tot el que surt aquí és per a revisió humana.

## 1. Qui ha fet de solucionador

- **Model dels agents:** s'ha demanat `opus` a l'eina d'agents i les
  transcripcions mostren que ha servit `claude-opus-5-5` (34 respostes a
  la Fase 1 i 33 a la Fase 2). El model que ha editat el repositori és un
  altre (Claude Sonnet 5.5), tal com demanava el bloc.
- **Una sola configuració**: no s'han provat altres models ni s'ha repetit
  cap prova amb el mateix model, així que **no es pot dir res de la
  variabilitat entre execucions** (vegeu l'apartat 5).
- **Agents:** 12 en total (6 a la Fase 1, amb 2 lots de 10 preguntes cadascun;
  6 a la Fase 2, amb 5 lliçons de 6 preguntes cadascun). Cap agent ha fallat
  ni s'ha hagut de repetir, i no s'ha descartat cap resultat.
- **Consum dels agents:** unes 481.900 unitats a la Fase 1 i 491.500 a la
  Fase 2, segons el comptador de l'eina (≈ 0,97 milions en total; no
  distingeix entrada, sortida ni memòria cau). Cada agent ha trigat entre 31 i
  64 segons. El consum de la sessió principal no es pot mesurar des de dins.

## 2. Encàrrec literal

El text exacte que han rebut els agents és a `tools/prompt-solucionador.md`
(en castellà, amb les rutes per substituir). L'encàrrec és:

```
Eres un maestro/a de primària de Catalunya que revisa un cuestionario para alumnos de {CURS}. Resuelve cada pregunta de tu lote como la respondería correctamente un alumno de ese curso según el currículum de Catalunya. Sigue el formato de respuesta de instruccions-solucionador.md. Importante: si una pregunta es ambigua, imprecisa, tiene más de una respuesta defensible, o NINGUNA de las opciones te parece correcta, NO te limites a escoger una: marca ambigua=true y explica en altres_opcions_defensables o en una nota breve el problema. En resposta_escrita, propón en altres_respostes_possibles las otras formas correctas en que un alumno podría escribir la respuesta. No leas nada fuera de tu lote.
```

Seguit de la instrucció d'aïllament (no llegir `data/questions.js`, ni res
del repo, ni `tools/benchmark/claves.json`, ni cap informe) i de les rutes de
cada agent. Els agents no han rebut cap pista que hi hagués errors sembrats.

El format de resposta (`instruccions-solucionador.md`, generat per
`exportar-ciego.js`) té ara un camp nou, **`nota`**: text breu opcional per
explicar qualsevol problema d'una pregunta. `comparar.js` i
`medir-benchmark.js` el llegeixen i el mostren als informes.

## 3. Fase 1 — calibratge amb el benchmark de 5è

Benchmark (`sembrar-fallos.js --curs 5è`, llavor fixa 20261014): 60 mutants
i 60 controls, barrejats en 12 lots de 10.

| tipus de mutació | detectats | total |
|---|---|---|
| test-clau-canviada | 14 | 14 |
| veritat-fals-invertit | 13 | 13 |
| ordenar-elements-intercanviats | 7 | 7 |
| test-opcio-duplicada (estructural) | 6 | 13 |
| emparellar-dreta-duplicada (estructural) | 13 | 13 |
| aritmetica-numero-alterat | — | 0 (no n'hi ha a 5è) |

Un mutant es compta com a detectat si el solucionador dona una resposta
diferent de la clau estropejada **o** marca `ambigua=true`. Els tres tipus
que compten per al llindar s'han detectat tots per **resposta diferent**
(el solucionador simplement ha respost bé); els `emparellar-dreta-duplicada`
s'han detectat tots per la marca d'ambigua.

**Falses alarmes sobre els 60 controls, per tipus de pregunta:**

| tipus de pregunta | falses alarmes | controls |
|---|---|---|
| test | 0 | 29 |
| veritat_fals | 0 | 16 |
| emparellar | 0 | 4 |
| resposta_escrita | 4 | 11 |
| ordenar | — | 0 |
| **total** | **4 (6,7%)** | **60** |

Les 4 falses alarmes, totes de `resposta_escrita` (resposta del solucionador
vs. clau):

- `5è_eng-5-5_q2`: "A question mark (?)" vs. clau "?".
- `5è_cas-5-1_q2`: "El texto descriptivo" vs. clau "La descripción" (i variants).
- `5è_mat-5-1_q1`: "0,07" vs. clau "Centèsimes".
- `5è_eng-5-1_q2`: "reading" vs. clau "swimming" (pregunta oberta: "My favourite hobby is ___").

Els ids dels mutants no detectats i el detall complet (resposta del
solucionador, clau sembrada i clau original) són a
`tools/benchmark/informe-benchmark.md`, que **no es versiona** perquè hi
surten els mutants (el repositori és públic i un futur solucionador que
llegís el repo podria trobar-los).

## 4. Llindar

- Detecció >= 90% en `test-clau-canviada`, `veritat-fals-invertit` i
  `ordenar-elements-intercanviats`: 14/14, 13/13 i 7/7. **Superat.**
- Falses alarmes <= 10% sobre els controls: 6,7%. **Superat.**
- Els dos tipus estructurals no compten per al llindar (els detecta
  `validar.js`).

**Es passa a la Fase 2.**

## 5. Matisos que cal tenir presents

1. **Pocs casos.** Un 14/14 només garanteix, amb un 95% de confiança, una
   taxa real de detecció >= 77% (13/13: >= 75%; 7/7: >= 59%). Les falses
   alarmes 4/60 són compatibles amb una taxa real entre l'1,8% i el 16%. Superar el
   llindar en aquesta mostra no demostra que s'assoleixi de debò el 90%.
2. **Els errors sembrats són fàcils.** Canviar la clau d'un test per un
   distractor, o invertir un veritat/fals, és un error "gros". El benchmark
   no mesura si el solucionador troba errors subtils (ambigüitats fines,
   claus defensables però discutibles).
3. **Els controls no són necessàriament nets.** Són preguntes reals sense
   tocar, i dues de les quatre falses alarmes semblen defectes reals de la
   pregunta, no errors del solucionador: `5è_mat-5-1_q1` (no diu si es demana
   el valor 0,07 o l'ordre "centèsimes") i `5è_eng-5-1_q2` (pregunta oberta amb una
   sola clau). A la Fase 2 han tornat a sortir com a discrepàncies. Les altres
   dues (`5è_eng-5-5_q2`, `5è_cas-5-1_q2`) són de forma d'escriure la resposta
   i **no** han tornat a fallar a la Fase 2, on el solucionador ha respost
   "?" i "La descripción": això mostra que hi ha variabilitat entre
   execucions en les `resposta_escrita`.
4. **Tots els mutants estructurals sí que es van veure, però no sempre per
   la via mesurada.** Dels 7 `test-opcio-duplicada` no comptats com a
   detectats, els 7 tenien una `nota` del solucionador que descrivia
   l'opció repetida; si la nota comptés, serien 13/13. La mètrica només
   compta resposta diferent o `ambigua=true`.
5. **`ordenar`: només 7 preguntes.** A 5è només hi ha 7 preguntes
   `ordenar` i totes han acabat com a mutants; per això no hi ha cap control
   d'aquest tipus i el 90% exigeix 7 de 7 (6/7 seria 85,7%).
6. **Una sola execució, un sol model.**

## 6. Fase 2 — auditoria de 5è nivell normal (180 preguntes, 30 lliçons)

`node tools/comparar.js --resultados tools/resultados --curs 5è`
(informe complet a `documentos/informe-solucionador.md`).

- **Coincidències: 178 de 180 (98,9%).** No ha quedat cap pregunta sense resposta.
- **Discrepàncies: 2**, totes de `resposta_escrita`:
  - `5è_mat-5-1_q1` ("7 centèsimes" vs. clau "Centèsimes")
  - `5è_eng-5-1_q2` ("reading" vs. clau "swimming")
- **Preguntes marcades com a ambigües: 8**:
  `5è_cat-5-4_q6`, `5è_cas-5-4_q6`, `5è_eng-5-1_q2`, `5è_eng-5-3_q1`,
  `5è_eng-5-3_q2`, `5è_nat-5-2_q2`, `5è_nat-5-3_q2`, `5è_soc-5-1_q2`.
- **Notes en preguntes no marcades com a ambigües: 17** (detalls a l'informe).
- **Respostes alternatives proposades i no cobertes per `respostes_acceptades`:
  22 de les 27 preguntes `resposta_escrita`.** Moltes són variants de format
  (per exemple "20 cm²", "el 25%"); **no s'ha comprovat** quines d'elles
  `normalizeAnswer()` de l'app ja accepta, perquè no s'ha tocat ni executat l'app.
- Cap mutant ni cap dada de la Fase 1 hi intervé: els agents de la Fase 2 no tenien
  memòria dels de la Fase 1, i `tools/resultados/` s'ha buidat entre fases.

**Què no vol dir.** Que el solucionador coincideixi amb la clau no
demostra que la clau sigui correcta: un sol model pot equivocar-se igual
que l'autor del contingut. Tampoc surten aquí errors que cap dels dos veu.

## 7. Incidències d'independència

- Cap agent ha llegit `data/questions.js`, `claves.json` ni cap informe
  (revisat a les transcripcions: només van obrir la seva carpeta, el seu lot i,
  en algun cas, fer un `ls`).
- **Fase 1, agent 2** (lots 03 i 04) **i Fase 2, agent 1** (castellà): per validar
  els seus JSON van recórrer amb un comodí tota la carpeta de resultats, de
  manera que el seu script va obrir resultats d'altres agents (lots 05 a 08, i
  els fitxers `cat` i `eng`). Diuen que només van imprimir el nombre de respostes. No és el
  motiu de descart fixat al bloc (haver llegit les claus o el repo), i ja tenien
  les respostes donades, però **no s'ha repetit cap lot** i queda a criteri de
  qui revisi si cal repetir aquests dos.
- No es pot impedir tècnicament que un agent llegeixi el repositori; la
  protecció és la instrucció d'aïllament més aquesta revisió posterior.

## 8. Com repetir tot el procés, pas a pas

1. A la carpeta del projecte: `git checkout main`, `git pull`, i crea una rama
   nova per al bloc.
2. **Genera el benchmark** (no es versiona, la llavor és fixa):
   `node tools/sembrar-fallos.js --curs 5è`
3. **Prepara carpetes fora del repo**, per exemple `/tmp/solucionador/fase1/`,
   amb una subcarpeta per agent. A cada una hi poses només els seus lots (el
   fitxer `preguntes-cegues.json` es parteix en 12 lots de 10 preguntes, amb
   `{ curs, materia, tema, preguntes }`) i una còpia de
   `instruccions-solucionador.md` (la genera `exportar-ciego.js`; fes-la en una
   carpeta temporal i copia només aquest fitxer, perquè els agents no vegin
   les lliçons reals).
4. **Llança 6 agents independents** (màxim 6 alhora) amb el text de
   `tools/prompt-solucionador.md`, canviant les rutes. Han de ser d'un model
   diferent del que edita el contingut. No els diguis res d'errors sembrats.
5. Comprova que cada agent només ha obert la seva carpeta (mira les
   transcripcions). Si ha llegit `data/questions.js` o `claves.json`, descarta el
   seu resultat i repeteix aquell lot.
6. Copia els resultats a `tools/resultados/` (que ha d'estar buida abans) i
   executa `node tools/medir-benchmark.js --resultados tools/resultados`. Mira
   el veredicte del llindar.
7. **Només si es supera**: buida `tools/resultados/`, exporta les preguntes
   reals amb `node tools/exportar-ciego.js --curs 5è --nivell normal --salida
   /tmp/solucionador/fase2/ciego`, reparteix les 30 lliçons entre 6 agents (5 cadascun),
   llança'ls amb el mateix encàrrec, copia els resultats a `tools/resultados/` i
   executa `node tools/comparar.js --resultados tools/resultados --curs 5è`.
8. Llegeix `documentos/informe-solucionador.md` i decideix, pregunta per
   pregunta, què cal corregir. **El solucionador no corregeix res.**

## 9. Decisions preses sense consultar

- Agents d'un model diferent: `opus`. Una sola configuració.
- Cada agent té la seva pròpia carpeta (només els seus lots), en comptes
  d'una carpeta comuna, per reduir el risc de lectures creuades.
- Els lots del benchmark porten `materia: "mixta"`, perquè les preguntes
  cegues del benchmark no porten matèria ni tema.
- `exportar-ciego.js` accepta `--salida` amb ruta absoluta (abans, una ruta
  absoluta s'hauria creat dins del repo), i el text final d'instruccions ja no
  esmenta carpetes ni scripts del repo.
- `comparar.js` té un `--nivell` opcional i mostra també les notes del
  solucionador en preguntes no marcades com a ambigües.
- `medir-benchmark.js` mostra el desglossament demanat, el veredicte del
  llindar, i escriu per defecte a `tools/benchmark/informe-benchmark.md`
  (carpeta no versionada) en lloc de `documentos/`, perquè hi surten els mutants.
- `tools/prompt-solucionador.md` desa el text literal en castellà (tal com el
  reben els agents) dins d'un document en català.
- Es versiona `documentos/informe-solucionador.md` (llista de desacords per a
  revisió humana) i no es versiona l'informe del benchmark.
- `documentos/informe-validacio.md` no s'ha inclòs al commit: només canviava
  la data de generació en tornar a executar `validar.js`.
