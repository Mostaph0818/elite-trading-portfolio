"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover3d?: boolean;
  onClick?: () => void;
}

export default function Card({ children, className, hover3d, onClick }: CardProps) {
  const classes = cn(
    "rounded-2xl bg-bg-card border border-border/50 p-6 transition-colors duration-300 hover:border-brand/20",
    onClick && "cursor-pointer",
    className,
  );

  if (hover3d) {
    return (
      <motion.div
        className={classes}
        onClick={onClick}
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}
