"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  name: string;
  category: "all" | "fullstack" | "frontend" | "freelance";
  categoryLabel: string;
  url: string;
  previewUrl: string;
  tags: string[];
  description: string;
  featuresTitle: string;
  features: string[];
  liveUrl: string | null;
  codeUrl: string | null;
}

const SHOT = (url: string) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=630`;

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "MERN & Full-Stack" },
  { id: "frontend", label: "Frontend & Next.js" },
  { id: "freelance", label: "Client & SaaS" },
];

const projects: Project[] = [
  {
    id: "sun-and-soil",
    name: "Sun and Soil",
    category: "fullstack",
    categoryLabel: "MERN Full-Stack",
    url: "https://sunandsoilegypt.com",
    previewUrl: SHOT("https://sunandsoilegypt.com"),
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    description:
      "Full-stack MERN production platform for an Egyptian agricultural exporting company featuring a responsive client site with product catalogs, company profile, and export service inquiries.",
    featuresTitle: "Key Architecture Highlights",
    features: [
      "Custom admin panel with comprehensive product, catalog & inquiry management",
      "Secure JWT authentication with role-based access control",
      "Fully responsive, SEO-optimized client-facing application",
    ],
    liveUrl: "https://sunandsoilegypt.com",
    codeUrl: null,
  },
  {
    id: "sustaingrc",
    name: "SustainGRC",
    category: "freelance",
    categoryLabel: "SaaS Enterprise",
    url: "https://sustaingrc.com",
    previewUrl: SHOT("https://sustaingrc.com"),
    tags: ["React.js", "Tailwind CSS", "REST APIs", "Modular Architecture"],
    description:
      "Enterprise ESG Governance & Compliance SaaS platform engineered during an internship at LevelUp ESG (London). Built modular, reusable React components powering dynamic dashboards.",
    featuresTitle: "Key Architecture Highlights",
    features: [
      "Modular design-system components following strict TypeScript conventions",
      "RESTful API integration with dynamic compliance reports & analytics",
      "Cross-browser performance optimization & high UX consistency",
    ],
    liveUrl: "https://sustaingrc.com",
    codeUrl: null,
  },
  {
    id: "your-shop",
    name: "Your Shop",
    category: "frontend",
    categoryLabel: "E-Commerce",
    url: "https://ecommerce-app-seven-lake.vercel.app",
    previewUrl: SHOT("https://ecommerce-app-seven-lake.vercel.app"),
    tags: ["React.js", "Tailwind CSS", "Zustand", "Vite"],
    description:
      "High-speed, responsive e-commerce web application with product filtering, shopping cart, and user auth, leveraging Zustand for lightweight, optimistic state management.",
    featuresTitle: "Key Architecture Highlights",
    features: [
      "Optimistic UI updates for cart items with Zustand global store",
      "Zero-latency client-side search, sorting, and category filters",
      "Responsive checkout simulation with persistent localStorage sync",
    ],
    liveUrl: "https://ecommerce-app-seven-lake.vercel.app",
    codeUrl: "https://github.com/12wale/Ecommerce-app",
  },
  {
    id: "ajyad",
    name: "Ajyad – Holy Journeys",
    category: "freelance",
    categoryLabel: "Client Platform",
    url: "https://ajyad-holy-journeys.vercel.app",
    previewUrl: SHOT("https://ajyad-holy-journeys.vercel.app"),
    tags: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    description:
      "Production travel platform for Ajyad specializing in Hajj & Umrah pilgrimage packages. Built with an elegant, trust-building aesthetic and streamlined booking inquiry workflows.",
    featuresTitle: "Key Architecture Highlights",
    features: [
      "Dynamic package catalog with detailed itineraries and pricing tiers",
      "Mobile-first responsive architecture designed for international pilgrims",
      "Clean UI system with high accessibility and contrast compliance",
    ],
    liveUrl: "https://ajyad-holy-journeys.vercel.app",
    codeUrl: null,
  },
  {
    id: "jabalawi",
    name: "Jabalawi – Dining & Retreats",
    category: "frontend",
    categoryLabel: "Interactive Web",
    url: "https://jabalawi.vercel.app/",
    previewUrl: SHOT("https://jabalawi.vercel.app/"),
    tags: ["React.js", "Next.js", "Tailwind CSS", "Micro-Animations"],
    description:
      "A modern, responsive culinary experience website. Features smooth micro-animations, categorized dish menus, and an immersive brand atmosphere across all screen sizes.",
    featuresTitle: "Key Architecture Highlights",
    features: [
      "Interactive digital restaurant menu with category filtering",
      "Fluid micro-animations with high-performance CSS transforms",
      "Optimized imagery and fast first contentful paint (FCP)",
    ],
    liveUrl: "https://jabalawi.vercel.app/",
    codeUrl: null,
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  const handleCategoryClick = (catId: string) => {
    setActiveCategory(catId);
  };

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-surface-container-low relative" id="projects">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-primary/30 text-primary text-xs uppercase tracking-widest font-bold font-orbitron">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            Featured Works
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-orbitron">
            Production <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base">
            A curated selection of client platforms, SaaS dashboards, and full-stack web applications.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}

                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 font-orbitron cursor-pointer ${
                  isActive ? "text-white" : "text-on-surface-variant hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="project-cat-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 border border-primary/50 shadow-[0_0_20px_rgba(189,157,255,0.25)] -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Framer Motion AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col rounded-2xl glass-card overflow-hidden border border-white/10 hover:border-primary/50"
              >
                {/* Image Preview with Hover Reveal */}
                <div className="aspect-video relative overflow-hidden bg-[#091328]">
                  <Image
                    alt={project.name}
                    fill
                    className="object-cover object-top opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                    src={project.previewUrl}
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091328] via-[#091328]/30 to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full glass border border-white/20 text-white">
                      {project.categoryLabel}
                    </span>
                    <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">
                        Live App
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow space-y-4">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-[#192540]/80 text-[11px] font-semibold rounded-md border border-white/10 text-on-surface-variant font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-orbitron group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed mt-2 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 mt-auto border-t border-white/10 flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
        
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-surface text-xs font-bold font-orbitron uppercase tracking-wider hover:shadow-[0_0_20px_rgba(189,157,255,0.6)] hover:scale-105 transition-all"
                      >
                        <span className="material-symbols-outlined text-base">language</span>
                        <span>Visit Site</span>
                      </a>
                    )}

                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
        
                        className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-white/15 text-white text-xs font-bold font-orbitron uppercase tracking-wider hover:border-primary/50 hover:bg-white/10 transition-all"
                      >
                        <span className="material-symbols-outlined text-base">code</span>
                        <span>Source</span>
                      </a>
                    )}

                    <button
                      onClick={() => handleOpenDetails(project)}
      
                      className="ml-auto text-xs font-bold text-secondary hover:text-white flex items-center gap-1 transition-colors font-orbitron cursor-pointer"
                    >
                      <span>Details</span>
                      <span className="material-symbols-outlined text-base">read_more</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Global GitHub CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/12wale"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 glass-card rounded-2xl text-white font-bold text-sm uppercase tracking-wider font-orbitron border border-white/15 hover:border-primary/50 transition-all hover:scale-105 group"
          >
            <span className="material-symbols-outlined text-primary group-hover:rotate-12 transition-transform">terminal</span>
            <span>View 20+ Repositories on GitHub</span>
            <span className="material-symbols-outlined group-hover:translate-x-1.5 transition-transform">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-2xl bg-[#091328] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.9)] z-10 space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono uppercase text-secondary font-bold">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="text-2xl font-bold text-white font-orbitron">
                    {selectedProject.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-on-surface-variant hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                {selectedProject.description}
              </p>

              <div>
                <h4 className="text-xs uppercase font-bold text-primary font-orbitron tracking-wider mb-3">
                  {selectedProject.featuresTitle}
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface">
                      <span className="text-secondary mt-0.5">✦</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-on-surface-variant"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-surface font-bold text-xs uppercase tracking-wider text-center font-orbitron hover:shadow-[0_0_20px_rgba(189,157,255,0.6)]"
                  >
                    Open Live App
                  </a>
                )}
                {selectedProject.codeUrl && (
                  <a
                    href={selectedProject.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl glass border border-white/20 text-white font-bold text-xs uppercase tracking-wider text-center font-orbitron hover:bg-white/10"
                  >
                    GitHub Code
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
