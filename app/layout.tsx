import type { Metadata } from "next";
import "./globals.css";
import AosInit from "@/components/AosInit";
import Tracker from "@/components/Tracker";

export const metadata: Metadata = {
  title: "Waleed Refaat Abbas | Frontend Developer",
  description: "Waleed Refaat Abbas Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="min-h-full flex flex-col w-full overflow-x-hidden text-on-surface selection:bg-primary selection:text-on-primary">
        <AosInit />
        <Tracker />
        {children}
      </body>
    </html>
  );
}
