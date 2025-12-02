"use client";

type SubDividerProps = {
  className?: string;
};

export default function SubDivider({ className }: SubDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`h-[1px] w-full rounded-full bg-gradient-to-r from-amber-200/80 via-orange-200/80 to-amber-200/80 dark:from-amber-400/40 dark:via-orange-500/45 dark:to-amber-400/40 ${className || ""}`}
      style={{ padding: 0 }}
    />
  );
}
