import Image from "next/image";

export default function Contact() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-surface border-t border-outline-variant/10" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div className="space-y-8 text-center lg:text-left" data-aos="fade-right">
            <div className="space-y-4">
              <span className="text-primary text-xs uppercase tracking-widest font-bold">Get In Touch</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Let&apos;s create something<br />exceptional.
              </h2>
            </div>
            <p className="text-on-surface-variant text-base md:text-lg">
              Currently open to freelance opportunities and full-time roles. Let&apos;s discuss your project or just say hi.
            </p>
            {/* Contact Details */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="material-symbols-outlined text-primary text-lg">mail</span>
                <a href="mailto:wlydrftm399@gmail.com" className="text-on-surface-variant hover:text-white transition-colors text-sm md:text-base">wlydrftm399@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="material-symbols-outlined text-secondary text-lg">phone</span>
                <a href="tel:+201156424896" className="text-on-surface-variant hover:text-white transition-colors text-sm md:text-base">+20 115 642 4896</a>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <span className="material-symbols-outlined text-tertiary text-lg">location_on</span>
                <span className="text-on-surface-variant text-sm md:text-base">Cairo, Egypt</span>
              </div>
            </div>
            <div className="flex gap-4 md:gap-6 justify-center lg:justify-start">
              <a className="relative group w-12 h-12 rounded-full glass flex items-center justify-center hover:shadow-[0_0_20px_#17a8ec] transition-all" href="https://github.com/12wale" title="GitHub">
                <Image alt="GitHub" width={20} height={20} className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjTmGa4cUs3XCqvbf0PnbaB8P0CXbp_mVxzi6YfgiSNJvDfTklHfSoqjBagv4AryIYTg7xPAnocW_axM3HNAF0-68dv1Ujkr7QDGDG5CKCJTsuEim35-1q-eufqDUelZMCZiE36WsE1Qjbs70GRgv68pJEwEE1mWWd43YPoN1qnZ3cfmeBpoRltVr25DDxkM8KoWzdza0e_EAxWHp6u0tn1RGy4NzGAPvkzDSFj8pl8uT-YHE0BaRPHzmGv6MHALPbKmVQQHXloGU" />
              </a>
              <a className="relative group w-12 h-12 rounded-full glass flex items-center justify-center hover:shadow-[0_0_20px_#bd9dff] transition-all" href="www.linkedin.com/in/waleed-refaat-4b4164203" title="LinkedIn">
                <Image alt="LinkedIn" width={20} height={20} className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIywL68t-xCGmfzrzCNb5cQazpJbQ7zd_AOsOxzwCNTF0o7PrwweD9gkAXq65GR76I_HI4xd7Vzhs2k_qLOFucOTeLR2eP_I1jXBFcaArhNtz9ENfuYyQ89N5sAc6ziCL_UkkJB7VvPjRETQVrf66k29MU27m8IOiZdpNNoM763ofxsgB-LiQzzQFrfj5tABRfhXf60Lg6MfP_TIx5Oh-HX-z1HmdPPBYygHFNA8aip48zLIE1rU4K9P-Kibaxc9E0JM25wtHo5tU" />
              </a>
              <a className="relative group w-12 h-12 rounded-full glass flex items-center justify-center hover:shadow-[0_0_20px_#ff97b2] transition-all" href="mailto:wlydrftm399@gmail.com" title="Email">
                <span className="material-symbols-outlined text-white text-xl">mail</span>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass p-6 md:p-8 lg:p-12 rounded-lg relative group" data-aos="fade-left" data-aos-delay="200">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none"></div>
            <form className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest text-on-surface-variant font-semibold">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-[#000000] border border-[#40485d]/50 rounded-lg text-white placeholder-[#6d758c] font-[Orbitron,sans-serif] text-sm outline-none focus:border-[#bd9dff] focus:shadow-[0_0_15px_rgba(189,157,255,0.2)] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest text-on-surface-variant font-semibold">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-[#000000] border border-[#40485d]/50 rounded-lg text-white placeholder-[#6d758c] font-[Orbitron,sans-serif] text-sm outline-none focus:border-[#bd9dff] focus:shadow-[0_0_15px_rgba(189,157,255,0.2)] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-widest text-on-surface-variant font-semibold">Message</label>
                <textarea
                  placeholder="Describe your project..."
                  rows={5}
                  className="w-full px-4 py-3 bg-[#000000] border border-[#40485d]/50 rounded-lg text-white placeholder-[#6d758c] font-[Orbitron,sans-serif] text-sm outline-none focus:border-[#bd9dff] focus:shadow-[0_0_15px_rgba(189,157,255,0.2)] transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary-dim to-secondary rounded-xl text-black font-extrabold hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(52,181,250,0.15)] hover:shadow-[0_0_30px_rgba(189,157,255,0.3)] text-sm md:text-base tracking-widest uppercase"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
