# Technology Stack: ClearMetrics Lab Website

## Overview

The ClearMetrics Lab website is built as a modern, performant static site with dynamic islands for interactive components. The stack prioritizes build-time optimization, developer experience, and seamless content management.

---

## Core Framework

### Astro 5.x
**Role:** Static Site Generator (SSG) with island architecture

**Why Astro:**
- **Zero JS by Default:** Ships minimal JavaScript to the client, maximizing performance
- **Island Architecture:** Only hydrates interactive components (React islands)
- **Content Collections:** Type-safe content management for apps, blog, docs, legal pages
- **File-Based Routing:** Pages map directly to routes (`src/pages/`)
- **MDX Support:** Rich content authoring with embedded components

**Key Features Used:**
- Content Collections with Zod schemas
- Client directives (`client:load`) for React components
- Static build output for hosting

---

## UI Layer

### React 19.x
**Role:** Interactive component library

**Why React:**
- **Component Reusability:** Shared UI components across sections
- **Rich Ecosystem:** Access to Framer Motion and other libraries
- **Island Integration:** Works seamlessly with Astro's partial hydration
- **Developer Familiarity:** Well-understood patterns and tooling

**Architecture:**
- Components organized by type: `ui/` (reusable) and `sections/` (page-specific)
- Hydrated selectively via Astro client directives
- TypeScript for type safety

---

## Styling

### Tailwind CSS v4
**Role:** Utility-first CSS framework

**Why Tailwind:**
- **Rapid Development:** Build UI directly in markup
- **Design System Enforcement:** Consistent spacing, colors, typography via config
- **Premium Glass Aesthetic:** Easy implementation of backdrop blur, gradients, shadows
- **Dark Mode Support:** Built-in dark mode utilities
- **Purging:** Removes unused CSS for production builds

**Integration:**
- Via Vite plugin (`@tailwindcss/vite`)
- Custom design tokens for ClearMetrics brand
- Responsive utilities for mobile-first design

---

## Animation & Motion

### Framer Motion 12.x
**Role:** Production-ready animation library

**Why Framer Motion:**
- **Smooth, Polished Animations:** Matches ClearMetrics premium design standards
- **Declarative API:** Easy to read and maintain
- **Performance:** GPU-accelerated transforms
- **Gesture Support:** Interactive animations for enhanced UX

**Usage:**
- Hero section staggered text animation
- Scroll-based reveal effects
- Interactive hover states
- Page transitions

---

## Icons

### Lucide React
**Role:** Icon library

**Why Lucide:**
- **Consistent Stroke Weight:** Matches design system requirements
- **Tree-Shakeable:** Only imports used icons
- **Customizable:** Easy to adjust size and color
- **Active Maintenance:** Regular updates and new icons

**Usage:**
- UI icons (arrows, menu, close)
- App-specific icons referenced by name in content collections

---

## Content Management

### Astro Content Collections
**Role:** Type-safe content authoring system

**Collections:**
1. **Apps** (`src/content/apps/`): App showcase data
2. **Blog** (`src/content/blog/`): SEO-optimized articles
3. **Docs** (`src/content/docs/`): Per-app documentation
4. **Legal** (`src/content/legal/`): Privacy policies, terms

**Benefits:**
- **Type Safety:** Zod schemas validate content at build time
- **Editor Experience:** TypeScript autocomplete for frontmatter
- **Flexibility:** Mix Markdown and MDX as needed
- **Performance:** Content processed at build time, not runtime

---

## Language

### TypeScript
**Role:** Type-safe JavaScript

**Configuration:**
- Extends `astro/tsconfigs/strict` for maximum safety
- JSX transform set to React
- Strict compiler options enabled

**Benefits:**
- Catch errors at compile time
- Better IDE support and autocomplete
- Self-documenting code via types
- Refactoring confidence

---

## Build Tooling

### Vite
**Role:** Build tool and dev server

**Why Vite:**
- **Fast HMR:** Instant feedback during development
- **Modern ESM:** Native ES modules support
- **Plugin Ecosystem:** Tailwind, React, Astro integrations
- **Optimized Builds:** Tree-shaking, code splitting, minification

**Integration:**
- Bundled with Astro
- Tailwind CSS via Vite plugin
- TypeScript compilation

---

## Package Management

### npm
**Role:** Dependency management

**Key Scripts:**
- `npm run dev`: Start development server
- `npm run build`: Production build
- `npm run preview`: Preview production build locally

---

## Hosting & Deployment

**Build Output:** Static HTML/CSS/JS to `dist/` directory

**Deployment Options:**
- Any static host (Vercel, Netlify, Cloudflare Pages, etc.)
- No server-side runtime required
- Optimized for CDN distribution

---

## Content Schema

### Apps Collection
```typescript
{
  title: string,
  tagline: string,
  description: string,
  icon: string, // Lucide icon name
  theme: {
    accent: string, // Hex color
  },
  featured: boolean,
}
```

### Blog Collection
```typescript
{
  title: string,
  description: string,
  pubDate: Date,
  appSlug: string, // Links to app
  tags: string[],
  draft: boolean,
}
```

### Docs Collection
```typescript
{
  title: string,
  description?: string,
  order: number,
  appSlug: string,
}
```

### Legal Collection
```typescript
{
  title: string,
  appSlug: string,
  lastUpdated: Date,
}
```

---

## Development Workflow

1. **Local Development:** `npm run dev` starts Vite dev server at `localhost:4321`
2. **Content Authoring:** Write MDX in `src/content/[collection]/`
3. **Component Development:** Build React components in `src/components/`
4. **Styling:** Use Tailwind utilities inline
5. **Build:** `npm run build` generates static site to `dist/`
6. **Preview:** `npm run preview` to test production build locally

---

## Future Considerations

**Potential Additions:**
- **Image Optimization:** `@astrojs/image` for automatic image processing
- **Sitemap Generation:** `@astrojs/sitemap` for SEO
- **RSS Feed:** For blog subscription
- **Analytics:** Privacy-focused analytics integration
- **Search:** Client-side search for docs/blog (e.g., Pagefind)

---

*This tech stack supports ClearMetrics Lab's requirements for performance, content management, and premium user experience.*
