import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { InteractiveSimulator } from "./components/InteractiveSimulator";
import { ArchitectureDiagram } from "./components/ArchitectureDiagram";
import { RoleTabs } from "./components/RoleTabs";
import { PaymentModesSection } from "./components/PaymentModesSection";
import { ComparisonSection } from "./components/ComparisonSection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { Play, Sparkles, MessageCircle } from "lucide-react";
import { getWhatsAppUrl, WA_DISPLAY_NUMBER } from "./utils/contact";
import { FaWhatsapp } from "react-icons/fa";

export const App: React.FC = () => {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after user scrolls down past 600px
      if (window.scrollY > 600) {
        setShowFloatingCTA(true);
      } else {
        setShowFloatingCTA(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenSimulator = () => {
    const el = document.getElementById("simulator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-brand-500 selection:text-slate-950 relative">
      {/* Top Navbar */}
      <Navbar onOpenSimulator={handleOpenSimulator} />

      {/* Hero Section */}
      <main>
        <Hero onOpenSimulator={handleOpenSimulator} />

        {/* 4-in-1 Interactive Simulator Sandbox */}
        <InteractiveSimulator />

        {/* 5 Pillars Architecture Diagram */}
        <ArchitectureDiagram />

        {/* User Roles & Value Tabs */}
        <RoleTabs />

        {/* 3 Flexible Payment Workflows */}
        <PaymentModesSection />

        {/* Conventional Cafe vs FoodOrdering Comparison */}
        <ComparisonSection />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Contact Button */}
      <aside
        aria-label="WhatsApp Contact"
        className="fixed bottom-6 right-6 z-40"
      >
        <a
          href={getWhatsAppUrl("Konsultasi Cepat dari Floating Button")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-2 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/30 hover:scale-105 hover:brightness-110 active:scale-95 transition-all group border border-emerald-300/40"
          title={`Hubungi WhatsApp: ${WA_DISPLAY_NUMBER}`}
        >
          <div className="w-9 h-9 rounded-full flex items-center justify-center">
            <FaWhatsapp className="w-6 h-6 text-white" />
          </div>
          {/* <span className="hidden sm:inline">WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
          <span className="w-2 h-2 rounded-full bg-emerald-200 animate-pulse" /> */}
        </a>
      </aside>

      {/* Floating Interactive Simulator Trigger */}
      {/* {showFloatingCTA && (
        <aside aria-label="Floating Actions" className="fixed bottom-6 right-6 z-40 transition-all duration-300">
          <a
            href="#simulator"
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-brand-500 to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-brand-500/30 hover:scale-105 hover:brightness-110 active:scale-95 transition-all group border border-amber-300/40"
          >
            <div className="w-5 h-5 rounded-full bg-slate-950/20 flex items-center justify-center">
              <Play className="w-3 h-3 text-slate-950 fill-slate-950" />
            </div>
            <span>Sandbox Simulator</span>
            <Sparkles className="w-3.5 h-3.5 text-slate-950 group-hover:rotate-12 transition-transform" />
          </a>
        </aside>
      )} */}
    </div>
  );
};

export default App;
