export default function Extracurricular() {
  const activities = [
    {
      icon: "groups",
      color: "primary",
      title: "Head of Frontend Team – GDSC",
      subtitle: "Google Developer Student Clubs · Fayoum University",
      period: "Nov 2025 – Present",
      bullets: [
        "Leading a frontend team and mentoring members on React.js, Next.js, and Tailwind CSS.",
        "Organizing technical workshops to grow the local developer community at Fayoum University.",
      ],
    },
    {
      icon: "code",
      color: "secondary",
      title: "ICPC Competitive Programming Trainee",
      subtitle: "Fayoum, Egypt",
      period: "Nov 2023",
      bullets: [
        "Trained in algorithmic problem-solving and advanced data structures for the International Collegiate Programming Contest.",
      ],
    },
    {
      icon: "military_tech",
      color: "tertiary",
      title: "Leadership Training Camp – Member",
      subtitle: "Fayoum, Egypt",
      period: "Aug 2024",
      bullets: [
        "Completed an intensive program focused on leadership skills, team management, and professional readiness.",
      ],
    },
  ];

  const colorMap: Record<string, string> = {
    primary: "border-primary text-primary bg-primary/10 shadow-[0_0_15px_rgba(189,157,255,0.1)]",
    secondary: "border-secondary text-secondary bg-secondary/10 shadow-[0_0_15px_rgba(23,168,236,0.1)]",
    tertiary: "border-tertiary text-tertiary bg-tertiary/10 shadow-[0_0_15px_rgba(255,151,178,0.1)]",
  };

  const dotColorMap: Record<string, string> = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-surface border-y border-outline-variant/10" id="activities">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-4" data-aos="fade-down">
          <span className="text-tertiary label-md uppercase tracking-widest font-bold">Beyond the Code</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Extracurricular Activities</h2>
          <p className="text-base md:text-lg text-on-surface-variant max-w-xl mx-auto">Leadership, community building, and competitive excellence outside the workplace.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="glass p-6 md:p-8 rounded-lg border-l-4 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
              style={{ borderLeftColor: "var(--color-" + activity.color + ")" }}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${colorMap[activity.color].split(" ").slice(2).join(" ")}`}>
                <span className={`material-symbols-outlined ${dotColorMap[activity.color]}`}>{activity.icon}</span>
              </div>
              <div>
                <span className={`text-xs font-bold uppercase tracking-widest mb-1 block ${dotColorMap[activity.color]}`}>{activity.period}</span>
                <h3 className="text-lg md:text-xl font-bold text-white leading-snug">{activity.title}</h3>
                <p className={`text-sm font-medium mt-0.5 ${dotColorMap[activity.color]}`}>{activity.subtitle}</p>
              </div>
              <ul className="text-xs md:text-sm text-on-surface-variant space-y-2 mt-auto">
                {activity.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className={dotColorMap[activity.color]}>•</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Languages spoken */}
        <div className="mt-10 glass p-6 md:p-8 rounded-lg">
          <h3 className="text-sm uppercase tracking-widest text-outline font-bold mb-5">Languages Spoken</h3>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-base">language</span>
              </div>
              <div>
                <p className="font-bold text-white text-sm">Arabic</p>
                <p className="text-xs text-on-surface-variant">Native</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-base">translate</span>
              </div>
              <div>
                <p className="font-bold text-white text-sm">English</p>
                <p className="text-xs text-on-surface-variant">Upper Intermediate (B2)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
