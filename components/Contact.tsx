"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("submitting");

    // Simulating smooth submission (or hook to API)
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("wlydrftm399@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-surface border-t border-white/5 relative overflow-hidden" id="contact">
      {/* Background ambient orbs */}
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass border border-primary/30 text-primary text-xs uppercase tracking-widest font-bold font-orbitron">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-orbitron leading-tight">
                Let&apos;s Build Something <br />
                <span className="text-gradient-primary">Exceptional.</span>
              </h2>
            </div>

            <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Currently open to full-time frontend engineering opportunities, contract roles, and high-impact freelance projects. Let&apos;s discuss your roadmap.
            </p>

            {/* Direct Contact List */}
            <div className="space-y-4 max-w-md mx-auto lg:mx-0">
              <div className="p-4 rounded-xl glass-card flex items-center justify-between group border border-white/10 hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-xl">mail</span>
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-mono text-outline uppercase">Email Address</p>
                    <a
                      href="mailto:wlydrftm399@gmail.com"
                      className="text-sm font-semibold text-white hover:text-primary transition-colors font-sans"
                    >
                      wlydrftm399@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-on-surface-variant hover:text-white transition-colors"
                  title="Copy Email"
                >
                  <span className="material-symbols-outlined text-sm">
                    {copiedEmail ? "check" : "content_copy"}
                  </span>
                </button>
              </div>

              <div className="p-4 rounded-xl glass-card flex items-center justify-between group border border-white/10 hover:border-secondary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-xl">phone</span>
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-mono text-outline uppercase">Phone &amp; WhatsApp</p>
                    <a
                      href="tel:+201156424896"
                      className="text-sm font-semibold text-white hover:text-secondary transition-colors font-sans"
                    >
                      +20 115 642 4896
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-card flex items-center gap-3 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary text-xl">location_on</span>
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-mono text-outline uppercase">Location</p>
                  <p className="text-sm font-semibold text-white font-sans">
                    Cairo, Egypt · Open to Remote Worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center lg:justify-start pt-2">
              <a
                href="https://github.com/12wale"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white hover:text-primary hover:border-primary/40 hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/waleed-refaat-4b4164203"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white hover:text-[#38bdf8] hover:border-[#38bdf8]/40 hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:wlydrftm399@gmail.com"
                title="Email"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-white hover:text-rose-400 hover:border-rose-400/40 hover:scale-110 transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <SiGmail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-7 sm:p-10 rounded-2xl glass-card border border-white/15 relative shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white font-orbitron mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant mb-6">
              Fill out the form below and I will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="block text-xs uppercase font-mono tracking-wider text-on-surface-variant font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Connor"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#060e20]/90 border border-white/10 text-white placeholder-outline text-sm outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(189,157,255,0.25)] transition-all font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs uppercase font-mono tracking-wider text-on-surface-variant font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#060e20]/90 border border-white/10 text-white placeholder-outline text-sm outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(189,157,255,0.25)] transition-all font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs uppercase font-mono tracking-wider text-on-surface-variant font-semibold">
                  Project Details / Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project, timeline, and goals..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#060e20]/90 border border-white/10 text-white placeholder-outline text-sm outline-none focus:border-primary focus:shadow-[0_0_20px_rgba(189,157,255,0.25)] transition-all font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-surface font-extrabold text-sm uppercase tracking-wider font-orbitron hover:shadow-[0_0_30px_rgba(189,157,255,0.6)] hover:scale-[1.02] active:scale-95 transition-all duration-300 disabled:opacity-50 cursor-pointer"
              >
                {status === "submitting" ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-surface border-t-transparent rounded-full animate-spin"></span>
                    <span>Transmitting...</span>
                  </span>
                ) : (
                  <span>Dispatch Message</span>
                )}
              </button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs text-center font-mono"
                  >
                    ✓ Message received successfully! I will reply shortly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
