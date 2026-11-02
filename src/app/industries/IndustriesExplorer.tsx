"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { INDUSTRIES, Industry } from "@/data/industriesData";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Layers,
  Sparkles,
  ArrowUpRight,
  Filter,
} from "lucide-react";

export default function IndustriesExplorer() {
  const [filter, setFilter] = useState<string>("all");

  const filterOptions = [
    { id: "all", label: "All 9 Industries" },
    { id: "industrial", label: "Industrial & Technical" },
    { id: "consumer", label: "Consumer & Retail" },
    { id: "infra", label: "Infra, Agri & Office" },
  ];

  const filteredIndustries = INDUSTRIES.filter((ind) => {
    if (filter === "all") return true;
    if (filter === "industrial") {
      return ["manufacturing", "electronics"].includes(ind.id);
    }
    if (filter === "consumer") {
      return ["fashion", "home-lifestyle", "food", "beauty"].includes(ind.id);
    }
    if (filter === "infra") {
      return ["construction", "agriculture", "office-supplies"].includes(ind.id);
    }
    return true;
  });

  return (
    <div className="space-y-12">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {filterOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setFilter(opt.id)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
              filter === opt.id
                ? "bg-[#2684FF] text-white border-[#43D5FF] shadow-lg shadow-[#2684FF]/30"
                : "bg-[#0A2450]/80 text-[#8FA0C0] border-white/10 hover:text-white hover:border-white/30"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Industries Cards Grid */}
      <div className="space-y-16">
        {filteredIndustries.map((ind, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <div
              key={ind.id}
              id={ind.id}
              className={`scroll-mt-32 p-8 sm:p-10 rounded-3xl bg-[#0A2450]/70 border border-[#2684FF]/25 shadow-2xl backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Photo Column */}
              <div
                className={`lg:col-span-5 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={ind.image}
                      alt={ind.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06142B] via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-4 bg-[#06142B] border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[#8FA0C0]">Specialized Desk:</span>
                    <span className="text-[#43D5FF] font-semibold">Active Pipeline</span>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div
                className={`lg:col-span-7 space-y-4 ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1457E8]/20 border border-[#2684FF]/30 text-xs font-semibold text-[#43D5FF]">
                  <span>Sector 0{idx + 1}</span>
                  <span>•</span>
                  <span>{ind.name}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {ind.name}
                </h2>

                <p className="text-sm font-semibold text-[#43D5FF]">
                  {ind.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#8FA0C0] leading-relaxed">
                  {ind.description}
                </p>

                {/* Key Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#06142B] border border-white/5 space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#43D5FF] block">
                      Target Buyer Segments
                    </span>
                    <ul className="space-y-1 text-xs text-[#F2F6FC]/85">
                      {ind.buyerTypes.slice(0, 3).map((b, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2684FF]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#06142B] border border-white/5 space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#43D5FF] block">
                      Expansion Channels
                    </span>
                    <ul className="space-y-1 text-xs text-[#F2F6FC]/85">
                      {ind.channels.map((c, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#43D5FF]" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Strategic Approach */}
                <div className="p-3.5 rounded-xl bg-[#06142B]/90 border-l-4 border-[#2684FF] text-xs text-[#8FA0C0]">
                  <strong className="text-white block mb-0.5">AKASH Market Approach:</strong>
                  {ind.expansionApproach}
                </div>

                {/* CTA */}
                <div className="pt-2 flex items-center gap-3">
                  <Link
                    href={`/sell-with-us`}
                    className="akash-btn-primary text-xs py-2.5 px-5"
                  >
                    <span>Submit {ind.name} Product</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
