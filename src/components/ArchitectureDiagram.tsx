import React, { useState } from "react";
import { PILLARS } from "../data/mockData";
import {
  Smartphone,
  ChefHat,
  Receipt,
  Printer,
  BarChart3,
  ArrowRight,
  Database,
  Radio,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
} from "lucide-react";

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  customer: <Smartphone className="w-6 h-6 text-orange-400" />,
  kitchen: <ChefHat className="w-6 h-6 text-blue-400" />,
  cashier: <Receipt className="w-6 h-6 text-emerald-400" />,
  printer: <Printer className="w-6 h-6 text-purple-400" />,
  analytics: <BarChart3 className="w-6 h-6 text-rose-400" />,
};

export const ArchitectureDiagram: React.FC = () => {
  const [activePillar, setActivePillar] = useState(PILLARS[0].id);

  const selectedPillar =
    PILLARS.find((p) => p.id === activePillar) || PILLARS[0];

  return (
    <section
      id="ekosistem"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>5 PILLAR ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Arsitektur Terintegrasi &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-amber-300 to-orange-400">
              Saling Terkoneksi
            </span>
          </h2>
          {/* <p className="mt-4 text-slate-400 text-base sm:text-lg">
            CafeOrder bukan sekadar aplikasi kasir biasa, melainkan ekosistem menyeluruh dari meja pelanggan,
            layar dapur koki, terminal kasir, hingga printer thermal cloud.
          </p> */}
        </div>

        {/* Live Ecosystem Dataflow Diagram */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800 flex-wrap gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-semibold text-white">
                Live Dataflow Pipe
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                (Customer → Laravel Reverb WebSocket → KDS &amp; Cashier)
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
              <Cpu className="w-3.5 h-3.5" />
              <span>Real-time Sync &lt; 50ms</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* Step 1 */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center text-center group hover:border-orange-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-3">
                <Smartphone className="w-6 h-6 text-orange-400" />
              </div>
              <span className="text-[11px] font-mono text-orange-400 font-semibold uppercase tracking-wider mb-1">
                Step 1: Order
              </span>
              <h4 className="text-sm font-bold text-white mb-1">
                Customer Phone
              </h4>
              <p className="text-xs text-slate-400">
                Scan QR Meja, pilih menu &amp; submit order via mobile web.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center text-center group hover:border-brand-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center mb-3">
                <Radio className="w-6 h-6 text-brand-400 animate-pulse" />
              </div>
              <span className="text-[11px] font-mono text-brand-400 font-semibold uppercase tracking-wider mb-1">
                Step 2: Broadcast
              </span>
              <h4 className="text-sm font-bold text-white mb-1">
                Reverb Socket
              </h4>
              <p className="text-xs text-slate-400">
                Server melempar event WebSocket ke channel terenkripsi tenant.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center text-center group hover:border-blue-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-3">
                <ChefHat className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-[11px] font-mono text-blue-400 font-semibold uppercase tracking-wider mb-1">
                Step 3: Cooking
              </span>
              <h4 className="text-sm font-bold text-white mb-1">KDS Dapur</h4>
              <p className="text-xs text-slate-400">
                Lonceng berbunyi, tiket muncul instan, koki update status
                masakan.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center text-center group hover:border-purple-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-3">
                <Printer className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-[11px] font-mono text-purple-400 font-semibold uppercase tracking-wider mb-1">
                Step 4: Auto Print
              </span>
              <h4 className="text-sm font-bold text-white mb-1">
                Thermal Engine
              </h4>
              <p className="text-xs text-slate-400">
                Cetak otomatis struk pesanan via LAN/Bluetooth ESC/POS.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center text-center group hover:border-emerald-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-3">
                <Receipt className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider mb-1">
                Step 5: Settle
              </span>
              <h4 className="text-sm font-bold text-white mb-1">
                Kasir &amp; Batch
              </h4>
              <p className="text-xs text-slate-400">
                Gabung order per meja, terima pembayaran QRIS/Tunai &amp; cetak
                struk.
              </p>
            </div>
          </div>
        </div>

        {/* 5 Pillars Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {PILLARS.map((pillar) => {
            const isActive = pillar.id === activePillar;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`p-4 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? "bg-slate-800/90 border-brand-500 shadow-lg shadow-brand-500/10 scale-[1.02]"
                    : "bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/50"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isActive
                        ? "bg-brand-500/20 text-brand-300"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {PILLAR_ICONS[pillar.id]}
                  </div>
                  {isActive && (
                    <Sparkles
                      className="w-4 h-4 text-brand-400 animate-spin"
                      style={{ animationDuration: "6s" }}
                    />
                  )}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-0.5">
                    {pillar.badge}
                  </span>
                  <div className="text-sm font-bold text-white truncate">
                    {pillar.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Card */}
        <div
          className={`p-8 sm:p-10 rounded-3xl bg-gradient-to-br ${selectedPillar.color} bg-slate-900/90 border backdrop-blur-xl shadow-2xl relative overflow-hidden`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${selectedPillar.badgeColor}`}
              >
                {PILLAR_ICONS[selectedPillar.id]}
                <span>{selectedPillar.badge}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {selectedPillar.title}
                </h3>
                <p className="text-lg text-brand-300 font-medium mt-1">
                  {selectedPillar.subtitle}
                </p>
                <p className="mt-3 text-slate-300 leading-relaxed text-sm sm:text-base">
                  {selectedPillar.description}
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {selectedPillar.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Assurance Tag */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Jaminan Operasional:</span>
                </div>
                <span className="text-xs font-semibold text-slate-200 bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700">
                  Cepat, Tanpa Ribet &amp; Siap Digunakan Langsung
                </span>
              </div>
            </div>

            {/* Right Visual Sandbox Callout */}
            <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-400">
                    KOMPONEN TERUJI
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Production Ready
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-2">
                  Ingin Mencoba Langsung Cara Kerjanya?
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  Uji coba skenario nyata di Simulator Interaktif kami: pesan
                  kopi dari sudut pandang pelanggan, dengarkan nada lonceng KDS
                  di dapur, gabungkan meja di kasir, dan lihat struk thermal
                  keluar secara visual.
                </p>
              </div>

              <a
                href="#simulator"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-brand-500 to-amber-500 text-slate-950 hover:brightness-110 shadow-lg shadow-brand-500/20 transition-all group"
              >
                <span>Buka Sandbox Simulator</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
