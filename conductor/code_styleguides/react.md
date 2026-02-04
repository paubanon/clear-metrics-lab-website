# React Style Guide

## Component Structure

### File Organization
```
src/components/
├── ui/              # Reusable UI components
│   ├── Button.tsx
│   ├── GlassCard.tsx
│   └── ScrollReveal.tsx
└── sections/        # Page-specific sections
    ├── Hero.tsx
    ├── AppsGrid.tsx
    └── Contact.tsx
```

### Component Anatomy
```typescript
// 1. Imports
import { motion } from "framer-motion";
import type { ComponentProps } from "react";

// 2. Types
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

// 3. Component
export function Button({ variant = 'primary', children, onClick }: ButtonProps) {
  // 4. Hooks
  const [isPressed, setIsPressed] = useState(false);

  // 5. Handlers
  const handleClick = () => {
    setIsPressed(true);
    onClick?.();
  };

  // 6. Render
  return (
    <button onClick={handleClick} className={...}>
      {children}
    </button>
  );
}
```

## Naming Conventions

### Components
```typescript
// PascalCase for components
export function GlassCard() {...}
export function AppsGrid() {...}

// Files match component name
// GlassCard.tsx exports GlassCard
```

### Props
```typescript
// Interface name = ComponentName + Props
interface GlassCardProps {...}

// Boolean props prefixed with is/has/should
interface CardProps {
  isActive?: boolean;
  hasGlow?: boolean;
  shouldAnimate?: boolean;
}
```

### Handlers
```typescript
// Prefix with handle + EventName
const handleClick = () => {...};
const handleSubmit = () => {...};
const handleMouseEnter = () => {...};

// Pass to children with on + EventName
<Button onClick={handleClick} />
```

## Props

### Destructure Props
```typescript
// ✅ Good
export function Card({ title, description, theme }: CardProps) {
  return <div>...</div>;
}

// ❌ Avoid
export function Card(props: CardProps) {
  return <div>{props.title}</div>;
}
```

### Default Props
```typescript
// Use default parameters
export function Button({ variant = 'primary', size = 'md' }: ButtonProps) {
  ...
}
```

### Children
```typescript
// Use React.ReactNode for children type
interface CardProps {
  children: React.ReactNode;
}
```

## Hooks

### Order
1. State hooks (`useState`)
2. Effect hooks (`useEffect`)
3. Context hooks (`useContext`)
4. Ref hooks (`useRef`)
5. Custom hooks

```typescript
export function DataChart() {
  const [data, setData] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const chartRef = useRef<HTMLDivElement>(null);

  const { theme } = useAppTheme();

  return <div ref={chartRef}>...</div>;
}
```

### Custom Hooks
```typescript
// Prefix with use
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
```

## State Management

### Prefer useState for Local State
```typescript
const [isOpen, setIsOpen] = useState(false);
const [count, setCount] = useState(0);
```

### Use Functional Updates
```typescript
// ✅ Good - based on previous state
setCount(prev => prev + 1);

// ❌ Avoid - can cause stale closure issues
setCount(count + 1);
```

## Effects

### Dependency Arrays
```typescript
// ✅ Good - all dependencies listed
useEffect(() => {
  fetchData(userId);
}, [userId]);

// ❌ Bad - missing dependency
useEffect(() => {
  fetchData(userId);
}, []); // ESLint will warn
```

### Cleanup
```typescript
useEffect(() => {
  const timer = setInterval(() => {...}, 1000);

  // Always cleanup
  return () => clearInterval(timer);
}, []);
```

## Conditional Rendering

```typescript
// ✅ Good - ternary for two branches
{isLoading ? <Spinner /> : <Content />}

// ✅ Good - && for single branch
{error && <ErrorMessage error={error} />}

// ✅ Good - early return for complex conditions
if (!data) return <Loading />;
return <DataView data={data} />;
```

## Lists & Keys

```typescript
// ✅ Good - stable, unique key
{apps.map(app => (
  <AppCard key={app.slug} app={app} />
))}

// ❌ Bad - index as key (unless list never reorders)
{apps.map((app, i) => (
  <AppCard key={i} app={app} />
))}
```

## Styling with Tailwind

### Class Organization
```typescript
// Group related utilities
<div className="
  relative z-10          {/* positioning */}
  flex items-center      {/* layout */}
  px-6 py-3             {/* spacing */}
  text-white font-medium {/* typography */}
  bg-white/10           {/* background */}
  border border-white/20 {/* borders */}
  rounded-lg            {/* corners */}
  backdrop-blur-sm      {/* effects */}
  transition-all        {/* animations */}
">
```

### Conditional Classes
```typescript
// Use template literals for dynamic classes
<button className={`
  px-4 py-2 rounded-lg
  ${variant === 'primary' ? 'bg-accent text-white' : 'bg-gray-100 text-gray-900'}
  ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}
`}>
```

## Framer Motion

### Animation Variants
```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

<motion.div {...fadeInUp}>
  Content
</motion.div>
```

### Stagger Children
```typescript
const container = {
  animate: {
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

<motion.div variants={container} animate="animate">
  {items.map(item => (
    <motion.div key={item.id} variants={item}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

## Performance

### Memoization
```typescript
// Use React.memo for expensive pure components
export const ExpensiveChart = React.memo(function ExpensiveChart({ data }: Props) {
  return <ComplexVisualization data={data} />;
});

// Use useMemo for expensive calculations
const stats = useMemo(() => {
  return calculateStatistics(largeDataset);
}, [largeDataset]);

// Use useCallback for handler identity
const handleClick = useCallback(() => {
  doSomething(value);
}, [value]);
```

### Lazy Loading
```typescript
// For code splitting (if needed)
const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Loading />}>
  <HeavyComponent />
</Suspense>
```

## Avoid

- Don't mutate state directly
- Don't use index as key for dynamic lists
- Don't forget dependency arrays in hooks
- Don't use nested ternaries (extract to variables or components)
- Don't create components inside components

---

*React components should be clean, performant, and maintainable, reflecting ClearMetrics Lab's premium quality standards.*
