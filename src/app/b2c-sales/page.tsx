import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Store,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShoppingBag,
  Sparkles,
  BarChart3,
  Layers,
  Globe,
  Share2,
} from "lucide-react";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "B2C Sales & Retail Distribution — Consumer Market Expansion",
  description:
    "Expand consumer products into retail chains, modern trade, department stores, and high-velocity digital sales channels with AKASH.",
};

export default function B2cSalesPage() {
  const retailPillars = [
    {
      title: "Modern Trade & Supermarket Placement",
      desc: "Securing listings with regional and multi-city supermarket chains, hypermarkets, and modern grocery formats with optimized slotting and end-cap visibility.",
      icon: Store,
    },
    {
      title: "Multi-Brand Outlet (MBO) Networks",
      desc: "Connecting apparel, footwear, home appliances, and lifestyle goods with independent retail stockists and specialty lifestyle stores across city tiers.",
      icon: ShoppingBag,
    },
    {
      title: "Distributor Margin Economics",
      desc: "Designing clear margin stacks across Super Stockist (8-10%), Distributor (12-15%), and Retailer (20-30%) to ensure active push from trade partners.",
      icon: BarChart3,
    },
    {
      title: "Marketplace & Digital Channel Reach",
      desc: "Integrating with institutional e-commerce platforms, quick-commerce fulfillment hubs, and corporate gifting aggregators.",
      icon: Globe,
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2450] border border-[#2684FF]/40 text-xs font-semibold text-[#43D5FF]">
                <Store className="w-3.5 h-3.5" />
                <span>Consumer Channel Strategy</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                From Manufacturing Floor to{" "}
                <span className="text-gradient-electric block">
                  Retail Storefronts.
                </span>
              </h1>

              <p className="text-lg text-[#8FA0C0] leading-relaxed">
                For consumer brands seeking retail channels, ecommerce opportunities, and multi-point customer acquisition across modern trade and regional shopping destinations.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/sell-with-us"
                  className="akash-btn-primary w-full sm:w-auto justify-center py-4 px-8"
                >
                  <span>Submit Consumer Product</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="akash-btn-secondary w-full sm:w-auto justify-center py-4 px-8 text-sm"
                >
                  <span>Consult Retail Specialists</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#2684FF]/30 shadow-2xl bg-[#0A2450]">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
                    alt="Consumer retail store shelves with organized branded merchandise"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06142B] via-transparent to-transparent opacity-70" />
                </div>
                <div className="p-6 bg-[#06142B] border-t border-white/10 space-y-1">
                  <div className="text-xs uppercase text-[#43D5FF] font-semibold">
                    Consumer Exposure
                  </div>
                  <div className="text-white font-bold text-sm">
                    Regional Supermarkets, MBOs & Multi-City Retail
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retail Pillars */}
      <section className="py-24 bg-white text-[#06142B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06142B] tracking-tight">
              Retail Expansion Infrastructure
            </h2>
            <p className="mt-4 text-[#4A5D78] text-base sm:text-lg">
              We eliminate the guesswork in consumer distribution by aligning your product with merchants who know how to sell it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {retailPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-[#F2F6FC] border border-[#06142B]/5 hover:border-[#1457E8]/30 transition-all hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2684FF] text-white flex items-center justify-center mb-6 shadow-md shadow-[#2684FF]/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#06142B] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#4A5D78] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reusable CTA */}
      <CtaSection />
    </div>
  );
}
