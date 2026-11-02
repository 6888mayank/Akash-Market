import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  Building2,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact AKASH — Connect with Sales & Market Expansion Specialists",
  description:
    "Get in touch with AKASH's regional commercial hubs in Mumbai, Delhi NCR, Bengaluru, and Ahmedabad. Discuss product partnerships, bulk buying, or distribution channels.",
};

export default function ContactPage() {
  const hubs = [
    {
      city: "Mumbai / Western Hub",
      address: "Bandra Kurla Complex (BKC) & Bhiwandi Distribution Corridor",
      email: "mumbai@akashmarket.com",
      focus: "Industrial machinery, FMCG super-stockists & maritime logistics",
    },
    {
      city: "New Delhi / Northern Hub",
      address: "Connaught Commercial District & Gurugram Industrial Zone",
      email: "delhi@akashmarket.com",
      focus: "Government & institutional procurement, consumer electronics & apparel",
    },
    {
      city: "Bengaluru / Southern Hub",
      address: "Outer Ring Road Tech Corridor & Peenya Industrial Hub",
      email: "south@akashmarket.com",
      focus: "Hardware tech, specialized manufacturing & modern retail",
    },
    {
      city: "Ahmedabad / Manufacturing Belt",
      address: "SG Highway Corporate Belt & GIDC Engineering Hub",
      email: "gujarat@akashmarket.com",
      focus: "Chemicals, textiles, engineering components & export trade",
    },
  ];

  return (
    <div className="min-h-screen bg-[#06142B] text-white pt-28 pb-24 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#1457E8]/20 via-[#2684FF]/25 to-[#43D5FF]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2450] border border-[#43D5FF]/30 text-xs font-semibold text-[#43D5FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Commercial Inquiries</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Talk to Our <span className="text-gradient-electric">Sales Expansion Desk.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#8FA0C0] leading-relaxed">
            Have questions about market eligibility, commission models, or distributor recruitment? Our category leads respond within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Regional Hubs & Operational Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0A2450]/80 border border-[#2684FF]/30 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2684FF]/20 text-[#43D5FF] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Desk Availability</h3>
                  <div className="text-xs text-[#8FA0C0]">Monday to Saturday: 9:30 AM – 7:00 PM IST</div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 text-xs text-[#8FA0C0]">
                All inquiries are protected by our enterprise confidentiality and non-disclosure standards.
              </div>
            </div>

            {/* Regional Hubs Grid */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#43D5FF] px-1">
                Regional Commercial Hubs
              </div>

              {hubs.map((hub, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0A2450]/50 border border-white/5 hover:border-[#2684FF]/30 transition-colors space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#43D5FF]" />
                      {hub.city}
                    </span>
                    <span className="text-[11px] font-mono text-[#8FA0C0]">{hub.email}</span>
                  </div>
                  <div className="text-xs text-[#8FA0C0]">{hub.address}</div>
                  <div className="text-[11px] text-[#43D5FF]/90 font-medium">
                    Focus: {hub.focus}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
