import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Users,
  Target,
  Compass,
  CheckCircle2,
  Sparkles,
  MapPin,
  TrendingUp,
  Layers,
  Award,
} from "lucide-react";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "About AKASH — You Build the Product. We Build to Sell.",
  description:
    "Learn about AKASH, a premier B2B-first sales and market expansion company dedicated to bridging production capacity with vetted buyers and distribution networks.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#06142B] text-white pt-28">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2450] border border-[#43D5FF]/30 text-xs font-semibold text-[#43D5FF] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The AKASH Mission & Philosophy</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Built to Solve the Product Creator&apos;s{" "}
              <span className="text-gradient-electric">Greatest Challenge: Sales.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#8FA0C0] leading-relaxed">
              We founded AKASH on a straightforward realization: India produces world-class goods, but manufacturers and product creators are constantly constrained by distribution bottlenecks, buyer opacity, and fragmented sales channels.
            </p>

            <div className="mt-8 p-6 rounded-2xl bg-[#0A2450]/80 border border-[#2684FF]/30 max-w-xl">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#43D5FF] mb-1">
                The Guiding Brand Promise
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">
                “Product Aapka. Sales Ki Tension Hamari.”
              </div>
              <div className="text-xs text-[#8FA0C0] mt-2">
                You focus on engineering, manufacturing quality, and inventory readiness. AKASH executes the market demand.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STORY & OPERATING MODEL (Spacious White Section)
          ========================================================================= */}
      <section className="py-24 bg-white text-[#06142B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Photo Left */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#06142B]/10 shadow-2xl bg-[#06142B]">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80"
                    alt="Corporate meeting and strategic product evaluation between business partners"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06142B] via-transparent to-transparent opacity-70" />
                </div>
                <div className="p-6 bg-[#06142B] text-white">
                  <div className="text-xs text-[#43D5FF] font-semibold uppercase tracking-wider">
                    Execution Framework
                  </div>
                  <div className="font-bold text-base mt-1">
                    Direct Sales Representation, Not Passive Advisory
                  </div>
                </div>
              </div>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F6FC] text-[#1457E8] text-xs font-bold uppercase tracking-wider">
                Our Foundation
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06142B] tracking-tight">
                Why AKASH Exists
              </h2>

              <p className="text-[#4A5D78] text-base leading-relaxed">
                Most manufacturing companies excel at what they do best: designing functional products, operating production lines, and delivering build quality. Yet when it comes to finding commercial buyers, securing large volume purchase orders, or building a nationwide dealer network, they encounter friction:
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-[#F2F6FC] border-l-4 border-[#1457E8]">
                  <strong className="text-[#06142B] block text-sm mb-1">
                    1. High Cost of Internal Sales Teams
                  </strong>
                  <p className="text-xs text-[#4A5D78]">
                    Hiring regional sales managers across multiple territories requires significant fixed overheads with unpredictable conversion timelines.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F2F6FC] border-l-4 border-[#2684FF]">
                  <strong className="text-[#06142B] block text-sm mb-1">
                    2. Gatekeeping in Wholesale & Modern Retail
                  </strong>
                  <p className="text-xs text-[#4A5D78]">
                    Connecting with corporate procurement heads and regional super stockists requires established commercial trust, verified vendor profiles, and persistence.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F2F6FC] border-l-4 border-[#43D5FF]">
                  <strong className="text-[#06142B] block text-sm mb-1">
                    3. Misaligned Margin Structures
                  </strong>
                  <p className="text-xs text-[#4A5D78]">
                    Without experience in regional distributor economics, manufacturers often set price points that fail to incentivize wholesale trade or leave room for territory expansion.
                  </p>
                </div>
              </div>

              <p className="text-[#4A5D78] text-base leading-relaxed pt-2">
                AKASH solves this by acting as your dedicated external market expansion engine. We bring pre-established trade connections, buyer qualification frameworks, and structured pipeline management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OPERATIONAL VALUES (Deep Navy Section)
          ========================================================================= */}
      <section className="py-24 bg-[#06142B] border-t border-[#2684FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              The Principles That Guide AKASH
            </h2>
            <p className="mt-4 text-[#8FA0C0] text-base">
              Integrity, commercial pragmatism, and long-term partnership over short-term transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#0A2450]/60 border border-[#2684FF]/20 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#1457E8]/20 text-[#43D5FF] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                B2B Volume First
              </h3>
              <p className="text-sm text-[#8FA0C0] leading-relaxed">
                While consumer awareness matters, sustained factory profitability is built on recurring, bulk B2B commitments. We prioritize volume orders that establish stable production baselines.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0A2450]/60 border border-[#2684FF]/20 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#2684FF]/20 text-[#43D5FF] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Confidentiality & Trade Trust
              </h3>
              <p className="text-sm text-[#8FA0C0] leading-relaxed">
                Your proprietary formulations, manufacturing costs, and distributor relationships are protected under binding enterprise non-disclosure standards.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0A2450]/60 border border-[#2684FF]/20 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#43D5FF]/20 text-[#43D5FF] flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Action-Oriented Pipelines
              </h3>
              <p className="text-sm text-[#8FA0C0] leading-relaxed">
                We measure progress in tangible commercial terms: active buyer inquiries, sample approvals, distributor appointments, and executed purchase orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable CTA */}
      <CtaSection />
    </div>
  );
}
