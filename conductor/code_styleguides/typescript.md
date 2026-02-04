# TypeScript Style Guide

## Strictness

- Use `strict: true` in tsconfig.json (already enabled)
- No implicit `any` types
- Prefer explicit return types for functions

## Naming Conventions

### Variables & Functions
```typescript
// Use camelCase
const userProfile = {...};
function calculateAverage() {...}

// Boolean variables should be prefixed with is/has/should
const isActive = true;
const hasPermission = false;
```

### Types & Interfaces
```typescript
// Use PascalCase
interface UserData {...}
type ThemeConfig = {...}

// Prefer interfaces for object shapes
interface AppMetadata {
  title: string;
  tagline: string;
  theme: ThemeConfig;
}

// Use type for unions, intersections, primitives
type Status = 'active' | 'inactive' | 'pending';
```

### Constants
```typescript
// Use UPPER_SNAKE_CASE for true constants
const MAX_RETRY_ATTEMPTS = 3;
const API_BASE_URL = 'https://api.example.com';
```

## Type Safety

### Avoid `any`
```typescript
// ❌ Bad
function processData(data: any) {...}

// ✅ Good
function processData(data: UserData) {...}

// ✅ Good (for truly unknown types)
function processData(data: unknown) {
  // Type guard required
  if (isUserData(data)) {...}
}
```

### Use Type Guards
```typescript
function isAppData(data: unknown): data is AppData {
  return (
    typeof data === 'object' &&
    data !== null &&
    'title' in data &&
    'tagline' in data
  );
}
```

### Null Safety
```typescript
// Use optional chaining
const accent = app?.theme?.accent;

// Use nullish coalescing
const title = app.title ?? 'Untitled';
```

## Function Types

### Explicit Return Types
```typescript
// ✅ Good - explicit return type
function calculateStats(data: number[]): Stats {
  return { max, avg, min };
}

// Okay for simple, obvious returns
const double = (n: number) => n * 2;
```

### Async Functions
```typescript
async function fetchAppData(slug: string): Promise<AppData> {
  const response = await fetch(`/api/apps/${slug}`);
  return response.json();
}
```

## Generics

Use generics for reusable, type-safe functions:

```typescript
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

// Usage preserves type
const firstApp = getFirst(apps); // Type: AppData | undefined
```

## Imports

### Order
1. External libraries
2. Internal modules (by distance from root)
3. Types
4. Relative imports

```typescript
// External
import { motion } from "framer-motion";
import { z } from "astro:content";

// Internal
import type { AppData } from "@/types";

// Relative
import { Button } from "../ui/Button";
```

### Type Imports
```typescript
// Use type imports when only importing types
import type { ComponentProps } from "react";
import type { CollectionEntry } from "astro:content";
```

## Utility Types

Leverage TypeScript utility types:

```typescript
// Pick subset of properties
type AppPreview = Pick<AppData, 'title' | 'tagline' | 'icon'>;

// Make all properties optional
type PartialApp = Partial<AppData>;

// Make all properties readonly
type ImmutableApp = Readonly<AppData>;

// Extract union member
type AppSlug = CollectionEntry<'apps'>['slug'];
```

## Zod Integration

For Astro Content Collections, schemas are defined in Zod:

```typescript
import { z } from "astro:content";

const appSchema = z.object({
  title: z.string(),
  tagline: z.string(),
  theme: z.object({
    accent: z.string(), // hex color
  }),
  featured: z.boolean().default(false),
});

// Infer TypeScript type from Zod schema
type AppFrontmatter = z.infer<typeof appSchema>;
```

## Avoid

- Don't use `enum` (use union types instead)
- Don't use `namespace` (use ES modules)
- Don't use `var` (use `const` or `let`)
- Don't disable strictness with `@ts-ignore` (use `@ts-expect-error` with explanation if absolutely necessary)

---

*TypeScript ensures code quality and catches errors early, supporting ClearMetrics Lab's commitment to scientific rigor.*
