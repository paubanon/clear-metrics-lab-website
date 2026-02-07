// Workout Lab Theme System - Matches React Native App Exactly
// Source: /Users/pablobanon/Antigravity/Workout Tracker/workout-tracker/src/theme/index.ts

export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
  primary: string;
  bgDark: string;
  bg: string;
  bgLight: string;
  text: string;
  textMuted: string;
  border: string;
  success: string;
  danger: string;
  warning: string;
}

export const LightColors: ThemeColors = {
  primary: '#007AFF', // iOS System Blue
  bgDark: '#F2F2F7',  // iOS System Gray 6 - Page Base
  bg: '#FFFFFF',      // Card
  bgLight: '#FFFFFF', // Elevated
  text: '#000000',
  textMuted: '#6C6C70',
  border: 'rgba(0, 0, 0, 0.1)',
  success: '#34C759',
  danger: '#FF3B30',
  warning: '#FFCC00',
};

export const DarkColors: ThemeColors = {
  primary: '#65D984', // Vibrant Green
  bgDark: '#1C1C1E',  // Base
  bg: '#2C2C2E',      // Card
  bgLight: '#3A3A3C', // Elevated/Input
  text: '#F2F2F7',    // ~95% White
  textMuted: '#AEAEB2', // ~70% White
  border: 'rgba(255, 255, 255, 0.1)',
  success: '#32D74B',
  danger: '#FF453A',
  warning: '#FFD60A',
};

export const Spacing = {
  xs: 4,
  s: 8,
  sm: 12,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 48,
};

export const BorderRadius = {
  sm: 8,
  m: 12,
  l: 20,
};

export const Typography = {
  scale: {
    xs: 12,  // Badges, timestamps, captions
    sm: 14,  // Secondary text, meta info
    md: 16,  // Base - body, inputs, buttons
    lg: 20,  // Headings, card titles
    xl: 24,  // Page titles
    xxl: 28, // Page headers
  },
  weight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};

// CSS Variable mapping
export const getCSSVariables = (mode: ThemeMode): Record<string, string> => {
  const colors = mode === 'light' ? LightColors : DarkColors;

  return {
    '--color-primary': colors.primary,
    '--color-bg-dark': colors.bgDark,
    '--color-bg': colors.bg,
    '--color-bg-light': colors.bgLight,
    '--color-text': colors.text,
    '--color-text-muted': colors.textMuted,
    '--color-border': colors.border,
    '--color-success': colors.success,
    '--color-danger': colors.danger,
    '--color-warning': colors.warning,
  };
};
