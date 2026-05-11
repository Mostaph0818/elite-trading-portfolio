"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_ITEMS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <img src="/images/logo.png" alt="PIT TRADING ELITE" className="h-10 w-10 object-contain" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-text-secondary hover:text-brand transition-colors text-sm relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand to-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-brand text-white text-sm font-medium hover:bg-brand-light transition-all hover:shadow-lg hover:shadow-brand/20"
          >
            ⎔ تواصل معنا
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2 relative w-8 h-8"
        >
          <motion.div
            animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-white absolute top-2 right-1.5"
          />
          <motion.div
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-5 h-0.5 bg-white absolute top-3.5 right-1.5"
          />
          <motion.div
            animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-white absolute top-5 right-1.5"
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-secondary border-t border-border/50 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-text-secondary hover:text-brand transition-colors py-2.5 px-3 rounded-xl hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-brand text-white text-center font-medium mt-2"
              >
                ⎔ تواصل معنا
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
