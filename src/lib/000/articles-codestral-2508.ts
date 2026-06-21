type Article = {
  slug: string;
  title: string;
  summary: string;
  date: string; // ISO format, example: "2026-06-20"
  tags: string[];
};

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

export default articles;