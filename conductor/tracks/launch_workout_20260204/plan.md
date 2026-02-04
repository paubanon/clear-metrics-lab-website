# Implementation Plan: Website Launch & Workout Lab Deployment

---

## Phase 1: Website Foundation

### Task 1.1: Create About Section Component
- [ ] Write tests for About section component
- [ ] Create About.tsx component with proper structure
- [ ] Add content (PhD background, Enso Movers, personal mission)
- [ ] Add professional photo placeholder/integration
- [ ] Apply ClearMetrics design system (cards, typography)
- [ ] Implement responsive design (mobile, tablet, desktop)
- [ ] Add CTA to apps or contact form
- [ ] Manual test: Visual verification, mobile responsiveness

### Task 1.2: Integrate About Section into Homepage
- [ ] Update index.astro to include About section
- [ ] Position appropriately in page flow
- [ ] Configure client directive (client:load or client:visible)
- [ ] Test section renders correctly
- [ ] Verify animations and scroll behavior
- [ ] Manual test: Full page flow with About section

### Task 1.3: Implement Contact Form Backend Integration
- [ ] Read existing ContactForm.tsx component
- [ ] Update form fields: name, email, appInterest (dropdown), message
- [ ] Add client-side validation (required fields, email format)
- [ ] Implement N8N webhook submission
- [ ] Add success/error state handling
- [ ] Add loading state during submission
- [ ] Prevent duplicate submissions
- [ ] Clear form on success
- [ ] Manual test: Submit form, verify N8N receives data, test error states

### Task 1.4: Enhance Contact Form Accessibility
- [ ] Add ARIA labels to all form fields
- [ ] Ensure keyboard navigation works
- [ ] Add error announcements for screen readers
- [ ] Test with keyboard only (no mouse)
- [ ] Verify focus states visible
- [ ] Check color contrast for labels/errors
- [ ] Manual test: Accessibility audit (Lighthouse, axe DevTools)

### Task 1.5: Review and Update Website Copy
- [ ] Read current homepage hero text
- [ ] Revise hero copy to match scientific, authoritative voice
- [ ] Update apps grid descriptions
- [ ] Review About section copy for brand alignment
- [ ] Remove any placeholder text
- [ ] Ensure consistent tone across all sections
- [ ] Manual test: Read through entire site, verify voice consistency

### Task 1.6: Conductor - User Manual Verification 'Website Foundation'
- [ ] Run `npm run build` - verify no errors
- [ ] Run `npm run preview` - test production build
- [ ] Test About section on mobile, tablet, desktop
- [ ] Submit test contact form, verify receipt
- [ ] Check all copy for spelling and brand voice
- [ ] Verify keyboard navigation and accessibility
- [ ] Check responsive design across breakpoints
- [ ] Lighthouse audit: Performance, Accessibility, SEO >90

---

## Phase 2: Workout Lab Landing Page Structure

### Task 2.1: Create Workout Lab Page Route
- [ ] Create src/pages/apps/workout-lab/index.astro
- [ ] Set up basic page structure with MainLayout
- [ ] Add SEO metadata (title, description, Open Graph)
- [ ] Configure meta tags for social sharing
- [ ] Test page loads at /apps/workout-lab
- [ ] Manual test: View source, verify metadata

### Task 2.2: Create Hero Section Component
- [ ] Create WorkoutLabHero.tsx component
- [ ] Implement headline: "Ultimate Flexible Workout Tracker for Serious Athletes"
- [ ] Add subheadline with value proposition
- [ ] Add screenshot/hero image placeholder
- [ ] Implement primary CTA (Download buttons: Google Play)
- [ ] Add secondary CTA (scroll to features)
- [ ] Apply Workout Lab theme (emerald green accents, gradients)
- [ ] Add smooth animations (Framer Motion)
- [ ] Manual test: Hero section renders, CTAs work, theme applied

### Task 2.3: Create Features Section - Supersets & Editing
- [ ] Create FeaturesSection.tsx component
- [ ] Implement "⚡ Unmatched Flow" feature card
- [ ] Add content: seamless supersets, edit on-the-fly
- [ ] Add screenshot placeholder (superset interface)
- [ ] Apply glass morphism card design
- [ ] Add feature icon (Lucide React)
- [ ] Manual test: Feature renders correctly, responsive

### Task 2.4: Create Features Section - Flexible Logging
- [ ] Add "🚀 Log Any Exercise, Any Way" feature card
- [ ] List all exercise types (strength, cardio, mobility, strongman)
- [ ] Add screenshot placeholder (exercise logging modes)
- [ ] Format as bullet list or grid
- [ ] Manual test: Content clear, visually appealing

### Task 2.5: Create Features Section - Data Analysis
- [ ] Add "📈 Data Analysis & Predictive Metrics" feature card
- [ ] Highlight: 1RM evolution, consistency, volume/intensity
- [ ] Add screenshot placeholder (analysis charts)
- [ ] Emphasize "laboratory-style" data visualization
- [ ] Manual test: Matches ClearMetrics data viz style

### Task 2.6: Create Features Section - Goal Algorithm (Standout)
- [ ] Add "🎯 Proprietary Goal Algorithm" feature card
- [ ] Emphasize this as standout feature
- [ ] Explain multi-metric goals, real-time progress, delta of improvement
- [ ] Add screenshot placeholder (goal progress tracking)
- [ ] Use prominent visual treatment (larger card, accent color)
- [ ] Manual test: Feature prominently displayed, compelling copy

### Task 2.7: Create Features Section - Essential Features
- [ ] Add "🛠️ Essential Features" section
- [ ] List: dark mode, offline, smart bodyweight, notes, timer/tempo
- [ ] Use icon grid or compact list
- [ ] Add relevant icons (Lucide React)
- [ ] Manual test: All features listed clearly

### Task 2.8: Create Behavioral Science Section
- [ ] Create BehavioralScience.tsx component or subsection
- [ ] Add content: "Quantifying behavior is key to changing it"
- [ ] Explain data-backed pathway to goals
- [ ] Highlight feedback loop for sustainable improvement
- [ ] Apply design emphasis (quote style, highlighted card)
- [ ] Manual test: Section conveys scientific foundation

### Task 2.9: Create Use Cases Section
- [ ] Create UseCases.tsx component
- [ ] List use cases: strength athletes, CrossFit, calisthenics, powerlifting
- [ ] Use cards or icon list
- [ ] Add brief description for each
- [ ] Manual test: Use cases clear and relatable

### Task 2.10: Create Screenshots Gallery
- [ ] Create ScreenshotsGallery.tsx component
- [ ] Add placeholders for 5-6 key screenshots:
  - Analysis charts (Max/Avg/Min, dual Y-axis)
  - Superset logging
  - Goal progress with delta
  - Exercise variety
  - Dark mode example
- [ ] Implement carousel or grid layout
- [ ] Optimize images for web (when real screenshots available)
- [ ] Add captions/labels
- [ ] Manual test: Gallery navigable, images load quickly

### Task 2.11: Add Download CTAs
- [ ] Create prominent download section
- [ ] Add Google Play button (official asset)
- [ ] Add App Store button placeholder (if applicable)
- [ ] Style with emerald green theme
- [ ] Add hover/focus states
- [ ] Link to store pages (real or placeholder)
- [ ] Manual test: Buttons prominent, links work

### Task 2.12: Integrate All Sections into Workout Lab Page
- [ ] Import all section components into index.astro
- [ ] Arrange in logical order (Hero → Features → Science → Use Cases → Gallery → CTAs)
- [ ] Configure client directives appropriately
- [ ] Test full page flow
- [ ] Verify animations and scroll behavior
- [ ] Manual test: Full page experience, smooth transitions

### Task 2.13: Apply Workout Lab Theme Throughout Page
- [ ] Audit all components for theme consistency
- [ ] Apply emerald green (#10B981) accents
- [ ] Implement blue-to-green gradients on CTAs
- [ ] Verify glass morphism cards used consistently
- [ ] Check typography matches design system
- [ ] Manual test: Page feels cohesive, theme recognizable

### Task 2.14: Optimize Landing Page Performance
- [ ] Lazy load images below fold
- [ ] Use client:visible for non-critical sections
- [ ] Optimize image sizes and formats
- [ ] Minimize JavaScript bundle
- [ ] Test load time on 3G connection
- [ ] Manual test: Lighthouse performance score >90

### Task 2.15: Conductor - User Manual Verification 'Workout Lab Landing Page'
- [ ] Run `npm run build` - verify no errors
- [ ] Run `npm run preview` - test production build
- [ ] Test landing page on mobile, tablet, desktop
- [ ] Verify all features sections render correctly
- [ ] Check proprietary goal algorithm is prominent
- [ ] Test download CTAs (links work)
- [ ] Verify Workout Lab theme (emerald green) applied
- [ ] Check screenshots gallery navigable
- [ ] Lighthouse audit: Performance, Accessibility, SEO >90
- [ ] Verify responsive design and animations

---

## Phase 3: Workout Lab Documentation

### Task 3.1: Create Documentation Page Structure
- [ ] Create src/pages/apps/workout-lab/docs/index.astro
- [ ] Set up documentation layout with sidebar navigation
- [ ] Add breadcrumbs (Home > Workout Lab > Docs)
- [ ] Configure SEO metadata
- [ ] Test page loads at /apps/workout-lab/docs
- [ ] Manual test: Navigation works, layout clean

### Task 3.2: Create Getting Started Guide
- [ ] Create getting-started.mdx in appropriate location
- [ ] Write content:
  - Download and installation (Google Play link)
  - First workout setup
  - Understanding the interface
  - Creating first routine
  - Logging first exercise
- [ ] Add screenshots with annotations
- [ ] Add step-by-step numbered instructions
- [ ] Manual test: Instructions clear, screenshots helpful

### Task 3.3: Create Features Guide - Workout Logging
- [ ] Create workout-logging.mdx
- [ ] Document:
  - Creating workouts
  - Logging different exercise types
  - Creating and managing supersets
  - Editing workouts mid-session
  - Using rest timer and tempo tracking
- [ ] Add screenshots for each feature
- [ ] Manual test: Guide comprehensive, easy to follow

### Task 3.4: Create Features Guide - Progress Tracking
- [ ] Create progress-tracking.mdx
- [ ] Document:
  - Understanding Analysis view
  - Reading charts (Max/Avg/Min, dual Y-axis)
  - 1RM calculations and evolution
  - Volume and intensity metrics
  - Consistency tracking
- [ ] Add annotated chart screenshots
- [ ] Manual test: Users can interpret charts after reading

### Task 3.5: Create Features Guide - Goal System
- [ ] Create goal-system.mdx
- [ ] Document:
  - Creating multi-metric goals
  - Understanding goal completion percentage
  - Interpreting delta of improvement
  - Best practices for goal setting
- [ ] Add screenshots of goal interface
- [ ] Include examples of good goals
- [ ] Manual test: Goal system clear, actionable

### Task 3.6: Create Features Guide - Advanced Features
- [ ] Create advanced-features.mdx
- [ ] Document:
  - Smart bodyweight calculations
  - Adding detailed notes to sets
  - Offline functionality and sync (Powersync)
  - Dark mode
  - Data export (if available)
- [ ] Add relevant screenshots
- [ ] Manual test: Advanced features documented

### Task 3.7: Create Scientific Basis Section
- [ ] Create scientific-basis.mdx
- [ ] Document:
  - Progressive Overload: how app tracks systematic progression
  - 1RM Calculations: formulas (Epley, Brzycki, etc.)
  - Goal Algorithm: technical explanation of scoring system
  - Behavioral Psychology: how quantifying behavior drives change
- [ ] Add mathematical formulas (MathJax or code blocks)
- [ ] Cite research sources where applicable
- [ ] Manual test: Scientific explanations accurate, credible

### Task 3.8: Create FAQ Page
- [ ] Create faq.mdx
- [ ] Add common questions:
  - Data privacy and GDPR compliance
  - Offline vs. online functionality
  - Troubleshooting sync issues
  - Exercise library and custom exercises
  - Exporting data
  - Account management
- [ ] Format as accordion or simple Q&A list
- [ ] Link to privacy policy where relevant
- [ ] Manual test: FAQ answers common user questions

### Task 3.9: Implement Documentation Sidebar Navigation
- [ ] Create DocsNav.tsx component
- [ ] List all documentation pages with links
- [ ] Highlight active page
- [ ] Ensure keyboard navigable
- [ ] Make collapsible on mobile
- [ ] Manual test: Navigation intuitive, all links work

### Task 3.10: Add Search to Documentation (Optional for v1)
- [ ] Evaluate if search needed for v1 (defer if time-constrained)
- [ ] If implementing: use client-side search (e.g., Pagefind)
- [ ] Index all documentation pages
- [ ] Add search input to docs layout
- [ ] Manual test: Search returns relevant results

### Task 3.11: Link Documentation from Landing Page
- [ ] Add "Documentation" link to Workout Lab landing page
- [ ] Add "Read the Docs" CTA in features section
- [ ] Ensure link prominent and discoverable
- [ ] Manual test: Users can easily find docs from landing page

### Task 3.12: Conductor - User Manual Verification 'Workout Lab Documentation'
- [ ] Run `npm run build` - verify no errors
- [ ] Run `npm run preview` - test production build
- [ ] Navigate through all documentation pages
- [ ] Verify sidebar navigation works
- [ ] Check screenshots render and are helpful
- [ ] Verify scientific formulas render correctly
- [ ] Test on mobile (sidebar collapsible)
- [ ] Lighthouse audit: Accessibility, SEO >90
- [ ] Ensure links from landing page work

---

## Phase 4: Workout Lab Privacy Policy

### Task 4.1: Draft Privacy Policy Content
- [ ] Research GDPR requirements for fitness apps
- [ ] Draft privacy policy covering:
  - Data collection (workout logs, profile)
  - Data storage (Supabase, Powersync)
  - Data usage and processing
  - Third-party services
  - User rights (access, deletion, portability)
  - Data retention
  - Children's privacy
  - Contact information
- [ ] Ensure GDPR-compliant language
- [ ] Add "Last Updated" date
- [ ] Manual review: Content accurate, complete

### Task 4.2: Create Privacy Policy Page
- [ ] Create src/pages/apps/workout-lab/privacy-policy.astro
- [ ] Format privacy policy content (headings, sections, lists)
- [ ] Add table of contents with anchor links
- [ ] Apply readable typography
- [ ] Add last updated date prominently
- [ ] Manual test: Page readable, easy to navigate

### Task 4.3: Link Privacy Policy from Landing Page and Docs
- [ ] Add privacy policy link to Workout Lab landing page footer
- [ ] Add link in documentation sidebar
- [ ] Add link in FAQ (data privacy question)
- [ ] Ensure link appears in app (if app includes web view)
- [ ] Manual test: Privacy policy easily accessible

### Task 4.4: Legal Review (Recommended)
- [ ] (Optional but recommended) Have privacy policy reviewed by legal professional
- [ ] Make any necessary adjustments based on feedback
- [ ] Document review completion date

### Task 4.5: Conductor - User Manual Verification 'Workout Lab Privacy Policy'
- [ ] Run `npm run build` - verify no errors
- [ ] Read through entire privacy policy
- [ ] Verify GDPR compliance checklist items covered
- [ ] Check Google Play Console requirements met
- [ ] Verify Supabase and Powersync mentioned
- [ ] Test links to privacy policy from all locations
- [ ] Ensure last updated date is current
- [ ] Mobile responsive check

---

## Phase 5: Deployment & Integration

### Task 5.1: Prepare Environment Variables
- [ ] Document all required environment variables:
  - PUBLIC_CONTACT_WEBHOOK (N8N webhook URL)
  - Any other public/private vars
- [ ] Create .env.example file with variable names (no values)
- [ ] Add .env to .gitignore (if not already)
- [ ] Manual test: Build succeeds with env vars

### Task 5.2: Create Vercel Project
- [ ] Sign in to Vercel account
- [ ] Create new project
- [ ] Connect to GitHub repository
- [ ] Configure project settings:
  - Framework: Astro
  - Build command: npm run build
  - Output directory: dist
  - Node.js version: 22.x
- [ ] Manual test: Vercel project created

### Task 5.3: Configure Environment Variables in Vercel
- [ ] Add PUBLIC_CONTACT_WEBHOOK to Vercel env vars
- [ ] Add any other required env vars
- [ ] Set appropriate scopes (Production, Preview, Development)
- [ ] Manual test: Env vars configured correctly

### Task 5.4: Deploy to Vercel
- [ ] Trigger initial deployment
- [ ] Monitor build logs for errors
- [ ] Wait for deployment to complete
- [ ] Verify site accessible at Vercel URL
- [ ] Manual test: Visit deployed site, test functionality

### Task 5.5: Configure Custom Domain (If Applicable)
- [ ] Add custom domain in Vercel settings
- [ ] Configure DNS records (A, CNAME)
- [ ] Verify domain ownership
- [ ] Wait for SSL certificate provisioning
- [ ] Test site at custom domain
- [ ] Manual test: Custom domain works with HTTPS

### Task 5.6: Enable Auto-Deploy from GitHub
- [ ] Verify Vercel GitHub integration active
- [ ] Test: Make commit to main branch
- [ ] Verify Vercel auto-deploys on push
- [ ] Check preview deployments work for PRs
- [ ] Manual test: Auto-deploy pipeline functional

### Task 5.7: Configure Preview Deployments
- [ ] Enable preview deployments for pull requests
- [ ] Test: Create PR, verify preview URL generated
- [ ] Ensure preview deployments have correct env vars
- [ ] Manual test: Preview deployments work

### Task 5.8: Document N8N Blog Integration Requirements
- [ ] Create conductor/n8n-blog-integration.md
- [ ] Document webhook endpoint structure
- [ ] Define expected payload format (JSON schema)
- [ ] Specify authentication method (API key/token)
- [ ] Document file paths and naming conventions
- [ ] Outline Git workflow for N8N:
  - Authenticate with GitHub
  - Create MDX file in src/content/blog/
  - Format frontmatter correctly
  - Commit and push to trigger deploy
- [ ] Add commit message format example
- [ ] Manual review: Documentation clear and actionable

### Task 5.9: Create Placeholder Webhook Endpoint (Optional)
- [ ] (Optional) Create src/pages/api/blog/create.ts serverless function
- [ ] Add basic structure and authentication check
- [ ] Return appropriate responses (success/error)
- [ ] Document that full implementation is future track
- [ ] Manual test: Endpoint responds correctly

### Task 5.10: Final Production Verification
- [ ] Test entire site on production URL
- [ ] Verify all pages load correctly
- [ ] Test contact form submission
- [ ] Test all Workout Lab pages (landing, docs, privacy)
- [ ] Verify download CTAs link correctly
- [ ] Check all images load
- [ ] Test on multiple devices and browsers
- [ ] Run Lighthouse audit on production:
  - Performance >90
  - Accessibility >95
  - SEO >95
  - Best Practices >90
- [ ] Manual test: Full site walkthrough

### Task 5.11: Conductor - User Manual Verification 'Deployment & Integration'
- [ ] Verify Vercel deployment successful
- [ ] Test auto-deploy: push to main, verify redeploy
- [ ] Check environment variables configured
- [ ] Verify custom domain working (if applicable)
- [ ] Test HTTPS enabled and working
- [ ] Verify N8N integration documentation complete
- [ ] Full site test on production URL
- [ ] Performance check: <3s load time on 3G
- [ ] Lighthouse audit: all scores >90
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Mobile device testing (iOS, Android)

---

## Track Completion Checklist

- [ ] All phases completed and verified
- [ ] All acceptance criteria met (see spec.md)
- [ ] Test coverage >80%
- [ ] No console errors or warnings
- [ ] Lighthouse scores meet targets
- [ ] GDPR compliance verified
- [ ] Google Play Console requirements met
- [ ] Production site live and functional
- [ ] Documentation complete

---

## Post-Track Actions

1. Mark track complete in `conductor/tracks.md`: `[x]`
2. Update metadata.json status to "completed"
3. Commit all changes with track summary
4. Archive track (if desired): `/conductor-archive launch_workout_20260204`
5. Ready for next track: Vitamin D Tracker or N8N Blog Automation

---

*This plan follows TDD workflow, commits after each task, and includes manual verification at phase completion as defined in workflow.md*
