import type { CSSProperties } from "react";

export const brandTheme = {
  primary: "#008BD9",
  secondary: "#91EAFF",
  hover: "#00A3C4",
  accent: "#7C89FF",
} as const;

export type BrandThemeKey = keyof typeof brandTheme;

type CSSVariableStyles = CSSProperties & {
  [key: `--${string}`]: string | number;
};

export const brandVarStyles: CSSVariableStyles = {
  "--brand-primary": brandTheme.primary,
  "--brand-secondary": brandTheme.secondary,
  "--brand-hover": brandTheme.hover,
  "--brand-accent": brandTheme.accent,
};
