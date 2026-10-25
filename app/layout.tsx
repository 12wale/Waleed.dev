import type { Metadata } from "next";
import "./globals.css";
import AosInit from "@/components/AosInit";
import Tracker from "@/components/Tracker";
import SmoothScroll from "@/components/SmoothScroll";
import { GameProvider } from "@/context/GameContext";
import GameHUD from "@/components/GameHUD";

export const metadata: Metadata = {
  title: "Waleed Refaat Abbas | Frontend Developer",
  description: "Waleed Refaat Abbas Frontend Developer Portfolio",
  icons: {
    icon: "/logo.png",
  },
  other: {
    'google-site-verification': 'MARUOjaxwvLn-7xpB8W8-3f_UOOdo7L0zGJTnDOMAho',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark scroll-smooth overflow-x-hidden">
      <body className="min-h-full flex flex-col w-full overflow-x-hidden text-on-surface selection:bg-primary selection:text-on-primary">
        <GameProvider>
          <SmoothScroll />
          <AosInit />
          <Tracker />
          <GameHUD />
          {children}
        </GameProvider>
      </body>
    </html>
  );
}
