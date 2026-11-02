import Link from "next/link";
import { ArrowRight, Home, Compass, Building2, PhoneCall } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#06142B] text-white flex items-center justify-center pt-24 pb-16 px-4 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-r from-[#1457E8]/20 via-[#2684FF]/25 to-[#43D5FF]/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-xl mx-auto text-center relative z-10 space-y-6">
        <div className="font-mono text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#2684FF] via-[#43D5FF] to-white">
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Market Route Not Found
        </h1>

        <p className="text-sm text-[#8FA0C0] leading-relaxed max-w-md mx-auto">
          The page or commercial directory you are looking for has moved or does not exist. Let&apos;s get you back on track to exploring viable sales channels.
        </p>

        {/* Quick Links */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="akash-btn-primary text-xs py-3 px-6 w-full sm:w-auto justify-center"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="akash-btn-secondary text-xs py-3 px-6 w-full sm:w-auto justify-center"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Explore Services</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-white/10 grid grid-cols-2 gap-3 text-xs text-[#8FA0C0]">
          <Link
            href="/b2b-sales"
            className="p-3 rounded-xl bg-[#0A2450]/60 hover:text-white hover:bg-[#0A2450] transition-colors text-left flex items-center justify-between"
          >
            <span>B2B Sales</span>
            <ArrowRight className="w-3 h-3 text-[#43D5FF]" />
          </Link>
          <Link
            href="/sell-with-us"
            className="p-3 rounded-xl bg-[#0A2450]/60 hover:text-white hover:bg-[#0A2450] transition-colors text-left flex items-center justify-between"
          >
            <span>Sell With AKASH</span>
            <ArrowRight className="w-3 h-3 text-[#43D5FF]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
