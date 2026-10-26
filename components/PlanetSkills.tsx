"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface PlanetSkillItem {
  id: string;
  name: string;
  shortName: string;
  category: "frontend" | "backend" | "languages" | "animation";
  level: string;
  badge: string;
  power: number;
  icon: string;
  color: string;
  description: string;
}

export const PLANET_SKILLS: PlanetSkillItem[] = [
  // Frontend
  {
    id: "react",
    name: "React 19",
    shortName: "React",
    category: "frontend",
    level: "Expert",
    badge: "Core",
    power: 96,
    icon: "code_blocks",
    color: "#61dafb",
    description: "Component lifecycle, concurrent rendering, Server Actions, custom hooks, and state architecture.",
  },
  {
    id: "nextjs",
    name: "Next.js 15",
    shortName: "Next.js",
    category: "frontend",
    level: "Advanced",
    badge: "Full-Stack",
    power: 95,
    icon: "dynamic_feed",
    color: "#ffffff",
    description: "App Router architecture, SSR/SSG/ISR, streaming, Route Handlers, SEO and Core Web Vitals.",
  },
  {
    id: "tailwind",
    name: "Tailwind v4",
    shortName: "Tailwind",
    category: "frontend",
    level: "Expert",
    badge: "Design",
    power: 98,
    icon: "palette",
    color: "#38bdf8",
    description: "Modern CSS tokens, responsive UI, micro-animations, glassmorphic styling, and dark themes.",
  },
  {
    id: "zustand",
    name: "Zustand",
    shortName: "Zustand",
    category: "frontend",
    level: "Advanced",
    badge: "State",
    power: 92,
    icon: "account_tree",
    color: "#bd9dff",
    description: "Lightweight, scalable global state management without boilerplate or unnecessary re-renders.",
  },
  {
    id: "redux",
    name: "Redux Toolkit",
    shortName: "Redux",
    category: "frontend",
    level: "Intermediate",
    badge: "State",
    power: 88,
    icon: "dataset",
    color: "#764abc",
    description: "Predictable state containers, RTK Query caching, slice reducers, and typed middleware.",
  },
  {
    id: "responsive",
    name: "Mobile First UI",
    shortName: "Mobile UX",
    category: "frontend",
    level: "Expert",
    badge: "UX",
    power: 99,
    icon: "devices",
    color: "#34b5fa",
    description: "Pixel-perfect multi-device responsiveness from 320px mobile screens to 4K ultra-wide monitors.",
  },

  // Languages
  {
    id: "typescript",
    name: "TypeScript",
    shortName: "TypeScript",
    category: "languages",
    level: "Advanced",
    badge: "Safety",
    power: 94,
    icon: "terminal",
    color: "#3178c6",
    description: "Strict typing, generics, utility types, discriminated unions, and full compile-time type safety.",
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
    shortName: "JS (ES6+)",
    category: "languages",
    level: "Expert",
    badge: "Language",
    power: 98,
    icon: "javascript",
    color: "#f7df1e",
    description: "Event loop, asynchronous promises/async-await, closures, prototypes, and ESNext features.",
  },
  {
    id: "html5",
    name: "HTML5 & Semantics",
    shortName: "HTML5",
    category: "languages",
    level: "Expert",
    badge: "Structure",
    power: 99,
    icon: "html",
    color: "#e34f26",
    description: "Semantic document structure, web accessibility (a11y), metadata, and SEO optimizations.",
  },
  {
    id: "css3",
    name: "Modern CSS3",
    shortName: "CSS3",
    category: "languages",
    level: "Expert",
    badge: "Styling",
    power: 97,
    icon: "css",
    color: "#1572b6",
    description: "Flexbox, CSS Grid, 3D transforms, keyframe animations, and custom CSS properties.",
  },
  {
    id: "cpp",
    name: "C++ (ICPC)",
    shortName: "C++",
    category: "languages",
    level: "Intermediate",
    badge: "Algo",
    power: 85,
    icon: "memory",
    color: "#00599c",
    description: "Competitive programming, data structures, graph algorithms, and memory-efficient solutions.",
  },
  {
    id: "java",
    name: "Java (OOP)",
    shortName: "Java",
    category: "languages",
    level: "Intermediate",
    badge: "OOP",
    power: 82,
    icon: "coffee",
    color: "#f89820",
    description: "Object-oriented design patterns, encapsulation, polymorphism, and algorithmic foundations.",
  },

  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    shortName: "Node.js",
    category: "backend",
    level: "Advanced",
    badge: "Runtime",
    power: 90,
    icon: "dns",
    color: "#539e43",
    description: "Event-driven asynchronous backend services, streams, buffer management, and microservices.",
  },
  {
    id: "express",
    name: "Express.js",
    shortName: "Express",
    category: "backend",
    level: "Advanced",
    badge: "API",
    power: 91,
    icon: "hub",
    color: "#a3aac4",
    description: "Scalable REST APIs, middleware pipelines, error-handling architectures, and routing.",
  },
  {
    id: "mongodb",
    name: "MongoDB & Mongoose",
    shortName: "MongoDB",
    category: "backend",
    level: "Advanced",
    badge: "Database",
    power: 90,
    icon: "database",
    color: "#47a248",
    description: "Document data modeling, aggregation pipelines, schema validation, indexing, and performance tuning.",
  },
  {
    id: "restapi",
    name: "RESTful APIs",
    shortName: "REST APIs",
    category: "backend",
    level: "Expert",
    badge: "Network",
    power: 95,
    icon: "swap_horiz",
    color: "#ff8eac",
    description: "Standard HTTP methods, status codes, payload validation, and clean endpoint documentation.",
  },
  {
    id: "jwt",
    name: "JWT & Security",
    shortName: "JWT Auth",
    category: "backend",
    level: "Advanced",
    badge: "Security",
    power: 92,
    icon: "lock",
    color: "#ff6e84",
    description: "Token-based authentication, role-based access control (RBAC), cookie security, and hashing.",
  },

  // Motion & Tools
  {
    id: "gsap",
    name: "GSAP & ScrollTrigger",
    shortName: "GSAP",
    category: "animation",
    level: "Advanced",
    badge: "Motion",
    power: 95,
    icon: "animation",
    color: "#88ce02",
    description: "GPU-accelerated quickTo parallax, timeline sequencing, and buttery-smooth scroll experiences.",
  },
  {
    id: "framer",
    name: "Framer Motion",
    shortName: "Framer",
    category: "animation",
    level: "Advanced",
    badge: "Physics",
    power: 96,
    icon: "gesture",
    color: "#ff0055",
    description: "Spring physics, layout animations, exit transitions with AnimatePresence, and drag gestures.",
  },
  {
    id: "lenis",
    name: "Lenis Smooth Scroll",
    shortName: "Lenis",
    category: "animation",
    level: "Advanced",
    badge: "Inertia",
    power: 97,
    icon: "waves",
    color: "#dee5ff",
    description: "Hardware-accelerated smooth inertial scrolling synchronized directly with the GSAP ticker.",
  },
  {
    id: "git",
    name: "Git & GitHub",
    shortName: "Git",
    category: "animation",
    level: "Advanced",
    badge: "VCS",
    power: 94,
    icon: "fork_right",
    color: "#f05032",
    description: "Branching strategies, merge conflict resolution, pull request workflows, and version control.",
  },
  {
    id: "postman",
    name: "Postman API",
    shortName: "Postman",
    category: "animation",
    level: "Advanced",
    badge: "Testing",
    power: 93,
    icon: "send",
    color: "#ff6c37",
    description: "API testing, automated endpoint collections, environment variables, and pre-request scripts.",
  },
  {
    id: "figma",
    name: "Figma to Code",
    shortName: "Figma",
    category: "animation",
    level: "Advanced",
    badge: "Design",
    power: 94,
    icon: "draw",
    color: "#a259ff",
    description: "Translating high-fidelity Figma components, design tokens, and prototypes into responsive code.",
  },
];

interface Node3D {
  item: PlanetSkillItem;
  x: number;
  y: number;
  z: number;
  origX: number;
  origY: number;
  origZ: number;
}

export default function PlanetSkills({
  activeCategory = "all",
  onSelectSkill,
}: {
  activeCategory?: string;
  onSelectSkill?: (skill: PlanetSkillItem) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedNode, setSelectedNode] = useState<PlanetSkillItem | null>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState(1);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [projectedNodes, setProjectedNodes] = useState<
    {
      item: PlanetSkillItem;
      screenX: number;
      screenY: number;
      scale: number;
      opacity: number;
      zIndex: number;
      z: number;
      isHighlighted: boolean;
    }[]
  >([]);

  // 3D Spherical state
  const nodesRef = useRef<Node3D[]>([]);
  const anglesRef = useRef({ yaw: 0, pitch: 0.15 });
  const velocityRef = useRef({ yaw: 0.0028, pitch: 0 });
  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const touchStartRef = useRef<{ x: number; y: number; isHorizontal: boolean | null }>({
    x: 0,
    y: 0,
    isHorizontal: null,
  });
  const hoveredNodeRef = useRef<string | null>(null);

  // Initialize Fibonacci 3D Sphere nodes
  useEffect(() => {
    const total = PLANET_SKILLS.length;
    const baseRadius = 270;
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle

    nodesRef.current = PLANET_SKILLS.map((item, i) => {
      const y = 1 - (i / (total - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      return {
        item,
        x: x * baseRadius,
        y: y * baseRadius * 0.82,
        z: z * baseRadius,
        origX: x * baseRadius,
        origY: y * baseRadius * 0.82,
        origZ: z * baseRadius,
      };
    });
  }, []);

  // Main 3D Animation Loop (Canvas Planet + Orbiting Skill Projection)
  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let planetAngle = 0;

    const render = () => {
      const container = containerRef.current;
      if (!container) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      // Update screen size flag
      const mobileCheck = width < 640;
      setIsMobileScreen(mobileCheck);

      // Retina Canvas scaling
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      /* ============================================================
       * ADAPTIVE DIMENSIONS FOR SMALL SCREENS
       * ============================================================ */
      let planetRadius: number;
      let orbitRadius: number;
      let camDist: number;

      if (width < 380) {
        // Ultra-compact mobile (iPhone SE, narrow screens)
        planetRadius = Math.max(42, Math.min(54, width * 0.14));
        orbitRadius = Math.max(98, Math.min(125, width * 0.35));
        camDist = 480;
      } else if (width < 480) {
        // Standard mobile (iPhone 12/13/14, Pixel)
        planetRadius = Math.max(52, Math.min(68, width * 0.16));
        orbitRadius = Math.max(120, Math.min(150, width * 0.36));
        camDist = 520;
      } else if (width < 640) {
        // Large mobile / phablet
        planetRadius = 75;
        orbitRadius = 175;
        camDist = 570;
      } else if (width < 1024) {
        // Tablet / small laptop
        planetRadius = 100;
        orbitRadius = 220;
        camDist = 610;
      } else {
        // Desktop
        planetRadius = 125;
        orbitRadius = 270;
        camDist = 650;
      }

      // Continuous Slow Rotation around axis
      if (isRotating && !isDraggingRef.current) {
        const speedMultiplier = hoveredNodeRef.current ? 0.25 : rotationSpeed;
        anglesRef.current.yaw += velocityRef.current.yaw * speedMultiplier;
        planetAngle += 0.0035 * speedMultiplier;
      }

      // Drag Inertia & Pitch Damping
      if (!isDraggingRef.current) {
        velocityRef.current.yaw += (0.0028 - velocityRef.current.yaw) * 0.03;
        velocityRef.current.pitch *= 0.92;
        anglesRef.current.pitch += velocityRef.current.pitch;
        anglesRef.current.pitch = Math.max(-0.6, Math.min(0.6, anglesRef.current.pitch));
      }

      const cosYaw = Math.cos(anglesRef.current.yaw);
      const sinYaw = Math.sin(anglesRef.current.yaw);
      const cosPitch = Math.cos(anglesRef.current.pitch);
      const sinPitch = Math.sin(anglesRef.current.pitch);

      /* ============================================================
       * 1. ATMOSPHERIC GLOW
       * ============================================================ */
      const glowGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        planetRadius * 0.4,
        centerX,
        centerY,
        planetRadius * 2.6
      );
      glowGrad.addColorStop(0, "rgba(52, 181, 250, 0.28)");
      glowGrad.addColorStop(0.3, "rgba(189, 157, 255, 0.16)");
      glowGrad.addColorStop(0.6, "rgba(138, 76, 252, 0.05)");
      glowGrad.addColorStop(1, "transparent");

      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, planetRadius * 2.6, 0, Math.PI * 2);
      ctx.fill();

      /* ============================================================
       * 2. BACK HALF OF PLANETARY RING (Z < 0)
       * ============================================================ */
      const ringRadiusX = planetRadius * 2.05;
      const ringRadiusY = planetRadius * 0.62;

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(-0.15);

      ctx.beginPath();
      ctx.ellipse(0, 0, ringRadiusX, ringRadiusY, 0, Math.PI, Math.PI * 2);
      ctx.strokeStyle = "rgba(52, 181, 250, 0.3)";
      ctx.lineWidth = mobileCheck ? 2.5 : 4.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(0, 0, ringRadiusX + 8, ringRadiusY + 2.5, 0, Math.PI, Math.PI * 2);
      ctx.strokeStyle = "rgba(189, 157, 255, 0.2)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      /* ============================================================
       * 3. 3D PLANET SPHERE
       * ============================================================ */
      const lightSourceX = centerX - planetRadius * 0.45;
      const lightSourceY = centerY - planetRadius * 0.45;

      const planetGrad = ctx.createRadialGradient(
        lightSourceX,
        lightSourceY,
        planetRadius * 0.1,
        centerX,
        centerY,
        planetRadius
      );
      planetGrad.addColorStop(0, "#a4d8ff");
      planetGrad.addColorStop(0.2, "#34b5fa");
      planetGrad.addColorStop(0.5, "#1f2b49");
      planetGrad.addColorStop(0.85, "#0a1329");
      planetGrad.addColorStop(1, "#040814");

      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, planetRadius, 0, Math.PI * 2);
      ctx.fillStyle = planetGrad;
      ctx.shadowColor = "rgba(52, 181, 250, 0.6)";
      ctx.shadowBlur = mobileCheck ? 20 : 35;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.clip();

      // Rotating Latitude Parallels
      ctx.strokeStyle = "rgba(164, 216, 255, 0.22)";
      ctx.lineWidth = mobileCheck ? 0.9 : 1.2;

      const latitudes = [-0.65, -0.35, 0, 0.35, 0.65];
      latitudes.forEach((latFrac) => {
        const yOff = latFrac * planetRadius;
        const radAtLat = Math.sqrt(Math.max(0, planetRadius * planetRadius - yOff * yOff));
        ctx.beginPath();
        ctx.ellipse(centerX, centerY + yOff, radAtLat, radAtLat * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Rotating Longitude Meridians
      const numMeridians = mobileCheck ? 6 : 8;
      for (let m = 0; m < numMeridians; m++) {
        const meridianAngle = planetAngle + (m * Math.PI) / (numMeridians / 2);
        const xOffset = Math.sin(meridianAngle) * planetRadius;
        const meridianDepth = Math.cos(meridianAngle);

        if (meridianDepth > 0) {
          ctx.beginPath();
          ctx.ellipse(
            centerX + xOffset * 0.5,
            centerY,
            Math.abs(xOffset),
            planetRadius,
            0,
            0,
            Math.PI * 2
          );
          ctx.strokeStyle = `rgba(164, 216, 255, ${0.12 + meridianDepth * 0.22})`;
          ctx.stroke();
        }
      }

      // Atmospheric Limb Rim Glow
      const rimGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        planetRadius * 0.75,
        centerX,
        centerY,
        planetRadius
      );
      rimGrad.addColorStop(0, "transparent");
      rimGrad.addColorStop(0.8, "rgba(52, 181, 250, 0.2)");
      rimGrad.addColorStop(1, "rgba(189, 157, 255, 0.55)");

      ctx.fillStyle = rimGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, planetRadius, 0, Math.PI * 2);
      ctx.fill();

      // Center Tech Singularity
      ctx.beginPath();
      ctx.arc(centerX, centerY, mobileCheck ? 5 : 7, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "#34b5fa";
      ctx.shadowBlur = mobileCheck ? 12 : 20;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.restore();

      /* ============================================================
       * 4. FRONT HALF OF PLANETARY RING (Z > 0)
       * ============================================================ */
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(-0.15);

      ctx.beginPath();
      ctx.ellipse(0, 0, ringRadiusX, ringRadiusY, 0, 0, Math.PI);
      ctx.strokeStyle = "rgba(52, 181, 250, 0.75)";
      ctx.lineWidth = mobileCheck ? 2.5 : 4.5;
      ctx.shadowColor = "rgba(52, 181, 250, 0.8)";
      ctx.shadowBlur = mobileCheck ? 10 : 15;
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(0, 0, ringRadiusX + 8, ringRadiusY + 2.5, 0, 0, Math.PI);
      ctx.strokeStyle = "rgba(189, 157, 255, 0.5)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.restore();

      /* ============================================================
       * 5. PROJECT 3D SKILL NODES
       * ============================================================ */
      const projected = nodesRef.current.map((node) => {
        const scaleRadius = orbitRadius / 270;
        const rawX = node.origX * scaleRadius;
        const rawY = node.origY * scaleRadius;
        const rawZ = node.origZ * scaleRadius;

        // Yaw + Pitch transformation
        const x1 = rawX * cosYaw - rawZ * sinYaw;
        const z1 = rawX * sinYaw + rawZ * cosYaw;

        const y2 = rawY * cosPitch - z1 * sinPitch;
        const z2 = rawY * sinPitch + z1 * cosPitch;

        node.x = x1;
        node.y = y2;
        node.z = z2;

        const scale = camDist / (camDist - z2);
        const screenX = centerX + x1 * scale;
        const screenY = centerY + y2 * scale;

        const depthNorm = (z2 + orbitRadius) / (2 * orbitRadius);
        const baseOpacity = Math.max(0.25, Math.min(1, 0.25 + depthNorm * 0.75));

        const isCatMatch =
          activeCategory === "all" || node.item.category === activeCategory;
        const isHovered = hoveredNodeRef.current === node.item.id;
        const opacity = isCatMatch ? (isHovered ? 1 : baseOpacity) : baseOpacity * 0.2;

        const zIndex = Math.round(z2 + orbitRadius + 10);

        // Adaptive scale limit for small screens to prevent node collision
        const minScale = mobileCheck ? 0.6 : 0.65;
        const maxScale = mobileCheck ? 1.05 : 1.2;

        return {
          item: node.item,
          screenX,
          screenY,
          scale: Math.max(minScale, Math.min(maxScale, scale)),
          opacity,
          zIndex,
          z: z2,
          isHighlighted: isCatMatch && (isHovered || selectedNode?.id === node.item.id),
        };
      });

      setProjectedNodes(projected);

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [activeCategory, isRotating, rotationSpeed, selectedNode]);

  /* ============================================================
   * TOUCH & POINTER EVENTS WITH PAN-Y PAGE SCROLL PASS-THROUGH
   * ============================================================ */
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    lastMouseRef.current = { x: e.clientX, y: e.clientY };
    touchStartRef.current = { x: e.clientX, y: e.clientY, isHorizontal: null };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - lastMouseRef.current.x;
    const deltaY = e.clientY - lastMouseRef.current.y;

    // Distinguish between horizontal spin and vertical native page scrolling
    if (e.pointerType === "touch" && touchStartRef.current.isHorizontal === null) {
      const totalDeltaX = Math.abs(e.clientX - touchStartRef.current.x);
      const totalDeltaY = Math.abs(e.clientY - touchStartRef.current.y);

      if (totalDeltaX > 7 || totalDeltaY > 7) {
        touchStartRef.current.isHorizontal = totalDeltaX >= totalDeltaY;
        if (!touchStartRef.current.isHorizontal) {
          // Vertical swipe detected -> release to allow native document scroll!
          isDraggingRef.current = false;
          return;
        }
      }
    }

    lastMouseRef.current = { x: e.clientX, y: e.clientY };

    anglesRef.current.yaw += deltaX * 0.006;
    anglesRef.current.pitch += deltaY * 0.005;

    velocityRef.current.yaw = deltaX * 0.003;
    velocityRef.current.pitch = deltaY * 0.003;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handleNodeClick = (item: PlanetSkillItem) => {
    setSelectedNode(item);
    onSelectSkill?.(item);
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Planetary Orbit Control Bar - Responsive Flex Wrap */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 w-full max-w-4xl px-3 sm:px-4 mb-3 sm:mb-4 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-on-surface-variant uppercase tracking-widest text-[10px] sm:text-[11px]">
            ORBIT: <span className="text-secondary font-bold">{isRotating ? "ACTIVE" : "PAUSED"}</span>
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="px-2.5 sm:px-3 py-1 rounded-full glass border border-white/10 hover:border-secondary/40 text-on-surface-variant hover:text-white transition-all cursor-pointer flex items-center gap-1 text-[11px] sm:text-xs"
            title={isRotating ? "Pause Orbit" : "Resume Orbit"}
          >
            <span className="material-symbols-outlined text-xs sm:text-sm">
              {isRotating ? "pause" : "play_arrow"}
            </span>
            <span>{isRotating ? "Pause" : "Spin"}</span>
          </button>

          <button
            onClick={() => setRotationSpeed((s) => (s === 1 ? 2 : s === 2 ? 0.5 : 1))}
            className="px-2.5 sm:px-3 py-1 rounded-full glass border border-white/10 hover:border-primary/40 text-on-surface-variant hover:text-white transition-all cursor-pointer text-[11px] sm:text-xs"
          >
            {rotationSpeed}x
          </button>
        </div>
      </div>

      {/* Main 3D Planet Celestial Viewport - Responsive Height & Touch-Action */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        style={{ touchAction: "pan-y" }}
        className="relative w-full h-[400px] sm:h-[520px] md:h-[600px] lg:h-[660px] max-w-5xl rounded-2xl sm:rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing select-none border border-white/10 bg-gradient-to-b from-[#060e20]/90 via-[#091328]/80 to-[#060e20]/95 shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_0_100px_rgba(52,181,250,0.06)]"
      >
        {/* Subtle Background Starfield Coordinates */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-40" />

        {/* Orbit Hint Watermark - Compact for mobile */}
        <div className="absolute top-3 left-4 sm:top-4 sm:left-6 pointer-events-none z-10">
          <div className="flex items-center gap-1.5 text-white/40 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider">
            <span className="material-symbols-outlined text-xs sm:text-sm">orbit</span>
            <span className="hidden sm:inline">Drag to rotate planet · Click any skill</span>
            <span className="sm:hidden">Swipe to rotate · Tap skill</span>
          </div>
        </div>

        {/* Center Canvas: 3D Rotating Planet Sphere + Atmospheric Halos */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />

        {/* 3D Projected Orbiting Skill Nodes */}
        {projectedNodes.map(({ item, screenX, screenY, scale, opacity, zIndex, z, isHighlighted }) => {
          const isSelected = selectedNode?.id === item.id;
          const isNear = z > 0;

          return (
            <div
              key={item.id}
              onClick={(e) => {
                e.stopPropagation();
                handleNodeClick(item);
              }}
              onMouseEnter={() => {
                hoveredNodeRef.current = item.id;
              }}
              onMouseLeave={() => {
                hoveredNodeRef.current = null;
              }}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                transform: `translate3d(${screenX}px, ${screenY}px, 0px) translate(-50%, -50%) scale(${scale})`,
                opacity,
                zIndex,
                pointerEvents: opacity < 0.22 ? "none" : "auto",
                transition: "opacity 0.2s ease, border-color 0.2s ease",
              }}
              className="cursor-pointer group"
            >
              <div
                className={`relative px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-full flex items-center gap-1.5 sm:gap-2 backdrop-blur-md border transition-all duration-300 ${
                  isSelected
                    ? "bg-secondary/35 border-secondary text-white shadow-[0_0_20px_rgba(52,181,250,0.7)] scale-110"
                    : isHighlighted
                    ? "bg-[#0f1930]/90 border-secondary/60 text-white shadow-[0_0_15px_rgba(52,181,250,0.35)]"
                    : isNear
                    ? "bg-[#0a1428]/85 border-white/20 text-on-surface hover:border-secondary hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(52,181,250,0.35)]"
                    : "bg-[#060e20]/75 border-white/10 text-on-surface-variant"
                }`}
              >
                {/* Glowing Orb Indicator */}
                <span
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-transform group-hover:scale-125 shrink-0"
                  style={{
                    backgroundColor: item.color,
                    boxShadow: `0 0 8px ${item.color}`,
                  }}
                />

                {/* Node Title - Uses shortName on small screens to prevent overflow */}
                <span className="text-[11px] sm:text-xs md:text-sm font-bold font-orbitron whitespace-nowrap">
                  {isMobileScreen ? item.shortName : item.name}
                </span>

                {/* Node Level Badge - Only shown on larger screens or selected node */}
                {!isMobileScreen && isNear && (
                  <span
                    className="text-[9px] font-mono uppercase px-1.5 py-0.2 rounded bg-white/10 text-on-surface-variant font-semibold"
                    style={{ borderColor: item.color }}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          );
        })}

        {/* Selected Skill Quick Detail Modal / HUD Card - Fully Responsive Position */}
        <AnimatePresence>
          {selectedNode && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.22 }}
              className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-auto sm:right-6 sm:w-96 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#091328]/95 backdrop-blur-2xl border border-secondary/40 shadow-[0_15px_50px_rgba(0,0,0,0.85),0_0_25px_rgba(52,181,250,0.25)] z-40 space-y-2.5 sm:space-y-3 font-sans"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <span
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full shadow-[0_0_10px] shrink-0"
                    style={{ backgroundColor: selectedNode.color, color: selectedNode.color }}
                  />
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase text-secondary font-bold tracking-wider">
                      {selectedNode.category} · {selectedNode.badge}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white font-orbitron">
                      {selectedNode.name}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedNode(null)}
                  className="p-1 rounded-full text-on-surface-variant hover:text-white hover:bg-white/10 transition-colors"
                >
                  <span className="material-symbols-outlined text-base">close</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed line-clamp-3 sm:line-clamp-none">
                {selectedNode.description}
              </p>

              {/* Proficiency Gauge */}
              <div className="pt-2 border-t border-white/10 space-y-1 font-mono">
                <div className="flex justify-between text-[11px] sm:text-xs">
                  <span className="text-outline uppercase text-[9px] sm:text-[10px]">Proficiency Level</span>
                  <span className="text-white font-bold">{selectedNode.level} ({selectedNode.power}%)</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedNode.power}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-secondary to-primary"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
