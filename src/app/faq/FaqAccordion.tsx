"use client";

import { useState } from "react";
import { ChevronDown, Search, HelpCircle, CheckCircle2 } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  category: "model" | "eligibility" | "operations" | "security";
}

const FAQS: FaqItem[] = [
  {
    category: "model",
    q: "What does AKASH actually do for manufacturers and product owners?",
    a: "AKASH acts as your dedicated external sales and market expansion arm. While you handle manufacturing, engineering, and quality control, we identify prospective commercial buyers, structure viable trade margins, recruit regional stockists, present your product to corporate procurement teams, and coordinate the sales pipeline from sampling to repeat bulk purchase orders.",
  },
  {
    category: "model",
    q: "How does the commercial engagement model work?",
    a: "We believe in transparent, aligned commercial arrangements. Our model typically combines a structured market representation framework with performance-linked success fees on executed sales and distributor appointments. We do not charge speculative listing fees just to review your product.",
  },
  {
    category: "model",
    q: "How is AKASH different from a marketing agency or sales consultant?",
    a: "Marketing agencies focus on digital ad clicks, brand impressions, and vanity metrics. Sales consultants hand you PowerPoint slide decks and leave you to execute. AKASH is an active commercial sales partner: we negotiate face-to-face with procurement managers, arrange physical distributor agreements, coordinate commercial sampling, and drive genuine executed purchase orders.",
  },
  {
    category: "eligibility",
    q: "What types of products are eligible to partner with AKASH?",
    a: "We work with manufactured physical goods across industrial products, building materials, electronics, consumer packaged goods, food & FMCG, textiles, and lifestyle products. Products must be production-ready (not theoretical prototypes), have verifiable manufacturing capacity, and adhere to relevant regulatory standards (ISO, CE, BIS, FSSAI where applicable).",
  },
  {
    category: "security",
    q: "How do you protect our proprietary specs, formulations, and pricing margins?",
    a: "Confidentiality is our non-negotiable standard. Before evaluating detailed technical catalogs, bill of materials (BOM), or trade margins, both parties execute a legally binding enterprise Non-Disclosure Agreement (NDA). Your proprietary product information is never disclosed to competitors or unauthorized third parties.",
  },
  {
    category: "operations",
    q: "Does AKASH purchase our inventory directly or represent us?",
    a: "AKASH primarily operates as your strategic commercial representative and distribution channel architect. The commercial contracts, invoices, and purchase orders are executed directly between your manufacturing entity and the verified buyer or appointed regional distributor. In select designated product verticals, authorized wholesale partners under the AKASH network may purchase stock for consignment distribution depots.",
  },
  {
    category: "operations",
    q: "What is the typical timeline to secure the first purchase order or dealer contract?",
    a: "The commercial sales cycle varies by industry. For consumer packaged goods (FMCG) and retail products, initial distributor trials typically commence within 30 to 45 days. For industrial equipment, OEM parts, and corporate procurement tenders, technical audits and sampling cycles generally take between 45 to 90 days to first commercial contract.",
  },
  {
    category: "eligibility",
    q: "Can you help if our product is already selling online or in a single home state?",
    a: "Yes, that is often the ideal stage to partner with AKASH. If your product has proven initial consumer acceptance or local state demand, our role is to expand you into multi-state wholesale markets, appoint regional super stockists across Tier 1 and Tier 2 cities, and unlock high-volume B2B enterprise procurement channels.",
  },
  {
    category: "operations",
    q: "How are buyers and distributors verified before an introduction?",
    a: "Every commercial buyer and regional distributor in our network undergoes a trade credibility review. We verify active GST and company filings, verify warehousing and distribution infrastructure, check payment track records in their regional market, and establish clear credit terms before scheduling commercial meetings.",
  },
  {
    category: "operations",
    q: "Who handles shipping, dispatch logistics, and invoice collection?",
    a: "The manufacturer dispatches goods directly from the factory floor to the buyer's depot or warehouse, maintaining direct ownership and dispatch control. AKASH coordinates the logistics scheduling, ensures shipping documentation (E-Way bills, LR copies, inspection certificates) is in order, and facilitates payment milestone tracking.",
  },
];

export default function FaqAccordion() {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "model", label: "Commercial Model" },
    { id: "eligibility", label: "Product Eligibility" },
    { id: "operations", label: "Operations & Sales" },
    { id: "security", label: "Confidentiality & NDA" },
  ];

  const filteredFaqs = FAQS.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.q.toLowerCase().includes(search.toLowerCase()) ||
      item.a.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Search Input */}
      <div className="relative">
        <Search className="w-5 h-5 text-[#8FA0C0] absolute left-4 top-3.5" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by keywords (e.g. margins, NDA, timeline, distributor, fees)..."
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#0A2450]/80 border border-[#2684FF]/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#43D5FF] placeholder:text-[#8FA0C0]/70"
        />
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
              activeCategory === cat.id
                ? "bg-[#2684FF] text-white border-[#43D5FF] shadow-md shadow-[#2684FF]/30"
                : "bg-[#0A2450]/60 text-[#8FA0C0] border-white/5 hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Accordion Items */}
      <div className="space-y-3.5">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center rounded-2xl bg-[#0A2450]/50 border border-white/5 text-[#8FA0C0] text-sm">
            No questions matched your search criteria. Feel free to contact our team directly.
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = activeIdx === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? "bg-[#0A2450] border-[#43D5FF]/40 shadow-lg shadow-[#06142B]"
                    : "bg-[#0A2450]/50 border-white/5 hover:border-[#2684FF]/25 hover:bg-[#0A2450]/80"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-white">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#2684FF] text-white rotate-180"
                        : "bg-white/5 text-[#8FA0C0]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-[#8FA0C0] leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
