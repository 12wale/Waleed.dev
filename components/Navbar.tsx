"use client";
import { useState, useEffect, useRef } from "react";

import Link from "next/link";

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
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      const scrollPosition = window.scrollY;
      
      let currentActive = "hero";
      // Check sections from bottom to top
      for (let i = navItems.length - 1; i >= 0; i--) {
        const sectionId = navItems[i].href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 150;
          if (scrollPosition >= offsetTop) {
            currentActive = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    
    // Initial check
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const activeIndex = navItems.findIndex(item => item.href === `#${activeSection}`);
    const activeElement = navRefs.current[activeIndex];
    
    if (activeElement) {
      setIndicatorStyle({
        left: (activeElement as HTMLAnchorElement).offsetLeft,
        width: (activeElement as HTMLAnchorElement).offsetWidth,
        opacity: 1
      });
    } else {
      setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
    }
  }, [activeSection, mounted]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#192540]/60 backdrop-blur-3xl border-b border-[#40485d]/30 shadow-[0_0_40px_rgba(138,76,252,0.08)]">
      <div className="flex justify-between items-center h-16 px-4 md:px-8 max-w-7xl mx-auto relative">
        <Link href="#hero" className="text-xl font-extrabold tracking-tighter text-white hover:text-[#bd9dff] transition-colors relative z-10">Waleed.dev</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 items-center font-medium tracking-tight text-sm relative h-full">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              ref={(el) => { navRefs.current[index] = el; }}
              className={`py-5 transition-colors cursor-pointer active:scale-95 duration-200 ${
                activeSection === item.href.substring(1) 
                  ? "text-[#bd9dff]" 
                  : "text-[#a3aac4] hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Animated Active Line */}
          <div 
            className="absolute bottom-0 h-[2px] bg-[#bd9dff] transition-all duration-300 ease-out shadow-[0_0_10px_#bd9dff]"
            style={{ 
              left: `${indicatorStyle.left}px`, 
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.opacity
            }}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden relative z-10">
          <button 
            onClick={toggleMobileMenu}
            className="text-white hover:text-[#bd9dff] transition-colors p-2 flex items-center justify-center focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`lg:hidden absolute top-16 left-0 w-full bg-[#0a1128]/95 backdrop-blur-3xl border-b border-[#40485d]/30 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100 py-4 shadow-xl" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col px-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeSection === item.href.substring(1)
                  ? "bg-[#192540] text-[#bd9dff] pl-6"
                  : "text-[#a3aac4] hover:bg-[#192540]/50 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

