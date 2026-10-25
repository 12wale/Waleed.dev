"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  bullets: string[];
  skills: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    period: "Mar 2025 – Jun 2025",
    role: "Frontend Developer Intern",
    company: "LevelUp ESG",
    location: "London, UK (Remote)",
    type: "Internship",
    description:
      "Engineered enterprise-grade UI components for the SustainGRC ESG compliance platform, contributing to production sprints with an international engineering team.",
    bullets: [
      "Engineered and maintained modular, reusable React.js components adhering strictly to ESG compliance requirements.",
      "Integrated secure REST APIs to render dynamic compliance analytics, charts, and audit dashboards.",
      "Participated actively in daily standups, code reviews, and sprint planning following Agile/Scrum workflows.",
      "Enhanced cross-browser compatibility and achieved 100% responsiveness using Tailwind CSS.",
      "Collaborated using Git, GitHub, and Bitbucket for continuous integration and version control.",
    ],
    skills: ["React.js", "Tailwind CSS", "REST APIs", "Agile / Scrum", "Git / Bitbucket"],
  },
  {
    period: "2024 – Present",
    role: "Freelance Frontend / Full-Stack Developer",
    company: "Independent Clients",
    location: "Egypt & International (Remote)",
    type: "Contract",
    description:
      "Designing and shipping custom client web applications, e-commerce solutions, and corporate platforms with the MERN stack and Next.js.",
    bullets: [
      "Architected and deployed full-stack web applications with authentication, custom admin panels, and database storage.",
      "Delivered turnkey solutions for international pilgrimage travel (Ajyad) and agricultural exporting (Sun & Soil).",
      "Directly gathered client requirements, translated business goals into Figma designs, and executed performant codebases.",
    ],
    skills: ["Next.js", "React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
  },
];

export default function Experience() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-surface relative overflow-hidden" id="experience">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-tertiary/30 text-tertiary text-xs uppercase tracking-widest font-bold font-orbitron">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
            Career Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-orbitron">
            Professional <span className="text-gradient-primary">Experience</span>
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base">
            Demonstrated engineering experience across international SaaS platforms and production client products.
          </p>
        </div>

        {/* Timeline Container with Glowing Laser Tracing Beam */}
        <div className="relative">
          {/* Vertical Laser Beam */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-secondary to-tertiary -translate-x-1/2 opacity-30"></div>

          <div className="space-y-12 sm:space-y-16">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Glowing Node Marker */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-[#060e20] border-2 border-primary shadow-[0_0_15px_#bd9dff] z-20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  </div>

                  {/* Experience Card */}
                  <div className="w-full pl-10 md:pl-0 md:w-[46%]">
                    <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-primary/40 space-y-4">
                      {/* Period Badge & Type */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                          {exp.period}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-on-surface-variant">
                          {exp.type}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-orbitron">
                          {exp.role}
                        </h3>
                        <p className="text-secondary text-sm font-semibold mt-1">
                          {exp.company} <span className="text-on-surface-variant font-normal">· {exp.location}</span>
                        </p>
                      </div>

                      <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="space-y-2 pt-2 border-t border-white/10">
                        {exp.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-xs sm:text-sm text-on-surface">
                            <span className="text-primary mt-1">▹</span>
                            <span className="leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.skills.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-on-surface-variant border border-white/5"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for opposite column */}
                  <div className="hidden md:block md:w-[46%]"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
