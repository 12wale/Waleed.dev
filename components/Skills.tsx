export default function Skills() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-surface-container-low" id="skills">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4" data-aos="fade-down">
          <span className="text-primary label-md uppercase tracking-widest font-bold">Technical Arsenal</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Expertise &amp; Tools</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-aos="fade-up" data-aos-delay="200">
          {/* Languages */}
          <div className="glass p-6 md:p-8 rounded-lg neon-border-hover transition-all duration-300">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary">terminal</span>
            </div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-outline-variant/30 pb-2">Languages</h3>
            <div className="space-y-3">
              {[
                "JavaScript (ES6+)",
                "TypeScript",
                "HTML5 / CSS3",
                "Java",
                "C++",
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-3 group">
                  <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0"></div>
                  <span className="text-sm md:text-base text-on-surface-variant font-medium group-hover:text-white transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend Frameworks */}
          <div className="glass p-6 md:p-8 rounded-lg neon-border-hover transition-all duration-300">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary">web</span>
            </div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-outline-variant/30 pb-2">Frontend</h3>
            <div className="space-y-3">
              {[
                "React.js / Next.js",
                "Redux / Redux Toolkit",
                "Zustand / Context API",
                "Tailwind CSS",
                "Bootstrap",
                "Styled Components",
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-3 group">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  <span className="text-sm md:text-base text-on-surface-variant font-medium group-hover:text-white transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend & Tools */}
          <div className="glass p-6 md:p-8 rounded-lg neon-border-hover transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-tertiary/20 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-tertiary">construction</span>
            </div>
            <h3 className="text-xl font-bold mb-6 text-white border-b border-outline-variant/30 pb-2">Backend &amp; Tools</h3>
            <div className="space-y-3">
              {[
                "Node.js / Express.js",
                "MongoDB / REST APIs",
                "JWT Authentication",
                "Git / GitHub / Bitbucket",
                "Postman / Figma",
                "Vercel / VS Code",
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-3 group">
                  <div className="w-2 h-2 rounded-full bg-tertiary flex-shrink-0"></div>
                  <span className="text-sm md:text-base text-on-surface-variant font-medium group-hover:text-white transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Concepts row */}
        <div className="mt-8 glass p-6 md:p-8 rounded-lg">
          <h3 className="text-sm uppercase tracking-widest text-outline font-bold mb-5">Concepts &amp; Methodologies</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "OOP", "Responsive & Mobile-First Design", "RESTful APIs",
              "Agile / Scrum", "Component-Based Architecture",
              "Performance Optimization", "Cross-Browser Compatibility",
              "ESLint / Prettier", "Unit Testing Concepts",
            ].map((concept) => (
              <span key={concept} className="px-3 py-1.5 bg-surface text-xs font-semibold rounded-full border border-outline-variant text-on-surface-variant hover:text-white hover:border-primary/50 transition-all cursor-default">
                {concept}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
