"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

interface TerminalTab {
  id: string;
  label: string;
  command: string;
  content: string;
  highlight: string;
}

const TERMINAL_TABS: TerminalTab[] = [
  {
    id: "bio",
    label: "bio.sh",
    command: "whoami --focus",
    content: "Building high-performance web apps with React, Next.js 15, TypeScript & modern motion design.",
    highlight: "Frontend Lead @ GDSC · ICPC Trainee · LevelUp ESG Intern",
  },
  {
    id: "stack",
    label: "stack.json",
    command: "cat core-stack.json",
    content: '{\n  "frontend": ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],\n  "animation": ["GSAP", "Framer Motion", "Lenis"],\n  "backend": ["Node.js", "Express.js", "MongoDB", "REST APIs"]\n}',
    highlight: "100% committed to 60-120 FPS buttery-smooth experiences.",
  },
  {
    id: "status",
    label: "status.log",
    command: "curl -s status.waleed.dev",
    content: "STATUS: Available for Freelance Projects & Full-Time Software Engineering Roles (Cairo / Remote)",
    highlight: "Response time: < 24 hours",
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);
  const shape3Ref = useRef<HTMLDivElement>(null);
  const shape4Ref = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<string>("bio");
  const [copied, setCopied] = useState<boolean>(false);

  // 120 FPS GPU-accelerated mouse parallax via GSAP quickTo (0 React Re-renders!)
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Direct GSAP quick setters
    const xTo1 = shape1Ref.current ? gsap.quickTo(shape1Ref.current, "x", { duration: 1.2, ease: "power2.out" }) : null;
    const yTo1 = shape1Ref.current ? gsap.quickTo(shape1Ref.current, "y", { duration: 1.2, ease: "power2.out" }) : null;

    const xTo2 = shape2Ref.current ? gsap.quickTo(shape2Ref.current, "x", { duration: 1.6, ease: "power2.out" }) : null;
    const yTo2 = shape2Ref.current ? gsap.quickTo(shape2Ref.current, "y", { duration: 1.6, ease: "power2.out" }) : null;

    const xTo3 = shape3Ref.current ? gsap.quickTo(shape3Ref.current, "x", { duration: 0.9, ease: "power3.out" }) : null;
    const yTo3 = shape3Ref.current ? gsap.quickTo(shape3Ref.current, "y", { duration: 0.9, ease: "power3.out" }) : null;

    const xTo4 = shape4Ref.current ? gsap.quickTo(shape4Ref.current, "x", { duration: 1.4, ease: "power2.out" }) : null;
    const yTo4 = shape4Ref.current ? gsap.quickTo(shape4Ref.current, "y", { duration: 1.4, ease: "power2.out" }) : null;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;

      xTo1?.(relX * -45);
      yTo1?.(relY * -45);

      xTo2?.(relX * 55);
      yTo2?.(relY * 55);

      xTo3?.(relX * 80);
      yTo3?.(relY * 80);

      xTo4?.(relX * -60);
      yTo4?.(relY * -60);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const currentTab = TERMINAL_TABS.find((t) => t.id === activeTab) || TERMINAL_TABS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTab.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 md:px-8 pt-28 pb-16 overflow-hidden bg-surface"
    >
      {/* Background Scrolling Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none scrolling-grid opacity-25"></div>

      {/* Ambient Mesh Glow Orbs */}
      <div className="absolute -top-32 -left-32 w-[35rem] h-[35rem] bg-primary/20 blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse duration-1000"></div>
      <div className="absolute -bottom-32 -right-32 w-[35rem] h-[35rem] bg-secondary/15 blur-[140px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] bg-tertiary/10 blur-[160px] rounded-full pointer-events-none -z-10"></div>

      {/* GPU Parallax Floating Tech Shapes */}
      {/* React Square */}
      <div
        ref={shape1Ref}
        className="absolute top-[18%] left-[8%] w-24 h-24 md:w-36 md:h-36 rounded-2xl glass-card flex items-center justify-center rotate-12 shadow-[0_0_40px_rgba(189,157,255,0.2)] pointer-events-none z-10 group"
        style={{ willChange: "transform" }}
      >
        <div className="relative w-12 h-12 md:w-20 md:h-20 opacity-70 group-hover:opacity-100 transition-opacity">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Node.js Circle */}
      <div
        ref={shape2Ref}
        className="absolute bottom-[16%] right-[8%] w-28 h-28 md:w-44 md:h-44 rounded-full glass-card flex items-center justify-center shadow-[0_0_50px_rgba(52,181,250,0.2)] pointer-events-none z-10 group"
        style={{ willChange: "transform" }}
      >
        <div className="relative w-14 h-14 md:w-24 md:h-24 opacity-60 group-hover:opacity-100 transition-opacity">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Next.js Badge */}
      <div
        ref={shape3Ref}
        className="absolute top-[32%] right-[16%] w-16 h-16 md:w-24 md:h-24 rounded-xl glass-card flex items-center justify-center -rotate-12 shadow-[0_0_35px_rgba(189,157,255,0.25)] pointer-events-none z-10 group"
        style={{ willChange: "transform" }}
      >
        <div className="relative w-9 h-9 md:w-14 md:h-14 opacity-75 group-hover:opacity-100 transition-opacity filter invert">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            alt="Next.js"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* TypeScript / JS Badge */}
      <div
        ref={shape4Ref}
        className="absolute bottom-[28%] left-[14%] w-16 h-16 md:w-24 md:h-24 rounded-2xl glass-card hidden md:flex items-center justify-center rotate-6 shadow-[0_0_35px_rgba(234,179,8,0.2)] pointer-events-none z-10 group"
        style={{ willChange: "transform" }}
      >
        <div className="relative w-9 h-9 md:w-12 md:h-12 opacity-70 group-hover:opacity-100 transition-opacity">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="TypeScript"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto w-full flex flex-col items-center">
        {/* Availability Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill mb-6 border border-primary/30"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs uppercase tracking-widest font-bold text-on-surface font-orbitron">
            Available for Projects &amp; Roles
          </span>
        </motion.div>

        {/* Name Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 text-white font-orbitron leading-[1.05]"
        >
          Waleed Refaat <span className="text-gradient-primary">Abbas</span>
        </motion.h1>

        {/* Subtitle Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-on-surface-variant font-medium mb-8 max-w-2xl leading-relaxed"
        >
          Frontend Engineer &amp; Full-Stack MERN Developer specializing in high-speed, interactive web experiences with <span className="text-white font-semibold">React</span>, <span className="text-white font-semibold">Next.js 15</span>, and <span className="text-primary font-semibold">GSAP animations</span>.
        </motion.p>

        {/* Interactive Multi-Tab Cyber Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-2xl mb-10 text-left rounded-2xl glass border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.7)] overflow-hidden"
        >
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0a1128]/80 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="text-xs text-outline ml-2 font-mono hidden sm:inline-block">waleed@portfolio:~$</span>
            </div>

            {/* Terminal Tab Switchers */}
            <div className="flex items-center gap-1">
              {TERMINAL_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1 text-xs font-mono rounded-md transition-all ${
                    activeTab === tab.id
                      ? "bg-primary/20 text-primary border border-primary/40 font-bold"
                      : "text-on-surface-variant hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}

              <button
                onClick={handleCopy}
                title="Copy Terminal Text"
                className="ml-2 p-1 text-on-surface-variant hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-sm">
                  {copied ? "check" : "content_copy"}
                </span>
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 font-mono text-xs sm:text-sm bg-[#050b18]/90 min-h-[130px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="space-y-2.5"
              >
                <div className="flex items-center gap-2 text-primary">
                  <span className="text-secondary">❯</span>
                  <span className="font-bold">{currentTab.command}</span>
                </div>
                <pre className="text-white whitespace-pre-wrap leading-relaxed font-mono">
                  {currentTab.content}
                </pre>
                <div className="pt-2 text-xs text-emerald-400 font-medium">
                  ✦ {currentTab.highlight}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto"
        >
          <Link
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-surface font-extrabold text-sm uppercase tracking-wider font-orbitron transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(189,157,255,0.7)] flex items-center justify-center gap-2 w-full sm:w-auto overflow-hidden"
          >
            <span>Explore Projects</span>
            <span className="material-symbols-outlined text-lg group-hover:translate-x-1.5 transition-transform duration-300">
              arrow_forward
            </span>
          </Link>

          <a
            href="/Waleed_Refaat_CV_Updated.pdf"
            download="Waleed_Refaat_CV.pdf"
            className="group px-8 py-4 rounded-xl glass text-white font-bold text-sm uppercase tracking-wider font-orbitron border border-white/20 hover:border-primary/50 hover:bg-white/5 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span className="material-symbols-outlined text-lg text-secondary group-hover:translate-y-0.5 transition-transform">
              download
            </span>
            <span>Download CV</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
