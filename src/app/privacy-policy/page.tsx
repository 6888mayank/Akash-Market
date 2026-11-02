import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & Enterprise Confidentiality",
  description:
    "Learn about AKASH's strict confidentiality protocols, NDA protections for proprietary manufacturing specifications, and data handling policies.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#06142B] text-white pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#43D5FF] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
        </div>

        <div className="bg-[#0A2450]/80 border border-[#2684FF]/30 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl space-y-8">
          <div className="border-b border-white/10 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1457E8]/20 border border-[#2684FF]/30 text-xs font-semibold text-[#43D5FF] mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Enterprise Confidentiality Standard</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Privacy & Non-Disclosure Policy
            </h1>
            <p className="text-xs text-[#8FA0C0] mt-2">
              Last Updated: January 2026 • Effective for all AKASH commercial client engagements
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#8FA0C0] leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. Commitment to Product Confidentiality</h2>
              <p>
                At AKASH (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;), we recognize that proprietary product formulations, technical blueprints, manufacturing cost architectures, and commercial margins constitute your core competitive advantage. We handle all product partnership submissions with the utmost confidentiality under binding non-disclosure protocols.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
              <p>When you submit a product for market evaluation or contact our team, we collect:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Authorized contact representative name, business email, and phone number</li>
                <li>Company name, corporate registration details, and manufacturing facility location</li>
                <li>Product specifications, category, supply capacity, and certifications</li>
                <li>Target buyer profiles, pricing structures, and desired geographic expansion regions</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. How Your Information Is Used</h2>
              <p>
                Information collected through our website is strictly utilized to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Conduct initial market feasibility and category demand evaluations</li>
                <li>Match your product with verified bulk buyers and solvent regional distributors</li>
                <li>Prepare tailored commercial sales execution roadmaps</li>
                <li>Facilitate direct commercial communications between your executive desk and verified trade leads</li>
              </ul>
              <p className="pt-1">
                We never sell, rent, monetize, or publicly broadcast your proprietary product data to third-party data brokers or competitor manufacturers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">4. Non-Circumvention Protection</h2>
              <p>
                AKASH adheres to strict non-circumvention ethics. Any commercial introductions, prospective distributors, or corporate procurement contacts introduced to your company through our pipeline are protected under standard commercial representation terms, safeguarding both parties&apos; long-term mutual investments.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">5. Data Security & Storage</h2>
              <p>
                All electronic communications and partnership applications are transmitted using TLS/SSL encryption and stored on secure cloud servers with role-based access restricted solely to designated category leads and senior market officers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">6. Inquiries and Compliance Contact</h2>
              <p>
                For questions regarding our enterprise privacy practices or to request formal execution of a bilateral Non-Disclosure Agreement (NDA), please contact our legal desk at <span className="text-white underline">legal@akashmarket.com</span>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
