"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

export function FeaturedProject() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid items-center gap-12 lg:grid-cols-5 lg:gap-20"
        >
          <motion.div variants={fadeInUp} className="relative aspect-[16/10] overflow-hidden lg:col-span-3">
            <Image
              src="/hero.jpg"
              alt="Cam Ev - doğayla çevrili modern bir konut projesi"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <p className="text-sm uppercase tracking-widest text-warm-accent">
              Öne Çıkan Proje
            </p>
            <h2 className="mt-4 font-serif text-3xl text-heading sm:text-4xl text-balance">
              The Glass House
            </h2>
            <div className="mt-3 h-px w-16 bg-warm-accent" />
            <p className="mt-6 text-base leading-relaxed text-body">
              Ege'nin kıyı tepelerine yerleşmiş bir konut şaheseri. Tavan taban camlar 
              iç mekan ile peyzaj arasındaki sınırı eritirken, doğal taş yapıyı 
              arazisine sabitler.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-body">
              <li className="flex items-baseline gap-3">
                <span className="h-px w-4 shrink-0 bg-warm-accent" />
                <span>Konum: Bodrum, Turkey</span>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="h-px w-4 shrink-0 bg-warm-accent" />
                <span>Alan: 480 sqm</span>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="h-px w-4 shrink-0 bg-warm-accent" />
                <span>Yıl: 2024</span>
              </li>
            </ul>
            <Link
              href="/projects/limestone-residence"
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-heading transition-colors duration-300 hover:text-warm-accent"
            >
              Projeyi Görüntüle
              <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
