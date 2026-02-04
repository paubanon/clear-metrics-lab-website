# Specification: Website Launch & Workout Lab Deployment

## Overview

Complete the ClearMetrics Lab website foundation and launch the Workout Lab app with a full-featured landing page, documentation, and privacy policy. This track prepares the website for production deployment and enables Workout Lab to be submitted to Google Play Console.

---

## Objectives

1. **Complete Website Foundation**: Add About section and functional contact form
2. **Content Quality Review**: Improve all website copy to match ClearMetrics brand voice
3. **Launch Workout Lab**: Create comprehensive app landing page with documentation and legal pages
4. **Deploy to Production**: Set up Vercel deployment with GitHub integration
5. **Prepare Blog Automation**: Document N8N webhook requirements for future blog automation

---

## Functional Requirements

### 1. About Section

**Location**: Main website (likely as a section on homepage or dedicated `/about` page)

**Content**:
- **Introduction**: Dr. [Your Name], PhD in Theoretical Physics
- **Academic Background**:
  - Specialized in general relativity, differential geometry, nonlinear dynamics
  - Developed new formalism for GR based on Clifford algebras
  - Expertise in chaotic systems, strong mathematical foundations
  - First principles thinking approach
- **Practical Experience**:
  - Founder of **Enso Movers** (9 years running)
  - Trained hundreds of satisfied customers
  - Teaching movement, training, and body mechanics
- **Personal Mission**:
  - Obsession with learning, data analysis, and human movement
  - Bridging scientific rigor with practical fitness applications
  - Building tools that combine evidence-based approaches with elegant design

**Presentation**:
- Professional photo (headshot)
- Clean, readable typography
- Emphasis on credibility + personal connection to the work
- CTA to apps or contact form

**Acceptance Criteria**:
- [ ] About section reflects scientific authority and personal passion
- [ ] Content matches ClearMetrics brand voice (scientific, authoritative)
- [ ] Section is visually polished and matches design system
- [ ] Mobile responsive

---

### 2. Contact Form

**Location**: Bottom of homepage (existing Contact section)

**Fields**:
1. **Name** (required, text input)
2. **Email** (required, email validation)
3. **App Interest** (optional, dropdown: "General Inquiry", "Workout Lab", "Vitamin D Tracker", "Other")
4. **Message** (required, textarea)

**Submission**:
- Connects to N8N workflow via webhook
- N8N workflow sends email notification
- Success/error states displayed to user
- Form clears on successful submission

**Validation**:
- Client-side validation for required fields
- Email format validation
- Error messages displayed inline
- Prevent duplicate submissions

**Acceptance Criteria**:
- [ ] All fields render correctly with proper labels
- [ ] Form validates input before submission
- [ ] Successfully submits to N8N webhook
- [ ] User receives confirmation message on success
- [ ] Error handling for failed submissions
- [ ] Form is accessible (keyboard navigation, ARIA labels)
- [ ] Mobile responsive

---

### 3. Website Copy Review

**Scope**: Review and improve all existing text on:
- Homepage hero section
- Apps grid section descriptions
- Any placeholder or UI-focused text

**Goals**:
- Match scientific, authoritative brand voice
- Emphasize evidence-based approach
- Clear, concise value propositions
- SEO-friendly without sounding salesy

**Acceptance Criteria**:
- [ ] All text reviewed and revised
- [ ] Copy reflects ClearMetrics brand guidelines
- [ ] No placeholder or lorem ipsum text remains
- [ ] Consistent tone across all pages

---

### 4. Workout Lab Landing Page

**URL**: `/apps/workout-lab`

**Sections**:

#### Hero Section
- **Headline**: "The Ultimate Flexible Workout Tracker for Serious Athletes"
- **Subheadline**: "Data-driven strength training rooted in progressive overload, behavioral psychology, and frictionless usability"
- **Screenshot**: Hero image of app in action (Analysis/Chart view preferred)
- **Primary CTA**: Download buttons (Google Play + App Store if available)
- **Secondary CTA**: "Learn More" scroll to features

#### Core Features

**⚡ Unmatched Flow: Supersets & Editing**
- Seamless supersets, giant sets, and circuits of any complexity
- Edit workouts on-the-fly without breaking flow
- Plans change mid-session? Reorder exercises instantly and intuitively
- Screenshot: Superset interface

**🚀 Log Any Exercise, Any Way**
Advanced logging engine supporting:
- Standard Lifting: Sets, Reps, Load
- Isometrics & Calisthenics: Time-based holds, weighted bodyweight
- Strongman & Functional: Distance + Load + Time (e.g., farmer carries)
- Cardio & Endurance: Distance, pace, duration
- Mobility: Range of motion and flexibility
- Screenshot: Exercise logging interface showing different modes

**📈 Data Analysis & Predictive Metrics**
Turn logs into actionable insights:
- **1RM Evolution**: Watch strength potential grow over time
- **Consistency & Adherence**: Visual habit tracking for accountability
- **Volume & Intensity**: Detailed breakdowns per workout and exercise
- Screenshot: Analysis charts (dual Y-axis, Max/Avg/Min stats)

**🎯 Proprietary Goal Algorithm** (Standout Feature)
Motivation meets mathematics:
- **Multi-Metric Goals**: Define complex targets (e.g., "Planche hold for 10s" or "Squat 100kg for 5 reps")
- **Real-Time Progress**: Proprietary algorithm synthesizes metrics into Goal Completion Percentage
- **Delta of Improvement**: See exactly how much closer you moved toward goals after every workout
- Screenshot: Goal progress tracking with percentage improvements

**🛠️ Essential Features**
- Dark Mode: Sleek interface, battery-saving
- Offline Functionality: Log anywhere, no signal required
- Smart Bodyweight: Auto-adds bodyweight to relevant exercises (weighted pull-ups, dips)
- Detailed Notes: Add cues and feelings to every set
- Rest Timer & Tempo: Prescribe and log lift tempos accurately

#### Built on Behavioral Science
- **Philosophy**: Quantifying behavior is the key to changing it
- **Approach**: Data-backed pathway to goals maximizes engagement and ensures long-term progress
- **Result**: Clear feedback loop for sustainable improvement

#### Use Cases
Examples of who benefits:
- Strength athletes tracking progressive overload scientifically
- CrossFit/functional fitness athletes logging complex movements
- Calisthenics practitioners measuring skill progression
- Powerlifters and Olympic lifters optimizing 1RM development
- Anyone seeking data-driven, behavioral-backed training

#### Screenshots Gallery
- Analysis view (charts with dual Y-axis, Max/Avg/Min stats)
- Superset/complex workout logging
- Goal progress with delta improvements
- Exercise variety (strength, cardio, mobility)
- Light and dark mode examples
- Routine management interface

#### Download CTAs
- Prominent Google Play button
- App Store button (if available)
- QR codes (optional)
- Link to documentation

**Design**:
- Workout Lab theme: Emerald green accents (#10B981 or similar), blue-to-green gradients
- Glass morphism cards
- Smooth animations (Framer Motion)
- Consistent with ClearMetrics design system (cards, typography, data viz style)

**Acceptance Criteria**:
- [ ] All sections implemented and polished
- [ ] Screenshots integrated (use actual app screenshots)
- [ ] Features match Google Play description
- [ ] Proprietary goal algorithm prominently featured
- [ ] Download CTAs prominently placed
- [ ] Theme uses Workout Lab colors (emerald green)
- [ ] Mobile responsive
- [ ] Fast load time (<3s)
- [ ] SEO metadata (title, description, Open Graph)

---

### 5. Workout Lab Documentation

**URL**: `/apps/workout-lab/docs` or `/docs/workout-lab`

**Pages**:

#### Getting Started
- Download and installation (Google Play link)
- First workout setup
- Understanding the interface
- Creating your first routine
- Logging your first exercise

#### Features Guide

**Workout Logging**
- How to create workouts
- Logging different exercise types (strength, cardio, mobility)
- Creating and managing supersets
- Editing workouts mid-session
- Using rest timer and tempo tracking

**Progress Tracking**
- Understanding the Analysis view
- Reading charts (Max/Avg/Min, dual Y-axis)
- 1RM calculations and evolution
- Volume and intensity metrics
- Consistency tracking

**Goal System**
- Creating multi-metric goals
- Understanding goal completion percentage
- Interpreting delta of improvement
- Best practices for goal setting

**Advanced Features**
- Smart bodyweight calculations
- Adding detailed notes to sets
- Offline functionality and sync (Powersync)
- Dark mode
- Data export (if available)

#### Scientific Basis
- **Progressive Overload**: How the app tracks and encourages systematic progression
- **1RM Calculations**: Formulas and methodology (e.g., Epley, Brzycki)
- **Goal Algorithm**: Technical explanation of the proprietary scoring system
- **Behavioral Psychology**: How quantifying behavior drives change

#### FAQ
- Common questions about tracking
- Data privacy and GDPR compliance
- Offline vs. online functionality
- Troubleshooting sync issues
- Exercise library and custom exercises
- Exporting data

**Structure**:
- Sidebar navigation
- Clear headings and subheadings
- Screenshots with annotations
- Step-by-step instructions
- Code snippets for formulas (if relevant)

**Acceptance Criteria**:
- [ ] All documentation pages complete
- [ ] Scientific explanations for calculations (1RM, goals)
- [ ] Clear, accessible writing (scientific but not overly technical)
- [ ] Screenshots illustrating key concepts
- [ ] Search functionality (optional for v1)
- [ ] Mobile responsive
- [ ] Linked from landing page

---

### 6. Workout Lab Privacy Policy

**URL**: `/apps/workout-lab/privacy-policy`

**Requirements**:
- **GDPR Compliance**: Must meet EU data protection regulations
- Compliant with Google Play Console requirements
- Clearly states data collection, storage, and usage practices
- User rights under GDPR (access, deletion, portability)
- Contact information for data protection inquiries

**Content** (based on actual app architecture):

**Data Collection**
- Workout logs (exercises, sets, reps, weight, timestamps)
- User profile (optional: name, email if account-based)
- App usage analytics (if applicable)
- Device information (for crash reporting, if applicable)

**Data Storage & Processing**
- **Cloud Storage**: Supabase (specify region if relevant for GDPR)
- **Local Storage**: Device storage via Powersync for offline functionality
- **Data Sync**: Powersync handles offline-first synchronization
- **Encryption**: Data encrypted in transit and at rest (if applicable)

**Third-Party Services**
- Supabase (data backend)
- Powersync (sync engine)
- Any analytics services (e.g., Google Analytics, Sentry)
- Payment processing (if in-app purchases exist)

**User Rights (GDPR)**
- Right to access personal data
- Right to delete account and data
- Right to data portability (export)
- Right to rectification (correct data)
- How to exercise these rights (contact email)

**Data Retention**
- How long data is stored
- Deletion procedures

**Children's Privacy**
- App not intended for children under 13 (or 16 in EU)

**Contact Information**
- Email for privacy inquiries
- Data Protection Officer (if applicable)
- Last updated date

**Legal Boilerplate**
- Changes to privacy policy
- Governing law (EU/specific country)

**Acceptance Criteria**:
- [ ] Privacy policy complete and accurate
- [ ] GDPR-compliant (EU regulations)
- [ ] Meets Google Play Console requirements
- [ ] Supabase and Powersync mentioned
- [ ] Clear, readable formatting
- [ ] Legally reviewed (recommended before publication)
- [ ] Linked from app landing page, docs, and app itself
- [ ] Last updated date prominently displayed

---

### 7. Deployment Setup

**Platform**: Vercel

**Requirements**:
- Connect GitHub repository to Vercel
- Automatic deployments on push to `main` branch
- Environment variables configured:
  - `PUBLIC_CONTACT_WEBHOOK` (N8N webhook URL)
  - Any other public/private env vars
- Custom domain setup (if applicable)
- Preview deployments for pull requests

**Build Configuration**:
- Build command: `npm run build`
- Output directory: `dist`
- Node.js version: 22.x (current version)
- Framework: Astro (auto-detected)

**Performance**:
- Enable Vercel Speed Insights (optional)
- Configure caching headers
- Image optimization (Astro handles this)

**Acceptance Criteria**:
- [ ] Vercel project created and connected to GitHub
- [ ] Auto-deploy on push to main works
- [ ] Environment variables configured correctly
- [ ] Site accessible at Vercel URL (e.g., cml-website.vercel.app)
- [ ] Custom domain connected and working (if applicable)
- [ ] HTTPS enabled (automatic with Vercel)
- [ ] Preview deployments working for PRs
- [ ] Build logs show no errors

---

### 8. N8N Blog Automation Preparation

**Goal**: Document requirements for future N8N workflow integration (implementation in future track)

**Documentation Needed**:

**Webhook Endpoint Structure**
- POST endpoint to receive new blog posts
- Endpoint: `/api/blog/create` or similar
- Authentication: API key or secret token

**Expected Payload Format**
```json
{
  "title": "Blog Post Title",
  "description": "SEO description",
  "content": "Full MDX content",
  "slug": "blog-post-slug",
  "appSlug": "workout-lab",
  "tags": ["fitness", "strength"],
  "pubDate": "2026-02-04T12:00:00Z",
  "draft": false
}
```

**File Creation Process**
- N8N receives payload
- Creates MDX file: `src/content/blog/{slug}.mdx`
- Formats frontmatter correctly
- Commits to Git
- Pushes to GitHub (triggers Vercel deploy)

**Git Workflow**
- N8N authenticates with GitHub (personal access token)
- Creates new branch or commits directly to main
- Commit message format: `content(blog): add {title}`

**This Phase (Documentation Only)**:
- Document technical requirements in `conductor/n8n-blog-integration.md`
- Create placeholder webhook endpoint (optional, can be serverless function)
- DO NOT implement full N8N workflow automation (future track)

**Acceptance Criteria**:
- [ ] N8N integration requirements documented clearly
- [ ] Webhook payload format defined
- [ ] Git workflow steps outlined
- [ ] Authentication method specified
- [ ] File paths and naming conventions documented

---

## Out of Scope

**Explicitly NOT included in this track:**
- Vitamin D Tracker landing page, docs, or privacy policy (future track)
- Full N8N blog automation implementation (documented only, built in future track)
- SEO-optimized blog content creation (future content track)
- Analytics integration (can be added later)
- Advanced search functionality (future enhancement)
- User authentication or accounts (app handles this)
- App submission to stores (only preparing materials - submission is separate task)
- Testimonials section (can be added when available)

---

## Acceptance Criteria (Track Level)

**Website Foundation**
- [ ] About section complete and reflects personal background (Enso Movers, PhD, 9 years)
- [ ] Contact form functional and connected to N8N webhook
- [ ] Website copy reviewed and improved across all pages

**Workout Lab Launch**
- [ ] Landing page live with all sections (hero, features, use cases, CTAs)
- [ ] All features from Google Play description represented
- [ ] Proprietary goal algorithm prominently featured
- [ ] Documentation complete (Getting Started, Features, Scientific Basis, FAQ)
- [ ] Privacy policy GDPR-compliant and meets Google Play requirements
- [ ] Screenshots integrated throughout

**Deployment**
- [ ] Site deployed to Vercel with auto-deploy from GitHub
- [ ] Environment variables configured
- [ ] Custom domain working (if applicable)
- [ ] HTTPS enabled

**Quality**
- [ ] All pages mobile responsive
- [ ] No console errors or warnings
- [ ] Build succeeds without errors
- [ ] >80% test coverage for new components
- [ ] Manual testing passed (see workflow.md for checklist)
- [ ] Accessibility: keyboard navigation, ARIA labels, color contrast
- [ ] Performance: <3s load time on 3G

**Documentation**
- [ ] N8N integration requirements documented

---

## Success Metrics

- Website loads in <3s on 3G connection
- Contact form submission success rate >95%
- All Workout Lab pages pass Google Play Console content review
- Zero critical accessibility issues (WCAG AA compliance)
- Lighthouse scores:
  - Performance: >90
  - Accessibility: >95
  - SEO: >95
  - Best Practices: >90

---

*This specification defines the complete scope for launching the ClearMetrics Lab website and preparing Workout Lab for app store submission.*
