import React, { useState } from "react";
import {
  Smartphone,
  ChefHat,
  Receipt,
  TrendingUp,
  CheckCircle,
  Clock,
  Sparkles,
  QrCode,
  BellRing,
  ShieldCheck,
  CreditCard,
  Users,
} from "lucide-react";

interface RoleData {
  id: string;
  tabLabel: string;
  icon: React.ReactNode;
  tagline: string;
  title: string;
  description: string;
  benefits: string[];
  mockCard: {
    title: string;
    subtitle: string;
    stats: { label: string; value: string }[];
    badge: string;
  };
  accentColor: string;
  badgeClass: string;
}

const ROLES: RoleData[] = [
  {
    id: "customer",
    tabLabel: "Pelanggan",
    icon: <Smartphone className="w-5 h-5" />,
    tagline: "CUSTOMER EXPERIENCE",
    title: "Pesan Santai dari Meja, Bebas Antre & Cepat",
    description:
      "Pelanggan tidak perlu lagi berdiri lama di depan kasir atau melambaikan tangan memanggil pelayan yang sedang sibuk. Cukup scan QR code di meja menggunakan kamera smartphone biasa, pilih menu favorit beserta topping, dan pantau status masak secara real-time.",
    benefits: [
      "100% Zero-Install: Langsung jalan di Safari, Chrome, atau browser apapun",
      "Pilihan varian fleksibel (Level Manis, Suhu, Extra Shot, Topping)",
      "Proteksi Geofence GPS mencegah pesanan fiktif dari luar kafe",
      "Notifikasi status pesanan dengan chime audio saat pesanan siap",
    ],
    mockCard: {
      title: "Mobile Order View - Meja #07",
      subtitle: "Status: Sedang Disiapkan Barista (Est. 4 mnt)",
      stats: [
        { label: "Items", value: "2 Kopi & 1 Croissant" },
        { label: "Total", value: "Rp 90.000" },
        { label: "Metode", value: "Pay Later (Kasir)" },
      ],
      badge: "Customer PWA",
    },
    accentColor:
      "from-orange-500/20 via-amber-500/10 to-transparent border-orange-500/30",
    badgeClass: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  },
  {
    id: "kitchen",
    tabLabel: "Koki & Barista",
    icon: <ChefHat className="w-5 h-5" />,
    tagline: "KITCHEN DISPLAY SYSTEM",
    title: "Dapur Modern Bebas Kertas & Tiket Hilang",
    description:
      "Tinggalkan era tiket kertas basah yang tercecer atau minyak goreng yang mengotori struk. Layar Kitchen Display System (KDS) menerima pesanan baru secara real-time dengan bunyi bel otomatis, menyusun antrean berdasarkan urutan masuk.",
    benefits: [
      "WebSocket Laravel Reverb: Pesanan muncul seketika tanpa reload browser",
      "Audio chime otomatis bersuara nyaring saat ada tiket baru masuk",
      "Pemisahan pesanan per kategori (Barista minuman vs Kitchen makanan)",
      "1-klik 'Siap Saji' otomatis mengirim notifikasi ke kasir & smartphone pelanggan",
    ],
    mockCard: {
      title: "KDS Screen - Kitchen Line #01",
      subtitle: "Aktif: 4 Tiket Berlangsung | Rata-rata Masak: 6.2 Menit",
      stats: [
        { label: "Tiket Baru", value: "2 Pesanan" },
        { label: "Sedang Dimasak", value: "3 Item" },
        { label: "Audio Alert", value: "Active (Chime)" },
      ],
      badge: "Kitchen Display (KDS)",
    },
    accentColor:
      "from-blue-500/20 via-indigo-500/10 to-transparent border-blue-500/30",
    badgeClass: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  {
    id: "cashier",
    tabLabel: "Kasir & Staf",
    icon: <Receipt className="w-5 h-5" />,
    tagline: "POINT OF SALE & BATCHING",
    title: "Satu Tagihan Rapi Meski Meja Pesan Berkali-kali",
    description:
      "Salah satu tantangan kafe nongkrong adalah pelanggan yang duduk berjam-jam dan menambah pesanan 2-3 kali. Sistem Smart Table Batching CafeOrder secara otomatis mengelompokkan semua pesanan dari meja yang sama ke dalam 1 sesi tagihan.",
    benefits: [
      "Smart Table Batching: Gabung otomatis pesanan susulan tanpa repot hitung manual",
      "Multi-Payment fleksibel: Tunai, QRIS Dinamis/Statis, Debit EDC, & Transfer Bank",
      "Input cepat pesanan kasir (walk-in takeaway) dengan keyboard shortcut",
      "Cetak ulang struk kasir dan kitchen slip ke printer thermal dalam 1 detik",
    ],
    mockCard: {
      title: "Cashier POS - Meja #03 Session",
      subtitle: "3x Order Susulan Tergabung dalam 1 Batch",
      stats: [
        { label: "Total Tagihan", value: "Rp 148.000" },
        { label: "Order Items", value: "5 Makanan/Minuman" },
        { label: "Status Sesi", value: "Siap Bayar (Unpaid)" },
      ],
      badge: "Cashier Terminal",
    },
    accentColor:
      "from-emerald-500/20 via-teal-500/10 to-transparent border-emerald-500/30",
    badgeClass: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
  {
    id: "owner",
    tabLabel: "Pemilik Kafe (Owner)",
    icon: <TrendingUp className="w-5 h-5" />,
    tagline: "MULTI-TENANT & ANALYTICS",
    title: "Kendali Penuh Seluruh Cabang dalam Genggaman",
    description:
      "Pantau performa bisnis F&B Anda dari mana saja secara real-time. Dapatkan wawasan akurat mengenai jam-jam tersibuk kafe (hourly peak heatmap), menu yang paling menguntungkan, performa kecepatan dapur, dan kelola penarikan omzet.",
    benefits: [
      "Dashboard real-time omzet hari ini, minggu ini, dan bulan berjalan",
      "Heatmap jam sibuk: Ketahui kapan kafe paling ramai untuk atur shift barista",
      "Manajemen menu instan: Ubah harga atau matikan menu habis dari smartphone",
      "Multi-Tenant PostgreSQL: Kelola banyak cabang kafe dengan data terisolasi aman",
    ],
    mockCard: {
      title: "Owner Insights - Cabang Utama",
      subtitle: "Omzet Hari Ini: Rp 4.850.000 (+18% vs Kemarin)",
      stats: [
        { label: "Total Transaksi", value: "78 Meja" },
        { label: "Menu Terlaris", value: "Sea Salt Latte (42 cup)" },
        { label: "Avg Table Time", value: "38 Menit" },
      ],
      badge: "Executive Dashboard",
    },
    accentColor:
      "from-purple-500/20 via-pink-500/10 to-transparent border-purple-500/30",
    badgeClass: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  },
];

export const RoleTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("customer");
  const currentRole = ROLES.find((r) => r.id === activeTab) || ROLES[0];

  return (
    <section
      id="cara-kerja"
      className="py-24 bg-slate-900/60 relative overflow-hidden border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>SOLUSI UNTUK SEMUA PIHAK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Didesain Spesifik untuk{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-amber-300">
              Setiap Peran di Kafe
            </span>
          </h2>
          {/* <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Dari kenyamanan pelanggan di meja hingga ketenangan pemilik bisnis memantau omzet,
            setiap fungsi dirancang untuk efisiensi maksimal tanpa gesekan.
          </p> */}
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {ROLES.map((role) => {
            const isActive = role.id === activeTab;
            return (
              <button
                key={role.id}
                onClick={() => setActiveTab(role.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-semibold text-sm transition-all duration-200 border ${
                  isActive
                    ? "bg-slate-800 text-white border-brand-500/80 shadow-lg shadow-brand-500/10 scale-105"
                    : "bg-slate-950/60 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <span
                  className={isActive ? "text-brand-400" : "text-slate-500"}
                >
                  {role.icon}
                </span>
                <span>{role.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Content Box */}
        <div
          className={`p-8 sm:p-12 rounded-3xl bg-gradient-to-br ${currentRole.accentColor} bg-slate-950 border backdrop-blur-xl shadow-2xl transition-all duration-300`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${currentRole.badgeClass}`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentRole.tagline}</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {currentRole.title}
                </h3>
                <p className="mt-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                  {currentRole.description}
                </p>
              </div>

              {/* Benefit Checklist */}
              <div className="space-y-3 pt-2">
                {currentRole.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200 leading-snug">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Mockup Card */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-5 relative">
                {/* Header Mockup */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-brand-400 bg-brand-500/10 px-2.5 py-0.5 rounded border border-brand-500/20">
                    {currentRole.mockCard.badge}
                  </span>
                </div>

                {/* Body Mockup */}
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    {currentRole.mockCard.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    {currentRole.mockCard.subtitle}
                  </p>
                </div>

                {/* Stats Grid inside Mockup */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {currentRole.mockCard.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-center"
                    >
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">
                        {stat.label}
                      </span>
                      <span className="text-xs font-bold text-slate-200 mt-1 block truncate">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Status Indicator */}
                <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>Sinkronisasi Otomatis Reverb</span>
                  </span>
                  <span className="font-mono text-emerald-400 font-semibold">
                    Aktif
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
