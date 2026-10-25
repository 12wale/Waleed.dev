"use client";

import { motion } from "framer-motion";

const ACTIVITIES = [
  {
    icon: "groups",
    color: "primary",
    accent: "text-primary",
    border: "border-primary/40",
    bg: "bg-primary/10",
    title: "Head of Frontend Team – GDSC",
    subtitle: "Google Developer Student Clubs · Fayoum University",
    period: "Nov 2025 – Present",
    bullets: [
      "Leading and mentoring a team of student developers in modern frontend frameworks (React, Next.js, Tailwind CSS).",
      "Organizing technical workshops, code labs, and hackathon readiness initiatives across the university.",
    ],
  },
  {
    icon: "terminal",
    color: "secondary",
    accent: "text-secondary",
    border: "border-secondary/40",
    bg: "bg-secondary/10",
    title: "ICPC Competitive Programming Trainee",
    subtitle: "Fayoum University Community",
    period: "Nov 2023 – Present",
    bullets: [
      "Intensive algorithmic problem-solving training focusing on graphs, dynamic programming, and advanced data structures.",
      "Sharpened algorithmic speed and analytical optimization skills applicable to high-scale web performance.",
    ],
  },
  {
    icon: "military_tech",
    color: "tertiary",
    accent: "text-tertiary",
    border: "border-tertiary/40",
    bg: "bg-tertiary/10",
    title: "Leadership & Strategy Training",
    subtitle: "Professional Development Camp · Fayoum, Egypt",
    period: "Aug 2024",
    bullets: [
      "Completed intensive leadership simulation exercises, team dynamics, conflict resolution, and agile project delivery.",
    ],
  },
];

export default function Extracurricular() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-surface border-y border-white/5 relative" id="activities">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-tertiary/30 text-tertiary text-xs uppercase tracking-widest font-bold font-orbitron">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
            Beyond the Code
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-orbitron">
            Extracurricular <span className="text-gradient-primary">Leadership</span>
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base">
            Technical leadership, competitive programming, and developer community mentorship.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {ACTIVITIES.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className={`p-6 sm:p-8 rounded-2xl glass-card border border-white/10 hover:${activity.border} transition-all duration-300 flex flex-col justify-between`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${activity.accent}`}>
                    {activity.period}
                  </span>
                  <div className={`w-12 h-12 rounded-xl ${activity.bg} flex items-center justify-center`}>
                    <span className={`material-symbols-outlined text-2xl ${activity.accent}`}>
                      {activity.icon}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-orbitron leading-snug">
                    {activity.title}
                  </h3>
                  <p className={`text-xs font-medium mt-1 ${activity.accent}`}>
                    {activity.subtitle}
                  </p>
                </div>

                <ul className="space-y-2 pt-2 border-t border-white/10 text-xs sm:text-sm text-on-surface">
                  {activity.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className={`${activity.accent} mt-0.5`}>▹</span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spoken Languages Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl glass-card border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-sm uppercase tracking-widest text-white font-bold font-orbitron">
              Spoken Languages
            </h3>
            <p className="text-xs text-on-surface-variant mt-1">
              Fluent communication in international collaborative environments.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl">language</span>
              </div>
              <div>
                <p className="font-bold text-white text-sm font-sans">Arabic</p>
                <p className="text-xs text-on-surface-variant font-mono">Native Tongue</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-xl">translate</span>
              </div>
              <div>
                <p className="font-bold text-white text-sm font-sans">English</p>
                <p className="text-xs text-on-surface-variant font-mono">Upper Intermediate (B2)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
