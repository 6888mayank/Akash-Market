import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Store,
  TrendingUp,
  CheckCircle2,
  Layers,
  Sparkles,
  BarChart3,
  Network,
  Search,
  FileCheck,
  ShieldCheck,
  PackageCheck,
  Briefcase,
} from "lucide-react";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Services — Comprehensive Sales & Market Expansion Solutions",
  description:
    "Explore AKASH's end-to-end sales services: B2B bulk buyer sourcing, regional distributor recruitment, retail channel access, and sales pipeline management.",
};

export default function ServicesPage() {
  const mainServices = [
    {
      id: "b2b",
      title: "B2B Sales & Bulk Buyer Outreach",
      tagline: "Connecting manufacturing output with volume commercial purchasing.",
      desc: "We target verified bulk buyers, institutional sourcing heads, OEM manufacturers, and industrial stockists to secure recurring purchase orders.",
      href: "/b2b-sales",
      icon: Building2,
      highlights: [
        "Procurement officer mapping across corporate and industrial sectors",
        "Technical product audits and RFQ tender response coordination",
        "Commercial contract and wholesale payment term alignment",
        "Batch sample logistics and factory audit coordination",
      ],
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "b2c",
      title: "B2C Sales & Retail Placement",
      tagline: "Opening consumer storefronts, modern trade, and digital channels.",
      desc: "For branded consumer goods, we establish relationships with multi-brand retailers, supermarket chains, and regional retail aggregators.",
      href: "/b2c-sales",
      icon: Store,
      highlights: [
        "Supermarket and modern format shelf placement",
        "Regional dealer margin structuring (15% to 30% margin models)",
        "Secondary sales tracking and retail replenishment cadence",
        "Promotional schemes and localized merchant engagement",
      ],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "distribution",
      title: "Distribution & Channel Development",
      tagline: "Recruiting committed regional super stockists and territory distributors.",
      desc: "Transform localized products into regional and nationwide brands by establishing authorized dealer networks and distribution agreements.",
      href: "/distribution",
      icon: TrendingUp,
      highlights: [
        "Territory mapping across Tier-1, Tier-2, and emerging Tier-3 markets",
        "Distributor solvency vetting and storage capacity verification",
        "Legal distributorship contracts and minimum guarantee clauses",
        "Consignment management and depot inventory turnover planning",
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const supportingCapabilities = [
    {
      title: "Commercial Margin Structuring",
      desc: "We build transparent tiered pricing models that preserve factory profits while providing attractive margins for stockists, sub-dealers, and retailers.",
      icon: BarChart3,
    },
    {
      title: "Pipeline & Re-Order Cadence",
      desc: "Sales doesn't stop at the first purchase order. We track secondary movement to ensure steady recurring batch production.",
      icon: PackageCheck,
    },
    {
      title: "Buyer Verification & Due Diligence",
      desc: "Every buyer and stockist introduced by AKASH is checked for trade reputation, GST compliance, and commercial credit discipline.",
      icon: ShieldCheck,
    },
    {
      title: "Regional Sales Representation",
      desc: "Act as your external commercial desk in key commercial regions without the heavy fixed overhead of opening remote branch offices.",
      icon: Network,
    },
  ];

  return (
    <div className="min-h-screen bg-[#06142B] text-white pt-28">
      {/* Hero Header */}
      <section className="relative pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-radial pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2450] border border-[#43D5FF]/30 text-xs font-semibold text-[#43D5FF] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Comprehensive Sales Capabilities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Strategic Sales Solutions for{" "}
              <span className="text-gradient-electric">Every Market Horizon.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#8FA0C0] leading-relaxed">
              From finding your first institutional enterprise buyer to building a 50-city distributor network, AKASH provides the expertise, relationships, and execution rigor required to scale.
            </p>
          </div>
        </div>
      </section>

      {/* Main 3 Signature Pillars */}
      <section className="py-20 bg-[#0A2450]/40 border-y border-[#2684FF]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {mainServices.map((service, idx) => {
            const Icon = service.icon;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Photo Side */}
                <div
                  className={`lg:col-span-5 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative rounded-3xl overflow-hidden border border-[#2684FF]/30 bg-[#06142B] shadow-2xl group">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06142B] via-transparent to-transparent opacity-60" />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div
                  className={`lg:col-span-7 space-y-5 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1457E8]/20 border border-[#2684FF]/30 flex items-center justify-center text-[#43D5FF]">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {service.title}
                  </h2>

                  <p className="text-sm font-semibold text-[#43D5FF]">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-[#8FA0C0] leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#F2F6FC]/90">
                        <CheckCircle2 className="w-4 h-4 text-[#43D5FF] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      href={service.href}
                      className="akash-btn-primary text-xs py-3 px-6"
                    >
                      <span>Explore Dedicated Solution</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/sell-with-us"
                      className="akash-btn-secondary text-xs py-3 px-6"
                    >
                      <span>Apply For This Service</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Supporting Capabilities (White Section) */}
      <section className="py-24 bg-white text-[#06142B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06142B] tracking-tight">
              Full-Spectrum Sales Infrastructure
            </h2>
            <p className="mt-4 text-[#4A5D78] text-base">
              AKASH provides every component required to turn commercial market expansion into a repeatable, profitable operation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportingCapabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#F2F6FC] border border-[#06142B]/5 hover:border-[#1457E8]/30 transition-all hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white text-[#1457E8] flex items-center justify-center shadow-sm mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#06142B] mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-[#4A5D78] leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </div>
  );
}
