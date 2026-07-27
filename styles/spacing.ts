export const spacing = {
  sectionY: "py-20",

  sectionYLarge: "py-28",

  containerPadding: "px-6 lg:px-8",

  gap: {
    xs: "gap-2",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  },
} as const;

export type Spacing = typeof spacing;