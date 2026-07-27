export const colors = {
  primary: "#15803D",

  primaryDark: "#166534",

  secondary: "#C8A951",

  accent: "#F59E0B",

  white: "#FFFFFF",

  black: "#111827",

  gray50: "#F9FAFB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray300: "#D1D5DB",
  gray400: "#9CA3AF",
  gray500: "#6B7280",
  gray600: "#4B5563",
  gray700: "#374151",
  gray800: "#1F2937",
  gray900: "#111827",

  success: "#16A34A",
  warning: "#D97706",
  danger: "#DC2626",
} as const;

export type ColorPalette = typeof colors;