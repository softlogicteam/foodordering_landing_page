import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  QrCode,
  ChefHat,
  Receipt,
  Printer,
  Volume2,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { playKitchenChime } from "../utils/audio";

interface HeroProps {
  onOpenSimulator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSimulator }) => {
  const [chimePlayed, setChimePlayed] = useState(false);

  const handleTestChime = () => {
    playKitchenChime();
    setChimePlayed(true);
    setTimeout(() => setChimePlayed(false), 1500);
  };

  return (
    <section
      id="beranda"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-brand-500/15 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[240px] h-[240px] bg-amber-500/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Crisp badge */}
        {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-lg mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
          <span className="text-xs font-semibold text-slate-300">
            Platform Pemesanan Kafe Mandiri &amp; Dapur Pintar
          </span>
        </div> */}

        {/* Punchy Headline (Concise & Easy to Read) */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight max-w-4xl mx-auto">
          Pesan dari Meja, Masak di Dapur,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-amber-300 to-orange-400">
            Selesai di Kasir.
          </span>
        </h1>

        {/* Short, Benefit-Driven Subtitle (1-2 lines only) */}
        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Pelanggan cukup scan QR tanpa unduh aplikasi. Pesanan berbunyi instan
          di layar dapur, dan seluruh tagihan meja terkelola otomatis di kasir.
        </p>

        {/* Main Action CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onOpenSimulator}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 to-amber-500 hover:brightness-110 active:scale-95 text-slate-950 font-bold text-sm shadow-xl shadow-brand-500/25 transition-all flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
            <span>Coba Simulator Live</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <a
            href="#cara-kerja"
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-800 transition-all flex items-center justify-center gap-2"
          >
            <span>Lihat Alur Kerja</span>
          </a>
        </div>

        {/* Visual Live Connection Card (Replaces the walls of text) */}
        {/* <div className="mt-12 max-w-4xl mx-auto">
          <div className="p-4 sm:p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-slate-200">
                  Alur Pesanan Real-time
                </span>
              </div>
              <button
                onClick={handleTestChime}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 hover:bg-brand-500/20 transition-colors text-[11px] font-semibold"
                title="Klik untuk tes suara bel dapur"
              >
                <Volume2
                  className={`w-3.5 h-3.5 ${chimePlayed ? "text-brand-400 animate-bounce" : ""}`}
                />
                <span>
                  {chimePlayed ? "Lonceng Berbunyi! 🔔" : "Tes Suara Dapur 🔔"}
                </span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 text-left flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                      1. Pelanggan
                    </span>
                    <span className="text-xs text-slate-400">Meja #05</span>
                  </div>
                  <h4 className="font-bold text-white text-sm">
                    Scan QR &amp; Pesan
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    1x Sea Salt Latte + Less Ice
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-800/70 text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Tanpa Antre Kasir</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-brand-500/30 text-left flex flex-col justify-between shadow-lg shadow-brand-500/5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                      2. Layar Dapur
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">
                      &lt; 50ms Sync
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-sm">
                    Lonceng Berbunyi 🔔
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Tiket masuk &amp; timer berjalan otomatis
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-800/70 text-[11px] text-brand-300 flex items-center gap-1 font-medium">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Dapur Bebas Kertas Basah</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 text-left flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                      3. Kasir &amp; Printer
                    </span>
                    <span className="text-xs text-slate-400">1x Bayar</span>
                  </div>
                  <h4 className="font-bold text-white text-sm">
                    Smart Table Batch
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Gabung otomatis pesanan susulan
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-800/70 text-[11px] text-purple-300 flex items-center gap-1 font-medium">
                  <Printer className="w-3.5 h-3.5" />
                  <span>Struk Cetak Bluetooth / LAN</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* 4 Quick Benefit Badges (Simple & Visual) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
            <QrCode className="w-4 h-4 text-orange-400" />
            <span>Scan QR Tanpa Aplikasi</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
            <ChefHat className="w-4 h-4 text-blue-400" />
            <span>KDS Dapur Real-time</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
            <Receipt className="w-4 h-4 text-emerald-400" />
            <span>Gabung Tagihan Meja</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
            <Printer className="w-4 h-4 text-purple-400" />
            <span>Support Bluetooth &amp; LAN</span>
          </div>
        </div>
      </div>
    </section>
  );
};
