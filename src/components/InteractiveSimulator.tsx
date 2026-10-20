import React, { useState } from "react";
import {
  Smartphone,
  ChefHat,
  Receipt,
  Printer,
  Sparkles,
  CheckCircle2,
  Bell,
  Play,
  RotateCcw,
  Volume2,
  Clock,
  ArrowRight,
  Shield,
  Layers,
} from "lucide-react";
import { playKitchenChime, playReadyAlert } from "../utils/audio";
import { SAMPLE_MENUS } from "../data/mockData";

type SimStep = "idle" | "ordered" | "cooking" | "ready" | "paid";

export const InteractiveSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "customer" | "kitchen" | "cashier" | "printer"
  >("customer");
  const [simStep, setSimStep] = useState<SimStep>("idle");
  const [selectedVariant, setSelectedVariant] = useState<"Regular" | "Large">(
    "Regular",
  );
  const [selectedPaymentMode, setSelectedPaymentMode] = useState<
    "pay_later" | "pay_first"
  >("pay_later");
  const [isAlerting, setIsAlerting] = useState(false);

  const activeMenu = SAMPLE_MENUS[0]; // Iced Sea Salt Latte
  const itemPrice = selectedVariant === "Large" ? 38000 : 32000;
  const orderNumber = "ORD-20261019-007";
  const tableName = "Meja 07";

  const handlePlaceOrder = () => {
    setSimStep("ordered");
    setActiveTab("kitchen");
    playKitchenChime();
  };

  const handleStartCooking = () => {
    setSimStep("cooking");
  };

  const handleReadyOrder = () => {
    setSimStep("ready");
    setIsAlerting(true);
    playReadyAlert();
    setActiveTab("customer");
    setTimeout(() => setIsAlerting(false), 4000);
  };

  const handlePayOrder = () => {
    setSimStep("paid");
    setActiveTab("printer");
  };

  const handleReset = () => {
    setSimStep("idle");
    setActiveTab("customer");
    setIsAlerting(false);
  };

  return (
    <section
      id="simulator"
      className="py-24 relative overflow-hidden bg-slate-900/60 border-y border-slate-800"
    >
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Live Simulation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Coba Langsung Alur Sistem Secara Nyata
          </h2>
          {/* <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Klik dan rasakan interaksi tersinkronisasi antara HP Pelanggan, Layar Dapur (*KDS*),
            Kasir, dan Mesin Cetak Struk dalam 1 alur terpadu.
          </p> */}
        </div>

        {/* Step Indicator Progress Bar */}
        <div className="max-w-4xl mx-auto mb-10 bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between text-[10px] sm:text-sm font-semibold text-slate-400 mb-2">
            <span
              className={
                simStep === "idle"
                  ? "text-orange-400 font-bold"
                  : "text-emerald-400"
              }
            >
              1. Pelanggan Pesan Meja
            </span>
            <span
              className={
                simStep === "ordered"
                  ? "text-blue-400 font-bold"
                  : simStep === "cooking" ||
                      simStep === "ready" ||
                      simStep === "paid"
                    ? "text-emerald-400"
                    : ""
              }
            >
              2. Dapur Menerima & Masak
            </span>
            <span
              className={
                simStep === "ready"
                  ? "text-amber-400 font-bold animate-pulse"
                  : simStep === "paid"
                    ? "text-emerald-400"
                    : ""
              }
            >
              3. Alarm Makanan Siap
            </span>
            <span
              className={simStep === "paid" ? "text-purple-400 font-bold" : ""}
            >
              4. Kasir & Cetak Struk
            </span>
          </div>

          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden flex">
            <div
              className={`h-full transition-all duration-500 ${
                simStep === "idle"
                  ? "w-1/4 bg-orange-500"
                  : simStep === "ordered"
                    ? "w-2/4 bg-blue-500"
                    : simStep === "cooking"
                      ? "w-3/5 bg-indigo-500"
                      : simStep === "ready"
                        ? "w-4/5 bg-amber-500"
                        : "w-full bg-emerald-500"
              }`}
            />
          </div>
        </div>

        {/* Simulator Device Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          <button
            onClick={() => setActiveTab("customer")}
            className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
              activeTab === "customer"
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>HP Pelanggan</span>
            {isAlerting && (
              <span className="w-2 h-2 rounded-full bg-red-400 animate-ping"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("kitchen")}
            className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
              activeTab === "kitchen"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <ChefHat className="w-4 h-4" />
            <span>Layar Dapur (KDS)</span>
            {(simStep === "ordered" || simStep === "cooking") && (
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("cashier")}
            className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
              activeTab === "cashier"
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/25"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Receipt className="w-4 h-4" />
            <span>Kasir & POS</span>
            {simStep === "ready" && (
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("printer")}
            className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
              activeTab === "printer"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Printer className="w-4 h-4" />
            <span>Mesin Struk Termal</span>
          </button>

          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            title="Reset Simulasi ke Awal"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Viewport Container */}
        <div className="max-w-4xl mx-auto rounded-3xl glass-panel p-4 sm:p-8 min-h-[520px] flex flex-col justify-between shadow-2xl relative">
          {/* TAB 1: CUSTOMER VIEW */}
          {activeTab === "customer" && (
            <div className="space-y-6">
              {/* Header info */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs border border-orange-500/30">
                    07
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm sm:text-base">
                      Cafe Kopi Nusantara
                    </h3>
                    <p className="text-xs text-slate-400">
                      Tamu:{" "}
                      <span className="text-white font-medium">
                        Budi Santoso
                      </span>{" "}
                      • {tableName}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-semibold uppercase px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    GPS Valid • Di Dalam Kafe
                  </span>
                </div>
              </div>

              {/* Status Alert Banner if Ready */}
              {simStep === "ready" && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-200 animate-bounce-soft flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-500 text-slate-950 rounded-xl font-bold">
                      <Bell className="w-5 h-5 animate-spin" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">
                        Pesanan Anda Siap Diambil! 🎉
                      </h4>
                      <p className="text-xs text-amber-200/90">
                        {orderNumber} sudah selesai dimasak. Silakan ambil di
                        konter barista.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab("cashier")}
                    className="px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl transition-all"
                  >
                    Lanjut Bayar di Kasir &rarr;
                  </button>
                </div>
              )}

              {/* Simulation Content Body */}
              {simStep === "idle" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-4">
                    <img
                      src={activeMenu.image}
                      alt={activeMenu.name}
                      className="w-full h-48 object-cover rounded-2xl border border-slate-800 shadow-lg"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500/20 text-orange-400">
                          {activeMenu.tags[0]}
                        </span>
                        <span className="text-xs text-slate-400">
                          Minuman Dingin
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white mt-1">
                        {activeMenu.name}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">
                        {activeMenu.description}
                      </p>
                    </div>
                  </div>

                  {/* Ordering Options */}
                  <div className="bg-slate-950/70 p-5 rounded-2xl border border-slate-800 space-y-4">
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-2">
                        Pilih Ukuran Varian:
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {(["Regular", "Large"] as const).map((v) => (
                          <button
                            key={v}
                            onClick={() => setSelectedVariant(v)}
                            className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-left ${
                              selectedVariant === v
                                ? "bg-orange-500/10 border-orange-500 text-orange-400 shadow-sm"
                                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                            }`}
                          >
                            <div className="font-semibold">{v}</div>
                            <div className="text-[11px] text-slate-400">
                              {v === "Large" ? "Rp 38.000" : "Rp 32.000"}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-2">
                        Mode Pembayaran Kafe:
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setSelectedPaymentMode("pay_later")}
                          className={`p-2.5 rounded-xl text-xs border text-left transition-all ${
                            selectedPaymentMode === "pay_later"
                              ? "bg-amber-500/10 border-amber-500 text-amber-400"
                              : "bg-slate-900 border-slate-800 text-slate-400"
                          }`}
                        >
                          <div className="font-bold">
                            Bayar Nanti (Pay Later)
                          </div>
                          <div className="text-[10px] text-slate-500">
                            Pesan dulu, bayar di kasir
                          </div>
                        </button>
                        <button
                          onClick={() => setSelectedPaymentMode("pay_first")}
                          className={`p-2.5 rounded-xl text-xs border text-left transition-all ${
                            selectedPaymentMode === "pay_first"
                              ? "bg-blue-500/10 border-blue-500 text-blue-400"
                              : "bg-slate-900 border-slate-800 text-slate-400"
                          }`}
                        >
                          <div className="font-bold">
                            Bayar Dulu (Pay First)
                          </div>
                          <div className="text-[10px] text-slate-500">
                            Bayar QRIS sebelum masak
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] sm:text-xs text-slate-400 block">
                          Total Pembayaran:
                        </span>
                        <span className="sm:text-lg font-extrabold text-white">
                          Rp {itemPrice.toLocaleString("id-ID")}
                        </span>
                      </div>
                      <button
                        onClick={handlePlaceOrder}
                        className="px-3 py-3 sm:px-6 sm:py-3  rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-[11px] sm:text-xs shadow-lg shadow-orange-500/30 active:scale-95 transition-all flex items-center gap-2"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>Kirim Pesanan ke Dapur</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Order Tracking Status View on Customer Phone */
                <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 max-w-lg mx-auto text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-orange-400">
                    <Clock className="w-7 h-7 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">
                      Nomor Pesanan: {orderNumber}
                    </span>
                    <h4 className="text-xl font-bold text-white mt-1">
                      {simStep === "ordered" &&
                        "Pesanan Masuk ke Dapur (Pending)"}
                      {simStep === "cooking" &&
                        "Sedang Dimasak oleh Barista 👨‍🍳"}
                      {simStep === "ready" && "Pesanan Siap Diambil! ✨"}
                      {simStep === "paid" &&
                        "Transaksi Lunas. Terima Kasih! 🎉"}
                    </h4>
                    <p className="text-xs text-slate-400 mt-2">
                      1x {activeMenu.name} ({selectedVariant}) — Rp{" "}
                      {itemPrice.toLocaleString("id-ID")}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 text-xs text-slate-300 flex items-center justify-between border border-slate-800">
                    <span>Status Dapur:</span>
                    <span className="font-bold text-orange-400 capitalize">
                      {simStep}
                    </span>
                  </div>

                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      onClick={() => setActiveTab("kitchen")}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl flex items-center gap-1.5"
                    >
                      <ChefHat className="w-3.5 h-3.5" />
                      <span>Lihat Tampilan Dapur (KDS) &rarr;</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: KITCHEN DISPLAY SYSTEM VIEW */}
          {activeTab === "kitchen" && (
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <ChefHat className="w-5 h-5 text-blue-400" />
                  <span className="font-bold text-white text-sm sm:text-base">
                    Layar Dapur Real-time (Kitchen Display System)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                  <span>Audio Chime Ready</span>
                </div>
              </div>

              {simStep === "idle" ? (
                <div className="text-center py-16 space-y-3">
                  <ChefHat className="w-12 h-12 text-slate-600 mx-auto" />
                  <h4 className="text-white font-bold">
                    Dapur Sedang Menunggu Pesanan
                  </h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Kembali ke tab 📱 HP Pelanggan dan klik "Kirim Pesanan"
                    untuk melihat pesanan masuk ke layar dapur ini dengan suara
                    lonceng.
                  </p>
                  <button
                    onClick={() => setActiveTab("customer")}
                    className="px-4 py-2 rounded-xl bg-orange-500 text-white font-bold text-xs"
                  >
                    Buka HP Pelanggan &rarr;
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Active Order Card */}
                  <div className="p-4 rounded-2xl bg-slate-950 border-2 border-blue-500/40 relative shadow-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-500/30">
                        {tableName}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {orderNumber}
                      </span>
                    </div>

                    <div className="py-3 border-y border-slate-800 my-2 space-y-1">
                      <div className="flex justify-between text-sm font-bold text-white">
                        <span>1x {activeMenu.name}</span>
                        <span className="text-orange-400 font-mono">
                          [{selectedVariant}]
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 italic">
                        "Gula normal, es sedang"
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                      <span>Status:</span>
                      <span
                        className={`font-bold px-2 py-0.5 rounded text-[11px] ${
                          simStep === "ordered"
                            ? "bg-yellow-500/20 text-yellow-300"
                            : simStep === "cooking"
                              ? "bg-blue-500/20 text-blue-300"
                              : "bg-emerald-500/20 text-emerald-300"
                        }`}
                      >
                        {simStep === "ordered"
                          ? "Menunggu Dibuat"
                          : simStep === "cooking"
                            ? "Sedang Dimasak"
                            : "Siap Saji"}
                      </span>
                    </div>

                    {/* Action buttons inside Kitchen */}
                    <div className="flex gap-2">
                      {simStep === "ordered" && (
                        <button
                          onClick={handleStartCooking}
                          className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-1.5"
                        >
                          <span>Mulai Masak 👨‍🍳</span>
                        </button>
                      )}

                      {simStep === "cooking" && (
                        <button
                          onClick={handleReadyOrder}
                          className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-1.5"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Tandai Siap Saji (Panggil Pelanggan) 🔔</span>
                        </button>
                      )}

                      {(simStep === "ready" || simStep === "paid") && (
                        <div className="w-full py-2 text-center text-xs font-bold text-emerald-400 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                          ✓ Pesanan Selesai Disiapkan
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: CASHIER POS VIEW */}
          {activeTab === "cashier" && (
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-emerald-400" />
                  <span className="font-bold text-white text-sm sm:text-base">
                    Kasir POS — Smart Table Batching
                  </span>
                </div>
                <span className="text-xs text-slate-400">
                  Shift Pagi • Kasir Maya
                </span>
              </div>

              {simStep === "idle" ? (
                <div className="text-center py-16 space-y-3">
                  <Receipt className="w-12 h-12 text-slate-600 mx-auto" />
                  <h4 className="text-white font-bold">
                    Belum Ada Tagihan Meja Terbuka
                  </h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Kirim pesanan dari tab HP Pelanggan terlebih dahulu untuk
                    mensimulasikan penyelesaian meja di kasir.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-bold text-white">
                        Sesi Meja: {tableName}
                      </span>
                      <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                        Batch Open (Pay Later)
                      </span>
                    </div>

                    <p className="text-xs text-slate-400">
                      Pelanggan:{" "}
                      <span className="text-white font-medium">
                        Budi Santoso
                      </span>{" "}
                      (Token Hash:{" "}
                      <code className="text-orange-400">a9f8...</code>)
                    </p>

                    <div className="pt-3 border-t border-slate-800 space-y-2 text-xs">
                      <div className="flex justify-between text-slate-300">
                        <span>
                          1x {activeMenu.name} ({selectedVariant})
                        </span>
                        <span className="font-semibold text-white">
                          Rp {itemPrice.toLocaleString("id-ID")}
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-400 pt-2 border-t border-slate-900">
                        <span>Biaya Platform (Fee):</span>
                        <span>Rp 0</span>
                      </div>
                      <div className="flex justify-between text-base font-extrabold text-emerald-400 pt-1">
                        <span>Total Tagihan Meja:</span>
                        <span>Rp {itemPrice.toLocaleString("id-ID")}</span>
                      </div>
                    </div>
                  </div>

                  {/* Payment settlement button */}
                  <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white mb-2">
                        Metode Pelunasan:
                      </h4>
                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex justify-between items-center">
                          <span>Tunai / Cash di Meja Kasir</span>
                          <span className="text-emerald-400 font-bold">
                            Tersedia
                          </span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex justify-between items-center">
                          <span>QRIS Statis / Dinamis</span>
                          <span className="text-blue-400 font-bold">
                            Otomatis
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      {simStep !== "paid" ? (
                        <button
                          onClick={handlePayOrder}
                          className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Pelunasan Sesi Meja & Cetak Struk 🖨️</span>
                        </button>
                      ) : (
                        <div className="text-center p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs font-bold text-emerald-400">
                          ✓ Tagihan Selesai Dibayar (Lunas)
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: PRINTER PREVIEW */}
          {activeTab === "printer" && (
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Printer className="w-5 h-5 text-purple-400" />
                  <span className="font-bold text-white text-sm sm:text-base">
                    Simulasi Tiket Termal ESC/POS (58mm / 80mm)
                  </span>
                </div>
                <span className="text-xs text-purple-300 font-mono">
                  Driver: Bluetooth SPP / LAN Raw 9100
                </span>
              </div>

              {/* Realistic Thermal Receipt Paper Simulation */}
              <div className="max-w-xs mx-auto bg-amber-50 text-slate-900 p-6 rounded-b-xl shadow-2xl font-mono text-xs border-t-8 border-orange-500 relative">
                <div className="text-center pb-3 border-b border-dashed border-slate-400 space-y-0.5">
                  <p className="font-extrabold text-sm uppercase tracking-wider">
                    CAFE KOPI NUSANTARA
                  </p>
                  <p className="text-[10px] text-slate-600">
                    Jl. Senopati No. 45, Jakarta
                  </p>
                  <p className="text-[10px] text-slate-600">
                    Telp: 0812-3456-7890
                  </p>
                </div>

                <div className="py-2.5 border-b border-dashed border-slate-400 space-y-1 text-[11px]">
                  <div className="flex justify-between">
                    <span>No: {orderNumber}</span>
                    <span className="font-bold">{tableName}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Kasir: Maya (POS)</span>
                    <span>19/10/26 14:32</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Tamu: Budi Santoso</span>
                    <span>Bayar: TUNAI</span>
                  </div>
                </div>

                <div className="py-2.5 border-b border-dashed border-slate-400 space-y-1.5 text-[11px]">
                  <div className="flex justify-between font-bold">
                    <span>1x {activeMenu.name}</span>
                    <span>{itemPrice.toLocaleString("id-ID")}</span>
                  </div>
                  <div className="text-[10px] text-slate-600 pl-2">
                    - Varian: {selectedVariant}
                  </div>
                </div>

                <div className="pt-2.5 space-y-1 text-[11px]">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal:</span>
                    <span>Rp {itemPrice.toLocaleString("id-ID")}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Pajak (PB1):</span>
                    <span>Rp 0</span>
                  </div>
                  <div className="flex justify-between font-extrabold text-sm pt-1 border-t border-slate-300">
                    <span>TOTAL:</span>
                    <span>Rp {itemPrice.toLocaleString("id-ID")}</span>
                  </div>
                </div>

                <div className="text-center pt-5 text-[10px] text-slate-500 space-y-0.5">
                  <p>*** TERIMA KASIH ***</p>
                  <p>Order QR Powered by CafeOrder</p>
                </div>
              </div>
            </div>
          )}

          {/* Footer Navigation Bar inside Simulator */}
          <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>
                Status:{" "}
                <strong className="text-white capitalize">
                  {simStep === "idle" ? "Siap Memulai" : simStep}
                </strong>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                className="text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800"
              >
                Ulangi Simulasi ↺
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
