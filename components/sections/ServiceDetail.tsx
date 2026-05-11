"use client";

import { motion, AnimatePresence } from "motion/react";
import Button from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

interface ServiceDetailProps {
  service: {
    id: string;
    title: string;
    subtitle: string;
    icon: string;
    platforms: readonly string[];
    features: readonly string[];
    cta: string;
    link?: string;
  } | null;
  open: boolean;
  onClose: () => void;
}

export default function ServiceDetail({ service, open, onClose }: ServiceDetailProps) {
  return (
    <AnimatePresence>
      {open && service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 50, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 50, rotateX: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl bg-gradient-to-b from-bg-card to-bg-secondary border border-border/50 p-8 shadow-2xl"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand via-accent to-brand" />

            <button
              onClick={onClose}
              className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-text-secondary hover:text-white hover:bg-brand/20 hover:scale-110 transition-all"
            >
              ✕
            </button>

            <div className="flex items-center gap-4 mb-6">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand/15 to-accent/10 flex items-center justify-center text-3xl"
              >
                <span className="text-brand">✦</span>
              </motion.div>
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-2xl font-bold"
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-text-secondary text-sm"
                >
                  {service.subtitle}
                </motion.p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-6"
            >
              <p className="text-text-muted text-xs mb-3 font-medium uppercase tracking-wider">المنصات</p>
              <div className="flex flex-wrap gap-2">
                {service.platforms.map((p, i) => (
                  <motion.span
                    key={p}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="px-4 py-1.5 rounded-xl text-sm font-medium border"
                    style={{
                      borderColor: i % 2 === 0 ? "rgba(220,38,38,0.3)" : "rgba(16,185,129,0.3)",
                      color: i % 2 === 0 ? "#EF4444" : "#34D399",
                      background: i % 2 === 0 ? "rgba(220,38,38,0.08)" : "rgba(16,185,129,0.08)",
                    }}
                  >
                    {p}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mb-8"
            >
              <p className="text-text-muted text-xs mb-3 font-medium uppercase tracking-wider">ماذا نقدم</p>
              <div className="space-y-3">
                {service.features.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.06 }}
                    className="flex items-start gap-3 group"
                  >
                    <span
                      className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110 ${
                        i % 2 === 0 ? "bg-brand/15 text-brand" : "bg-accent/15 text-accent"
                      }`}
                    >
                      <span className="text-xs">{i % 2 === 0 ? "→" : "←"}</span>
                    </span>
                    <span className="text-text-secondary leading-relaxed">{f}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button href={service.link || SITE.instagram} variant="primary" size="lg" className="w-full">
                ⎔ {service.cta}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
