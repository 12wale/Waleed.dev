export default function Education() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-surface-container-low" id="education">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Education */}
          <div className="space-y-8" data-aos="fade-right">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">school</span> Education
            </h2>
            <div className="space-y-6">
              <div className="glass p-6 rounded-lg border-l-4 border-primary hover:-translate-y-1 transition-transform cursor-default">
                <h3 className="text-lg md:text-xl font-bold text-white">Bachelor of Science in Computer Science</h3>
                <p className="text-sm md:text-base text-on-surface-variant">Fayoum University · Faculty of Computer Science</p>
                <span className="text-xs md:text-sm text-outline">Sep 2023 – Nov 2028 (Expected) · 2nd Year</span>
                <ul className="mt-3 text-xs md:text-sm text-on-surface-variant space-y-1">
                  <li className="flex gap-2"><span className="text-primary">•</span> Active member of student technical communities &amp; extracurricular activities.</li>
                  <li className="flex gap-2"><span className="text-primary">•</span> ICPC trainee — algorithmic problem-solving &amp; advanced data structures.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Languages & Certifications */}
          <div className="space-y-8" data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary">language</span> Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass p-4 rounded-lg flex items-center gap-4 group hover:bg-surface-container-highest transition-colors cursor-pointer relative" title="Frontend Developer Internship Certificate">
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">workspace_premium</span>
                <div>
                  <h4 className="font-bold text-sm text-white">Internship Certificate</h4>
                  <p className="text-xs text-on-surface-variant">LevelUp ESG · 2025</p>
                </div>
              </div>
              <div className="glass p-4 rounded-lg flex items-center gap-4 group hover:bg-surface-container-highest transition-colors cursor-pointer relative" title="Intro to Cyber Security – Cisco">
                <span className="material-symbols-outlined text-tertiary group-hover:scale-110 transition-transform">shield</span>
                <div>
                  <h4 className="font-bold text-sm text-white">Intro to Cyber Security</h4>
                  <p className="text-xs text-on-surface-variant">Cisco Networking Academy · 2024</p>
                </div>
              </div>
              <div className="glass p-4 rounded-lg flex items-center gap-4 group hover:bg-surface-container-highest transition-colors cursor-pointer relative" title="React.js Development Course – Devs Activity">
                <span className="material-symbols-outlined text-secondary group-hover:scale-110 transition-transform">token</span>
                <div>
                  <h4 className="font-bold text-sm text-white">React.js Development</h4>
                  <p className="text-xs text-on-surface-variant">Devs Activity · Suez Canal University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
