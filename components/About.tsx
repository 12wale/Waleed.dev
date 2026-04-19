import Image from "next/image";
import self from "@/public/PROFILE.jpg"
export default function About() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-surface" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center" data-aos="fade-up">
          <div className="relative group mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative aspect-square rounded-lg overflow-hidden glass border-outline-variant/20">
              <Image alt="Waleed Portrait" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" src={self} />
            </div>
          </div>
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-tertiary label-md uppercase tracking-widest font-bold">About Me</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">Junior Frontend Developer</h2>
              <p className="text-base md:text-lg text-on-surface-variant leading-relaxed">
                Junior Frontend Developer with hands-on experience building responsive, high-performance web applications using React.js, Next.js, TypeScript, and Tailwind CSS. Proven ability to deliver full-stack MERN projects in freelance and professional internship settings. Passionate about clean code, component-based architecture, and bridging the gap between functional and exceptional user experiences.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-outline-variant/20">
              <div className="text-center md:text-left">
                <span className="block text-2xl md:text-3xl font-extrabold text-primary">3+</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant">Projects</span>
              </div>
              <div className="text-center md:text-left">
                <span className="block text-2xl md:text-3xl font-extrabold text-secondary">15+</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant">Technologies</span>
              </div>
              <div className="text-center md:text-left group relative">
                <span className="block text-2xl md:text-3xl font-extrabold text-tertiary">1+</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-on-surface-variant">Years Exp</span>
                <div className="absolute -top-10 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 bg-surface-container-high text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block">Internship &amp; Freelance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
