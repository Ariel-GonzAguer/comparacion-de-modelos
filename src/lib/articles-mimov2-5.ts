export type Article = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
};

export const articles: Article[] = [
  {
    slug: "static-rendering-vs-ssg",
    title: "Static Rendering vs SSG",
    summary: "A practical comparison of static rendering strategies.",
    date: "2026-06-15",
    tags: ["jamstack", "performance"],
  },
  {
    slug: "mdx-content-modeling",
    title: "MDX Content Modeling",
    summary: "How to structure MDX content for maintainable sites.",
    date: "2026-06-10",
    tags: ["mdx", "content"],
  },
  {
    slug: "edge-caching-basics",
    title: "Edge Caching Basics",
    summary: "Caching rules that improve perceived performance.",
    date: "2026-05-28",
    tags: ["performance", "cdn"],
  },
  {
    slug: "accessible-search-ui",
    title: "Accessible Search UI",
    summary: "Building keyboard-friendly search interfaces.",
    date: "2026-05-20",
    tags: ["accessibility", "ui"],
  },
];

/**
 * Devuelve los tags únicos con su cantidad de apariciones.
 *
 * @example
 * const tags = getTagCounts(articles);
 * // { jamstack: 1, performance: 2, ... }
 */
export function getTagCounts(
  items: Article[],
): Map<string, number> {
  const counts = new Map<string, number>();

  for (const article of items) {
    for (const tag of article.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return counts;
}

/**
 * Filtra artículos por query de texto y tag seleccionado.
 * La búsqueda es case-insensitive sobre title, summary y tags.
 */
export function filterArticles(
  items: Article[],
  query: string,
  selectedTag: string | null,
): Article[] {
  const normalizedQuery = query.toLowerCase().trim();

  return items
    .filter((article) => {
      const matchesQuery =
        normalizedQuery === "" ||
        article.title.toLowerCase().includes(normalizedQuery) ||
        article.summary.toLowerCase().includes(normalizedQuery) ||
        article.tags.some((t) => t.includes(normalizedQuery));

      const matchesTag =
        selectedTag === null || article.tags.includes(selectedTag);

      return matchesQuery && matchesTag;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}
