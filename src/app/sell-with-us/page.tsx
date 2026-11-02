import type { Metadata } from "next";
import SellWithUsForm from "./SellWithUsForm";
import { ShieldCheck, Sparkles, Building2, CheckCircle2, FileText, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Sell With AKASH — Submit Your Product for Market Review",
  description:
    "Partner with AKASH to unlock verified bulk buyers, regional distributors, and corporate sales channels for your manufactured products. Zero upfront listing fees.",
  openGraph: {
    title: "Sell With AKASH — Product Partnership Application",
    description: "Submit your product specifications to AKASH's commercial market expansion desk.",
  },
};

export default function SellWithUsPage() {
  return (
    <div className="min-h-screen bg-[#06142B] text-white pt-28 pb-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#1457E8]/20 via-[#2684FF]/25 to-[#43D5FF]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2450] border border-[#43D5FF]/30 text-xs font-semibold text-[#43D5FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Partnership Application</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Have a Product?{" "}
            <span className="text-gradient-electric block sm:inline">
              Let&apos;s Build Its Market.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#8FA0C0] leading-relaxed">
            Tell us about your product, production capacity, and expansion targets. Our commercial team evaluates buyer fit and prepares a dedicated sales roadmap.
          </p>

          {/* Trust Guarantees Bar */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#8FA0C0]">
            <div className="p-3 rounded-xl bg-[#0A2450]/60 border border-white/5 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#43D5FF]" />
              <span className="text-white font-medium">100% NDA Protected</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0A2450]/60 border border-white/5 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#43D5FF]" />
              <span className="text-white font-medium">48-Hour Feasibility Review</span>
            </div>
            <div className="p-3 rounded-xl bg-[#0A2450]/60 border border-white/5 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#43D5FF]" />
              <span className="text-white font-medium">Direct Vetted Buyer Access</span>
            </div>
          </div>
        </div>

        {/* Multi-Step Partnership Form */}
        <SellWithUsForm />
      </div>
    </div>
  );
}
