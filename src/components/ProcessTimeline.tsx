"use client";

import { useState } from "react";
import {
  Compass,
  Search,
  Users,
  FileCheck,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Understand the Product",
      shortDesc: "Comprehensive product audit, unit economics, supply capacities, and regulatory standards.",
      fullDetails: [
        "In-depth analysis of product features, certifications, and manufacturing capacity.",
        "Margin structure evaluation for wholesale, stockist, and distributor viability.",
        "Identification of primary competitive differentiators versus category incumbents.",
      ],
      icon: Compass,
      tag: "Audit & Economics",
    },
    {
      num: "02",
      title: "Identify Opportunities",
      shortDesc: "Pinpointing highest-yield buyer segments, geographic zones, and distribution channels.",
      fullDetails: [
        "Data-backed segment mapping (Tier-1 industrial, regional wholesale, or retail modern trade).",
        "Target account qualification: volume requirements, credit cycles, and order frequency.",
        "Geography matching based on freight viability and regional demand velocity.",
      ],
      icon: Search,
      tag: "Market Mapping",
    },
    {
      num: "03",
      title: "Develop Connections",
      shortDesc: "Direct introduction to verified bulk buyers, dealers, stockists, and procurement heads.",
      fullDetails: [
        "Curated commercial pitches and tailored product catalogs presented to decision-makers.",
        "Sample coordination, factory audits scheduling, and technical clarification meetings.",
        "Facilitating distributor agreements, commercial terms, and territory exclusivity terms.",
      ],
      icon: Users,
      tag: "Buyer Outreach",
    },
    {
      num: "04",
      title: "Coordinate Sales",
      shortDesc: "End-to-end transaction facilitation, purchase order execution, and continuous pipeline development.",
      fullDetails: [
        "Purchase order tracking, dispatch scheduling, and documentation alignment.",
        "Facilitating secondary sales and re-order velocity with appointed channel partners.",
        "Continuous feedback loop to refine packaging, pricing tiers, and regional penetration.",
      ],
      icon: FileCheck,
      tag: "Pipeline Execution",
    },
  ];

  return (
    <section className="py-24 bg-[#0A2450]/30 relative overflow-hidden border-y border-[#2684FF]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1457E8]/20 border border-[#2684FF]/30 text-xs font-semibold text-[#43D5FF] mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Structured Market Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            From Manufacturer <span className="text-gradient-electric">to Market.</span>
          </h2>
          <p className="mt-4 text-[#8FA0C0] text-base sm:text-lg">
            A battle-tested 4-stage pipeline that bridges factory capacity with consistent commercial demand across India and beyond.
          </p>
        </div>

        {/* Desktop Horizontal Process Line */}
        <div className="hidden lg:block relative mb-14">
          {/* Animated Connecting Background Line */}
          <div className="absolute top-1/2 left-12 right-12 -translate-y-1/2 h-[2px] bg-[#0A2450] -z-0">
            <div
              className="h-full bg-gradient-to-r from-[#1457E8] via-[#2684FF] to-[#43D5FF] transition-all duration-700 ease-out"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              const isPassed = activeStep >= idx;

              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer group text-left p-6 rounded-2xl transition-all duration-300 ${
                    isSelected
                      ? "bg-[#0A2450] border-2 border-[#43D5FF] shadow-[0_10px_30px_rgba(38,132,255,0.25)] translate-y-[-4px]"
                      : "bg-[#06142B]/80 hover:bg-[#0A2450]/70 border border-white/10 hover:border-[#2684FF]/40"
                  }`}
                >
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-mono text-2xl font-bold transition-colors ${
                        isSelected ? "text-[#43D5FF]" : "text-[#8FA0C0] group-hover:text-white"
                      }`}
                    >
                      {step.num}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-[#2684FF] text-white shadow-md shadow-[#2684FF]/50 scale-110"
                          : isPassed
                          ? "bg-[#1457E8]/30 text-[#43D5FF] border border-[#2684FF]/30"
                          : "bg-white/5 text-[#8FA0C0]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tag */}
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#43D5FF] mb-1">
                    {step.tag}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#43D5FF] transition-colors leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#8FA0C0] leading-relaxed line-clamp-3">
                    {step.shortDesc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Step Deep Dive Details (Desktop) */}
        <div className="hidden lg:block bg-[#0A2450]/70 border border-[#2684FF]/30 rounded-2xl p-8 backdrop-blur-md shadow-xl">
          <div className="flex items-start justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#43D5FF] mb-2">
                <span>Phase {steps[activeStep].num} Deep Dive</span>
                <span>•</span>
                <span>{steps[activeStep].tag}</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">
                {steps[activeStep].title}
              </h4>
              <p className="text-sm text-[#F2F6FC]/90 mb-5 leading-relaxed">
                {steps[activeStep].shortDesc}
              </p>
              <ul className="space-y-2.5">
                {steps[activeStep].fullDetails.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#8FA0C0]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#43D5FF] mt-1.5 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="shrink-0 bg-[#06142B] p-6 rounded-xl border border-[#2684FF]/20 text-center w-72">
              <div className="text-xs text-[#8FA0C0] uppercase font-medium">Stage Objective</div>
              <div className="text-base font-bold text-white mt-1">
                {activeStep === 0 && "Audit & Economics Feasibility"}
                {activeStep === 1 && "Vetted Buyer Channel Targeting"}
                {activeStep === 2 && "Sampling & Contract Negotiations"}
                {activeStep === 3 && "Bulk Order Deliveries & Growth"}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                <span className="text-[#8FA0C0]">Next Action:</span>
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="text-[#43D5FF] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Step {activeStep === 3 ? "01" : `0${activeStep + 2}`}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-6 relative">
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#1457E8] via-[#2684FF] to-[#43D5FF]" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative pl-14">
                {/* Node */}
                <div className="absolute left-3 top-2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#06142B] border-2 border-[#43D5FF] flex items-center justify-center text-[10px] font-bold text-[#43D5FF] z-10 shadow-md shadow-[#2684FF]/50">
                  {step.num}
                </div>

                <div className="bg-[#0A2450]/80 border border-[#2684FF]/25 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#43D5FF]">
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-[#8FA0C0] leading-relaxed mb-3">
                    {step.shortDesc}
                  </p>
                  <div className="pt-2 border-t border-white/10 space-y-1.5">
                    {step.fullDetails.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-[#F2F6FC]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#43D5FF] mt-1 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
