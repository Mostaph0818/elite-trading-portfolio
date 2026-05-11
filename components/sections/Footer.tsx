"use client";

import { motion } from "motion/react";
import { SITE, NAV_ITEMS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/[0.02] to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-3">
              <span className="text-gradient">PIT TRADING</span>
              <span className="text-white"> ELITE</span>
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {SITE.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-text-muted hover:text-brand transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand/50" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-4">تواصل معنا</h4>
            <div className="flex flex-col gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-brand transition-colors text-sm flex items-center gap-3 group"
              >
                <span className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                  <span className="text-brand">⎔</span>
                </span>
                <span>إنستغرام</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </a>
              <a
                href={SITE.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-brand transition-colors text-sm flex items-center gap-3 group"
              >
                <span className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                  <span className="text-brand">♪</span>
                </span>
                <span>تيك توك</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </a>
              <a
                href={SITE.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-brand transition-colors text-sm flex items-center gap-3 group"
              >
                <span className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                  <span className="text-brand">✈</span>
                </span>
                <span>تلغرام</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-border/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} PIT TRADING ELITE. جميع الحقوق محفوظة
          </p>
          <p className="text-text-muted text-xs flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            كلشي لي تحتاجو في مكان واحد
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
