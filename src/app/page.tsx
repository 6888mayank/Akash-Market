import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  TrendingUp,
  Building2,
  Users,
  Search,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  Network,
  Sparkles,
  ArrowUpRight,
  Target,
  BarChart3,
  Layers,
  Store,
  Compass,
  Briefcase,
  Zap,
} from "lucide-react";
import ProcessTimeline from "@/components/ProcessTimeline";
import MarketEstimator from "@/components/MarketEstimator";
import CtaSection from "@/components/CtaSection";
import { INDUSTRIES } from "@/data/industriesData";

import TypewriterHeadline from "@/components/TypewriterHeadline";

export default function HomePage() {
  return (
    <div className="relative">
      {/* =========================================================================
          3. CINEMATIC HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#06142B]">
        {/* Cinematic Background Lighting & Gradients */}
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-[#1457E8]/20 via-[#2684FF]/25 to-[#43D5FF]/15 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        {/* Ambient Top Light Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#43D5FF]/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Hero Text Content */}
            <div className="lg:col-span-7 text-left space-y-6">
              {/* Supporting Tagline / Hindi Badge with Animated Glow */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A2450]/80 border border-[#43D5FF]/40 text-xs font-semibold text-[#43D5FF] backdrop-blur-md shadow-[0_0_15px_rgba(67,213,255,0.2)] animate-glow-pulse">
                <span className="w-2 h-2 rounded-full bg-[#43D5FF] animate-ping" />
                <span className="tracking-wide">Product Aapka. Sales Ki Tension Hamari.</span>
              </div>

              {/* Main Headline with Typewriter Animation */}
              <TypewriterHeadline />

              {/* Supporting Subtitle */}
              <p className="text-lg sm:text-xl text-[#8FA0C0] max-w-2xl leading-relaxed font-normal">
                From finding potential buyers to developing sales channels, AKASH helps product owners unlock new opportunities across B2B and B2C markets.
              </p>

              {/* Primary & Secondary Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/sell-with-us"
                  className="akash-btn-primary text-base py-4 px-8 justify-center group"
                >
                  <span>Sell With AKASH</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/services"
                  className="akash-btn-secondary text-base py-4 px-8 justify-center"
                >
                  <span>Explore Services</span>
                </Link>
              </div>

              {/* Three Supporting Capability Labels */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A2450]/50 border border-white/5 hover:border-[#2684FF]/40 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#2684FF]" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#F2F6FC] uppercase">
                    B2B Sales
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A2450]/50 border border-white/5 hover:border-[#43D5FF]/40 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#43D5FF]" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#F2F6FC] uppercase">
                    Distribution
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A2450]/50 border border-white/5 hover:border-[#1457E8]/40 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#1457E8]" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#F2F6FC] uppercase">
                    Market Expansion
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Cinematic Photography with Glass Overlays */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glow ring behind image */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1457E8] via-[#2684FF] to-[#43D5FF] rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000" />

                {/* Main Commercial Image Container */}
                <div className="relative rounded-2xl overflow-hidden border border-[#2684FF]/30 shadow-2xl bg-[#0A2450]">
                  <div className="aspect-[4/3] sm:aspect-[5/4] relative">
                    <Image
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                      alt="Business leaders and engineering heads evaluating manufactured products in a modern distribution environment"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06142B] via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Floating Glass Data Badge Top Right with Float Animation */}
                  <div className="absolute top-4 right-4 bg-[#06142B]/90 backdrop-blur-md border border-[#43D5FF]/40 rounded-xl p-3 shadow-xl animate-float-slow">
                    <div className="flex items-center gap-2 text-xs font-semibold text-white">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Verified Bulk Buyer Network</span>
                    </div>
                  </div>

                  {/* Floating Glass Metric Card Bottom */}
                  <div className="p-5 bg-[#06142B]/90 backdrop-blur-xl border-t border-[#2684FF]/20 space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#8FA0C0]">
                      <span className="font-semibold uppercase tracking-wider text-[#43D5FF]">
                        Strategic Focus
                      </span>
                      <span>B2B & Distribution</span>
                    </div>
                    <div className="text-white font-bold text-sm sm:text-base leading-snug">
                      Connecting product manufacturers directly with wholesale buyers & national dealers.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Credibility Stats Strip */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="p-4 rounded-2xl bg-[#0A2450]/40 border border-white/5 backdrop-blur-sm hover:border-[#2684FF]/30 transition-all hover:-translate-y-0.5">
              <div className="text-2xl sm:text-3xl font-extrabold text-gradient-electric">9+</div>
              <div className="text-xs text-[#8FA0C0] mt-1 font-medium">Core Industry Sectors</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#0A2450]/40 border border-white/5 backdrop-blur-sm hover:border-[#43D5FF]/30 transition-all hover:-translate-y-0.5">
              <div className="text-2xl sm:text-3xl font-extrabold text-gradient-electric">Pan-India</div>
              <div className="text-xs text-[#8FA0C0] mt-1 font-medium">Distributor & Dealer Reach</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#0A2450]/40 border border-white/5 backdrop-blur-sm hover:border-[#1457E8]/30 transition-all hover:-translate-y-0.5">
              <div className="text-2xl sm:text-3xl font-extrabold text-gradient-electric">100%</div>
              <div className="text-xs text-[#8FA0C0] mt-1 font-medium">Verified Commercial Buyers</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#0A2450]/40 border border-white/5 backdrop-blur-sm hover:border-[#43D5FF]/30 transition-all hover:-translate-y-0.5">
              <div className="text-2xl sm:text-3xl font-extrabold text-gradient-electric">Strict NDA</div>
              <div className="text-xs text-[#8FA0C0] mt-1 font-medium">Product Margin Protection</div>
            </div>
          </div>
        </div>

        {/* Gentle Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[#8FA0C0] text-xs">
          <span>Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border border-[#2684FF]/40 flex items-start justify-center p-1">
            <div className="w-1.5 h-2 bg-[#43D5FF] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CORE VALUE PROPOSITION (Clean White Section)
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#FFFFFF] text-[#06142B] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F6FC] border border-[#1457E8]/20 text-xs font-bold text-[#1457E8] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Core Value Proposition</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#06142B] tracking-tight">
              A Great Product Deserves a Bigger Market.
            </h2>
            <p className="mt-4 text-[#4A5D78] text-lg leading-relaxed">
              Manufacturing excellence is only half the battle. AKASH bridges the critical gap between production capability and market reach.
            </p>
          </div>

          {/* Three Capabilities Cards with Minimalist Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Find Buyers */}
            <div className="bg-[#F2F6FC] hover:bg-white rounded-2xl p-8 border border-[#06142B]/5 hover:border-[#2684FF]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#2684FF]/10 hover:-translate-y-2 group akash-card-interactive">
              <div className="w-14 h-14 rounded-xl bg-[#1457E8]/10 text-[#1457E8] group-hover:bg-[#1457E8] group-hover:text-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center mb-6 shadow-sm">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#06142B] mb-3 group-hover:text-[#1457E8] transition-colors">
                Find Buyers
              </h3>
              <p className="text-[#4A5D78] text-base leading-relaxed mb-6">
                Identify and approach relevant buyer segments. We tap verified enterprise databases, trade networks, and commercial sourcing portals to locate buyers actively purchasing your category.
              </p>
              <ul className="space-y-2.5 text-sm text-[#06142B] font-medium border-t border-[#06142B]/10 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1457E8]" />
                  <span>Targeted account mapping</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1457E8]" />
                  <span>Procurement head outreach</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1457E8]" />
                  <span>Direct RFP & inquiry sourcing</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Build Channels */}
            <div className="bg-[#F2F6FC] hover:bg-white rounded-2xl p-8 border border-[#06142B]/5 hover:border-[#2684FF]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#2684FF]/10 hover:-translate-y-2 group akash-card-interactive">
              <div className="w-14 h-14 rounded-xl bg-[#2684FF]/10 text-[#2684FF] group-hover:bg-[#2684FF] group-hover:text-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center mb-6 shadow-sm">
                <Network className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#06142B] mb-3 group-hover:text-[#2684FF] transition-colors">
                Build Channels
              </h3>
              <p className="text-[#4A5D78] text-base leading-relaxed mb-6">
                Explore distributors, dealers, retailers and business partnerships. We structure viable margin economics and territorial terms that attract committed regional partners.
              </p>
              <ul className="space-y-2.5 text-sm text-[#06142B] font-medium border-t border-[#06142B]/10 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2684FF]" />
                  <span>Stockist & dealer recruitment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2684FF]" />
                  <span>Commercial margin alignment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2684FF]" />
                  <span>Territory dealership structuring</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Grow Markets */}
            <div className="bg-[#F2F6FC] hover:bg-white rounded-2xl p-8 border border-[#06142B]/5 hover:border-[#2684FF]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#2684FF]/10 hover:-translate-y-2 group akash-card-interactive">
              <div className="w-14 h-14 rounded-xl bg-[#1457E8]/10 text-[#1457E8] group-hover:bg-[#1457E8] group-hover:text-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center mb-6 shadow-sm">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#06142B] mb-3 group-hover:text-[#1457E8] transition-colors">
                Grow Markets
              </h3>
              <p className="text-[#4A5D78] text-base leading-relaxed mb-6">
                Develop a sales approach aligned with the product and target audience. From initial sample approval to recurring order cadences, we coordinate steady pipeline velocity.
              </p>
              <ul className="space-y-2.5 text-sm text-[#06142B] font-medium border-t border-[#06142B]/10 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1457E8]" />
                  <span>Repeat order rhythm creation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1457E8]" />
                  <span>Multi-city geographic scaling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1457E8]" />
                  <span>Sales pipeline coordination</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. B2B SALES — SIGNATURE SECTION (Deep Blue Split Layout)
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#06142B] text-white relative overflow-hidden">
        {/* Cinematic ambient background glow */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#1457E8]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#43D5FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2450] border border-[#43D5FF]/30 text-xs font-semibold text-[#43D5FF]">
                <Building2 className="w-3.5 h-3.5" />
                <span>AKASH Signature Capability</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Your Product.{" "}
                <span className="text-gradient-electric block">
                  The Right Business Buyers.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#8FA0C0] leading-relaxed">
                AKASH helps manufacturers, wholesalers, suppliers and brands explore opportunities with bulk buyers, distributors, retailers and corporate purchasing teams.
              </p>

              {/* Six Bullet Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Bulk buyer outreach",
                  "Dealer & distributor development",
                  "Retailer & wholesaler connections",
                  "Corporate buyer opportunities",
                  "B2B sales coordination",
                  "Sales pipeline & follow-up support",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#0A2450]/60 border border-white/5 hover:border-[#2684FF]/30 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#43D5FF] shrink-0" />
                    <span className="text-sm font-medium text-[#F2F6FC]/90">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Section CTA */}
              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/b2b-sales"
                  className="akash-btn-primary group"
                >
                  <span>Explore B2B Sales</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/sell-with-us"
                  className="akash-btn-secondary text-sm"
                >
                  <span>Submit Product Catalog</span>
                </Link>
              </div>
            </div>

            {/* Right Photo Column: Photorealistic Modern Warehouse & Distribution */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-[#2684FF]/30 shadow-2xl bg-[#0A2450] group">
                <div className="aspect-[4/3] sm:aspect-[16/11] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80"
                    alt="High-bay photorealistic clean commercial warehouse and industrial distribution hub"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06142B] via-[#06142B]/30 to-transparent" />
                </div>

                {/* Overlay Metric Strip */}
                <div className="p-6 bg-[#06142B]/95 backdrop-blur-md border-t border-[#2684FF]/20 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs uppercase font-semibold text-[#8FA0C0]">
                      Primary Sourcing
                    </div>
                    <div className="text-white font-bold text-sm sm:text-base mt-0.5">
                      Direct Bulk Purchasing
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase font-semibold text-[#8FA0C0]">
                      Contract Protection
                    </div>
                    <div className="text-[#43D5FF] font-bold text-sm sm:text-base mt-0.5">
                      Vetted Enterprise Terms
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. SALES PROCESS (From Manufacturer to Market)
          ========================================================================= */}
      <ProcessTimeline />

      {/* =========================================================================
          7. B2B AND B2C SOLUTIONS (Contrasting Image-Led Panels)
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#F2F6FC] text-[#06142B] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1457E8]/10 text-[#1457E8] text-xs font-bold uppercase tracking-wider mb-3">
              Dual Market Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#06142B] tracking-tight">
              Tailored Channels for Every Product Scale.
            </h2>
            <p className="mt-4 text-[#4A5D78] text-lg">
              Whether your product thrives in bulk container shipments or retail storefront shelves, AKASH delivers dedicated sales execution.
            </p>
          </div>

          {/* Two Large Contrasting Panels: B2B vs B2C */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* B2B Sales Panel (Greater Visual Prominence: 7 Cols) */}
            <div className="lg:col-span-7 bg-[#06142B] text-white rounded-3xl p-8 sm:p-10 border border-[#2684FF]/40 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#1457E8]/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1457E8]/30 border border-[#43D5FF]/30 text-xs font-bold text-[#43D5FF] uppercase tracking-wider">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Primary Core Focus</span>
                  </div>
                  <span className="text-xs text-[#8FA0C0] font-mono">Channel 01</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                  B2B SALES
                </h3>
                <p className="text-[#8FA0C0] text-base leading-relaxed mb-6">
                  For manufacturers, wholesalers, suppliers, distributors and bulk buyers. We build high-volume institutional pipelines that keep factory floors operating at target efficiency.
                </p>

                {/* Panel Image */}
                <div className="aspect-[16/9] rounded-2xl overflow-hidden relative mb-6 border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80"
                    alt="Bulk container shipping and logistics for B2B commercial manufacturers"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06142B] via-transparent to-transparent opacity-60" />
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs text-[#F2F6FC]/85 mb-6">
                  <div className="p-2.5 rounded-lg bg-[#0A2450]/80 border border-white/5">
                    ✓ Factory Direct Bulk Orders
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#0A2450]/80 border border-white/5">
                    ✓ Annual Procurement Tenders
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#0A2450]/80 border border-white/5">
                    ✓ Regional Stockist Depots
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#0A2450]/80 border border-white/5">
                    ✓ B2B Payment Term Alignment
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10">
                <Link
                  href="/b2b-sales"
                  className="akash-btn-primary w-full justify-center text-sm py-3.5"
                >
                  <span>Explore B2B Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* B2C Sales Panel (5 Cols) */}
            <div className="lg:col-span-5 bg-white text-[#06142B] rounded-3xl p-8 sm:p-10 border border-[#1457E8]/15 shadow-xl flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F6FC] border border-[#1457E8]/20 text-xs font-bold text-[#1457E8] uppercase tracking-wider">
                    <Store className="w-3.5 h-3.5" />
                    <span>Consumer Markets</span>
                  </div>
                  <span className="text-xs text-[#4A5D78] font-mono">Channel 02</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#06142B] mb-4">
                  B2C SALES
                </h3>
                <p className="text-[#4A5D78] text-base leading-relaxed mb-6">
                  For consumer brands seeking retail channels, ecommerce opportunities and direct customer acquisition across modern trade and multi-brand outlets.
                </p>

                {/* Panel Image */}
                <div className="aspect-[16/9] rounded-2xl overflow-hidden relative mb-6 border border-[#06142B]/10">
                  <Image
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
                    alt="Modern retail store and consumer products display on shelves"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                </div>

                <div className="space-y-2 text-xs text-[#06142B] font-medium mb-6">
                  <div className="p-2.5 rounded-lg bg-[#F2F6FC]">
                    ✓ Supermarket & Modern Trade Placement
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#F2F6FC]">
                    ✓ Multi-Brand Retailer Networks
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#F2F6FC]">
                    ✓ Digital Marketplace Distribution
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#06142B]/10">
                <Link
                  href="/b2c-sales"
                  className="inline-flex items-center justify-center w-full py-3.5 px-6 rounded-full font-bold text-sm text-white bg-[#06142B] hover:bg-[#1457E8] transition-colors gap-2"
                >
                  <span>Explore B2C Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. INDUSTRIES SECTION (Responsive 9-Category Grid)
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#06142B] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2450] border border-[#2684FF]/30 text-xs font-semibold text-[#43D5FF] mb-4">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Sector Depth & Expertise</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Products Across Industries.{" "}
                <span className="text-gradient-electric block sm:inline">
                  Opportunities Across Markets.
                </span>
              </h2>
              <p className="mt-4 text-[#8FA0C0] text-base sm:text-lg">
                We design commercial sales plans tailored to the margin structures, credit cycles, and buyer habits of each industry sector.
              </p>
            </div>

            <Link
              href="/industries"
              className="akash-btn-secondary text-sm shrink-0 self-start md:self-auto"
            >
              <span>Explore All 9 Sectors</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 9-Industry Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.id}
                href={`/industries#${industry.id}`}
                className="group relative rounded-2xl overflow-hidden bg-[#0A2450]/80 border border-[#2684FF]/20 hover:border-[#43D5FF]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-lg flex flex-col justify-between"
              >
                {/* Industry Realistic Photography */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06142B] via-[#06142B]/40 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-[#06142B]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#43D5FF] border border-[#2684FF]/30">
                    Active Channel
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#43D5FF] transition-colors mb-1.5 flex items-center justify-between">
                      <span>{industry.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#8FA0C0] group-hover:text-[#43D5FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    <p className="text-xs text-[#8FA0C0] line-clamp-2 leading-relaxed mb-4">
                      {industry.tagline}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#8FA0C0]">
                    <span>Buyer Target:</span>
                    <span className="text-[#F2F6FC] font-medium truncate max-w-[170px]">
                      {industry.buyerTypes[0]}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE MARKET SIMULATOR WIDGET
          ========================================================================= */}
      <section className="py-20 bg-[#06142B] border-t border-[#2684FF]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MarketEstimator />
        </div>
      </section>

      {/* =========================================================================
          9. WHY AKASH? (Spacious White Section with Blue Accents)
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-white text-[#06142B] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F6FC] border border-[#1457E8]/20 text-xs font-bold text-[#1457E8] uppercase tracking-wider mb-4">
              Strategic Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#06142B] tracking-tight">
              A Practical Approach to Product Sales.
            </h2>
            <p className="mt-4 text-[#4A5D78] text-lg leading-relaxed">
              We reject theoretical consulting slides. AKASH is an active commercial engine that focuses squarely on real purchase orders, vetted distributors, and sustainable market expansion.
            </p>
          </div>

          {/* 6 Editorial Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. B2B-first approach */}
            <div className="p-8 rounded-2xl bg-[#F2F6FC] border border-[#06142B]/5 hover:border-[#1457E8]/30 transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#1457E8] text-white flex items-center justify-center font-bold text-lg mb-6 shadow-md shadow-[#1457E8]/30">
                01
              </div>
              <h3 className="text-xl font-bold text-[#06142B] mb-2.5">
                B2B-First Approach
              </h3>
              <p className="text-sm text-[#4A5D78] leading-relaxed">
                Prioritizing bulk volumes, regular commercial purchase contracts, and established institutional buyers to ensure manufacturing capacity is consistently utilized.
              </p>
            </div>

            {/* 2. Support for B2C opportunities */}
            <div className="p-8 rounded-2xl bg-[#F2F6FC] border border-[#06142B]/5 hover:border-[#2684FF]/30 transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#2684FF] text-white flex items-center justify-center font-bold text-lg mb-6 shadow-md shadow-[#2684FF]/30">
                02
              </div>
              <h3 className="text-xl font-bold text-[#06142B] mb-2.5">
                Support for B2C Opportunities
              </h3>
              <p className="text-sm text-[#4A5D78] leading-relaxed">
                When consumer retail or ecommerce alignment fits your brand, we deploy structured retail distributor onboarding and modern trade placement.
              </p>
            </div>

            {/* 3. Product-specific sales planning */}
            <div className="p-8 rounded-2xl bg-[#F2F6FC] border border-[#06142B]/5 hover:border-[#1457E8]/30 transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#1457E8] text-white flex items-center justify-center font-bold text-lg mb-6 shadow-md shadow-[#1457E8]/30">
                03
              </div>
              <h3 className="text-xl font-bold text-[#06142B] mb-2.5">
                Product-Specific Sales Planning
              </h3>
              <p className="text-sm text-[#4A5D78] leading-relaxed">
                No generic sales scripts. Every commercial roadmap is reverse-engineered from your unit margins, shelf-life, batch sizes, and regulatory certifications.
              </p>
            </div>

            {/* 4. Buyer and distribution opportunity development */}
            <div className="p-8 rounded-2xl bg-[#F2F6FC] border border-[#06142B]/5 hover:border-[#2684FF]/30 transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#2684FF] text-white flex items-center justify-center font-bold text-lg mb-6 shadow-md shadow-[#2684FF]/30">
                04
              </div>
              <h3 className="text-xl font-bold text-[#06142B] mb-2.5">
                Buyer & Distribution Development
              </h3>
              <p className="text-sm text-[#4A5D78] leading-relaxed">
                We cultivate direct relationships with regional super stockists, department store buyers, corporate procurement leads, and export trading houses.
              </p>
            </div>

            {/* 5. Transparent communication */}
            <div className="p-8 rounded-2xl bg-[#F2F6FC] border border-[#06142B]/5 hover:border-[#1457E8]/30 transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#1457E8] text-white flex items-center justify-center font-bold text-lg mb-6 shadow-md shadow-[#1457E8]/30">
                05
              </div>
              <h3 className="text-xl font-bold text-[#06142B] mb-2.5">
                Transparent Communication
              </h3>
              <p className="text-sm text-[#4A5D78] leading-relaxed">
                Clear reporting on outreach volumes, sample evaluations, buyer feedback, price objections, and deal pipeline status without exaggerated claims.
              </p>
            </div>

            {/* 6. Flexible commercial engagement */}
            <div className="p-8 rounded-2xl bg-[#F2F6FC] border border-[#06142B]/5 hover:border-[#2684FF]/30 transition-all hover:shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#2684FF] text-white flex items-center justify-center font-bold text-lg mb-6 shadow-md shadow-[#2684FF]/30">
                06
              </div>
              <h3 className="text-xl font-bold text-[#06142B] mb-2.5">
                Flexible Commercial Engagement
              </h3>
              <p className="text-sm text-[#4A5D78] leading-relaxed">
                Collaborative models tailored to your growth phase, whether pilot channel exploration, dedicated market representation, or national network building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. PRODUCT PARTNERSHIP CTA SECTION
          ========================================================================= */}
      <CtaSection />
    </div>
  );
}
