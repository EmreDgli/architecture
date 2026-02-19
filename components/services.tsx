"use client";

import { motion } from "framer-motion";
import { Compass, Layers, PenTool, Ruler } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const services = [
  {
    icon: Compass,
    title: "Mimari Tasarım",
    description:
      "Konseptten inşaat dokümanlarına kadar tam kapsamlı tasarım, arazi analizi ve müşteri vizyonuna dayalı.",
  },
  {
    icon: Layers,
    title: "İç Mimarlık",
    description:
      "İç mekanları bilinçli bir şekilde hayata geçiren malzeme paletleri, mekansal planlama ve özel detaylandırma.",
  },
  {
    icon: PenTool,
    title: "Konsept Geliştirme",
    description:
      "Erken aşama fikir geliştirme, fizibilite çalışmaları ve projenin yönünü şekillendiren tasarım anlatıları.",
  },
  {
    icon: Ruler,
    title: "Proje Yönetimi",
    description:
      "İzinlerden teslimata kadar uçtan uca koordinasyon, kalite, bütçe ve zaman çizelgesi uyumunu sağlayarak.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-light-bg py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-12 bg-soft-white" />
            <p className="text-sm uppercase tracking-widest font-semibold text-soft-white">
              Ne Yapıyoruz
            </p>
            <div className="h-[2px] w-12 bg-soft-white" />
          </div>
          <h2 className="mt-4 font-serif text-3xl text-sage-heading sm:text-4xl lg:text-5xl">
            Hizmetlerimiz
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-warm-accent" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative rounded-sm p-6 text-center transition-all duration-300 hover:bg-white/5"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mx-auto flex size-16 items-center justify-center rounded-sm border-2 transition-all duration-300 group-hover:border-white/80 group-hover:bg-white/10"
                style={{ borderColor: 'oklch(0.5 0.01 145)' }}
              >
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="size-7 transition-all duration-300 group-hover:text-white" style={{ color: 'oklch(0.35 0 0)' }} />
                </motion.div>
              </motion.div>
              <motion.h3
                whileHover={{ color: 'oklch(0.784 0.028 75)' }}
                transition={{ duration: 0.3 }}
                className="mt-6 font-serif text-lg text-sage-heading transition-colors duration-300"
              >
                {service.title}
              </motion.h3>
              <motion.p
                whileHover={{ color: 'oklch(0.25 0 0)' }}
                transition={{ duration: 0.3 }}
                className="mt-3 text-sm leading-relaxed text-sage-body transition-colors duration-300"
              >
                {service.description}
              </motion.p>
              {/* Decorative line on hover */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileHover={{ width: "60%", opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mx-auto mt-4 h-[1px] bg-warm-accent"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
