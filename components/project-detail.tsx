"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, MapPin, Ruler, Calendar, Check, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { getNextProject, getPreviousProject } from "@/lib/projects";
import type { Project } from "@/lib/projects";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const router = useRouter();
  const nextProject = getNextProject(project.slug);
  const previousProject = getPreviousProject(project.slug);

  // Type guard - these should always be defined based on our implementation
  if (!nextProject || !previousProject) {
    return null;
  }

  // Handle navigation to portfolio section on home page
  const handleBackToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Navigate to home page first
    router.push("/");
    // After navigation, scroll to portfolio section
    setTimeout(() => {
      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection) {
        const headerHeight = 80;
        const targetPosition = portfolioSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      } else {
        // If element not found immediately, try again after a longer delay
        setTimeout(() => {
          const portfolioSection = document.getElementById("portfolio");
          if (portfolioSection) {
            const headerHeight = 80;
            const targetPosition = portfolioSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });
          }
        }, 500);
      }
    }, 100);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        
        <div className="relative z-10 flex h-full flex-col justify-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-16 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href="/#portfolio"
                onClick={handleBackToPortfolio}
                className="mb-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/80 transition-colors duration-300 hover:text-white cursor-pointer"
              >
                <ArrowLeft className="size-4" />
                Portföye Dön
              </a>
              
              <p className="text-sm uppercase tracking-widest text-warm-accent">
                {project.category}
              </p>
              <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-12 lg:grid-cols-3"
          >
            {/* Main Content */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <h2 className="font-serif text-3xl text-heading sm:text-4xl">
                Proje Hakkında
              </h2>
              <div className="mt-4 h-px w-16 bg-warm-accent" />
              <p className="mt-6 text-lg leading-relaxed text-body">
                {project.fullDescription}
              </p>
              
              {/* Features */}
              <div className="mt-12">
                <h3 className="font-serif text-2xl text-heading">Temel Özellikler</h3>
                <ul className="mt-6 space-y-4">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <Check className="mt-1 size-5 shrink-0 text-warm-accent" />
                      <span className="text-body">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Sidebar Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <div className="sticky top-24 space-y-8 border-t border-border pt-8">
                <div>
                  <div className="flex items-center gap-3 text-body">
                    <MapPin className="size-5 text-warm-accent" />
                    <span className="font-medium text-heading">Konum</span>
                  </div>
                  <p className="mt-2 text-body">{project.location}</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 text-body">
                    <Ruler className="size-5 text-warm-accent" />
                    <span className="font-medium text-heading">Alan</span>
                  </div>
                  <p className="mt-2 text-body">{project.area}</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 text-body">
                    <Calendar className="size-5 text-warm-accent" />
                    <span className="font-medium text-heading">Yıl</span>
                  </div>
                  <p className="mt-2 text-body">{project.year}</p>
                </div>

                {project.architect && (
                  <div>
                    <p className="text-sm font-medium uppercase tracking-widest text-body">
                      Mimar
                    </p>
                    <p className="mt-2 text-body">{project.architect}</p>
                  </div>
                )}

                {project.client && (
                  <div>
                    <p className="text-sm font-medium uppercase tracking-widest text-body">
                      Müşteri
                    </p>
                    <p className="mt-2 text-body">{project.client}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      {project.images.length > 1 && (
        <section className="bg-light-bg py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {project.images.slice(1).map((image, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative aspect-[4/3] overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`${project.title} - Görsel ${index + 2}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Navigation Between Projects */}
      <section className="border-t border-border bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Previous Project */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href={`/projects/${previousProject.slug}`}
                className="group block"
              >
                <p className="text-xs uppercase tracking-widest text-body">
                  Önceki Proje
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <ArrowLeft className="size-5 text-warm-accent transition-transform duration-300 group-hover:-translate-x-1" />
                  <div>
                    <h3 className="font-serif text-xl text-heading transition-colors duration-300 group-hover:text-warm-accent">
                      {previousProject.title}
                    </h3>
                    <p className="mt-1 text-sm text-body">
                      {previousProject.category}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Next Project */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:text-right"
            >
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group block md:text-right"
              >
                <p className="text-xs uppercase tracking-widest text-body">
                  Sonraki Proje
                </p>
                <div className="mt-4 flex items-center gap-4 md:justify-end">
                  <div className="md:text-right">
                    <h3 className="font-serif text-xl text-heading transition-colors duration-300 group-hover:text-warm-accent">
                      {nextProject.title}
                    </h3>
                    <p className="mt-1 text-sm text-body">
                      {nextProject.category}
                    </p>
                  </div>
                  <ArrowRight className="size-5 text-warm-accent transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Back to Portfolio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 border-t border-border pt-12 text-center"
          >
            <a
              href="/#portfolio"
              onClick={handleBackToPortfolio}
              className="inline-flex items-center gap-2 border border-border px-8 py-3 text-sm uppercase tracking-widest text-heading transition-colors duration-300 hover:border-warm-accent hover:text-warm-accent cursor-pointer"
            >
              Tüm Projeleri Görüntüle
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
