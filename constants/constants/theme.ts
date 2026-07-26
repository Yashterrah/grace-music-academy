/**
 * Grace Muigai Music Academy
 * Global Design Theme
 */

export const theme = {
  colors: {
    primary: "#15803D", // Emerald Green
    primaryDark: "#166534",

    secondary: "#D4AF37", // Gold
    secondaryDark: "#B8860B",

    accent: "#1E3A8A", // Navy Blue

    success: "#22C55E",
    warning: "#F59E0B",
    danger: "#EF4444",

    white: "#FFFFFF",
    black: "#111827",

    background: "#F8FAFC",
    surface: "#FFFFFF",

    text: {
      primary: "#111827",
      secondary: "#6B7280",
      light: "#9CA3AF",
      white: "#FFFFFF",
    },

    border: "#E5E7EB",
  },

  gradients: {
    hero: "linear-gradient(135deg,#15803D,#166534)",
    gold: "linear-gradient(135deg,#D4AF37,#B8860B)",
  },

  spacing: {
    sectionY: "6rem",
    sectionYMobile: "4rem",

    container: "1280px",

    gap: {
      xs: "0.5rem",
      sm: "1rem",
      md: "1.5rem",
      lg: "2rem",
      xl: "4rem",
    },
  },

  radius: {
    sm: "8px",
    md: "12px",
    lg: "18px",
    xl: "24px",
    full: "9999px",
  },

  shadows: {
    sm: "0 1px 3px rgba(0,0,0,.08)",

    md: "0 8px 24px rgba(0,0,0,.08)",

    lg: "0 15px 45px rgba(0,0,0,.12)",

    glass: "0 8px 32px rgba(31,38,135,.15)",
  },

  transition: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
  },

  zIndex: {
    navbar: 100,
    modal: 200,
    toast: 300,
  },
} as const;

export type Theme = typeof theme;