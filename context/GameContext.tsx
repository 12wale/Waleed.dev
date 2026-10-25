"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { gameAudio } from "@/lib/gameAudio";

export interface Quest {
  id: string;
  title: string;
  desc: string;
  xp: number;
  completed: boolean;
}

const INITIAL_QUESTS: Quest[] = [
  {
    id: "boot-terminal",
    title: "Boot the System",
    desc: "Interact with the terminal tabs or cyber console in the Hero section.",
    xp: 50,
    completed: false,
  },
  {
    id: "arsenal-scan",
    title: "Arsenal Scan",
    desc: "Filter or inspect technical skills in the Technical Arsenal.",
    xp: 75,
    completed: false,
  },
  {
    id: "deployment-recon",
    title: "Deployment Recon",
    desc: "Filter project categories or inspect a project in Quick View.",
    xp: 100,
    completed: false,
  },
  {
    id: "bug-slayer",
    title: "Bug Hunter Elite",
    desc: "Play and win the Bug Slayer mini-game in the Terminal.",
    xp: 150,
    completed: false,
  },
  {
    id: "first-contact",
    title: "Establish Uplink",
    desc: "Copy developer email or dispatch a direct message in Contact.",
    xp: 100,
    completed: false,
  },
];

const LEVEL_TITLES = [
  "Novice Explorer",
  "Code Mercenary",
  "MERN Vanguard",
  "Motion Cyberpunk",
  "Legendary Architect",
];

interface GameNotification {
  id: number;
  title: string;
  subtitle: string;
  xp: number;
}

interface GameContextType {
  xp: number;
  level: number;
  levelTitle: string;
  progressPercent: number;
  quests: Quest[];
  completedCount: number;
  soundEnabled: boolean;
  toggleSound: () => void;
  cyberMode: boolean;
  toggleCyberMode: () => void;
  unlockQuest: (id: string) => void;
  addXP: (amount: number, reason: string) => void;
  notification: GameNotification | null;
}

const GameContext = createContext<GameContextType | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [xp, setXp] = useState<number>(0);
  const [quests, setQuests] = useState<Quest[]>(INITIAL_QUESTS);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [cyberMode, setCyberMode] = useState<boolean>(false);
  const [notification, setNotification] = useState<GameNotification | null>(null);

  // Load from local storage
  useEffect(() => {
    try {
      const savedXp = localStorage.getItem("waleed_portfolio_xp");
      const savedSound = localStorage.getItem("waleed_portfolio_sfx");
      const savedQuests = localStorage.getItem("waleed_portfolio_quests");

      if (savedXp) setXp(parseInt(savedXp, 10));
      if (savedSound === "true") {
        setSoundEnabled(true);
        gameAudio.setEnabled(true);
      }
      if (savedQuests) {
        const completedIds: string[] = JSON.parse(savedQuests);
        setQuests((prev) =>
          prev.map((q) => ({
            ...q,
            completed: completedIds.includes(q.id),
          }))
        );
      }
    } catch {}
  }, []);

  const level = Math.floor(xp / 120) + 1;
  const levelTitle = LEVEL_TITLES[Math.min(level - 1, LEVEL_TITLES.length - 1)];
  const currentLevelBaseXP = (level - 1) * 120;
  const progressPercent = Math.min(100, Math.floor(((xp - currentLevelBaseXP) / 120) * 100));
  const completedCount = quests.filter((q) => q.completed).length;

  const toggleSound = () => {
    const nextVal = !soundEnabled;
    setSoundEnabled(nextVal);
    gameAudio.setEnabled(nextVal);
    if (nextVal) {
      gameAudio.playSelect();
    }
    try {
      localStorage.setItem("waleed_portfolio_sfx", nextVal ? "true" : "false");
    } catch {}
  };

  const toggleCyberMode = () => {
    setCyberMode((prev) => !prev);
    gameAudio.playSelect();
  };

  const addXP = (amount: number, reason: string) => {
    setXp((prev) => {
      const nextXp = prev + amount;
      try {
        localStorage.setItem("waleed_portfolio_xp", nextXp.toString());
      } catch {}

      const oldLevel = Math.floor(prev / 120) + 1;
      const newLevel = Math.floor(nextXp / 120) + 1;

      if (newLevel > oldLevel) {
        gameAudio.playLevelUp();
      } else {
        gameAudio.playAchievement();
      }

      setNotification({
        id: Date.now(),
        title: `+${amount} EXP EARNED`,
        subtitle: reason,
        xp: amount,
      });

      setTimeout(() => setNotification(null), 3500);

      return nextXp;
    });
  };

  const unlockQuest = (id: string) => {
    setQuests((prev) => {
      const quest = prev.find((q) => q.id === id);
      if (!quest || quest.completed) return prev;

      addXP(quest.xp, `Quest Completed: ${quest.title}`);

      const updated = prev.map((q) => (q.id === id ? { ...q, completed: true } : q));
      try {
        const completedIds = updated.filter((q) => q.completed).map((q) => q.id);
        localStorage.setItem("waleed_portfolio_quests", JSON.stringify(completedIds));
      } catch {}

      return updated;
    });
  };

  return (
    <GameContext.Provider
      value={{
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
        unlockQuest,
        addXP,
        notification,
      }}
    >
      <div className={cyberMode ? "cyber-matrix-mode" : ""}>
        {children}
      </div>
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return ctx;
}
