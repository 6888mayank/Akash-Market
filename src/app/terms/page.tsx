import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions of Commercial Engagement",
  description:
    "Review the operational and legal terms governing product partnership applications and commercial representation with AKASH.",
};

export default function TermsPage() {
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
              <FileText className="w-3.5 h-3.5" />
              <span>Commercial Terms of Engagement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Terms & Conditions
            </h1>
            <p className="text-xs text-[#8FA0C0] mt-2">
              Governing commercial interactions, product representation, and website use
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#8FA0C0] leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">1. Introduction & Acceptance</h2>
              <p>
                These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and participation in AKASH commercial expansion services, product feasibility evaluations, and website tools. By submitting product information or engaging with AKASH, you agree to these Terms.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">2. Product Eligibility & Representations</h2>
              <p>
                The manufacturer or product submitter represents and warrants that:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>All product specifications, pricing, and manufacturing capacity submitted are true and verifiable.</li>
                <li>The submitting entity holds all legal rights, patents, trademarks, and regulatory approvals required to manufacture and distribute the goods.</li>
                <li>The products comply with all applicable statutory safety, labeling, BIS, FSSAI, ISO, or industry-specific standards.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">3. Scope of Commercial Representation</h2>
              <p>
                AKASH provides commercial sales representation, buyer identification, and distribution channel architecture. Unless specifically agreed in writing via an authorized wholesale distributor contract, AKASH does not assume title or risk of inventory. The actual sale of goods, invoicing, dispatch, and physical fulfillment remain the direct responsibility of the manufacturer.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">4. Intellectual Property</h2>
              <p>
                All trademarks, patents, product designs, and manufacturing know-how remain the exclusive intellectual property of the product owner. AKASH retains ownership of its proprietary market analysis methodologies, buyer database scoring models, and commercial sales processes.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">5. Non-Circumvention</h2>
              <p>
                Both parties agree that any commercial buyers, stockists, institutional accounts, or regional distributors first introduced by AKASH shall be transacted through the agreed commercial commission or representation structure for a period specified in the formal engagement agreement.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-white">6. Dispute Resolution & Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of India. Any disputes arising out of commercial engagements shall be subject to amicable mutual executive discussion, failing which they shall be referred to arbitration under the Arbitration and Conciliation Act, 1996.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
