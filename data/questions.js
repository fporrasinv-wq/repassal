/* Banc de preguntes unificat de totes les apps "Repassa'l!".

   Cada pregunta és un objecte pla amb aquests camps comuns:
     id, curs, cicle, materia, tema, dificultat (1-3), nivell, tipus, origen, explicacio

   Camp "nivell": "facil" | "normal" | "dificil" (vegeu NIVELLS a
   data/meta.js per a l'etiqueta visible). Les 752 preguntes
   originals són totes "normal"; el Bloc 7 ja permet seleccionar
   nivell per perfil, encara que de moment només "normal" té prou
   contingut (≥5 preguntes per lliçó) per estar disponible als 4
   cursos — "facil" i "dificil" s'activaran quan el Bloc 8 n'afegeixi
   contingut. Esquema d'id per a preguntes noves (no normal):
   "<curs>_<lessonId>_<f|d>_q<1..6>" (p. ex. "5è_mat-5-1_f_q1"); vegeu
   documentos/esquema-ids-nivells.md.

   I, segons el "tipus", aquests camps propis:
     - test:             pregunta, opcions[], resposta_correcta
     - veritat_fals:      pregunta, resposta_correcta (true/false)
     - resposta_escrita:  pregunta, resposta_correcta, respostes_acceptades[]
     - ordenar:           pregunta, elements_ordre_correcte[]
     - emparellar:        pregunta, parelles[] ({a, b})

   Camp opcional "text": només present a les lliçons de comprensió
   lectora (1r_cat-3, 1r_cas-3, i les lliçons de lectura de 5è/6è en
   català, castellà i anglès). Conté el text de lectura complet, igual
   per a totes les preguntes d'una mateixa lliçó — el motor el mostra
   en una targeta diferenciada damunt de l'enunciat (també al repàs
   d'errors). Les preguntes NO repeteixen el text ni frases com "amb
   el mateix text"; quan cal, fan servir "Segons el text" directament.

   Cursos coberts: 1r (cicle inicial), 4t (cicle mitjà), 5è i 6è (cicle
   superior), per a les 6 matèries (mat, cat, cas, eng, soc, nat).

   El contingut de 1r i 4t es va generar a partir dels antics content.js
   (arrel i petits/) sense retocar cap text ni resposta. El contingut de
   5è i 6è es va generar a partir del currículum oficial (Decret
   175/2022, "sabers" de cicle superior), amb la dificultat assignada
   per criteri pedagògic (progressió de sabers dins 5è i 6è), no per
   heurística posicional. Els camps veritat_fals porten sempre
   "explicacio" omplerta amb el fet correcte, tant si la pregunta és
   certa com falsa. */

const QUESTIONS = [
  {
    "id": "1r_mat-1_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Nombres fins a 20",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin número ve just abans del 15?",
    "opcions": [
      "14",
      "16",
      "13",
      "17"
    ],
    "resposta_correcta": "14"
  },
  {
    "id": "1r_mat-1_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Nombres fins a 20",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin número és més gran: el 17 o el 12?",
    "opcions": [
      "17",
      "12",
      "Són iguals",
      "Cap dels dos"
    ],
    "resposta_correcta": "17"
  },
  {
    "id": "1r_mat-1_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Nombres fins a 20",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El número 20 té dues xifres: el 2 i el 0.",
    "pregunta": "El número 20 té tres xifres.",
    "resposta_correcta": false
  },
  {
    "id": "1r_mat-1_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Nombres fins a 20",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Compta de 2 en 2: 2, 4, 6, __?",
    "opcions": [
      "8",
      "7",
      "10",
      "9"
    ],
    "resposta_correcta": "8"
  },
  {
    "id": "1r_mat-1_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Nombres fins a 20",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quants ous hi ha? 🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚🥚",
    "resposta_correcta": "12",
    "respostes_acceptades": [
      "12"
    ]
  },
  {
    "id": "1r_mat-1_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Nombres fins a 20",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin signe fem servir quan un número és més gran que un altre?",
    "opcions": [
      ">",
      "+",
      "=",
      "-"
    ],
    "resposta_correcta": ">"
  },
  {
    "id": "1r_mat-2_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Sumes i restes fins a 20",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "8 + 5 = ?",
    "opcions": [
      "13",
      "12",
      "14",
      "11"
    ],
    "resposta_correcta": "13"
  },
  {
    "id": "1r_mat-2_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Sumes i restes fins a 20",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "12 - 4 = ?",
    "opcions": [
      "8",
      "9",
      "7",
      "6"
    ],
    "resposta_correcta": "8"
  },
  {
    "id": "1r_mat-2_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Sumes i restes fins a 20",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "9 + 7 = ?",
    "resposta_correcta": "16",
    "respostes_acceptades": [
      "16"
    ]
  },
  {
    "id": "1r_mat-2_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Sumes i restes fins a 20",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "15 - 6 = ?",
    "opcions": [
      "9",
      "8",
      "10",
      "7"
    ],
    "resposta_correcta": "9"
  },
  {
    "id": "1r_mat-2_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Sumes i restes fins a 20",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "10 + 10 = 20, sumant les desenes.",
    "pregunta": "10 + 10 = 20",
    "resposta_correcta": true
  },
  {
    "id": "1r_mat-2_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Sumes i restes fins a 20",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "20 - 5 = ?",
    "resposta_correcta": "15",
    "respostes_acceptades": [
      "15"
    ]
  },
  {
    "id": "1r_mat-3_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "El doble i la meitat",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el doble de 4?",
    "opcions": [
      "8",
      "6",
      "4",
      "10"
    ],
    "resposta_correcta": "8"
  },
  {
    "id": "1r_mat-3_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "El doble i la meitat",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és la meitat de 10?",
    "opcions": [
      "5",
      "4",
      "6",
      "2"
    ],
    "resposta_correcta": "5"
  },
  {
    "id": "1r_mat-3_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "El doble i la meitat",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El doble de 3 és 6, perquè 3 + 3 = 6.",
    "pregunta": "El doble de 3 és 5.",
    "resposta_correcta": false
  },
  {
    "id": "1r_mat-3_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "El doble i la meitat",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el doble de 6?",
    "opcions": [
      "12",
      "10",
      "8",
      "14"
    ],
    "resposta_correcta": "12"
  },
  {
    "id": "1r_mat-3_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "El doble i la meitat",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és la meitat de 8?",
    "opcions": [
      "4",
      "3",
      "5",
      "2"
    ],
    "resposta_correcta": "4"
  },
  {
    "id": "1r_mat-3_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "El doble i la meitat",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "El doble de 5 és quant?",
    "resposta_correcta": "10",
    "respostes_acceptades": [
      "10"
    ]
  },
  {
    "id": "1r_mat-4_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Problemes i mesures",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "En Joan té 8 caramels i li'n regalen 5 més. Quants en té ara?",
    "opcions": [
      "13",
      "12",
      "14",
      "11"
    ],
    "resposta_correcta": "13"
  },
  {
    "id": "1r_mat-4_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Problemes i mesures",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "La Laia tenia 15 cromos i n'ha perdut 6. Quants li queden?",
    "opcions": [
      "9",
      "8",
      "10",
      "7"
    ],
    "resposta_correcta": "9"
  },
  {
    "id": "1r_mat-4_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Problemes i mesures",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina hora marca un rellotge quan les dues agulles apunten al 12?",
    "opcions": [
      "Les 12 en punt",
      "Les 6 en punt",
      "Les 3 en punt",
      "Les 9 en punt"
    ],
    "resposta_correcta": "Les 12 en punt"
  },
  {
    "id": "1r_mat-4_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Problemes i mesures",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Una setmana té 7 dies: de dilluns a diumenge.",
    "pregunta": "Una setmana té 7 dies.",
    "resposta_correcta": true
  },
  {
    "id": "1r_mat-4_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Problemes i mesures",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quants mesos té un any?",
    "opcions": [
      "12",
      "10",
      "6",
      "24"
    ],
    "resposta_correcta": "12"
  },
  {
    "id": "1r_mat-4_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "mat",
    "tema": "Problemes i mesures",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena aquests números de més petit a més gran.",
    "elements_ordre_correcte": [
      "3",
      "9",
      "14",
      "18"
    ]
  },
  {
    "id": "1r_cat-1_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Síl·labes i lletres",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quantes síl·labes té la paraula «Pilota»?",
    "opcions": [
      "3",
      "2",
      "4",
      "1"
    ],
    "resposta_correcta": "3"
  },
  {
    "id": "1r_cat-1_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Síl·labes i lletres",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula comença amb consonant?",
    "opcions": [
      "Taula",
      "Ocell",
      "Elefant",
      "Aranya"
    ],
    "resposta_correcta": "Taula"
  },
  {
    "id": "1r_cat-1_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Síl·labes i lletres",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "«Cotxe» té dues síl·labes: cot-xe.",
    "pregunta": "La paraula «Cotxe» té dues síl·labes.",
    "resposta_correcta": true
  },
  {
    "id": "1r_cat-1_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Síl·labes i lletres",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina d'aquestes lletres és una vocal?",
    "opcions": [
      "E",
      "T",
      "M",
      "S"
    ],
    "resposta_correcta": "E"
  },
  {
    "id": "1r_cat-1_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Síl·labes i lletres",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quantes síl·labes té «Papallona»?",
    "opcions": [
      "4",
      "3",
      "5",
      "2"
    ],
    "resposta_correcta": "4"
  },
  {
    "id": "1r_cat-1_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Síl·labes i lletres",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena les síl·labes per formar la paraula «Pilota».",
    "elements_ordre_correcte": [
      "Pi",
      "lo",
      "ta"
    ]
  },
  {
    "id": "1r_cat-2_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Plurals i paraules",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el plural de «Casa»?",
    "opcions": [
      "Cases",
      "Casa",
      "Casos",
      "Caseta"
    ],
    "resposta_correcta": "Cases"
  },
  {
    "id": "1r_cat-2_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Plurals i paraules",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el plural de «Flor»?",
    "opcions": [
      "Flors",
      "Flores",
      "Flor",
      "Florns"
    ],
    "resposta_correcta": "Flors"
  },
  {
    "id": "1r_cat-2_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Plurals i paraules",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El plural de «Llibre» és «Llibres», amb -s al final.",
    "pregunta": "El plural de «Llibre» és «Llibris».",
    "resposta_correcta": false
  },
  {
    "id": "1r_cat-2_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Plurals i paraules",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el singular de «Gats»?",
    "opcions": [
      "Gat",
      "Gata",
      "Gates",
      "Gat's"
    ],
    "resposta_correcta": "Gat"
  },
  {
    "id": "1r_cat-2_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Plurals i paraules",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula és el contrari de «Gran»?",
    "opcions": [
      "Petit",
      "Alt",
      "Llarg",
      "Fort"
    ],
    "resposta_correcta": "Petit"
  },
  {
    "id": "1r_cat-2_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Plurals i paraules",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada paraula amb la seva forma femenina.",
    "parelles": [
      {
        "a": "Nen",
        "b": "Nena"
      },
      {
        "a": "Gat",
        "b": "Gata"
      },
      {
        "a": "Gos",
        "b": "Gossa"
      },
      {
        "a": "Avi",
        "b": "Àvia"
      }
    ]
  },
  {
    "id": "1r_cat-3_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Comprensió lectora",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu el gos d'en Pol?",
    "opcions": [
      "Bolet",
      "Pol",
      "Pilota",
      "Parc"
    ],
    "resposta_correcta": "Bolet",
    "text": "En Pol té un gos petit que es diu Bolet. Cada tarda van al parc a jugar amb la pilota."
  },
  {
    "id": "1r_cat-3_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Comprensió lectora",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On van cada tarda en Pol i el seu gos?",
    "opcions": [
      "Al parc",
      "A l'escola",
      "A la platja",
      "Al riu"
    ],
    "resposta_correcta": "Al parc",
    "text": "En Pol té un gos petit que es diu Bolet. Cada tarda van al parc a jugar amb la pilota."
  },
  {
    "id": "1r_cat-3_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Comprensió lectora",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Segons el text, en Pol té un gos que es diu Bolet, no un gat.",
    "pregunta": "Segons el text, en Pol té un gat.",
    "resposta_correcta": false,
    "text": "En Pol té un gos petit que es diu Bolet. Cada tarda van al parc a jugar amb la pilota."
  },
  {
    "id": "1r_cat-3_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Comprensió lectora",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Amb què juguen al parc en Pol i el seu gos?",
    "opcions": [
      "Amb la pilota",
      "Amb un cotxe",
      "Amb un llibre",
      "Amb un ordinador"
    ],
    "resposta_correcta": "Amb la pilota",
    "text": "En Pol té un gos petit que es diu Bolet. Cada tarda van al parc a jugar amb la pilota."
  },
  {
    "id": "1r_cat-3_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Comprensió lectora",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina mida té el gos d'en Pol?",
    "opcions": [
      "Petit",
      "Gran",
      "Gegant",
      "No se sap"
    ],
    "resposta_correcta": "Petit",
    "text": "En Pol té un gos petit que es diu Bolet. Cada tarda van al parc a jugar amb la pilota."
  },
  {
    "id": "1r_cat-3_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Comprensió lectora",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El text diu que hi van cada tarda a jugar amb la pilota.",
    "pregunta": "En Pol i el seu gos van al parc cada tarda.",
    "resposta_correcta": true,
    "text": "En Pol té un gos petit que es diu Bolet. Cada tarda van al parc a jugar amb la pilota."
  },
  {
    "id": "1r_cat-4_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Rimes i categories",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula NO és una fruita?",
    "opcions": [
      "Cadira",
      "Poma",
      "Pera",
      "Plàtan"
    ],
    "resposta_correcta": "Cadira"
  },
  {
    "id": "1r_cat-4_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Rimes i categories",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula rima amb «Pastís»?",
    "opcions": [
      "Anís",
      "Cadira",
      "Taula",
      "Pilota"
    ],
    "resposta_correcta": "Anís"
  },
  {
    "id": "1r_cat-4_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Rimes i categories",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "«Gos» i «Ós» rimen perquè acaben amb un so semblant; «Pa» no hi rima.",
    "pregunta": "«Gos» i «Pa» rimen.",
    "resposta_correcta": false
  },
  {
    "id": "1r_cat-4_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Rimes i categories",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula NO és un animal?",
    "opcions": [
      "Cadira",
      "Gat",
      "Peix",
      "Ocell"
    ],
    "resposta_correcta": "Cadira"
  },
  {
    "id": "1r_cat-4_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Rimes i categories",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula rima amb «Casa»?",
    "opcions": [
      "Massa",
      "Cotxe",
      "Llibre",
      "Pilota"
    ],
    "resposta_correcta": "Massa"
  },
  {
    "id": "1r_cat-4_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cat",
    "tema": "Rimes i categories",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula comença amb la mateixa lletra que «Sol»?",
    "opcions": [
      "Sabata",
      "Taula",
      "Cadira",
      "Ocell"
    ],
    "resposta_correcta": "Sabata"
  },
  {
    "id": "1r_cas-1_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Sílabas y letras",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuántas sílabas tiene la palabra «Pelota»?",
    "opcions": [
      "3",
      "2",
      "4",
      "1"
    ],
    "resposta_correcta": "3"
  },
  {
    "id": "1r_cas-1_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Sílabas y letras",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué palabra empieza con consonante?",
    "opcions": [
      "Mesa",
      "Oso",
      "Elefante",
      "Araña"
    ],
    "resposta_correcta": "Mesa"
  },
  {
    "id": "1r_cas-1_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Sílabas y letras",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "«Coche» tiene dos sílabas: co-che.",
    "pregunta": "La palabra «Coche» tiene dos sílabas.",
    "resposta_correcta": true
  },
  {
    "id": "1r_cas-1_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Sílabas y letras",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál de estas letras es una vocal?",
    "opcions": [
      "E",
      "T",
      "M",
      "S"
    ],
    "resposta_correcta": "E"
  },
  {
    "id": "1r_cas-1_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Sílabas y letras",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuántas sílabas tiene «Mariposa»?",
    "opcions": [
      "4",
      "3",
      "5",
      "2"
    ],
    "resposta_correcta": "4"
  },
  {
    "id": "1r_cas-1_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Sílabas y letras",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena las sílabas para formar la palabra «Pelota».",
    "elements_ordre_correcte": [
      "Pe",
      "lo",
      "ta"
    ]
  },
  {
    "id": "1r_cas-2_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Plurales y palabras",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál es el plural de «Casa»?",
    "opcions": [
      "Casas",
      "Casa",
      "Casos",
      "Caseta"
    ],
    "resposta_correcta": "Casas"
  },
  {
    "id": "1r_cas-2_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Plurales y palabras",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál es el plural de «Flor»?",
    "opcions": [
      "Flores",
      "Flors",
      "Flor",
      "Florns"
    ],
    "resposta_correcta": "Flores"
  },
  {
    "id": "1r_cas-2_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Plurales y palabras",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El plural de «Libro» es «Libros», añadiendo una -s.",
    "pregunta": "El plural de «Libro» es «Libres».",
    "resposta_correcta": false
  },
  {
    "id": "1r_cas-2_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Plurales y palabras",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál es el singular de «Gatos»?",
    "opcions": [
      "Gato",
      "Gata",
      "Gatas",
      "Gato's"
    ],
    "resposta_correcta": "Gato"
  },
  {
    "id": "1r_cas-2_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Plurales y palabras",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál es el contrario de «Grande»?",
    "opcions": [
      "Pequeño",
      "Alto",
      "Largo",
      "Fuerte"
    ],
    "resposta_correcta": "Pequeño"
  },
  {
    "id": "1r_cas-2_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Plurales y palabras",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada palabra con su forma femenina.",
    "parelles": [
      {
        "a": "Niño",
        "b": "Niña"
      },
      {
        "a": "Gato",
        "b": "Gata"
      },
      {
        "a": "Perro",
        "b": "Perra"
      },
      {
        "a": "Abuelo",
        "b": "Abuela"
      }
    ]
  },
  {
    "id": "1r_cas-3_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Comprensión lectora",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cómo se llama el pez de Ana?",
    "opcions": [
      "Nemo",
      "Ana",
      "Colegio",
      "Naranja"
    ],
    "resposta_correcta": "Nemo",
    "text": "Ana tiene un pez de color naranja que se llama Nemo. Cada mañana le da de comer antes de ir al colegio."
  },
  {
    "id": "1r_cas-3_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Comprensión lectora",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿De qué color es el pez?",
    "opcions": [
      "Naranja",
      "Azul",
      "Verde",
      "Rojo"
    ],
    "resposta_correcta": "Naranja",
    "text": "Ana tiene un pez de color naranja que se llama Nemo. Cada mañana le da de comer antes de ir al colegio."
  },
  {
    "id": "1r_cas-3_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Comprensión lectora",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El texto dice que Ana le da de comer cada mañana antes de ir al colegio.",
    "pregunta": "Según el texto, Ana le da de comer al pez cada mañana.",
    "resposta_correcta": true,
    "text": "Ana tiene un pez de color naranja que se llama Nemo. Cada mañana le da de comer antes de ir al colegio."
  },
  {
    "id": "1r_cas-3_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Comprensión lectora",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuándo le da de comer Ana al pez?",
    "opcions": [
      "Antes de ir al colegio",
      "Por la noche",
      "Nunca",
      "Los domingos"
    ],
    "resposta_correcta": "Antes de ir al colegio",
    "text": "Ana tiene un pez de color naranja que se llama Nemo. Cada mañana le da de comer antes de ir al colegio."
  },
  {
    "id": "1r_cas-3_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Comprensión lectora",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué animal tiene Ana?",
    "opcions": [
      "Un pez",
      "Un perro",
      "Un gato",
      "Un pájaro"
    ],
    "resposta_correcta": "Un pez",
    "text": "Ana tiene un pez de color naranja que se llama Nemo. Cada mañana le da de comer antes de ir al colegio."
  },
  {
    "id": "1r_cas-3_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Comprensión lectora",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Según el texto, el pez de Ana es de color naranja.",
    "pregunta": "Según el texto, el pez de Ana es azul.",
    "resposta_correcta": false,
    "text": "Ana tiene un pez de color naranja que se llama Nemo. Cada mañana le da de comer antes de ir al colegio."
  },
  {
    "id": "1r_cas-4_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Rimas y categorías",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué palabra NO es una fruta?",
    "opcions": [
      "Silla",
      "Manzana",
      "Pera",
      "Plátano"
    ],
    "resposta_correcta": "Silla"
  },
  {
    "id": "1r_cas-4_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Rimas y categorías",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué palabra rima con «Ratón»?",
    "opcions": [
      "Camión",
      "Casa",
      "Mesa",
      "Silla"
    ],
    "resposta_correcta": "Camión"
  },
  {
    "id": "1r_cas-4_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Rimas y categorías",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "«Gato» y «Pato» riman porque acaban igual; «Mesa» no.",
    "pregunta": "«Gato» y «Mesa» riman.",
    "resposta_correcta": false
  },
  {
    "id": "1r_cas-4_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Rimas y categorías",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué palabra NO es un animal?",
    "opcions": [
      "Silla",
      "Gato",
      "Pez",
      "Pájaro"
    ],
    "resposta_correcta": "Silla"
  },
  {
    "id": "1r_cas-4_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Rimas y categorías",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué palabra rima con «Pan»?",
    "opcions": [
      "Flan",
      "Mesa",
      "Libro",
      "Pelota"
    ],
    "resposta_correcta": "Flan"
  },
  {
    "id": "1r_cas-4_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "cas",
    "tema": "Rimas y categorías",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué palabra empieza con la misma letra que «Sol»?",
    "opcions": [
      "Silla",
      "Mesa",
      "Casa",
      "Pato"
    ],
    "resposta_correcta": "Silla"
  },
  {
    "id": "1r_eng-1_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Numbers 1-10",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «6» in English?",
    "opcions": [
      "Six",
      "Seven",
      "Five",
      "Nine"
    ],
    "resposta_correcta": "Six"
  },
  {
    "id": "1r_eng-1_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Numbers 1-10",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «9» in English?",
    "opcions": [
      "Nine",
      "Eight",
      "Ten",
      "Six"
    ],
    "resposta_correcta": "Nine"
  },
  {
    "id": "1r_eng-1_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Numbers 1-10",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "«Ten» is number 10; number 9 is «nine».",
    "pregunta": "«Ten» is number 9.",
    "resposta_correcta": false
  },
  {
    "id": "1r_eng-1_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Numbers 1-10",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "What number is «eight»?",
    "opcions": [
      "8",
      "7",
      "9",
      "6"
    ],
    "resposta_correcta": "8"
  },
  {
    "id": "1r_eng-1_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Numbers 1-10",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Write the number for «seven».",
    "resposta_correcta": "7",
    "respostes_acceptades": [
      "7"
    ]
  },
  {
    "id": "1r_eng-1_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Numbers 1-10",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Order these numbers from smallest to biggest.",
    "elements_ordre_correcte": [
      "three",
      "six",
      "eight",
      "ten"
    ]
  },
  {
    "id": "1r_eng-2_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Family & body",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «pare» in English?",
    "opcions": [
      "Father",
      "Mother",
      "Brother",
      "Sister"
    ],
    "resposta_correcta": "Father"
  },
  {
    "id": "1r_eng-2_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Family & body",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «mà» in English? ✋",
    "opcions": [
      "Hand",
      "Foot",
      "Head",
      "Eye"
    ],
    "resposta_correcta": "Hand"
  },
  {
    "id": "1r_eng-2_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Family & body",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "«Head» means «cap» in Catalan.",
    "pregunta": "«Head» means «cap».",
    "resposta_correcta": true
  },
  {
    "id": "1r_eng-2_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Family & body",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «germana» in English?",
    "opcions": [
      "Sister",
      "Brother",
      "Mother",
      "Father"
    ],
    "resposta_correcta": "Sister"
  },
  {
    "id": "1r_eng-2_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Family & body",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «peu» in English? 🦶",
    "opcions": [
      "Foot",
      "Hand",
      "Head",
      "Ear"
    ],
    "resposta_correcta": "Foot"
  },
  {
    "id": "1r_eng-2_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Family & body",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Match each family word.",
    "parelles": [
      {
        "a": "Mare",
        "b": "Mother"
      },
      {
        "a": "Pare",
        "b": "Father"
      },
      {
        "a": "Germà",
        "b": "Brother"
      },
      {
        "a": "Germana",
        "b": "Sister"
      }
    ]
  },
  {
    "id": "1r_eng-3_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Food & animals",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «poma» in English? 🍎",
    "opcions": [
      "Apple",
      "Bread",
      "Milk",
      "Fish"
    ],
    "resposta_correcta": "Apple"
  },
  {
    "id": "1r_eng-3_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Food & animals",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «pa» in English? 🍞",
    "opcions": [
      "Bread",
      "Apple",
      "Water",
      "Egg"
    ],
    "resposta_correcta": "Bread"
  },
  {
    "id": "1r_eng-3_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Food & animals",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "«Milk» means «llet»; «cheese» means «formatge».",
    "pregunta": "«Milk» means «formatge».",
    "resposta_correcta": false
  },
  {
    "id": "1r_eng-3_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Food & animals",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «cavall» in English? 🐴",
    "opcions": [
      "Horse",
      "Cow",
      "Sheep",
      "Pig"
    ],
    "resposta_correcta": "Horse"
  },
  {
    "id": "1r_eng-3_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Food & animals",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «porc» in English? 🐷",
    "opcions": [
      "Pig",
      "Horse",
      "Cow",
      "Sheep"
    ],
    "resposta_correcta": "Pig"
  },
  {
    "id": "1r_eng-3_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Food & animals",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Order the words to make a sentence.",
    "elements_ordre_correcte": [
      "I",
      "like",
      "apples"
    ]
  },
  {
    "id": "1r_eng-4_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Simple sentences",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «This ___ a dog.»",
    "opcions": [
      "is",
      "are",
      "am",
      "be"
    ],
    "resposta_correcta": "is"
  },
  {
    "id": "1r_eng-4_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Simple sentences",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «These ___ cats.»",
    "opcions": [
      "are",
      "is",
      "am",
      "be"
    ],
    "resposta_correcta": "are"
  },
  {
    "id": "1r_eng-4_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Simple sentences",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "«This is a book» follows the correct word order: subject + verb + object.",
    "pregunta": "«This is a book» is correct English.",
    "resposta_correcta": true
  },
  {
    "id": "1r_eng-4_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Simple sentences",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «I ___ six years old.»",
    "opcions": [
      "am",
      "is",
      "are",
      "be"
    ],
    "resposta_correcta": "am"
  },
  {
    "id": "1r_eng-4_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Simple sentences",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «She ___ happy.»",
    "resposta_correcta": "is",
    "respostes_acceptades": [
      "is"
    ]
  },
  {
    "id": "1r_eng-4_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "eng",
    "tema": "Simple sentences",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Order the words to make a sentence.",
    "elements_ordre_correcte": [
      "He",
      "has",
      "got",
      "a",
      "cat"
    ]
  },
  {
    "id": "1r_soc-1_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "La família",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu el fill del teu germà?",
    "opcions": [
      "Nebot",
      "Cosí",
      "Net",
      "Fillol"
    ],
    "resposta_correcta": "Nebot"
  },
  {
    "id": "1r_soc-1_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "La família",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On viuen normalment els avis?",
    "opcions": [
      "A casa seva",
      "Al cotxe",
      "A l'escola",
      "Al bosc"
    ],
    "resposta_correcta": "A casa seva"
  },
  {
    "id": "1r_soc-1_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "La família",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Els cosins són fills dels teus oncles i ties; els fills dels teus avis són els teus pares, oncles i ties.",
    "pregunta": "Els cosins són fills dels teus avis.",
    "resposta_correcta": false
  },
  {
    "id": "1r_soc-1_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "La família",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu la filla dels teus pares que no ets tu?",
    "opcions": [
      "Germana",
      "Cosina",
      "Neboda",
      "Tia"
    ],
    "resposta_correcta": "Germana"
  },
  {
    "id": "1r_soc-1_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "La família",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin d'aquests NO forma part de la família?",
    "opcions": [
      "El veí",
      "El pare",
      "La mare",
      "L'avi"
    ],
    "resposta_correcta": "El veí"
  },
  {
    "id": "1r_soc-1_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "La família",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui sol ser més gran, l'avi o el nét?",
    "opcions": [
      "L'avi",
      "El nét",
      "Són iguals",
      "Cap dels dos"
    ],
    "resposta_correcta": "L'avi"
  },
  {
    "id": "1r_soc-2_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "L'escola i les normes",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què hem de fer quan algú parla a classe?",
    "opcions": [
      "Escoltar en silenci",
      "Cridar",
      "Sortir corrents",
      "Jugar"
    ],
    "resposta_correcta": "Escoltar en silenci"
  },
  {
    "id": "1r_soc-2_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "L'escola i les normes",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui ens ajuda si ens fem mal a l'escola?",
    "opcions": [
      "El mestre o la mestra",
      "Un desconegut",
      "Ningú",
      "Un altre alumne sol"
    ],
    "resposta_correcta": "El mestre o la mestra"
  },
  {
    "id": "1r_soc-2_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "L'escola i les normes",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Compartir les joguines ens ajuda a conviure bé amb els companys.",
    "pregunta": "Hem de compartir les joguines amb els companys.",
    "resposta_correcta": true
  },
  {
    "id": "1r_soc-2_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "L'escola i les normes",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què fem a la biblioteca de l'escola?",
    "opcions": [
      "Llegir llibres en silenci",
      "Jugar a futbol",
      "Dormir",
      "Cuinar"
    ],
    "resposta_correcta": "Llegir llibres en silenci"
  },
  {
    "id": "1r_soc-2_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "L'escola i les normes",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com hem de demanar les coses?",
    "opcions": [
      "Si us plau i gràcies",
      "Cridant",
      "Sense dir res",
      "Empenyent"
    ],
    "resposta_correcta": "Si us plau i gràcies"
  },
  {
    "id": "1r_soc-2_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "L'escola i les normes",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què fem abans d'entrar a classe?",
    "opcions": [
      "Fer una fila",
      "Córrer",
      "Amagar-nos",
      "Cridar"
    ],
    "resposta_correcta": "Fer una fila"
  },
  {
    "id": "1r_soc-3_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "El poble o la ciutat",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On podem agafar llibres en préstec?",
    "opcions": [
      "A la biblioteca",
      "Al forn",
      "A l'hospital",
      "Al riu"
    ],
    "resposta_correcta": "A la biblioteca"
  },
  {
    "id": "1r_soc-3_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "El poble o la ciutat",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui ens porta les cartes i els paquets a casa?",
    "opcions": [
      "El carter o la cartera",
      "El metge",
      "El mestre",
      "El bomber"
    ],
    "resposta_correcta": "El carter o la cartera"
  },
  {
    "id": "1r_soc-3_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "El poble o la ciutat",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Els semàfors ens ajuden a creuar el carrer amb seguretat, regulant el pas de vehicles i vianants.",
    "pregunta": "Els semàfors serveixen per aparcar el cotxe.",
    "resposta_correcta": false
  },
  {
    "id": "1r_soc-3_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "El poble o la ciutat",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On comprem la carn i el peix?",
    "opcions": [
      "Al mercat",
      "A la biblioteca",
      "A l'escola",
      "Al riu"
    ],
    "resposta_correcta": "Al mercat"
  },
  {
    "id": "1r_soc-3_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "El poble o la ciutat",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui ens ajuda a apagar un incendi?",
    "opcions": [
      "Els bombers",
      "Els mestres",
      "Els forners",
      "Els jardiners"
    ],
    "resposta_correcta": "Els bombers"
  },
  {
    "id": "1r_soc-3_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "El poble o la ciutat",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin color té el semàfor quan hem d'esperar?",
    "opcions": [
      "Vermell",
      "Verd",
      "Groc",
      "Blau"
    ],
    "resposta_correcta": "Vermell"
  },
  {
    "id": "1r_soc-4_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "Feines i oficis",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui ens cuida les dents?",
    "opcions": [
      "El dentista",
      "El bomber",
      "El forner",
      "El jardiner"
    ],
    "resposta_correcta": "El dentista"
  },
  {
    "id": "1r_soc-4_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "Feines i oficis",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui fa el pa cada dia?",
    "opcions": [
      "El forner o la fornera",
      "El dentista",
      "El bomber",
      "El jardiner"
    ],
    "resposta_correcta": "El forner o la fornera"
  },
  {
    "id": "1r_soc-4_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "Feines i oficis",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El metge o la metgessa ens cuida i ens ajuda a recuperar la salut.",
    "pregunta": "El metge o la metgessa ens cuida quan estem malalts.",
    "resposta_correcta": true
  },
  {
    "id": "1r_soc-4_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "Feines i oficis",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui cuida les plantes i els jardins?",
    "opcions": [
      "El jardiner o la jardinera",
      "El dentista",
      "El carter",
      "El forner"
    ],
    "resposta_correcta": "El jardiner o la jardinera"
  },
  {
    "id": "1r_soc-4_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "Feines i oficis",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui condueix l'autobús?",
    "opcions": [
      "El conductor o la conductora",
      "El mestre",
      "El metge",
      "El forner"
    ],
    "resposta_correcta": "El conductor o la conductora"
  },
  {
    "id": "1r_soc-4_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "soc",
    "tema": "Feines i oficis",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui cuina els plats en un restaurant?",
    "opcions": [
      "El cuiner o la cuinera",
      "El dentista",
      "El bomber",
      "El jardiner"
    ],
    "resposta_correcta": "El cuiner o la cuinera"
  },
  {
    "id": "1r_nat-1_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "Animals i les seves cries",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu la cria del gos?",
    "opcions": [
      "Cadell",
      "Vedell",
      "Poltre",
      "Xai"
    ],
    "resposta_correcta": "Cadell"
  },
  {
    "id": "1r_nat-1_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "Animals i les seves cries",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu la cria del gat?",
    "opcions": [
      "Gatet",
      "Cadell",
      "Vedell",
      "Poltre"
    ],
    "resposta_correcta": "Gatet"
  },
  {
    "id": "1r_nat-1_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "Animals i les seves cries",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "La cria de la vaca es diu vedell.",
    "pregunta": "La cria de la vaca es diu vedell.",
    "resposta_correcta": true
  },
  {
    "id": "1r_nat-1_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "Animals i les seves cries",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu la cria del cavall?",
    "opcions": [
      "Poltre",
      "Xai",
      "Cadell",
      "Gatet"
    ],
    "resposta_correcta": "Poltre"
  },
  {
    "id": "1r_nat-1_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "Animals i les seves cries",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu la cria de l'ovella?",
    "opcions": [
      "Xai",
      "Poltre",
      "Vedell",
      "Cadell"
    ],
    "resposta_correcta": "Xai"
  },
  {
    "id": "1r_nat-1_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "Animals i les seves cries",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada animal amb la seva cria.",
    "parelles": [
      {
        "a": "Gos",
        "b": "Cadell"
      },
      {
        "a": "Gat",
        "b": "Gatet"
      },
      {
        "a": "Vaca",
        "b": "Vedell"
      },
      {
        "a": "Cavall",
        "b": "Poltre"
      }
    ]
  },
  {
    "id": "1r_nat-2_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "On viuen els animals",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On viu el peix?",
    "opcions": [
      "A l'aigua",
      "A l'arbre",
      "Sota terra",
      "A l'aire"
    ],
    "resposta_correcta": "A l'aigua"
  },
  {
    "id": "1r_nat-2_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "On viuen els animals",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On viu el conill?",
    "opcions": [
      "En un cau sota terra",
      "A l'aigua",
      "A l'arbre",
      "Al núvol"
    ],
    "resposta_correcta": "En un cau sota terra"
  },
  {
    "id": "1r_nat-2_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "On viuen els animals",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Molts ocells fan el niu als arbres, no sota l'aigua.",
    "pregunta": "L'ocell fa el niu sota l'aigua.",
    "resposta_correcta": false
  },
  {
    "id": "1r_nat-2_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "On viuen els animals",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On viu l'ós polar?",
    "opcions": [
      "A llocs molt freds",
      "A llocs molt calents",
      "Al desert",
      "A l'aigua sempre"
    ],
    "resposta_correcta": "A llocs molt freds"
  },
  {
    "id": "1r_nat-2_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "On viuen els animals",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On viu el camell?",
    "opcions": [
      "Al desert",
      "A l'aigua",
      "Als llocs freds",
      "Al bosc humit"
    ],
    "resposta_correcta": "Al desert"
  },
  {
    "id": "1r_nat-2_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "On viuen els animals",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On viuen els peixos del mar?",
    "opcions": [
      "A l'aigua salada",
      "A l'aigua dolça",
      "A la terra",
      "A l'aire"
    ],
    "resposta_correcta": "A l'aigua salada"
  },
  {
    "id": "1r_nat-3_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El cicle de vida",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "D'on surt un pollet?",
    "opcions": [
      "D'un ou",
      "D'una llavor",
      "D'una fulla",
      "D'una arrel"
    ],
    "resposta_correcta": "D'un ou"
  },
  {
    "id": "1r_nat-3_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El cicle de vida",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què necessita una llavor per créixer?",
    "opcions": [
      "Aigua, llum i terra",
      "Només fosca",
      "Res",
      "Sorra seca"
    ],
    "resposta_correcta": "Aigua, llum i terra"
  },
  {
    "id": "1r_nat-3_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El cicle de vida",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Les granotes comencen la seva vida com a capgrossos abans de transformar-se.",
    "pregunta": "Una granota comença sent capgròs.",
    "resposta_correcta": true
  },
  {
    "id": "1r_nat-3_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El cicle de vida",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què es converteix en una papallona?",
    "opcions": [
      "Una eruga",
      "Un peix",
      "Un ocell",
      "Una granota"
    ],
    "resposta_correcta": "Una eruga"
  },
  {
    "id": "1r_nat-3_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El cicle de vida",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és l'ordre correcte de creixement d'una planta?",
    "opcions": [
      "Llavor → Planta → Flor",
      "Flor → Llavor → Planta",
      "Planta → Flor → Llavor",
      "Flor → Planta → Llavor"
    ],
    "resposta_correcta": "Llavor → Planta → Flor"
  },
  {
    "id": "1r_nat-3_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El cicle de vida",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Aquest és el cicle de vida dels éssers humans.",
    "pregunta": "Els humans neixen, creixen, es fan grans i envelleixen.",
    "resposta_correcta": true
  },
  {
    "id": "1r_nat-4_q1",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El temps i les estacions",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin instrument mesura la temperatura?",
    "opcions": [
      "El termòmetre",
      "El rellotge",
      "La balança",
      "El regle"
    ],
    "resposta_correcta": "El termòmetre"
  },
  {
    "id": "1r_nat-4_q2",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El temps i les estacions",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "A quina estació els arbres es queden sense fulles?",
    "opcions": [
      "Tardor",
      "Estiu",
      "Primavera",
      "Totes"
    ],
    "resposta_correcta": "Tardor"
  },
  {
    "id": "1r_nat-4_q3",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El temps i les estacions",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "A l'hivern les temperatures són més baixes que a l'estiu.",
    "pregunta": "A l'hivern sol fer més fred que a l'estiu.",
    "resposta_correcta": true
  },
  {
    "id": "1r_nat-4_q4",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El temps i les estacions",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què fa que es formin els núvols?",
    "opcions": [
      "L'aigua que s'evapora",
      "El foc",
      "La terra",
      "Els arbres"
    ],
    "resposta_correcta": "L'aigua que s'evapora"
  },
  {
    "id": "1r_nat-4_q5",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El temps i les estacions",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina estació ve just abans de l'estiu?",
    "opcions": [
      "Primavera",
      "Hivern",
      "Tardor",
      "Cap"
    ],
    "resposta_correcta": "Primavera"
  },
  {
    "id": "1r_nat-4_q6",
    "curs": "1r",
    "cicle": "inicial",
    "materia": "nat",
    "tema": "El temps i les estacions",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quan és més probable que nevi?",
    "opcions": [
      "A l'hivern",
      "A l'estiu",
      "A la primavera",
      "Mai"
    ],
    "resposta_correcta": "A l'hivern"
  },
  {
    "id": "4t_mat-1_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Nombres fins a 999.999",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el valor posicional del 7 en el nombre 47.208?",
    "opcions": [
      "Unitats de miler",
      "Centenes",
      "Desenes de miler",
      "Unitats"
    ],
    "resposta_correcta": "Unitats de miler"
  },
  {
    "id": "4t_mat-1_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Nombres fins a 999.999",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com s'escriu amb xifres «trenta-quatre mil dos-cents setze»?",
    "opcions": [
      "34.216",
      "34.126",
      "3.416",
      "340.216"
    ],
    "resposta_correcta": "34.216"
  },
  {
    "id": "4t_mat-1_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Nombres fins a 999.999",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "12.435 és més gran que 12.345.",
    "pregunta": "El nombre 12.345 és més gran que 12.435.",
    "resposta_correcta": false
  },
  {
    "id": "4t_mat-1_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Nombres fins a 999.999",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin nombre és el més gran?",
    "opcions": [
      "45.982",
      "45.928",
      "45.899",
      "45.980"
    ],
    "resposta_correcta": "45.982"
  },
  {
    "id": "4t_mat-1_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Nombres fins a 999.999",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Escriu amb xifres el nombre «vuit mil noranta».",
    "resposta_correcta": "8090",
    "respostes_acceptades": [
      "8090",
      "8.090"
    ]
  },
  {
    "id": "4t_mat-1_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Nombres fins a 999.999",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Arrodoneix 4.678 a la centena més propera.",
    "opcions": [
      "4.700",
      "4.600",
      "4.680",
      "5.000"
    ],
    "resposta_correcta": "4.700"
  },
  {
    "id": "4t_mat-1_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Nombres fins a 999.999",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quantes desenes hi ha en 350?",
    "opcions": [
      "35",
      "350",
      "3",
      "5"
    ],
    "resposta_correcta": "35"
  },
  {
    "id": "4t_mat-1_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Nombres fins a 999.999",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada nombre escrit amb lletres amb les seves xifres.",
    "parelles": [
      {
        "a": "Quatre mil",
        "b": "4.000"
      },
      {
        "a": "Deu mil cinc-cents",
        "b": "10.500"
      },
      {
        "a": "Dos-cents tres",
        "b": "203"
      },
      {
        "a": "Setanta mil",
        "b": "70.000"
      }
    ]
  },
  {
    "id": "4t_mat-2_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Suma i resta",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "4.325 + 1.876 = ?",
    "resposta_correcta": "6201",
    "respostes_acceptades": [
      "6201",
      "6.201"
    ]
  },
  {
    "id": "4t_mat-2_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Suma i resta",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "9.004 − 2.568 = ?",
    "resposta_correcta": "6436",
    "respostes_acceptades": [
      "6436",
      "6.436"
    ]
  },
  {
    "id": "4t_mat-2_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Suma i resta",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "En Marc té 245 cromos i en compra 178 més. Quants cromos té ara?",
    "opcions": [
      "423",
      "413",
      "433",
      "313"
    ],
    "resposta_correcta": "423"
  },
  {
    "id": "4t_mat-2_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Suma i resta",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "Vendre suma diners (600 + 235) i el lloguer en resta (− 90).",
    "pregunta": "Una botiga tenia 600 € a la caixa. Ven productes per 235 € i gasta 90 € en lloguer. Quants diners hi ha ara a la caixa?",
    "opcions": [
      "745 €",
      "275 €",
      "925 €",
      "455 €"
    ],
    "resposta_correcta": "745 €"
  },
  {
    "id": "4t_mat-2_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Suma i resta",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Si sumem i després restem la mateixa quantitat, tornem al nombre inicial.",
    "pregunta": "La resta és l'operació inversa de la suma.",
    "resposta_correcta": true
  },
  {
    "id": "4t_mat-2_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Suma i resta",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el resultat de 999 + 1?",
    "opcions": [
      "1.000",
      "990",
      "1.090",
      "900"
    ],
    "resposta_correcta": "1.000"
  },
  {
    "id": "4t_mat-2_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Suma i resta",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "7.200 − 3.450 = ?",
    "resposta_correcta": "3750",
    "respostes_acceptades": [
      "3750",
      "3.750"
    ]
  },
  {
    "id": "4t_mat-2_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Suma i resta",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena aquests nombres de més petit a més gran.",
    "elements_ordre_correcte": [
      "120",
      "450",
      "980",
      "1.200"
    ]
  },
  {
    "id": "4t_mat-3_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Multiplicació",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "7 × 8 = ?",
    "opcions": [
      "56",
      "54",
      "64",
      "48"
    ],
    "resposta_correcta": "56"
  },
  {
    "id": "4t_mat-3_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Multiplicació",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "9 × 6 = ?",
    "opcions": [
      "54",
      "45",
      "56",
      "63"
    ],
    "resposta_correcta": "54"
  },
  {
    "id": "4t_mat-3_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Multiplicació",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "124 × 3 = ?",
    "resposta_correcta": "372",
    "respostes_acceptades": [
      "372"
    ]
  },
  {
    "id": "4t_mat-3_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Multiplicació",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "En una caixa hi ha 12 pomes. Quantes pomes hi ha en 15 caixes?",
    "opcions": [
      "180",
      "170",
      "190",
      "160"
    ],
    "resposta_correcta": "180"
  },
  {
    "id": "4t_mat-3_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Multiplicació",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Per exemple, 23 × 10 = 230.",
    "pregunta": "Multiplicar un nombre enter per 10 és afegir un zero al final del nombre.",
    "resposta_correcta": true
  },
  {
    "id": "4t_mat-3_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Multiplicació",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "45 × 20 = ?",
    "resposta_correcta": "900",
    "respostes_acceptades": [
      "900"
    ]
  },
  {
    "id": "4t_mat-3_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Multiplicació",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el resultat de 8 × 0?",
    "opcions": [
      "0",
      "8",
      "80",
      "1"
    ],
    "resposta_correcta": "0"
  },
  {
    "id": "4t_mat-3_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Multiplicació",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada multiplicació amb el seu resultat.",
    "parelles": [
      {
        "a": "6 × 7",
        "b": "42"
      },
      {
        "a": "8 × 9",
        "b": "72"
      },
      {
        "a": "5 × 5",
        "b": "25"
      },
      {
        "a": "4 × 6",
        "b": "24"
      }
    ]
  },
  {
    "id": "4t_mat-4_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Divisió",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "84 : 4 = ?",
    "resposta_correcta": "21",
    "respostes_acceptades": [
      "21"
    ]
  },
  {
    "id": "4t_mat-4_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Divisió",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "45 : 9 = ?",
    "opcions": [
      "5",
      "6",
      "4",
      "9"
    ],
    "resposta_correcta": "5"
  },
  {
    "id": "4t_mat-4_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Divisió",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Reparteixo 72 caramels entre 8 nens i nenes. Quants en toquen a cadascú?",
    "opcions": [
      "9",
      "8",
      "7",
      "10"
    ],
    "resposta_correcta": "9"
  },
  {
    "id": "4t_mat-4_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Divisió",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El residu ha de ser més petit que el divisor, no el doble ni més gran.",
    "pregunta": "En una divisió, el residu ha de ser el doble del divisor.",
    "resposta_correcta": false
  },
  {
    "id": "4t_mat-4_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Divisió",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "96 : 6 = ?",
    "resposta_correcta": "16",
    "respostes_acceptades": [
      "16"
    ]
  },
  {
    "id": "4t_mat-4_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Divisió",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el divisor a l'operació 63 : 7 = 9?",
    "opcions": [
      "7",
      "9",
      "63",
      "0"
    ],
    "resposta_correcta": "7"
  },
  {
    "id": "4t_mat-4_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Divisió",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "100 : 5 = ?",
    "opcions": [
      "20",
      "25",
      "15",
      "10"
    ],
    "resposta_correcta": "20"
  },
  {
    "id": "4t_mat-4_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Divisió",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada divisió amb el seu quocient.",
    "parelles": [
      {
        "a": "36 : 6",
        "b": "6"
      },
      {
        "a": "49 : 7",
        "b": "7"
      },
      {
        "a": "81 : 9",
        "b": "9"
      },
      {
        "a": "64 : 8",
        "b": "8"
      }
    ]
  },
  {
    "id": "4t_mat-5_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Fraccions i decimals",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina fracció representa la meitat d'un pastís?",
    "opcions": [
      "1/2",
      "1/4",
      "2/1",
      "1/3"
    ],
    "resposta_correcta": "1/2"
  },
  {
    "id": "4t_mat-5_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Fraccions i decimals",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "En una pizza tallada en 8 trossos, si en menges 3, quina fracció has menjat?",
    "opcions": [
      "3/8",
      "8/3",
      "3/5",
      "5/8"
    ],
    "resposta_correcta": "3/8"
  },
  {
    "id": "4t_mat-5_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Fraccions i decimals",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Una unitat partida en dues parts iguals, 0,5 i 1/2, representa la meitat.",
    "pregunta": "0,5 és el mateix que 1/2.",
    "resposta_correcta": true
  },
  {
    "id": "4t_mat-5_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Fraccions i decimals",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin nombre decimal representa «tres unitats i quatre dècimes»?",
    "opcions": [
      "3,4",
      "3,04",
      "34",
      "0,34"
    ],
    "resposta_correcta": "3,4"
  },
  {
    "id": "4t_mat-5_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Fraccions i decimals",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina fracció és més gran: 1/3 o 1/5?",
    "opcions": [
      "1/3",
      "1/5",
      "Són iguals",
      "Cap de les dues"
    ],
    "resposta_correcta": "1/3"
  },
  {
    "id": "4t_mat-5_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Fraccions i decimals",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Escriu en xifres «cinc dècimes» com a nombre decimal.",
    "resposta_correcta": "0,5",
    "respostes_acceptades": [
      "0,5",
      "0.5"
    ]
  },
  {
    "id": "4t_mat-5_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Fraccions i decimals",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "2/4 és equivalent a...",
    "opcions": [
      "1/2",
      "1/4",
      "2/8",
      "3/4"
    ],
    "resposta_correcta": "1/2"
  },
  {
    "id": "4t_mat-5_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Fraccions i decimals",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada fracció amb el seu decimal.",
    "parelles": [
      {
        "a": "1/2",
        "b": "0,5"
      },
      {
        "a": "1/4",
        "b": "0,25"
      },
      {
        "a": "3/4",
        "b": "0,75"
      },
      {
        "a": "1/10",
        "b": "0,1"
      }
    ]
  },
  {
    "id": "4t_mat-6_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Mesures i geometria",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quants centímetres té un metre?",
    "opcions": [
      "100",
      "10",
      "1.000",
      "50"
    ],
    "resposta_correcta": "100"
  },
  {
    "id": "4t_mat-6_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Mesures i geometria",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin instrument es fa servir per mesurar angles?",
    "opcions": [
      "El transportador d'angles",
      "El regle",
      "La balança",
      "El rellotge"
    ],
    "resposta_correcta": "El transportador d'angles"
  },
  {
    "id": "4t_mat-6_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Mesures i geometria",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Calcula el perímetre d'un quadrat de costat 5 cm (en cm).",
    "resposta_correcta": "20",
    "respostes_acceptades": [
      "20"
    ]
  },
  {
    "id": "4t_mat-6_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Mesures i geometria",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quants grams té un quilogram?",
    "opcions": [
      "1.000",
      "100",
      "10",
      "10.000"
    ],
    "resposta_correcta": "1.000"
  },
  {
    "id": "4t_mat-6_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Mesures i geometria",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Un angle recte mesura 90°; un angle de 180° és un angle pla.",
    "pregunta": "Un angle recte mesura 180°.",
    "resposta_correcta": false
  },
  {
    "id": "4t_mat-6_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Mesures i geometria",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina figura té tres costats?",
    "opcions": [
      "El triangle",
      "El quadrat",
      "El pentàgon",
      "L'hexàgon"
    ],
    "resposta_correcta": "El triangle"
  },
  {
    "id": "4t_mat-6_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Mesures i geometria",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Calcula l'àrea d'un rectangle de 4 cm de base i 3 cm d'alçada (en cm²).",
    "resposta_correcta": "12",
    "respostes_acceptades": [
      "12"
    ]
  },
  {
    "id": "4t_mat-6_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "mat",
    "tema": "Mesures i geometria",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena aquestes longituds de la més petita a la més gran.",
    "elements_ordre_correcte": [
      "5 mm",
      "5 cm",
      "5 dm",
      "5 m"
    ]
  },
  {
    "id": "4t_cat-1_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Ortografia: dígrafs",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula porta l·l (ela geminada)?",
    "opcions": [
      "novel·la",
      "cavall",
      "milió",
      "carrer"
    ],
    "resposta_correcta": "novel·la"
  },
  {
    "id": "4t_cat-1_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Ortografia: dígrafs",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com s'escriu correctament el mes que ve després de l'abril?",
    "opcions": [
      "maig",
      "matx",
      "maitx",
      "mag"
    ],
    "resposta_correcta": "maig"
  },
  {
    "id": "4t_cat-1_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Ortografia: dígrafs",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "«Any» s'escriu amb el dígraf ny.",
    "pregunta": "La paraula «any» s'escriu amb ny.",
    "resposta_correcta": true
  },
  {
    "id": "4t_cat-1_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Ortografia: dígrafs",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula està ben escrita?",
    "opcions": [
      "cel·la",
      "cela",
      "cel.la",
      "cella"
    ],
    "resposta_correcta": "cel·la"
  },
  {
    "id": "4t_cat-1_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Ortografia: dígrafs",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com sona el dígraf l·l?",
    "opcions": [
      "Es pronuncien les dues eles",
      "Sona com una ela sola",
      "Sona com una ena",
      "No es pronuncia"
    ],
    "resposta_correcta": "Es pronuncien les dues eles"
  },
  {
    "id": "4t_cat-1_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Ortografia: dígrafs",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula NO porta erra doble (rr)?",
    "opcions": [
      "cotxe",
      "carro",
      "terra",
      "gorra"
    ],
    "resposta_correcta": "cotxe"
  },
  {
    "id": "4t_cat-1_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Ortografia: dígrafs",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula porta ny?",
    "opcions": [
      "canya",
      "cana",
      "cania",
      "cañia"
    ],
    "resposta_correcta": "canya"
  },
  {
    "id": "4t_cat-1_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Ortografia: dígrafs",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena les paraules per formar una frase.",
    "elements_ordre_correcte": [
      "El",
      "gat",
      "dorm",
      "a",
      "la",
      "cadira"
    ]
  },
  {
    "id": "4t_cat-2_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Accentuació i síl·labes",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula porta accent obert (è)?",
    "opcions": [
      "cafè",
      "més",
      "també",
      "número"
    ],
    "resposta_correcta": "cafè"
  },
  {
    "id": "4t_cat-2_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Accentuació i síl·labes",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina d'aquestes paraules és aguda (l'accent tònic va a l'última síl·laba)?",
    "opcions": [
      "camió",
      "taula",
      "cadira",
      "arbre"
    ],
    "resposta_correcta": "camió"
  },
  {
    "id": "4t_cat-2_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Accentuació i síl·labes",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Només porten accent gràfic les paraules que ho necessiten segons les regles d'accentuació, no segons el nombre de síl·labes.",
    "pregunta": "Les paraules catalanes porten accent gràfic quan tenen més de cinc síl·labes.",
    "resposta_correcta": false
  },
  {
    "id": "4t_cat-2_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Accentuació i síl·labes",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és la síl·laba tònica de la paraula «pàgina»?",
    "opcions": [
      "PÀ (primera)",
      "GI (segona)",
      "NA (tercera)"
    ],
    "resposta_correcta": "PÀ (primera)"
  },
  {
    "id": "4t_cat-2_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Accentuació i síl·labes",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quantes síl·labes té la paraula «biblioteca»?",
    "opcions": [
      "5",
      "4",
      "6",
      "3"
    ],
    "resposta_correcta": "5"
  },
  {
    "id": "4t_cat-2_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Accentuació i síl·labes",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula és plana (l'accent va a la penúltima síl·laba)?",
    "opcions": [
      "taula",
      "camió",
      "sofà",
      "ordinador"
    ],
    "resposta_correcta": "taula"
  },
  {
    "id": "4t_cat-2_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Accentuació i síl·labes",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula porta accent diacrític per diferenciar-se d'una altra amb el mateix so?",
    "opcions": [
      "món",
      "casa",
      "llibre",
      "cadira"
    ],
    "resposta_correcta": "món"
  },
  {
    "id": "4t_cat-2_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Accentuació i síl·labes",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada paraula amb el nombre de síl·labes que té.",
    "parelles": [
      {
        "a": "Sol",
        "b": "1"
      },
      {
        "a": "Taula",
        "b": "2"
      },
      {
        "a": "Ordinador",
        "b": "4"
      },
      {
        "a": "Biblioteca",
        "b": "5"
      }
    ]
  },
  {
    "id": "4t_cat-3_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Gramàtica: nom, adjectiu i verb",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula és un nom (substantiu)?",
    "opcions": [
      "gos",
      "córrer",
      "ràpid",
      "molt"
    ],
    "resposta_correcta": "gos"
  },
  {
    "id": "4t_cat-3_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Gramàtica: nom, adjectiu i verb",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula és un adjectiu?",
    "opcions": [
      "bonic",
      "casa",
      "cantar",
      "amb"
    ],
    "resposta_correcta": "bonic"
  },
  {
    "id": "4t_cat-3_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Gramàtica: nom, adjectiu i verb",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "A la frase «El gat negre dorm», quina paraula és el verb?",
    "opcions": [
      "dorm",
      "gat",
      "negre",
      "el"
    ],
    "resposta_correcta": "dorm"
  },
  {
    "id": "4t_cat-3_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Gramàtica: nom, adjectiu i verb",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin determinant acompanya un nom femení plural?",
    "opcions": [
      "les",
      "el",
      "els",
      "un"
    ],
    "resposta_correcta": "les"
  },
  {
    "id": "4t_cat-3_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Gramàtica: nom, adjectiu i verb",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "L'adjectiu concorda en gènere i nombre amb el nom que acompanya, no amb el verb.",
    "pregunta": "L'adjectiu concorda en gènere i nombre amb el verb.",
    "resposta_correcta": false
  },
  {
    "id": "4t_cat-3_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Gramàtica: nom, adjectiu i verb",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el plural de «flor»?",
    "opcions": [
      "flors",
      "flores",
      "flor",
      "florns"
    ],
    "resposta_correcta": "flors"
  },
  {
    "id": "4t_cat-3_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Gramàtica: nom, adjectiu i verb",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula és un article?",
    "opcions": [
      "la",
      "casa",
      "gran",
      "córrer"
    ],
    "resposta_correcta": "la"
  },
  {
    "id": "4t_cat-3_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Gramàtica: nom, adjectiu i verb",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena les paraules per formar una frase.",
    "elements_ordre_correcte": [
      "La",
      "nena",
      "llegeix",
      "un",
      "conte"
    ]
  },
  {
    "id": "4t_cat-4_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Sinònims i antònims",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és un sinònim de «content»?",
    "opcions": [
      "alegre",
      "trist",
      "cansat",
      "enfadat"
    ],
    "resposta_correcta": "alegre"
  },
  {
    "id": "4t_cat-4_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Sinònims i antònims",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és l'antònim de «gran»?",
    "opcions": [
      "petit",
      "alt",
      "fort",
      "ample"
    ],
    "resposta_correcta": "petit"
  },
  {
    "id": "4t_cat-4_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Sinònims i antònims",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és un sinònim de «ràpid»?",
    "opcions": [
      "veloç",
      "lent",
      "petit",
      "fosc"
    ],
    "resposta_correcta": "veloç"
  },
  {
    "id": "4t_cat-4_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Sinònims i antònims",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és l'antònim de «dia»?",
    "opcions": [
      "nit",
      "sol",
      "matí",
      "tarda"
    ],
    "resposta_correcta": "nit"
  },
  {
    "id": "4t_cat-4_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Sinònims i antònims",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és un sinònim de «bonic»?",
    "opcions": [
      "maco",
      "lleig",
      "vell",
      "petit"
    ],
    "resposta_correcta": "maco"
  },
  {
    "id": "4t_cat-4_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Sinònims i antònims",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "«Fosc» i «clar» tenen significats oposats.",
    "pregunta": "«Fosc» i «clar» són antònims.",
    "resposta_correcta": true
  },
  {
    "id": "4t_cat-4_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Sinònims i antònims",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és l'antònim d'«obrir»?",
    "opcions": [
      "tancar",
      "entrar",
      "sortir",
      "pujar"
    ],
    "resposta_correcta": "tancar"
  },
  {
    "id": "4t_cat-4_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Sinònims i antònims",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada paraula amb el seu sinònim.",
    "parelles": [
      {
        "a": "Content",
        "b": "Alegre"
      },
      {
        "a": "Ràpid",
        "b": "Veloç"
      },
      {
        "a": "Bonic",
        "b": "Maco"
      },
      {
        "a": "Gran",
        "b": "Enorme"
      }
    ]
  },
  {
    "id": "4t_cat-5_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Comprensió i puntuació",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin signe de puntuació es fa servir al final d'una pregunta?",
    "opcions": [
      "?",
      ".",
      ",",
      ";"
    ],
    "resposta_correcta": "?"
  },
  {
    "id": "4t_cat-5_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Comprensió i puntuació",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin signe s'utilitza per separar elements d'una llista dins una frase?",
    "opcions": [
      "la coma (,)",
      "el punt (.)",
      "l'interrogant (?)",
      "el guió (-)"
    ],
    "resposta_correcta": "la coma (,)"
  },
  {
    "id": "4t_cat-5_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Comprensió i puntuació",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El punt (.) indica el final de la frase; la coma (,) separa elements dins la frase.",
    "pregunta": "Una coma (,) indica que la frase ha acabat.",
    "resposta_correcta": false
  },
  {
    "id": "4t_cat-5_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Comprensió i puntuació",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin signe s'utilitza al final d'una frase exclamativa?",
    "opcions": [
      "!",
      "?",
      ".",
      ":"
    ],
    "resposta_correcta": "!"
  },
  {
    "id": "4t_cat-5_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Comprensió i puntuació",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és la funció dels dos punts (:) abans d'una llista?",
    "opcions": [
      "Introduir una enumeració",
      "Acabar la frase",
      "Fer una pregunta",
      "Separar paràgrafs"
    ],
    "resposta_correcta": "Introduir una enumeració"
  },
  {
    "id": "4t_cat-5_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Comprensió i puntuació",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On has de posar majúscula sempre?",
    "opcions": [
      "A l'inici de frase",
      "Al mig de la paraula",
      "Al final de la frase",
      "Mai"
    ],
    "resposta_correcta": "A l'inici de frase"
  },
  {
    "id": "4t_cat-5_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Comprensió i puntuació",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin signe indica que algú parla en un diàleg?",
    "opcions": [
      "el guió (—)",
      "la coma (,)",
      "l'interrogant (?)",
      "el punt (.)"
    ],
    "resposta_correcta": "el guió (—)"
  },
  {
    "id": "4t_cat-5_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cat",
    "tema": "Comprensió i puntuació",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena les paraules per formar una frase.",
    "elements_ordre_correcte": [
      "El",
      "meu",
      "gos",
      "es",
      "diu",
      "Rex"
    ]
  },
  {
    "id": "4t_cas-1_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Ortografía: b, v y h",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cómo se escribe correctamente?",
    "opcions": [
      "árbol",
      "árvol",
      "albol",
      "álbol"
    ],
    "resposta_correcta": "árbol"
  },
  {
    "id": "4t_cas-1_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Ortografía: b, v y h",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué letra es muda al principio de «huevo»?",
    "opcions": [
      "la h",
      "la u",
      "la e",
      "la v"
    ],
    "resposta_correcta": "la h"
  },
  {
    "id": "4t_cas-1_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Ortografía: b, v y h",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "«Jirafa» se escribe con j, no con g.",
    "pregunta": "La palabra «jirafa» se escribe con g.",
    "resposta_correcta": false
  },
  {
    "id": "4t_cas-1_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Ortografía: b, v y h",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál de estas palabras está bien escrita?",
    "opcions": [
      "coger",
      "cojer",
      "coyer",
      "cojel"
    ],
    "resposta_correcta": "coger"
  },
  {
    "id": "4t_cas-1_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Ortografía: b, v y h",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Completa: «El pájaro vuela por el ___.»",
    "resposta_correcta": "cielo",
    "respostes_acceptades": [
      "cielo",
      "aire"
    ]
  },
  {
    "id": "4t_cas-1_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Ortografía: b, v y h",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál de estas palabras se escribe con v?",
    "opcions": [
      "ventana",
      "bonito",
      "burro",
      "abrigo"
    ],
    "resposta_correcta": "ventana"
  },
  {
    "id": "4t_cas-1_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Ortografía: b, v y h",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena las palabras para formar una frase.",
    "elements_ordre_correcte": [
      "El",
      "perro",
      "ladra",
      "fuerte"
    ]
  },
  {
    "id": "4t_cas-1_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Ortografía: b, v y h",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada palabra en singular con su plural.",
    "parelles": [
      {
        "a": "Flor",
        "b": "Flores"
      },
      {
        "a": "Lápiz",
        "b": "Lápices"
      },
      {
        "a": "Pez",
        "b": "Peces"
      },
      {
        "a": "Luz",
        "b": "Luces"
      }
    ]
  },
  {
    "id": "4t_cas-2_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Gramática: sustantivo, adjetivo y verbo",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál de estas palabras es un sustantivo?",
    "opcions": [
      "perro",
      "correr",
      "bonito",
      "con"
    ],
    "resposta_correcta": "perro"
  },
  {
    "id": "4t_cas-2_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Gramática: sustantivo, adjetivo y verbo",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál de estas palabras es un adjetivo?",
    "opcions": [
      "alto",
      "casa",
      "comer",
      "muy"
    ],
    "resposta_correcta": "alto"
  },
  {
    "id": "4t_cas-2_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Gramática: sustantivo, adjetivo y verbo",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "En la frase «El niño come manzanas», ¿cuál es el verbo?",
    "opcions": [
      "come",
      "niño",
      "manzanas",
      "el"
    ],
    "resposta_correcta": "come"
  },
  {
    "id": "4t_cas-2_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Gramática: sustantivo, adjetivo y verbo",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El adjetivo debe concordar en género y número con el sustantivo al que acompaña.",
    "pregunta": "El adjetivo concuerda en género y número con el sustantivo.",
    "resposta_correcta": true
  },
  {
    "id": "4t_cas-2_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Gramática: sustantivo, adjetivo y verbo",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Escribe el plural de «flor».",
    "resposta_correcta": "flores",
    "respostes_acceptades": [
      "flores"
    ]
  },
  {
    "id": "4t_cas-2_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Gramática: sustantivo, adjetivo y verbo",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál de estas palabras es un artículo?",
    "opcions": [
      "la",
      "casa",
      "gran",
      "correr"
    ],
    "resposta_correcta": "la"
  },
  {
    "id": "4t_cas-2_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Gramática: sustantivo, adjetivo y verbo",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena las palabras para formar una frase.",
    "elements_ordre_correcte": [
      "La",
      "gata",
      "negra",
      "duerme"
    ]
  },
  {
    "id": "4t_cas-2_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Gramática: sustantivo, adjetivo y verbo",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada palabra con su categoría gramatical.",
    "parelles": [
      {
        "a": "Casa",
        "b": "Sustantivo"
      },
      {
        "a": "Bonito",
        "b": "Adjetivo"
      },
      {
        "a": "Saltar",
        "b": "Verbo"
      },
      {
        "a": "Rápidamente",
        "b": "Adverbio"
      }
    ]
  },
  {
    "id": "4t_cas-3_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Acentuación: agudas, llanas y esdrújulas",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cómo se llaman las palabras que llevan el acento en la última sílaba?",
    "opcions": [
      "agudas",
      "llanas",
      "esdrújulas",
      "sobresdrújulas"
    ],
    "resposta_correcta": "agudas"
  },
  {
    "id": "4t_cas-3_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Acentuación: agudas, llanas y esdrújulas",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál de estas palabras es esdrújula?",
    "opcions": [
      "página",
      "camión",
      "pared",
      "reloj"
    ],
    "resposta_correcta": "página"
  },
  {
    "id": "4t_cas-3_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Acentuación: agudas, llanas y esdrújulas",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "«Árbol» es llana (grave) porque el acento cae en la penúltima sílaba (ár-bol).",
    "pregunta": "La palabra «árbol» es aguda.",
    "resposta_correcta": false
  },
  {
    "id": "4t_cas-3_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Acentuación: agudas, llanas y esdrújulas",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuántas sílabas tiene la palabra «mariposa»?",
    "opcions": [
      "4",
      "3",
      "5",
      "2"
    ],
    "resposta_correcta": "4"
  },
  {
    "id": "4t_cas-3_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Acentuación: agudas, llanas y esdrújulas",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuántas sílabas tiene la palabra «sol»? Escribe el número.",
    "resposta_correcta": "1",
    "respostes_acceptades": [
      "1"
    ]
  },
  {
    "id": "4t_cas-3_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Acentuación: agudas, llanas y esdrújulas",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál de estas palabras es aguda?",
    "opcions": [
      "camión",
      "mesa",
      "música",
      "lápiz"
    ],
    "resposta_correcta": "camión"
  },
  {
    "id": "4t_cas-3_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Acentuación: agudas, llanas y esdrújulas",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena estas palabras de menos a más sílabas.",
    "elements_ordre_correcte": [
      "sol",
      "casa",
      "ventana",
      "mariposa"
    ]
  },
  {
    "id": "4t_cas-3_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Acentuación: agudas, llanas y esdrújulas",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada palabra con su tipo de acentuación.",
    "parelles": [
      {
        "a": "Camión",
        "b": "Aguda"
      },
      {
        "a": "Mesa",
        "b": "Llana"
      },
      {
        "a": "Música",
        "b": "Esdrújula"
      }
    ]
  },
  {
    "id": "4t_cas-4_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Sinónimos y antónimos",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál es un sinónimo de «contento»?",
    "opcions": [
      "alegre",
      "triste",
      "cansado",
      "enfadado"
    ],
    "resposta_correcta": "alegre"
  },
  {
    "id": "4t_cas-4_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Sinónimos y antónimos",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál es el antónimo de «grande»?",
    "opcions": [
      "pequeño",
      "alto",
      "fuerte",
      "ancho"
    ],
    "resposta_correcta": "pequeño"
  },
  {
    "id": "4t_cas-4_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Sinónimos y antónimos",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál es un sinónimo de «rápido»?",
    "opcions": [
      "veloz",
      "lento",
      "pequeño",
      "oscuro"
    ],
    "resposta_correcta": "veloz"
  },
  {
    "id": "4t_cas-4_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Sinónimos y antónimos",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "«Oscuro» y «claro» tienen significados opuestos.",
    "pregunta": "«Oscuro» y «claro» son antónimos.",
    "resposta_correcta": true
  },
  {
    "id": "4t_cas-4_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Sinónimos y antónimos",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Escribe un antónimo de «abrir».",
    "resposta_correcta": "cerrar",
    "respostes_acceptades": [
      "cerrar"
    ]
  },
  {
    "id": "4t_cas-4_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Sinónimos y antónimos",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál es el antónimo de «subir»?",
    "opcions": [
      "bajar",
      "correr",
      "saltar",
      "andar"
    ],
    "resposta_correcta": "bajar"
  },
  {
    "id": "4t_cas-4_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Sinónimos y antónimos",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena las palabras para formar una frase.",
    "elements_ordre_correcte": [
      "El",
      "sol",
      "brilla",
      "mucho"
    ]
  },
  {
    "id": "4t_cas-4_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Sinónimos y antónimos",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada palabra con su sinónimo.",
    "parelles": [
      {
        "a": "Bonito",
        "b": "Hermoso"
      },
      {
        "a": "Feliz",
        "b": "Contento"
      },
      {
        "a": "Veloz",
        "b": "Rápido"
      },
      {
        "a": "Enorme",
        "b": "Grande"
      }
    ]
  },
  {
    "id": "4t_cas-5_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Comprensión y puntuación",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué signo se usa al final de una pregunta?",
    "opcions": [
      "?",
      ".",
      ",",
      ";"
    ],
    "resposta_correcta": "?"
  },
  {
    "id": "4t_cas-5_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Comprensión y puntuación",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué signo se usa al final de una exclamación?",
    "opcions": [
      "!",
      "?",
      ".",
      ":"
    ],
    "resposta_correcta": "!"
  },
  {
    "id": "4t_cas-5_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Comprensión y puntuación",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "En español se escribe «¿» al principio de la pregunta y «?» al final, no al revés.",
    "pregunta": "En español, las preguntas llevan el signo «?» al principio y el signo «¿» al final.",
    "resposta_correcta": false
  },
  {
    "id": "4t_cas-5_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Comprensión y puntuación",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué se usa para separar los elementos de una lista?",
    "opcions": [
      "la coma",
      "el punto",
      "el guion",
      "los dos puntos"
    ],
    "resposta_correcta": "la coma"
  },
  {
    "id": "4t_cas-5_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Comprensión y puntuación",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Con qué tipo de letra se escribe siempre el principio de una frase?",
    "resposta_correcta": "mayuscula",
    "respostes_acceptades": [
      "mayuscula",
      "mayúscula"
    ]
  },
  {
    "id": "4t_cas-5_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Comprensión y puntuación",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué signos rodean una pregunta en español?",
    "opcions": [
      "¿ y ?",
      "¡ y !",
      ": y ;",
      "( y )"
    ],
    "resposta_correcta": "¿ y ?"
  },
  {
    "id": "4t_cas-5_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Comprensión y puntuación",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena las palabras para formar una frase.",
    "elements_ordre_correcte": [
      "Mi",
      "perro",
      "se",
      "llama",
      "Rex"
    ]
  },
  {
    "id": "4t_cas-5_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "cas",
    "tema": "Comprensión y puntuación",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada signo con su función.",
    "parelles": [
      {
        "a": "?",
        "b": "Pregunta"
      },
      {
        "a": "!",
        "b": "Exclamación"
      },
      {
        "a": ",",
        "b": "Separar elementos"
      },
      {
        "a": ".",
        "b": "Final de frase"
      }
    ]
  },
  {
    "id": "4t_eng-1_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Greetings & colours",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «hola» in English?",
    "opcions": [
      "Hello",
      "Goodbye",
      "Please",
      "Thanks"
    ],
    "resposta_correcta": "Hello"
  },
  {
    "id": "4t_eng-1_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Greetings & colours",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "What colour is the sky?",
    "opcions": [
      "Blue",
      "Red",
      "Green",
      "Black"
    ],
    "resposta_correcta": "Blue"
  },
  {
    "id": "4t_eng-1_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Greetings & colours",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "«Goodbye» means «adéu»; «hola» means «hello».",
    "pregunta": "«Goodbye» means «hola».",
    "resposta_correcta": false
  },
  {
    "id": "4t_eng-1_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Greetings & colours",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "What colour is a banana?",
    "opcions": [
      "Yellow",
      "Purple",
      "Blue",
      "Grey"
    ],
    "resposta_correcta": "Yellow"
  },
  {
    "id": "4t_eng-1_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Greetings & colours",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Translate to English: «vermell»",
    "resposta_correcta": "red",
    "respostes_acceptades": [
      "red"
    ]
  },
  {
    "id": "4t_eng-1_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Greetings & colours",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «si us plau» in English?",
    "opcions": [
      "Please",
      "Sorry",
      "Thanks",
      "Hello"
    ],
    "resposta_correcta": "Please"
  },
  {
    "id": "4t_eng-1_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Greetings & colours",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Order the words to make a sentence.",
    "elements_ordre_correcte": [
      "My",
      "name",
      "is",
      "Anna"
    ]
  },
  {
    "id": "4t_eng-1_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Greetings & colours",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Match each Catalan colour with its English word.",
    "parelles": [
      {
        "a": "Verd",
        "b": "Green"
      },
      {
        "a": "Groc",
        "b": "Yellow"
      },
      {
        "a": "Vermell",
        "b": "Red"
      },
      {
        "a": "Blau",
        "b": "Blue"
      }
    ]
  },
  {
    "id": "4t_eng-2_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Numbers 1-20",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «set» in English?",
    "opcions": [
      "Seven",
      "Six",
      "Eight",
      "Five"
    ],
    "resposta_correcta": "Seven"
  },
  {
    "id": "4t_eng-2_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Numbers 1-20",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "What number is «twelve»?",
    "opcions": [
      "12",
      "11",
      "13",
      "20"
    ],
    "resposta_correcta": "12"
  },
  {
    "id": "4t_eng-2_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Numbers 1-20",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "«Ten» is the English word for the number 10.",
    "pregunta": "«Ten» is number 10.",
    "resposta_correcta": true
  },
  {
    "id": "4t_eng-2_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Numbers 1-20",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «quinze» in English?",
    "opcions": [
      "Fifteen",
      "Fourteen",
      "Fifty",
      "Sixteen"
    ],
    "resposta_correcta": "Fifteen"
  },
  {
    "id": "4t_eng-2_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Numbers 1-20",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Write the number for «three».",
    "resposta_correcta": "3",
    "respostes_acceptades": [
      "3"
    ]
  },
  {
    "id": "4t_eng-2_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Numbers 1-20",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «vint» in English?",
    "opcions": [
      "Twenty",
      "Twelve",
      "Ten",
      "Two"
    ],
    "resposta_correcta": "Twenty"
  },
  {
    "id": "4t_eng-2_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Numbers 1-20",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Order these numbers from smallest to biggest.",
    "elements_ordre_correcte": [
      "two",
      "five",
      "nine",
      "twelve"
    ]
  },
  {
    "id": "4t_eng-2_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Numbers 1-20",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Match each number with its word.",
    "parelles": [
      {
        "a": "4",
        "b": "Four"
      },
      {
        "a": "8",
        "b": "Eight"
      },
      {
        "a": "10",
        "b": "Ten"
      },
      {
        "a": "20",
        "b": "Twenty"
      }
    ]
  },
  {
    "id": "4t_eng-3_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Animals & family",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «gos» in English?",
    "opcions": [
      "Dog",
      "Cat",
      "Bird",
      "Fish"
    ],
    "resposta_correcta": "Dog"
  },
  {
    "id": "4t_eng-3_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Animals & family",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "What is «mare» in English?",
    "opcions": [
      "Mother",
      "Father",
      "Sister",
      "Brother"
    ],
    "resposta_correcta": "Mother"
  },
  {
    "id": "4t_eng-3_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Animals & family",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "«Cat» means «gat» in Catalan.",
    "pregunta": "«Cat» means «gat».",
    "resposta_correcta": true
  },
  {
    "id": "4t_eng-3_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Animals & family",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «germà» in English?",
    "opcions": [
      "Brother",
      "Sister",
      "Mother",
      "Father"
    ],
    "resposta_correcta": "Brother"
  },
  {
    "id": "4t_eng-3_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Animals & family",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Translate to English: «peix»",
    "resposta_correcta": "fish",
    "respostes_acceptades": [
      "fish"
    ]
  },
  {
    "id": "4t_eng-3_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Animals & family",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «ocell» in English?",
    "opcions": [
      "Bird",
      "Fish",
      "Dog",
      "Cat"
    ],
    "resposta_correcta": "Bird"
  },
  {
    "id": "4t_eng-3_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Animals & family",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Order the words to make a sentence.",
    "elements_ordre_correcte": [
      "I",
      "have",
      "got",
      "a",
      "dog"
    ]
  },
  {
    "id": "4t_eng-3_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Animals & family",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Match each family member.",
    "parelles": [
      {
        "a": "Pare",
        "b": "Father"
      },
      {
        "a": "Germana",
        "b": "Sister"
      },
      {
        "a": "Avi",
        "b": "Grandfather"
      },
      {
        "a": "Fill",
        "b": "Son"
      }
    ]
  },
  {
    "id": "4t_eng-4_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Days & classroom objects",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "What day comes after «Monday»?",
    "opcions": [
      "Tuesday",
      "Wednesday",
      "Sunday",
      "Friday"
    ],
    "resposta_correcta": "Tuesday"
  },
  {
    "id": "4t_eng-4_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Days & classroom objects",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «llibre» in English?",
    "opcions": [
      "Book",
      "Pencil",
      "Table",
      "Chair"
    ],
    "resposta_correcta": "Book"
  },
  {
    "id": "4t_eng-4_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Days & classroom objects",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "«Sunday» is a day of the week, not a month.",
    "pregunta": "«Sunday» is a month of the year.",
    "resposta_correcta": false
  },
  {
    "id": "4t_eng-4_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Days & classroom objects",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «cadira» in English?",
    "opcions": [
      "Chair",
      "Table",
      "Door",
      "Window"
    ],
    "resposta_correcta": "Chair"
  },
  {
    "id": "4t_eng-4_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Days & classroom objects",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Translate to English: «llapis»",
    "resposta_correcta": "pencil",
    "respostes_acceptades": [
      "pencil"
    ]
  },
  {
    "id": "4t_eng-4_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Days & classroom objects",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «taula» in English?",
    "opcions": [
      "Table",
      "Chair",
      "Book",
      "Door"
    ],
    "resposta_correcta": "Table"
  },
  {
    "id": "4t_eng-4_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Days & classroom objects",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Order the days of the week.",
    "elements_ordre_correcte": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday"
    ]
  },
  {
    "id": "4t_eng-4_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "Days & classroom objects",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Match each object with its Catalan word.",
    "parelles": [
      {
        "a": "Book",
        "b": "Llibre"
      },
      {
        "a": "Pencil",
        "b": "Llapis"
      },
      {
        "a": "Table",
        "b": "Taula"
      },
      {
        "a": "Door",
        "b": "Porta"
      }
    ]
  },
  {
    "id": "4t_eng-5_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "The verb «to be»",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «I ___ a student.»",
    "opcions": [
      "am",
      "is",
      "are",
      "be"
    ],
    "resposta_correcta": "am"
  },
  {
    "id": "4t_eng-5_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "The verb «to be»",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «She ___ happy.»",
    "opcions": [
      "is",
      "am",
      "are",
      "be"
    ],
    "resposta_correcta": "is"
  },
  {
    "id": "4t_eng-5_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "The verb «to be»",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "«They are» is used with plural subjects in the verb «to be».",
    "pregunta": "«They are» is correct for a plural subject.",
    "resposta_correcta": true
  },
  {
    "id": "4t_eng-5_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "The verb «to be»",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «We ___ friends.»",
    "opcions": [
      "are",
      "is",
      "am",
      "be"
    ],
    "resposta_correcta": "are"
  },
  {
    "id": "4t_eng-5_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "The verb «to be»",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «You ___ tall.»",
    "resposta_correcta": "are",
    "respostes_acceptades": [
      "are"
    ]
  },
  {
    "id": "4t_eng-5_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "The verb «to be»",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «It ___ a big dog.»",
    "opcions": [
      "is",
      "am",
      "are",
      "be"
    ],
    "resposta_correcta": "is"
  },
  {
    "id": "4t_eng-5_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "The verb «to be»",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Order the words to make a sentence.",
    "elements_ordre_correcte": [
      "He",
      "is",
      "my",
      "friend"
    ]
  },
  {
    "id": "4t_eng-5_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "eng",
    "tema": "The verb «to be»",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Match each pronoun with its form of «to be».",
    "parelles": [
      {
        "a": "I",
        "b": "am"
      },
      {
        "a": "He",
        "b": "is"
      },
      {
        "a": "You",
        "b": "are"
      }
    ]
  },
  {
    "id": "4t_soc-1_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El relleu de Catalunya",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina serralada forma la frontera nord de Catalunya?",
    "opcions": [
      "els Pirineus",
      "la Serralada Litoral",
      "la Serralada Prelitoral",
      "els Alps"
    ],
    "resposta_correcta": "els Pirineus"
  },
  {
    "id": "4t_soc-1_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El relleu de Catalunya",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina depressió se situa al centre de Catalunya, entre els Pirineus i les serralades costaneres?",
    "opcions": [
      "la Depressió Central",
      "la Depressió Litoral",
      "la Serralada Litoral",
      "el Pla de Lleida"
    ],
    "resposta_correcta": "la Depressió Central"
  },
  {
    "id": "4t_soc-1_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El relleu de Catalunya",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és la muntanya més alta de Catalunya?",
    "opcions": [
      "la Pica d'Estats",
      "el Montseny",
      "Montserrat",
      "el Puigmal"
    ],
    "resposta_correcta": "la Pica d'Estats"
  },
  {
    "id": "4t_soc-1_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El relleu de Catalunya",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Catalunya té costa al mar Mediterrani, no a l'oceà Atlàntic.",
    "pregunta": "Catalunya té costa a l'oceà Atlàntic.",
    "resposta_correcta": false
  },
  {
    "id": "4t_soc-1_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El relleu de Catalunya",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diuen les muntanyes properes a la costa, entre el mar i la Depressió Central?",
    "opcions": [
      "la Serralada Litoral i la Prelitoral",
      "els Pirineus",
      "els Pirineus Orientals",
      "la Serralada Cantàbrica"
    ],
    "resposta_correcta": "la Serralada Litoral i la Prelitoral"
  },
  {
    "id": "4t_soc-1_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El relleu de Catalunya",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Montserrat és...",
    "opcions": [
      "una muntanya emblemàtica de Catalunya",
      "un riu",
      "una comarca",
      "una platja"
    ],
    "resposta_correcta": "una muntanya emblemàtica de Catalunya"
  },
  {
    "id": "4t_soc-1_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El relleu de Catalunya",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin tipus de costa predomina a la Costa Brava?",
    "opcions": [
      "platges i cales",
      "grans glaceres",
      "dunes de desert",
      "volcans actius"
    ],
    "resposta_correcta": "platges i cales"
  },
  {
    "id": "4t_soc-1_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El relleu de Catalunya",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada element del relleu amb la seva descripció.",
    "parelles": [
      {
        "a": "Pica d'Estats",
        "b": "Muntanya més alta"
      },
      {
        "a": "Montserrat",
        "b": "Muntanya emblemàtica"
      },
      {
        "a": "Pirineus",
        "b": "Frontera nord"
      },
      {
        "a": "Costa Brava",
        "b": "Costa amb cales"
      }
    ]
  },
  {
    "id": "4t_soc-2_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El clima i les aigües",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el riu més llarg que passa per Catalunya?",
    "opcions": [
      "l'Ebre",
      "el Ter",
      "el Llobregat",
      "el Segre"
    ],
    "resposta_correcta": "l'Ebre"
  },
  {
    "id": "4t_soc-2_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El clima i les aigües",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin clima predomina a la costa catalana?",
    "opcions": [
      "el clima mediterrani",
      "el clima polar",
      "el clima tropical",
      "el clima desèrtic"
    ],
    "resposta_correcta": "el clima mediterrani"
  },
  {
    "id": "4t_soc-2_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El clima i les aigües",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Als Pirineus, per l'altitud, és habitual que nevi a l'hivern.",
    "pregunta": "Als Pirineus, a l'hivern, sol nevar.",
    "resposta_correcta": true
  },
  {
    "id": "4t_soc-2_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El clima i les aigües",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quins rius passen per Barcelona?",
    "opcions": [
      "el Llobregat i el Besòs",
      "el Segre i el Cinca",
      "el Ter i el Fluvià",
      "l'Ebre i el Sió"
    ],
    "resposta_correcta": "el Llobregat i el Besòs"
  },
  {
    "id": "4t_soc-2_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El clima i les aigües",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diuen els llacs d'origen glacial que trobem als Pirineus?",
    "opcions": [
      "estanys",
      "aiguamolls",
      "deltes",
      "embassaments"
    ],
    "resposta_correcta": "estanys"
  },
  {
    "id": "4t_soc-2_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El clima i les aigües",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On es troba el delta de l'Ebre?",
    "opcions": [
      "a la desembocadura del riu Ebre, al sud de Catalunya",
      "als Pirineus",
      "a Barcelona ciutat",
      "al Maresme"
    ],
    "resposta_correcta": "a la desembocadura del riu Ebre, al sud de Catalunya"
  },
  {
    "id": "4t_soc-2_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El clima i les aigües",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "A l'estiu, el clima mediterrani sol ser...",
    "opcions": [
      "càlid i sec",
      "fred i plujós",
      "nevat",
      "molt humit tot l'any"
    ],
    "resposta_correcta": "càlid i sec"
  },
  {
    "id": "4t_soc-2_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "El clima i les aigües",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada paraula amb la seva definició.",
    "parelles": [
      {
        "a": "Ebre",
        "b": "Riu més llarg"
      },
      {
        "a": "Besòs",
        "b": "Passa per Barcelona"
      },
      {
        "a": "Delta",
        "b": "Desembocadura d'un riu"
      },
      {
        "a": "Estany",
        "b": "Llac d'origen glacial"
      }
    ]
  },
  {
    "id": "4t_soc-3_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "La població i els municipis",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és la capital de Catalunya?",
    "opcions": [
      "Barcelona",
      "Girona",
      "Lleida",
      "Tarragona"
    ],
    "resposta_correcta": "Barcelona"
  },
  {
    "id": "4t_soc-3_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "La població i els municipis",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com s'anomena el conjunt de persones que viuen en un mateix territori?",
    "opcions": [
      "la població",
      "el municipi",
      "la comarca",
      "el govern"
    ],
    "resposta_correcta": "la població"
  },
  {
    "id": "4t_soc-3_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "La població i els municipis",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "L'ajuntament, dirigit per l'alcalde o alcaldessa, governa el municipi.",
    "pregunta": "Un municipi el governa l'ajuntament, dirigit per l'alcalde o alcaldessa.",
    "resposta_correcta": true
  },
  {
    "id": "4t_soc-3_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "La població i els municipis",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quines són les quatre capitals de província de Catalunya?",
    "opcions": [
      "Barcelona, Girona, Lleida i Tarragona",
      "Barcelona, Reus, Sabadell i Mataró",
      "Girona, Figueres, Vic i Manresa",
      "Lleida, Balaguer, Tremp i Sort"
    ],
    "resposta_correcta": "Barcelona, Girona, Lleida i Tarragona"
  },
  {
    "id": "4t_soc-3_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "La població i els municipis",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu el registre on s'inscriuen els habitants d'un municipi?",
    "opcions": [
      "el padró municipal",
      "el DNI",
      "el mapa",
      "el cens escolar"
    ],
    "resposta_correcta": "el padró municipal"
  },
  {
    "id": "4t_soc-3_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "La població i els municipis",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és la ciutat més poblada de Catalunya?",
    "opcions": [
      "Barcelona",
      "Girona",
      "Tarragona",
      "Lleida"
    ],
    "resposta_correcta": "Barcelona"
  },
  {
    "id": "4t_soc-3_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "La població i els municipis",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui governa un ajuntament?",
    "opcions": [
      "l'alcalde o alcaldessa i els regidors",
      "el rei",
      "el mestre",
      "el president de l'Estat"
    ],
    "resposta_correcta": "l'alcalde o alcaldessa i els regidors"
  },
  {
    "id": "4t_soc-3_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "La població i els municipis",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada concepte amb la seva definició.",
    "parelles": [
      {
        "a": "Alcalde o alcaldessa",
        "b": "Governa l'ajuntament"
      },
      {
        "a": "Padró",
        "b": "Registre d'habitants"
      },
      {
        "a": "Barcelona",
        "b": "Capital de Catalunya"
      },
      {
        "a": "Municipi",
        "b": "Unitat administrativa bàsica"
      }
    ]
  },
  {
    "id": "4t_soc-4_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Les comarques de Catalunya",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "A quina comarca pertany la ciutat de Barcelona?",
    "opcions": [
      "el Barcelonès",
      "el Bages",
      "el Vallès Oriental",
      "el Maresme"
    ],
    "resposta_correcta": "el Barcelonès"
  },
  {
    "id": "4t_soc-4_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Les comarques de Catalunya",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és la capital de la comarca del Bages?",
    "opcions": [
      "Manresa",
      "Vic",
      "Igualada",
      "Berga"
    ],
    "resposta_correcta": "Manresa"
  },
  {
    "id": "4t_soc-4_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Les comarques de Catalunya",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Catalunya es divideix en comarques i aquestes, al seu torn, en municipis.",
    "pregunta": "Catalunya està dividida en municipis i aquests, en comarques.",
    "resposta_correcta": false
  },
  {
    "id": "4t_soc-4_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Les comarques de Catalunya",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina comarca té Girona com a capital?",
    "opcions": [
      "el Gironès",
      "l'Alt Empordà",
      "la Selva",
      "la Garrotxa"
    ],
    "resposta_correcta": "el Gironès"
  },
  {
    "id": "4t_soc-4_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Les comarques de Catalunya",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina comarca té Lleida com a capital?",
    "opcions": [
      "el Segrià",
      "l'Urgell",
      "la Noguera",
      "el Pla d'Urgell"
    ],
    "resposta_correcta": "el Segrià"
  },
  {
    "id": "4t_soc-4_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Les comarques de Catalunya",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina comarca té Tarragona com a capital?",
    "opcions": [
      "el Tarragonès",
      "el Baix Camp",
      "l'Alt Camp",
      "el Priorat"
    ],
    "resposta_correcta": "el Tarragonès"
  },
  {
    "id": "4t_soc-4_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Les comarques de Catalunya",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quantes comarques té Catalunya aproximadament?",
    "opcions": [
      "unes 42",
      "unes 10",
      "unes 100",
      "unes 4"
    ],
    "resposta_correcta": "unes 42"
  },
  {
    "id": "4t_soc-4_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Les comarques de Catalunya",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada capital amb la seva comarca.",
    "parelles": [
      {
        "a": "Manresa",
        "b": "Bages"
      },
      {
        "a": "Vic",
        "b": "Osona"
      },
      {
        "a": "Igualada",
        "b": "Anoia"
      },
      {
        "a": "Berga",
        "b": "Berguedà"
      }
    ]
  },
  {
    "id": "4t_soc-5_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Els sectors econòmics",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "A quin sector pertanyen l'agricultura i la ramaderia?",
    "opcions": [
      "el sector primari",
      "el sector secundari",
      "el sector terciari",
      "el sector agrari"
    ],
    "resposta_correcta": "el sector primari"
  },
  {
    "id": "4t_soc-5_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Els sectors econòmics",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "A quin sector pertany la indústria (fabricar productes)?",
    "opcions": [
      "el sector secundari",
      "el sector primari",
      "el sector terciari",
      "cap"
    ],
    "resposta_correcta": "el sector secundari"
  },
  {
    "id": "4t_soc-5_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Els sectors econòmics",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "A quin sector pertanyen serveis com l'ensenyament, el comerç o la sanitat?",
    "opcions": [
      "el sector terciari",
      "el sector primari",
      "el sector secundari",
      "el sector agrari"
    ],
    "resposta_correcta": "el sector terciari"
  },
  {
    "id": "4t_soc-5_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Els sectors econòmics",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "La pesca, com l'agricultura i la ramaderia, pertany al sector primari.",
    "pregunta": "La pesca forma part del sector primari.",
    "resposta_correcta": true
  },
  {
    "id": "4t_soc-5_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Els sectors econòmics",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina activitat és pròpia del sector secundari?",
    "opcions": [
      "construir cotxes en una fàbrica",
      "collir olives",
      "vendre roba en una botiga",
      "cuidar pacients a l'hospital"
    ],
    "resposta_correcta": "construir cotxes en una fàbrica"
  },
  {
    "id": "4t_soc-5_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Els sectors econòmics",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "El turisme, molt important a Catalunya, pertany a quin sector?",
    "opcions": [
      "el terciari",
      "el primari",
      "el secundari",
      "cap"
    ],
    "resposta_correcta": "el terciari"
  },
  {
    "id": "4t_soc-5_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Els sectors econòmics",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina d'aquestes és una feina del sector primari?",
    "opcions": [
      "pagès o pagesa",
      "mestre o mestra",
      "metge o metgessa",
      "informàtic o informàtica"
    ],
    "resposta_correcta": "pagès o pagesa"
  },
  {
    "id": "4t_soc-5_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "soc",
    "tema": "Els sectors econòmics",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada activitat amb el seu sector econòmic.",
    "parelles": [
      {
        "a": "Pescar",
        "b": "Sector primari"
      },
      {
        "a": "Fabricar cotxes",
        "b": "Sector secundari"
      },
      {
        "a": "Ensenyar",
        "b": "Sector terciari"
      }
    ]
  },
  {
    "id": "4t_nat-1_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Animals vertebrats i invertebrats",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quins animals tenen esquelet intern amb columna vertebral?",
    "opcions": [
      "els vertebrats",
      "els invertebrats",
      "els insectes",
      "les meduses"
    ],
    "resposta_correcta": "els vertebrats"
  },
  {
    "id": "4t_nat-1_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Animals vertebrats i invertebrats",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "A quin grup de vertebrats pertany la granota?",
    "opcions": [
      "els amfibis",
      "els rèptils",
      "els mamífers",
      "els peixos"
    ],
    "resposta_correcta": "els amfibis"
  },
  {
    "id": "4t_nat-1_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Animals vertebrats i invertebrats",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin grup de vertebrats respira per brànquies?",
    "opcions": [
      "els peixos",
      "els mamífers",
      "els ocells",
      "els rèptils"
    ],
    "resposta_correcta": "els peixos"
  },
  {
    "id": "4t_nat-1_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Animals vertebrats i invertebrats",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Els insectes no tenen columna vertebral, per això són invertebrats.",
    "pregunta": "Els insectes són animals vertebrats.",
    "resposta_correcta": false
  },
  {
    "id": "4t_nat-1_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Animals vertebrats i invertebrats",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina característica tenen tots els mamífers?",
    "opcions": [
      "alimenten les cries amb llet",
      "posen ous sempre",
      "tenen plomes",
      "viuen només a l'aigua"
    ],
    "resposta_correcta": "alimenten les cries amb llet"
  },
  {
    "id": "4t_nat-1_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Animals vertebrats i invertebrats",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin d'aquests animals és un rèptil?",
    "opcions": [
      "la serp",
      "el gos",
      "el tauró",
      "l'àguila"
    ],
    "resposta_correcta": "la serp"
  },
  {
    "id": "4t_nat-1_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Animals vertebrats i invertebrats",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin grup d'invertebrats té el cos tou, com el cargol?",
    "opcions": [
      "els mol·luscs",
      "els insectes",
      "els aràcnids",
      "els crustacis"
    ],
    "resposta_correcta": "els mol·luscs"
  },
  {
    "id": "4t_nat-1_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Animals vertebrats i invertebrats",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada animal amb el seu grup.",
    "parelles": [
      {
        "a": "Granota",
        "b": "Amfibi"
      },
      {
        "a": "Serp",
        "b": "Rèptil"
      },
      {
        "a": "Tauró",
        "b": "Peix"
      },
      {
        "a": "Gat",
        "b": "Mamífer"
      }
    ]
  },
  {
    "id": "4t_nat-2_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Les plantes i la fotosíntesi",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina part de la planta absorbeix l'aigua i les sals minerals del sòl?",
    "opcions": [
      "l'arrel",
      "la tija",
      "la fulla",
      "la flor"
    ],
    "resposta_correcta": "l'arrel"
  },
  {
    "id": "4t_nat-2_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Les plantes i la fotosíntesi",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu el procés pel qual les plantes fabriquen el seu propi aliment amb la llum del sol?",
    "opcions": [
      "la fotosíntesi",
      "la respiració",
      "la reproducció",
      "la digestió"
    ],
    "resposta_correcta": "la fotosíntesi"
  },
  {
    "id": "4t_nat-2_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Les plantes i la fotosíntesi",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin gas alliberen les plantes durant la fotosíntesi?",
    "opcions": [
      "l'oxigen",
      "el diòxid de carboni",
      "el nitrogen",
      "l'hidrogen"
    ],
    "resposta_correcta": "l'oxigen"
  },
  {
    "id": "4t_nat-2_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Les plantes i la fotosíntesi",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Les arrels, la tija i les fulles són alguns dels òrgans principals de la planta.",
    "pregunta": "Les arrels, la tija i les fulles són òrgans de la planta.",
    "resposta_correcta": true
  },
  {
    "id": "4t_nat-2_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Les plantes i la fotosíntesi",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina part de la planta es transforma en fruit després de la pol·linització?",
    "opcions": [
      "la flor",
      "l'arrel",
      "la tija",
      "la fulla"
    ],
    "resposta_correcta": "la flor"
  },
  {
    "id": "4t_nat-2_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Les plantes i la fotosíntesi",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Per què les plantes necessiten la llum del sol?",
    "opcions": [
      "per fer la fotosíntesi",
      "només per créixer les arrels",
      "no la necessiten",
      "per respirar oxigen"
    ],
    "resposta_correcta": "per fer la fotosíntesi"
  },
  {
    "id": "4t_nat-2_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Les plantes i la fotosíntesi",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina part de la planta transporta la saba des de l'arrel fins a les fulles?",
    "opcions": [
      "la tija",
      "la flor",
      "el fruit",
      "la llavor"
    ],
    "resposta_correcta": "la tija"
  },
  {
    "id": "4t_nat-2_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Les plantes i la fotosíntesi",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena aquestes parts de la planta de sota (arrel) a dalt (flor).",
    "elements_ordre_correcte": [
      "Arrel",
      "Tija",
      "Fulla",
      "Flor"
    ]
  },
  {
    "id": "4t_nat-3_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Ecosistemes i biodiversitat",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què és un ecosistema?",
    "opcions": [
      "el conjunt d'éssers vius i el medi on viuen",
      "només els animals d'un lloc",
      "només les plantes",
      "un tipus de roca"
    ],
    "resposta_correcta": "el conjunt d'éssers vius i el medi on viuen"
  },
  {
    "id": "4t_nat-3_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Ecosistemes i biodiversitat",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com s'anomenen els éssers vius que fabriquen el seu propi aliment, com les plantes?",
    "opcions": [
      "productors",
      "consumidors",
      "descomponedors",
      "depredadors"
    ],
    "resposta_correcta": "productors"
  },
  {
    "id": "4t_nat-3_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Ecosistemes i biodiversitat",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com s'anomenen els animals que es mengen altres animals?",
    "opcions": [
      "carnívors",
      "herbívors",
      "productors",
      "descomponedors"
    ],
    "resposta_correcta": "carnívors"
  },
  {
    "id": "4t_nat-3_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Ecosistemes i biodiversitat",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Els descomponedors, com els bolets i alguns bacteris, reciclen la matèria orgànica morta.",
    "pregunta": "Els bolets i alguns bacteris són descomponedors que reciclen la matèria orgànica.",
    "resposta_correcta": true
  },
  {
    "id": "4t_nat-3_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Ecosistemes i biodiversitat",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin ecosistema trobem als Pirineus?",
    "opcions": [
      "un ecosistema de muntanya",
      "un ecosistema marí",
      "un desert",
      "una selva tropical"
    ],
    "resposta_correcta": "un ecosistema de muntanya"
  },
  {
    "id": "4t_nat-3_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Ecosistemes i biodiversitat",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què és una cadena alimentària?",
    "opcions": [
      "la relació de qui es menja a qui dins un ecosistema",
      "un tipus de planta",
      "un aparell del cos",
      "un instrument de mesura"
    ],
    "resposta_correcta": "la relació de qui es menja a qui dins un ecosistema"
  },
  {
    "id": "4t_nat-3_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Ecosistemes i biodiversitat",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Per què és important protegir la biodiversitat?",
    "opcions": [
      "perquè manté l'equilibri dels ecosistemes",
      "perquè així hi ha més espai per construir cases",
      "només per motius estètics",
      "perquè així es poden caçar més animals"
    ],
    "resposta_correcta": "perquè manté l'equilibri dels ecosistemes"
  },
  {
    "id": "4t_nat-3_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Ecosistemes i biodiversitat",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada concepte amb la seva definició.",
    "parelles": [
      {
        "a": "Productors",
        "b": "Fabriquen el seu aliment"
      },
      {
        "a": "Consumidors",
        "b": "Es mengen altres éssers vius"
      },
      {
        "a": "Descomponedors",
        "b": "Reciclen la matèria orgànica"
      },
      {
        "a": "Ecosistema",
        "b": "Éssers vius i el medi"
      }
    ]
  },
  {
    "id": "4t_nat-4_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "El cos humà",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin aparell s'encarrega de portar l'oxigen de l'aire cap a la sang?",
    "opcions": [
      "l'aparell respiratori",
      "l'aparell digestiu",
      "l'aparell circulatori",
      "l'aparell locomotor"
    ],
    "resposta_correcta": "l'aparell respiratori"
  },
  {
    "id": "4t_nat-4_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "El cos humà",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin òrgan bombeja la sang per tot el cos?",
    "opcions": [
      "el cor",
      "el pulmó",
      "l'estómac",
      "el fetge"
    ],
    "resposta_correcta": "el cor"
  },
  {
    "id": "4t_nat-4_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "El cos humà",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On es fa la primera digestió dels aliments?",
    "opcions": [
      "a la boca",
      "a l'estómac",
      "als pulmons",
      "al cor"
    ],
    "resposta_correcta": "a la boca"
  },
  {
    "id": "4t_nat-4_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "El cos humà",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "L'aparell locomotor està format pels ossos i els músculs; el cor i els pulmons formen part d'altres aparells.",
    "pregunta": "L'aparell locomotor està format pel cor i els pulmons.",
    "resposta_correcta": false
  },
  {
    "id": "4t_nat-4_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "El cos humà",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quants ossos té aproximadament l'esquelet d'una persona adulta?",
    "opcions": [
      "206",
      "50",
      "1.000",
      "20"
    ],
    "resposta_correcta": "206"
  },
  {
    "id": "4t_nat-4_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "El cos humà",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin aparell permet moure el cos gràcies als ossos i els músculs?",
    "opcions": [
      "l'aparell locomotor",
      "l'aparell digestiu",
      "l'aparell respiratori",
      "l'aparell circulatori"
    ],
    "resposta_correcta": "l'aparell locomotor"
  },
  {
    "id": "4t_nat-4_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "El cos humà",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On van a parar els aliments després de l'estómac?",
    "opcions": [
      "a l'intestí",
      "als pulmons",
      "al cor",
      "al cervell"
    ],
    "resposta_correcta": "a l'intestí"
  },
  {
    "id": "4t_nat-4_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "El cos humà",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada òrgan amb la seva funció.",
    "parelles": [
      {
        "a": "Cor",
        "b": "Bombeja la sang"
      },
      {
        "a": "Pulmons",
        "b": "Intercanvien l'oxigen"
      },
      {
        "a": "Estómac",
        "b": "Fa la digestió"
      },
      {
        "a": "Ossos",
        "b": "Formen l'esquelet"
      }
    ]
  },
  {
    "id": "4t_nat-5_q1",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Matèria i energia",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quins són els tres estats de la matèria?",
    "opcions": [
      "sòlid, líquid i gasós",
      "calent, fred i tebi",
      "dur, tou i elàstic",
      "gran, mitjà i petit"
    ],
    "resposta_correcta": "sòlid, líquid i gasós"
  },
  {
    "id": "4t_nat-5_q2",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Matèria i energia",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin procés fa que l'aigua líquida es converteixi en gel?",
    "opcions": [
      "la solidificació",
      "l'evaporació",
      "la fusió",
      "la condensació"
    ],
    "resposta_correcta": "la solidificació"
  },
  {
    "id": "4t_nat-5_q3",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Matèria i energia",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu el pas de l'aigua líquida a vapor d'aigua?",
    "opcions": [
      "l'evaporació",
      "la solidificació",
      "la fusió",
      "la condensació"
    ],
    "resposta_correcta": "l'evaporació"
  },
  {
    "id": "4t_nat-5_q4",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Matèria i energia",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El gel és aigua que s'ha solidificat per efecte del fred.",
    "pregunta": "El gel és aigua en estat sòlid.",
    "resposta_correcta": true
  },
  {
    "id": "4t_nat-5_q5",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Matèria i energia",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina font d'energia prové directament del Sol?",
    "opcions": [
      "l'energia solar",
      "l'energia del carbó",
      "l'energia nuclear",
      "l'energia del petroli"
    ],
    "resposta_correcta": "l'energia solar"
  },
  {
    "id": "4t_nat-5_q6",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Matèria i energia",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina d'aquestes és una font d'energia renovable?",
    "opcions": [
      "l'energia eòlica (del vent)",
      "el petroli",
      "el carbó",
      "el gas natural"
    ],
    "resposta_correcta": "l'energia eòlica (del vent)"
  },
  {
    "id": "4t_nat-5_q7",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Matèria i energia",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu el pas de vapor d'aigua a aigua líquida, per exemple als núvols?",
    "opcions": [
      "la condensació",
      "l'evaporació",
      "la solidificació",
      "la fusió"
    ],
    "resposta_correcta": "la condensació"
  },
  {
    "id": "4t_nat-5_q8",
    "curs": "4t",
    "cicle": "mitjà",
    "materia": "nat",
    "tema": "Matèria i energia",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena les fases del cicle de l'aigua.",
    "elements_ordre_correcte": [
      "Evaporació",
      "Condensació",
      "Precipitació",
      "Recollida"
    ]
  },
  {
    "id": "5è_mat-5-1_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Nombres decimals",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "En 4,573 el 5 són dècimes, el 7 centèsimes i el 3 mil·lèsimes.",
    "pregunta": "Quin és el valor de la xifra 7 en el nombre 4,573?",
    "resposta_correcta": "Centèsimes",
    "respostes_acceptades": [
      "Centèsimes",
      "centèsimes",
      "centesimes"
    ]
  },
  {
    "id": "5è_mat-5-1_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Nombres decimals",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com s'escriu en xifres «tres unitats i dues centèsimes»?",
    "opcions": [
      "3,02",
      "3,2",
      "3,002",
      "32"
    ],
    "resposta_correcta": "3,02"
  },
  {
    "id": "5è_mat-5-1_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Nombres decimals",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "0,5 (=0,50) és més gran que 0,45.",
    "pregunta": "0,5 és més petit que 0,45.",
    "resposta_correcta": false
  },
  {
    "id": "5è_mat-5-1_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Nombres decimals",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "2,8 té 8 dècimes; 2,08 només té 0 dècimes i 8 centèsimes, que és menys.",
    "pregunta": "Quin nombre és més gran, 2,08 o 2,8?",
    "resposta_correcta": "2,8",
    "respostes_acceptades": [
      "2,8",
      "2.8"
    ]
  },
  {
    "id": "5è_mat-5-1_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Nombres decimals",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Escriu en xifres «dotze unitats i tres mil·lèsimes».",
    "resposta_correcta": "12,003",
    "respostes_acceptades": [
      "12,003",
      "12.003"
    ]
  },
  {
    "id": "5è_mat-5-1_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Nombres decimals",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin nombre decimal és equivalent a la fracció 3/4?",
    "opcions": [
      "0,75",
      "0,34",
      "0,43",
      "0,25"
    ],
    "resposta_correcta": "0,75"
  },
  {
    "id": "5è_mat-5-2_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Fraccions, decimals i percentatges",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina fracció representa el 50%?",
    "opcions": [
      "1/2",
      "1/4",
      "1/5",
      "1/3"
    ],
    "resposta_correcta": "1/2"
  },
  {
    "id": "5è_mat-5-2_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Fraccions, decimals i percentatges",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "0,25 equival a 25 centèsimes, és a dir, 25%.",
    "pregunta": "0,25 és equivalent a quin percentatge?",
    "resposta_correcta": "25%",
    "respostes_acceptades": [
      "25%",
      "25 %",
      "25"
    ]
  },
  {
    "id": "5è_mat-5-2_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Fraccions, decimals i percentatges",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "3/4 equival a 75%, ja que 3 ÷ 4 = 0,75.",
    "pregunta": "3/4 i 75% representen la mateixa quantitat.",
    "resposta_correcta": true
  },
  {
    "id": "5è_mat-5-2_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Fraccions, decimals i percentatges",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina fracció és equivalent a 0,2?",
    "opcions": [
      "1/5",
      "1/4",
      "1/2",
      "1/8"
    ],
    "resposta_correcta": "1/5"
  },
  {
    "id": "5è_mat-5-2_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Fraccions, decimals i percentatges",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Escriu com a percentatge la fracció 1/4.",
    "resposta_correcta": "25%",
    "respostes_acceptades": [
      "25%",
      "25 %",
      "25"
    ]
  },
  {
    "id": "5è_mat-5-2_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Fraccions, decimals i percentatges",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada fracció amb el seu percentatge.",
    "parelles": [
      {
        "a": "1/2",
        "b": "50%"
      },
      {
        "a": "1/4",
        "b": "25%"
      },
      {
        "a": "3/4",
        "b": "75%"
      },
      {
        "a": "1/10",
        "b": "10%"
      }
    ]
  },
  {
    "id": "5è_mat-5-3_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Múltiples i divisors",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin d'aquests nombres és múltiple de 5?",
    "opcions": [
      "30",
      "27",
      "32",
      "19"
    ],
    "resposta_correcta": "30"
  },
  {
    "id": "5è_mat-5-3_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Múltiples i divisors",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és un divisor de 12?",
    "opcions": [
      "4",
      "5",
      "7",
      "9"
    ],
    "resposta_correcta": "4"
  },
  {
    "id": "5è_mat-5-3_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Múltiples i divisors",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Tots els nombres parells es poden dividir exactament per 2.",
    "pregunta": "El 2 és divisor de tots els nombres parells.",
    "resposta_correcta": true
  },
  {
    "id": "5è_mat-5-3_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Múltiples i divisors",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "10 es pot dividir exactament per 1, 2, 5 i 10.",
    "pregunta": "Quins són tots els divisors de 10?",
    "resposta_correcta": "1, 2, 5, 10",
    "conjunt": true,
    "respostes_acceptades": [
      "1, 2, 5, 10",
      "1,2,5,10",
      "1, 2, 5 i 10"
    ]
  },
  {
    "id": "5è_mat-5-3_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Múltiples i divisors",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Escriu el primer múltiple de 7 més gran que 20.",
    "resposta_correcta": "21",
    "respostes_acceptades": [
      "21"
    ]
  },
  {
    "id": "5è_mat-5-3_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Múltiples i divisors",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin nombre és múltiple de 3 i de 4 alhora?",
    "opcions": [
      "12",
      "10",
      "15",
      "8"
    ],
    "resposta_correcta": "12"
  },
  {
    "id": "5è_mat-5-4_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Perímetres i àrees",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada figura amb la seva fórmula.",
    "parelles": [
      {
        "a": "Perímetre d'un rectangle",
        "b": "Suma dels quatre costats"
      },
      {
        "a": "Àrea d'un rectangle",
        "b": "Base × alçada"
      },
      {
        "a": "Àrea d'un triangle",
        "b": "(Base × alçada) ÷ 2"
      }
    ]
  },
  {
    "id": "5è_mat-5-4_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Perímetres i àrees",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Calcula el perímetre d'un rectangle de 6 cm de base i 3 cm d'alçada (en cm).",
    "resposta_correcta": "18",
    "respostes_acceptades": [
      "18"
    ]
  },
  {
    "id": "5è_mat-5-4_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Perímetres i àrees",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es calcula l'àrea d'un rectangle?",
    "opcions": [
      "Base × alçada",
      "Base + alçada",
      "(Base + alçada) × 2",
      "Base ÷ alçada"
    ],
    "resposta_correcta": "Base × alçada"
  },
  {
    "id": "5è_mat-5-4_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Perímetres i àrees",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Calcula l'àrea d'un rectangle de 5 cm de base i 4 cm d'alçada (en cm²).",
    "resposta_correcta": "20",
    "respostes_acceptades": [
      "20"
    ]
  },
  {
    "id": "5è_mat-5-4_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Perímetres i àrees",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Un quadrat té quatre costats iguals, no cinc.",
    "pregunta": "Un quadrat té cinc costats iguals.",
    "resposta_correcta": false
  },
  {
    "id": "5è_mat-5-4_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Perímetres i àrees",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és l'àrea d'un triangle de base 8 cm i alçada 5 cm?",
    "opcions": [
      "20 cm²",
      "40 cm²",
      "13 cm²",
      "10 cm²"
    ],
    "resposta_correcta": "20 cm²"
  },
  {
    "id": "5è_mat-5-5_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Mitjana i moda",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada mesura estadística amb la seva definició.",
    "parelles": [
      {
        "a": "Mitjana",
        "b": "Sumar totes les dades i dividir pel nombre de dades"
      },
      {
        "a": "Moda",
        "b": "La dada que es repeteix més vegades"
      },
      {
        "a": "Mediana",
        "b": "La dada que queda al mig quan s'ordenen les dades"
      }
    ]
  },
  {
    "id": "5è_mat-5-5_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Mitjana i moda",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Calcula la mitjana de 4, 6 i 8.",
    "resposta_correcta": "6",
    "respostes_acceptades": [
      "6"
    ]
  },
  {
    "id": "5è_mat-5-5_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Mitjana i moda",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com s'anomena la dada que es repeteix més vegades en un conjunt?",
    "opcions": [
      "Moda",
      "Mitjana",
      "Mediana",
      "Freqüència"
    ],
    "resposta_correcta": "Moda"
  },
  {
    "id": "5è_mat-5-5_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Mitjana i moda",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El 2 és la dada que es repeteix més vegades, per tant és la moda.",
    "pregunta": "En les dades 2, 2, 3, 5, la moda és 2.",
    "resposta_correcta": true
  },
  {
    "id": "5è_mat-5-5_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Mitjana i moda",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és la moda d'aquestes notes: 6, 7, 7, 8, 9?",
    "opcions": [
      "7",
      "6",
      "8",
      "9"
    ],
    "resposta_correcta": "7"
  },
  {
    "id": "5è_mat-5-5_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Mitjana i moda",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Calcula la mitjana de 10, 20 i 30.",
    "resposta_correcta": "20",
    "respostes_acceptades": [
      "20"
    ]
  },
  {
    "id": "6è_mat-6-1_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Operacions amb decimals",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "3,5 + 2,25 = ?",
    "resposta_correcta": "5,75",
    "respostes_acceptades": [
      "5,75",
      "5.75"
    ]
  },
  {
    "id": "6è_mat-6-1_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Operacions amb decimals",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "7,2 - 3,45 = ?",
    "resposta_correcta": "3,75",
    "respostes_acceptades": [
      "3,75",
      "3.75"
    ]
  },
  {
    "id": "6è_mat-6-1_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Operacions amb decimals",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "4,2 × 3 = ?",
    "opcions": [
      "12,6",
      "12,2",
      "14,2",
      "7,2"
    ],
    "resposta_correcta": "12,6"
  },
  {
    "id": "6è_mat-6-1_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Operacions amb decimals",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "9,6 ÷ 4 = ?",
    "resposta_correcta": "2,4",
    "respostes_acceptades": [
      "2,4",
      "2.4"
    ]
  },
  {
    "id": "6è_mat-6-1_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Operacions amb decimals",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Per sumar decimals cal alinear la coma de cada número exactament, sense moure-la.",
    "pregunta": "Per sumar decimals cal moure la coma dues posicions a la dreta.",
    "resposta_correcta": false
  },
  {
    "id": "6è_mat-6-1_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Operacions amb decimals",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és una bona estimació de 19,8 × 5?",
    "opcions": [
      "Aproximadament 100",
      "Aproximadament 50",
      "Aproximadament 200",
      "Aproximadament 20"
    ],
    "resposta_correcta": "Aproximadament 100"
  },
  {
    "id": "6è_mat-6-2_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Percentatges i proporcionalitat",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és el 10% de 200?",
    "resposta_correcta": "20",
    "respostes_acceptades": [
      "20"
    ]
  },
  {
    "id": "6è_mat-6-2_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Percentatges i proporcionalitat",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Calcula el 25% de 80.",
    "resposta_correcta": "20",
    "respostes_acceptades": [
      "20"
    ]
  },
  {
    "id": "6è_mat-6-2_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Percentatges i proporcionalitat",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Si 2 llapis costen 1 €, quant costaran 6 llapis?",
    "opcions": [
      "3 €",
      "2 €",
      "6 €",
      "1 €"
    ],
    "resposta_correcta": "3 €"
  },
  {
    "id": "6è_mat-6-2_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Percentatges i proporcionalitat",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El 50% equival a la meitat d'una quantitat.",
    "pregunta": "El 50% d'una quantitat és la meitat.",
    "resposta_correcta": true
  },
  {
    "id": "6è_mat-6-2_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Percentatges i proporcionalitat",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "El 25% de 40 € són 10 €; 40 − 10 = 30 €.",
    "pregunta": "Un pantaló costa 40 € i té un 25% de descompte. Quant costa ara?",
    "resposta_correcta": "30 €",
    "respostes_acceptades": [
      "30 €",
      "30€",
      "30 euros",
      "30"
    ]
  },
  {
    "id": "6è_mat-6-2_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Percentatges i proporcionalitat",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Calcula el 20% de 150.",
    "resposta_correcta": "30",
    "respostes_acceptades": [
      "30"
    ]
  },
  {
    "id": "6è_mat-6-3_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Educació financera",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada terme financer amb la seva definició.",
    "parelles": [
      {
        "a": "L'IVA",
        "b": "Un impost que paguem en moltes compres"
      },
      {
        "a": "El sou",
        "b": "Els diners que es reben per treballar"
      },
      {
        "a": "L'estalvi",
        "b": "Els diners que es guarden sense gastar"
      },
      {
        "a": "El descompte",
        "b": "Una rebaixa en el preu d'un producte"
      }
    ]
  },
  {
    "id": "6è_mat-6-3_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Educació financera",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "Una rebaixa redueix el preu respecte a l'original.",
    "pregunta": "Si un producte té una rebaixa, el preu final és més baix o més alt que l'original?",
    "resposta_correcta": "Més baix",
    "respostes_acceptades": [
      "Més baix",
      "més baix",
      "Més baix que l'original",
      "baix",
      "més barat"
    ]
  },
  {
    "id": "6è_mat-6-3_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Educació financera",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El consum responsable implica valorar preu i qualitat abans de comprar.",
    "pregunta": "Comparar preu i qualitat abans de comprar és consum responsable.",
    "resposta_correcta": true
  },
  {
    "id": "6è_mat-6-3_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Educació financera",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina d'aquestes opcions és més barata per unitat?",
    "opcions": [
      "3 boles de pa per 3 €",
      "1 bola de pa per 1,20 €",
      "2 boles de pa per 2,50 €",
      "4 boles de pa per 5 €"
    ],
    "resposta_correcta": "3 boles de pa per 3 €"
  },
  {
    "id": "6è_mat-6-3_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Educació financera",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Si guardes 5 € cada setmana, quants diners tindràs en 4 setmanes?",
    "resposta_correcta": "20",
    "respostes_acceptades": [
      "20"
    ]
  },
  {
    "id": "6è_mat-6-3_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Educació financera",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què és un interès bancari?",
    "opcions": [
      "Els diners extra que el banc paga o cobra per un dipòsit o préstec",
      "El preu d'un producte",
      "Un impost obligatori",
      "Un descompte en una botiga"
    ],
    "resposta_correcta": "Els diners extra que el banc paga o cobra per un dipòsit o préstec"
  },
  {
    "id": "6è_mat-6-4_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Angles i figures geomètriques",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin instrument es fa servir per mesurar angles?",
    "opcions": [
      "El transportador d'angles",
      "El regle",
      "La balança",
      "El termòmetre"
    ],
    "resposta_correcta": "El transportador d'angles"
  },
  {
    "id": "6è_mat-6-4_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Angles i figures geomètriques",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada tipus d'angle amb la seva mesura.",
    "parelles": [
      {
        "a": "Angle recte",
        "b": "Fa exactament 90°"
      },
      {
        "a": "Angle agut",
        "b": "Fa menys de 90°"
      },
      {
        "a": "Angle obtús",
        "b": "Fa entre 90° i 180°"
      },
      {
        "a": "Angle pla",
        "b": "Fa exactament 180°"
      }
    ]
  },
  {
    "id": "6è_mat-6-4_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Angles i figures geomètriques",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Un angle agut mesura menys de 90°; un angle obtús mesura més de 90°.",
    "pregunta": "Un angle agut mesura més de 90°.",
    "resposta_correcta": false
  },
  {
    "id": "6è_mat-6-4_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Angles i figures geomètriques",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quants graus té un angle obtús?",
    "opcions": [
      "Entre 90° i 180°",
      "Menys de 90°",
      "Exactament 90°",
      "Exactament 180°"
    ],
    "resposta_correcta": "Entre 90° i 180°"
  },
  {
    "id": "6è_mat-6-4_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Angles i figures geomètriques",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "La circumferència és la línia; el cercle és la circumferència i tot el que hi ha a dins.",
    "pregunta": "Quina línia té tots els punts a la mateixa distància del centre?",
    "resposta_correcta": "Circumferència",
    "respostes_acceptades": [
      "Circumferència",
      "circumferència",
      "La circumferència"
    ]
  },
  {
    "id": "6è_mat-6-4_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Angles i figures geomètriques",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada terme amb la seva definició.",
    "parelles": [
      {
        "a": "Semblants",
        "b": "Tenen la mateixa forma però mida diferent"
      },
      {
        "a": "Congruents",
        "b": "Tenen la mateixa forma i la mateixa mida"
      },
      {
        "a": "Simètriques",
        "b": "Es poden dividir en parts idèntiques i invertides"
      },
      {
        "a": "Perpendiculars",
        "b": "Formen un angle de 90° entre elles"
      }
    ]
  },
  {
    "id": "6è_mat-6-5_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Estadística i probabilitat",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada mesura estadística amb la seva definició.",
    "parelles": [
      {
        "a": "Mediana",
        "b": "La dada del mig quan s'ordenen les dades de més petita a més gran"
      },
      {
        "a": "Moda",
        "b": "La dada que es repeteix més vegades"
      },
      {
        "a": "Mitjana",
        "b": "La suma de totes les dades dividida pel nombre de dades"
      },
      {
        "a": "Freqüència",
        "b": "El nombre de vegades que apareix una dada"
      }
    ]
  },
  {
    "id": "6è_mat-6-5_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Estadística i probabilitat",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Calcula la mediana de 3, 5, 7.",
    "resposta_correcta": "5",
    "respostes_acceptades": [
      "5"
    ]
  },
  {
    "id": "6è_mat-6-5_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Estadística i probabilitat",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quantes vegades apareix una dada en un conjunt s'anomena...",
    "opcions": [
      "Freqüència",
      "Mediana",
      "Mitjana",
      "Moda"
    ],
    "resposta_correcta": "Freqüència"
  },
  {
    "id": "6è_mat-6-5_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Estadística i probabilitat",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Tots els nombres del dau tenen la mateixa probabilitat, 1 entre 6.",
    "pregunta": "En llançar un dau normal, és més probable que surti un 6 que un 3.",
    "resposta_correcta": false
  },
  {
    "id": "6è_mat-6-5_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Estadística i probabilitat",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "Una moneda té dues cares possibles, així que la probabilitat és 1 entre 2.",
    "pregunta": "Si llences una moneda, quina és la probabilitat que surti cara?",
    "resposta_correcta": "1 entre 2",
    "respostes_acceptades": [
      "1 entre 2",
      "1/2",
      "50%",
      "0,5",
      "0.5",
      "50 %"
    ]
  },
  {
    "id": "6è_mat-6-5_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "mat",
    "tema": "Estadística i probabilitat",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina d'aquestes dades NO és útil per calcular una mitjana?",
    "opcions": [
      "El nom d'un alumne",
      "Les notes d'un examen",
      "Les altures d'un grup",
      "Els diners estalviats"
    ],
    "resposta_correcta": "El nom d'un alumne"
  },
  {
    "id": "5è_cat-5-1_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Tipus de textos",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "La narració explica fets que passen en un ordre temporal (un abans i un després).",
    "pregunta": "Quin tipus de text explica fets que passen en un ordre temporal?",
    "resposta_correcta": "La narració",
    "respostes_acceptades": [
      "La narració",
      "la narració",
      "Narració",
      "narració"
    ]
  },
  {
    "id": "5è_cat-5-1_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Tipus de textos",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "La descripció explica com és algú o alguna cosa, sense seguir un ordre temporal.",
    "pregunta": "Quin tipus de text explica com és una persona, un lloc o una cosa?",
    "resposta_correcta": "La descripció",
    "respostes_acceptades": [
      "La descripció",
      "la descripció",
      "Descripció",
      "descripció"
    ]
  },
  {
    "id": "5è_cat-5-1_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Tipus de textos",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Un diàleg és una conversa entre dues o més persones que es diuen coses l'una a l'altra.",
    "pregunta": "Un diàleg és un text escrit per una sola persona sense interlocutor.",
    "resposta_correcta": false
  },
  {
    "id": "5è_cat-5-1_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Tipus de textos",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin tipus de text informa sobre un tema amb dades objectives?",
    "opcions": [
      "L'exposició",
      "La narració",
      "El diàleg",
      "La poesia"
    ],
    "resposta_correcta": "L'exposició"
  },
  {
    "id": "5è_cat-5-1_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Tipus de textos",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és una característica típica de la narració?",
    "opcions": [
      "Té un inici, un nus i un desenllaç",
      "Només té diàlegs",
      "No té personatges",
      "És sempre en vers"
    ],
    "resposta_correcta": "Té un inici, un nus i un desenllaç"
  },
  {
    "id": "5è_cat-5-1_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Tipus de textos",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada tipus de text amb el seu objectiu principal.",
    "parelles": [
      {
        "a": "Narració",
        "b": "Explicar fets en un ordre"
      },
      {
        "a": "Descripció",
        "b": "Dir com és algú o alguna cosa"
      },
      {
        "a": "Diàleg",
        "b": "Reproduir una conversa"
      },
      {
        "a": "Exposició",
        "b": "Informar sobre un tema"
      }
    ]
  },
  {
    "id": "5è_cat-5-2_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Gèneres literaris",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "A quin gènere literari pertanyen les novel·les i els contes?",
    "opcions": [
      "La narrativa",
      "La poesia",
      "El teatre",
      "L'assaig"
    ],
    "resposta_correcta": "La narrativa"
  },
  {
    "id": "5è_cat-5-2_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Gèneres literaris",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin gènere literari es representa sobre un escenari?",
    "opcions": [
      "El teatre",
      "La narrativa",
      "La poesia",
      "La descripció"
    ],
    "resposta_correcta": "El teatre"
  },
  {
    "id": "5è_cat-5-2_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Gèneres literaris",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Els poemes solen estructurar-se en versos agrupats en estrofes.",
    "pregunta": "La poesia sol organitzar-se en versos i estrofes.",
    "resposta_correcta": true
  },
  {
    "id": "5è_cat-5-2_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Gèneres literaris",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada paper de la història amb la seva definició.",
    "parelles": [
      {
        "a": "Protagonista",
        "b": "El personatge principal de la història"
      },
      {
        "a": "Antagonista",
        "b": "El personatge que s'oposa al protagonista"
      },
      {
        "a": "Narrador",
        "b": "Qui explica la història"
      },
      {
        "a": "Autor",
        "b": "Qui ha escrit l'obra"
      }
    ]
  },
  {
    "id": "5è_cat-5-2_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Gèneres literaris",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada element de la història amb la seva definició.",
    "parelles": [
      {
        "a": "Escenari",
        "b": "El lloc i el moment on passa la història"
      },
      {
        "a": "Tema",
        "b": "De què tracta la història"
      },
      {
        "a": "Trama",
        "b": "L'encadenament d'esdeveniments de la història"
      },
      {
        "a": "Desenllaç",
        "b": "Com acaba la història"
      }
    ]
  },
  {
    "id": "5è_cat-5-2_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Gèneres literaris",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com s'anomena l'encadenament d'esdeveniments d'una història?",
    "opcions": [
      "La trama",
      "L'escenari",
      "El gènere",
      "La rima"
    ],
    "resposta_correcta": "La trama"
  },
  {
    "id": "5è_cat-5-3_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Ortografia i gramàtica bàsiques",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada categoria gramatical amb la seva funció.",
    "parelles": [
      {
        "a": "El verb",
        "b": "Expressa una acció, un estat o un procés"
      },
      {
        "a": "El nom",
        "b": "Designa persones, animals, objectes o idees"
      },
      {
        "a": "L'adjectiu",
        "b": "Expressa una qualitat del nom"
      },
      {
        "a": "L'article",
        "b": "Acompanya el nom i indica si és conegut o no"
      }
    ]
  },
  {
    "id": "5è_cat-5-3_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Ortografia i gramàtica bàsiques",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula porta accent?",
    "opcions": [
      "Cafè",
      "Taula",
      "Cadira",
      "Llibre"
    ],
    "resposta_correcta": "Cafè"
  },
  {
    "id": "5è_cat-5-3_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Ortografia i gramàtica bàsiques",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Un adverbi és invariable: no canvia de gènere ni nombre, a diferència de l'adjectiu.",
    "pregunta": "Un adverbi concorda en gènere i nombre amb el nom que acompanya.",
    "resposta_correcta": false
  },
  {
    "id": "5è_cat-5-3_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Ortografia i gramàtica bàsiques",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula és un pronom?",
    "opcions": [
      "Ell",
      "Casa",
      "Ràpid",
      "Cantar"
    ],
    "resposta_correcta": "Ell"
  },
  {
    "id": "5è_cat-5-3_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Ortografia i gramàtica bàsiques",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina d'aquestes paraules és una preposició?",
    "opcions": [
      "Amb",
      "Bonic",
      "Córrer",
      "Taula"
    ],
    "resposta_correcta": "Amb"
  },
  {
    "id": "5è_cat-5-3_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Ortografia i gramàtica bàsiques",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena les paraules per formar una frase ben construïda.",
    "elements_ordre_correcte": [
      "Els",
      "nens",
      "juguen",
      "al",
      "pati"
    ]
  },
  {
    "id": "5è_cat-5-4_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Comprensió lectora",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Sobre quin tema busca informació la Marta?",
    "opcions": [
      "Volcans",
      "Biblioteques",
      "Fotografies",
      "Poble"
    ],
    "resposta_correcta": "Volcans",
    "text": "La Marta va anar a la biblioteca del poble per buscar un llibre sobre volcans. La bibliotecària li va recomanar un llibre amb moltes fotografies i li va explicar que els volcans expulsen lava molt calenta."
  },
  {
    "id": "5è_cat-5-4_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Comprensió lectora",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui li recomana un llibre a la Marta?",
    "opcions": [
      "La bibliotecària",
      "Un volcà",
      "La seva mare",
      "Un amic"
    ],
    "resposta_correcta": "La bibliotecària",
    "text": "La Marta va anar a la biblioteca del poble per buscar un llibre sobre volcans. La bibliotecària li va recomanar un llibre amb moltes fotografies i li va explicar que els volcans expulsen lava molt calenta."
  },
  {
    "id": "5è_cat-5-4_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Comprensió lectora",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Segons el text, la bibliotecària li va recomanar un llibre sobre volcans, no sobre dinosaures.",
    "pregunta": "Segons el text, la bibliotecària li va recomanar un llibre sobre dinosaures.",
    "resposta_correcta": false,
    "text": "La Marta va anar a la biblioteca del poble per buscar un llibre sobre volcans. La bibliotecària li va recomanar un llibre amb moltes fotografies i li va explicar que els volcans expulsen lava molt calenta."
  },
  {
    "id": "5è_cat-5-4_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Comprensió lectora",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què expulsen els volcans, segons el text?",
    "opcions": [
      "Lava molt calenta",
      "Aigua freda",
      "Neu",
      "Fum de color blau"
    ],
    "resposta_correcta": "Lava molt calenta",
    "text": "La Marta va anar a la biblioteca del poble per buscar un llibre sobre volcans. La bibliotecària li va recomanar un llibre amb moltes fotografies i li va explicar que els volcans expulsen lava molt calenta."
  },
  {
    "id": "5è_cat-5-4_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Comprensió lectora",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On va anar la Marta a buscar el llibre?",
    "opcions": [
      "A la biblioteca del poble",
      "A una llibreria",
      "A l'escola",
      "A casa d'una amiga"
    ],
    "resposta_correcta": "A la biblioteca del poble",
    "text": "La Marta va anar a la biblioteca del poble per buscar un llibre sobre volcans. La bibliotecària li va recomanar un llibre amb moltes fotografies i li va explicar que els volcans expulsen lava molt calenta."
  },
  {
    "id": "5è_cat-5-4_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Comprensió lectora",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Com que busca un llibre sobre volcans, es pot deduir aquest interès.",
    "pregunta": "Es pot deduir del text que la Marta té interès per la natura o la ciència.",
    "resposta_correcta": true,
    "text": "La Marta va anar a la biblioteca del poble per buscar un llibre sobre volcans. La bibliotecària li va recomanar un llibre amb moltes fotografies i li va explicar que els volcans expulsen lava molt calenta."
  },
  {
    "id": "5è_cat-5-5_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Comunicació oral",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quan parlem amb un mestre o una mestra, quin registre és més adequat?",
    "opcions": [
      "El registre formal",
      "El registre informal",
      "Cap registre",
      "Sempre el mateix que amb els amics"
    ],
    "resposta_correcta": "El registre formal"
  },
  {
    "id": "5è_cat-5-5_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Comunicació oral",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Escoltar activament implica centrar-se de veritat en el que diu l'altra persona.",
    "pregunta": "Escoltar activament vol dir prestar atenció real al que diu l'altra persona.",
    "resposta_correcta": true
  },
  {
    "id": "5è_cat-5-5_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Comunicació oral",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada element d'una bona exposició oral amb el motiu pel qual ajuda.",
    "parelles": [
      {
        "a": "Una veu clara",
        "b": "Ajuda que el públic t'entengui bé"
      },
      {
        "a": "Contacte visual amb el públic",
        "b": "Manté l'atenció de qui escolta"
      },
      {
        "a": "Un guió preparat",
        "b": "Evita perdre el fil del que vols dir"
      }
    ]
  },
  {
    "id": "5è_cat-5-5_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Comunicació oral",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és una bona estratègia per resoldre un conflicte parlant?",
    "opcions": [
      "Escoltar i buscar una solució junts",
      "Cridar més fort",
      "Ignorar l'altra persona",
      "Marxar sense dir res"
    ],
    "resposta_correcta": "Escoltar i buscar una solució junts"
  },
  {
    "id": "5è_cat-5-5_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Comunicació oral",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin d'aquests elements forma part de la situació comunicativa?",
    "opcions": [
      "Els participants i el propòsit",
      "Només les paraules",
      "Només el silenci",
      "Res, la comunicació no té elements"
    ],
    "resposta_correcta": "Els participants i el propòsit"
  },
  {
    "id": "5è_cat-5-5_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Comunicació oral",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El to de veu i els gestos són comunicació no verbal, no comunicació escrita.",
    "pregunta": "El to de veu i els gestos són un tipus de comunicació escrita.",
    "resposta_correcta": false
  },
  {
    "id": "6è_cat-6-1_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Modalitats oracionals",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada modalitat oracional amb la seva definició.",
    "parelles": [
      {
        "a": "Imperativa",
        "b": "Dona una ordre o fa una petició"
      },
      {
        "a": "Interrogativa",
        "b": "Fa una pregunta"
      },
      {
        "a": "Exclamativa",
        "b": "Expressa una emoció forta"
      },
      {
        "a": "Declarativa",
        "b": "Informa d'alguna cosa de manera neutra"
      }
    ]
  },
  {
    "id": "6è_cat-6-1_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Modalitats oracionals",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina modalitat té la frase «Quina sort que hem tingut!»?",
    "opcions": [
      "Exclamativa",
      "Interrogativa",
      "Imperativa",
      "Declarativa"
    ],
    "resposta_correcta": "Exclamativa"
  },
  {
    "id": "6è_cat-6-1_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Modalitats oracionals",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Una frase declarativa informa d'alguna cosa i acaba amb un punt; la interrogativa porta signe d'interrogació.",
    "pregunta": "Una frase declarativa porta un signe d'interrogació al final.",
    "resposta_correcta": false
  },
  {
    "id": "6è_cat-6-1_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Modalitats oracionals",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina modalitat té la frase «On vius?»?",
    "opcions": [
      "Interrogativa",
      "Exclamativa",
      "Imperativa",
      "Declarativa"
    ],
    "resposta_correcta": "Interrogativa"
  },
  {
    "id": "6è_cat-6-1_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Modalitats oracionals",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin signe de puntuació acompanya una frase exclamativa?",
    "resposta_correcta": "!",
    "respostes_acceptades": [
      "!"
    ]
  },
  {
    "id": "6è_cat-6-1_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Modalitats oracionals",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena les paraules per formar una frase interrogativa.",
    "elements_ordre_correcte": [
      "Què",
      "estàs",
      "fent",
      "ara"
    ]
  },
  {
    "id": "6è_cat-6-2_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Mecanismes de cohesió textual",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada paraula amb la seva categoria gramatical.",
    "parelles": [
      {
        "a": "Ella",
        "b": "Un pronom personal"
      },
      {
        "a": "Aquest",
        "b": "Un determinant demostratiu"
      },
      {
        "a": "Allà",
        "b": "Un adverbi de lloc"
      },
      {
        "a": "Molt",
        "b": "Un adverbi de quantitat"
      }
    ]
  },
  {
    "id": "6è_cat-6-2_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Mecanismes de cohesió textual",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin connector s'utilitza per explicar una causa?",
    "opcions": [
      "Perquè",
      "Però",
      "I",
      "Després"
    ],
    "resposta_correcta": "Perquè"
  },
  {
    "id": "6è_cat-6-2_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Mecanismes de cohesió textual",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Els sinònims permeten variar el vocabulari sense repetir paraules.",
    "pregunta": "Fer servir sinònims ajuda a no repetir sempre la mateixa paraula.",
    "resposta_correcta": true
  },
  {
    "id": "6è_cat-6-2_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Mecanismes de cohesió textual",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin connector indica oposició entre dues idees?",
    "opcions": [
      "Però",
      "Perquè",
      "També",
      "Primer"
    ],
    "resposta_correcta": "Però"
  },
  {
    "id": "6è_cat-6-2_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Mecanismes de cohesió textual",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada paraula amb el seu sinònim.",
    "parelles": [
      {
        "a": "Alegre",
        "b": "Sinònim de content"
      },
      {
        "a": "Trist",
        "b": "Sinònim de disgustat o afligit"
      },
      {
        "a": "Cansat",
        "b": "Sinònim d'exhaust o fatigat"
      },
      {
        "a": "Enfadat",
        "b": "Sinònim d'enutjat o molest"
      }
    ]
  },
  {
    "id": "6è_cat-6-2_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Mecanismes de cohesió textual",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada connector amb la seva funció.",
    "parelles": [
      {
        "a": "Perquè",
        "b": "Explica una causa"
      },
      {
        "a": "Però",
        "b": "Marca una oposició"
      },
      {
        "a": "Després",
        "b": "Indica ordre temporal"
      },
      {
        "a": "A més",
        "b": "Afegeix informació"
      }
    ]
  },
  {
    "id": "6è_cat-6-3_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Escriptura creativa",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada figura literària amb la seva definició.",
    "parelles": [
      {
        "a": "La comparació",
        "b": "Compara dues coses fent servir «com»"
      },
      {
        "a": "La metàfora",
        "b": "Identifica dues coses sense fer servir «com»"
      },
      {
        "a": "La rima",
        "b": "Repetició d'un mateix so al final dels versos"
      },
      {
        "a": "La hipèrbole",
        "b": "Exagera molt una idea"
      }
    ]
  },
  {
    "id": "6è_cat-6-3_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Escriptura creativa",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com s'anomena la repetició d'un mateix so al final dels versos?",
    "opcions": [
      "La rima",
      "La comparació",
      "La metàfora",
      "El ritme"
    ],
    "resposta_correcta": "La rima"
  },
  {
    "id": "6è_cat-6-3_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Escriptura creativa",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "A diferència de la comparació, la metàfora no fa servir «com».",
    "pregunta": "Una metàfora diu que una cosa ÉS una altra, sense fer servir «com».",
    "resposta_correcta": true
  },
  {
    "id": "6è_cat-6-3_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Escriptura creativa",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina d'aquestes frases és una metàfora?",
    "opcions": [
      "Els seus ulls són dues estrelles",
      "Els seus ulls brillen com estrelles",
      "Té els ulls marrons",
      "M'agraden els seus ulls"
    ],
    "resposta_correcta": "Els seus ulls són dues estrelles"
  },
  {
    "id": "6è_cat-6-3_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Escriptura creativa",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin recurs consisteix a exagerar molt una idea?",
    "opcions": [
      "La hipèrbole",
      "La rima",
      "La comparació",
      "El diàleg"
    ],
    "resposta_correcta": "La hipèrbole"
  },
  {
    "id": "6è_cat-6-3_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Escriptura creativa",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Un vocabulari ric i variat millora la qualitat d'un text narratiu, no la longitud de les paraules.",
    "pregunta": "Fer servir paraules més curtes millora un text narratiu.",
    "resposta_correcta": false
  },
  {
    "id": "6è_cat-6-4_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Cerca i tractament de la informació",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Abans de confiar en una informació d'internet, què hauries de comprovar?",
    "opcions": [
      "Qui n'és l'autor i si és fiable",
      "Res, tota la informació és certa",
      "Si té moltes imatges",
      "Si és curta"
    ],
    "resposta_correcta": "Qui n'és l'autor i si és fiable"
  },
  {
    "id": "6è_cat-6-4_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Cerca i tractament de la informació",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "La fiabilitat d'una pàgina web depèn de l'autoria i les fonts, no de l'extensió del domini.",
    "pregunta": "Les pàgines que acaben en «.com» són més fiables que les que acaben en «.org».",
    "resposta_correcta": false
  },
  {
    "id": "6è_cat-6-4_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Cerca i tractament de la informació",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada bona pràctica de recerca amb el motiu pel qual ajuda.",
    "parelles": [
      {
        "a": "Buscar en diverses fonts fiables",
        "b": "Permet comprovar que la informació és certa"
      },
      {
        "a": "Citar l'autoria",
        "b": "Dir d'on prové la informació i qui la va escriure"
      },
      {
        "a": "Anar a la biblioteca",
        "b": "Una font fiable d'informació, a part d'internet"
      }
    ]
  },
  {
    "id": "6è_cat-6-4_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Cerca i tractament de la informació",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què vol dir «citar l'autoria» d'una informació?",
    "opcions": [
      "Dir d'on prové la informació i qui la va escriure",
      "Copiar-la sense dir res",
      "Canviar-la una mica",
      "Esborrar-la"
    ],
    "resposta_correcta": "Dir d'on prové la informació i qui la va escriure"
  },
  {
    "id": "6è_cat-6-4_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Cerca i tractament de la informació",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "On pots buscar informació fiable per a un treball escolar, a part d'internet?",
    "opcions": [
      "A la biblioteca",
      "Només als llibres de text de l'escola",
      "Només preguntant a amics",
      "Preguntant-ho als germans grans"
    ],
    "resposta_correcta": "A la biblioteca"
  },
  {
    "id": "6è_cat-6-4_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Cerca i tractament de la informació",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Contrastar diverses fonts permet comprovar la fiabilitat d'una informació.",
    "pregunta": "Comparar diverses fonts ajuda a saber si una informació és certa.",
    "resposta_correcta": true
  },
  {
    "id": "6è_cat-6-5_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Comprensió lectora avançada",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Per què es van tancar moltes escoles de poble?",
    "opcions": [
      "Perquè hi havia pocs infants",
      "Perquè no hi havia mestres",
      "Perquè els pobles van desaparèixer",
      "Perquè no hi havia llibres"
    ],
    "resposta_correcta": "Perquè hi havia pocs infants",
    "text": "Fa uns anys, molts pobles de muntanya es van quedar sense escola perquè hi havia pocs infants. Ara, algunes famílies que treballen des de casa s'hi han instal·lat, i algunes escoles rurals han tornat a obrir les portes."
  },
  {
    "id": "6è_cat-6-5_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Comprensió lectora avançada",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Per què hi tornen ara algunes famílies?",
    "opcions": [
      "Perquè poden treballar des de casa",
      "Perquè els pisos de ciutat s'han fet molt cars",
      "Perquè volen allunyar-se dels amics de la ciutat",
      "Perquè el poble els obliga a viure-hi"
    ],
    "resposta_correcta": "Perquè poden treballar des de casa",
    "text": "Fa uns anys, molts pobles de muntanya es van quedar sense escola perquè hi havia pocs infants. Ara, algunes famílies que treballen des de casa s'hi han instal·lat, i algunes escoles rurals han tornat a obrir les portes."
  },
  {
    "id": "6è_cat-6-5_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Comprensió lectora avançada",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Segons el text, les famílies que s'hi han instal·lat treballen des de casa, no hi van de vacances.",
    "pregunta": "Segons el text, les famílies que s'han instal·lat als pobles de muntanya hi van a passar les vacances d'estiu.",
    "resposta_correcta": false,
    "text": "Fa uns anys, molts pobles de muntanya es van quedar sense escola perquè hi havia pocs infants. Ara, algunes famílies que treballen des de casa s'hi han instal·lat, i algunes escoles rurals han tornat a obrir les portes."
  },
  {
    "id": "6è_cat-6-5_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Comprensió lectora avançada",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina paraula del text es refereix a «nens i nenes»?",
    "opcions": [
      "Infants",
      "Famílies",
      "Pobles",
      "Escoles"
    ],
    "resposta_correcta": "Infants",
    "text": "Fa uns anys, molts pobles de muntanya es van quedar sense escola perquè hi havia pocs infants. Ara, algunes famílies que treballen des de casa s'hi han instal·lat, i algunes escoles rurals han tornat a obrir les portes."
  },
  {
    "id": "6è_cat-6-5_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Comprensió lectora avançada",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin títol resumiria millor aquest text?",
    "opcions": [
      "El retorn de vida als pobles de muntanya",
      "Les millors escoles de ciutat",
      "Com viatjar a la muntanya",
      "La història de l'escola"
    ],
    "resposta_correcta": "El retorn de vida als pobles de muntanya",
    "text": "Fa uns anys, molts pobles de muntanya es van quedar sense escola perquè hi havia pocs infants. Ara, algunes famílies que treballen des de casa s'hi han instal·lat, i algunes escoles rurals han tornat a obrir les portes."
  },
  {
    "id": "6è_cat-6-5_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cat",
    "tema": "Comprensió lectora avançada",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El text relaciona el teletreball amb el retorn de famílies als pobles rurals.",
    "pregunta": "Es pot deduir que el teletreball ha influït en la vida d'alguns pobles rurals.",
    "resposta_correcta": true,
    "text": "Fa uns anys, molts pobles de muntanya es van quedar sense escola perquè hi havia pocs infants. Ara, algunes famílies que treballen des de casa s'hi han instal·lat, i algunes escoles rurals han tornat a obrir les portes."
  },
  {
    "id": "5è_cas-5-1_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Tipos de textos",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "La narración explica hechos que pasan en un orden temporal (un antes y un después).",
    "pregunta": "¿Qué tipo de texto explica hechos en un orden temporal?",
    "resposta_correcta": "La narración",
    "respostes_acceptades": [
      "La narración",
      "la narración",
      "Narracion",
      "narracion",
      "La narracion"
    ]
  },
  {
    "id": "5è_cas-5-1_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Tipos de textos",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "La descripción explica cómo es alguien o algo, sin seguir un orden temporal.",
    "pregunta": "¿Qué tipo de texto explica cómo es una persona, un lugar o una cosa?",
    "resposta_correcta": "La descripción",
    "respostes_acceptades": [
      "La descripción",
      "la descripción",
      "Descripcion",
      "descripcion",
      "La descripcion"
    ]
  },
  {
    "id": "5è_cas-5-1_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Tipos de textos",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Un diálogo es una conversación entre dos o más personas que se hablan entre sí.",
    "pregunta": "Un diálogo es un texto escrito por una sola persona sin interlocutor.",
    "resposta_correcta": false
  },
  {
    "id": "5è_cas-5-1_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Tipos de textos",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué tipo de texto informa sobre un tema con datos objetivos?",
    "opcions": [
      "La exposición",
      "La narración",
      "El diálogo",
      "La poesía"
    ],
    "resposta_correcta": "La exposición"
  },
  {
    "id": "5è_cas-5-1_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Tipos de textos",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál es una característica típica de la narración?",
    "opcions": [
      "Tiene inicio, nudo y desenlace",
      "Solo tiene diálogos",
      "No tiene personajes",
      "Siempre está en verso"
    ],
    "resposta_correcta": "Tiene inicio, nudo y desenlace"
  },
  {
    "id": "5è_cas-5-1_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Tipos de textos",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada tipo de texto con su objetivo principal.",
    "parelles": [
      {
        "a": "Narración",
        "b": "Explicar hechos en un orden"
      },
      {
        "a": "Descripción",
        "b": "Decir cómo es algo o alguien"
      },
      {
        "a": "Diálogo",
        "b": "Reproducir una conversación"
      },
      {
        "a": "Exposición",
        "b": "Informar sobre un tema"
      }
    ]
  },
  {
    "id": "5è_cas-5-2_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Géneros literarios",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿A qué género literario pertenecen las novelas y los cuentos?",
    "opcions": [
      "La narrativa",
      "La poesía",
      "El teatro",
      "El ensayo"
    ],
    "resposta_correcta": "La narrativa"
  },
  {
    "id": "5è_cas-5-2_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Géneros literarios",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué género literario se representa sobre un escenario?",
    "opcions": [
      "El teatro",
      "La narrativa",
      "La poesía",
      "La descripción"
    ],
    "resposta_correcta": "El teatro"
  },
  {
    "id": "5è_cas-5-2_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Géneros literarios",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Los poemas suelen estructurarse en versos agrupados en estrofas.",
    "pregunta": "La poesía suele organizarse en versos y estrofas.",
    "resposta_correcta": true
  },
  {
    "id": "5è_cas-5-2_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Géneros literarios",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada papel de la historia con su definición.",
    "parelles": [
      {
        "a": "Protagonista",
        "b": "El personaje principal de la historia"
      },
      {
        "a": "Antagonista",
        "b": "El personaje que se opone al protagonista"
      },
      {
        "a": "Narrador",
        "b": "Quien cuenta la historia"
      },
      {
        "a": "Autor",
        "b": "Quien ha escrito la obra"
      }
    ]
  },
  {
    "id": "5è_cas-5-2_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Géneros literarios",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada elemento de la historia con su definición.",
    "parelles": [
      {
        "a": "Escenario",
        "b": "El lugar y el momento donde pasa la historia"
      },
      {
        "a": "Tema",
        "b": "De qué trata la historia"
      },
      {
        "a": "Trama",
        "b": "El encadenamiento de sucesos de la historia"
      },
      {
        "a": "Desenlace",
        "b": "Cómo acaba la historia"
      }
    ]
  },
  {
    "id": "5è_cas-5-2_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Géneros literarios",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cómo se llama el encadenamiento de sucesos de una historia?",
    "opcions": [
      "La trama",
      "El escenario",
      "El género",
      "La rima"
    ],
    "resposta_correcta": "La trama"
  },
  {
    "id": "5è_cas-5-3_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Ortografía y gramática básicas",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada categoría gramatical con su función.",
    "parelles": [
      {
        "a": "El verbo",
        "b": "Expresa una acción, un estado o un proceso"
      },
      {
        "a": "El nombre",
        "b": "Designa personas, animales, objetos o ideas"
      },
      {
        "a": "El adjetivo",
        "b": "Expresa una cualidad del nombre"
      },
      {
        "a": "El artículo",
        "b": "Acompaña al nombre e indica si es conocido o no"
      }
    ]
  },
  {
    "id": "5è_cas-5-3_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Ortografía y gramática básicas",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué palabra lleva tilde?",
    "opcions": [
      "Café",
      "Mesa",
      "Silla",
      "Libro"
    ],
    "resposta_correcta": "Café"
  },
  {
    "id": "5è_cas-5-3_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Ortografía y gramática básicas",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Un adverbio es invariable: no cambia de género ni número, a diferencia del adjetivo.",
    "pregunta": "Un adverbio concuerda en género y número con el nombre que acompaña.",
    "resposta_correcta": false
  },
  {
    "id": "5è_cas-5-3_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Ortografía y gramática básicas",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué palabra es un pronombre?",
    "opcions": [
      "Él",
      "Casa",
      "Rápido",
      "Cantar"
    ],
    "resposta_correcta": "Él"
  },
  {
    "id": "5è_cas-5-3_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Ortografía y gramática básicas",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál de estas palabras es una preposición?",
    "opcions": [
      "Con",
      "Bonito",
      "Correr",
      "Mesa"
    ],
    "resposta_correcta": "Con"
  },
  {
    "id": "5è_cas-5-3_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Ortografía y gramática básicas",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena las palabras para formar una frase bien construida.",
    "elements_ordre_correcte": [
      "Los",
      "niños",
      "juegan",
      "en",
      "el",
      "patio"
    ]
  },
  {
    "id": "5è_cas-5-4_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Comprensión lectora",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Sobre qué tema busca información Marta?",
    "opcions": [
      "Volcanes",
      "Bibliotecas",
      "Fotografías",
      "Pueblo"
    ],
    "resposta_correcta": "Volcanes",
    "text": "Marta fue a la biblioteca del pueblo para buscar un libro sobre volcanes. La bibliotecaria le recomendó un libro con muchas fotografías y le explicó que los volcanes expulsan lava muy caliente."
  },
  {
    "id": "5è_cas-5-4_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Comprensión lectora",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Quién le recomienda un libro a Marta?",
    "opcions": [
      "La bibliotecaria",
      "Un volcán",
      "Su madre",
      "Un amigo"
    ],
    "resposta_correcta": "La bibliotecaria",
    "text": "Marta fue a la biblioteca del pueblo para buscar un libro sobre volcanes. La bibliotecaria le recomendó un libro con muchas fotografías y le explicó que los volcanes expulsan lava muy caliente."
  },
  {
    "id": "5è_cas-5-4_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Comprensión lectora",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Según el texto, la bibliotecaria le recomendó un libro sobre volcanes, no sobre dinosaurios.",
    "pregunta": "Según el texto, la bibliotecaria le recomendó un libro sobre dinosaurios.",
    "resposta_correcta": false,
    "text": "Marta fue a la biblioteca del pueblo para buscar un libro sobre volcanes. La bibliotecaria le recomendó un libro con muchas fotografías y le explicó que los volcanes expulsan lava muy caliente."
  },
  {
    "id": "5è_cas-5-4_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Comprensión lectora",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué expulsan los volcanes, según el texto?",
    "opcions": [
      "Lava muy caliente",
      "Agua fría",
      "Nieve",
      "Humo azul"
    ],
    "resposta_correcta": "Lava muy caliente",
    "text": "Marta fue a la biblioteca del pueblo para buscar un libro sobre volcanes. La bibliotecaria le recomendó un libro con muchas fotografías y le explicó que los volcanes expulsan lava muy caliente."
  },
  {
    "id": "5è_cas-5-4_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Comprensión lectora",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Dónde fue Marta a buscar el libro?",
    "opcions": [
      "A la biblioteca del pueblo",
      "A una librería",
      "Al colegio",
      "A casa de una amiga"
    ],
    "resposta_correcta": "A la biblioteca del pueblo",
    "text": "Marta fue a la biblioteca del pueblo para buscar un libro sobre volcanes. La bibliotecaria le recomendó un libro con muchas fotografías y le explicó que los volcanes expulsan lava muy caliente."
  },
  {
    "id": "5è_cas-5-4_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Comprensión lectora",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Como busca un libro sobre volcanes, se puede deducir ese interés.",
    "pregunta": "Se puede deducir del texto que Marta tiene interés por la naturaleza o la ciencia.",
    "resposta_correcta": true,
    "text": "Marta fue a la biblioteca del pueblo para buscar un libro sobre volcanes. La bibliotecaria le recomendó un libro con muchas fotografías y le explicó que los volcanes expulsan lava muy caliente."
  },
  {
    "id": "5è_cas-5-5_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Comunicación oral",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Cuando hablamos con un maestro o una maestra, ¿qué registro es más adecuado?",
    "opcions": [
      "El registro formal",
      "El registro informal",
      "Ningún registro",
      "Siempre el mismo que con los amigos"
    ],
    "resposta_correcta": "El registro formal"
  },
  {
    "id": "5è_cas-5-5_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Comunicación oral",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Escuchar activamente implica centrarse de verdad en lo que dice la otra persona.",
    "pregunta": "Escuchar activamente significa prestar atención real a lo que dice la otra persona.",
    "resposta_correcta": true
  },
  {
    "id": "5è_cas-5-5_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Comunicación oral",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada elemento de una buena exposición oral con el motivo por el que ayuda.",
    "parelles": [
      {
        "a": "Una voz clara",
        "b": "Ayuda a que el público te entienda bien"
      },
      {
        "a": "Contacto visual con el público",
        "b": "Mantiene la atención de quien escucha"
      },
      {
        "a": "Un guion preparado",
        "b": "Evita perder el hilo de lo que quieres decir"
      }
    ]
  },
  {
    "id": "5è_cas-5-5_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Comunicación oral",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál es una buena estrategia para resolver un conflicto hablando?",
    "opcions": [
      "Escuchar y buscar una solución juntos",
      "Gritar más fuerte",
      "Ignorar a la otra persona",
      "Irse sin decir nada"
    ],
    "resposta_correcta": "Escuchar y buscar una solución juntos"
  },
  {
    "id": "5è_cas-5-5_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Comunicación oral",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué elemento forma parte de la situación comunicativa?",
    "opcions": [
      "Los participantes y el propósito",
      "Solo las palabras",
      "Solo el silencio",
      "Nada, la comunicación no tiene elementos"
    ],
    "resposta_correcta": "Los participantes y el propósito"
  },
  {
    "id": "5è_cas-5-5_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Comunicación oral",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El tono de voz y los gestos son comunicación no verbal, no comunicación escrita.",
    "pregunta": "El tono de voz y los gestos son un tipo de comunicación escrita.",
    "resposta_correcta": false
  },
  {
    "id": "6è_cas-6-1_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Modalidades oracionales",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada modalidad oracional con su definición.",
    "parelles": [
      {
        "a": "Imperativa",
        "b": "Da una orden o hace una petición"
      },
      {
        "a": "Interrogativa",
        "b": "Hace una pregunta"
      },
      {
        "a": "Exclamativa",
        "b": "Expresa una emoción fuerte"
      },
      {
        "a": "Declarativa",
        "b": "Informa de algo de manera neutra"
      }
    ]
  },
  {
    "id": "6è_cas-6-1_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Modalidades oracionales",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué modalidad tiene la frase «¡Qué suerte hemos tenido!»?",
    "opcions": [
      "Exclamativa",
      "Interrogativa",
      "Imperativa",
      "Declarativa"
    ],
    "resposta_correcta": "Exclamativa"
  },
  {
    "id": "6è_cas-6-1_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Modalidades oracionales",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Una frase declarativa informa de algo y termina con un punto; la interrogativa lleva signo de interrogación.",
    "pregunta": "Una frase declarativa lleva signo de interrogación al final.",
    "resposta_correcta": false
  },
  {
    "id": "6è_cas-6-1_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Modalidades oracionales",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué modalidad tiene la frase «¿Dónde vives?»?",
    "opcions": [
      "Interrogativa",
      "Exclamativa",
      "Imperativa",
      "Declarativa"
    ],
    "resposta_correcta": "Interrogativa"
  },
  {
    "id": "6è_cas-6-1_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Modalidades oracionales",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué signos rodean siempre una frase exclamativa en español?",
    "opcions": [
      "Los signos de exclamación (¡ !)",
      "El punto (.)",
      "La coma (,)",
      "Los dos puntos (:)"
    ],
    "resposta_correcta": "Los signos de exclamación (¡ !)"
  },
  {
    "id": "6è_cas-6-1_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Modalidades oracionales",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena las palabras para formar una frase interrogativa.",
    "elements_ordre_correcte": [
      "Qué",
      "estás",
      "haciendo",
      "ahora"
    ]
  },
  {
    "id": "6è_cas-6-2_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Mecanismos de cohesión textual",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada palabra con su categoría gramatical.",
    "parelles": [
      {
        "a": "Ella",
        "b": "Un pronombre personal"
      },
      {
        "a": "Este",
        "b": "Un determinante demostrativo"
      },
      {
        "a": "Allí",
        "b": "Un adverbio de lugar"
      },
      {
        "a": "Mucho",
        "b": "Un adverbio de cantidad"
      }
    ]
  },
  {
    "id": "6è_cas-6-2_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Mecanismos de cohesión textual",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué conector se usa para explicar una causa?",
    "opcions": [
      "Porque",
      "Pero",
      "Y",
      "Después"
    ],
    "resposta_correcta": "Porque"
  },
  {
    "id": "6è_cas-6-2_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Mecanismos de cohesión textual",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Los sinónimos permiten variar el vocabulario sin repetir palabras.",
    "pregunta": "Usar sinónimos ayuda a no repetir siempre la misma palabra.",
    "resposta_correcta": true
  },
  {
    "id": "6è_cas-6-2_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Mecanismos de cohesión textual",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué conector indica oposición entre dos ideas?",
    "opcions": [
      "Pero",
      "Porque",
      "También",
      "Primero"
    ],
    "resposta_correcta": "Pero"
  },
  {
    "id": "6è_cas-6-2_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Mecanismos de cohesión textual",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada palabra con su sinónimo.",
    "parelles": [
      {
        "a": "Alegre",
        "b": "Sinónimo de contento"
      },
      {
        "a": "Triste",
        "b": "Sinónimo de disgustado o afligido"
      },
      {
        "a": "Cansado",
        "b": "Sinónimo de exhausto o fatigado"
      },
      {
        "a": "Enfadado",
        "b": "Sinónimo de enojado o molesto"
      }
    ]
  },
  {
    "id": "6è_cas-6-2_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Mecanismos de cohesión textual",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada conector con su función.",
    "parelles": [
      {
        "a": "Porque",
        "b": "Explica una causa"
      },
      {
        "a": "Pero",
        "b": "Marca una oposición"
      },
      {
        "a": "Después",
        "b": "Indica orden temporal"
      },
      {
        "a": "Además",
        "b": "Añade información"
      }
    ]
  },
  {
    "id": "6è_cas-6-3_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Escritura creativa",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada figura literaria con su definición.",
    "parelles": [
      {
        "a": "La comparación",
        "b": "Compara dos cosas usando «como»"
      },
      {
        "a": "La metáfora",
        "b": "Identifica dos cosas sin usar «como»"
      },
      {
        "a": "La rima",
        "b": "Repetición de un mismo sonido al final de los versos"
      },
      {
        "a": "La hipérbole",
        "b": "Exagera mucho una idea"
      }
    ]
  },
  {
    "id": "6è_cas-6-3_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Escritura creativa",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cómo se llama la repetición de un mismo sonido al final de los versos?",
    "opcions": [
      "La rima",
      "La comparación",
      "La metáfora",
      "El ritmo"
    ],
    "resposta_correcta": "La rima"
  },
  {
    "id": "6è_cas-6-3_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Escritura creativa",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "A diferencia de la comparación, la metáfora no usa «como».",
    "pregunta": "Una metáfora dice que algo ES otra cosa, sin usar «como».",
    "resposta_correcta": true
  },
  {
    "id": "6è_cas-6-3_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Escritura creativa",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Cuál de estas frases es una metáfora?",
    "opcions": [
      "Sus ojos son dos estrellas",
      "Sus ojos brillan como estrellas",
      "Tiene los ojos marrones",
      "Me gustan sus ojos"
    ],
    "resposta_correcta": "Sus ojos son dos estrellas"
  },
  {
    "id": "6è_cas-6-3_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Escritura creativa",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué recurso consiste en exagerar mucho una idea?",
    "opcions": [
      "La hipérbole",
      "La rima",
      "La comparación",
      "El diálogo"
    ],
    "resposta_correcta": "La hipérbole"
  },
  {
    "id": "6è_cas-6-3_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Escritura creativa",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Un vocabulario rico y variado mejora la calidad de un texto narrativo, no la longitud de las palabras.",
    "pregunta": "Usar palabras más cortas mejora un texto narrativo.",
    "resposta_correcta": false
  },
  {
    "id": "6è_cas-6-4_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Búsqueda y tratamiento de la información",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Antes de confiar en una información de internet, ¿qué deberías comprobar?",
    "opcions": [
      "Quién es el autor y si es fiable",
      "Nada, toda la información es cierta",
      "Si tiene muchas imágenes",
      "Si es corta"
    ],
    "resposta_correcta": "Quién es el autor y si es fiable"
  },
  {
    "id": "6è_cas-6-4_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Búsqueda y tratamiento de la información",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "La fiabilidad de una página web depende de la autoría y las fuentes, no de la extensión del dominio.",
    "pregunta": "Las páginas que terminan en «.com» son más fiables que las que terminan en «.org».",
    "resposta_correcta": false
  },
  {
    "id": "6è_cas-6-4_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Búsqueda y tratamiento de la información",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada buena práctica de investigación con el motivo por el que ayuda.",
    "parelles": [
      {
        "a": "Buscar en varias fuentes fiables",
        "b": "Permite comprobar que la información es cierta"
      },
      {
        "a": "Citar la autoría",
        "b": "Decir de dónde viene la información y quién la escribió"
      },
      {
        "a": "Ir a la biblioteca",
        "b": "Una fuente fiable de información, además de internet"
      }
    ]
  },
  {
    "id": "6è_cas-6-4_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Búsqueda y tratamiento de la información",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué significa «citar la autoría» de una información?",
    "opcions": [
      "Decir de dónde viene la información y quién la escribió",
      "Copiarla sin decir nada",
      "Cambiarla un poco",
      "Borrarla"
    ],
    "resposta_correcta": "Decir de dónde viene la información y quién la escribió"
  },
  {
    "id": "6è_cas-6-4_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Búsqueda y tratamiento de la información",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Dónde puedes buscar información fiable para un trabajo escolar, además de internet?",
    "opcions": [
      "En la biblioteca",
      "En ningún otro sitio",
      "Solo preguntando a amigos",
      "Inventándola"
    ],
    "resposta_correcta": "En la biblioteca"
  },
  {
    "id": "6è_cas-6-4_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Búsqueda y tratamiento de la información",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Contrastar varias fuentes permite comprobar la fiabilidad de una información.",
    "pregunta": "Comparar varias fuentes ayuda a saber si una información es cierta.",
    "resposta_correcta": true
  },
  {
    "id": "6è_cas-6-5_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Comprensión lectora avanzada",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Por qué se cerraron muchas escuelas de pueblo?",
    "opcions": [
      "Porque había pocos niños",
      "Porque no había maestros",
      "Porque los pueblos desaparecieron",
      "Porque no había libros"
    ],
    "resposta_correcta": "Porque había pocos niños",
    "text": "Hace unos años, muchos pueblos de montaña se quedaron sin escuela porque había pocos niños. Ahora, algunas familias que trabajan desde casa se han instalado allí, y algunas escuelas rurales han vuelto a abrir sus puertas."
  },
  {
    "id": "6è_cas-6-5_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Comprensión lectora avanzada",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Por qué vuelven ahora algunas familias?",
    "opcions": [
      "Porque pueden trabajar desde casa",
      "Porque no hay ciudades",
      "Porque les gustan más las escuelas rurales sin motivo",
      "Porque es obligatorio"
    ],
    "resposta_correcta": "Porque pueden trabajar desde casa",
    "text": "Hace unos años, muchos pueblos de montaña se quedaron sin escuela porque había pocos niños. Ahora, algunas familias que trabajan desde casa se han instalado allí, y algunas escuelas rurales han vuelto a abrir sus puertas."
  },
  {
    "id": "6è_cas-6-5_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Comprensión lectora avanzada",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Según el texto, las familias que se han instalado allí trabajan desde casa, no van de vacaciones.",
    "pregunta": "Según el texto, las familias que se han instalado en los pueblos de montaña van a pasar las vacaciones de verano.",
    "resposta_correcta": false,
    "text": "Hace unos años, muchos pueblos de montaña se quedaron sin escuela porque había pocos niños. Ahora, algunas familias que trabajan desde casa se han instalado allí, y algunas escuelas rurales han vuelto a abrir sus puertas."
  },
  {
    "id": "6è_cas-6-5_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Comprensión lectora avanzada",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué palabra del texto se refiere a «niños y niñas»?",
    "opcions": [
      "Niños",
      "Familias",
      "Pueblos",
      "Escuelas"
    ],
    "resposta_correcta": "Niños",
    "text": "Hace unos años, muchos pueblos de montaña se quedaron sin escuela porque había pocos niños. Ahora, algunas familias que trabajan desde casa se han instalado allí, y algunas escuelas rurales han vuelto a abrir sus puertas."
  },
  {
    "id": "6è_cas-6-5_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Comprensión lectora avanzada",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "¿Qué título resumiría mejor este texto?",
    "opcions": [
      "El regreso de la vida a los pueblos de montaña",
      "Las mejores escuelas de ciudad",
      "Cómo viajar a la montaña",
      "La historia de la escuela"
    ],
    "resposta_correcta": "El regreso de la vida a los pueblos de montaña",
    "text": "Hace unos años, muchos pueblos de montaña se quedaron sin escuela porque había pocos niños. Ahora, algunas familias que trabajan desde casa se han instalado allí, y algunas escuelas rurales han vuelto a abrir sus puertas."
  },
  {
    "id": "6è_cas-6-5_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "cas",
    "tema": "Comprensión lectora avanzada",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El texto relaciona el teletrabajo con el regreso de familias a los pueblos rurales.",
    "pregunta": "Se puede deducir que el teletrabajo ha influido en la vida de algunos pueblos rurales.",
    "resposta_correcta": true,
    "text": "Hace unos años, muchos pueblos de montaña se quedaron sin escuela porque había pocos niños. Ahora, algunas familias que trabajan desde casa se han instalado allí, y algunas escuelas rurales han vuelto a abrir sus puertas."
  },
  {
    "id": "5è_eng-5-1_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Personal identification & free time",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «M'agrada llegir» in English?",
    "opcions": [
      "I like reading",
      "I like running",
      "I like cooking",
      "I like sleeping"
    ],
    "resposta_correcta": "I like reading"
  },
  {
    "id": "5è_eng-5-1_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Personal identification & free time",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "After «is» as a hobby, English uses the -ing form: swimming.",
    "pregunta": "Complete: «My favourite hobby is ___.»",
    "resposta_correcta": "swimming",
    "respostes_acceptades": [
      "swimming",
      "Swimming"
    ]
  },
  {
    "id": "5è_eng-5-1_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Personal identification & free time",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "«Where» asks about a place; «when» asks about time.",
    "pregunta": "«Where do you live?» is a question about time.",
    "resposta_correcta": false
  },
  {
    "id": "5è_eng-5-1_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Personal identification & free time",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «Tinc onze anys» in English?",
    "opcions": [
      "I am eleven years old",
      "I have eleven years",
      "I am eleven year",
      "I have eleven"
    ],
    "resposta_correcta": "I am eleven years old"
  },
  {
    "id": "5è_eng-5-1_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Personal identification & free time",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Which sentence is correct?",
    "opcions": [
      "She likes playing football",
      "She like play football",
      "She liking football play",
      "She likes play football"
    ],
    "resposta_correcta": "She likes playing football"
  },
  {
    "id": "5è_eng-5-1_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Personal identification & free time",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Order the words to make a sentence.",
    "elements_ordre_correcte": [
      "What",
      "is",
      "your",
      "favourite",
      "colour"
    ]
  },
  {
    "id": "5è_eng-5-2_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Places and everyday life",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «supermercat» in English?",
    "opcions": [
      "Supermarket",
      "Hospital",
      "Library",
      "Park"
    ],
    "resposta_correcta": "Supermarket"
  },
  {
    "id": "5è_eng-5-2_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Places and everyday life",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Where do you borrow books?",
    "opcions": [
      "At the library",
      "At the supermarket",
      "At the hospital",
      "At the bank"
    ],
    "resposta_correcta": "At the library"
  },
  {
    "id": "5è_eng-5-2_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Places and everyday life",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "A park is an outdoor place where children can play.",
    "pregunta": "A «park» is a good place to play outdoors.",
    "resposta_correcta": true
  },
  {
    "id": "5è_eng-5-2_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Places and everyday life",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "We use «by» with means of transport: by bus, by car, by bike.",
    "pregunta": "Complete: «I usually go to school ___ bus.»",
    "resposta_correcta": "by",
    "respostes_acceptades": [
      "by",
      "By"
    ]
  },
  {
    "id": "5è_eng-5-2_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Places and everyday life",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "We use «at» with clock times: at 7 o'clock.",
    "pregunta": "Complete: «She wakes up ___ 7 o'clock.»",
    "resposta_correcta": "at",
    "respostes_acceptades": [
      "at",
      "At"
    ]
  },
  {
    "id": "5è_eng-5-2_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Places and everyday life",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Match each place with its purpose.",
    "parelles": [
      {
        "a": "Library",
        "b": "Borrow books"
      },
      {
        "a": "Hospital",
        "b": "See a doctor"
      },
      {
        "a": "Supermarket",
        "b": "Buy food"
      },
      {
        "a": "Park",
        "b": "Play outdoors"
      }
    ]
  },
  {
    "id": "5è_eng-5-3_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Present simple",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "In present simple, «she/he/it» verbs end in -s: she goes.",
    "pregunta": "Complete: «She ___ to school every day.»",
    "resposta_correcta": "goes",
    "respostes_acceptades": [
      "goes",
      "Goes"
    ]
  },
  {
    "id": "5è_eng-5-3_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Present simple",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "With «they», present simple verbs keep the base form: they play.",
    "pregunta": "Complete: «They ___ football on Saturdays.»",
    "resposta_correcta": "play",
    "respostes_acceptades": [
      "play",
      "Play"
    ]
  },
  {
    "id": "5è_eng-5-3_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Present simple",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "We add «-s» with he/she/it, not with I/you.",
    "pregunta": "We add «-s» to the verb with I/you in present simple.",
    "resposta_correcta": false
  },
  {
    "id": "5è_eng-5-3_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Present simple",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Choose the correct negative form: «She ___ like broccoli.»",
    "opcions": [
      "doesn't",
      "don't",
      "isn't",
      "not"
    ],
    "resposta_correcta": "doesn't"
  },
  {
    "id": "5è_eng-5-3_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Present simple",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Choose the correct question: «___ you like pizza?»",
    "opcions": [
      "Do",
      "Does",
      "Are",
      "Is"
    ],
    "resposta_correcta": "Do"
  },
  {
    "id": "5è_eng-5-3_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Present simple",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «He always ___ (brush) his teeth before bed.» Write the verb form.",
    "resposta_correcta": "brushes",
    "respostes_acceptades": [
      "brushes"
    ]
  },
  {
    "id": "5è_eng-5-4_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Reading short texts",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Where does Tom live?",
    "opcions": [
      "In a small village",
      "In a big city",
      "At school",
      "In the garden"
    ],
    "resposta_correcta": "In a small village",
    "text": "Tom lives in a small village with his family. Every morning he walks to school with his sister. After school, he likes to play with his dog in the garden."
  },
  {
    "id": "5è_eng-5-4_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Reading short texts",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Who does Tom walk to school with?",
    "opcions": [
      "His sister",
      "His dog",
      "His teacher",
      "His grandfather"
    ],
    "resposta_correcta": "His sister",
    "text": "Tom lives in a small village with his family. Every morning he walks to school with his sister. After school, he likes to play with his dog in the garden."
  },
  {
    "id": "5è_eng-5-4_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Reading short texts",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "The text says Tom plays with his dog in the garden after school.",
    "pregunta": "According to the text, Tom plays with his dog after school.",
    "resposta_correcta": true,
    "text": "Tom lives in a small village with his family. Every morning he walks to school with his sister. After school, he likes to play with his dog in the garden."
  },
  {
    "id": "5è_eng-5-4_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Reading short texts",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How does Tom go to school?",
    "opcions": [
      "He walks",
      "He goes by car",
      "He goes by bus",
      "He goes by bike"
    ],
    "resposta_correcta": "He walks",
    "text": "Tom lives in a small village with his family. Every morning he walks to school with his sister. After school, he likes to play with his dog in the garden."
  },
  {
    "id": "5è_eng-5-4_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Reading short texts",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Where does Tom play with his dog?",
    "opcions": [
      "In the garden",
      "At school",
      "In the village square",
      "At the library"
    ],
    "resposta_correcta": "In the garden",
    "text": "Tom lives in a small village with his family. Every morning he walks to school with his sister. After school, he likes to play with his dog in the garden."
  },
  {
    "id": "5è_eng-5-4_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Reading short texts",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Tom plays with his dog every day, so he likes animals.",
    "pregunta": "We can guess that Tom is afraid of animals.",
    "resposta_correcta": false,
    "text": "Tom lives in a small village with his family. Every morning he walks to school with his sister. After school, he likes to play with his dog in the garden."
  },
  {
    "id": "5è_eng-5-5_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Basic writing",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Which sentence has correct capitalisation?",
    "opcions": [
      "My name is Laura.",
      "my name is laura.",
      "My Name Is laura.",
      "MY NAME is Laura."
    ],
    "resposta_correcta": "My name is Laura."
  },
  {
    "id": "5è_eng-5-5_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Basic writing",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "A question mark (?) always ends a question in English.",
    "pregunta": "Which punctuation mark ends a question in English?",
    "resposta_correcta": "?",
    "respostes_acceptades": [
      "?"
    ]
  },
  {
    "id": "5è_eng-5-5_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Basic writing",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "English sentences always begin with a capital letter.",
    "pregunta": "Every sentence in English starts with a capital letter.",
    "resposta_correcta": true
  },
  {
    "id": "5è_eng-5-5_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Basic writing",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "«But» connects two contrasting ideas.",
    "pregunta": "Choose the best connector: «I like apples ___ I don't like bananas.»",
    "resposta_correcta": "but",
    "respostes_acceptades": [
      "but",
      "But"
    ]
  },
  {
    "id": "5è_eng-5-5_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Basic writing",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Order the words to make a sentence.",
    "elements_ordre_correcte": [
      "I",
      "have",
      "got",
      "two",
      "brothers"
    ]
  },
  {
    "id": "5è_eng-5-5_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Basic writing",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Which is a good opening sentence for a story?",
    "opcions": [
      "Once upon a time, there was a small village.",
      "The end.",
      "Thank you very much.",
      "I don't know."
    ],
    "resposta_correcta": "Once upon a time, there was a small village."
  },
  {
    "id": "6è_eng-6-1_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Interpersonal relationships",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How do you say «el meu millor amic» in English?",
    "opcions": [
      "My best friend",
      "My best family",
      "My best school",
      "My best animal"
    ],
    "resposta_correcta": "My best friend"
  },
  {
    "id": "6è_eng-6-1_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Interpersonal relationships",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «She is my ___ (someone who helps you when you have problems).»",
    "opcions": [
      "friend",
      "enemy",
      "stranger",
      "neighbour"
    ],
    "resposta_correcta": "friend"
  },
  {
    "id": "6è_eng-6-1_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Interpersonal relationships",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "«Cousin» means «cosí/cosina»; «germà/germana» is «brother/sister».",
    "pregunta": "«Cousin» means «germà/germana» in English.",
    "resposta_correcta": false
  },
  {
    "id": "6è_eng-6-1_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Interpersonal relationships",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «We ___ friends at school.»",
    "opcions": [
      "are",
      "is",
      "am",
      "be"
    ],
    "resposta_correcta": "are"
  },
  {
    "id": "6è_eng-6-1_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Interpersonal relationships",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Which word means the opposite of «friendly»?",
    "resposta_correcta": "Unfriendly",
    "respostes_acceptades": [
      "Unfriendly",
      "unfriendly"
    ]
  },
  {
    "id": "6è_eng-6-1_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Interpersonal relationships",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Match each word with its meaning.",
    "parelles": [
      {
        "a": "Friend",
        "b": "Someone you like and trust"
      },
      {
        "a": "Neighbour",
        "b": "Someone who lives near you"
      },
      {
        "a": "Classmate",
        "b": "Someone in your class"
      },
      {
        "a": "Teammate",
        "b": "Someone in your team"
      }
    ]
  },
  {
    "id": "6è_eng-6-2_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Past simple",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «Yesterday, I ___ to the cinema.»",
    "opcions": [
      "went",
      "go",
      "goes",
      "going"
    ],
    "resposta_correcta": "went"
  },
  {
    "id": "6è_eng-6-2_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Past simple",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "Regular verbs form the past simple by adding -ed: play → played.",
    "pregunta": "What is the past simple of «play»?",
    "resposta_correcta": "played",
    "respostes_acceptades": [
      "played",
      "Played"
    ]
  },
  {
    "id": "6è_eng-6-2_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Past simple",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Regular verbs form the past simple by adding «-ed», e.g. «played».",
    "pregunta": "Regular verbs usually add «-ed» in the past simple.",
    "resposta_correcta": true
  },
  {
    "id": "6è_eng-6-2_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Past simple",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Complete: «They ___ not watch TV last night.»",
    "opcions": [
      "did",
      "was",
      "were",
      "does"
    ],
    "resposta_correcta": "did"
  },
  {
    "id": "6è_eng-6-2_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Past simple",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "What is the past simple of the irregular verb «eat»?",
    "opcions": [
      "ate",
      "eated",
      "eat",
      "eaten"
    ],
    "resposta_correcta": "ate"
  },
  {
    "id": "6è_eng-6-2_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Past simple",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Write the past simple of «see».",
    "resposta_correcta": "saw",
    "respostes_acceptades": [
      "saw"
    ]
  },
  {
    "id": "6è_eng-6-3_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Sociocultural aspects",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "In which country is English the main language spoken, apart from the UK?",
    "opcions": [
      "The United States",
      "France",
      "Germany",
      "Italy"
    ],
    "resposta_correcta": "The United States"
  },
  {
    "id": "6è_eng-6-3_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Sociocultural aspects",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "What do people usually say when they meet someone for the first time?",
    "opcions": [
      "Nice to meet you",
      "Goodbye",
      "I'm sorry",
      "See you never"
    ],
    "resposta_correcta": "Nice to meet you"
  },
  {
    "id": "6è_eng-6-3_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Sociocultural aspects",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Using «please» and «thank you» is considered polite in English-speaking countries.",
    "pregunta": "Saying «please» and «thank you» is a sign of politeness in English-speaking countries.",
    "resposta_correcta": true
  },
  {
    "id": "6è_eng-6-3_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Sociocultural aspects",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "What is a common celebration in the United Kingdom in autumn related to pumpkins?",
    "resposta_correcta": "Halloween",
    "respostes_acceptades": [
      "Halloween",
      "halloween"
    ]
  },
  {
    "id": "6è_eng-6-3_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Sociocultural aspects",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "What should you avoid doing when chatting online with someone (digital etiquette)?",
    "opcions": [
      "Writing rude or unkind messages",
      "Being polite",
      "Asking questions",
      "Saying thank you"
    ],
    "resposta_correcta": "Writing rude or unkind messages"
  },
  {
    "id": "6è_eng-6-3_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Sociocultural aspects",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Countries sharing a language can still use different currencies (e.g. the UK and the USA).",
    "pregunta": "Countries that share the same language use the same currency.",
    "resposta_correcta": false
  },
  {
    "id": "6è_eng-6-4_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Reading comprehension",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Where did Emma's family stay?",
    "opcions": [
      "In a wooden house near the beach",
      "In a big hotel",
      "At school",
      "In a city apartment"
    ],
    "resposta_correcta": "In a wooden house near the beach",
    "text": "Last summer, Emma and her family travelled to a small island. They stayed in a wooden house near the beach. Every day, Emma swam in the sea and collected shells with her little brother. On the last day, she was sad to leave."
  },
  {
    "id": "6è_eng-6-4_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Reading comprehension",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "What did Emma do every day?",
    "opcions": [
      "She swam and collected shells",
      "She went to school",
      "She cooked dinner",
      "She read books all day"
    ],
    "resposta_correcta": "She swam and collected shells",
    "text": "Last summer, Emma and her family travelled to a small island. They stayed in a wooden house near the beach. Every day, Emma swam in the sea and collected shells with her little brother. On the last day, she was sad to leave."
  },
  {
    "id": "6è_eng-6-4_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Reading comprehension",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "The text says Emma collected shells with her little brother.",
    "pregunta": "According to the text, Emma travelled with her little brother.",
    "resposta_correcta": true,
    "text": "Last summer, Emma and her family travelled to a small island. They stayed in a wooden house near the beach. Every day, Emma swam in the sea and collected shells with her little brother. On the last day, she was sad to leave."
  },
  {
    "id": "6è_eng-6-4_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Reading comprehension",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "How did Emma feel on the last day?",
    "opcions": [
      "Sad",
      "Happy",
      "Angry",
      "Bored"
    ],
    "resposta_correcta": "Sad",
    "text": "Last summer, Emma and her family travelled to a small island. They stayed in a wooden house near the beach. Every day, Emma swam in the sea and collected shells with her little brother. On the last day, she was sad to leave."
  },
  {
    "id": "6è_eng-6-4_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Reading comprehension",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "What can we guess about Emma's holiday?",
    "opcions": [
      "She enjoyed it a lot",
      "She hated it",
      "She stayed at home",
      "She was alone"
    ],
    "resposta_correcta": "She enjoyed it a lot",
    "text": "Last summer, Emma and her family travelled to a small island. They stayed in a wooden house near the beach. Every day, Emma swam in the sea and collected shells with her little brother. On the last day, she was sad to leave."
  },
  {
    "id": "6è_eng-6-4_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Reading comprehension",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Emma's family stayed in a wooden house near the beach, by the sea.",
    "pregunta": "The text takes place in the mountains.",
    "resposta_correcta": false,
    "text": "Last summer, Emma and her family travelled to a small island. They stayed in a wooden house near the beach. Every day, Emma swam in the sea and collected shells with her little brother. On the last day, she was sad to leave."
  },
  {
    "id": "6è_eng-6-5_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Structured writing",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Match each word with when it is used in a story.",
    "parelles": [
      {
        "a": "Once",
        "b": "Used to start a story"
      },
      {
        "a": "First",
        "b": "Used to show the first thing that happened"
      },
      {
        "a": "Suddenly",
        "b": "Used to show something unexpected happens"
      },
      {
        "a": "Finally",
        "b": "Used to end a story"
      }
    ]
  },
  {
    "id": "6è_eng-6-5_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Structured writing",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Match each connector with its function.",
    "parelles": [
      {
        "a": "Also",
        "b": "Used to add information"
      },
      {
        "a": "But",
        "b": "Used to show contrast"
      },
      {
        "a": "Because",
        "b": "Used to explain a reason"
      },
      {
        "a": "Although",
        "b": "Used to show an unexpected contrast"
      }
    ]
  },
  {
    "id": "6è_eng-6-5_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Structured writing",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "A well-written paragraph usually focuses on a single main idea.",
    "pregunta": "A good paragraph usually talks about one main idea.",
    "resposta_correcta": true
  },
  {
    "id": "6è_eng-6-5_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Structured writing",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Which sentence is in the correct order?",
    "opcions": [
      "We went to the park after school.",
      "Park the after to went we school.",
      "After school we the park went to.",
      "To the park we after school went."
    ],
    "resposta_correcta": "We went to the park after school."
  },
  {
    "id": "6è_eng-6-5_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Structured writing",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Order the words to make a sentence.",
    "elements_ordre_correcte": [
      "First",
      "we",
      "had",
      "breakfast",
      "and",
      "then",
      "we",
      "left"
    ]
  },
  {
    "id": "6è_eng-6-5_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "eng",
    "tema": "Structured writing",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Which word is used to finish a story?",
    "opcions": [
      "Finally",
      "Once",
      "First",
      "Suddenly"
    ],
    "resposta_correcta": "Finally"
  },
  {
    "id": "5è_nat-5-1_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "El mètode científic",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena les fases del mètode científic.",
    "elements_ordre_correcte": [
      "Observar i fer-se preguntes",
      "Formular una hipòtesi",
      "Fer l'experiment",
      "Treure conclusions"
    ]
  },
  {
    "id": "5è_nat-5-1_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "El mètode científic",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què és una hipòtesi?",
    "opcions": [
      "Una possible resposta que cal comprovar",
      "Una llei científica definitiva",
      "Un instrument de mesura",
      "Un tipus d'animal"
    ],
    "resposta_correcta": "Una possible resposta que cal comprovar"
  },
  {
    "id": "5è_nat-5-1_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "El mètode científic",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "En un experiment amb control de variables es canvia una sola cosa cada vegada, per saber quin n'és l'efecte.",
    "pregunta": "Un experiment amb control de variables canvia dues coses alhora per veure quin efecte té cada una.",
    "resposta_correcta": false
  },
  {
    "id": "5è_nat-5-1_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "El mètode científic",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Per què és important repetir un experiment diverses vegades?",
    "opcions": [
      "Per comprovar que els resultats són fiables",
      "Per perdre temps",
      "Perquè és obligatori sempre",
      "Per canviar la hipòtesi cada vegada"
    ],
    "resposta_correcta": "Per comprovar que els resultats són fiables"
  },
  {
    "id": "5è_nat-5-1_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "El mètode científic",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin instrument fem servir per mesurar la temperatura amb precisió?",
    "opcions": [
      "El termòmetre",
      "El regle",
      "La balança",
      "El microscopi"
    ],
    "resposta_correcta": "El termòmetre"
  },
  {
    "id": "5è_nat-5-1_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "El mètode científic",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Comunicar els resultats permet compartir el coneixement obtingut en una investigació.",
    "pregunta": "Comunicar els resultats d'una investigació forma part del mètode científic.",
    "resposta_correcta": true
  },
  {
    "id": "5è_nat-5-2_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Ecosistemes i cadenes alimentàries",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com s'anomenen els éssers vius que fabriquen el seu propi aliment?",
    "opcions": [
      "Productors",
      "Consumidors",
      "Descomponedors",
      "Depredadors"
    ],
    "resposta_correcta": "Productors"
  },
  {
    "id": "5è_nat-5-2_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Ecosistemes i cadenes alimentàries",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada tipus d'animal amb la seva alimentació.",
    "parelles": [
      {
        "a": "Herbívors",
        "b": "Mengen només plantes"
      },
      {
        "a": "Carnívors",
        "b": "Mengen només altres animals"
      },
      {
        "a": "Omnívors",
        "b": "Mengen tant plantes com animals"
      },
      {
        "a": "Descomponedors",
        "b": "Transformen la matèria orgànica morta"
      }
    ]
  },
  {
    "id": "5è_nat-5-2_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Ecosistemes i cadenes alimentàries",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Els descomponedors reciclen la matèria orgànica morta; els productors fabriquen el seu propi aliment.",
    "pregunta": "Els descomponedors fabriquen el seu propi aliment mitjançant la fotosíntesi.",
    "resposta_correcta": false
  },
  {
    "id": "5è_nat-5-2_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Ecosistemes i cadenes alimentàries",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "En una cadena alimentària, qui es menja els herbívors?",
    "opcions": [
      "Els carnívors",
      "Els productors",
      "Els descomponedors",
      "Ningú"
    ],
    "resposta_correcta": "Els carnívors"
  },
  {
    "id": "5è_nat-5-2_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Ecosistemes i cadenes alimentàries",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què passaria si desapareguessin tots els productors d'un ecosistema?",
    "opcions": [
      "La resta de la cadena alimentària es veuria greument afectada",
      "No passaria res",
      "Els carnívors menjarien més",
      "Els ecosistemes millorarien"
    ],
    "resposta_correcta": "La resta de la cadena alimentària es veuria greument afectada"
  },
  {
    "id": "5è_nat-5-2_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Ecosistemes i cadenes alimentàries",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada organisme amb el seu paper a l'ecosistema.",
    "parelles": [
      {
        "a": "Planta",
        "b": "Productor"
      },
      {
        "a": "Cérvol",
        "b": "Consumidor herbívor"
      },
      {
        "a": "Llop",
        "b": "Consumidor carnívor"
      },
      {
        "a": "Bolet",
        "b": "Descomponedor"
      }
    ]
  },
  {
    "id": "5è_nat-5-3_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Classificació d'animals i plantes",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada grup d'animals amb la seva característica.",
    "parelles": [
      {
        "a": "Vertebrats",
        "b": "Tenen columna vertebral"
      },
      {
        "a": "Invertebrats",
        "b": "No tenen columna vertebral"
      },
      {
        "a": "Mamífers",
        "b": "Vertebrats que alimenten les cries amb llet"
      },
      {
        "a": "Amfibis",
        "b": "Vertebrats que viuen part de la vida a l'aigua i part a terra"
      }
    ]
  },
  {
    "id": "5è_nat-5-3_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Classificació d'animals i plantes",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada grup de plantes amb la seva característica.",
    "parelles": [
      {
        "a": "Angiospermes",
        "b": "Plantes amb flors i fruits"
      },
      {
        "a": "Molses",
        "b": "Plantes sense flors que viuen en llocs humits"
      },
      {
        "a": "Falgueres",
        "b": "Plantes sense flors amb fulles grans i retallades"
      },
      {
        "a": "Líquens",
        "b": "Formats per un fong i una alga que viuen junts"
      }
    ]
  },
  {
    "id": "5è_nat-5-3_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Classificació d'animals i plantes",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Les adaptacions permeten als éssers vius sobreviure millor al seu entorn.",
    "pregunta": "L'adaptació al medi ajuda els éssers vius a sobreviure al seu entorn.",
    "resposta_correcta": true
  },
  {
    "id": "5è_nat-5-3_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Classificació d'animals i plantes",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina adaptació té un animal del desert per estalviar aigua?",
    "opcions": [
      "Excretar molt poca orina",
      "Beure constantment",
      "Viure sempre a l'aigua",
      "Tenir plomes"
    ],
    "resposta_correcta": "Excretar molt poca orina"
  },
  {
    "id": "5è_nat-5-3_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Classificació d'animals i plantes",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Una varietat autòctona és originària del territori; una espècie que ve d'un altre lloc es diu al·lòctona.",
    "pregunta": "Una varietat autòctona és una espècie que ve d'un altre continent.",
    "resposta_correcta": false
  },
  {
    "id": "5è_nat-5-3_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Classificació d'animals i plantes",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Per què els éssers vius es classifiquen en subgrups?",
    "opcions": [
      "Per entendre millor les seves semblances i diferències",
      "Per ordenar-los alfabèticament pel seu nom",
      "Per saber on viuen exactament cada dia",
      "Per saber quants n'hi ha de cada espècie"
    ],
    "resposta_correcta": "Per entendre millor les seves semblances i diferències"
  },
  {
    "id": "5è_nat-5-4_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "El cos humà: funcions vitals",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada funció vital amb la seva definició.",
    "parelles": [
      {
        "a": "Nutrició",
        "b": "Obtenir i aprofitar l'energia dels aliments"
      },
      {
        "a": "Relació",
        "b": "Percebre i respondre als estímuls de l'entorn"
      },
      {
        "a": "Reproducció",
        "b": "Generar nous éssers vius de la mateixa espècie"
      }
    ]
  },
  {
    "id": "5è_nat-5-4_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "El cos humà: funcions vitals",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada sistema del cos amb la seva funció.",
    "parelles": [
      {
        "a": "Sistema nerviós",
        "b": "Detecta i respon als estímuls de l'entorn"
      },
      {
        "a": "Aparell digestiu",
        "b": "Transforma els aliments perquè el cos els pugui aprofitar"
      },
      {
        "a": "Aparell excretor",
        "b": "Elimina les substàncies de rebuig del cos"
      },
      {
        "a": "Aparell reproductor",
        "b": "Permet tenir fills"
      }
    ]
  },
  {
    "id": "5è_nat-5-4_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "El cos humà: funcions vitals",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "L'aparell excretor s'encarrega d'eliminar les substàncies de rebuig.",
    "pregunta": "L'aparell excretor elimina les substàncies de rebuig del cos.",
    "resposta_correcta": true
  },
  {
    "id": "5è_nat-5-4_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "El cos humà: funcions vitals",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina funció vital permet que neixin nous éssers vius de la mateixa espècie?",
    "opcions": [
      "La reproducció",
      "La nutrició",
      "La relació",
      "La respiració"
    ],
    "resposta_correcta": "La reproducció"
  },
  {
    "id": "5è_nat-5-4_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "El cos humà: funcions vitals",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quins aparells intervenen en la funció de nutrició?",
    "opcions": [
      "Digestiu, respiratori, circulatori i excretor",
      "Només el digestiu",
      "Només el circulatori",
      "Nerviós i reproductor"
    ],
    "resposta_correcta": "Digestiu, respiratori, circulatori i excretor"
  },
  {
    "id": "5è_nat-5-4_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "El cos humà: funcions vitals",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Una alimentació saludable ha de ser variada i equilibrada, amb aliments de tots els grups.",
    "pregunta": "Una alimentació saludable ha de basar-se en un sol tipus d'aliment.",
    "resposta_correcta": false
  },
  {
    "id": "5è_nat-5-5_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "La matèria: canvis d'estat i mescles",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com es diu el canvi de l'aigua líquida a gel?",
    "opcions": [
      "Solidificació",
      "Fusió",
      "Evaporació",
      "Condensació"
    ],
    "resposta_correcta": "Solidificació"
  },
  {
    "id": "5è_nat-5-5_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "La matèria: canvis d'estat i mescles",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "El pas de sòlid a líquid s'anomena fusió.",
    "pregunta": "Com es diu el canvi de gel a aigua líquida?",
    "resposta_correcta": "Fusió",
    "respostes_acceptades": [
      "Fusió",
      "fusio",
      "fusió",
      "Fusio"
    ]
  },
  {
    "id": "5è_nat-5-5_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "La matèria: canvis d'estat i mescles",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "En una mescla homogènia no es poden distingir a simple vista els seus components.",
    "pregunta": "Una mescla homogènia té els seus components barrejats de manera uniforme, sense distingir-los.",
    "resposta_correcta": true
  },
  {
    "id": "5è_nat-5-5_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "La matèria: canvis d'estat i mescles",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena el procés de canvi d'estat quan escalfem gel fins que es converteix en vapor.",
    "elements_ordre_correcte": [
      "Gel (sòlid)",
      "Fusió",
      "Aigua líquida",
      "Evaporació"
    ]
  },
  {
    "id": "5è_nat-5-5_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "La matèria: canvis d'estat i mescles",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin mètode se sol fer servir per separar encenalls de ferro barrejats amb sorra?",
    "opcions": [
      "La imantació (amb un imant)",
      "La filtració",
      "La decantació",
      "L'evaporació"
    ],
    "resposta_correcta": "La imantació (amb un imant)"
  },
  {
    "id": "5è_nat-5-5_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "La matèria: canvis d'estat i mescles",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina diferència hi ha entre una mescla i una substància pura?",
    "opcions": [
      "La mescla té diversos components i la substància pura només un",
      "Són exactament el mateix",
      "Una substància pura sempre és líquida",
      "Una mescla sempre és sòlida"
    ],
    "resposta_correcta": "La mescla té diversos components i la substància pura només un"
  },
  {
    "id": "6è_nat-6-1_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Energia elèctrica i circuits",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què necessita un circuit elèctric senzill per funcionar?",
    "opcions": [
      "Una font d'energia, cables i un receptor connectats en un circuit tancat",
      "Només una bombeta",
      "Només cables",
      "Aigua"
    ],
    "resposta_correcta": "Una font d'energia, cables i un receptor connectats en un circuit tancat"
  },
  {
    "id": "6è_nat-6-1_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Energia elèctrica i circuits",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada component d'un circuit amb la seva funció.",
    "parelles": [
      {
        "a": "La bombeta",
        "b": "Produeix llum quan hi passa corrent"
      },
      {
        "a": "La pila",
        "b": "Proporciona l'energia elèctrica al circuit"
      },
      {
        "a": "El cable",
        "b": "Permet que el corrent elèctric hi circuli"
      },
      {
        "a": "L'interruptor",
        "b": "Serveix per obrir o tancar el circuit"
      }
    ]
  },
  {
    "id": "6è_nat-6-1_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Energia elèctrica i circuits",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Un interruptor serveix per obrir o tancar el pas del corrent elèctric en un circuit.",
    "pregunta": "Un interruptor permet obrir o tancar un circuit elèctric.",
    "resposta_correcta": true
  },
  {
    "id": "6è_nat-6-1_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Energia elèctrica i circuits",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què passa si el circuit elèctric està obert (trencat)?",
    "opcions": [
      "El corrent no hi pot circular i la bombeta no s'encén",
      "La bombeta lluu més fort",
      "Res canvia",
      "El corrent circula igual"
    ],
    "resposta_correcta": "El corrent no hi pot circular i la bombeta no s'encén"
  },
  {
    "id": "6è_nat-6-1_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Energia elèctrica i circuits",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina font proporciona l'energia elèctrica en un circuit senzill de laboratori?",
    "opcions": [
      "La pila",
      "El sol directament",
      "L'aigua",
      "El vent"
    ],
    "resposta_correcta": "La pila"
  },
  {
    "id": "6è_nat-6-1_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Energia elèctrica i circuits",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "L'electricitat també es pot transformar en calor, a més de llum i moviment.",
    "pregunta": "L'electricitat es pot transformar en llum i moviment, però no en calor.",
    "resposta_correcta": false
  },
  {
    "id": "6è_nat-6-2_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Forces, màquines simples i aerodinàmica",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què és una força?",
    "opcions": [
      "Una acció que pot moure, aturar o deformar un objecte",
      "Un tipus d'animal",
      "Un color",
      "Un aparell elèctric"
    ],
    "resposta_correcta": "Una acció que pot moure, aturar o deformar un objecte"
  },
  {
    "id": "6è_nat-6-2_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Forces, màquines simples i aerodinàmica",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina d'aquestes és una màquina simple?",
    "opcions": [
      "La politja",
      "El telèfon mòbil",
      "L'ordinador",
      "La bombeta"
    ],
    "resposta_correcta": "La politja"
  },
  {
    "id": "6è_nat-6-2_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Forces, màquines simples i aerodinàmica",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Una força de contacte, com una empenta, necessita que els objectes es toquin; la força magnètica actua a distància.",
    "pregunta": "Una força de contacte és el mateix que la força magnètica.",
    "resposta_correcta": false
  },
  {
    "id": "6è_nat-6-2_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Forces, màquines simples i aerodinàmica",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada tipus de força amb la seva definició.",
    "parelles": [
      {
        "a": "La gravetat",
        "b": "Força que fa caure els objectes sense necessitat de contacte"
      },
      {
        "a": "L'empenta",
        "b": "Força de contacte que mou un objecte"
      },
      {
        "a": "El fregament",
        "b": "Força que frena el moviment entre dues superfícies"
      },
      {
        "a": "La palanca",
        "b": "Màquina simple que facilita aixecar pesos"
      }
    ]
  },
  {
    "id": "6è_nat-6-2_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Forces, màquines simples i aerodinàmica",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada màquina simple amb la seva funció.",
    "parelles": [
      {
        "a": "La politja",
        "b": "Facilita aixecar o moure objectes pesants"
      },
      {
        "a": "La palanca",
        "b": "Facilita moure o aixecar pesos amb un punt de suport"
      },
      {
        "a": "El pla inclinat",
        "b": "Facilita pujar objectes pesants amb menys força"
      }
    ]
  },
  {
    "id": "6è_nat-6-2_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Forces, màquines simples i aerodinàmica",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Per què els cotxes i avions solen tenir formes arrodonides?",
    "opcions": [
      "Per reduir la resistència de l'aire (aerodinàmica)",
      "Per ser més bonics només",
      "Per pesar més",
      "Per fer més soroll"
    ],
    "resposta_correcta": "Per reduir la resistència de l'aire (aerodinàmica)"
  },
  {
    "id": "6è_nat-6-3_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Alimentació saludable i benestar",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin tipus d'aliments hauríem de menjar amb més freqüència, segons una dieta equilibrada?",
    "opcions": [
      "Fruites i verdures",
      "Llaminadures",
      "Begudes ensucrades",
      "Menjar molt processat"
    ],
    "resposta_correcta": "Fruites i verdures"
  },
  {
    "id": "6è_nat-6-3_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Alimentació saludable i benestar",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Per què és important beure aigua cada dia?",
    "opcions": [
      "Per mantenir el cos hidratat",
      "Per tenir més gana",
      "Per engreixar",
      "Només cal beure aigua quan fa molta calor"
    ],
    "resposta_correcta": "Per mantenir el cos hidratat"
  },
  {
    "id": "6è_nat-6-3_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Alimentació saludable i benestar",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "L'exercici físic regular contribueix a una vida saludable.",
    "pregunta": "Fer exercici físic regularment és un hàbit saludable.",
    "resposta_correcta": true
  },
  {
    "id": "6è_nat-6-3_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Alimentació saludable i benestar",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin d'aquests hàbits ajuda al benestar emocional?",
    "opcions": [
      "Parlar dels sentiments amb algú de confiança",
      "Amagar sempre com et sents",
      "No dormir mai prou",
      "Estar sempre sol"
    ],
    "resposta_correcta": "Parlar dels sentiments amb algú de confiança"
  },
  {
    "id": "6è_nat-6-3_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Alimentació saludable i benestar",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quantes hores de son es recomanen aproximadament a un infant d'aquesta edat?",
    "opcions": [
      "Entre 9 i 11 hores",
      "Entre 2 i 3 hores",
      "Entre 15 i 18 hores",
      "Entre 5 i 6 hores"
    ],
    "resposta_correcta": "Entre 9 i 11 hores"
  },
  {
    "id": "6è_nat-6-3_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Alimentació saludable i benestar",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Una dieta saludable combina aliments variats de tots els grups alimentaris.",
    "pregunta": "Una alimentació saludable inclou aliments variats de tots els grups.",
    "resposta_correcta": true
  },
  {
    "id": "6è_nat-6-4_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Tecnologia i pensament computacional",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què és un algorisme?",
    "opcions": [
      "Una sèrie de passos ordenats per resoldre un problema",
      "Un tipus de virus informàtic",
      "Un aparell electrònic",
      "Un llenguatge de programació"
    ],
    "resposta_correcta": "Una sèrie de passos ordenats per resoldre un problema"
  },
  {
    "id": "6è_nat-6-4_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Tecnologia i pensament computacional",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és una bona norma de seguretat digital?",
    "opcions": [
      "No compartir dades personals amb desconeguts",
      "Compartir sempre la contrasenya",
      "Acceptar totes les peticions d'amistat",
      "Donar la teva adreça a qualsevol web"
    ],
    "resposta_correcta": "No compartir dades personals amb desconeguts"
  },
  {
    "id": "6è_nat-6-4_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Tecnologia i pensament computacional",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "L'etiqueta digital inclou tractar les altres persones amb respecte a internet, no l'ús tècnic del teclat.",
    "pregunta": "L'etiqueta digital es refereix a saber utilitzar correctament el teclat de l'ordinador.",
    "resposta_correcta": false
  },
  {
    "id": "6è_nat-6-4_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Tecnologia i pensament computacional",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena les fases del procés de disseny.",
    "elements_ordre_correcte": [
      "Empatitza",
      "Defineix",
      "Idea",
      "Prototipa",
      "Avalua"
    ]
  },
  {
    "id": "6è_nat-6-4_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Tecnologia i pensament computacional",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Per a què serveix un sensor en un projecte de robòtica?",
    "opcions": [
      "Per detectar informació de l'entorn (llum, moviment...)",
      "Per generar electricitat sol",
      "Per pintar",
      "Per parlar"
    ],
    "resposta_correcta": "Per detectar informació de l'entorn (llum, moviment...)"
  },
  {
    "id": "6è_nat-6-4_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Tecnologia i pensament computacional",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El procés de disseny inclou provar i millorar el prototip tantes vegades com calgui.",
    "pregunta": "Provar i millorar un prototip diverses vegades forma part del procés de disseny.",
    "resposta_correcta": true
  },
  {
    "id": "6è_nat-6-5_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Fonts d'energia i sostenibilitat",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina d'aquestes fonts d'energia és renovable?",
    "opcions": [
      "L'energia solar",
      "El petroli",
      "El carbó",
      "El gas natural"
    ],
    "resposta_correcta": "L'energia solar"
  },
  {
    "id": "6è_nat-6-5_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Fonts d'energia i sostenibilitat",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada font d'energia amb el que l'origina.",
    "parelles": [
      {
        "a": "L'energia eòlica",
        "b": "S'obté de la força del vent"
      },
      {
        "a": "L'energia solar",
        "b": "S'obté de la llum i la calor del Sol"
      },
      {
        "a": "L'energia hidràulica",
        "b": "S'obté de la força de l'aigua"
      },
      {
        "a": "L'energia nuclear",
        "b": "S'obté de reaccions nuclears controlades"
      }
    ]
  },
  {
    "id": "6è_nat-6-5_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Fonts d'energia i sostenibilitat",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Les energies no renovables, com el petroli o el carbó, triguen milions d'anys a formar-se.",
    "pregunta": "Les energies no renovables es poden esgotar perquè triguen milions d'anys a formar-se.",
    "resposta_correcta": true
  },
  {
    "id": "6è_nat-6-5_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Fonts d'energia i sostenibilitat",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Per què és important utilitzar fonts d'energia renovables?",
    "opcions": [
      "Perquè contaminen menys i no s'esgoten",
      "Perquè es poden fer servir només de dia",
      "Perquè generen més electricitat que qualsevol altra font",
      "Perquè no necessiten manteniment"
    ],
    "resposta_correcta": "Perquè contaminen menys i no s'esgoten"
  },
  {
    "id": "6è_nat-6-5_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Fonts d'energia i sostenibilitat",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina font d'energia s'obté de la força de l'aigua (com als embassaments)?",
    "opcions": [
      "L'energia hidràulica",
      "L'energia eòlica",
      "L'energia solar",
      "L'energia geotèrmica"
    ],
    "resposta_correcta": "L'energia hidràulica"
  },
  {
    "id": "6è_nat-6-5_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "nat",
    "tema": "Fonts d'energia i sostenibilitat",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Estalviar energia a casa redueix la factura elèctrica i ajuda a un desenvolupament més sostenible.",
    "pregunta": "Estalviar energia a casa augmenta la factura elèctrica.",
    "resposta_correcta": false
  },
  {
    "id": "5è_soc-5-1_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "La Terra com a sistema",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quins són alguns dels agents externs que modifiquen el relleu?",
    "opcions": [
      "L'aigua i el vent",
      "Només els terratrèmols",
      "Només els volcans",
      "Els satèl·lits"
    ],
    "resposta_correcta": "L'aigua i el vent"
  },
  {
    "id": "5è_soc-5-1_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "La Terra com a sistema",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "La meteorologia estudia i registra les dades del temps atmosfèric.",
    "pregunta": "Com s'anomena l'estudi i registre de les dades meteorològiques?",
    "resposta_correcta": "La meteorologia",
    "respostes_acceptades": [
      "La meteorologia",
      "la meteorologia",
      "Meteorologia",
      "meteorologia"
    ]
  },
  {
    "id": "5è_soc-5-1_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "La Terra com a sistema",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "L'erosió desgasta el relleu per l'acció de l'aigua, el vent o el gel; l'acumulació de sediments es diu sedimentació.",
    "pregunta": "L'erosió és un procés pel qual el relleu es forma per l'acumulació de sediments.",
    "resposta_correcta": false
  },
  {
    "id": "5è_soc-5-1_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "La Terra com a sistema",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada instrument meteorològic amb el que mesura.",
    "parelles": [
      {
        "a": "El pluviòmetre",
        "b": "Mesura la quantitat de pluja"
      },
      {
        "a": "El termòmetre",
        "b": "Mesura la temperatura"
      },
      {
        "a": "L'anemòmetre",
        "b": "Mesura la velocitat del vent"
      },
      {
        "a": "El baròmetre",
        "b": "Mesura la pressió atmosfèrica"
      }
    ]
  },
  {
    "id": "5è_soc-5-1_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "La Terra com a sistema",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin instrument mesura la velocitat del vent?",
    "opcions": [
      "L'anemòmetre",
      "El pluviòmetre",
      "El termòmetre",
      "El baròmetre"
    ],
    "resposta_correcta": "L'anemòmetre"
  },
  {
    "id": "5è_soc-5-1_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "La Terra com a sistema",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Agents com l'aigua, el vent i els éssers vius transformen els paisatges amb el temps.",
    "pregunta": "Els paisatges canvien amb el temps per l'acció combinada de diversos agents naturals.",
    "resposta_correcta": true
  },
  {
    "id": "5è_soc-5-2_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "El clima i les dades meteorològiques",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina diferència hi ha entre temps atmosfèric i clima?",
    "opcions": [
      "El temps és el que fa un dia concret i el clima és la mitjana de molts anys",
      "Són exactament el mateix",
      "El clima canvia cada hora",
      "El temps només existeix a l'estiu"
    ],
    "resposta_correcta": "El temps és el que fa un dia concret i el clima és la mitjana de molts anys"
  },
  {
    "id": "5è_soc-5-2_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "El clima i les dades meteorològiques",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin gràfic es fa servir sovint per representar la temperatura al llarg de l'any?",
    "opcions": [
      "Un gràfic de línies",
      "Un mapa polític",
      "Una fotografia",
      "Un mapa de carreteres"
    ],
    "resposta_correcta": "Un gràfic de línies"
  },
  {
    "id": "5è_soc-5-2_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "El clima i les dades meteorològiques",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Avui dia es fan servir eines digitals per representar gràficament dades meteorològiques.",
    "pregunta": "Les eines digitals també permeten representar dades meteorològiques.",
    "resposta_correcta": true
  },
  {
    "id": "5è_soc-5-2_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "El clima i les dades meteorològiques",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina zona de Catalunya sol tenir temperatures més baixes a l'hivern?",
    "opcions": [
      "Els Pirineus",
      "La costa mediterrània",
      "El delta de l'Ebre",
      "El Baix Llobregat"
    ],
    "resposta_correcta": "Els Pirineus"
  },
  {
    "id": "5è_soc-5-2_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "El clima i les dades meteorològiques",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Per què és útil registrar dades meteorològiques al llarg del temps?",
    "opcions": [
      "Per identificar patrons i canvis del clima",
      "Per saber en quin any va ploure més a Europa",
      "Per decidir la roba que cal portar aquell dia",
      "Per comparar quin país té el clima més bonic"
    ],
    "resposta_correcta": "Per identificar patrons i canvis del clima"
  },
  {
    "id": "5è_soc-5-2_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "El clima i les dades meteorològiques",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Analitzar dades meteorològiques al llarg del temps també ajuda a detectar canvis en el clima, no només a predir el temps a curt termini.",
    "pregunta": "Analitzar dades meteorològiques serveix per predir el temps de demà, però no per estudiar el clima a llarg termini.",
    "resposta_correcta": false
  },
  {
    "id": "5è_soc-5-3_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "L'organització política de l'Estat espanyol",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "La Constitució és el text legal fonamental que organitza l'Estat espanyol.",
    "pregunta": "Com s'anomena el text legal fonamental que organitza l'Estat espanyol?",
    "resposta_correcta": "La Constitució",
    "respostes_acceptades": [
      "La Constitució",
      "la Constitució",
      "Constitució",
      "constitucio",
      "La Constitucio"
    ]
  },
  {
    "id": "5è_soc-5-3_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "L'organització política de l'Estat espanyol",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "L'Estat espanyol es divideix en 17 comunitats autònomes.",
    "pregunta": "Quantes comunitats autònomes formen l'Estat espanyol?",
    "resposta_correcta": "17",
    "respostes_acceptades": [
      "17",
      "disset"
    ]
  },
  {
    "id": "5è_soc-5-3_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "L'organització política de l'Estat espanyol",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Catalunya és una comunitat autònoma de l'Estat espanyol, no de França.",
    "pregunta": "Catalunya és una comunitat autònoma de França.",
    "resposta_correcta": false
  },
  {
    "id": "5è_soc-5-3_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "L'organització política de l'Estat espanyol",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui elegeix els diputats del Parlament de Catalunya?",
    "opcions": [
      "La ciutadania, mitjançant el vot",
      "El rei",
      "Els mestres",
      "Els alcaldes únicament"
    ],
    "resposta_correcta": "La ciutadania, mitjançant el vot"
  },
  {
    "id": "5è_soc-5-3_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "L'organització política de l'Estat espanyol",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com s'anomena el conjunt de lleis que regeix un territori?",
    "opcions": [
      "L'ordenament legal o les lleis",
      "Un mapa",
      "Un idioma",
      "Una bandera"
    ],
    "resposta_correcta": "L'ordenament legal o les lleis"
  },
  {
    "id": "5è_soc-5-3_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "L'organització política de l'Estat espanyol",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "L'organització política estableix qui i com es prenen les decisions que afecten tothom.",
    "pregunta": "L'organització política d'un territori determina com es prenen les decisions col·lectives.",
    "resposta_correcta": true
  },
  {
    "id": "5è_soc-5-4_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Grans etapes de la Història",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "ordenar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Ordena cronològicament aquestes etapes històriques.",
    "elements_ordre_correcte": [
      "Prehistòria",
      "Edat Antiga",
      "Edat Mitjana",
      "Edat Moderna",
      "Edat Contemporània"
    ]
  },
  {
    "id": "5è_soc-5-4_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Grans etapes de la Història",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "En quina etapa se situen els castells i els cavallers a Europa?",
    "opcions": [
      "L'edat mitjana",
      "L'edat contemporània",
      "La prehistòria",
      "L'edat antiga"
    ],
    "resposta_correcta": "L'edat mitjana"
  },
  {
    "id": "5è_soc-5-4_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Grans etapes de la Història",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Un eix cronològic representa gràficament l'ordre temporal dels fets històrics.",
    "pregunta": "Un eix cronològic serveix per ordenar fets històrics en el temps.",
    "resposta_correcta": true
  },
  {
    "id": "5è_soc-5-4_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Grans etapes de la Història",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada tipus de font històrica amb un exemple.",
    "parelles": [
      {
        "a": "Font escrita",
        "b": "Un document escrit, com una carta o un llibre antic"
      },
      {
        "a": "Font oral",
        "b": "El relat o testimoni d'una persona, com una entrevista"
      },
      {
        "a": "Font patrimonial",
        "b": "Un objecte, monument o lloc del passat"
      }
    ]
  },
  {
    "id": "5è_soc-5-4_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Grans etapes de la Història",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin tipus de font històrica és una entrevista a una persona gran que explica records?",
    "opcions": [
      "Una font oral",
      "Una font escrita",
      "Un monument",
      "Un mapa"
    ],
    "resposta_correcta": "Una font oral"
  },
  {
    "id": "5è_soc-5-4_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Grans etapes de la Història",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El patrimoni natural i cultural inclou tant paisatges i espècies com monuments i tradicions, i mereix ser conservat.",
    "pregunta": "El patrimoni natural i cultural inclou monuments històrics, però no paisatges naturals.",
    "resposta_correcta": false
  },
  {
    "id": "5è_soc-5-5_q1",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Institucions i alfabetització cívica",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Qui governa un ajuntament?",
    "opcions": [
      "L'alcalde o alcaldessa i els regidors",
      "El rei",
      "Un mestre",
      "Un metge"
    ],
    "resposta_correcta": "L'alcalde o alcaldessa i els regidors"
  },
  {
    "id": "5è_soc-5-5_q2",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Institucions i alfabetització cívica",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina institució s'encarrega de fer complir les lleis de trànsit?",
    "opcions": [
      "La policia",
      "L'escola",
      "La biblioteca",
      "El mercat"
    ],
    "resposta_correcta": "La policia"
  },
  {
    "id": "5è_soc-5-5_q3",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Institucions i alfabetització cívica",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Respectar les normes de circulació és responsabilitat tant dels conductors com dels vianants, per a la seguretat de tots.",
    "pregunta": "Respectar els senyals i les normes de circulació és responsabilitat dels conductors, no dels vianants.",
    "resposta_correcta": false
  },
  {
    "id": "5è_soc-5-5_q4",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Institucions i alfabetització cívica",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Per què és important conèixer la diversitat cultural del nostre entorn?",
    "opcions": [
      "Per respectar i valorar les diferents identitats i cultures",
      "Per ignorar-la",
      "Per criticar-la sempre",
      "No té cap importància"
    ],
    "resposta_correcta": "Per respectar i valorar les diferents identitats i cultures"
  },
  {
    "id": "5è_soc-5-5_q5",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Institucions i alfabetització cívica",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina institució reuneix representants de diferents països europeus per prendre decisions comunes?",
    "opcions": [
      "La Unió Europea",
      "Les Nacions Unides",
      "Un club esportiu",
      "Cap institució"
    ],
    "resposta_correcta": "La Unió Europea"
  },
  {
    "id": "5è_soc-5-5_q6",
    "curs": "5è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Institucions i alfabetització cívica",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "A Catalunya i a l'Estat espanyol hi conviuen diverses llengües i cultures.",
    "pregunta": "A Catalunya i a l'Estat espanyol conviuen diverses llengües i cultures.",
    "resposta_correcta": true
  },
  {
    "id": "6è_soc-6-1_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Objectius de Desenvolupament Sostenible",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què són els Objectius de Desenvolupament Sostenible (ODS)?",
    "opcions": [
      "Un conjunt de metes globals per millorar el món i el planeta",
      "Un tipus d'impost",
      "Un tractat comercial entre grans empreses",
      "Una llei que només s'aplica als països pobres"
    ],
    "resposta_correcta": "Un conjunt de metes globals per millorar el món i el planeta"
  },
  {
    "id": "6è_soc-6-1_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Objectius de Desenvolupament Sostenible",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin d'aquests és un exemple d'ODS?",
    "opcions": [
      "Fi de la pobresa",
      "Més cotxes al carrer",
      "Menys escoles",
      "Menys hospitals"
    ],
    "resposta_correcta": "Fi de la pobresa"
  },
  {
    "id": "6è_soc-6-1_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Objectius de Desenvolupament Sostenible",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Els ODS busquen un equilibri entre desenvolupament econòmic, social i ambiental.",
    "pregunta": "Els ODS busquen únicament el creixement econòmic, sense tenir en compte el medi ambient.",
    "resposta_correcta": false
  },
  {
    "id": "6è_soc-6-1_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Objectius de Desenvolupament Sostenible",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Com pot afectar l'economia global a la consecució dels ODS?",
    "opcions": [
      "Pot ajudar-hi o perjudicar-la, segons com es gestioni",
      "No té cap relació",
      "Sempre hi ajuda automàticament",
      "Sempre els perjudica"
    ],
    "resposta_correcta": "Pot ajudar-hi o perjudicar-la, segons com es gestioni"
  },
  {
    "id": "6è_soc-6-1_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Objectius de Desenvolupament Sostenible",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina institució internacional va proposar els ODS?",
    "resposta_correcta": "Les Nacions Unides",
    "respostes_acceptades": [
      "Les Nacions Unides",
      "les Nacions Unides",
      "Nacions Unides",
      "ONU",
      "l'ONU"
    ]
  },
  {
    "id": "6è_soc-6-1_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Objectius de Desenvolupament Sostenible",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Cada persona, amb petites accions, pot contribuir a assolir els ODS.",
    "pregunta": "Cada persona pot contribuir, encara que sigui a petita escala, a assolir els ODS.",
    "resposta_correcta": true
  },
  {
    "id": "6è_soc-6-2_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "La democràcia a Espanya",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin any es va aprovar la Constitució espanyola actual?",
    "resposta_correcta": "1978",
    "respostes_acceptades": [
      "1978"
    ]
  },
  {
    "id": "6è_soc-6-2_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "La democràcia a Espanya",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada sistema polític amb la seva definició.",
    "parelles": [
      {
        "a": "La democràcia",
        "b": "La ciutadania elegeix els seus representants"
      },
      {
        "a": "La dictadura",
        "b": "El poder el té una sola persona sense eleccions lliures"
      },
      {
        "a": "La monarquia absoluta",
        "b": "Un rei o reina té tot el poder"
      },
      {
        "a": "L'anarquia",
        "b": "No hi ha govern ni autoritat establerta"
      }
    ]
  },
  {
    "id": "6è_soc-6-2_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "La democràcia a Espanya",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "La instauració de la democràcia a Espanya el 1978 va respondre a diverses causes i factors.",
    "pregunta": "La instauració de la democràcia a Espanya va ser un procés amb diverses causes.",
    "resposta_correcta": true
  },
  {
    "id": "6è_soc-6-2_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "La democràcia a Espanya",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Per què és important estudiar el paper de persones «invisibles» (dones, infants, treballadors) en la Història?",
    "opcions": [
      "Perquè també van formar part dels canvis històrics, encara que se'ls citi menys",
      "Perquè no van fer res important",
      "Perquè només els reis importen",
      "Perquè així resulta més fàcil memoritzar dates i noms"
    ],
    "resposta_correcta": "Perquè també van formar part dels canvis històrics, encara que se'ls citi menys"
  },
  {
    "id": "6è_soc-6-2_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "La democràcia a Espanya",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin dret bàsic garanteix la democràcia a la ciutadania?",
    "opcions": [
      "El dret al vot",
      "El dret a no pagar mai impostos",
      "El dret a ignorar les lleis",
      "Cap dret concret"
    ],
    "resposta_correcta": "El dret al vot"
  },
  {
    "id": "6è_soc-6-2_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "La democràcia a Espanya",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Analitzar un procés històric implica considerar diversos factors i causes, sense un límit fix.",
    "pregunta": "Analitzar un procés històric requereix tenir en compte dues causes, com a màxim.",
    "resposta_correcta": false
  },
  {
    "id": "6è_soc-6-3_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "El canvi climàtic",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és una causa principal del canvi climàtic actual?",
    "opcions": [
      "L'emissió de gasos d'efecte hivernacle per activitats humanes",
      "Els volcans extingits",
      "Les erupcions solars d'aquest segle",
      "La posició del Sol respecte la Terra"
    ],
    "resposta_correcta": "L'emissió de gasos d'efecte hivernacle per activitats humanes"
  },
  {
    "id": "6è_soc-6-3_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "El canvi climàtic",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és una conseqüència del canvi climàtic?",
    "opcions": [
      "L'augment de fenòmens meteorològics extrems",
      "Menys contaminació automàticament",
      "Més glaceres cada any",
      "Un clima més estable i previsible"
    ],
    "resposta_correcta": "L'augment de fenòmens meteorològics extrems"
  },
  {
    "id": "6è_soc-6-3_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "El canvi climàtic",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Reduir el consum d'energia i reciclar són mesures que ajuden a mitigar el canvi climàtic.",
    "pregunta": "Augmentar el consum d'energia i no reciclar són mesures per mitigar el canvi climàtic.",
    "resposta_correcta": false
  },
  {
    "id": "6è_soc-6-3_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "El canvi climàtic",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada concepte amb la seva definició.",
    "parelles": [
      {
        "a": "Efecte hivernacle",
        "b": "Els gasos atmosfèrics retenen la calor del Sol"
      },
      {
        "a": "Petjada ecològica",
        "b": "Mesura l'impacte ambiental d'una persona o activitat"
      },
      {
        "a": "Energies renovables",
        "b": "No s'esgoten i contaminen menys"
      }
    ]
  },
  {
    "id": "6è_soc-6-3_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "El canvi climàtic",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina mesura ajuda a adaptar-nos als efectes del canvi climàtic?",
    "opcions": [
      "Planificar ciutats més resilients a onades de calor o inundacions",
      "Construir més cases a prop del mar sense cap protecció",
      "Consumir més combustibles fòssils",
      "Talar més boscos"
    ],
    "resposta_correcta": "Planificar ciutats més resilients a onades de calor o inundacions"
  },
  {
    "id": "6è_soc-6-3_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "El canvi climàtic",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El canvi climàtic té efectes tant a escala local (sequeres, onades de calor) com global (pujada del nivell del mar).",
    "pregunta": "El canvi climàtic té efectes a escala local, però no afecta el nivell del mar a escala global.",
    "resposta_correcta": false
  },
  {
    "id": "6è_soc-6-4_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "La Unió Europea i les institucions",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què és la Unió Europea?",
    "opcions": [
      "Una unió de països europeus que col·laboren en diversos àmbits",
      "Un únic país molt gran",
      "Una competició de futbol entre països europeus",
      "Una empresa privada"
    ],
    "resposta_correcta": "Una unió de països europeus que col·laboren en diversos àmbits"
  },
  {
    "id": "6è_soc-6-4_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "La Unió Europea i les institucions",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "resposta_escrita",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina moneda fan servir molts països de la Unió Europea?",
    "resposta_correcta": "L'euro",
    "respostes_acceptades": [
      "L'euro",
      "l'euro",
      "Euro",
      "euro"
    ]
  },
  {
    "id": "6è_soc-6-4_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "La Unió Europea i les institucions",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "El Parlament Europeu té la seu a Estrasburg (amb seus també a Brussel·les i Luxemburg).",
    "pregunta": "El Parlament Europeu té la seu a Madrid.",
    "resposta_correcta": false
  },
  {
    "id": "6è_soc-6-4_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "La Unió Europea i les institucions",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Per què existeixen institucions com la Unió Europea?",
    "opcions": [
      "Per afavorir la cooperació entre països en temes comuns",
      "Per eliminar tots els països membres",
      "Per impedir el comerç",
      "Per cobrar impostos més alts a cada país"
    ],
    "resposta_correcta": "Per afavorir la cooperació entre països en temes comuns"
  },
  {
    "id": "6è_soc-6-4_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "La Unió Europea i les institucions",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quin és un valor que sol promoure la Unió Europea?",
    "opcions": [
      "La cohesió social i la col·laboració entre països",
      "La divisió entre països",
      "El conflicte permanent",
      "L'aïllament total"
    ],
    "resposta_correcta": "La cohesió social i la col·laboració entre països"
  },
  {
    "id": "6è_soc-6-4_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "La Unió Europea i les institucions",
    "dificultat": 3,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Formar part d'institucions internacionals pot afavorir la cohesió i la col·laboració entre països.",
    "pregunta": "Formar part d'institucions internacionals pot afavorir la cohesió social.",
    "resposta_correcta": true
  },
  {
    "id": "6è_soc-6-5_q1",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Consum responsable i impostos",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "emparellar",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Relaciona cada concepte econòmic amb la seva definició.",
    "parelles": [
      {
        "a": "Consum responsable",
        "b": "Comprar tenint en compte l'impacte social i ambiental"
      },
      {
        "a": "Impostos",
        "b": "Financen serveis públics com escoles o hospitals"
      },
      {
        "a": "Mercat laboral",
        "b": "Com es genera i es distribueix la feina i els salaris"
      }
    ]
  },
  {
    "id": "6è_soc-6-5_q2",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Consum responsable i impostos",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Per a què serveixen els impostos que paga la ciutadania?",
    "opcions": [
      "Per finançar serveis públics com escoles, hospitals o carreteres",
      "Només per enriquir alguns pocs",
      "Per pagar la publicitat de les empreses privades",
      "Per pagar vacances privades"
    ],
    "resposta_correcta": "Per finançar serveis públics com escoles, hospitals o carreteres"
  },
  {
    "id": "6è_soc-6-5_q3",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Consum responsable i impostos",
    "dificultat": 1,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Les empreses poden ser rendibles econòmicament i, alhora, tenir responsabilitat ambiental i social.",
    "pregunta": "Les empreses han de triar entre tenir beneficis econòmics o ser responsables amb el medi ambient.",
    "resposta_correcta": false
  },
  {
    "id": "6è_soc-6-5_q4",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Consum responsable i impostos",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Què estudia el funcionament del mercat laboral?",
    "opcions": [
      "Com es genera i es distribueix la feina i els salaris",
      "Com es fixen els preus dels aliments al mercat",
      "Com es fabriquen els cotxes a les fàbriques",
      "Quins productes es venen als mercats municipals"
    ],
    "resposta_correcta": "Com es genera i es distribueix la feina i els salaris"
  },
  {
    "id": "6è_soc-6-5_q5",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Consum responsable i impostos",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "test",
    "origen": "curriculum_base",
    "explicacio": "",
    "pregunta": "Quina és una conseqüència d'una distribució molt desigual de la riquesa?",
    "opcions": [
      "Més desigualtats socials",
      "Menys desigualtats amb el temps",
      "Que tothom tingui els mateixos ingressos",
      "Una disminució de la pobresa extrema"
    ],
    "resposta_correcta": "Més desigualtats socials"
  },
  {
    "id": "6è_soc-6-5_q6",
    "curs": "6è",
    "cicle": "superior",
    "materia": "soc",
    "tema": "Consum responsable i impostos",
    "dificultat": 2,
    "nivell": "normal",
    "tipus": "veritat_fals",
    "origen": "curriculum_base",
    "explicacio": "Els impostos financen serveis públics com escoles, hospitals o carreteres.",
    "pregunta": "Pagar impostos contribueix al manteniment de serveis que beneficien tota la societat.",
    "resposta_correcta": true
  }
];
