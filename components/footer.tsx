"use client";

import { Instagram, Linkedin, Facebook } from "lucide-react";

const footerLinks = [
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

export function Footer() {
  return (
    <footer className="bg-dark-ui py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <a
              href="#"
              className="font-serif text-2xl tracking-wide text-primary-foreground"
            >
              Atelier
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/50">
              Form ile fonksiyonun buluştuğu zamansız mekanlar yaratan mimarlık stüdyosu.
            </p>
          </div>

          <nav
            className="flex flex-wrap justify-center gap-8"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-primary-foreground/50 transition-colors duration-300 hover:text-warm-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="text-primary-foreground/50 transition-colors duration-300 hover:text-warm-accent"
              >
                <link.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs tracking-wide text-primary-foreground/40">
            {`\u00A9 ${new Date().getFullYear()} Atelier Studio. Tüm hakları saklıdır.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
