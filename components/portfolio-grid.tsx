"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { projects } from "@/lib/projects";

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  // Tüm projeler aynı detay sayfasına gidecek (ilk proje: limestone-residence)
  return (
    <motion.div variants={fadeInUp} className="group">
      <Link href="/projects/limestone-residence" className="block">
        <div className={`relative ${project.aspect} overflow-hidden cursor-pointer`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-dark-ui/0 transition-colors duration-500 group-hover:bg-dark-ui/50" />
          
          {/* Mobile: Project title on top of image */}
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent p-4 md:hidden">
            <p className="font-serif text-lg text-white drop-shadow-lg">
              {project.title}
            </p>
            <p className="mt-1 text-xs uppercase tracking-widest text-white/80 drop-shadow-md">
              {project.category}
            </p>
          </div>
          
          {/* Desktop: Show on hover */}
          <div className="absolute inset-0 hidden flex-col items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:flex">
            <p className="font-serif text-xl text-primary-foreground sm:text-2xl">
              {project.title}
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-primary-foreground/70">
              {project.category}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function PortfolioGrid() {
  return (
    <section id="portfolio" className="bg-light-bg py-24 lg:py-32">
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
            <p className="text-sm uppercase tracking-widest text-soft-white">
              Portföy
            </p>
            <div className="h-[2px] w-12 bg-soft-white" />
          </div>
          <h2 className="mt-4 font-serif text-3xl text-heading sm:text-4xl lg:text-5xl">
            Seçili Projeler
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-warm-accent" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
