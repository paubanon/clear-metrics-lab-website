# Astro Style Guide

## File Structure

### Pages
```
src/pages/
├── index.astro           # Homepage (/)
├── apps/
│   └── [slug].astro     # Dynamic app pages (/apps/workout-lab)
├── blog/
│   └── [slug].astro     # Blog posts (/blog/post-title)
└── docs/
    └── [slug].astro     # Documentation (/docs/getting-started)
```

### Components
```
src/components/
├── ui/                   # Reusable components
│   └── Button.tsx
├── sections/             # Page sections (React islands)
│   └── Hero.tsx
└── layouts/
    └── MainLayout.astro  # Page layouts
```

### Content Collections
```
src/content/
├── config.ts             # Collection schemas
├── apps/
│   └── workout-lab.mdx
├── blog/
│   └── post-title.mdx
├── docs/
│   └── guide.mdx
└── legal/
    └── privacy.mdx
```

## Astro Components

### File Extension
- Use `.astro` for Astro components
- Use `.tsx` for React components

### Component Anatomy
```astro
---
// 1. Imports
import MainLayout from "../layouts/MainLayout.astro";
import { getCollection } from "astro:content";

// 2. TypeScript logic
const apps = await getCollection("apps");

// 3. Props interface (if needed)
interface Props {
  title: string;
}

const { title } = Astro.props;
---

<!-- 4. Template -->
<MainLayout title={title}>
  <h1>{title}</h1>
  {apps.map(app => (
    <div>{app.data.title}</div>
  ))}
</MainLayout>

<!-- 5. Styles (scoped) -->
<style>
  h1 {
    color: var(--text-primary);
  }
</style>
```

## Props

### Type Definition
```astro
---
interface Props {
  title: string;
  description?: string;
  featured?: boolean;
}

const { title, description, featured = false } = Astro.props;
---
```

### Validation
Props are not validated at runtime. Use TypeScript for compile-time checks.

## Content Collections

### Schema Definition
```typescript
// src/content/config.ts
import { defineCollection, z } from "astro:content";

const apps = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    icon: z.string(),
    theme: z.object({
      accent: z.string(),
    }),
  }),
});

export const collections = { apps };
```

### Fetching Content
```astro
---
import { getCollection, getEntry } from "astro:content";

// Get all entries
const apps = await getCollection("apps");

// Get single entry
const workoutLab = await getEntry("apps", "workout-lab");

// Filter entries
const featured = await getCollection("apps", ({ data }) => {
  return data.featured === true;
});
---
```

### Rendering Content
```astro
---
const entry = await getEntry("apps", slug);
const { Content } = await entry.render();
---

<article>
  <h1>{entry.data.title}</h1>
  <Content />
</article>
```

## React Integration (Islands)

### Client Directives

```astro
---
import { Hero } from "../components/sections/Hero";
---

<!-- Load immediately -->
<Hero client:load />

<!-- Load when visible -->
<LazyComponent client:visible />

<!-- Load when browser is idle -->
<DeferredComponent client:idle />

<!-- Load based on media query -->
<MobileComponent client:media="(max-width: 768px)" />

<!-- Only render on client (no SSR) -->
<ClientOnlyComponent client:only="react" />
```

### Passing Props to Islands
```astro
---
const apps = await getCollection("apps");
const appsData = apps.map(app => ({
  slug: app.slug,
  title: app.data.title,
}));
---

<!-- Props must be serializable (no functions) -->
<AppsGrid apps={appsData} client:load />
```

## Layouts

### Layout Component
```astro
---
// src/layouts/MainLayout.astro
interface Props {
  title: string;
  description?: string;
}

const { title, description = "Default description" } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{title}</title>
  <meta name="description" content={description}>
</head>
<body>
  <slot />
</body>
</html>
```

### Using Layouts
```astro
---
import MainLayout from "../layouts/MainLayout.astro";
---

<MainLayout title="Page Title">
  <h1>Content goes here</h1>
</MainLayout>
```

## Dynamic Routes

### File Naming
```
src/pages/apps/[slug].astro
```

### Get Static Paths
```astro
---
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const apps = await getCollection("apps");

  return apps.map(app => ({
    params: { slug: app.slug },
    props: { app },
  }));
}

const { app } = Astro.props;
---

<h1>{app.data.title}</h1>
```

## Environment Variables

### Access in Components
```astro
---
// Public variables (exposed to client)
const webhookUrl = import.meta.env.PUBLIC_CONTACT_WEBHOOK;

// Private variables (server-only)
const apiKey = import.meta.env.API_KEY;
---

<!-- Only pass PUBLIC_ vars to client components -->
<ContactForm webhookUrl={webhookUrl} client:load />
```

### .env File
```bash
PUBLIC_CONTACT_WEBHOOK=https://webhook.site/...
API_KEY=secret_key_here
```

## CSS & Styling

### Scoped Styles
```astro
<div class="card">
  Content
</div>

<style>
  /* Scoped to this component only */
  .card {
    padding: 1rem;
    border-radius: 0.5rem;
  }
</style>
```

### Global Styles
```astro
<style is:global>
  /* Applied globally */
  body {
    font-family: system-ui;
  }
</style>
```

### Tailwind (Preferred)
```astro
<!-- Use Tailwind utility classes -->
<div class="px-4 py-2 rounded-lg bg-white/10">
  Content
</div>
```

## Build Optimization

### Images
```astro
---
import { Image } from "astro:assets";
import heroImage from "../assets/hero.png";
---

<!-- Optimized image -->
<Image src={heroImage} alt="Hero" width={800} height={600} />
```

### Markdown/MDX
```astro
---
const { Content } = await entry.render();
---

<!-- Renders optimized HTML from markdown -->
<Content />
```

## Frontmatter

### Page Metadata
```astro
---
// This runs at build time
const title = "ClearMetrics Lab";
const apps = await getCollection("apps");

// Can use any Node.js APIs here
import fs from "fs";
---
```

## Avoid

- Don't use `client:load` on every component (increases JS bundle)
- Don't pass functions as props to islands (not serializable)
- Don't use client-side routing (Astro is MPA by default)
- Don't fetch data in React components (fetch in Astro frontmatter)
- Don't import CSS in React components (use Tailwind or Astro styles)

## Performance Best Practices

1. **Minimize JavaScript:** Only hydrate interactive components
2. **Fetch at Build Time:** Use `getCollection` in frontmatter, not client-side
3. **Optimize Images:** Use Astro's Image component
4. **Lazy Load:** Use `client:visible` for below-fold components
5. **Static First:** Generate static pages, add interactivity only where needed

---

*Astro enables ClearMetrics Lab to ship minimal JavaScript while maintaining rich interactivity where it matters.*
