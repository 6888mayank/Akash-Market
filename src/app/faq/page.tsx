import type { Metadata } from "next";
import FaqAccordion from "./FaqAccordion";
import CtaSection from "@/components/CtaSection";
import { HelpCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions about AKASH Market Expansion",
  description:
    "Find answers to common questions about partnering with AKASH, our commercial models, B2B buyer sourcing, distributor vetting, and confidentiality terms.",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-[#06142B] text-white pt-28">
      {/* Hero */}
      <section className="relative pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2450] border border-[#43D5FF]/30 text-xs font-semibold text-[#43D5FF] mb-6">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Clear & Transparent Answers</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked <span className="text-gradient-electric">Questions.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#8FA0C0] max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about partnering with AKASH, our B2B sales execution process, commercial arrangements, and product eligibility.
          </p>
        </div>
      </section>

      {/* Accordion Component */}
      <section className="py-8 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion />
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </div>
  );
}
