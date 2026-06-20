'use client';

import React, { useState, useMemo } from 'react';
import { articles } from '../lib/articles-north-mini-code';
import '../styles/ArticleList-north-mini-code.css';

type ArticleListProps = {
  className?: string;
};

const ArticleList: React.FC<ArticleListProps> = ({ className }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tagCounts: Record<string, number> = {};
    articles.forEach(article => {
      article.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });
    return Object.entries(tagCounts).sort(([a], [b]) => a.localeCompare(b));
  }, []);

  const filteredArticles = useMemo(() => {
    return articles
      .filter(article => {
        const matchesSearch =
          searchTerm === '' ||
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesTag =
          selectedTag === null || article.tags.includes(selectedTag);

        return matchesSearch && matchesTag;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [searchTerm, selectedTag]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTag(null);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <div className={`article-list ${className || ''}`.trim()}>
      <div className="article-list__controls">
        <div className="article-list__search-wrapper">
          <label htmlFor="article-search" className="article-list__label">
            Search articles
          </label>
          <input
            id="article-search"
            type="search"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            placeholder="Search by title, summary, or tags..."
            className="article-list__input"
            aria-label="Search articles"
          />
        </div>

        {selectedTag && (
          <button
            onClick={clearFilters}
            className="article-list__clear-button"
            aria-label="Clear all filters"
          >
            Clear filters
          </button>
        )}
      </div>

      {allTags.length > 0 && (
        <div className="article-list__tags">
          <span className="article-list__tags-label">Filter by tag:</span>
          {allTags.map(([tag, count]) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`article-list__tag-button ${selectedTag === tag ? 'article-list__tag-button--active' : ''}`.trim()}
              aria-pressed={selectedTag === tag}
              aria-label={`${selectedTag === tag ? 'Active filter for' : 'Filter by'} tag: ${tag} (${count} articles)`}
            >
              {tag} ({count})
            </button>
          ))}
        </div>
      )}

      {filteredArticles.length > 0 ? (
        <div className="article-list__grid">
          {filteredArticles.map(article => (
            <article key={article.slug} className="article-list__card">
              <h2 className="article-list__title">
                <a href={`/${article.slug}`} className="article-list__link">
                  {article.title}
                </a>
              </h2>
              <p className="article-list__summary">{article.summary}</p>
              <div className="article-list__meta">
                <time dateTime={article.date} className="article-list__date">
                  {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </time>
                <div className="article-list__tags-list">
                  {article.tags.map(tag => (
                    <span key={tag} className="article-list__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="article-list__empty">
          <h3 className="article-list__empty-title">No articles found</h3>
          <p className="article-list__empty-message">
            {searchTerm || selectedTag
              ? 'Try adjusting your search or filter criteria.'
              : 'No articles available at the moment.'}
          </p>
          {(searchTerm || selectedTag) && (
            <button onClick={clearFilters} className="article-list__empty-button">
              Clear all filters
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ArticleList;