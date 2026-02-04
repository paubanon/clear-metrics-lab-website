# Formatting & Code Organization Style Guide

## File Naming

### Components
```
PascalCase.tsx          # React components
PascalCase.astro        # Astro components
```

### Utilities & Helpers
```
camelCase.ts            # Utility functions
kebab-case.ts           # Config files, misc
```

### Content Files
```
kebab-case.mdx          # Blog posts, docs
kebab-case.astro        # Pages
```

### Examples
```
✅ Hero.tsx
✅ GlassCard.tsx
✅ calculateStats.ts
✅ workout-lab.mdx
✅ vitamin-d-tracker.mdx

❌ hero.tsx
❌ glasscard.tsx
❌ CalculateStats.ts
❌ WorkoutLab.mdx
```

## Code Formatting

### Indentation
- **2 spaces** for indentation (no tabs)
- Consistent across all file types

### Line Length
- **Max 100 characters** (soft limit)
- Break long lines for readability

### Quotes
```typescript
// ✅ Double quotes for strings
const message = "Hello world";

// ✅ Single quotes for JSX attributes (if needed, though Prettier uses double)
<div className="card" data-testid="hero-section">

// ✅ Backticks for template literals
const url = `/apps/${slug}`;
```

### Semicolons
```typescript
// ✅ Use semicolons
const value = 42;
return result;

// ❌ Don't omit semicolons
const value = 42
return result
```

### Trailing Commas
```typescript
// ✅ Use trailing commas in multiline structures
const config = {
  title: "App",
  version: "1.0",
  features: [
    "analytics",
    "dark-mode",
  ],
};

// Helps with git diffs and prevents errors
```

## Import Organization

### Order
1. External packages
2. Astro/framework imports
3. Internal absolute imports
4. Relative imports (parent dirs)
5. Relative imports (sibling files)

```typescript
// 1. External packages
import { motion } from "framer-motion";
import { z } from "zod";

// 2. Astro/framework
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

// 3. Internal absolute (if using path aliases)
import { calculateStats } from "@/utils/stats";

// 4. Relative parent
import { MainLayout } from "../../layouts/MainLayout.astro";

// 5. Relative sibling
import { Button } from "./Button";
import { GlassCard } from "./GlassCard";
```

### Grouping
Separate groups with blank lines:

```typescript
import { motion } from "framer-motion";
import { useState } from "react";

import type { AppData } from "astro:content";

import { Hero } from "../sections/Hero";
```

## Exports

### Named Exports (Preferred)
```typescript
// ✅ Preferred - clear at import site
export function Button() {...}
export function Card() {...}

// Usage
import { Button, Card } from "./components";
```

### Default Exports (Layouts Only)
```typescript
// ✅ Okay for layouts
export default function MainLayout() {...}

// Usage
import MainLayout from "./MainLayout.astro";
```

## Comments

### When to Comment

**Do comment:**
- Complex algorithms or business logic
- Non-obvious code patterns
- Scientific calculations with formulas
- Workarounds for browser/framework bugs

**Don't comment:**
- Obvious code (let code speak for itself)
- Outdated information (remove or update)
- Commented-out code (delete it, git has history)

### Comment Style

```typescript
// Single-line comment

/**
 * Multi-line comment for functions
 * Explains purpose, params, and return value
 */
function calculateUVIndex(
  latitude: number,
  solarZenith: number
): number {
  // Erythema action spectrum integration
  // Formula from McKinlay & Diffey (1987)
  const erythemalWeight = Math.exp(-0.094 * solarZenith);

  return baseRadiation * erythemalWeight;
}
```

### JSDoc (For Public APIs)
```typescript
/**
 * Calculates Max, Average, and Min from a dataset
 *
 * @param data - Array of numeric measurements
 * @returns Statistics object with max, avg, min
 *
 * @example
 * const stats = calculateStats([93, 105, 100, 105]);
 * // { max: 105, avg: 100.75, min: 93 }
 */
export function calculateStats(data: number[]): Stats {
  ...
}
```

## Prettier Configuration

Use Prettier for automatic formatting:

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "plugins": ["prettier-plugin-astro"]
}
```

## ESLint Rules

Enforce code quality:

```json
// .eslintrc.json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "no-console": "warn",
    "no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "react/prop-types": "off"
  }
}
```

## File Organization

### Directory Structure
```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── sections/        # Page-specific sections
│   └── layouts/         # Layout components
├── content/
│   ├── apps/           # App content
│   ├── blog/           # Blog posts
│   ├── docs/           # Documentation
│   └── config.ts       # Content schemas
├── pages/              # Route pages
├── styles/             # Global styles
└── utils/              # Utility functions
```

### Component File Structure
```typescript
// 1. Imports (organized by category)
// 2. Type definitions
// 3. Constants (if any)
// 4. Helper functions (internal to file)
// 5. Main component
// 6. Exports
```

## Git

### Commit Messages
```bash
# Format: <type>(<scope>): <subject>

feat(blog): add UV index article
fix(hero): correct animation timing
docs(readme): update setup instructions
style(card): adjust glass effect opacity
refactor(stats): extract calculation logic
test(chart): add unit tests for data viz
```

### Branch Naming
```bash
feature/add-search
fix/hero-animation
refactor/type-definitions
docs/api-guide
```

## Avoid

- Don't mix tabs and spaces
- Don't leave trailing whitespace
- Don't use inconsistent naming conventions
- Don't commit console.log statements
- Don't commit commented-out code
- Don't have files with multiple blank lines in a row

---

*Consistent formatting and organization make the codebase easier to navigate and maintain, supporting team efficiency.*
