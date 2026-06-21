'use client';

import { useMemo, useState, useCallback } from 'react';

import { type Article, articles, filterArticles, getTagCounts } from '../../lib/000/articles-mimov2-5';

const tagCounts = getTagCounts(articles);
const allTags = Array.from(tagCounts.entries()).sort((a, b) => b[1] - a[1]);

export const ArticleList = () => {
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filtered = useMemo(
    () => filterArticles(articles, query, selectedTag),
    [query, selectedTag],
  );

  const handleTagClick = useCallback(
    (tag: string) => {
      setSelectedTag((prev) => (prev === tag ? null : tag));
    },
    [],
  );

  const handleClear = useCallback(() => {
    setQuery('');
    setSelectedTag(null);
  }, []);

  const hasActiveFilters = query !== '' || selectedTag !== null;

  return (
    <section aria-label="Article listing">
      {/* Search */}
      <div className="mb-4">
        <label htmlFor="article-search" className="mb-1 block  font-medium">
          Search articles
        </label>
        <input
          id="article-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter by title, summary, or tag…"
          className="w-full rounded border border-gray-300 px-3 py-2  focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Tags */}
      <div className="mb-6">
        <p className="mb-2  font-medium">Filter by tag</p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Tag filters">
          {allTags.map(([tag, count]) => {
            const isActive = selectedTag === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagClick(tag)}
                aria-pressed={isActive}
                className={`rounded-full border px-3 py-1  font-medium transition-colors ${
                  isActive
                    ? 'border-blue-600 bg-blue-600 text-white'
                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tag}
                <span className="ml-1 opacity-70">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Clear */}
      {hasActiveFilters && (
        <button
          type="button"
          onClick={handleClear}
          className="mb-4  text-blue-600 underline underline-offset-2 hover:text-blue-800"
        >
          Clear filters
        </button>
      )}

      {/* Results */}
      {filtered.length === 0 ? (
        <p className="py-8 text-center  text-gray-500">
          No articles match your filters.
        </p>
      ) : (
        <ul className="space-y-4">
          {filtered.map((article) => (
            <li key={article.slug} className="rounded border border-gray-200 p-4">
              <h3 className="text-base font-semibold">{article.title}</h3>
              <time dateTime={article.date} className=" text-gray-500">
                {article.date}
              </time>
              <p className="mt-1  text-gray-600">{article.summary}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-gray-100 px-2 py-0.5  text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
