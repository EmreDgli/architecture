"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Facebook, Linkedin } from "lucide-react";

const navLinks = [
  { label: "Hakkımızda", href: "#about" },
  { label: "Projeler", href: "#portfolio" },
  { label: "Hizmetler", href: "#services" },
  { label: "İletişim", href: "#contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/sahatasarimvemimarlik/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/people/Saha-Tasar%C4%B1m-Mimarl%C4%B1k/61585986479883/", icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      // Scroll eder edmez değişim göster
      setScrolled(scrollY > 0);
      // Hero section'ın %90'ını geçince artık hero üzerinde değiliz
      setIsOverHero(scrollY < heroHeight * 0.9);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Scroll edildiğinde hemen değişim göster
  // Hero üzerindeyken bile scroll edildiğinde hafif background göster (daha okunabilir)
  // Hero üzerinde değilken tam background ve dark text
  const isLightHeader = scrolled && !isOverHero;
  const showBackground = scrolled; // Scroll eder edmez background göster

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
    <motion.header
      initial={false}
      animate={{
        backgroundColor: showBackground 
          ? (isLightHeader ? "rgba(255, 255, 255, 0.95)" : "rgba(0, 0, 0, 0.3)")
          : "transparent",
        backdropFilter: showBackground ? "blur(8px)" : "blur(0px)",
        borderBottomColor: showBackground 
          ? (isLightHeader ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.1)")
          : "transparent",
      }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-12">
        <motion.a
          href="#"
          animate={{
            color: isLightHeader ? "#1A1A1A" : "#FFFFFF",
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="font-serif text-xl tracking-wide"
        >
          Atelier
        </motion.a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              animate={{
                color: isLightHeader ? "#7A7A7A" : "#FFFFFF",
              }}
              whileHover={{
                color: isLightHeader ? "#1A1A1A" : "#C6B9A3",
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-sm tracking-widest uppercase cursor-pointer"
            >
              {link.label}
            </motion.a>
          ))}
          
          {/* Social Media Icons */}
          <div className="ml-6 flex items-center gap-4 border-l border-current/20 pl-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                animate={{
                  color: isLightHeader ? "#7A7A7A" : "#FFFFFF",
                }}
                whileHover={{
                  color: isLightHeader ? "#1A1A1A" : "#C6B9A3",
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="cursor-pointer"
              >
                <social.icon className="size-5" />
              </motion.a>
            ))}
          </div>
        </nav>

        <button
          className="relative z-50 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="size-6 text-primary-foreground" />
          ) : (
            <motion.div
              animate={{
                color: isLightHeader ? "#1A1A1A" : "#FFFFFF",
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <Menu className="size-6" />
            </motion.div>
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex min-h-screen w-full items-center justify-center bg-dark-ui"
          >
            <nav className="flex w-full flex-col items-center justify-center gap-8 px-6" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    delay: 0.1 + i * 0.08,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  onClick={(e) => {
                    setMobileOpen(false);
                    handleSmoothScroll(e, link.href);
                  }}
                  className="w-full text-center font-serif text-2xl text-primary-foreground tracking-wide transition-colors duration-300 hover:text-warm-accent sm:text-3xl"
                >
                  {link.label}
                </motion.a>
              ))}
              
              {/* Social Media Icons - Mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-8 flex items-center justify-center gap-8"
              >
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.15 }}
                    className="text-primary-foreground transition-colors duration-300 hover:text-warm-accent"
                  >
                    <social.icon className="size-7" />
                  </motion.a>
                ))}
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
