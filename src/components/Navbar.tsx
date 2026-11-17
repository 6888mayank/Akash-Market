"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  TrendingUp,
  Building2,
  Store,
  Layers,
  Sparkles,
  PhoneCall,
  Home,
  Briefcase,
  Info,
  HelpCircle,
  MessageSquare,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/", icon: Home },
    {
      label: "Services",
      href: "/services",
      hasDropdown: true,
      icon: Layers,
      children: [
        {
          name: "All Services Overview",
          desc: "End-to-end market expansion ecosystem",
          href: "/services",
          icon: Layers,
        },
        {
          name: "B2B Sales",
          desc: "Bulk buyers, dealers & corporate procurement",
          href: "/b2b-sales",
          icon: Building2,
          highlight: true,
        },
        {
          name: "B2C Sales",
          desc: "Retail channels, supermarket networks & D2C",
          href: "/b2c-sales",
          icon: Store,
        },
        {
          name: "Distribution",
          desc: "Regional & nationwide channel building",
          href: "/distribution",
          icon: TrendingUp,
        },
      ],
    },
    { label: "Industries", href: "/industries", icon: Briefcase },
    { label: "About", href: "/about", icon: Info },
    { label: "FAQ", href: "/faq", icon: HelpCircle },
    { label: "Contact", href: "/contact", icon: PhoneCall },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#06142B]/90 backdrop-blur-xl border-b border-[#2684FF]/25 shadow-[0_12px_36px_rgba(6,20,43,0.85)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 rounded-full bg-[#0A2450]/40 border border-white/5 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.children &&
                    link.children.some((child) => pathname === child.href));

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <button
                        onClick={() =>
                          setServicesDropdownOpen(!servicesDropdownOpen)
                        }
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                          isActive
                            ? "text-[#43D5FF] bg-[#1457E8]/25 shadow-[0_0_15px_rgba(67,213,255,0.2)]"
                            : "text-[#F2F6FC]/85 hover:text-white hover:bg-white/10"
                        }`}
                        aria-expanded={servicesDropdownOpen}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            servicesDropdownOpen ? "rotate-180 text-[#43D5FF]" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu with Glassmorphic Card & Ambient Glow */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 w-84 pt-2.5 animate-in fade-in zoom-in-95 duration-150">
                          <div className="bg-[#0A2450]/95 backdrop-blur-2xl border border-[#43D5FF]/30 rounded-2xl p-3 shadow-2xl shadow-[#06142B]/90 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#43D5FF]/10 rounded-full blur-2xl pointer-events-none" />

                            <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#43D5FF] flex items-center justify-between">
                              <span>Core Capabilities</span>
                              <Sparkles className="w-3 h-3" />
                            </div>

                            <div className="space-y-1 mt-1">
                              {link.children?.map((item) => {
                                const Icon = item.icon;
                                const isItemActive = pathname === item.href;
                                return (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-200 group ${
                                      isItemActive
                                        ? "bg-[#1457E8]/25 border border-[#43D5FF]/30 text-white shadow-sm"
                                        : "hover:bg-white/10 text-[#F2F6FC]/90 hover:text-white"
                                    }`}
                                  >
                                    <div
                                      className={`p-2 rounded-lg mt-0.5 transition-transform duration-200 group-hover:scale-110 ${
                                        item.highlight
                                          ? "bg-gradient-to-tr from-[#1457E8] to-[#2684FF] text-white shadow-md shadow-[#2684FF]/30"
                                          : "bg-[#06142B] text-[#43D5FF] border border-[#2684FF]/25"
                                      }`}
                                    >
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                      <div className="text-sm font-semibold flex items-center gap-1.5 text-white">
                                        <span>{item.name}</span>
                                        {item.highlight && (
                                          <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[#43D5FF]/20 text-[#43D5FF] font-medium border border-[#43D5FF]/30">
                                            Signature
                                          </span>
                                        )}
                                      </div>
                                      <div className="text-xs text-[#8FA0C0] line-clamp-1 group-hover:text-[#F2F6FC]/80 transition-colors">
                                        {item.desc}
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>

                            {/* Dropdown Quick Footer */}
                            <div className="mt-2.5 pt-2.5 border-t border-white/10 px-2 flex items-center justify-between text-xs text-[#8FA0C0]">
                              <span>Need custom guidance?</span>
                              <Link
                                href="/contact"
                                className="text-[#43D5FF] hover:underline flex items-center gap-1 font-semibold group/link"
                              >
                                <span>Talk to Sales</span>
                                <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 relative ${
                      isActive
                        ? "text-[#43D5FF] bg-[#1457E8]/25 shadow-[0_0_15px_rgba(67,213,255,0.2)]"
                        : "text-[#F2F6FC]/85 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3.5 h-0.5 bg-[#43D5FF] rounded-full shadow-[0_0_8px_#43D5FF]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Quick Talk / Contact Link */}
              <Link
                href="/contact"
                className="p-2.5 rounded-full bg-[#0A2450]/70 border border-[#2684FF]/30 text-[#8FA0C0] hover:text-[#43D5FF] hover:border-[#43D5FF]/50 transition-all duration-200 hover:scale-105 shadow-sm"
                title="Talk to Sales Team"
                aria-label="Contact AKASH"
              >
                <PhoneCall className="w-4 h-4" />
              </Link>

              {/* Main Primary CTA with Shimmer Effect */}
              <Link
                href="/sell-with-us"
                className="akash-btn-primary group"
              >
                <span>Sell With AKASH</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Hamburger & Quick Action Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/sell-with-us"
                className="text-xs font-semibold px-3 py-2 bg-gradient-to-r from-[#1457E8] to-[#2684FF] text-white rounded-full sm:inline-flex hidden shadow-md shadow-[#2684FF]/25"
              >
                Sell With AKASH
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-[#0A2450] border border-[#2684FF]/30 text-white hover:text-[#43D5FF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#43D5FF]"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 animate-in spin-in-90 duration-150" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with Enhanced Glassmorphism */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden animate-in fade-in duration-200">
          <div
            className="fixed inset-0 bg-[#06142B]/85 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#06142B]/98 border-l border-[#2684FF]/25 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <Logo />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-[#0A2450] border border-white/10 text-[#8FA0C0] hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation list */}
              <div className="py-5 space-y-1.5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#43D5FF] px-3 mb-2 flex items-center justify-between">
                  <span>Navigation Menu</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#43D5FF] animate-pulse" />
                </div>

                <Link
                  href="/"
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-base transition-colors ${
                    pathname === "/"
                      ? "bg-[#1457E8]/25 text-[#43D5FF] font-semibold border border-[#43D5FF]/30"
                      : "text-white/90 hover:bg-white/5"
                  }`}
                >
                  <Home className="w-4 h-4 text-[#8FA0C0]" />
                  <span>Home</span>
                </Link>

                {/* Services Group */}
                <div className="pt-2 pb-1 space-y-1">
                  <div className="px-4 py-1 text-xs font-semibold text-[#8FA0C0] uppercase tracking-wider flex items-center justify-between">
                    <span>Services</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#43D5FF]" />
                  </div>
                  <Link
                    href="/services"
                    className={`flex items-center gap-2.5 px-5 py-2 text-sm rounded-lg transition-colors ${
                      pathname === "/services"
                        ? "text-[#43D5FF] font-semibold bg-[#1457E8]/15"
                        : "text-[#8FA0C0] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Overview of Services</span>
                  </Link>
                  <Link
                    href="/b2b-sales"
                    className={`flex items-center gap-2.5 px-5 py-2 text-sm rounded-lg transition-colors ${
                      pathname === "/b2b-sales"
                        ? "text-[#43D5FF] font-semibold bg-[#1457E8]/15"
                        : "text-[#8FA0C0] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5 text-[#2684FF]" />
                    <span>B2B Sales (Bulk & Corporate)</span>
                  </Link>
                  <Link
                    href="/b2c-sales"
                    className={`flex items-center gap-2.5 px-5 py-2 text-sm rounded-lg transition-colors ${
                      pathname === "/b2c-sales"
                        ? "text-[#43D5FF] font-semibold bg-[#1457E8]/15"
                        : "text-[#8FA0C0] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Store className="w-3.5 h-3.5 text-[#43D5FF]" />
                    <span>B2C Sales (Retail & D2C)</span>
                  </Link>
                  <Link
                    href="/distribution"
                    className={`flex items-center gap-2.5 px-5 py-2 text-sm rounded-lg transition-colors ${
                      pathname === "/distribution"
                        ? "text-[#43D5FF] font-semibold bg-[#1457E8]/15"
                        : "text-[#8FA0C0] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Distribution Networks</span>
                  </Link>
                </div>

                <Link
                  href="/industries"
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-base transition-colors ${
                    pathname === "/industries"
                      ? "bg-[#1457E8]/25 text-[#43D5FF] font-semibold border border-[#43D5FF]/30"
                      : "text-white/90 hover:bg-white/5"
                  }`}
                >
                  <Briefcase className="w-4 h-4 text-[#8FA0C0]" />
                  <span>Industries</span>
                </Link>

                <Link
                  href="/about"
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-base transition-colors ${
                    pathname === "/about"
                      ? "bg-[#1457E8]/25 text-[#43D5FF] font-semibold border border-[#43D5FF]/30"
                      : "text-white/90 hover:bg-white/5"
                  }`}
                >
                  <Info className="w-4 h-4 text-[#8FA0C0]" />
                  <span>About AKASH</span>
                </Link>

                <Link
                  href="/faq"
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-base transition-colors ${
                    pathname === "/faq"
                      ? "bg-[#1457E8]/25 text-[#43D5FF] font-semibold border border-[#43D5FF]/30"
                      : "text-white/90 hover:bg-white/5"
                  }`}
                >
                  <HelpCircle className="w-4 h-4 text-[#8FA0C0]" />
                  <span>FAQ & Help</span>
                </Link>

                <Link
                  href="/contact"
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-base transition-colors ${
                    pathname === "/contact"
                      ? "bg-[#1457E8]/25 text-[#43D5FF] font-semibold border border-[#43D5FF]/30"
                      : "text-white/90 hover:bg-white/5"
                  }`}
                >
                  <PhoneCall className="w-4 h-4 text-[#8FA0C0]" />
                  <span>Contact</span>
                </Link>
              </div>
            </div>

            {/* Bottom CTA in drawer */}
            <div className="pt-5 border-t border-white/10 space-y-3">
              <div className="text-xs text-[#8FA0C0] text-center font-medium">
                Product Aapka. Sales Ki Tension Hamari.
              </div>
              <Link
                href="/sell-with-us"
                className="w-full justify-center akash-btn-primary py-3.5"
              >
                <span>Sell With AKASH</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full justify-center akash-btn-secondary text-sm py-3"
              >
                <PhoneCall className="w-4 h-4 text-[#43D5FF]" />
                <span>Talk to Sales Team</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
