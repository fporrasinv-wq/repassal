# Repassa'l! (HTML/JS estático, GitHub Pages)

- **Idioma**: respuestas a Tico, en castellano. Código, comentarios y
  documentos del repo, en catalán. El contenido educativo, en catalán
  correcto.
- **Ramas**: nunca hagas push a `main`. Trabaja en una rama por bloque
  y abre un PR; Tico lo fusiona. `main` es lo que ven los niños.
- `documentos/pendientes.md` **no existe en este repo a propósito**
  (el backlog es privado). No lo recrees ni lo actualices. Tampoco
  escribas en ningún archivo del repo notas de negocio, ingresos o
  datos personales o familiares.
- `data/questions.js`: modifica solo lo que el prompt pida y nada más.
  Tras cada cambio de contenido ejecuta `node tools/validar.js` (debe
  dar 0 errores) y comprueba que ids y orden no cambian salvo lo
  pedido.
- Al terminar cada bloque: di qué has probado y cómo, qué NO has
  podido probar, y actualiza `documentos/avances.md`. No digas
  "probado" si no has ejecutado la prueba: muestra la salida.
- `tools/ciego/`, `tools/resultados/` y `tools/benchmark/*` son datos
  de trabajo y no se versionan.
