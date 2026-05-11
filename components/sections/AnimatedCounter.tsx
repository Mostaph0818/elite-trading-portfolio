"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

interface AnimatedCounterProps {
  value: string;
  label: string;
  delay?: number;
}

export default function AnimatedCounter({ value, label, delay = 0 }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState("0");

  const num = parseInt(value.replace(/[^0-9]/g, ""));
  const prefix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!inView || !num) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(num / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) {
        setDisplayed(prefix + num);
        clearInterval(timer);
      } else {
        setDisplayed(prefix + start);
      }
    }, duration / 60);
    return () => clearInterval(timer);
  }, [inView, num, prefix]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className="text-center group"
    >
      <div className="relative">
        <div className="text-3xl md:text-4xl font-extrabold text-gradient">
          {displayed}
        </div>
        <div className="absolute -inset-4 bg-gradient-to-t from-brand/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="text-text-muted text-sm mt-1">{label}</div>
    </motion.div>
  );
}
