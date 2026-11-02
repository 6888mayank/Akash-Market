import Link from "next/link";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  light?: boolean;
}

export default function Logo({ className = "", showTagline = false, light = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#43D5FF] rounded-lg ${className}`}
      aria-label="AKASH Home"
    >
      {/* Custom Architectural A-shaped Monogram */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Ambient glow behind mark */}
        <div className="absolute inset-0 bg-[#2684FF] opacity-30 blur-md rounded-lg group-hover:opacity-60 transition-opacity" />
        
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 relative z-10 drop-shadow-[0_2px_8px_rgba(38,132,255,0.4)] transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="akashGrad1" x1="4" y1="40" x2="38" y2="4" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1457E8" />
              <stop offset="0.5" stopColor="#2684FF" />
              <stop offset="1" stopColor="#43D5FF" />
            </linearGradient>
            <linearGradient id="akashGradBeam" x1="12" y1="28" x2="34" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#43D5FF" />
              <stop offset="1" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>

          {/* Background subtle hexagon/shield badge */}
          <rect x="2" y="2" width="40" height="40" rx="10" fill="#0A2450" fillOpacity="0.8" stroke="url(#akashGrad1)" strokeWidth="1.5" />

          {/* Architectural Dynamic 'A' Glyph */}
          {/* Left leg */}
          <path
            d="M22 8L10 35H15.5L22 19L28.5 35H34L22 8Z"
            fill="url(#akashGrad1)"
          />
          {/* Precision inner cutout */}
          <path
            d="M22 14L16.2 28.5H27.8L22 14Z"
            fill="#0A2450"
          />
          {/* Tech horizontal beam with cyan bridge */}
          <path
            d="M14.5 25.5H29.5V28H14.5V25.5Z"
            fill="url(#akashGradBeam)"
          />
          {/* Forward arrow / market expansion spark at apex */}
          <circle cx="22" cy="7.5" r="2" fill="#43D5FF" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-extrabold text-2xl tracking-[0.14em] uppercase text-white group-hover:text-white transition-colors">
            AKASH
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#43D5FF] animate-pulse" />
        </div>
        {showTagline && (
          <span className="text-[10px] tracking-wider uppercase font-medium text-[#8FA0C0]">
            Market Expansion
          </span>
        )}
      </div>
    </Link>
  );
}
