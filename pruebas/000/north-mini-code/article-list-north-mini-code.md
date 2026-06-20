# Article listing and filtering feature

I've implemented the article listing and filtering feature. Here's what was created:

## Files Created

1. `articles.ts` - Contains the `Article` type definition and example data
2. `ArticleList.tsx` - Main React component with filtering, search, and accessibility features
3. `ArticleList.css` - Minimal styling with responsive design

## Technical Decisions

- Client-side filtering: Uses `useMemo` to efficiently filter and sort articles only when search/tag changes
- Accessibility: Proper ARIA labels, `aria-pressed` for tag buttons, keyboard navigation support
- TypeScript: Full type safety with proper interfaces and `React.FC`
- No external libraries: Pure React with built-in browser APIs
- Responsive design: Mobile-friendly grid layout and touch-friendly buttons

## Key Features

- Articles sorted by date (newest first)
- Search across title, summary, and tags
- Tag filtering with active state indication
- Clear all filters button
- Empty state with helpful messaging
- Keyboard navigation (Enter key support)

## Limitations & Future Improvements

- Pagination: Currently loads all articles at once
- Debounced search: Search triggers on every keystroke
- Server-side filtering: Could be optimized with server-side filtering for large datasets
- Advanced search: Could add fuzzy matching or search operators
- Animation: Could add smooth transitions for filter changes
