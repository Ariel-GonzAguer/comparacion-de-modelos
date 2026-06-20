# TypeScript compila sin errores

## Archivos creados

- `src/lib/articles.ts`
  - Contiene el tipo `Article`
  - Datos de ejemplo
  - Dos helpers:
    - `getTagCounts` — retorna un `Map<string, number>` con tags únicos y su cantidad.
    - `filterArticles` — filtra por query (case-insensitive sobre `title`, `summary`, `tags`) y tag exacto, ordena por fecha descendente.

- `src/components/article-list.tsx`
  - Componente `'use client'` con estado local (`query`, `selectedTag`)
  - Todo el filtrado y ordenamiento corre en el cliente vía `useMemo`

## Accesibilidad

- `<label htmlFor="article-search">` para el input
- Tags son `<button>` reales con `aria-pressed` dinámico
- Grupo de tags con `role="group"` y `aria-label`
- Navegación por teclado nativa (tabs entre botones)

## Estados

- Input de búsqueda con `type="search"` (permite limpiar con Escape en la mayoría de browsers)
- Botón "Clear filters" que aparece solo cuando hay filtros activos
- Empty state con mensaje cuando no hay resultados

## CSS

- No se creó un archivo CSS separado. Todo usa clases de Tailwind (ya configurado en el proyecto).

## Decisiones técnicas

- `getTagCounts` opera sobre `articles[]` original
- `filterArticles` como función pura
- `useMemo` para `filtered`
- `useCallback` para handlers
- `null` en vez de `undefined` para `selectedTag`

## Limitaciones y mejoras futuras

- Sin debounce en búsqueda — para 4 artículos no importa, pero con muchos más conviene agregar un debounce de 150-300ms.
- Sin URL sync — los filtros no se reflejan en la URL. Para SEO o deep linking habría que sync con query params.
- Sin paginación — con muchos artículos habría que paginar o virtualizar la lista.
- Tag counts estáticos — se calculan una vez al cargar el módulo. Si los artículos vinieran de una API, habría que moverlo a un `useMemo`.

## Uso

Para usar el componente, importalo en cualquier página:

```tsx
import { ArticleList } from '../components/article-list';

export default function NotesPage() {
  return (
    <main>
      <h1>Notes</h1>
      <ArticleList />
    </main>
  );
}
