"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Smoothly ensure page starts from top on every route change
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div key={pathname} className="relative w-full min-h-screen flex flex-col">
      {/* Top Laser Progress Bar on route change */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="h-full bg-gradient-to-r from-[#1457E8] via-[#2684FF] to-[#43D5FF] shadow-[0_0_16px_#43D5FF] animate-nav-progress" />
      </div>

      {/* Radiant Ambient Flare on Route Entrance */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-44 bg-gradient-to-b from-[#2684FF]/20 via-[#43D5FF]/10 to-transparent blur-3xl pointer-events-none z-30 animate-ambient-sweep"
        aria-hidden="true"
      />

      {/* Page Content with Cinematic Entrance Transition */}
      <div className="flex-1 w-full animate-page-enter">
        {children}
      </div>
    </div>
  );
}
