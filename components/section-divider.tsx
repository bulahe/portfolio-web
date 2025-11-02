"use client";
import React from "react";
import { motion } from "framer-motion";
import { brandTheme } from "@/lib/theme";

type SectionDividerProps = {
  flowDuration?: number;
};

export default function SectionDivider({ flowDuration = 5 }: SectionDividerProps) {
  return (
    <motion.div
      className="relative mx-auto my-16 h-[2px] w-full max-w-4xl overflow-hidden rounded-full sm:my-24"
      style={{
        background: `linear-gradient(90deg, transparent 0%, ${brandTheme.secondary}80 35%, ${brandTheme.accent}66 65%, transparent 100%)`,
      }}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.12, duration: 0.35 }}
    >
      <span
        className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen"
        style={{
          background: `radial-gradient(circle at 20% 50%, ${brandTheme.secondary}40, transparent 60%), radial-gradient(circle at 80% 50%, ${brandTheme.accent}35, transparent 65%)`,
        }}
      />
      <span
        className="pointer-events-none absolute inset-0 opacity-80 mix-blend-screen flow-divider-glow"
        style={{
          background: `linear-gradient(90deg, transparent 15%, ${brandTheme.primary}70 35%, ${brandTheme.accent}80 50%, ${brandTheme.accent}60 65%, transparent 85%)`,
          backgroundSize: "200% 100%",
          filter: "blur(6px)",
          animationDuration: `${flowDuration}s`,
        }}
      />
      <span
        className="pointer-events-none absolute inset-0"
        style={{
          boxShadow: `0 0 48px ${brandTheme.accent}33`,
        }}
      />
      <style jsx>{`
        .flow-divider-glow {
          animation-name: flow-divider;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes flow-divider {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </motion.div>
  );
}
