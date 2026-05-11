"use client";

import { motion } from "motion/react";

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  stagger?: number;
}

export default function RevealText({
  children,
  className = "",
  delay = 0,
  tag: Tag = "p",
  stagger = 0.03,
}: RevealTextProps) {
  const chars = children.split("");

  return (
    <Tag className={className} dir="rtl">
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30, rotateX: -90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: delay + i * stagger,
            duration: 0.4,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Tag>
  );
}
