import type { CSSProperties } from "react";

//现代橙紫互补风（偏创意设计、视觉冲击感强）
export const brandTheme = {
  primary: "#FF6B00",   // 主橙：浓烈且醒目
  secondary: "#FFD9B3", // 辅助暖橙，用于背景或阴影
  hover: "#FF854D",     // hover：亮一点的橙红
  accent: "#7C89FF",  // 点缀紫：平衡视觉，显得高级
} as const;



/*
//创意紫橙风格（Creative Tech Theme）
export const brandTheme = {
  primary: "#7C3AED",   // 主色：鲜明紫（带蓝调），主按钮 / 标题色
  secondary: "#E9D5FF", // 辅色：浅紫背景，柔和层次
  hover: "#6D28D9",     // hover：深紫，视觉反馈强
  accent: "#FF8C42",    // 点缀：亮橙，用于强调与动态元素
} as const;
*/




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
