import type { Metadata } from "next";
import "./globals.css";
import AosInit from "@/components/AosInit";
import Tracker from "@/components/Tracker";

export const metadata: Metadata = {
  title: "Waleed Refaat Abbas | Frontend Developer",
  description: "Waleed Refaat Abbas Frontend Developer Portfolio",
  icons: {
    icon: "/logo.png",
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
        <AosInit />
        <Tracker />
        {children}
      </body>
    </html>
  );
}
