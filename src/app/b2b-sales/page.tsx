import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  ArrowRight,
  CheckCircle2,
  Users,
  Search,
  ShieldCheck,
  Briefcase,
  Layers,
  FileCheck,
  TrendingUp,
  FileText,
  Clock,
  Sparkles,
} from "lucide-react";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "B2B Sales — Connect with Bulk Buyers & Corporate Procurement",
  description:
    "AKASH specializes in B2B bulk sales representation for manufacturers, suppliers, and industrial brands. Unlock commercial purchase contracts and verified enterprise buyers.",
};

export default function B2bSalesPage() {
  const b2bFeatures = [
    {
      title: "Bulk Buyer Outreach",
      desc: "Direct presentation of your product line to verified procurement teams, wholesale buyers, and institutional supply heads with verified purchase authority.",
      icon: Search,
    },
    {
      title: "Dealer & Distributor Development",
      desc: "Recruiting solvent, stocking trade partners across major commercial hubs who take inventory and drive multi-point local distribution.",
      icon: Users,
    },
    {
      title: "Corporate Procurement Onboarding",
      desc: "Navigating formal enterprise vendor registration, compliance audits, and annual rate contracting (ARC) with major private and public corporations.",
      icon: Building2,
    },
    {
      title: "Commercial Margin & Credit Structuring",
      desc: "Aligning pricing tiers for full-truckload (FTL), less-than-truckload (LTL), advance payment terms, and letter-of-credit (LC) safeguards.",
      icon: ShieldCheck,
    },
    {
      title: "Sample & Batch Logistics Coordination",
      desc: "Facilitating technical sampling, lab test approvals, and factory audit site visits to ensure rapid transition from inquiry to first purchase order.",
      icon: FileCheck,
    },
    {
      title: "Continuous Pipeline Execution",
      desc: "Ongoing follow-ups, re-order cadences, and resolution of commercial objections to ensure repeat purchasing and predictable monthly factory run rates.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen bg-[#06142B] text-white pt-28">
      {/* Hero */}
      <section className="relative pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2450] border border-[#43D5FF]/30 text-xs font-semibold text-[#43D5FF]">
                <Building2 className="w-3.5 h-3.5" />
                <span>AKASH Signature Specialty</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Your Product.{" "}
                <span className="text-gradient-electric block">
                  The Right Business Buyers.
                </span>
              </h1>

              <p className="text-lg text-[#8FA0C0] leading-relaxed">
                AKASH helps manufacturers, wholesalers, suppliers and brands explore high-volume commercial opportunities with bulk buyers, distributors, and corporate purchasing desks.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/sell-with-us"
                  className="akash-btn-primary w-full sm:w-auto justify-center py-4 px-8"
                >
                  <span>Submit Product for B2B Review</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="akash-btn-secondary w-full sm:w-auto justify-center py-4 px-8 text-sm"
                >
                  <span>Speak With B2B Desk</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#2684FF]/30 shadow-2xl bg-[#0A2450]">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1000&q=80"
                    alt="High-bay modern warehouse and industrial bulk distribution hub"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06142B] via-transparent to-transparent opacity-70" />
                </div>
                <div className="p-6 bg-[#06142B] border-t border-white/10 space-y-1">
                  <div className="text-xs uppercase text-[#43D5FF] font-semibold">
                    Volume Focus
                  </div>
                  <div className="text-white font-bold text-sm">
                    Container & Full-Truckload (FTL) Commercial Sourcing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Pillars */}
      <section className="py-24 bg-white text-[#06142B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06142B] tracking-tight">
              Six Core Pillars of B2B Market Expansion
            </h2>
            <p className="mt-4 text-[#4A5D78] text-base sm:text-lg">
              Designed specifically for manufacturers who require high-volume consistency over fragmented single-unit sales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {b2bFeatures.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-[#F2F6FC] border border-[#06142B]/5 hover:border-[#1457E8]/30 transition-all hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#1457E8] text-white flex items-center justify-center mb-6 shadow-md shadow-[#1457E8]/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#06142B] mb-2.5">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-[#4A5D78] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Buyer Qualification Process */}
      <section className="py-24 bg-[#0A2450]/50 border-t border-[#2684FF]/20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#43D5FF] mb-2">
              Buyer Quality Control
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              How AKASH Protects Your Manufacturer Interests
            </h2>
            <p className="mt-3 text-[#8FA0C0] text-sm sm:text-base">
              Not every inquiry is worth factory machine time. We rigorously qualify every prospective B2B account before presenting your commercial catalog.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#06142B] border border-white/10 space-y-3">
              <div className="text-[#43D5FF] font-bold text-lg font-mono">01. Solvency & GST Audit</div>
              <h4 className="text-white font-semibold text-base">Trade Verification</h4>
              <p className="text-xs text-[#8FA0C0] leading-relaxed">
                Verification of active tax registrations, past commercial disputes, and credit standing to protect against default.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#06142B] border border-white/10 space-y-3">
              <div className="text-[#43D5FF] font-bold text-lg font-mono">02. Volume Viability</div>
              <h4 className="text-white font-semibold text-base">Minimum Order Commitment</h4>
              <p className="text-xs text-[#8FA0C0] leading-relaxed">
                Confirming the buyer operates at a scale matching your minimum run size (MOQ) and packaging specifications.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#06142B] border border-white/10 space-y-3">
              <div className="text-[#43D5FF] font-bold text-lg font-mono">03. Commercial Agreement</div>
              <h4 className="text-white font-semibold text-base">Clear Binding Terms</h4>
              <p className="text-xs text-[#8FA0C0] leading-relaxed">
                Clear formulation of dispatch milestones, warranty boundaries, and transit insurance responsibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </div>
  );
}
