import type { Metadata } from "next";
import IndustriesExplorer from "./IndustriesExplorer";
import CtaSection from "@/components/CtaSection";
import { Briefcase, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries — Products Across Industries. Opportunities Across Markets.",
  description:
    "Explore how AKASH develops tailored B2B and retail sales channels across 9 major industries including manufacturing, construction, electronics, FMCG, and apparel.",
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#06142B] text-white pt-28">
      {/* Hero */}
      <section className="relative pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2450] border border-[#43D5FF]/30 text-xs font-semibold text-[#43D5FF] mb-6">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Multi-Sector Commercial Coverage</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Products Across Industries.{" "}
              <span className="text-gradient-electric block">
                Opportunities Across Markets.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#8FA0C0] leading-relaxed">
              Every product category requires distinct commercial economics, buyer relationships, and distribution channels. Explore our specialized approaches across 9 key industries.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Explorer Client Component */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IndustriesExplorer />
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </div>
  );
}
