"use client";

import React from "react";
import { motion } from "framer-motion";

export function BentoCard({
  children,
  glowColor = "#007AFF",
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  glowColor?: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.01, y: -3 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className={`group relative overflow-hidden rounded-3xl border border-black/5 dark:border-white/10 bg-white dark:bg-[#2C2C2E] p-7 shadow-sm hover:shadow-xl dark:shadow-black/20 transition-all duration-300 ${className}`}
    >
      {/* Resplandor ambiental superior en hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ background: `radial-gradient(circle at 50% 0%, ${glowColor}25, transparent 70%)` }}
      />
      {/* Línea de brillo sutil en el borde superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/5 dark:via-white/15 to-transparent" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
