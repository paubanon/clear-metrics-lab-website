# Specification: Workout Lab Multilingual Support

## Overview

Add comprehensive multilingual support to the Workout Lab mobile app, enabling users to interact with the app in their preferred language. The app will default to the system language and provide a manual language switcher in Settings.

---

## Objectives

1. Support 6 languages: English (default), Spanish, German, French, Portuguese, Italian
2. Translate all app content (UI, exercise names, errors, onboarding, settings)
3. Implement seamless language switching via Settings toggle
4. Default to device system language on first launch
5. Persist user language preference across sessions

---

## Functional Requirements

### 1. Supported Languages

**Initial Language Set:**
- 🇬🇧 **English** (en) - Default language, fallback for missing translations
- 🇪🇸 **Spanish** (es)
- 🇩🇪 **German** (de)
- 🇫🇷 **French** (fr)
- 🇵🇹 **Portuguese** (pt)
- 🇮🇹 **Italian** (it)

**Future Extensibility:**
- Architecture should support adding new languages easily
- Translation files structured for scalability

---

### 2. Translation Scope

**All content must be translatable:**

#### UI Labels & Buttons
- Navigation labels ("Analysis", "Goals", "Profile")
- Action buttons ("Start Workout", "Add Exercise", "Save", "Cancel")
- Tab bar labels
- Modal titles and CTAs

#### Exercise Names & Descriptions
- Standard exercise library (e.g., "Front Squat", "Deadlift")
- Exercise descriptions and instructions
- Muscle group names
- Equipment types

#### Error Messages & Validation
- Form validation errors ("Please enter a valid weight")
- Network errors ("Unable to sync data")
- Permission errors ("Camera access required")

#### Onboarding & Tutorial Content
- Welcome screens
- Feature introduction slides
- Tooltips and hints
- First-time user guidance

#### Settings Screen
- All settings labels and descriptions
- Language selector itself
- Privacy policy and legal text links

#### Data Visualization
- Chart labels ("Max", "Avg", "Min")
- Time period labels ("1M", "3M", "6M", "1Y", "ALL")
- Goal progress text

---

### 3. Language Detection & Default Behavior

**First Launch:**
- Detect device system language using platform APIs
- If system language is supported (en/es/de/fr/pt/it), use it as default
- If system language is NOT supported, default to English
- Store selected language in local storage

**Subsequent Launches:**
- Load user's saved language preference
- Override system language with user choice (if manually changed)

**Example:**
- User's device is set to German → App opens in German
- User's device is set to Japanese → App opens in English (fallback)
- User manually switches to Spanish in Settings → App always uses Spanish

---

### 4. Language Switcher in Settings

**Location:** Settings screen, prominent placement (near top)

**UI Design:**
- **Label:** "Language" / "Idioma" / "Sprache" / etc. (translated)
- **Current Value:** Display selected language name in native script
  - Example: "Español" (not "Spanish")
- **Interaction:** Tap to open language picker

**Language Picker:**
- Modal or bottom sheet with list of all supported languages
- Each language displayed in its native script:
  - English
  - Español
  - Deutsch
  - Français
  - Português
  - Italiano
- Current language indicated with checkmark or highlight
- Tap language to select

**Behavior on Change:**
- Immediately apply new language (no app restart required)
- Update all UI text throughout app
- Persist new language preference to local storage
- Show brief confirmation (optional): "Language changed to Español"

---

### 5. Implementation Approach

**Technology Stack:**
- **Library:** react-i18next or react-native-localize
  - Recommendation: **react-i18next** (more feature-rich, widely adopted)
- **Translation Format:** JSON files
- **File Structure:**
  ```
  locales/
    en.json
    es.json
    de.json
    fr.json
    pt.json
    it.json
  ```

**Translation Files:**
- JSON key-value structure
- Namespaces for organization (e.g., `common`, `exercises`, `settings`)
- Nested keys for complex structures

**Example (`en.json`):**
```json
{
  "common": {
    "save": "Save",
    "cancel": "Cancel",
    "delete": "Delete"
  },
  "workout": {
    "startWorkout": "Start Workout",
    "addExercise": "Add Exercise"
  },
  "exercises": {
    "frontSquat": "Front Squat",
    "deadlift": "Deadlift"
  },
  "errors": {
    "invalidWeight": "Please enter a valid weight",
    "syncFailed": "Unable to sync data"
  }
}
```

**Code Integration:**
- Wrap root component with `I18nextProvider`
- Use `useTranslation()` hook in components
- Example: `const { t } = useTranslation(); <Text>{t('workout.startWorkout')}</Text>`

---

### 6. Translation Process

**Initial Translations:**
- Extract all English strings from codebase
- Create translation keys in `en.json` (source of truth)
- Professional translation or translation service for other 5 languages
  - Options: Human translators, DeepL API, professional service (e.g., Lokalise)
- Review translations for fitness/exercise terminology accuracy

**Fitness-Specific Terminology:**
- Exercise names should use internationally recognized terms
- Consult fitness professionals for each language to ensure correct terminology
- Example: "Front Squat" → "Sentadilla Frontal" (Spanish), not literal translation

**Quality Assurance:**
- Native speakers review translations
- Test all UI flows in each language
- Verify text fits in UI elements (some languages are longer)
- Check pluralization rules (e.g., "1 set" vs "2 sets")

---

### 7. Pluralization & Formatting

**Pluralization:**
- Use i18next pluralization features
- Example: "{{count}} set" → "1 set", "2 sets"
- Each language may have different plural rules

**Date & Number Formatting:**
- Use locale-aware formatting for dates and numbers
- Example:
  - English: "1,234.56"
  - German: "1.234,56"
  - Dates: "MM/DD/YYYY" (en-US) vs "DD/MM/YYYY" (es/de/fr)

**Units:**
- Weight units: kg vs lbs (user preference, separate from language)
- Distance: km vs miles
- Language change should NOT affect unit preference

---

### 8. Fallback Behavior

**Missing Translation Keys:**
- If a key is missing in selected language, fallback to English
- Log warning in development mode for missing keys
- Never show translation keys to users (e.g., "workout.startWorkout")

**Graceful Degradation:**
- If translation file fails to load, use English
- Display error in Settings if language switching fails

---

## Non-Functional Requirements

### Performance
- Language files loaded asynchronously
- Minimal impact on app startup time (<50ms overhead)
- Cached translations in memory (no re-fetch on navigation)

### Storage
- Translation files bundled with app (offline-first)
- Cloud updates optional (future enhancement for fixing translations without app update)

### Accessibility
- Language switcher accessible via screen readers
- Translated content maintains accessibility labels

### Testing
- Unit tests for translation key coverage (ensure no missing keys)
- Integration tests for language switching flow
- Manual testing in all 6 languages

---

## Acceptance Criteria

- [ ] All 6 languages (en, es, de, fr, pt, it) supported with complete translations
- [ ] App defaults to system language on first launch
- [ ] Fallback to English if system language not supported
- [ ] Language switcher in Settings displays all languages in native script
- [ ] Language change applies immediately without app restart
- [ ] Selected language persists across app restarts
- [ ] All UI elements translated (buttons, labels, navigation, errors, onboarding)
- [ ] Exercise names translated with accurate fitness terminology
- [ ] Pluralization works correctly for each language
- [ ] Dates and numbers formatted according to locale
- [ ] No untranslated text visible to users
- [ ] Missing translation keys fallback to English gracefully
- [ ] App startup performance not degraded (no noticeable delay)
- [ ] All translations reviewed by native speakers
- [ ] Manual testing passed in all 6 languages

---

## Out of Scope

**Explicitly NOT included in this track:**
- Right-to-Left (RTL) language support (Arabic, Hebrew) - future track
- Dynamic translation updates from server (cloud-based translation management) - future enhancement
- User-contributed translations or community translation features
- Translating user-generated content (custom exercise names, notes) - remains in user's input language
- Voice/audio translations for workout instructions
- Automatic language detection from user location (only system language detection)

---

## Dependencies

- **Existing Track:** "Website Launch & Workout Lab Deployment" should be completed first (app needs to be functional before adding i18n)
- **Translation Services:** May require budget for professional translations or DeepL API access

---

## Success Metrics

- 100% of UI strings translated across all 6 languages
- Zero translation key errors in production
- Language switching completes in <100ms
- User language preference persistence rate: 100% (no reset on app updates)
- Positive user feedback from non-English speakers (post-launch metric)

---

*This specification defines the complete scope for adding multilingual support to Workout Lab mobile app.*
