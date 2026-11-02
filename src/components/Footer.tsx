import Link from "next/link";
import Logo from "./Logo";
import {
  ArrowRight,
  ShieldCheck,
  Building,
  Mail,
  MapPin,
  ExternalLink,
  PhoneCall,
  Clock,
} from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#06142B] border-t border-[#2684FF]/20 text-[#8FA0C0] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1457E8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#43D5FF]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner inside Footer */}
      <div className="border-b border-white/5 bg-[#0A2450]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#2684FF]/10 border border-[#2684FF]/30 flex items-center justify-center text-[#43D5FF]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-white font-semibold text-base">
                  Confidentiality Guaranteed
                </div>
                <div className="text-sm text-[#8FA0C0]">
                  Your proprietary product specifications and margins are protected under strict NDA.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/sell-with-us"
                className="akash-btn-primary text-sm whitespace-nowrap"
              >
                <span>Submit Product For Market Review</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo showTagline />
            <p className="text-sm text-[#8FA0C0] leading-relaxed max-w-sm mt-3">
              AKASH is a dedicated B2B-first sales and market expansion partner. We connect manufacturers, wholesalers, and product owners with verified buyers, retail distributors, and enterprise procurement teams.
            </p>
            <div className="p-4 rounded-xl bg-[#0A2450]/60 border border-[#2684FF]/20 space-y-1">
              <div className="text-xs uppercase tracking-wider text-[#43D5FF] font-semibold">
                Brand Promise
              </div>
              <div className="text-white font-medium text-sm">
                Product Aapka. Sales Ki Tension Hamari.
              </div>
              <div className="text-xs text-[#8FA0C0]">
                You build the product. We build to sell.
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#8FA0C0]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Active Market Coordination
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#43D5FF]" />
                Mon – Sat: 9:30 AM – 7:00 PM IST
              </span>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Sales Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/b2b-sales"
                  className="hover:text-[#43D5FF] transition-colors flex items-center justify-between group"
                >
                  <span>B2B Bulk Sales</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/b2c-sales"
                  className="hover:text-[#43D5FF] transition-colors flex items-center justify-between group"
                >
                  <span>B2C & Retail Sales</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/distribution"
                  className="hover:text-[#43D5FF] transition-colors flex items-center justify-between group"
                >
                  <span>Distributor Channels</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#43D5FF] transition-colors flex items-center justify-between group"
                >
                  <span>Dealer Network Setup</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#43D5FF] transition-colors flex items-center justify-between group"
                >
                  <span>Corporate Procurement</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#43D5FF] transition-colors flex items-center justify-between group"
                >
                  <span>Pipeline Management</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Industries */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Key Industries
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/industries#manufacturing"
                  className="hover:text-[#43D5FF] transition-colors"
                >
                  Industrial & Manufacturing
                </Link>
              </li>
              <li>
                <Link
                  href="/industries#construction"
                  className="hover:text-[#43D5FF] transition-colors"
                >
                  Building Materials
                </Link>
              </li>
              <li>
                <Link
                  href="/industries#electronics"
                  className="hover:text-[#43D5FF] transition-colors"
                >
                  Electronics & Hardware
                </Link>
              </li>
              <li>
                <Link
                  href="/industries#food"
                  className="hover:text-[#43D5FF] transition-colors"
                >
                  Food & Consumer Goods
                </Link>
              </li>
              <li>
                <Link
                  href="/industries#fashion"
                  className="hover:text-[#43D5FF] transition-colors"
                >
                  Fashion & Apparel
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-[#43D5FF] hover:underline font-medium text-xs flex items-center gap-1 mt-1"
                >
                  <span>View All 9 Sectors</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Company & Connect
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#43D5FF] transition-colors">
                  About AKASH
                </Link>
              </li>
              <li>
                <Link href="/sell-with-us" className="hover:text-[#43D5FF] transition-colors">
                  Sell With AKASH
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#43D5FF] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#43D5FF] transition-colors">
                  Contact Team
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#43D5FF] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#43D5FF] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Hubs & Coverage Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-[#8FA0C0]">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#43D5FF] shrink-0 mt-0.5" />
            <div>
              <div className="text-white font-semibold">Western Hub</div>
              <div>BKC & Industrial Belts, Mumbai / Pune</div>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#43D5FF] shrink-0 mt-0.5" />
            <div>
              <div className="text-white font-semibold">Northern Hub</div>
              <div>NCR Business District, New Delhi / Gurugram</div>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#43D5FF] shrink-0 mt-0.5" />
            <div>
              <div className="text-white font-semibold">Southern Hub</div>
              <div>Tech & Commercial Hub, Bengaluru / Chennai</div>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#43D5FF] shrink-0 mt-0.5" />
            <div>
              <div className="text-white font-semibold">Manufacturing Belt</div>
              <div>Industrial & Export Hub, Ahmedabad / Surat</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="bg-[#030B17] border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8FA0C0]">
          <div>
            © {currentYear} AKASH Market Expansion & B2B Sales Services. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#43D5FF] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#43D5FF] transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/contact" className="hover:text-[#43D5FF] transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
