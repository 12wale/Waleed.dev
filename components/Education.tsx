"use client";

import { motion } from "framer-motion";

const CERTIFICATES = [
  {
    title: "Frontend Developer Internship",
    issuer: "LevelUp ESG · London, UK",
    year: "2025",
    icon: "workspace_premium",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "React.js Advanced Development",
    issuer: "Devs Activity · Suez Canal University",
    year: "2024",
    icon: "code",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2024",
    icon: "shield",
    color: "text-tertiary",
    bg: "bg-tertiary/10",
  },
];

export default function Education() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-surface-container-low relative" id="education">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education Track */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl">school</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-orbitron">
                Academic Foundation
              </h2>
            </div>

            <div className="p-7 rounded-2xl glass-card border-l-4 border-l-primary space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                Sep 2023 – Nov 2028 (Expected) · 2nd Year
              </span>

              <div>
                <h3 className="text-xl font-bold text-white font-orbitron">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-secondary text-sm font-semibold mt-1">
                  Faculty of Computer Science &amp; Artificial Intelligence · Fayoum University
                </p>
              </div>

              <ul className="space-y-2.5 pt-3 border-t border-white/10 text-xs sm:text-sm text-on-surface">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✦</span>
                  <span>Head of Frontend Team at Google Developer Student Clubs (GDSC).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✦</span>
                  <span>Trainee in International Collegiate Programming Contest (ICPC) — data structures &amp; algorithmic problem solving.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✦</span>
                  <span>Coursework in OOP, Data Structures, Algorithms, Discrete Mathematics, and Database Systems.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Certifications & Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-xl">verified</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-orbitron">
                Certifications &amp; Training
              </h2>
            </div>

            <div className="space-y-4">
              {CERTIFICATES.map((cert) => (
                <div
                  key={cert.title}
                  className="p-5 rounded-xl glass-card border border-white/10 hover:border-secondary/40 flex items-center gap-4 group transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl ${cert.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <span className={`material-symbols-outlined text-2xl ${cert.color}`}>
                      {cert.icon}
                    </span>
                  </div>

                  <div className="flex-grow">
                    <h4 className="text-sm sm:text-base font-bold text-white font-sans group-hover:text-secondary transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-on-surface-variant font-mono mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>

                  <span className="text-xs font-mono font-bold text-outline px-2 py-1 rounded bg-white/5 border border-white/10">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
