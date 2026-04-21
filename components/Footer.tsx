import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#060e20] tonal-shift bg-gradient-to-t from-[#091328] to-[#060e20] w-full py-10 md:py-12 px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-6 md:gap-8">
        <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#a3aac4] text-center md:text-left">
          © 2025 Waleed Refaat Abbas. Built with passion &amp; precision.
        </p>
        <Link className="text-[10px] md:text-xs uppercase tracking-widest text-[#a3aac4] hover:text-[#17a8ec] transition-colors smooth-scroll flex items-center gap-2 group" href="#hero">
          Back to top <span className="material-symbols-outlined text-sm md:text-base group-hover:-translate-y-1 transition-transform">arrow_upward</span>
        </Link>
      </div>
    </footer>
  );
}

