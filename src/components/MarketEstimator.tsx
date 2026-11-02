"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  ArrowRight,
  TrendingUp,
  CheckCircle,
  Building,
  Target,
  Sparkles,
  Zap,
} from "lucide-react";

export default function MarketEstimator() {
  const [industry, setIndustry] = useState("manufacturing");
  const [capacity, setCapacity] = useState("medium");
  const [targetChannel, setTargetChannel] = useState("b2b");

  const recommendations: Record<string, { model: string; buyers: string; timeline: string; advice: string }> = {
    "manufacturing-b2b": {
      model: "Institutional Vendor Onboarding & OEM Contracts",
      buyers: "Tier-1 Industrial Buyers, Heavy Engineering EPCs & Consignment Depots",
      timeline: "30 – 60 Days to Pilot Sampling",
      advice: "Prioritize technical spec sheets and ISO compliance documentation for rapid vendor desk approvals.",
    },
    "manufacturing-b2c": {
      model: "Direct Trade & Regional Hardware Distributors",
      buyers: "Multi-city Wholesale Hardware Markets & Modern Format Stores",
      timeline: "45 – 75 Days to First Regional Batch",
      advice: "Formulate distributor margin tiering (18-24%) with structured warranty and credit replacement cycles.",
    },
    "food-b2b": {
      model: "HoReCa & Bulk Food Service Contracting",
      buyers: "Commercial Cloud Kitchens, Hotel Chains & Institutional Catering Desks",
      timeline: "20 – 40 Days for Commercial Trial Orders",
      advice: "Highlight bulk packaging economics (5kg/25kg bags) and batch consistency lab certifications.",
    },
    "food-b2c": {
      model: "Super Stockist & Modern FMCG Trade Penetration",
      buyers: "Regional Supermarkets, FMCG Stockists & High-Velocity Grocery Networks",
      timeline: "30 – 60 Days for Regional Beat Launch",
      advice: "Standardize shelf barcoding, packaging moisture barrier specs, and retail promoter incentives.",
    },
    "electronics-b2b": {
      model: "Corporate Procurement & Industrial Tech Solutions",
      buyers: "IT Hardware Aggregators, Facility Systems Integrators & Corporate Gifting",
      timeline: "25 – 45 Days to Initial PO",
      advice: "Prepare formal tender packets and batch testing reports for commercial procurement committees.",
    },
    "electronics-b2c": {
      model: "Consumer Electronics Retailer Network & Regional Depots",
      buyers: "Independent Electronics Retailers, Mobile Hubs & Regional Tech Distributors",
      timeline: "35 – 60 Days to Regional Channel Rollout",
      advice: "Establish transparent replacement guarantee protocols to give retail dealers complete sales confidence.",
    },
  };

  const currentKey = `${industry}-${targetChannel}`;
  const rec = recommendations[currentKey] || {
    model: "Hybrid B2B Wholesale & Dealer Network",
    buyers: "Regional Wholesalers, Vetted Bulk Stockists & Institutional Buyers",
    timeline: "30 – 60 Days to First Commercial Contracts",
    advice: "Optimize batch pricing tiers to allow tiered discounts for 30-day repeat purchase cycles.",
  };

  return (
    <div className="bg-[#0A2450]/80 border border-[#2684FF]/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
      {/* Decorative background glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#43D5FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left: Input Selection */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider font-semibold text-[#43D5FF]">
            <Calculator className="w-4 h-4" />
            <span>Interactive Market Fit Simulator</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            See Your Product&apos;s Ideal <span className="text-gradient-electric">Expansion Route</span>
          </h3>

          <p className="text-sm text-[#8FA0C0] leading-relaxed">
            Select your product sector and target market focus to preview the exact sales strategy AKASH deploys.
          </p>

          <div className="space-y-4">
            {/* Industry Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2F6FC] mb-2">
                1. Product Sector
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#06142B] border border-[#2684FF]/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#43D5FF]"
              >
                <option value="manufacturing">Industrial & Manufacturing Goods</option>
                <option value="food">Food, FMCG & Consumer Packaged Goods</option>
                <option value="electronics">Electronics, Hardware & Gadgets</option>
                <option value="construction">Building Materials & Construction</option>
                <option value="fashion">Apparel, Garments & Textiles</option>
              </select>
            </div>

            {/* Target Channel Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2F6FC] mb-2">
                2. Primary Channel Objective
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTargetChannel("b2b")}
                  className={`py-3 px-4 rounded-xl text-xs font-bold transition-all text-center border ${
                    targetChannel === "b2b"
                      ? "bg-[#2684FF] text-white border-[#43D5FF] shadow-lg shadow-[#2684FF]/30"
                      : "bg-[#06142B] text-[#8FA0C0] border-white/10 hover:text-white"
                  }`}
                >
                  B2B Bulk & Corporate
                </button>
                <button
                  type="button"
                  onClick={() => setTargetChannel("b2c")}
                  className={`py-3 px-4 rounded-xl text-xs font-bold transition-all text-center border ${
                    targetChannel === "b2c"
                      ? "bg-[#2684FF] text-white border-[#43D5FF] shadow-lg shadow-[#2684FF]/30"
                      : "bg-[#06142B] text-[#8FA0C0] border-white/10 hover:text-white"
                  }`}
                >
                  B2C & Retail Distribution
                </button>
              </div>
            </div>

            {/* Capacity Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2F6FC] mb-2">
                3. Current Monthly Supply Capacity
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "pilot", label: "Pilot / Testing" },
                  { id: "medium", label: "Steady Volume" },
                  { id: "large", label: "High Capacity" },
                ].map((cap) => (
                  <button
                    key={cap.id}
                    type="button"
                    onClick={() => setCapacity(cap.id)}
                    className={`py-2 px-2.5 rounded-lg text-xs font-medium transition-all text-center border ${
                      capacity === cap.id
                        ? "bg-[#1457E8]/30 text-[#43D5FF] border-[#43D5FF]"
                        : "bg-[#06142B]/70 text-[#8FA0C0] border-white/5 hover:border-white/20"
                    }`}
                  >
                    {cap.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Bespoke Roadmap Display */}
        <div className="w-full lg:w-1/2 bg-[#06142B] border border-[#43D5FF]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-inner">
          <div className="space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs uppercase font-semibold text-[#8FA0C0]">
                Expansion Feasibility Roadmap
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <CheckCircle className="w-3 h-3" />
                High Market Potential
              </span>
            </div>

            <div>
              <div className="text-xs text-[#8FA0C0] uppercase font-semibold">
                Recommended Sales Structure
              </div>
              <div className="text-lg font-bold text-white mt-1">
                {rec.model}
              </div>
            </div>

            <div>
              <div className="text-xs text-[#8FA0C0] uppercase font-semibold">
                Primary Target Buyers
              </div>
              <div className="text-sm font-medium text-[#43D5FF] mt-1">
                {rec.buyers}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 py-3 px-4 rounded-xl bg-[#0A2450]/60 border border-white/5 text-xs">
              <div>
                <span className="text-[#8FA0C0] block">Estimated Execution Cycle:</span>
                <span className="text-white font-bold">{rec.timeline}</span>
              </div>
              <div>
                <span className="text-[#8FA0C0] block">Coordination Model:</span>
                <span className="text-[#43D5FF] font-bold">AKASH Dedicated Desk</span>
              </div>
            </div>

            <div className="text-xs text-[#8FA0C0] leading-relaxed border-l-2 border-[#2684FF] pl-3 py-0.5">
              <strong className="text-white">Strategic Tip:</strong> {rec.advice}
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#8FA0C0]">
              Ready to execute this channel roadmap?
            </div>
            <Link
              href="/sell-with-us"
              className="w-full sm:w-auto akash-btn-primary text-xs py-2.5 px-5"
            >
              <span>Submit Product Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
