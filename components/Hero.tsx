"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Terminal typing effect state
  const fullText = "Building responsive, high-performance web apps with React.js, Next.js & the MERN stack.";
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 30 - 15,
        y: (e.clientY / window.innerHeight) * 30 - 15,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    // Infinite looping typing effect logic
    let currentIndex = 0;
    let isDeleting = false;
    let typingTimer: NodeJS.Timeout;

    const typeLoop = () => {
      setDisplayedText(fullText.substring(0, currentIndex));

      if (!isDeleting && currentIndex < fullText.length) {
        // Typing forward
        currentIndex++;
        setIsTypingComplete(false);
        typingTimer = setTimeout(typeLoop, 50);
      } else if (!isDeleting && currentIndex === fullText.length) {
        // Pause at the end
        setIsTypingComplete(true);
        isDeleting = true;
        typingTimer = setTimeout(typeLoop, 3000); // Wait 3 seconds before deleting
      } else if (isDeleting && currentIndex > 0) {
        // Deleting backwards
        currentIndex--;
        setIsTypingComplete(false);
        typingTimer = setTimeout(typeLoop, 20); // Delete faster
      } else if (isDeleting && currentIndex === 0) {
        // Pause before typing again
        isDeleting = false;
        typingTimer = setTimeout(typeLoop, 500); // Wait half a second before starting again
      }
    };

    // Start the loop
    typingTimer = setTimeout(typeLoop, 500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(typingTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden bg-surface" id="hero">
      {/* Infinite Scrolling Grid Pattern over the background */}
      <div className="absolute inset-0 z-0 pointer-events-none scrolling-grid opacity-50"></div>
      
      {/* Interactive Floating Glass Shapes with Icons */}
      {/* Shape 1: React Square */}
      <div 
        className="absolute top-[20%] left-[10%] w-32 h-32 md:w-48 md:h-48 bg-primary/10 rounded-2xl backdrop-blur-lg border border-primary/20 transition-transform duration-700 ease-out shadow-[0_0_50px_rgba(189,157,255,0.2)] rotate-12 flex items-center justify-center group/shape"
        style={{ transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px) rotate(12deg)` }}
      >
        <div className="relative w-16 h-16 md:w-24 md:h-24 opacity-40 group-hover/shape:opacity-80 transition-opacity filter grayscale brightness-200 contrast-125">
          <Image 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React"
            fill
            className="object-contain"
          />
        </div>
      </div>
      
      {/* Shape 2: Node.js Circle */}
      <div 
        className="absolute bottom-[15%] right-[10%] w-40 h-40 md:w-64 md:h-64 bg-secondary/10 rounded-full backdrop-blur-xl border border-secondary/20 transition-transform duration-1000 ease-out shadow-[0_0_60px_rgba(255,255,255,0.1)] flex items-center justify-center group/shape"
        style={{ transform: `translate(${mousePosition.x * 3}px, ${mousePosition.y * 3}px)` }}
      >
        <div className="relative w-20 h-20 md:w-32 md:h-32 opacity-30 group-hover/shape:opacity-70 transition-opacity filter grayscale brightness-200">
          <Image 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            fill
            className="object-contain"
          />
        </div>
      </div>
      
      {/* Shape 3: Next.js Small floating accent */}
      <div 
        className="absolute top-[40%] right-[25%] w-12 h-12 md:w-20 md:h-20 bg-blue-500/20 rounded-lg backdrop-blur-md border border-blue-400/30 transition-transform duration-500 ease-out shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center group/shape"
        style={{ transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px) rotate(-15deg)` }}
      >
        <div className="relative w-8 h-8 md:w-12 md:h-12 opacity-40 group-hover/shape:opacity-90 transition-opacity filter invert brightness-200">
          <Image 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            alt="Next.js"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Shape 4: JS floating accent */}
      <div 
        className="absolute bottom-[25%] left-[20%] w-16 h-16 md:w-24 md:h-24 bg-yellow-500/10 rounded-xl backdrop-blur-md border border-yellow-400/20 transition-transform duration-800 ease-out shadow-[0_0_40px_rgba(234,179,8,0.2)] hidden lg:flex items-center justify-center group/shape"
        style={{ transform: `translate(${mousePosition.x * -4}px, ${mousePosition.y * -4}px) rotate(-10deg)` }}
      >
        <div className="relative w-10 h-10 md:w-14 md:h-14 opacity-30 group-hover/shape:opacity-80 transition-opacity filter grayscale brightness-200">
          <Image 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Glow effects */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-dim opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary-dim opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10 text-center max-w-4xl px-4 mt-16 md:mt-0 w-full">
        <span className="inline-block label-md uppercase tracking-[0.2em] text-secondary font-bold mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform cursor-default">
          MERN Stack Developer
        </span>
        <h1 className="text-2xl sm:text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 text-white leading-[1.1] md:leading-[0.9] drop-shadow-2xl">
          Waleed Refaat Abbas
        </h1>
        
        {/* Terminal Window Description */}
        <div className="font-mono text-sm md:text-lg text-green-400 mb-12 max-w-2xl mx-auto text-left bg-[#050b14]/80 p-4 md:p-6 rounded-lg border border-outline-variant/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="flex items-center gap-2 mb-3 text-outline-variant border-b border-outline-variant/20 pb-3">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="text-xs ml-2 text-[#a3aac4]">guest@waleed-dev:~$</span>
          </div>
          <div className="leading-relaxed break-all whitespace-pre-wrap">
            <span className="text-blue-400 font-bold">echo</span> <span className="text-white">&quot;{displayedText}&quot;</span>
            <span className={`inline-block w-2 h-5 bg-green-400 ml-1 align-middle ${isTypingComplete ? 'animate-pulse' : ''}`}></span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a className="group relative px-10 py-5 bg-gradient-to-r from-primary to-white rounded-2xl text-[#0a1128] font-extrabold title-md transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(189,157,255,0.8)] overflow-hidden w-full sm:w-auto flex items-center justify-center gap-3" href="#projects">
            <span className="relative z-10 uppercase tracking-wider"> Projects</span>
            <span className="material-symbols-outlined relative z-10 transition-transform duration-500 group-hover:translate-x-2">arrow_forward</span>
            
            {/* Button internal shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent z-0"></div>
          </a>
          <a className="group relative px-10 py-5 border-2 border-outline-variant/50 rounded-2xl text-white font-bold title-md hover:bg-surface-variant/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 w-full sm:w-auto bg-[#192540]/20 backdrop-blur-md flex items-center justify-center gap-2" href="/Waleed_Refaat_CV_Updated.pdf" download="Waleed_Refaat_CV.pdf">
            <span className="material-symbols-outlined">download</span>
            Download CV
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#192540] text-xs text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block shadow-2xl border border-outline-variant/30">
              PDF Format, 250KB
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#192540] rotate-45 border-b border-r border-outline-variant/30"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
