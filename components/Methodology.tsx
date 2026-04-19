export default function Methodology() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-surface border-y border-outline-variant/10" id="methodology">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4" data-aos="fade-down">
          <span className="text-secondary label-md uppercase tracking-widest font-bold">The Process</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Development Methodology</h2>
          <p className="text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto px-4">A systematic approach to transforming complex requirements into scalable, performant web applications.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="100">
          <div className="glass p-6 rounded-lg text-center group hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-3xl text-primary">search</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">1. Discovery</h3>
            <p className="text-sm text-on-surface-variant">Gathering requirements, analyzing user needs, and defining the project architecture.</p>
          </div>
          <div className="glass p-6 rounded-lg text-center group hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
              <span className="material-symbols-outlined text-3xl text-secondary">design_services</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">2. Design</h3>
            <p className="text-sm text-on-surface-variant">Prototyping UI/UX in Figma and establishing the design system and component structure.</p>
          </div>
          <div className="glass p-6 rounded-lg text-center group hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 mx-auto bg-tertiary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-tertiary/20 transition-colors">
              <span className="material-symbols-outlined text-3xl text-tertiary">code_blocks</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">3. Development</h3>
            <p className="text-sm text-on-surface-variant">Agile implementation with React/Next.js, ensuring clean code and robust state management.</p>
          </div>
          <div className="glass p-6 rounded-lg text-center group hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 mx-auto bg-primary-fixed-dim/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-fixed-dim/20 transition-colors">
              <span className="material-symbols-outlined text-3xl text-primary-fixed-dim">rocket_launch</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">4. Deployment</h3>
            <p className="text-sm text-on-surface-variant">CI/CD pipeline integration, performance optimization, and seamless cloud hosting.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
