"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGame } from "@/context/GameContext";
import { gameAudio } from "@/lib/gameAudio";

export default function GameHUD() {
  const {
    xp,
    level,
    levelTitle,
    progressPercent,
    quests,
    completedCount,
    soundEnabled,
    toggleSound,
    cyberMode,
    toggleCyberMode,
    notification,
  } = useGame();

  const [questDrawerOpen, setQuestDrawerOpen] = useState(false);

  return (
    <>
      {/* Floating HUD Status Bar (Fixed Bottom Right on desktop, collapsible) */}
      <aside aria-label="Game HUD" className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 pointer-events-none">
        {/* Main Gamer Controller Pill */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pointer-events-auto flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 rounded-2xl glass-card border border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(189,157,255,0.15)] backdrop-blur-2xl"
        >
          {/* Level & XP Gauge */}
          <div className="flex items-center gap-2.5 pl-2 pr-1">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-orbitron font-extrabold text-xs text-surface shadow-[0_0_12px_#bd9dff]">
              L{level}
            </div>

            <div className="hidden sm:flex flex-col gap-1 w-28">
              <div className="flex justify-between items-center text-[10px] font-mono font-bold">
                <span className="text-white truncate max-w-[80px]">{levelTitle}</span>
                <span className="text-secondary">{xp} XP</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden border border-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  style={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>

          <div className="h-6 w-px bg-white/10 hidden sm:block"></div>

          {/* Quest Log Toggle Button */}
          <button
            onClick={() => {
              setQuestDrawerOpen(!questDrawerOpen);
              gameAudio.playSelect();
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              questDrawerOpen
                ? "bg-primary/20 text-primary border border-primary/40 shadow-[0_0_15px_rgba(189,157,255,0.3)]"
                : "bg-white/5 text-on-surface hover:text-white hover:bg-white/10 border border-white/10"
            }`}
            title="Open Quest Log"
          >
            <span className="material-symbols-outlined text-sm text-secondary">
              sports_esports
            </span>
            <span className="hidden sm:inline">Quests</span>
            <span className="px-1.5 py-0.2 rounded-md bg-white/10 text-[10px] text-white">
              {completedCount}/{quests.length}
            </span>
          </button>

          {/* Audio Toggle Button */}
          <button
            onClick={toggleSound}
            className={`p-1.5 rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center ${
              soundEnabled
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_12px_rgba(52,211,153,0.3)]"
                : "bg-white/5 text-on-surface-variant hover:text-white border border-white/10"
            }`}
            title={soundEnabled ? "Mute SFX" : "Enable 8-Bit Cyber Audio"}
          >
            <span className="material-symbols-outlined text-lg">
              {soundEnabled ? "volume_up" : "volume_off"}
            </span>
          </button>

          {/* Cyber Overdrive Mode Button */}
          <button
            onClick={toggleCyberMode}
            className={`p-1.5 rounded-xl text-xs transition-all cursor-pointer flex items-center justify-center ${
              cyberMode
                ? "bg-cyan-500/25 text-cyan-300 border border-cyan-400 shadow-[0_0_15px_rgba(52,181,250,0.5)] animate-pulse"
                : "bg-white/5 text-on-surface-variant hover:text-white border border-white/10"
            }`}
            title={cyberMode ? "Disable Matrix Overdrive" : "Activate Cyber Overdrive"}
          >
            <span className="material-symbols-outlined text-lg">bolt</span>
          </button>
        </motion.div>
      </aside>

      {/* Quest Drawer Modal */}
      <AnimatePresence>
        {questDrawerOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setQuestDrawerOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
            />

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative w-full sm:w-[420px] bg-[#091328]/95 border border-white/20 sm:rounded-2xl rounded-t-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-10 pointer-events-auto max-h-[85vh] overflow-y-auto space-y-5"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-2xl">
                    military_tech
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white font-orbitron">
                      Active Quest Log
                    </h3>
                    <p className="text-xs text-on-surface-variant font-mono">
                      Interact with the site to earn XP &amp; level up
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setQuestDrawerOpen(false)}
                  className="p-1 rounded-full hover:bg-white/10 text-on-surface-variant hover:text-white"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              {/* Player Progress Card */}
              <div className="p-4 rounded-xl glass border border-white/10 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="font-bold text-white font-orbitron">LVL {level}: {levelTitle}</span>
                  <span className="text-secondary font-bold">{xp} Total XP</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-primary via-secondary to-tertiary"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <p className="text-[11px] text-on-surface-variant font-mono">
                  Complete quests below to unlock achievements and status ranks.
                </p>
              </div>

              {/* Quest List */}
              <div className="space-y-3">
                {quests.map((q) => (
                  <div
                    key={q.id}
                    className={`p-3.5 rounded-xl border transition-all ${
                      q.completed
                        ? "bg-emerald-500/10 border-emerald-500/30 text-white"
                        : "bg-white/5 border-white/10 text-on-surface-variant"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`material-symbols-outlined text-lg ${
                            q.completed ? "text-emerald-400" : "text-outline"
                          }`}
                        >
                          {q.completed ? "check_circle" : "radio_button_unchecked"}
                        </span>
                        <h4
                          className={`text-xs font-bold font-orbitron ${
                            q.completed ? "text-white line-through opacity-80" : "text-white"
                          }`}
                        >
                          {q.title}
                        </h4>
                      </div>

                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                          q.completed
                            ? "bg-emerald-400/20 text-emerald-300"
                            : "bg-secondary/15 text-secondary"
                        }`}
                      >
                        +{q.xp} XP
                      </span>
                    </div>

                    <p className="text-[11px] text-on-surface-variant mt-1.5 pl-6 font-sans">
                      {q.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating XP / Achievement Notification Banner */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed top-20 right-4 sm:right-8 z-50 p-4 rounded-2xl glass-card border border-primary/40 shadow-[0_15px_40px_rgba(0,0,0,0.9),0_0_30px_rgba(189,157,255,0.4)] flex items-center gap-3.5 max-w-sm pointer-events-auto"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_#bd9dff]">
              <span className="material-symbols-outlined text-surface text-xl">
                star
              </span>
            </div>

            <div>
              <p className="text-xs font-bold text-primary font-orbitron tracking-wider">
                {notification.title}
              </p>
              <p className="text-xs text-white font-medium mt-0.5">
                {notification.subtitle}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
