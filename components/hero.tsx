"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  // Smooth scroll function with easing
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 80; // Header yüksekliği için offset
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      // Smooth scroll with easing animation
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // 1 saniye
      let start: number | null = null;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo({
          top: startPosition + distance * ease,
          behavior: "auto" as ScrollBehavior,
        });

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Dramatik ışıklandırmalı modern mimari cephe"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl font-normal leading-tight tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance drop-shadow-2xl"
        >
          İlham Veren Mekanlar Tasarlıyoruz
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg drop-shadow-lg"
        >
          Form ile fonksiyonun buluştuğu, ışığın deneyimi şekillendirdiği zamansız mekanlar yaratan mimarlık stüdyosu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10"
        >
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "#about")}
            className="inline-flex items-center gap-2 border border-white/40 bg-white/10 backdrop-blur-sm px-8 py-3 text-sm uppercase tracking-widest text-white transition-all duration-300 hover:border-warm-accent hover:bg-warm-accent/30 hover:shadow-lg cursor-pointer"
          >
            Keşfet
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")} aria-label="Aşağı kaydır" className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="size-6 text-white/80 drop-shadow-md" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
