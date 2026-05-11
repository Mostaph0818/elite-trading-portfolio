"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { SERVICES } from "@/lib/constants";
import Card from "@/components/ui/Card";
import ServiceDetail from "./ServiceDetail";

const bgImages = [
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=60",
  "https://images.unsplash.com/photo-1504711434969-e33886168d5c?w=400&q=60",
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=60",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=60",
];

export default function Services() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedService = SERVICES.find((s) => s.id === selected);

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary/30 to-bg-primary pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-brand/30 text-brand text-sm mb-4 glow-red"
          >
            ✦ خدماتنا
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            كل ما تحتاجه{" "}
            <span className="text-gradient">في مكان واحد</span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto"
          >
            حلول متكاملة لتنمية نشاطك التجاري من البداية إلى الاحتراف
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                hover3d
                onClick={() => setSelected(service.id)}
                className="h-full group relative overflow-hidden min-h-[280px]"
              >
                <div className="absolute inset-0 opacity-20">
                  <img
                    src={bgImages[index]}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/90 to-bg-card/70" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand/20 to-accent/10 flex items-center justify-center text-xl group-hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/5">
                      <span className={index % 2 === 0 ? "text-brand" : "text-accent"}>
                        {["✦", "◆", "◈", "◇"][index]}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-gradient transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-text-muted text-sm">{service.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.platforms.map((p) => (
                      <span
                        key={p}
                        className="px-3 py-1 rounded-lg bg-white/5 text-text-secondary text-xs border border-white/5 backdrop-blur-sm"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2.5 mb-4">
                    {service.features.slice(0, 3).map((f, i) => (
                      <div
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-text-secondary"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                            i % 2 === 0 ? "bg-brand" : "bg-accent"
                          }`}
                        />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-brand text-sm font-medium group-hover:gap-3 transition-all duration-300 mt-auto">
                    <span>عرض التفاصيل</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <ServiceDetail
        service={selectedService ?? null}
        open={selected !== null}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
