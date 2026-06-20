Actúa como senior frontend/Jamstack engineer.

Contexto:
Tengo un sitio Jamstack de notas técnicas. Ya existe el proyecto. No quiero que crees un proyecto nuevo.

Tarea:
Implementa una pequeña feature de listado y filtrado de artículos usando React + TypeScript.

Debes entregar solo estos archivos o fragmentos equivalentes:
1. `articles.ts`
2. `ArticleList.tsx`
3. CSS mínimo necesario, si aplica.

Datos de entrada:
Usa este tipo:

type Article = {
  slug: string;
  title: string;
  summary: string;
  date: string; // ISO format, example: "2026-06-20"
  tags: string[];
};

Usa estos datos de ejemplo:

const articles: Article[] = [
  {
    slug: "static-rendering-vs-ssg",
    title: "Static Rendering vs SSG",
    summary: "A practical comparison of static rendering strategies.",
    date: "2026-06-15",
    tags: ["jamstack", "performance"]
  },
  {
    slug: "mdx-content-modeling",
    title: "MDX Content Modeling",
    summary: "How to structure MDX content for maintainable sites.",
    date: "2026-06-10",
    tags: ["mdx", "content"]
  },
  {
    slug: "edge-caching-basics",
    title: "Edge Caching Basics",
    summary: "Caching rules that improve perceived performance.",
    date: "2026-05-28",
    tags: ["performance", "cdn"]
  },
  {
    slug: "accessible-search-ui",
    title: "Accessible Search UI",
    summary: "Building keyboard-friendly search interfaces.",
    date: "2026-05-20",
    tags: ["accessibility", "ui"]
  }
];

Requisitos:
1. Mostrar los artículos ordenados por fecha descendente.
2. Incluir búsqueda client-side por `title`, `summary` y `tags`.
3. Incluir filtro por tag.
4. Mostrar todos los tags disponibles con contador.
5. Permitir limpiar búsqueda y filtro.
6. Si no hay resultados, mostrar un estado vacío.
7. El componente debe ser accesible:
   - label para el buscador
   - botones reales para filtros
   - `aria-pressed` en el tag activo
   - navegación por teclado funcional
8. El código debe usar TypeScript correctamente.
9. No uses librerías externas.
10. No crees routing, configuración, build setup ni un proyecto completo.

Entregables:
- Código completo de los archivos solicitados.
- Breve explicación de decisiones técnicas.
- Cualquier limitación o mejora futura.