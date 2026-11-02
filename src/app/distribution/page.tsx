import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  Building,
  Layers,
  Sparkles,
  Truck,
  Network,
} from "lucide-react";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Distribution Networks — Regional & Nationwide Channel Building",
  description:
    "Build a robust distributor network with AKASH. Recruit solvent super-stockists, manage regional dealer agreements, and expand into Tier 1, 2, and 3 markets.",
};

export default function DistributionPage() {
  const tiers = [
    {
      tier: "Tier 1 Metro Hubs",
      desc: "Mumbai, Delhi NCR, Bengaluru, Chennai, Hyderabad, Kolkata, Ahmedabad, Pune.",
      focus: "High-density institutional buyers, modern trade depots, and super-stockists.",
    },
    {
      tier: "Tier 2 Commercial Centers",
      desc: "Surat, Jaipur, Lucknow, Indore, Coimbatore, Nagpur, Chandigarh, Patna.",
      focus: "High-growth regional wholesale markets, district stockists, and contractor supply desks.",
    },
    {
      tier: "Tier 3 & Industrial Belts",
      desc: "Bhiwandi, Peenya, Manesar, Sanand, Vapi, Ludhiana, Tirupur, Hosur.",
      focus: "Factory procurement desks, specialized industrial dealers, and rural-agri trade hubs.",
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
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Channel Architecture</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Turn Local Products into{" "}
                <span className="text-gradient-electric block">
                  Regional & National Brands.
                </span>
              </h1>

              <p className="text-lg text-[#8FA0C0] leading-relaxed">
                AKASH builds verified, solvent distributor networks for manufacturers seeking systematic geographic expansion across industrial hubs, regional wholesale markets, and emerging commercial cities.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/sell-with-us"
                  className="akash-btn-primary w-full sm:w-auto justify-center py-4 px-8"
                >
                  <span>Build Your Distributor Network</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="akash-btn-secondary w-full sm:w-auto justify-center py-4 px-8 text-sm"
                >
                  <span>Consult Channel Architects</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#2684FF]/30 shadow-2xl bg-[#0A2450]">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
                    alt="Automated logistics distribution facility and freight transport"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06142B] via-transparent to-transparent opacity-70" />
                </div>
                <div className="p-6 bg-[#06142B] border-t border-white/10 space-y-1">
                  <div className="text-xs uppercase text-[#43D5FF] font-semibold">
                    Geographic Reach
                  </div>
                  <div className="text-white font-bold text-sm">
                    Connecting Manufacturing Centers with Commercial Demand Hubs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tier Coverage (White Section) */}
      <section className="py-24 bg-white text-[#06142B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06142B] tracking-tight">
              Multi-Tier Geographic Expansion Strategy
            </h2>
            <p className="mt-4 text-[#4A5D78] text-base sm:text-lg">
              We structure your channel roll-out in disciplined phases, avoiding over-extension while establishing rock-solid territorial roots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((t, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#F2F6FC] border border-[#06142B]/5 hover:border-[#1457E8]/30 transition-all hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#1457E8] text-white flex items-center justify-center font-bold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#06142B] mb-2">
                    {t.tier}
                  </h3>
                  <p className="text-xs text-[#1457E8] font-semibold mb-3">
                    {t.desc}
                  </p>
                  <p className="text-xs text-[#4A5D78] leading-relaxed">
                    <strong className="text-[#06142B]">Strategy:</strong> {t.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distributor Agreement Standards */}
      <section className="py-24 bg-[#0A2450]/40 border-t border-[#2684FF]/20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1457E8]/20 border border-[#2684FF]/30 text-xs font-semibold text-[#43D5FF]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Commercial Protection</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                How We Protect Your Distribution Rights
              </h2>
              <p className="text-sm text-[#8FA0C0] leading-relaxed">
                Appointing distributors without clear legal and commercial boundaries leads to territory clashes, price dumping, and brand erosion. AKASH builds structured, enforceable contracts.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  "Clear geographic demarcation preventing territory conflict",
                  "Enforceable Minimum Order Quantities (MOQ) and quarterly targets",
                  "Standardized Maximum Retail Price (MRP) & dealer price discipline",
                  "Credit security protocols, bank guarantees, and transit liability",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-[#F2F6FC]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#43D5FF] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#06142B] border border-[#2684FF]/30 rounded-3xl p-8 shadow-2xl space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#43D5FF]" />
                <span>Distributor Onboarding Process</span>
              </h3>
              <div className="space-y-4 text-xs text-[#8FA0C0]">
                <div className="p-3.5 rounded-xl bg-[#0A2450]/70 border border-white/5">
                  <span className="text-white font-semibold block mb-0.5">Phase 1: Territory Feasibility Audit</span>
                  Evaluating demand density and current competitor presence.
                </div>
                <div className="p-3.5 rounded-xl bg-[#0A2450]/70 border border-white/5">
                  <span className="text-white font-semibold block mb-0.5">Phase 2: Partner Solvency Verification</span>
                  Checking warehouse square footage, transport fleet, and market reputation.
                </div>
                <div className="p-3.5 rounded-xl bg-[#0A2450]/70 border border-white/5">
                  <span className="text-white font-semibold block mb-0.5">Phase 3: Initial Stocking Dispatch</span>
                  Coordinating first batch order placement and promotional sample kit dispatch.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </div>
  );
}
