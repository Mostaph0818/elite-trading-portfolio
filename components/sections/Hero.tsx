"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SITE } from "@/lib/constants";
import Button from "@/components/ui/Button";
import HeroThreeWrapper from "./HeroThreeWrapper";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <HeroThreeWrapper />

      <motion.div className="absolute inset-0 z-[1]" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-gradient-to-b from-brand/8 via-transparent to-bg-primary" />
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 -right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg-primary to-transparent z-10"
      />

      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-16">
          {/* Logo - Left side (visually) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-3xl overflow-hidden border-2 border-brand/30 glow-red flex items-center justify-center bg-bg-card/50 backdrop-blur-sm">
              <img
                src="/images/logo.png"
                alt="PIT TRADING ELITE"
                className="object-contain w-full h-full"
              />
            </div>
          </motion.div>

          {/* Text - Right side (visually) */}
          <div className="flex-1 text-right">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-3">
                <span className="text-gradient">PIT TRADING</span>
                <br />
                <span className="text-white">ELITE</span>
              </h1>

              <div className="w-20 h-1 bg-gradient-to-l from-brand to-accent rounded-full mb-4 mr-auto" />

              <p className="text-xl md:text-2xl font-bold text-gradient mb-2">
                {SITE.tagline}
              </p>

              <p className="text-text-secondary text-base md:text-lg mb-8 leading-relaxed">
                <span className="text-brand">●</span> متاجر إلكترونية{" "}
                <span className="text-accent">●</span> إعلانات ممولة{" "}
                <span className="text-brand">●</span> دورات تداول{" "}
                <span className="text-accent">●</span> خدمات رقمية
              </p>

              <div className="flex flex-row justify-end gap-3">
                <Button href={SITE.instagram} variant="primary" size="lg">
                  ⎔ تواصل معنا
                </Button>
                <Button href="#services" variant="outline" size="lg">
                  خدماتنا ↓
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats - Full width below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto"
        >
          <AnimatedCounter value="+50" label="متجر إلكتروني" delay={1} />
          <AnimatedCounter value="+200" label="حملة إعلانية" delay={1.2} />
          <AnimatedCounter value="+1000" label="متدرب" delay={1.4} />
          <AnimatedCounter value="98%" label="رضا العملاء" delay={1.6} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-text-muted text-xs">اسفل</span>
          <div className="w-5 h-8 rounded-full border-2 border-text-muted flex items-start justify-center p-1">
            <div className="w-1.5 h-3 rounded-full bg-gradient-to-b from-brand to-accent" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
