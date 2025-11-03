"use client";
import React from "react";
import { motion } from "framer-motion";
import { brandTheme } from "@/lib/theme";

export default function SectionDivider() {
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
        className="pointer-events-none absolute inset-0"
        style={{
          boxShadow: `0 0 48px ${brandTheme.accent}33`,
        }}
      />
     
    </motion.div>
  );
}
