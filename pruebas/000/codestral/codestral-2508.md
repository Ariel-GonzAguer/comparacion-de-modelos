# Article listing and filtering feature

## Decisiones técnicas

1. Ordenamiento: Los artículos se ordenan por fecha descendente usando `useMemo` para optimizar el rendimiento.
2. Búsqueda: La búsqueda se realiza en tiempo real en los campos `title`, `summary` y `tags`, con un enfoque case-insensitive.
3. Filtro por tags: Se muestra un contador de artículos por tag y se puede filtrar por un tag específico.
4. Accesibilidad:
   - Etiquetas para el campo de búsqueda
   - Botones reales para los filtros de tags
   - `aria-pressed` para indicar el tag activo
   - Navegación por teclado funcional
5. Estado vacío: Se muestra un mensaje cuando no hay resultados.
6. CSS mínimo: Se incluyen clases CSS básicas para estructurar el componente, pero el CSS real debe ser proporcionado por el proyecto principal.

## Limitaciones

1. La búsqueda es client-side, lo que significa que no es adecuada para grandes conjuntos de datos.
2. No se incluye paginación, lo que podría ser necesario para grandes conjuntos de datos.
3. El CSS es mínimo y debe ser extendido según las necesidades del proyecto.

## Mejoras futuras

1. Implementar paginación para manejar grandes conjuntos de datos.
2. Añadir más opciones de filtrado (por ejemplo, por fecha).
3. Mejorar el diseño y la experiencia de usuario con CSS más completo.
4. Añadir pruebas unitarias para verificar el comportamiento del componente.
