"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { gameAudio } from "@/lib/gameAudio";

const navItems = [
  { name: "Hero", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Process", href: "#methodology" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Activities", href: "#activities" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const sectionId = navItems[i].href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          if (scrollPosition >= element.offsetTop) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 md:pt-4 pointer-events-none">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center justify-between px-5 py-2.5 md:px-7 md:py-3 rounded-full transition-all duration-500 w-full max-w-6xl ${
          scrolled
            ? "bg-[#091328]/85 backdrop-blur-2xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(189,157,255,0.1)]"
            : "bg-[#0f1930]/60 backdrop-blur-xl border border-white/5 shadow-lg"
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="#hero"
          onMouseEnter={() => gameAudio.playHover()}
          onClick={() => gameAudio.playSelect()}
          className="group flex items-center gap-2 text-base md:text-lg font-extrabold tracking-wider text-white font-orbitron"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse shadow-[0_0_12px_#bd9dff]"></span>
          <span className="group-hover:text-primary transition-colors">Waleed<span className="text-secondary">.dev</span></span>
        </Link>

        {/* Desktop Links with Framer Motion Sliding Pill */}
        <div className="hidden lg:flex items-center gap-1 relative">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={() => gameAudio.playHover()}
                onClick={() => gameAudio.playSelect()}
                className={`relative px-3.5 py-1.5 text-xs font-semibold tracking-wide rounded-full transition-colors duration-200 z-10 ${
                  isActive ? "text-white" : "text-on-surface-variant hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/25 via-secondary/20 to-primary/25 border border-primary/40 shadow-[0_0_15px_rgba(189,157,255,0.25)] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="#contact"
            onMouseEnter={() => gameAudio.playHover()}
            onClick={() => gameAudio.playSelect()}
            className="px-4 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r from-primary to-secondary text-surface hover:shadow-[0_0_20px_rgba(189,157,255,0.5)] transition-all duration-300 hover:scale-105 uppercase tracking-wider font-orbitron cursor-pointer"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 rounded-full bg-surface-container-high/60 border border-white/10 text-white hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="pointer-events-auto absolute top-16 left-4 right-4 bg-[#091328]/95 backdrop-blur-3xl border border-white/15 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] lg:hidden flex flex-col gap-2 z-50"
          >
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-primary/20 text-white border border-primary/30"
                        : "text-on-surface-variant hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#bd9dff]" />}
                  </Link>
                </motion.div>
              );
            })}

            <div className="pt-3 border-t border-white/10 mt-1">
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-2.5 flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-secondary text-surface font-bold text-xs uppercase tracking-wider font-orbitron shadow-[0_0_20px_rgba(189,157,255,0.4)]"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
