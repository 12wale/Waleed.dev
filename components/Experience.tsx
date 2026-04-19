export default function Experience() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-surface border-y border-outline-variant/10" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4" data-aos="fade-down">
          <span className="text-tertiary label-md uppercase tracking-widest font-bold">The Journey</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Professional Experience</h2>
        </div>
        <div className="relative space-y-12" data-aos="fade-up" data-aos-delay="200">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent hidden md:block"></div>
          {/* Experience Item */}
          <div className="relative flex flex-col md:flex-row items-center justify-between group">
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_#bd9dff] z-10 group-hover:scale-125 transition-transform duration-300"></div>
            <div className="w-full md:w-[45%] glass p-6 md:p-8 rounded-lg text-left group-hover:border-primary/50 transition-colors duration-300">
              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">Mar 2025 – Jun 2025</span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Frontend Developer Intern</h3>
              <p className="text-secondary font-medium mb-4 text-sm md:text-base">LevelUp ESG · London, UK (Remote)</p>
              <ul className="text-on-surface-variant space-y-3 text-xs md:text-sm">
                <li className="flex gap-2"><span className="text-primary">•</span> Developed and maintained reusable React.js UI components for the SustainGRC ESG compliance platform.</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Integrated REST APIs to display dynamic data across multiple dashboard views.</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Participated in agile sprint cycles, daily standups, and peer code reviews.</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Ensured cross-browser compatibility and responsive design using Tailwind CSS.</li>
                <li className="flex gap-2"><span className="text-primary">•</span> Collaborated with senior developers using Git, GitHub, and Bitbucket for version control.</li>
              </ul>
            </div>
            <div className="hidden md:block w-[45%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
