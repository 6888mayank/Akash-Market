import Link from "next/link";
import { ArrowRight, PhoneCall, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
}

export default function CtaSection({
  title = "Have a Product? Let's Find Its Market.",
  subtitle = "Tell us what you sell, and let's explore the right buyers, channels and sales opportunities for your business.",
}: CtaSectionProps) {
  return (
    <section className="relative py-24 sm:py-32 bg-[#06142B] overflow-hidden">
      {/* Background Cinematic Lighting Gradients */}
      <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#1457E8]/20 via-[#2684FF]/25 to-[#43D5FF]/20 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Decorative architectural borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2684FF]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#43D5FF]/30 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Pill Tag with Glow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A2450]/80 border border-[#43D5FF]/40 text-xs font-semibold tracking-wide text-[#43D5FF] mb-8 shadow-sm animate-glow-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Product Aapka. Sales Ki Tension Hamari.</span>
        </div>

        {/* Large Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
          {title.includes("Let's Find Its Market") ? (
            <>
              Have a Product?{" "}
              <span className="text-gradient-electric block sm:inline">
                Let&apos;s Find Its Market.
              </span>
            </>
          ) : (
            title
          )}
        </h2>

        {/* Supporting Copy */}
        <p className="mt-6 text-lg sm:text-xl text-[#8FA0C0] max-w-2xl mx-auto leading-relaxed font-normal">
          {subtitle}
        </p>

        {/* Value Highlights */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-[#F2F6FC]/90">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#43D5FF]" />
            Direct Bulk Buyers
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#43D5FF]" />
            Regional Distributors
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#43D5FF]" />
            Strict Confidentiality & NDA
          </span>
        </div>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/sell-with-us"
            className="w-full sm:w-auto akash-btn-primary text-base px-8 py-4 group"
          >
            <span>Submit Your Product</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto akash-btn-secondary text-base px-8 py-4"
          >
            <PhoneCall className="w-4 h-4 text-[#43D5FF]" />
            <span>Talk to Our Team</span>
          </Link>
        </div>

        {/* Subtext reassurance */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#8FA0C0]">
          <ShieldCheck className="w-4 h-4 text-[#43D5FF]" />
          <span>Zero upfront listing fees for product feasibility assessment. 100% verified buyers.</span>
        </div>
      </div>
    </section>
  );
}
