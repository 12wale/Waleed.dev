"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import self from "@/public/PROFILE.png";

const STATS = [
  { value: "5+", label: "Completed Projects", highlight: "MERN & Next.js" },
  { value: "15+", label: "Technologies", highlight: "Full Modern Stack" },
  { value: "1+", label: "Years Experience", highlight: "Remote & Freelance" },
];

const BADGES = [
  "Frontend Lead @ GDSC",
  "ESG SaaS Intern (London)",
  "ICPC Trainee",
  "Clean Code Advocate",
];

export default function About() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-surface relative overflow-hidden" id="about">
      {/* Background ambient blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait with 3D Tilt & Glow Aura */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative group mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary via-secondary to-tertiary opacity-25 blur-3xl group-hover:opacity-40 transition-opacity duration-700"></div>

            <div className="relative aspect-square rounded-2xl overflow-hidden glass-card border border-white/15 p-2">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  alt="Waleed Refaat Abbas"
                  fill
                  className="object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={self}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e20] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
              </div>

              {/* Floating Status Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-pill flex items-center justify-between border border-white/20">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]"></span>
                  <div>
                    <p className="text-xs font-bold text-white font-orbitron">Waleed Refaat</p>
                    <p className="text-[11px] text-on-surface-variant">Cairo, Egypt · UTC+2</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-primary font-mono uppercase bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
                  Open to work
                </span>
              </div>
            </div>
          </motion.div>

          {/* Description & Interactive Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-secondary/30 text-secondary text-xs uppercase tracking-widest font-bold font-orbitron">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                About My Journey
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-orbitron leading-tight">
                Crafting High-Performance <span className="text-gradient-secondary">Digital Products</span>
              </h2>

              <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
                I am a dedicated Frontend Developer with hands-on experience building scalable, responsive web applications using React.js, Next.js, TypeScript, and the MERN stack. From delivering production client platforms to engineering modular ESG compliance dashboards for a UK software firm, I bridge the gap between rigorous software architecture and breathtaking user experiences.
              </p>
            </div>

            {/* Quick Badge Chips */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start">
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#192540]/60 border border-white/10 text-on-surface hover:border-primary/50 hover:text-white transition-all cursor-default"
                >
                  ✦ {badge}
                </span>
              ))}
            </div>

            {/* Animated Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="glass p-4 rounded-xl border border-white/10 text-center lg:text-left group hover:border-primary/40 transition-colors"
                >
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white font-orbitron neon-text-glow">
                    {stat.value}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-on-surface-variant font-semibold block mt-1">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-secondary font-mono block mt-0.5">
                    {stat.highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
