// Browser chrome colours, matching --ground in app/globals.css.
export const themeColors = {
  light: '#f3f5f5',
  dark: '#0e1113',
} as const;

export type Theme = keyof typeof themeColors;
