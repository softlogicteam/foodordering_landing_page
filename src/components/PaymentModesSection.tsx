import React, { useState } from "react";
import {
  CreditCard,
  QrCode,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Clock,
  Sparkles,
  Receipt,
  Smartphone,
  Banknote,
  FileCheck,
} from "lucide-react";

interface PaymentMode {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  idealFor: string;
  steps: { num: string; title: string; desc: string }[];
  pros: string[];
  color: string;
  badgeColor: string;
}

const PAYMENT_MODES: PaymentMode[] = [
  {
    id: "pay-later",
    name: "1. Pay Later (Post-Pay Kasir)",
    badge: "Paling Favorit Kafe Nongkrong",
    tagline: "Pesan Dulu, Makan Nyaman, Bayar Nanti Sekaligus di Kasir",
    idealFor:
      "Kafe nongkrong, resto dine-in santai, co-working space, dan bistro",
    steps: [
      {
        num: "01",
        title: "Pesan Instan",
        desc: "Pelanggan scan QR meja dan submit pesanan. Dapur langsung memproses tanpa menunggu kasir.",
      },
      {
        num: "02",
        title: "Bisa Re-Order",
        desc: "Pelanggan bisa menambah kopi atau cemilan berkali-kali tanpa perlu tagihan terpisah.",
      },
      {
        num: "03",
        title: "Smart Batching",
        desc: "Sistem otomatis menggabungkan seluruh tagihan meja tersebut dalam satu Payment Batch kasir.",
      },
      {
        num: "04",
        title: "Settlement Kasir",
        desc: "Saat mau pulang, pelanggan ke kasir untuk membayar total pesanan via Tunai, QRIS, atau Kartu.",
      },
    ],
    pros: [
      "Menaikkan nilai rata-rata transaksi (Average Order Value) hingga +30%",
      "Pelanggan merasa nyaman dan santai tanpa tekanan harus bayar di awal",
      "Satu meja bisa diisi banyak orang yang patungan di akhir sesi kasir",
    ],
    color:
      "from-amber-500/20 via-orange-500/10 to-transparent border-amber-500/30",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  },
  {
    id: "pay-first",
    name: "2. Pay First (Prepaid QRIS)",
    badge: "100% Zero Antre & Anti-Kabur",
    tagline: "Bayar di HP Langsung via QRIS / E-Wallet, Dapur Langsung Masak",
    idealFor:
      "Kedai kopi take-away / fast casual, food court, dan kantin modern",
    steps: [
      {
        num: "01",
        title: "Scan & Pilih",
        desc: "Pelanggan memilih menu dan klik checkout langsung dari browser HP.",
      },
      {
        num: "02",
        title: "QRIS Dinamis",
        desc: "Layar memunculkan QRIS otomatis dengan nominal presisi (Midtrans / Xendit).",
      },
      {
        num: "03",
        title: "Webhook Realtime",
        desc: "Setelah dibayar via GoPay/OVO/BCA, server memverifikasi instan tanpa perlu unggah struk.",
      },
      {
        num: "04",
        title: "Dapur & Cetak",
        desc: "Tiket otomatis dikirim ke KDS dapur dan printer thermal mencetak struk siap saji.",
      },
    ],
    pros: [
      "100% Mencegah risiko meja kabur tanpa bayar (Dine & Dash)",
      "Beban kerja staf kasir berkurang hingga 80% karena transaksi serba otomatis",
      "Sangat cocok untuk jam sibuk (peak rush hour) dengan pergantian meja cepat",
    ],
    color:
      "from-blue-500/20 via-indigo-500/10 to-transparent border-blue-500/30",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    id: "admin-confirm",
    name: "3. Manual Transfer & Konfirmasi",
    badge: "Bebas Biaya Gateway (Zero Fee)",
    tagline: "Upload Struk Transfer Bank, Kasir Verifikasi Sekali Sentuh",
    idealFor:
      "Kafe baru, reservasi meja VIP, pesanan rombongan, atau katering khusus",
    steps: [
      {
        num: "01",
        title: "Pilih Rekening",
        desc: "Pelanggan memilih rekening bank resmi kafe (BCA, Mandiri, BRI) yang tertera di aplikasi.",
      },
      {
        num: "02",
        title: "Upload Bukti",
        desc: "Pelanggan mengunggah foto / screenshot bukti transfer melalui antarmuka web app.",
      },
      {
        num: "03",
        title: "Notifikasi Kasir",
        desc: "Kasir menerima banner notifikasi live 'Menunggu Konfirmasi Pembayaran' beserta gambarnya.",
      },
      {
        num: "04",
        title: "1-Klik Approve",
        desc: "Setelah kasir mengecek mutasi, kasir klik 'Konfirmasi' dan pesanan langsung masuk ke dapur.",
      },
    ],
    pros: [
      "Nol biaya potongan payment gateway (100% uang masuk ke rekening kafe)",
      "Aman dari penipuan karena kasir memvalidasi bukti transfer langsung",
      "Fleksibel untuk event khusus, reservasi tempat, dan pesanan bernilai tinggi",
    ],
    color:
      "from-emerald-500/20 via-teal-500/10 to-transparent border-emerald-500/30",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  },
];

export const PaymentModesSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState("pay-later");
  const activeMode =
    PAYMENT_MODES.find((m) => m.id === selectedId) || PAYMENT_MODES[0];

  return (
    <section
      id="pembayaran"
      className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold mb-4">
            <CreditCard className="w-3.5 h-3.5" />
            <span>FLEKSIBILITAS PEMBAYARAN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            3 Mode Pembayaran Cerdas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-amber-300">
              Sesuai Karakter Kafe
            </span>
          </h2>
          {/* <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Setiap kafe memiliki kebiasaan operasional yang berbeda. CafeOrder memberi Anda kebebasan penuh
            untuk memilih alur pembayaran terbaik untuk outlet Anda.
          </p> */}
        </div>

        {/* Mode Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {PAYMENT_MODES.map((mode) => {
            const isSelected = mode.id === selectedId;
            return (
              <button
                key={mode.id}
                onClick={() => setSelectedId(mode.id)}
                className={`p-6 rounded-2xl text-left border transition-all duration-300 relative ${
                  isSelected
                    ? "bg-slate-900 border-brand-500 shadow-xl shadow-brand-500/10 ring-1 ring-brand-500/50"
                    : "bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${mode.badgeColor}`}
                  >
                    {mode.badge}
                  </span>
                  {isSelected && (
                    <Sparkles className="w-4 h-4 text-brand-400" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {mode.name}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {mode.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Mode Detail Card */}
        <div
          className={`p-8 sm:p-10 rounded-3xl bg-gradient-to-br ${activeMode.color} bg-slate-900/90 border backdrop-blur-xl shadow-2xl relative overflow-hidden`}
        >
          {/* Header Info */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-800">
            <div>
              <span
                className={`text-xs font-mono px-3 py-1 rounded-full border font-semibold ${activeMode.badgeColor}`}
              >
                {activeMode.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-3">
                {activeMode.tagline}
              </h3>
              <p className="text-sm text-slate-300 mt-2">
                <strong className="text-brand-300">Paling Cocok Untuk:</strong>{" "}
                {activeMode.idealFor}
              </p>
            </div>
          </div>

          {/* Step by Step Flow Grid */}
          <div className="mb-10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-400" />
              <span>Alur Langkah Kerja (Step-by-Step Flow):</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeMode.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/90 relative group hover:border-brand-500/40 transition-colors"
                >
                  <div className="text-2xl font-black text-brand-400/40 group-hover:text-brand-400 font-mono mb-2 transition-colors">
                    {step.num}
                  </div>
                  <h5 className="text-sm font-bold text-white mb-1.5">
                    {step.title}
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pros Checklist */}
          <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/80">
            <h5 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Keunggulan Utama Mode Ini:</span>
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeMode.pros.map((pro, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-300">
                    {pro}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
