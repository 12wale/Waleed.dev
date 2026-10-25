"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "languages" | "animation";
  level: string;
  badge: string;
}

const SKILLS_DATA: SkillItem[] = [
  // Frontend
  { name: "React.js / React 19", category: "frontend", level: "Advanced", badge: "Core" },
  { name: "Next.js 15 (App Router)", category: "frontend", level: "Advanced", badge: "Core" },
  { name: "Tailwind CSS v4", category: "frontend", level: "Expert", badge: "Styling" },
  { name: "Zustand & Context API", category: "frontend", level: "Advanced", badge: "State" },
  { name: "Redux / Redux Toolkit", category: "frontend", level: "Intermediate", badge: "State" },
  { name: "Responsive & Mobile First", category: "frontend", level: "Expert", badge: "Architecture" },

  // Languages
  { name: "TypeScript", category: "languages", level: "Advanced", badge: "Type Safety" },
  { name: "JavaScript (ES6+)", category: "languages", level: "Expert", badge: "Language" },
  { name: "HTML5 & Semantic Web", category: "languages", level: "Expert", badge: "Structure" },
  { name: "Modern CSS3", category: "languages", level: "Expert", badge: "Styling" },
  { name: "C++ (Competitive)", category: "languages", level: "Intermediate", badge: "ICPC" },
  { name: "Java", category: "languages", level: "Intermediate", badge: "OOP" },

  // Backend
  { name: "Node.js", category: "backend", level: "Advanced", badge: "Runtime" },
  { name: "Express.js", category: "backend", level: "Advanced", badge: "Framework" },
  { name: "MongoDB & Mongoose", category: "backend", level: "Advanced", badge: "Database" },
  { name: "RESTful API Design", category: "backend", level: "Expert", badge: "APIs" },
  { name: "JWT Auth & RBAC", category: "backend", level: "Advanced", badge: "Security" },

  // Animation & Tools
  { name: "GSAP (ScrollTrigger, quickTo)", category: "animation", level: "Advanced", badge: "Motion" },
  { name: "Framer Motion", category: "animation", level: "Advanced", badge: "React Physics" },
  { name: "Lenis Smooth Scroll", category: "animation", level: "Advanced", badge: "UX" },
  { name: "Git, GitHub & Bitbucket", category: "animation", level: "Advanced", badge: "VCS" },
  { name: "Postman & REST Testing", category: "animation", level: "Advanced", badge: "Testing" },
  { name: "Figma to Code", category: "animation", level: "Advanced", badge: "Design" },
];

const CATEGORIES = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend & Next.js" },
  { id: "languages", label: "Languages" },
  { id: "backend", label: "Backend & APIs" },
  { id: "animation", label: "Motion & Tools" },
];

const METHODOLOGIES = [
  "Component-Based Architecture",
  "High-Performance Rendering",
  "Agile / Scrum Sprints",
  "Object-Oriented Programming (OOP)",
  "Cross-Browser Testing",
  "Git Flow & Peer Reviews",
  "Clean Code & Refactoring",
  "SEO & Core Web Vitals",
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills = SKILLS_DATA.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-surface relative overflow-hidden" id="skills">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-secondary/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-secondary/30 text-secondary text-xs uppercase tracking-widest font-bold font-orbitron">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Technical Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-orbitron">
            Skills &amp; <span className="text-gradient-secondary">Capabilities</span>
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base">
            Engineered with modern best practices, strict type safety, and 60-120 FPS animation principles.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 font-orbitron cursor-pointer ${
                  isActive ? "text-white" : "text-on-surface-variant hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="skills-cat-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary/30 to-primary/30 border border-secondary/50 shadow-[0_0_20px_rgba(52,181,250,0.25)] -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-5 rounded-xl glass-card border border-white/10 hover:border-secondary/40 flex items-center justify-between group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary group-hover:scale-125 transition-transform"></span>
                    <h3 className="text-sm sm:text-base font-bold text-white font-sans group-hover:text-secondary transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <p className="text-[11px] text-on-surface-variant font-mono pl-4">
                    Proficiency: {skill.level}
                  </p>
                </div>

                <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-on-surface-variant group-hover:text-white group-hover:border-secondary/30 transition-colors">
                  {skill.badge}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Methodologies & Standards */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl glass-card border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary text-2xl">verified</span>
            <h3 className="text-sm uppercase tracking-widest text-white font-bold font-orbitron">
              Engineering Disciplines &amp; Standards
            </h3>
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {METHODOLOGIES.map((item) => (
              <span
                key={item}
                className="px-3.5 py-2 rounded-xl text-xs font-medium bg-[#141f38]/60 border border-white/10 text-on-surface-variant hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
