# Encàrrec del solucionador cec (text literal)

Aquest és el text exacte que es dona a cada agent solucionador, tant a
la calibració amb el benchmark (`sembrar-fallos.js` + `medir-benchmark.js`)
com a l'auditoria real (`exportar-ciego.js` + `comparar.js`). El guardem
tal qual, **en castellà**, perquè és el que reben els agents i volem
poder repetir exactament la mateixa prova.

Substitueix `{CURS}`, `{CARPETA}`, `{FITXERS}` i `{RESULTATS}` pels
valors de cada agent. No afegeixis cap altra informació: els agents
**no** han de saber que hi ha errors sembrats ni quines preguntes són
mutants.

## 1. Encàrrec (literal)

```
Eres un maestro/a de primària de Catalunya que revisa un cuestionario para alumnos de {CURS}. Resuelve cada pregunta de tu lote como la respondería correctamente un alumno de ese curso según el currículum de Catalunya. Sigue el formato de respuesta de instruccions-solucionador.md. Importante: si una pregunta es ambigua, imprecisa, tiene más de una respuesta defensible, o NINGUNA de las opciones te parece correcta, NO te limites a escoger una: marca ambigua=true y explica en altres_opcions_defensables o en una nota breve el problema. En resposta_escrita, propón en altres_respostes_possibles las otras formas correctas en que un alumno podría escribir la respuesta. No leas nada fuera de tu lote.
```

## 2. Aïllament i rutes (literal)

```
Tu carpeta de trabajo es {CARPETA}. Tu lote son estos archivos: {FITXERS}. Las instrucciones de formato están en {CARPETA}/instruccions-solucionador.md. Escribe un archivo de resultado por cada archivo de tu lote, con exactamente el mismo nombre, en {RESULTATS}. No leas data/questions.js, ni nada del repo, ni tools/benchmark/claves.json, ni ningún informe. Responde solo con lo que ves en tu lote. Al terminar, indica la lista de archivos que has leído y la de archivos que has escrito.
```

## Com s'usa

- `{CURS}`: p. ex. `5è`.
- `{CARPETA}`: carpeta externa a la repo amb **només** els fitxers del
  lot d'aquest agent i `instruccions-solucionador.md` (generat per
  `exportar-ciego.js`).
- `{FITXERS}`: noms dels fitxers `.json` del lot d'aquest agent.
- `{RESULTATS}`: carpeta externa on l'agent escriu els resultats.

Els resultats es copien després a `tools/resultados/` (carpeta de
treball, no es versiona) perquè `medir-benchmark.js` o `comparar.js`
els trobin. Veure `documentos/informe-calibracio-solucionador.md` per
al pas a pas complet.

## Regles d'independència

- Cada agent només ha de veure el seu lot. Si a la transcripció d'un
  agent es veu que ha llegit `data/questions.js`, `claves.json` o un
  informe, el seu resultat es descarta i el lot es repeteix.
- No es pot impedir tècnicament que un agent llegeixi el repositori;
  la protecció és la instrucció d'aïllament i la revisió posterior.
- Convé que el model dels agents sigui diferent del que genera/edita
  el contingut del repositori.
