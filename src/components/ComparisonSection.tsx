import React, { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  SplitSquareVertical,
  Utensils,
  Clock,
  Printer,
  Smartphone,
  ShieldAlert,
  MessageSquare,
} from "lucide-react";
import { getWhatsAppUrl, WA_DISPLAY_NUMBER } from "../utils/contact";

interface ComparisonItem {
  category: string;
  before: {
    title: string;
    desc: string;
  };
  after: {
    title: string;
    desc: string;
  };
}

const COMPARISONS: ComparisonItem[] = [
  {
    category: "Pemesanan Menu",
    before: {
      title: "Pelanggan Antre & Menunggu Pelayan",
      desc: "Pelanggan harus melambaikan tangan berulang kali memanggil pelayan yang sedang sibuk, atau harus berdiri mengantre di kasir.",
    },
    after: {
      title: "Scan QR Langsung dari Meja",
      desc: "Buka kamera HP biasa, scan QR meja, dan menu langsung terbuka seketika dengan foto menarik dan pilihan varian lengkap.",
    },
  },
  {
    category: "Komunikasi ke Dapur",
    before: {
      title: "Bon Kertas Tulisan Tangan",
      desc: "Pelayan mencatat manual di kertas. Tulisan sering sulit dibaca koki, kertas basah kena minyak/kopi, atau bahkan terselip hilang.",
    },
    after: {
      title: "Layar KDS Dapur & Lonceng Real-time",
      desc: "Pesanan masuk seketika ke layar dapur disertai suara lonceng otomatis. Rincian varian tertera jelas dengan timer waktu masak.",
    },
  },
  {
    category: "Pemesanan Tambahan (Re-order)",
    before: {
      title: "Tamu Enggan Pesan Tambahan",
      desc: "Pelanggan ragu atau malas memesan kopi kedua atau camilan karena repot harus memanggil pelayan kembali ke meja.",
    },
    after: {
      title: "Tambah Pesanan Tanpa Sungkan",
      desc: "Tamu cukup klik menu tambahan dari smartphone mereka. Pesanan susulan langsung masuk ke antrean dapur tanpa hambatan.",
    },
  },
  {
    category: "Tagihan & Pembayaran",
    before: {
      title: "Kasir Kumpulkan Banyak Bon Meja",
      desc: "Kasir harus mencari dan menjumlahkan potongan bon kertas satu per satu saat pelanggan mau bayar. Rawan salah hitung.",
    },
    after: {
      title: "Smart Table Batching Otomatis",
      desc: "Sistem otomatis menggabungkan seluruh pesanan dari meja yang sama ke dalam satu tagihan rapi siap bayar (QRIS/Tunai/Debit).",
    },
  },
  {
    category: "Investasi Perangkat",
    before: {
      title: "Wajib Komputer PC Kasir Mahal",
      desc: "Pemilik kafe harus mengeluarkan modal jutaan rupiah untuk membeli komputer kasir besar yang memakan ruang meja kasir.",
    },
    after: {
      title: "Cukup HP Android & Printer Bluetooth",
      desc: "Bisa menggunakan smartphone Android biasa yang terhubung langsung ke printer thermal Bluetooth murah. Hemat modal awal.",
    },
  },
];

export const ComparisonSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "side-by-side" | "before" | "after"
  >("side-by-side");

  return (
    <section
      id="perbandingan"
      className="py-24 bg-slate-900/60 relative overflow-hidden border-t border-slate-800"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold mb-4">
            <SplitSquareVertical className="w-3.5 h-3.5" />
            <span>PERBANDINGAN OPERASIONAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Tinggalkan Cara Lama,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-amber-300">
              Rasakan Perbedaannya
            </span>
          </h2>
          {/* <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Lihat bagaimana CafeOrder mengubah operasional kafe dari serba manual dan melelahkan,
            menjadi serba otomatis, cepat, dan nyaman bagi semua pihak.
          </p> */}

          {/* Quick Filter toggle for mobile/compact viewing */}
          <div className="mt-8 inline-flex p-1 rounded-2xl bg-slate-950 border border-slate-800 sm:hidden">
            <button
              onClick={() => setActiveTab("side-by-side")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "side-by-side"
                  ? "bg-brand-500 text-slate-950"
                  : "text-slate-400"
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => setActiveTab("before")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "before"
                  ? "bg-red-500/30 text-red-300"
                  : "text-slate-400"
              }`}
            >
              Cara Lama
            </button>
            <button
              onClick={() => setActiveTab("after")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "after"
                  ? "bg-emerald-500/30 text-emerald-300"
                  : "text-slate-400"
              }`}
            >
              CafeOrder
            </button>
          </div>
        </div>

        {/* Comparison Table / Cards */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {COMPARISONS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-slate-950/80 border border-slate-800/90 overflow-hidden shadow-xl"
            >
              {/* Category Header */}
              <div className="px-6 py-3 bg-slate-900/60 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="text-[11px] font-mono text-brand-400/80">
                  #0{idx + 1}
                </span>
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
                {/* Before: Cara Lama */}
                {(activeTab === "side-by-side" || activeTab === "before") && (
                  <div className="p-6 bg-red-950/10 hover:bg-red-950/20 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-red-400 font-bold text-xs uppercase tracking-wider">
                      <XCircle className="w-4 h-4 shrink-0" />
                      <span>Cara Konvensional (Lama)</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-200 mb-1.5">
                      {item.before.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.before.desc}
                    </p>
                  </div>
                )}

                {/* After: Dengan CafeOrder */}
                {(activeTab === "side-by-side" || activeTab === "after") && (
                  <div className="p-6 bg-emerald-950/15 hover:bg-emerald-950/25 transition-colors relative">
                    <div className="flex items-center gap-2 mb-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Dengan CafeOrder</span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-1.5">
                      {item.after.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.after.desc}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-12 max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left space-y-1">
            <h4 className="text-lg font-bold text-white">
              Siap Memodernisasi Operasional Kafe Anda?
            </h4>
            <p className="text-xs text-slate-400">
              Uji coba alur pemesanan di simulator atau konsultasikan kebutuhan
              kafe Anda langsung ke tim kami.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={getWhatsAppUrl(
                "Tanya Penerapan Sistem dari Halaman Perbandingan",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25 active:scale-95 transition-all whitespace-nowrap flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Konsultasi WA ({WA_DISPLAY_NUMBER})</span>
            </a>

            <a
              href="#simulator"
              className="w-full sm:w-auto px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm bg-gradient-to-r from-brand-500 to-amber-500 text-slate-950 hover:brightness-110 active:scale-95 shadow-lg shadow-brand-500/20 transition-all whitespace-nowrap flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Coba Simulator</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
