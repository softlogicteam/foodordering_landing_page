import React from "react";
import {
  UtensilsCrossed,
  Heart,
  ExternalLink,
  ArrowUp,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { getWhatsAppUrl, WA_DISPLAY_NUMBER } from "../utils/contact";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-500 to-amber-500 flex items-center justify-center text-slate-950 shadow-lg shadow-brand-500/20">
                <UtensilsCrossed className="w-5 h-5 font-black" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                Cafe<span className="text-brand-400">Order</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Ekosistem platform F&amp;B All-in-One: Pemesanan QR mandiri meja,
              Kitchen Display System (KDS) real-time, POS kasir dengan Smart
              Table Batching, dan cloud thermal printer engine yang andal.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Production Ready v2.4</span>
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#simulator"
                  className="hover:text-brand-400 transition-colors"
                >
                  Interactive Sandbox
                </a>
              </li>
              <li>
                <a
                  href="#ekosistem"
                  className="hover:text-brand-400 transition-colors"
                >
                  5 Pilar Arsitektur
                </a>
              </li>
              <li>
                <a
                  href="#cara-kerja"
                  className="hover:text-brand-400 transition-colors"
                >
                  Peran Pengguna (Roles)
                </a>
              </li>
              <li>
                <a
                  href="#pembayaran"
                  className="hover:text-brand-400 transition-colors"
                >
                  Mode Pembayaran
                </a>
              </li>
              <li>
                <a
                  href="#perbandingan"
                  className="hover:text-brand-400 transition-colors"
                >
                  Sebelum vs Sesudah
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-brand-400 transition-colors"
                >
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Keunggulan Sistem */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Keunggulan Sistem
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-400">Pesan Instan Zero-Install</li>
              <li className="text-slate-400">Dapur Bersih Tanpa Kertas</li>
              <li className="text-slate-400">Smart Table Batching</li>
              <li className="text-slate-400">
                Support Printer Bluetooth &amp; LAN
              </li>
              <li className="text-slate-400">
                Multi-Cabang &amp; Analitik Omzet
              </li>
              <li className="text-slate-400">Proteksi Geofencing GPS</li>
            </ul>
          </div>

          {/* Action Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Portal Aplikasi
            </h4>
            <div className="space-y-2.5">
              <a
                // href="http://localhost:5173"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border--500/40 text-xs text-white transition-colors group"
              >
                <span>Customer Web App</span>
                {/* <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text--400" /> */}
              </a>

              <a
                // href="http://localhost:5174"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border--500/40 text-xs text-white transition-colors group"
              >
                <span>Admin &amp; KDS Portal</span>
                {/* <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text--400" /> */}
              </a>

              <a
                href={getWhatsAppUrl("Konsultasi Sistem dari Footer")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-xs text-emerald-300 font-semibold transition-colors group"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WA: {WA_DISPLAY_NUMBER}</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              </a>

              <button
                onClick={scrollToTop}
                className="flex items-center justify-center gap-1.5 w-full p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-xs text-slate-300 font-semibold transition-colors mt-2"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Kembali ke Atas</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} CafeOrder F&amp;B Operating System.
            Dibuat untuk performa terbaik &amp; stabilitas tinggi.
          </p>
          <div className="flex items-center gap-1">
            <span>
              Didesain dengan dedikasi untuk industri F&amp;B Indonesia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
