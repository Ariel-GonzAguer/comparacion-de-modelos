'use client';

import React, { useState, useMemo } from 'react';
import articles from '../../lib/000/articles-codestral-2508';

type Article = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
};

type ArticleListProps = {
  className?: string;
};

const ArticleList: React.FC<ArticleListProps> = ({ className = '' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Map<string, number>();
    articles.forEach(article => {
      article.tags.forEach(tag => {
        tags.set(tag, (tags.get(tag) || 0) + 1);
      });
    });
    return Array.from(tags.entries()).sort((a, b) => b[1] - a[1]);
  }, []);

  const filteredArticles = useMemo(() => {
    return articles
      .filter(article => {
        if (activeTag && !article.tags.includes(activeTag)) {
          return false;
        }
        if (searchTerm) {
          const searchLower = searchTerm.toLowerCase();
          return (
            article.title.toLowerCase().includes(searchLower) ||
            article.summary.toLowerCase().includes(searchLower) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchLower))
          );
        }
        return true;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [searchTerm, activeTag]);

  const handleTagClick = (tag: string) => {
    setActiveTag(activeTag === tag ? null : tag);
    setSearchTerm('');
  };

  const handleClear = () => {
    setSearchTerm('');
    setActiveTag(null);
  };

  return (
    <div className={`article-list ${className}`}>
      <div className="search-controls">
        <label htmlFor="search-input" className="sr-only">
          Buscar artículos
        </label>
        <input
          id="search-input"
          type="text"
          placeholder="Buscar por título, resumen o tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="tag-filters">
          {allTags.map(([tag, count]) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              aria-pressed={activeTag === tag}
              className={`tag-button ${activeTag === tag ? 'active' : ''}`}
            >
              {tag} ({count})
            </button>
          ))}
        </div>
        <button
          onClick={handleClear}
          disabled={!searchTerm && !activeTag}
          className="clear-button"
        >
          Limpiar
        </button>
      </div>

      {filteredArticles.length > 0 ? (
        <ul className="article-grid">
          {filteredArticles.map(article => (
            <li key={article.slug} className="article-card">
              <h3 className="article-title">{article.title}</h3>
              <p className="article-date">{new Date(article.date).toLocaleDateString()}</p>
              <p className="article-summary">{article.summary}</p>
              <div className="article-tags">
                {article.tags.map(tag => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-state">
          <p>No se encontraron artículos.</p>
        </div>
      )}
    </div>
  );
};

export default ArticleList;