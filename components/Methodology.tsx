"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    step: "01",
    title: "Discovery & Architecture",
    description: "Deep dive into product requirements, target audience, tech constraints, and architectural blueprinting.",
    icon: "architecture",
    accent: "text-primary",
    bg: "bg-primary/10",
    border: "group-hover:border-primary/50",
  },
  {
    step: "02",
    title: "Figma & Design Systems",
    description: "Translating wireframes into high-fidelity UI/UX, defining reusable tokens, typography, and motion guidelines.",
    icon: "design_services",
    accent: "text-secondary",
    bg: "bg-secondary/10",
    border: "group-hover:border-secondary/50",
  },
  {
    step: "03",
    title: "Engineering & Motion",
    description: "Clean TypeScript code, modular React/Next.js components, fluid GSAP/Framer Motion physics, and robust APIs.",
    icon: "code_blocks",
    accent: "text-tertiary",
    bg: "bg-tertiary/10",
    border: "group-hover:border-tertiary/50",
  },
  {
    step: "04",
    title: "Audit & Deployment",
    description: "Lighthouse optimization, cross-browser stress testing, SEO configuration, and zero-downtime CI/CD deployment.",
    icon: "rocket_launch",
    accent: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "group-hover:border-emerald-400/50",
  },
];

export default function Methodology() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-surface-container-low border-y border-white/5 relative overflow-hidden" id="methodology">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-secondary/30 text-secondary text-xs uppercase tracking-widest font-bold font-orbitron">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Engineering Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-orbitron">
            Development <span className="text-gradient-secondary">Methodology</span>
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base">
            A disciplined, 4-step framework engineered to take projects from concept to production-grade excellence.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`group p-6 sm:p-7 rounded-2xl glass-card border border-white/10 ${step.border} transition-all duration-300 flex flex-col justify-between`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold tracking-widest px-2.5 py-1 rounded-md bg-white/5 border border-white/10 ${step.accent}`}>
                    STEP {step.step}
                  </span>
                  <div className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <span className={`material-symbols-outlined text-2xl ${step.accent}`}>
                      {step.icon}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white font-orbitron group-hover:text-white transition-colors">
                  {step.title}
                </h3>

                <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${step.bg} ${step.accent}`}></span>
                <span className="text-[11px] font-mono text-outline uppercase tracking-wider">
                  Quality Assured
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
