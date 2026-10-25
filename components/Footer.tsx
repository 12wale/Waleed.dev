"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Africa/Cairo",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050b18] border-t border-white/5 w-full py-10 md:py-14 px-4 md:px-8 relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-6">
        {/* Left: Branding & Copyright */}
        <div className="space-y-1 text-center md:text-left">
          <p className="text-sm font-bold text-white font-orbitron">
            Waleed Refaat Abbas <span className="text-primary font-mono text-xs">/ 2025</span>
          </p>
          <p className="text-xs text-on-surface-variant font-sans">
            Crafted with Next.js 15, Tailwind CSS, GSAP, and Framer Motion.
          </p>
        </div>

        {/* Center: Live Cairo Clock */}
        <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full glass border border-white/10 font-mono text-xs text-on-surface-variant">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Cairo, Egypt:</span>
          <span className="font-bold text-white">{time || "UTC+2"}</span>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="text-xs uppercase tracking-widest text-on-surface-variant hover:text-white transition-colors flex items-center gap-2 group font-orbitron cursor-pointer"
        >
          <span>Return to Top</span>
          <span className="material-symbols-outlined text-sm group-hover:-translate-y-1 transition-transform text-primary">
            arrow_upward
          </span>
        </button>
      </div>
    </footer>
  );
}
