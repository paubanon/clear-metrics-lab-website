# Development Workflow

This document defines the standard development workflow for ClearMetrics Lab website.

---

## Test-Driven Development (TDD)

### Principle
Write tests before implementation to ensure code correctness and prevent regressions.

### TDD Cycle
1. **Red**: Write a failing test that defines desired behavior
2. **Green**: Write minimal code to make the test pass
3. **Refactor**: Improve code while keeping tests green

### Test Coverage
- **Minimum Coverage**: >80% code coverage
- **Focus Areas**: Business logic, data transformations, API integrations
- **Can Skip**: Simple presentational components, styling

### Testing Tools
- **Unit Tests**: Vitest (for utilities, logic)
- **Component Tests**: React Testing Library (for interactive components)
- **E2E Tests**: Playwright (for critical user flows) - optional for this phase

---

## Task Completion Protocol

### Definition of Done
A task is complete when:
- [ ] All subtasks are checked off
- [ ] Tests are written and passing
- [ ] Code meets style guide standards
- [ ] Test coverage meets threshold (>80%)
- [ ] No console errors or warnings
- [ ] Manual verification successful (see Phase Completion)

### Commit Strategy
**Default**: Commit after each task completion

**Commit Message Format**:
```bash
<type>(<scope>): <subject>

[optional body]

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code restructuring
- `style`: Formatting, design changes
- `docs`: Documentation only
- `test`: Adding tests
- `chore`: Maintenance tasks

**Example**:
```bash
git commit -m "feat(blog): add UV index calculation article

Implements SEO-optimized content targeting 'how to calculate UV index'
keyword. Includes scientific explanation with citations.

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

### Task Summary Storage
**Default**: Git Notes (recommended)

**Usage**:
```bash
# Add notes after task completion
git notes add -m "Task: Add hero animation
Status: Complete
Coverage: 85%
Manual Test: Verified animation timing and easing"
```

**Alternative**: Extended commit message body

---

## Phase Completion Protocol

### Phase Verification Task
Every phase includes a final task:
```markdown
- [ ] Task: Conductor - User Manual Verification '<Phase Name>'
```

### Manual Verification Steps
1. **Build Check**:
   ```bash
   npm run build
   ```
   Verify no build errors or warnings

2. **Local Preview**:
   ```bash
   npm run preview
   ```
   Test functionality in production-like environment

3. **Visual Inspection**:
   - Check responsive design (mobile, tablet, desktop)
   - Verify animations and interactions
   - Test dark/light modes (if applicable)
   - Confirm accessibility (keyboard navigation, screen reader)

4. **Content Validation**:
   - Verify text accuracy and spelling
   - Check image loading and optimization
   - Confirm links work

5. **Performance Check**:
   - Page load time acceptable (<3s on 3G)
   - No layout shifts (CLS)
   - Smooth animations (60fps)

### Phase Completion Checklist
- [ ] All tasks in phase marked complete
- [ ] Manual verification passed
- [ ] No failing tests
- [ ] Coverage threshold met
- [ ] Git commit created for phase
- [ ] Phase marked `[x]` in plan.md

---

## Code Review Checklist

Before marking a task complete, verify:

### Functionality
- [ ] Feature works as specified
- [ ] Edge cases handled
- [ ] Error states handled gracefully

### Code Quality
- [ ] Follows style guides (TypeScript, React, Astro, Formatting)
- [ ] No code duplication
- [ ] Clear variable and function names
- [ ] Complex logic commented

### Testing
- [ ] Tests cover happy path
- [ ] Tests cover edge cases
- [ ] Tests are readable and maintainable

### Performance
- [ ] No unnecessary re-renders (React)
- [ ] Images optimized
- [ ] Minimal JavaScript shipped (Astro islands used appropriately)

### Accessibility
- [ ] Semantic HTML used
- [ ] ARIA labels where needed
- [ ] Keyboard navigable
- [ ] Color contrast sufficient

### Scientific Rigor (ClearMetrics-Specific)
- [ ] Data calculations verified
- [ ] Sources cited where appropriate
- [ ] Accuracy claims substantiated

---

## Track Lifecycle

### 1. Specification Phase
- Define requirements in `spec.md`
- Get approval before planning

### 2. Planning Phase
- Break work into phases and tasks
- Estimate effort
- Identify dependencies

### 3. Implementation Phase
- Follow TDD workflow
- Complete tasks sequentially
- Commit after each task
- Verify at end of each phase

### 4. Completion Phase
- Final manual verification
- Update documentation
- Mark track complete in `tracks.md`

---

## Branching Strategy

### Branch Types
- `main` - Production-ready code
- `feature/<track-id>` - Feature development
- `fix/<track-id>` - Bug fixes

### Workflow
1. Create branch from `main`:
   ```bash
   git checkout -b feature/track-id-shortname
   ```

2. Commit work following task protocol

3. When track complete, merge to `main`:
   ```bash
   git checkout main
   git merge feature/track-id-shortname
   git push origin main
   ```

4. Delete feature branch (optional)

---

## Continuous Integration (Future)

When CI is set up:
- Tests run automatically on push
- Build verification on pull requests
- Coverage reports generated
- Lighthouse performance checks

---

## Exception Handling

### When Tests Can't Be Written
Document reason in task notes:
```markdown
- [x] Task: Add gradient background
  Note: Visual styling, no testable logic
```

### When Coverage Falls Short
If <80% coverage:
1. Identify untested code paths
2. Add tests for critical logic
3. Document why certain code is untested (e.g., third-party lib wrapper)

### When Manual Verification Fails
1. Create new task to fix issue
2. Don't mark phase complete until resolved
3. Document what failed in notes

---

## Quality Standards

All code must meet:
- **Correctness**: Works as specified, no bugs
- **Maintainability**: Clear, well-organized, follows conventions
- **Performance**: Fast load times, smooth interactions
- **Accessibility**: Usable by everyone
- **Scientific Accuracy**: Data and claims are correct (ClearMetrics-specific)

---

*This workflow ensures ClearMetrics Lab website maintains high quality standards while enabling efficient development.*
