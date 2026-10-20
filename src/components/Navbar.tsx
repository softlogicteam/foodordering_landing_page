import React, { useState, useEffect } from "react";
import {
  Coffee,
  Sparkles,
  Menu,
  X,
  PlayCircle,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { getWhatsAppUrl, WA_DISPLAY_NUMBER } from "../utils/contact";

interface NavbarProps {
  onOpenSimulator?: () => void;
}

interface NavItem {
  id: string;
  label: string;
  href: string;
  isSpecial?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: "simulator",
    label: "Simulator Live",
    href: "#simulator",
    isSpecial: true,
  },
  { id: "cara-kerja", label: "Cara Kerja", href: "#cara-kerja" },
  { id: "ekosistem", label: "5 Pilar", href: "#ekosistem" },
  { id: "pembayaran", label: "Pembayaran", href: "#pembayaran" },
  { id: "perbandingan", label: "Perbandingan", href: "#perbandingan" },
  { id: "faq", label: "FAQ", href: "#faq" },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenSimulator }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section based on scroll position
      const scrollPosition = window.scrollY + 200;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === "#" || href === "#beranda") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSimulatorCTA = () => {
    setMobileMenuOpen(false);
    if (onOpenSimulator) {
      onOpenSimulator();
    } else {
      const el = document.getElementById("simulator");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#beranda"
            onClick={(e) => handleNavClick(e, "#beranda")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-500 to-amber-500 flex items-center justify-center text-slate-950 shadow-lg shadow-brand-500/25 group-hover:scale-105 transition-transform">
              <Coffee className="w-5 h-5 font-black text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-brand-400 transition-colors">
                  Cafe<span className="text-brand-400">Order</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
                  Platform
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium hidden sm:block">
                Smart QR, KDS &amp; POS Ecosystem
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              if (item.isSpecial) {
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-sm font-semibold flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                      isActive
                        ? "text-brand-400 bg-brand-500/15 border border-brand-500/30"
                        : "text-amber-300/90 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-brand-400 animate-pulse" />
                    <span>{item.label}</span>
                  </a>
                );
              }
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-medium transition-colors px-2 py-1 rounded-lg ${
                    isActive
                      ? "text-brand-400 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/40"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={handleSimulatorCTA}
              className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-brand-500 to-amber-500 hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-brand-500/25"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Coba Simulasi</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/80 border border-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-4 border-t border-slate-800 pb-3 space-y-2 bg-slate-950/95 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl border border-slate-800/80">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-brand-500/15 text-brand-400 font-semibold border border-brand-500/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-900"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    {item.isSpecial && (
                      <Sparkles className="w-4 h-4 text-brand-400" />
                    )}
                    <span>{item.label}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </a>
              );
            })}

            <a
              href={getWhatsAppUrl("Konsultasi via Mobile Menu")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 hover:bg-emerald-500/25 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Hubungi WhatsApp: {WA_DISPLAY_NUMBER}</span>
            </a>

            <button
              onClick={handleSimulatorCTA}
              className="w-full mt-2 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-brand-500 to-amber-500 shadow-lg shadow-brand-500/20 active:scale-98 transition-all"
            >
              <PlayCircle className="w-4 h-4 text-slate-950" />
              <span>Buka Sandbox Simulator</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
