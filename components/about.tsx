"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24"
        >
          <motion.div variants={fadeInUp} className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/hero.jpg"
              alt="Parlak bir stüdyoda bina planlarını inceleyen mimar"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div variants={fadeInUp}>
            <p className="text-sm uppercase tracking-widest text-warm-accent">
              Stüdyo Hakkında
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-snug text-heading sm:text-4xl lg:text-5xl text-balance">
              Amaca Dayalı Mimarlık
            </h2>
            <div className="mt-2 h-px w-16 bg-warm-accent" />
            <p className="mt-8 text-base leading-relaxed text-body">
              2009 yılında kurulan Atelier, İstanbul merkezli ödüllü bir mimarlık stüdyosudur. 
              Büyük tasarımın dinlemekten, bağlamı, iklimi, kültürü ve yarattığımız mekanları 
              yaşayacak insanları anlamaktan doğduğuna inanıyoruz.
            </p>
            <p className="mt-5 text-base leading-relaxed text-body">
              Çalışmalarımız üç kıtada konut, ticari ve kültürel projeleri kapsamaktadır. 
              Her proje, araziye derin bir saygı ve zarafetle yaşlanan malzemelere bağlılıkla başlar.
            </p>
            <div className="mt-10 flex gap-12">
              <div>
                <p className="font-serif text-3xl text-heading">120+</p>
                <p className="mt-1 text-sm text-body">Tamamlanan Proje</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-heading">15</p>
                <p className="mt-1 text-sm text-body">Yıllık Deneyim</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-heading">8</p>
                <p className="mt-1 text-sm text-body">Tasarım Ödülü</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
