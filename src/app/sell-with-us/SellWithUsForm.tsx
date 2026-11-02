"use client";

import { useState } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Building,
  User,
  Mail,
  Phone,
  Package,
  Layers,
  DollarSign,
  Globe,
  Users,
  ShieldCheck,
  FileCheck,
  RefreshCw,
} from "lucide-react";
import { INDUSTRIES } from "@/data/industriesData";

interface FormData {
  contactName: string;
  companyName: string;
  email: string;
  phone: string;
  productName: string;
  industry: string;
  productDescription: string;
  pricingCapacity: string;
  currentChannels: string;
  interest: "B2B" | "B2C" | "Both";
  targetGeography: string;
  desiredBuyerType: string;
  privacyConsent: boolean;
}

const initialForm: FormData = {
  contactName: "",
  companyName: "",
  email: "",
  phone: "",
  productName: "",
  industry: "Manufacturing & Industrial",
  productDescription: "",
  pricingCapacity: "",
  currentChannels: "",
  interest: "B2B",
  targetGeography: "",
  desiredBuyerType: "",
  privacyConsent: false,
};

export default function SellWithUsForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<any | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const totalSteps = 4;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    // Clear field error
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!form.contactName.trim()) newErrors.contactName = "Contact name is required.";
      if (!form.companyName.trim()) newErrors.companyName = "Company or business name is required.";
      if (!form.email.trim()) {
        newErrors.email = "Business email is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        newErrors.email = "Please enter a valid email address.";
      }
      if (!form.phone.trim()) newErrors.phone = "Phone or mobile number is required.";
    }

    if (currentStep === 2) {
      if (!form.productName.trim()) newErrors.productName = "Product name or catalog title is required.";
      if (!form.industry) newErrors.industry = "Please select an industry category.";
      if (!form.productDescription.trim()) {
        newErrors.productDescription = "Please provide a short description of the product and certifications.";
      } else if (form.productDescription.trim().length < 20) {
        newErrors.productDescription = "Description should be at least 20 characters for our review team.";
      }
    }

    if (currentStep === 3) {
      if (!form.pricingCapacity.trim()) {
        newErrors.pricingCapacity = "Please specify rough unit pricing and monthly capacity (e.g. ₹500/unit, 5,000 units/mo).";
      }
      if (!form.targetGeography.trim()) {
        newErrors.targetGeography = "Target geography is required (e.g., Pan-India, Western India, NCR, Global).";
      }
      if (!form.desiredBuyerType.trim()) {
        newErrors.desiredBuyerType = "Please describe your ideal buyers (e.g. OEM factories, regional stockists, retail chains).";
      }
    }

    if (currentStep === 4) {
      if (!form.privacyConsent) {
        newErrors.privacyConsent = "You must accept the confidentiality and review terms to proceed.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, totalSteps));
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setSubmitting(true);
    setApiError(null);

    try {
      const res = await fetch("/api/submit-product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit application.");
      }

      setSubmissionSuccess(data.data);
      // Trigger subtle celebration confetti
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#2684FF", "#43D5FF", "#1457E8", "#FFFFFF"],
        });
      } catch (err) {
        // Non-fatal if canvas unavailable
      }
      window.scrollTo({ top: 200, behavior: "smooth" });
    } catch (err: any) {
      setApiError(err.message || "An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // SUCCESS SCREEN
  if (submissionSuccess) {
    return (
      <div className="bg-[#0A2450]/90 border border-[#43D5FF]/40 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl animate-in fade-in duration-300">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1457E8]/20 border border-[#2684FF]/40 text-xs font-semibold text-[#43D5FF]">
            Application Registered Successfully
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Product Submission Received
          </h2>

          <p className="text-sm text-[#8FA0C0] leading-relaxed">
            Thank you, <strong className="text-white">{form.contactName}</strong>. Your product{" "}
            <strong className="text-white">“{form.productName}”</strong> has been forwarded to our market expansion review desk.
          </p>

          {/* Reference Card */}
          <div className="p-6 rounded-2xl bg-[#06142B] border border-[#2684FF]/30 text-left space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
              <span className="text-[#8FA0C0]">Official Reference Code</span>
              <span className="font-mono text-sm font-bold text-[#43D5FF]">
                {submissionSuccess.referenceId}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-[#8FA0C0] block">Company:</span>
                <span className="text-white font-medium">{form.companyName}</span>
              </div>
              <div>
                <span className="text-[#8FA0C0] block">Channel Interest:</span>
                <span className="text-[#43D5FF] font-medium">{form.interest} Market</span>
              </div>
              <div>
                <span className="text-[#8FA0C0] block">Assigned Unit:</span>
                <span className="text-white font-medium">{submissionSuccess.reviewOfficer}</span>
              </div>
              <div>
                <span className="text-[#8FA0C0] block">Estimated Feasibility:</span>
                <span className="text-emerald-400 font-medium">{submissionSuccess.estimatedReviewTime}</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0A2450]/60 border border-white/5 text-xs text-[#8FA0C0] text-left flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#43D5FF] shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-0.5">Next Step:</strong>
              A senior category lead will review the technical specifications, verify initial buyer demand curves, and contact you directly at <span className="text-white underline">{form.email}</span>.
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                setSubmissionSuccess(null);
                setForm(initialForm);
                setStep(1);
              }}
              className="akash-btn-secondary text-xs py-3 px-6"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Submit Another Product</span>
            </button>
            <Link
              href="/"
              className="akash-btn-primary text-xs py-3 px-6"
            >
              <span>Return to Homepage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0A2450]/80 border border-[#2684FF]/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
      {/* Step Progress Indicators */}
      <div className="mb-10">
        <div className="flex items-center justify-between text-xs font-semibold text-[#8FA0C0] mb-3">
          <span>Step {step} of {totalSteps}</span>
          <span className="text-[#43D5FF]">
            {step === 1 && "1. Company & Contact"}
            {step === 2 && "2. Product & Category"}
            {step === 3 && "3. Capacity & Market Goals"}
            {step === 4 && "4. Review & Confirm"}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-[#06142B] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#1457E8] via-[#2684FF] to-[#43D5FF] transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* API Error Alert */}
      {apiError && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{apiError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* =========================================================================
            STEP 1: COMPANY & CONTACT
            ========================================================================= */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-xl font-bold text-white">
                Company & Contact Information
              </h2>
              <p className="text-xs text-[#8FA0C0] mt-1">
                Tell us about your organization and who our market desk should liaise with.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Contact Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2F6FC] mb-2">
                  Contact Person Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#8FA0C0] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    name="contactName"
                    value={form.contactName}
                    onChange={handleChange}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#06142B] border border-[#2684FF]/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#43D5FF]"
                  />
                </div>
                {errors.contactName && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.contactName}</p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2F6FC] mb-2">
                  Company / Brand Name *
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-[#8FA0C0] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Apex Engineering Works LLP"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#06142B] border border-[#2684FF]/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#43D5FF]"
                  />
                </div>
                {errors.companyName && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.companyName}</p>
                )}
              </div>

              {/* Business Email */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2F6FC] mb-2">
                  Official Business Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#8FA0C0] absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="rajesh@apexengg.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#06142B] border border-[#2684FF]/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#43D5FF]"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2F6FC] mb-2">
                  Phone / Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#8FA0C0] absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#06142B] border border-[#2684FF]/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#43D5FF]"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            STEP 2: PRODUCT & INDUSTRY
            ========================================================================= */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-xl font-bold text-white">
                Product Details & Industry
              </h2>
              <p className="text-xs text-[#8FA0C0] mt-1">
                Provide specifics on what you produce and its technical or consumer attributes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Product Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2F6FC] mb-2">
                  Product Name / Catalog Title *
                </label>
                <div className="relative">
                  <Package className="w-4 h-4 text-[#8FA0C0] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    name="productName"
                    value={form.productName}
                    onChange={handleChange}
                    placeholder="e.g. Industrial Automation Panels / Organic Spices"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#06142B] border border-[#2684FF]/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#43D5FF]"
                  />
                </div>
                {errors.productName && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.productName}</p>
                )}
              </div>

              {/* Industry */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2F6FC] mb-2">
                  Industry Sector *
                </label>
                <div className="relative">
                  <Layers className="w-4 h-4 text-[#8FA0C0] absolute left-3.5 top-3.5" />
                  <select
                    name="industry"
                    value={form.industry}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#06142B] border border-[#2684FF]/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#43D5FF]"
                  >
                    {INDUSTRIES.map((ind) => (
                      <option key={ind.id} value={ind.name}>
                        {ind.name}
                      </option>
                    ))}
                    <option value="Other">Other Product Category</option>
                  </select>
                </div>
                {errors.industry && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.industry}</p>
                )}
              </div>
            </div>

            {/* Product Description */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2F6FC] mb-2">
                Product Description, Specifications & USP *
              </label>
              <textarea
                name="productDescription"
                rows={4}
                value={form.productDescription}
                onChange={handleChange}
                placeholder="Describe key features, certifications (ISO, CE, FSSAI, BIS), packaging formats, and competitive advantages over current market alternatives..."
                className="w-full p-4 rounded-xl bg-[#06142B] border border-[#2684FF]/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#43D5FF]"
              />
              {errors.productDescription && (
                <p className="text-red-400 text-xs mt-1.5">{errors.productDescription}</p>
              )}
            </div>
          </div>
        )}

        {/* =========================================================================
            STEP 3: CAPACITY, PRICING & CHANNELS
            ========================================================================= */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-xl font-bold text-white">
                Capacity, Pricing & Target Expansion
              </h2>
              <p className="text-xs text-[#8FA0C0] mt-1">
                Help our commercial team align margin structures and dispatch capability.
              </p>
            </div>

            {/* Interest: B2B vs B2C vs Both */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2F6FC] mb-2">
                Primary Expansion Interest *
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "B2B", label: "B2B Only (Bulk & Corporate)" },
                  { id: "B2C", label: "B2C Only (Retail & Consumers)" },
                  { id: "Both", label: "Both B2B & B2C" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setForm((prev) => ({ ...prev, interest: item.id as any }))}
                    className={`py-3 px-3 rounded-xl text-xs font-bold text-center border transition-all ${
                      form.interest === item.id
                        ? "bg-[#2684FF] text-white border-[#43D5FF] shadow-lg shadow-[#2684FF]/30"
                        : "bg-[#06142B] text-[#8FA0C0] border-white/10 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Pricing and Supply Capacity */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2F6FC] mb-2">
                  Pricing & Monthly Supply Capacity *
                </label>
                <div className="relative">
                  <DollarSign className="w-4 h-4 text-[#8FA0C0] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    name="pricingCapacity"
                    value={form.pricingCapacity}
                    onChange={handleChange}
                    placeholder="e.g. ₹450-₹600/unit, 10,000 units/month"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#06142B] border border-[#2684FF]/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#43D5FF]"
                  />
                </div>
                {errors.pricingCapacity && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.pricingCapacity}</p>
                )}
              </div>

              {/* Current Sales Channels */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2F6FC] mb-2">
                  Current Sales Channels (Optional)
                </label>
                <input
                  type="text"
                  name="currentChannels"
                  value={form.currentChannels}
                  onChange={handleChange}
                  placeholder="e.g. Local state dealers, Amazon India, Direct offline"
                  className="w-full px-4 py-3 rounded-xl bg-[#06142B] border border-[#2684FF]/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#43D5FF]"
                />
              </div>

              {/* Target Geography */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2F6FC] mb-2">
                  Target Geography / Expansion Regions *
                </label>
                <div className="relative">
                  <Globe className="w-4 h-4 text-[#8FA0C0] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    name="targetGeography"
                    value={form.targetGeography}
                    onChange={handleChange}
                    placeholder="e.g. Pan-India / Western Region / NCR / Middle East export"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#06142B] border border-[#2684FF]/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#43D5FF]"
                  />
                </div>
                {errors.targetGeography && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.targetGeography}</p>
                )}
              </div>

              {/* Desired Buyer Type */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2F6FC] mb-2">
                  Desired Buyer Types *
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-[#8FA0C0] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    name="desiredBuyerType"
                    value={form.desiredBuyerType}
                    onChange={handleChange}
                    placeholder="e.g. Regional Super Stockists, EPC Contractors, Supermarkets"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#06142B] border border-[#2684FF]/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#43D5FF]"
                  />
                </div>
                {errors.desiredBuyerType && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.desiredBuyerType}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            STEP 4: REVIEW & CONFIRM
            ========================================================================= */}
        {step === 4 && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-xl font-bold text-white">
                Review Your Partnership Application
              </h2>
              <p className="text-xs text-[#8FA0C0] mt-1">
                Please verify your details before submitting for market evaluation.
              </p>
            </div>

            {/* Review Summary Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#06142B] border border-white/5 space-y-2">
                <span className="text-[#43D5FF] font-semibold block uppercase">
                  Contact & Company
                </span>
                <div>
                  <span className="text-[#8FA0C0]">Name:</span> {form.contactName}
                </div>
                <div>
                  <span className="text-[#8FA0C0]">Company:</span> {form.companyName}
                </div>
                <div>
                  <span className="text-[#8FA0C0]">Email:</span> {form.email}
                </div>
                <div>
                  <span className="text-[#8FA0C0]">Phone:</span> {form.phone}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#06142B] border border-white/5 space-y-2">
                <span className="text-[#43D5FF] font-semibold block uppercase">
                  Product Overview
                </span>
                <div>
                  <span className="text-[#8FA0C0]">Product:</span> {form.productName}
                </div>
                <div>
                  <span className="text-[#8FA0C0]">Industry:</span> {form.industry}
                </div>
                <div>
                  <span className="text-[#8FA0C0]">Interest:</span> {form.interest} Market
                </div>
                <div>
                  <span className="text-[#8FA0C0]">Capacity & Pricing:</span> {form.pricingCapacity}
                </div>
              </div>

              <div className="md:col-span-2 p-4 rounded-xl bg-[#06142B] border border-white/5 space-y-2">
                <span className="text-[#43D5FF] font-semibold block uppercase">
                  Target Expansion Scope
                </span>
                <div>
                  <span className="text-[#8FA0C0]">Target Geography:</span> {form.targetGeography}
                </div>
                <div>
                  <span className="text-[#8FA0C0]">Desired Buyers:</span> {form.desiredBuyerType}
                </div>
                <div>
                  <span className="text-[#8FA0C0]">Product Description:</span>
                  <p className="text-[#F2F6FC] mt-1 leading-relaxed bg-[#0A2450]/40 p-2.5 rounded-lg">
                    {form.productDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy & NDA Consent Checkbox */}
            <div className="p-4 rounded-xl bg-[#06142B]/80 border border-[#2684FF]/30">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="privacyConsent"
                  checked={form.privacyConsent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded text-[#2684FF] focus:ring-[#43D5FF] bg-[#0A2450] border-white/20"
                />
                <span className="text-xs text-[#8FA0C0] leading-relaxed">
                  I confirm that all product specifications submitted are accurate. I acknowledge that AKASH operates under enterprise confidentiality standards, protecting my trade margins and proprietary catalog data. I consent to an AKASH market expansion lead reviewing this application.
                </span>
              </label>
              {errors.privacyConsent && (
                <p className="text-red-400 text-xs mt-2 pl-7">{errors.privacyConsent}</p>
              )}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="akash-btn-secondary text-xs py-3 px-5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
          ) : (
            <div />
          )}

          {step < totalSteps ? (
            <button
              type="button"
              onClick={handleNext}
              className="akash-btn-primary text-xs py-3 px-6"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitting}
              className="akash-btn-primary text-xs py-3.5 px-8"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting to Sales Desk...</span>
                </>
              ) : (
                <>
                  <span>Submit Product for Review</span>
                  <FileCheck className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
