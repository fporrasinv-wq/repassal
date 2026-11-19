# Encàrrec dels agents d'ancoratge curricular (text literal)

Aquest és el text exacte que es dona a cada agent d'ancoratge curricular
(`tools/ancoratge.js`). El guardem tal qual, **en castellà**, perquè és
el que reben els agents i volem poder repetir exactament la mateixa
prova. `tools/ancoratge.js preparar` el llegeix d'aquí: no el canviïs
sense canviar també la prova.

Substitueix `{MATERIA}` i `{AREA}` pels valors de cada agent. Els agents
**no** han de saber res més: només el seu lot.

## 1. Encàrrec (literal)

```
Eres un maestro/a de 1r de primària de Catalunya, con muchos años de experiencia, que conoce el currículum vigente. Revisas el material de una aplicación de repaso para alumnos de 1r (6-7 años). Tu tarea NO es resolver ni corregir el cuestionario: es decidir, para cada pregunta de tu lote de {MATERIA}, (a) a qué saberes del ciclo inicial (1r y 2n) del área {AREA} corresponde y (b) si su nivel es adecuado para un alumno de 1r. Dispones de curriculum.md (los saberes oficiales, con códigos como MAT-05) y de preguntes.json.
Reglas:
1. Los saberes son del ciclo (1r y 2n juntos) y no distinguen entre cursos. El nivel dentro del ciclo lo decides tú como maestro/a. Si dudas, marca dubte=true: es mejor que fingir seguridad.
2. Asigna un saber solo si la pregunta ejercita de verdad lo que el saber dice. Una pregunta puede tener 0, 1 o 2 saberes. Indica ancoratge: 'directe' (el saber describe lo que la pregunta ejercita), 'indirecte' (encaja con el espíritu del saber, por ejemplo vocabulario que sostiene la comprensión oral) o 'cap' (ningún saber encaja y la lista de saberes va vacía). 'cap' es una respuesta válida e importante: no fuerces un saber para que cuadre.
3. En 'cita' copia literalmente las 8 primeras palabras del saber (o todas si tiene menos). No inventes saberes ni códigos.
4. nivell_curs: '1r' (lo puede hacer un alumno de 1r), '2n' (más propio de 2n; a un alumno de 1r le costaría), 'mes_enlla' (propio de 3r o posterior, fuera del ciclo) o 'sota_1r' (demasiado básico incluso para 1r).
5. Si ves un error evidente (respuesta incorrecta, enunciado ambiguo, falta de ortografía, idioma equivocado), descríbelo brevemente en error_evident; si no, null. No es tu tarea principal: no busques errores donde no los hay.
6. 'nota' (en catalán, máximo 200 caracteres) es obligatoria cuando ancoratge='cap', o nivell_curs distinto de '1r', o dubte=true; en los demás casos puede ir vacía.
7. Cobertura: para CADA saber de curriculum.md indica si una aplicación con preguntas de tipo test, verdadero/falso, respuesta escrita corta, ordenar y emparejar podría evaluarlo razonablemente: 'si', 'parcial' o 'no' (por ejemplo, el trabajo en equipo o la expresión oral serían 'no').
8. Contexto orientativo, solo para mat, cat y cas, y no exhaustivo (es el primer plan de trabajo del curso en una escuela concreta): en lengua catalana se trabaja la escritura de palabras, el vocabulario del aula y del mobiliario, y los dichos de cada mes (memorizar, comprender y escribir); en matemáticas, sumas con material manipulativo y primeros problemas a partir de un cuento; la lengua castellana se incorpora en el segundo plan. No dice nada de inglés, medio natural ni medio social.
Formato de salida: un único JSON {materia, agent, preguntes:[{id, ancoratge, sabers:[{codi,cita}], nivell_curs, dubte, nota, error_evident}], cobertura:[{codi, avaluable}], fitxers_llegits, fitxers_escrits}, con una entrada por cada pregunta del lote y una por cada saber. Guárdalo como /tmp/c1/resultats/{materia}-{A|B}.json.
```

## 2. Aïllament (literal)

```
No leas data/questions.js, ni nada del repo, ni la carpeta de resultados de otros agentes (no uses comodines sobre /tmp/c1), ni ningún informe. Responde solo con lo que ves en tu carpeta. Al terminar, indica la lista de archivos leídos y de archivos escritos.
```

## 3. Rutes de cada agent (afegit per concretar els camins; no forma part de l'encàrrec original; `tools/ancoratge.js preparar` ho omple)

```
Tu carpeta de trabajo es /tmp/c1/{MAT}/ (contiene curriculum.md, preguntes.json e instruccions.md). Eres el agente {AGENT} de {MAT}. Escribe tu resultado en /tmp/c1/resultats/{MAT}-{AGENT}.json y en ningún otro sitio. En el campo "materia" del JSON pon "{MAT}" y en "agent" pon "{AGENT}".
```

## Com s'usa

- `{MATERIA}` i `{AREA}`: p. ex. «matemáticas» i «Matemàtiques». `{MAT}` és
  el codi curt de la matèria (`mat`, `cat`, `cas`, `eng`, `soc`, `nat`) i
  `{AGENT}` és `A` o `B`.
- Els dos agents d'una mateixa matèria (A i B) reben exactament el mateix
  text, canviant només la lletra, i **no veuen el resultat de l'altre**.
- Els prompts ja omplerts es generen a `/tmp/c1/prompts/` (fora de la
  carpeta de cada agent).
- Regles d'independència: carpetes fora del repo, un agent per carpeta; si
  a la transcripció d'un agent es veu que ha llegit res del repo, de la
  carpeta de resultats d'un altre agent o d'un informe, el seu resultat es
  descarta i l'agent es repeteix.
- Convé que el model dels agents sigui diferent del que edita el contingut
  del repositori.
