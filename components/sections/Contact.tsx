"use client";

import { motion } from "motion/react";
import { SITE, SERVICES } from "@/lib/constants";
import Button from "@/components/ui/Button";

const borderCls = (i: number) =>
  i % 2 === 0
    ? "border-[rgba(220,38,38,0.2)]"
    : "border-[rgba(16,185,129,0.2)]";

const iconCls = (i: number) =>
  i % 2 === 0 ? "text-brand" : "text-accent";

const icons = ["✦", "◆"];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=60"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/95 to-bg-primary" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-brand/30 text-brand text-sm mb-4"
          >
            ⎔ تواصل معنا
          </motion.span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">ابدأ</span> مشروعك الآن
          </h2>

          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-12">
            تواصل معنا عبر إنستغرام واحصل على استشارة مجانية لمشروعك القادم
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 rounded-3xl border border-border/50 bg-gradient-to-b from-bg-card/80 to-bg-card/20 backdrop-blur-sm overflow-hidden"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand/5 via-accent/5 to-transparent pointer-events-none" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {SERVICES.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${borderCls(i)}`}
                >
                  <span className={iconCls(i)}>{icons[i % 2]}</span>
                  <span className="text-text-secondary text-sm">{s.title}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-text-muted mb-8 max-w-lg mx-auto"
            >
              نرد عليك خلال 24 ساعة. دعنا نبني لك الأساس ونبدأ رحلة النجاح معاً
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button href={SITE.instagram} variant="primary" size="lg">
                ⎔ راسلنا على إنستغرام
              </Button>
              <Button href={SITE.tiktok} variant="outline" size="lg">
                ♪ تيك توك
              </Button>
              <Button href={SITE.telegram} variant="outline" size="lg">
                ✈ تلغرام
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
