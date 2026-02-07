# Track Learnings: launch_workout_20260204

Patterns, gotchas, and context discovered during implementation.

## Codebase Patterns (Inherited)

<!-- No patterns yet - this is the first track -->

---

## Task 1.1: Create About Section Component

**Testing Setup**:
- Vitest requires IntersectionObserver mock for Framer Motion components
- Added mock in `src/test/setup.ts` to avoid test failures with ScrollReveal
- React Testing Library v16+ works well with React 19

**Component Patterns**:
- Professional photo uses graceful fallback with onError handler
- Multiple text occurrences require `getAllByText` instead of `getByText` in tests
- ScrollReveal direction="left" used consistently for right-side content animations
- Glass morphism cards maintain consistency with existing design system

**Content Strategy**:
- PhD background emphasizes first principles thinking and scientific authority
- Enso Movers connects academic rigor to practical fitness application
- Biography structure: academic credentials → practical experience → mission/philosophy
- CTA links to #contact anchor for smooth UX flow

---

## Task 1.3: Implement Contact Form Backend Integration

**Form Design**:
- App Interest dropdown added with 4 options: General Inquiry, Workout Lab, Vitamin D Tracker, Other
- Default value "General Inquiry" provides good UX without requiring user selection
- Select element uses same inputStyles as other fields for consistency

**Testing Patterns**:
- userEvent.selectOptions() for dropdown testing
- Mock fetch globally in beforeEach for consistent test setup
- waitFor() required for async state updates after form submission
- Test duplicate submission by checking fetch call count during loading state

**State Management**:
- Prevent duplicate submissions via disabled state during loading
- Success state auto-resets after 3 seconds for better UX
- Form data clears on success to prevent accidental resubmission
- Error messages stored in separate state for display control

---

## Task 1.4: Enhance Contact Form Accessibility

**ARIA Best Practices**:
- Use role="alert" with aria-live="assertive" for error messages (high priority)
- Use role="status" with aria-live="polite" for success messages (low priority)
- Add aria-required="true" to required fields for screen readers
- Provide descriptive aria-label attributes for all inputs
- Mark decorative icons with aria-hidden="true" to avoid confusion

**Form Accessibility Patterns**:
- Visual required indicators (*) should have aria-label="required"
- Submit button needs contextual aria-label based on form state
- Name attributes required for proper form submission
- Semantic HTML (textbox, combobox roles) provides better accessibility than generic divs

**Testing Updates**:
- Use role-based queries (getByRole) instead of getByLabelText for more robust tests
- Role-based queries work better with ARIA-enhanced components
- Queries like `getByRole("textbox", { name: /your message/i })` are more specific than `getByLabelText(/message/i)`

---

## Task 1.5: Review and Update Website Copy

**Brand Voice Alignment**:
- Replace craft-focused language ("Crafting beautiful") with evidence-based messaging
- Emphasize scientific rigor and data analysis in all copy
- Avoid generic agency language ("From concept to App Store")
- Use specific, confident claims grounded in methodology

**Hero Section Updates**:
- Changed headline from generic "Building the next generation of apps" to scientific "Science-backed mobile tools for better living"
- Subheadline now emphasizes evidence-based approaches and problem-solving
- Badge simplified to just "ClearMetrics Lab" for stronger brand focus

**Contact Section Updates**:
- Replaced casual tone with professional, authoritative voice
- Emphasized methodologies while maintaining welcoming approach
- Aligned with Expert & Trustworthy brand voice
