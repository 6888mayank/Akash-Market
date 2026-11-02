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
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/services",
      hasDropdown: true,
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
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#06142B]/90 backdrop-blur-md border-b border-[#2684FF]/20 shadow-[0_10px_30px_rgba(6,20,43,0.8)] py-3.5"
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
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
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
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                          isActive
                            ? "text-[#43D5FF] bg-[#0A2450]/60"
                            : "text-[#F2F6FC]/85 hover:text-white hover:bg-white/5"
                        }`}
                        aria-expanded={servicesDropdownOpen}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            servicesDropdownOpen ? "rotate-180 text-[#43D5FF]" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 w-80 pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                          <div className="bg-[#0A2450]/95 backdrop-blur-xl border border-[#2684FF]/30 rounded-2xl p-2.5 shadow-2xl shadow-[#06142B]">
                            <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#8FA0C0]">
                              Core Sales Capabilities
                            </div>
                            <div className="space-y-1">
                              {link.children?.map((item) => {
                                const Icon = item.icon;
                                const isItemActive = pathname === item.href;
                                return (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                                      isItemActive
                                        ? "bg-[#1457E8]/20 border border-[#43D5FF]/30 text-white"
                                        : "hover:bg-white/5 text-[#F2F6FC]/90 hover:text-white"
                                    }`}
                                  >
                                    <div
                                      className={`p-2 rounded-lg mt-0.5 ${
                                        item.highlight
                                          ? "bg-[#2684FF] text-white"
                                          : "bg-[#06142B] text-[#43D5FF] border border-[#2684FF]/20"
                                      }`}
                                    >
                                      <Icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                      <div className="text-sm font-semibold flex items-center gap-1.5">
                                        {item.name}
                                        {item.highlight && (
                                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#43D5FF]/20 text-[#43D5FF] font-medium">
                                            Signature
                                          </span>
                                        )}
                                      </div>
                                      <div className="text-xs text-[#8FA0C0] line-clamp-1">
                                        {item.desc}
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
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
                    className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors relative ${
                      isActive
                        ? "text-[#43D5FF] bg-[#0A2450]/60"
                        : "text-[#F2F6FC]/85 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#43D5FF] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/sell-with-us"
                className="akash-btn-primary group"
              >
                <span>Sell With AKASH</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/sell-with-us"
                className="text-xs font-semibold px-3 py-2 bg-[#2684FF] text-white rounded-full sm:inline-flex hidden"
              >
                Sell With AKASH
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-[#0A2450] border border-[#2684FF]/30 text-white hover:text-[#43D5FF] transition-colors focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden animate-in fade-in duration-200">
          <div
            className="fixed inset-0 bg-[#06142B]/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#06142B] border-l border-[#2684FF]/20 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <Logo />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-[#0A2450] text-[#8FA0C0] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation list */}
              <div className="py-6 space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8FA0C0] px-3 mb-2">
                  Navigation
                </div>

                <Link
                  href="/"
                  className={`block px-4 py-2.5 rounded-xl font-medium text-base transition-colors ${
                    pathname === "/"
                      ? "bg-[#1457E8]/20 text-[#43D5FF] font-semibold"
                      : "text-white/90 hover:bg-white/5"
                  }`}
                >
                  Home
                </Link>

                {/* Services Group */}
                <div className="space-y-1 pt-2">
                  <div className="px-4 py-1 text-xs font-semibold text-[#43D5FF] flex items-center justify-between">
                    <span>Services</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <Link
                    href="/services"
                    className={`block px-5 py-2 text-sm rounded-lg ${
                      pathname === "/services"
                        ? "text-[#43D5FF] font-semibold"
                        : "text-[#8FA0C0] hover:text-white"
                    }`}
                  >
                    Overview of Services
                  </Link>
                  <Link
                    href="/b2b-sales"
                    className={`block px-5 py-2 text-sm rounded-lg ${
                      pathname === "/b2b-sales"
                        ? "text-[#43D5FF] font-semibold"
                        : "text-[#8FA0C0] hover:text-white"
                    }`}
                  >
                    B2B Sales (Bulk & Corporate)
                  </Link>
                  <Link
                    href="/b2c-sales"
                    className={`block px-5 py-2 text-sm rounded-lg ${
                      pathname === "/b2c-sales"
                        ? "text-[#43D5FF] font-semibold"
                        : "text-[#8FA0C0] hover:text-white"
                    }`}
                  >
                    B2C Sales (Retail & D2C)
                  </Link>
                  <Link
                    href="/distribution"
                    className={`block px-5 py-2 text-sm rounded-lg ${
                      pathname === "/distribution"
                        ? "text-[#43D5FF] font-semibold"
                        : "text-[#8FA0C0] hover:text-white"
                    }`}
                  >
                    Distribution Networks
                  </Link>
                </div>

                <Link
                  href="/industries"
                  className={`block px-4 py-2.5 rounded-xl font-medium text-base transition-colors ${
                    pathname === "/industries"
                      ? "bg-[#1457E8]/20 text-[#43D5FF] font-semibold"
                      : "text-white/90 hover:bg-white/5"
                  }`}
                >
                  Industries
                </Link>

                <Link
                  href="/about"
                  className={`block px-4 py-2.5 rounded-xl font-medium text-base transition-colors ${
                    pathname === "/about"
                      ? "bg-[#1457E8]/20 text-[#43D5FF] font-semibold"
                      : "text-white/90 hover:bg-white/5"
                  }`}
                >
                  About AKASH
                </Link>

                <Link
                  href="/faq"
                  className={`block px-4 py-2.5 rounded-xl font-medium text-base transition-colors ${
                    pathname === "/faq"
                      ? "bg-[#1457E8]/20 text-[#43D5FF] font-semibold"
                      : "text-white/90 hover:bg-white/5"
                  }`}
                >
                  FAQ
                </Link>

                <Link
                  href="/contact"
                  className={`block px-4 py-2.5 rounded-xl font-medium text-base transition-colors ${
                    pathname === "/contact"
                      ? "bg-[#1457E8]/20 text-[#43D5FF] font-semibold"
                      : "text-white/90 hover:bg-white/5"
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Bottom CTA in drawer */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="text-xs text-[#8FA0C0] text-center font-medium">
                Product Aapka. Sales Ki Tension Hamari.
              </div>
              <Link
                href="/sell-with-us"
                className="w-full justify-center akash-btn-primary"
              >
                <span>Sell With AKASH</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full justify-center akash-btn-secondary text-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Talk to Sales Team</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
