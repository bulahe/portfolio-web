import type { CSSProperties } from "react";


export const brandTheme = {
  primary: "#008BD9",
  secondary: "#91EAFF",
  hover: "#00A3C4",
  accent: "#7C89FF",
} as const;


/*
//科技未来蓝（偏 CMU ETC / Vision Pro 风格）
export const brandTheme = {
  primary: "#3B82F6",   // 电蓝主色，科技感强
  secondary: "#93C5FD", // 浅蓝，用于背景或衬托
  hover: "#2563EB",     // 深蓝 hover 状态
  accent: "#818CF8",    // 紫蓝点缀，带未来感
} as const;
*/

/*
//理性中性色（适合展示 HCI / 工程气质）
export const brandTheme = {
  primary: "#334155",   // 石墨灰蓝主色，理性稳重
  secondary: "#CBD5E1", // 浅灰蓝，用于分区背景
  hover: "#1E293B",     // 深灰 hover 状态
  accent: "#0EA5E9",    // 青蓝点缀，带科技亮点
} as const;
*/

/*
//创意科技紫蓝（偏 Media Lab / 创意科技）
export const brandTheme = {
  primary: "#4F46E5",   // 靛蓝主色，带创意张力
  secondary: "#A5B4FC", // 淡紫蓝，柔和视觉
  hover: "#4338CA",     // 深靛 hover
  accent: "#C084FC",    // 粉紫点缀，前卫又温度
} as const;
*/

/*
//暗色沉浸风格（适合视频/AR展示）
export const brandTheme = {
  primary: "#0F172A",   // 炭黑背景主色
  secondary: "#1E293B", // 深灰蓝辅助
  hover: "#22D3EE",     // 明亮青 hover 效果
  accent: "#818CF8",    // 紫蓝点缀，视觉焦点
} as const;
*/

/*
//现代橙紫互补风（偏创意设计、视觉冲击感强）
export const brandTheme = {
  primary: "#FF6B00",   // 主橙：浓烈且醒目
  secondary: "#FFD9B3", // 辅助暖橙，用于背景或阴影
  hover: "#FF854D",     // hover：亮一点的橙红
  accent: "#7C3AED",    // 点缀紫：平衡视觉，显得高级
} as const;
*/

/*
//活力橙青风格（适合创新科技、互动设计）
export const brandTheme = {
  primary: "#FF6A00",   // 橙色主调
  secondary: "#E0F7FA", // 青绿背景对比色
  hover: "#FF8C1A",     // hover：亮橙
  accent: "#00E0C6",    // 青绿点缀，未来感十足
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
