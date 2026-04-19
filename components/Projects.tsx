import Image from "next/image";

const SHOT = (url: string) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=630`;

const projects = [
  {
    id: "sun-and-soil",
    name: "Sun and Soil",
    url: "https://sunandsoilegypt.com",
    previewUrl: SHOT("https://sunandsoilegypt.com"),
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    description:
      "Freelance Project — Full-stack MERN platform for an Egyptian herb exporting company featuring a responsive client site with product listings, company profile, and export services.",
    featuresTitle: "Key Features",
    features: [
      "Complete admin panel with content, product & order management",
      "Secure authentication with role-based access control",
      "Fully responsive client-facing site",
    ],
    liveUrl: "https://sunandsoilegypt.com",
    codeUrl: null,
    colSpan: "",
  },
  {
    id: "sustaingrc",
    name: "SustainGRC",
    url: "https://sustaingrc.com",
    previewUrl: SHOT("https://sustaingrc.com"),
    tags: ["React.js", "Tailwind CSS", "REST APIs"],
    description:
      "Internship Project at LevelUp ESG — ESG Governance and Compliance SaaS platform featuring modular, reusable React components powering dynamic dashboards and compliance reporting.",
    featuresTitle: "Key Highlights",
    features: [
      "Modular, reusable components following best practices",
      "REST API integration for dynamic compliance dashboards",
      "Improved UI consistency & responsiveness across devices",
    ],
    liveUrl: "https://sustaingrc.com",
    codeUrl: null,
    colSpan: "",
  },
  {
    id: "your-shop",
    name: "Your Shop",
    url: "https://ecommerce-app-seven-lake.vercel.app",
    previewUrl: SHOT("https://ecommerce-app-seven-lake.vercel.app"),
    tags: ["React.js", "Tailwind CSS", "Zustand"],
    description:
      "Fully responsive e-commerce web app with product listings, shopping cart, and user authentication — global state managed efficiently with Zustand (Feb 2025).",
    featuresTitle: "Key Features",
    features: [
      "Optimistic UI updates with Zustand global state",
      "Optimized component rendering & UI performance",
    ],
    liveUrl: "https://ecommerce-app-seven-lake.vercel.app",
    codeUrl: "https://github.com/12wale/Ecommerce-app",
    colSpan: "",
  },
  {
    id: "ajyad",
    name: "Ajyad – Holy Journeys",
    url: "https://ajyad-holy-journeys.vercel.app",
    previewUrl: SHOT("https://ajyad-holy-journeys.vercel.app"),
    tags: ["React.js", "Next.js", "Tailwind CSS"],
    description:
      "Freelance Project — Professional travel platform for Ajyad, a company specializing in Hajj and Umrah packages for Muslim pilgrims. Features package listings, itineraries, and online booking.",
    featuresTitle: "Key Features",
    features: [
      "Hajj & Umrah package listings with detailed itineraries",
      "Fully responsive design optimized for all devices",
      "Clean, trust-building UI tailored for spiritual travel",
    ],
    liveUrl: "https://ajyad-holy-journeys.vercel.app",
    codeUrl: null,
    colSpan: "",
  },
];

export default function Projects() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-surface-container-low" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24 space-y-4" data-aos="fade-down">
          <span className="text-primary label-md uppercase tracking-widest font-bold">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">Featured Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" data-aos="fade-up" data-aos-delay="200">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden bg-[#192540]/30 backdrop-blur-sm rounded-xl transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:shadow-primary/20 flex flex-col h-full border border-outline-variant/10 hover:border-primary/40 ${project.colSpan}`}
            >
              {/* Top gradient bar on hover */}
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>

              {/* Live Screenshot Preview */}
              <div className="aspect-video relative overflow-hidden">
                <Image
                  alt={project.name}
                  fill
                  className="object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700"
                  src={project.previewUrl}
                  unoptimized
                />
                <div className="absolute inset-0 bg-surface/30 group-hover:bg-surface/10 transition-all z-10"></div>
                {/* Live badge */}
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Live</span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 space-y-3 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-surface text-xs font-bold rounded-full border border-outline-variant">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{project.description}</p>

                <div className="mt-auto space-y-2 border-t border-outline-variant/20 pt-4">
                  <h4 className="text-xs uppercase text-primary font-bold tracking-widest">{project.featuresTitle}</h4>
                  <ul className="text-xs text-on-surface-variant space-y-1">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="text-secondary mt-0.5 text-xs">▹</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action links */}
                <div className="flex flex-wrap gap-3 pt-4 mt-2 items-center">
                  {project.liveUrl && (
                    <a
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary/80 rounded-lg text-xs font-bold text-surface hover:scale-105 hover:shadow-[0_0_20px_rgba(189,157,255,0.4)] transition-all duration-300 group/btn"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="material-symbols-outlined text-sm group-hover/btn:rotate-12 transition-transform">language</span>
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      className="flex items-center gap-2 px-4 py-2 border border-outline-variant/30 bg-surface/50 rounded-lg text-xs font-bold text-white hover:bg-surface-variant hover:border-primary/50 transition-all duration-300 group/btn"
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="material-symbols-outlined text-sm group-hover/btn:scale-110 transition-transform">code</span>
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA at the bottom */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <a 
            href="https://github.com/12wale" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-surface-variant/30 border border-outline-variant/50 rounded-xl text-white font-bold hover:bg-surface-variant/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(189,157,255,0.2)] group"
          >
            <span className="material-symbols-outlined text-primary group-hover:rotate-12 transition-transform">terminal</span>
            <span>Explore more on GitHub</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
