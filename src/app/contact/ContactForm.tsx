"use client";

import { useState } from "react";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Building,
  User,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "Manufacturer Partnership",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [ticketId, setTicketId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setSuccess(data.message);
      setTicketId(data.ticketId);
    } catch (err: any) {
      setError(err.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-[#0A2450]/80 border border-[#43D5FF]/40 rounded-3xl p-8 sm:p-10 shadow-2xl text-center space-y-5 animate-in fade-in">
        <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">Inquiry Dispatched</h3>
        <p className="text-sm text-[#8FA0C0] max-w-md mx-auto leading-relaxed">
          {success}
        </p>
        <div className="p-4 rounded-xl bg-[#06142B] border border-white/10 text-xs inline-block">
          <span className="text-[#8FA0C0]">Ticket Reference: </span>
          <span className="font-mono text-[#43D5FF] font-bold">{ticketId}</span>
        </div>
        <div className="pt-2">
          <button
            onClick={() => {
              setSuccess(null);
              setForm({
                name: "",
                email: "",
                phone: "",
                inquiryType: "Manufacturer Partnership",
                subject: "",
                message: "",
              });
            }}
            className="akash-btn-secondary text-xs py-2.5 px-5"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0A2450]/80 border border-[#2684FF]/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
      <div className="border-b border-white/10 pb-4 mb-6">
        <h2 className="text-xl font-bold text-white">Send Direct Message</h2>
        <p className="text-xs text-[#8FA0C0] mt-1">
          Provide your requirements and our regional desk will connect with you.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2F6FC] mb-2">
              Your Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[#8FA0C0] absolute left-3.5 top-3.5" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#06142B] border border-[#2684FF]/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#43D5FF]"
                required
              />
            </div>
          </div>

          {/* Business Email */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2F6FC] mb-2">
              Business Email *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#8FA0C0] absolute left-3.5 top-3.5" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email@company.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#06142B] border border-[#2684FF]/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#43D5FF]"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2F6FC] mb-2">
              Phone Number
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
          </div>

          {/* Inquiry Type */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2F6FC] mb-2">
              Inquiry Type
            </label>
            <select
              name="inquiryType"
              value={form.inquiryType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#06142B] border border-[#2684FF]/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#43D5FF]"
            >
              <option value="Manufacturer Partnership">Manufacturer / Product Partnership</option>
              <option value="Bulk Buyer Inquiry">Bulk Purchasing / Institutional Buyer</option>
              <option value="Distributor Registration">Regional Distributor / Stockist Application</option>
              <option value="General Commercial">General Commercial Inquiries</option>
            </select>
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2F6FC] mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="e.g. Exploring bulk buyer outreach for automotive fasteners"
            className="w-full px-4 py-3 rounded-xl bg-[#06142B] border border-[#2684FF]/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#43D5FF]"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#F2F6FC] mb-2">
            Message / Requirements *
          </label>
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Detail your product type, target buyers or specific distribution queries..."
            className="w-full p-4 rounded-xl bg-[#06142B] border border-[#2684FF]/30 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#43D5FF]"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="akash-btn-primary w-full justify-center text-sm py-3.5"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Inquiry...</span>
            </>
          ) : (
            <>
              <span>Send Commercial Inquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
