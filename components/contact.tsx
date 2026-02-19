"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Send, Instagram, Facebook, Linkedin } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-16 lg:grid-cols-2 lg:gap-24"
        >
          <motion.div variants={fadeInUp}>
            <p className="text-sm uppercase tracking-widest text-warm-accent">
              İletişime Geçin
            </p>
            <h2 className="mt-4 font-serif text-3xl text-heading sm:text-4xl lg:text-5xl text-balance">
              Bir Konuşma Başlatalım
            </h2>
            <div className="mt-3 h-px w-16 bg-warm-accent" />
            <p className="mt-8 text-base leading-relaxed text-body">
              Aklınızda bir proje olsun ya da sadece olanakları keşfetmek isteyin, 
              sizden haber almak isteriz. Her büyük yapı bir konuşmayla başlar.
            </p>
            <div className="mt-10 space-y-4 text-sm text-body">
              <p>
                <span className="text-heading">Adres</span>
                <br />
                Kazlıçeşme, Cinoğlu Çk No:4, 34020 Zeytinburnu/İstanbul
              </p>
              <p>
                <span className="text-heading">Telefon</span>
                <br />
                <a href="tel:+905332659457" className="hover:text-warm-accent transition-colors">
                  +90 533 265 9457
                </a>
              </p>
              <p>
                <span className="text-heading">E-posta</span>
                <br />
                <a href="mailto:info@sahatasarimvemimarlik.com" className="hover:text-warm-accent transition-colors">
                  info@sahatasarimvemimarlik.com
                </a>
              </p>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-10">
              <p className="mb-4 text-sm font-medium text-heading">Sosyal Medya</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/sahatasarimvemimarlik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center rounded-sm border border-border p-3 text-body transition-colors duration-300 hover:border-warm-accent hover:text-warm-accent"
                >
                  <Instagram className="size-5" />
                </a>
                <a
                  href="https://www.facebook.com/people/Saha-Tasar%C4%B1m-Mimarl%C4%B1k/61585986479883/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex items-center justify-center rounded-sm border border-border p-3 text-body transition-colors duration-300 hover:border-warm-accent hover:text-warm-accent"
                >
                  <Facebook className="size-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center rounded-sm border border-border p-3 text-body transition-colors duration-300 hover:border-warm-accent hover:text-warm-accent"
                >
                  <Linkedin className="size-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-heading">
                  İsim
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Adınız"
                  className="border-border bg-transparent text-heading placeholder:text-body/50 focus-visible:border-warm-accent focus-visible:ring-warm-accent/30"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-heading">
                  E-posta
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="e-posta@adresiniz.com"
                  className="border-border bg-transparent text-heading placeholder:text-body/50 focus-visible:border-warm-accent focus-visible:ring-warm-accent/30"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-heading">
                  Mesaj
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Projeniz hakkında bize bilgi verin..."
                  className="border-border bg-transparent text-heading placeholder:text-body/50 focus-visible:border-warm-accent focus-visible:ring-warm-accent/30"
                />
              </div>
              <Button
                type="submit"
                disabled={status === "sending"}
                className="bg-warm-accent text-heading hover:bg-warm-accent/80 rounded-none px-8 py-5 text-sm uppercase tracking-widest"
              >
                {status === "sending" ? "Gönderiliyor..." : "Mesaj Gönder"}
                <Send className="ml-2 size-4" />
              </Button>
              {status === "sent" && (
                <p className="text-sm text-warm-accent">
                  Teşekkürler! En kısa sürede size dönüş yapacağız.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive">
                  Bir şeyler yanlış gitti. Lütfen tekrar deneyin.
                </p>
              )}
            </form>
          </motion.div>
        </motion.div>
        
        {/* Google Maps - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 w-full"
        >
          <div className="aspect-video w-full overflow-hidden rounded-sm">
            <iframe
              src="https://www.google.com/maps?q=Kazlıçeşme,+Cinoğlu+Çk+No:4,+34020+Zeytinburnu/İstanbul&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
