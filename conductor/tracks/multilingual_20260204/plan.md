# Implementation Plan: Workout Lab Multilingual Support

---

## Phase 1: Setup & Infrastructure
<!-- execution: sequential -->

### Task 1.1: Install and Configure react-i18next
<!-- files: src/i18n/config.ts, package.json -->
- [ ] Research React Native i18n libraries (react-i18next vs react-native-localize)
- [ ] Install dependencies: `npm install react-i18next i18next react-native-localize`
- [ ] Create i18n configuration file (`src/i18n/config.ts`)
- [ ] Configure language detection (system language)
- [ ] Configure fallback language (English)
- [ ] Set up namespace support for organization
- [ ] Write unit test for i18n initialization
- [ ] Manual test: Verify i18n initializes without errors

### Task 1.2: Create Translation File Structure
<!-- files: src/i18n/locales/en.json, src/i18n/locales/es.json, src/i18n/locales/de.json, src/i18n/locales/fr.json, src/i18n/locales/pt.json, src/i18n/locales/it.json -->
- [ ] Create directory: `src/i18n/locales/`
- [ ] Create empty JSON files for all 6 languages:
  - `en.json` (English - source of truth)
  - `es.json` (Spanish)
  - `de.json` (German)
  - `fr.json` (French)
  - `pt.json` (Portuguese)
  - `it.json` (Italian)
- [ ] Define namespace structure (common, workout, exercises, settings, errors, onboarding)
- [ ] Create example translations in `en.json` to test structure
- [ ] Manual test: Load translation files, verify structure

### Task 1.3: Wrap App with I18n Provider
<!-- files: App.tsx, src/i18n/config.ts -->
<!-- depends: task1.1 -->
- [ ] Import I18nextProvider in root component (App.tsx)
- [ ] Wrap app with provider
- [ ] Configure i18n instance
- [ ] Write test to verify provider renders children
- [ ] Manual test: App runs without errors with i18n provider

### Task 1.4: Create Language Storage Utility
<!-- files: src/utils/languageStorage.ts -->
- [ ] Write utility to save language preference to AsyncStorage
- [ ] Write utility to load language preference from AsyncStorage
- [ ] Write tests for storage utilities (save/load)
- [ ] Handle storage errors gracefully
- [ ] Manual test: Save/load language preference persists across app restarts

### Task 1.5: Conductor - User Manual Verification 'Setup & Infrastructure'
- [ ] Run build (`npm run android` / `npm run ios`) - verify no errors
- [ ] Verify i18n library installed and configured
- [ ] Verify translation file structure created
- [ ] Test AsyncStorage language persistence
- [ ] Check no console errors or warnings
- [ ] Code coverage check: >80% for new utilities

---

## Phase 2: Translation Key Extraction & English Source
<!-- execution: sequential -->
<!-- depends: phase1 -->

### Task 2.1: Audit Codebase for Translatable Strings
<!-- files: docs/translation-audit.md -->
- [ ] Scan all components for hardcoded UI text
- [ ] Scan navigation configuration for labels
- [ ] Scan error messages and validation text
- [ ] Scan onboarding/tutorial screens
- [ ] Create comprehensive list of all English strings
- [ ] Group strings by namespace (common, workout, exercises, etc.)
- [ ] Manual review: Ensure all user-facing text identified

### Task 2.2: Create Complete English Translation File
<!-- files: src/i18n/locales/en.json -->
<!-- depends: task2.1 -->
- [ ] Populate `en.json` with all identified strings
- [ ] Organize keys by namespace
- [ ] Use descriptive key names (e.g., `workout.startWorkout` not `btn1`)
- [ ] Add pluralization keys where needed (e.g., `set_one`, `set_other`)
- [ ] Add date/number format specifications
- [ ] Validate JSON syntax (no errors)
- [ ] Manual test: Load `en.json`, verify all keys accessible

### Task 2.3: Create Exercise Name Translation Keys
<!-- files: src/i18n/locales/en.json -->
<!-- depends: task2.2 -->
- [ ] Extract all exercise names from database/library
- [ ] Create `exercises` namespace in `en.json`
- [ ] Add all exercise names with keys
- [ ] Add muscle group names
- [ ] Add equipment type names
- [ ] Manual review: Ensure all exercises covered

### Task 2.4: Create Error Message Translation Keys
<!-- files: src/i18n/locales/en.json -->
<!-- depends: task2.2 -->
- [ ] Identify all error message sources (validation, network, permissions)
- [ ] Create `errors` namespace in `en.json`
- [ ] Add all error messages with descriptive keys
- [ ] Include placeholders for dynamic content (e.g., `{{exerciseName}}`)
- [ ] Manual test: Verify error messages display correctly

### Task 2.5: Conductor - User Manual Verification 'Translation Key Extraction'
- [ ] Review complete `en.json` file
- [ ] Verify all UI text has translation keys
- [ ] Check namespace organization is logical
- [ ] Verify pluralization keys exist where needed
- [ ] Test loading all keys programmatically
- [ ] Manual review: No hardcoded strings remain in codebase audit

---

## Phase 3: Professional Translation
<!-- execution: parallel -->
<!-- depends: phase2 -->

### Task 3.1: Prepare Translation Package
<!-- files: docs/translation-package.md -->
- [ ] Export `en.json` as source material
- [ ] Document fitness-specific terminology guidelines
- [ ] Create context document explaining app functionality
- [ ] List exercise names requiring special attention
- [ ] Prepare budget/timeline for translation services
- [ ] Manual review: Package complete and clear

### Task 3.2: Obtain Spanish Translations
<!-- files: src/i18n/locales/es.json -->
<!-- depends: task3.1 -->
- [ ] Send `en.json` to translator or translation service
- [ ] Review returned `es.json` for fitness terminology accuracy
- [ ] Verify JSON structure matches `en.json`
- [ ] Check special characters (ñ, á, é, í, ó, ú) render correctly
- [ ] Native speaker review (if possible)
- [ ] Manual test: Load Spanish translations, spot-check accuracy

### Task 3.3: Obtain German Translations
<!-- files: src/i18n/locales/de.json -->
<!-- depends: task3.1 -->
- [ ] Send `en.json` to translator
- [ ] Review returned `de.json` for accuracy
- [ ] Verify JSON structure matches
- [ ] Check special characters (ä, ö, ü, ß) render correctly
- [ ] Native speaker review
- [ ] Manual test: Load German translations

### Task 3.4: Obtain French Translations
<!-- files: src/i18n/locales/fr.json -->
<!-- depends: task3.1 -->
- [ ] Send `en.json` to translator
- [ ] Review returned `fr.json` for accuracy
- [ ] Verify JSON structure matches
- [ ] Check special characters (é, è, ê, à, ç) render correctly
- [ ] Native speaker review
- [ ] Manual test: Load French translations

### Task 3.5: Obtain Portuguese Translations
<!-- files: src/i18n/locales/pt.json -->
<!-- depends: task3.1 -->
- [ ] Send `en.json` to translator
- [ ] Review returned `pt.json` for accuracy
- [ ] Verify JSON structure matches
- [ ] Check special characters (ã, õ, ç, á, é, í, ó, ú) render correctly
- [ ] Native speaker review
- [ ] Manual test: Load Portuguese translations

### Task 3.6: Obtain Italian Translations
<!-- files: src/i18n/locales/it.json -->
<!-- depends: task3.1 -->
- [ ] Send `en.json` to translator
- [ ] Review returned `it.json` for accuracy
- [ ] Verify JSON structure matches
- [ ] Check special characters (à, è, é, ì, ò, ù) render correctly
- [ ] Native speaker review
- [ ] Manual test: Load Italian translations

### Task 3.7: Conductor - User Manual Verification 'Professional Translation'
- [ ] All 6 translation files (en, es, de, fr, pt, it) complete
- [ ] JSON structure identical across all files
- [ ] All keys present in all files (no missing translations)
- [ ] Special characters render correctly in app
- [ ] Native speaker review completed for all languages
- [ ] Fitness terminology verified as accurate

---

## Phase 4: Component Integration
<!-- execution: parallel -->
<!-- depends: phase3 -->

### Task 4.1: Integrate i18n into Navigation
<!-- files: src/navigation/MainNavigator.tsx, src/navigation/TabNavigator.tsx -->
- [ ] Replace hardcoded tab labels with `t()` calls
- [ ] Replace screen titles with translations
- [ ] Write tests for translated navigation labels
- [ ] Manual test: Navigate app, verify all labels translated

### Task 4.2: Integrate i18n into Workout Flow Components
<!-- files: src/screens/WorkoutScreen.tsx, src/components/ExerciseLog.tsx -->
- [ ] Replace "Start Workout" and related buttons with `t()`
- [ ] Replace exercise logging UI text
- [ ] Replace superset/routine labels
- [ ] Write component tests for translated UI
- [ ] Manual test: Start workout flow in all 6 languages

### Task 4.3: Integrate i18n into Analysis/Charts Components
<!-- files: src/screens/AnalysisScreen.tsx, src/components/DataChart.tsx -->
- [ ] Replace chart labels ("Max", "Avg", "Min") with `t()`
- [ ] Replace time period labels ("1M", "3M", etc.)
- [ ] Replace goal progress text
- [ ] Ensure number formatting respects locale
- [ ] Write tests for translated chart labels
- [ ] Manual test: View charts in all 6 languages

### Task 4.4: Integrate i18n into Exercise Library
<!-- files: src/screens/ExerciseLibraryScreen.tsx, src/components/ExerciseCard.tsx -->
- [ ] Replace exercise name displays with translated keys
- [ ] Replace muscle group labels
- [ ] Replace equipment type labels
- [ ] Handle custom user exercises (keep original name)
- [ ] Write tests for exercise name translation
- [ ] Manual test: Browse exercise library in all 6 languages

### Task 4.5: Integrate i18n into Settings Screen
<!-- files: src/screens/SettingsScreen.tsx -->
- [ ] Replace all settings labels with `t()`
- [ ] Replace section headers
- [ ] Replace toggle descriptions
- [ ] Write tests for translated settings labels
- [ ] Manual test: View settings in all 6 languages

### Task 4.6: Integrate i18n into Error Messages
<!-- files: src/utils/errorHandling.ts, src/components/ErrorMessage.tsx -->
- [ ] Replace all error message displays with `t()`
- [ ] Handle dynamic placeholders (e.g., exercise names)
- [ ] Replace validation errors
- [ ] Replace network error messages
- [ ] Write tests for translated error messages
- [ ] Manual test: Trigger errors, verify translations

### Task 4.7: Integrate i18n into Onboarding
<!-- files: src/screens/OnboardingScreen.tsx, src/components/Tutorial.tsx -->
- [ ] Replace welcome screen text with `t()`
- [ ] Replace tutorial/feature introduction slides
- [ ] Replace tooltips and hints
- [ ] Write tests for onboarding translations
- [ ] Manual test: Complete onboarding flow in all 6 languages

### Task 4.8: Handle Pluralization
<!-- files: src/utils/formatters.ts -->
- [ ] Implement plural rules for "set/sets", "rep/reps", etc.
- [ ] Configure i18next pluralization
- [ ] Add plural keys to all translation files
- [ ] Write tests for pluralization logic
- [ ] Manual test: Verify "1 set" vs "2 sets" in all languages

### Task 4.9: Implement Locale-Aware Date/Number Formatting
<!-- files: src/utils/formatters.ts -->
- [ ] Configure date formatting per locale
- [ ] Configure number formatting per locale (1,234.56 vs 1.234,56)
- [ ] Replace hardcoded formatters with locale-aware versions
- [ ] Write tests for date/number formatting
- [ ] Manual test: Verify dates and numbers format correctly per language

### Task 4.10: Conductor - User Manual Verification 'Component Integration'
- [ ] All components use `t()` for user-facing text
- [ ] No hardcoded strings visible in app
- [ ] Pluralization works correctly
- [ ] Date/number formatting respects locale
- [ ] Test coverage >80% for translation integration
- [ ] Manual test: Full app walkthrough in each of 6 languages
- [ ] Check UI text fits in all layouts (no truncation/overflow)

---

## Phase 5: Language Switcher UI
<!-- execution: sequential -->
<!-- depends: -->

### Task 5.1: Create Language Picker Component
<!-- files: src/components/LanguagePicker.tsx -->
- [ ] Write test for LanguagePicker component
- [ ] Create LanguagePicker UI (modal or bottom sheet)
- [ ] List all 6 languages in native script
- [ ] Highlight current language with checkmark
- [ ] Handle tap to select language
- [ ] Dismiss picker on selection
- [ ] Manual test: Picker displays all languages correctly

### Task 5.2: Add Language Switcher to Settings Screen
<!-- files: src/screens/SettingsScreen.tsx -->
<!-- depends: task5.1 -->
- [ ] Write test for language switcher integration
- [ ] Add "Language" row to Settings screen
- [ ] Display current language in native script
- [ ] Tap to open LanguagePicker
- [ ] Apply design system (consistent with other settings rows)
- [ ] Manual test: Navigate to Settings, tap Language, picker opens

### Task 5.3: Implement Language Change Logic
<!-- files: src/hooks/useLanguage.ts -->
<!-- depends: task5.1 -->
- [ ] Write test for language change handler
- [ ] On language selection, call `i18n.changeLanguage()`
- [ ] Update app UI immediately (no restart required)
- [ ] Save new language preference to AsyncStorage
- [ ] Show brief confirmation (optional): "Language changed to Español"
- [ ] Manual test: Switch languages, verify immediate UI update

### Task 5.4: Handle System Language Detection
<!-- files: src/utils/languageDetection.ts -->
- [ ] Write test for system language detection
- [ ] On first app launch, detect device system language
- [ ] If supported (en/es/de/fr/pt/it), set as default
- [ ] If not supported, fallback to English
- [ ] Save detected language to AsyncStorage
- [ ] Manual test: Change device language, reinstall app, verify detection

### Task 5.5: Implement Language Persistence
<!-- files: src/utils/languageStorage.ts, App.tsx -->
<!-- depends: task5.3 -->
- [ ] Write test for language persistence on app restart
- [ ] On app startup, load saved language from AsyncStorage
- [ ] Apply loaded language before rendering UI
- [ ] Handle missing/corrupted storage gracefully (fallback to English)
- [ ] Manual test: Change language, close app, reopen, verify language persists

### Task 5.6: Conductor - User Manual Verification 'Language Switcher UI'
- [ ] Language picker displays all 6 languages in native script
- [ ] Current language indicated with checkmark
- [ ] Language change applies immediately without restart
- [ ] Language preference persists across app restarts
- [ ] System language detection works on first launch
- [ ] Fallback to English works if system language unsupported
- [ ] Test coverage >80%
- [ ] Manual test: Switch between all 6 languages multiple times

---

## Phase 6: Testing & Quality Assurance
<!-- execution: parallel -->
<!-- depends: phase4, phase5 -->

### Task 6.1: Unit Test Translation Key Coverage
<!-- files: src/__tests__/translationCoverage.test.ts -->
- [ ] Write test to load all translation files
- [ ] Compare keys across all 6 files
- [ ] Assert all files have identical key structure
- [ ] Identify any missing keys
- [ ] Fix missing translation keys
- [ ] Manual review: No missing keys in any language file

### Task 6.2: Integration Test Language Switching
<!-- files: src/__tests__/languageSwitching.test.ts -->
<!-- depends: task6.1 -->
- [ ] Write integration test for full language switch flow
- [ ] Test: Open app → Settings → Language → Select Spanish → Verify UI updated
- [ ] Test all 6 languages
- [ ] Test persistence: switch language → restart app → verify persists
- [ ] Manual test: Full language switching flow

### Task 6.3: Manual Testing - Spanish
<!-- files: docs/qa/spanish-testing-report.md -->
- [ ] Full app walkthrough in Spanish
- [ ] Test workout flow, charts, settings, onboarding
- [ ] Verify all text translated correctly
- [ ] Check for truncation/overflow issues
- [ ] Verify special characters render (ñ, á, é, í, ó, ú)
- [ ] Document any issues

### Task 6.4: Manual Testing - German
<!-- files: docs/qa/german-testing-report.md -->
- [ ] Full app walkthrough in German
- [ ] Verify all text translated correctly
- [ ] Check for truncation/overflow (German words often longer)
- [ ] Verify special characters render (ä, ö, ü, ß)
- [ ] Document any issues

### Task 6.5: Manual Testing - French
<!-- files: docs/qa/french-testing-report.md -->
- [ ] Full app walkthrough in French
- [ ] Verify all text translated correctly
- [ ] Check for truncation/overflow
- [ ] Verify special characters render (é, è, ê, à, ç)
- [ ] Document any issues

### Task 6.6: Manual Testing - Portuguese
<!-- files: docs/qa/portuguese-testing-report.md -->
- [ ] Full app walkthrough in Portuguese
- [ ] Verify all text translated correctly
- [ ] Check for truncation/overflow
- [ ] Verify special characters render (ã, õ, ç, á, é, í, ó, ú)
- [ ] Document any issues

### Task 6.7: Manual Testing - Italian
<!-- files: docs/qa/italian-testing-report.md -->
- [ ] Full app walkthrough in Italian
- [ ] Verify all text translated correctly
- [ ] Check for truncation/overflow
- [ ] Verify special characters render (à, è, é, ì, ò, ù)
- [ ] Document any issues

### Task 6.8: Test Fallback Behavior
<!-- files: src/__tests__/fallbackBehavior.test.ts -->
- [ ] Write test: Delete translation key from es.json, verify fallback to English
- [ ] Test: Corrupt translation file, verify graceful fallback
- [ ] Test: Missing translation file, verify app still loads
- [ ] Manual test: Trigger fallback scenarios, verify no crashes

### Task 6.9: Performance Testing
<!-- files: docs/qa/performance-report.md -->
- [ ] Measure app startup time before/after i18n integration
- [ ] Verify <50ms overhead from i18n
- [ ] Measure language switch time (should be <100ms)
- [ ] Profile translation file loading
- [ ] Optimize if performance degraded
- [ ] Manual test: Verify app feels responsive

### Task 6.10: Fix Identified Issues
<!-- files: (various based on issues found) -->
<!-- depends: task6.3, task6.4, task6.5, task6.6, task6.7 -->
- [ ] Address all truncation/overflow issues from manual testing
- [ ] Fix any missing or incorrect translations
- [ ] Fix any performance issues
- [ ] Retest affected areas
- [ ] Update translation files if needed
- [ ] Manual test: Verify fixes work in all languages

### Task 6.11: Conductor - User Manual Verification 'Testing & QA'
- [ ] All 6 languages manually tested end-to-end
- [ ] Zero missing translation keys
- [ ] No untranslated text visible to users
- [ ] Fallback to English works for missing keys
- [ ] No truncation or overflow issues
- [ ] Special characters render correctly in all languages
- [ ] Performance acceptable (<50ms startup overhead, <100ms language switch)
- [ ] All tests passing (unit, integration)
- [ ] Test coverage >80%
- [ ] No console errors or warnings

---

## Track Completion Checklist

- [ ] All phases completed and verified
- [ ] All acceptance criteria met (see spec.md)
- [ ] Test coverage >80%
- [ ] All 6 languages fully functional
- [ ] Native speaker reviews completed
- [ ] No hardcoded strings in codebase
- [ ] Language switcher works seamlessly
- [ ] Persistence and fallback tested
- [ ] Performance targets met

---

## Parallel Execution Summary

**Phase-Level Parallelism:**
- Phase 5 (Language Switcher UI) can run in parallel with Phase 3 (Translation) - both start after Phase 2
- Phase 6 (Testing) waits for both Phase 4 and Phase 5 to complete

**Task-Level Parallelism:**
- **Phase 3:** Tasks 3.2-3.6 (5 language translations) run in parallel - no file conflicts
- **Phase 4:** Tasks 4.1-4.9 run in parallel - each works on different files
- **Phase 6:** Tasks 6.3-6.7 (manual testing) run in parallel - independent testing per language

**File Ownership:** Each task annotated with exclusive file ownership to prevent conflicts during parallel execution.

---

## Post-Track Actions

1. Mark track complete in `conductor/tracks.md`: `[x]`
2. Update metadata.json status to "completed"
3. Commit all changes with track summary
4. Archive track (if desired): `/conductor-archive multilingual_20260204`
5. Prepare for app store release with updated screenshots in all languages (future track)

---

*This plan follows TDD workflow, commits after each task, and includes manual verification at phase completion as defined in workflow.md. Parallel execution enabled for Phase 3 (translations), Phase 4 (integration), Phase 5 (UI), and Phase 6 (testing).*
