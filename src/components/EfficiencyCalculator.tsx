import React, { useState } from "react";
import { Calculator, TrendingUp, Clock, DollarSign, Sparkles, ArrowRight, Check } from "lucide-react";

export const EfficiencyCalculator: React.FC = () => {
  const [ordersPerDay, setOrdersPerDay] = useState(120);
  const [avgTicket, setAvgTicket] = useState(48000);
  const [staffCount, setStaffCount] = useState(4);

  // Calculations
  const monthlyOrders = ordersPerDay * 30;
  const currentMonthlyGross = monthlyOrders * avgTicket;

  // Estimated table time saved per order: 4.5 minutes
  const totalMinutesSavedPerMonth = monthlyOrders * 4.5;
  const totalHoursSavedPerMonth = Math.round(totalMinutesSavedPerMonth / 60);

  // Estimated paper ticket savings (KDS replaces kitchen paper rolls)
  const paperRollsSavedPerMonth = Math.round(monthlyOrders / 200); // 1 roll ~ 200 orders
  const paperMoneySaved = paperRollsSavedPerMonth * 15000; // Rp 15.000 per roll

  // Estimated revenue increase from faster table turnover (+18%) and friction-free re-orders
  const potentialRevenueLift = Math.round(currentMonthlyGross * 0.16);

  const formatIDR = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="kalkulator" className="py-24 bg-slate-900/60 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>KALKULATOR EFISIENSI &amp; ROI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Hitung Penghematan &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-amber-300">
              Potensi Kenaikan Omzet
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Ketahui berapa jam waktu kerja staf yang dapat dihemat dan berapa potensi lonjakan omzet kafe
            Anda setelah beralih ke CafeOrder.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Controls: Sliders */}
            <div className="lg:col-span-6 space-y-8">
              {/* Slider 1: Orders per day */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-slate-200">
                    Rata-rata Pesanan / Transaksi per Hari
                  </label>
                  <span className="text-base font-bold font-mono text-brand-400 bg-brand-500/10 px-3 py-0.5 rounded-lg border border-brand-500/20">
                    {ordersPerDay} pesanan
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={ordersPerDay}
                  onChange={(e) => setOrdersPerDay(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                  <span>20 order</span>
                  <span>250 order</span>
                  <span>500 order</span>
                </div>
              </div>

              {/* Slider 2: Average ticket size */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-slate-200">
                    Rata-rata Nilai Belanja per Meja (Basket Size)
                  </label>
                  <span className="text-base font-bold font-mono text-emerald-400 bg-emerald-500/10 px-3 py-0.5 rounded-lg border border-emerald-500/20">
                    {formatIDR(avgTicket)}
                  </span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="150000"
                  step="5000"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                  <span>Rp 20.000</span>
                  <span>Rp 85.000</span>
                  <span>Rp 150.000</span>
                </div>
              </div>

              {/* Slider 3: Staff count */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-slate-200">
                    Jumlah Pelayan &amp; Staf Dapur Saat Jam Ramai
                  </label>
                  <span className="text-base font-bold font-mono text-blue-400 bg-blue-500/10 px-3 py-0.5 rounded-lg border border-blue-500/20">
                    {staffCount} staf
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={staffCount}
                  onChange={(e) => setStaffCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                  <span>1 staf</span>
                  <span>6 staf</span>
                  <span>12 staf</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <p>
                  Perhitungan berbasis data riil F&amp;B: Pemesanan mandiri lewat QR memangkas waktu bolak-balik
                  pelayan mencatat menu hingga 4.5 menit per meja, serta meningkatkan perputaran meja (table turnover).
                </p>
              </div>
            </div>

            {/* Right Results Grid */}
            <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  ESTIMASI DAMPAK BULANAN
                </span>
                <span className="text-xs font-mono text-brand-400 font-semibold bg-brand-500/10 px-2.5 py-0.5 rounded border border-brand-500/20">
                  {monthlyOrders.toLocaleString("id-ID")} Pesanan / Bulan
                </span>
              </div>

              {/* Big Metric: Revenue Lift */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-500/20 via-amber-500/10 to-transparent border border-brand-500/30">
                <span className="text-xs font-mono text-brand-300 block mb-1">
                  Potensi Tambahan Omzet Bulanan (+16%)
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  +{formatIDR(potentialRevenueLift)}
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  Didapat dari peningkatan kapasitas jam ramai (table turnover) &amp; kemudahan re-order langsung dari meja.
                </p>
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>Waktu Staf Hemat</span>
                  </div>
                  <div className="text-2xl font-black text-white font-mono">
                    ~{totalHoursSavedPerMonth} Jam
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    Bebas catat menu &amp; antre kasir
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Hemat Kertas KDS</span>
                  </div>
                  <div className="text-2xl font-black text-white font-mono">
                    {formatIDR(paperMoneySaved)}
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">
                    ~{paperRollsSavedPerMonth} roll kertas termal dapur
                  </span>
                </div>
              </div>

              {/* Call to action */}
              <a
                href="#simulator"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-500 to-amber-500 text-slate-950 hover:brightness-110 shadow-lg shadow-brand-500/25 transition-all"
              >
                <span>Lihat Alur Kerja di Simulator</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
