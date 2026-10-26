"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlanetSkills from "@/components/PlanetSkills";

interface SkillItem {
  name: string;
  category: "frontend" | "backend" | "languages" | "animation";
  level: string;
  badge: string;
  power: number;
}

const SKILLS_DATA: SkillItem[] = [
  // Frontend
  { name: "React.js / React 19", category: "frontend", level: "Advanced", badge: "Core", power: 96 },
  { name: "Next.js 15 (App Router)", category: "frontend", level: "Advanced", badge: "Core", power: 95 },
  { name: "Tailwind CSS v4", category: "frontend", level: "Expert", badge: "Styling", power: 98 },
  { name: "Zustand & Context API", category: "frontend", level: "Advanced", badge: "State", power: 92 },
  { name: "Redux / Redux Toolkit", category: "frontend", level: "Intermediate", badge: "State", power: 88 },
  { name: "Responsive & Mobile First", category: "frontend", level: "Expert", badge: "Architecture", power: 99 },

  // Languages
  { name: "TypeScript", category: "languages", level: "Advanced", badge: "Type Safety", power: 94 },
  { name: "JavaScript (ES6+)", category: "languages", level: "Expert", badge: "Language", power: 98 },
  { name: "HTML5 & Semantic Web", category: "languages", level: "Expert", badge: "Structure", power: 99 },
  { name: "Modern CSS3", category: "languages", level: "Expert", badge: "Styling", power: 97 },
  { name: "C++ (Competitive)", category: "languages", level: "Intermediate", badge: "ICPC", power: 85 },
  { name: "Java", category: "languages", level: "Intermediate", badge: "OOP", power: 82 },

  // Backend
  { name: "Node.js", category: "backend", level: "Advanced", badge: "Runtime", power: 90 },
  { name: "Express.js", category: "backend", level: "Advanced", badge: "Framework", power: 91 },
  { name: "MongoDB & Mongoose", category: "backend", level: "Advanced", badge: "Database", power: 90 },
  { name: "RESTful API Design", category: "backend", level: "Expert", badge: "APIs", power: 95 },
  { name: "JWT Auth & RBAC", category: "backend", level: "Advanced", badge: "Security", power: 92 },

  // Animation & Tools
  { name: "GSAP (ScrollTrigger, quickTo)", category: "animation", level: "Advanced", badge: "Motion", power: 95 },
  { name: "Framer Motion", category: "animation", level: "Advanced", badge: "React Physics", power: 96 },
  { name: "Lenis Smooth Scroll", category: "animation", level: "Advanced", badge: "UX", power: 97 },
  { name: "Git, GitHub & Bitbucket", category: "animation", level: "Advanced", badge: "VCS", power: 94 },
  { name: "Postman & REST Testing", category: "animation", level: "Advanced", badge: "Testing", power: 93 },
  { name: "Figma to Code", category: "animation", level: "Advanced", badge: "Design", power: 94 },
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
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"planet" | "grid">("planet");

  const filteredSkills = SKILLS_DATA.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-surface relative overflow-hidden" id="skills">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-secondary/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-secondary/30 text-secondary text-xs uppercase tracking-widest font-bold font-orbitron">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
            Technical Celestial Core
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-orbitron">
            Skills &amp; <span className="text-gradient-secondary">Capabilities</span>
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base">
            An interactive 3D celestial planet rotating slowly around its axis with surrounding technical satellites.
          </p>
        </div>

        {/* View Mode Toggle: 3D Planet vs Grid */}
        <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8 px-2">
          <div className="p-1 rounded-full glass border border-white/10 flex items-center gap-1 shadow-lg max-w-full">
            <button
              onClick={() => setViewMode("planet")}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold font-orbitron transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                viewMode === "planet"
                  ? "bg-gradient-to-r from-secondary to-primary text-surface shadow-[0_0_20px_rgba(52,181,250,0.5)]"
                  : "text-on-surface-variant hover:text-white"
              }`}
            >
              <span className="material-symbols-outlined text-sm sm:text-base">public</span>
              <span>3D Planet</span>
            </button>

            <button
              onClick={() => setViewMode("grid")}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold font-orbitron transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                viewMode === "grid"
                  ? "bg-gradient-to-r from-secondary to-primary text-surface shadow-[0_0_20px_rgba(52,181,250,0.5)]"
                  : "text-on-surface-variant hover:text-white"
              }`}
            >
              <span className="material-symbols-outlined text-sm sm:text-base">grid_view</span>
              <span>Matrix Grid</span>
            </button>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mb-8 sm:mb-10 px-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-sm font-semibold transition-all duration-300 font-orbitron cursor-pointer whitespace-nowrap ${
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

        {/* Main View: 3D Planet Orbit vs Grid Matrix */}
        {viewMode === "planet" ? (
          <PlanetSkills activeCategory={activeCategory} />
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill === skill.name;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedSkill(isSelected ? null : skill.name)}
                  className={`p-5 rounded-xl glass-card border transition-all cursor-pointer select-none group ${
                    isSelected
                      ? "border-secondary bg-secondary/10 shadow-[0_0_25px_rgba(52,181,250,0.25)]"
                      : "border-white/10 hover:border-secondary/40 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full transition-transform ${
                            isSelected
                              ? "bg-secondary scale-125 shadow-[0_0_8px_#34b5fa]"
                              : "bg-secondary group-hover:scale-125"
                          }`}
                        ></span>
                        <h3 className="text-sm sm:text-base font-bold text-white font-sans group-hover:text-secondary transition-colors">
                          {skill.name}
                        </h3>
                      </div>
                      <p className="text-[11px] text-on-surface-variant font-mono pl-4">
                        Proficiency: {skill.level}
                      </p>
                    </div>

                    <span
                      className={`text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded-md border transition-colors ${
                        isSelected
                          ? "bg-secondary/20 text-secondary border-secondary/40"
                          : "bg-white/5 border-white/10 text-on-surface-variant group-hover:text-white"
                      }`}
                    >
                      {skill.badge}
                    </span>
                  </div>

                  {/* Power Rating Gauge */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                    <span className="text-[10px] text-outline uppercase tracking-wider">
                      PROFICIENCY
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-secondary to-primary transition-all duration-500"
                          style={{ width: `${skill.power}%` }}
                        />
                      </div>
                      <span className="text-[11px] font-bold text-white">
                        {skill.power}%
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      )}

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
