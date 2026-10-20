import React, { useState } from "react";
import {
  Cpu,
  Database,
  Radio,
  Printer,
  ShieldCheck,
  Zap,
  Code2,
  Terminal,
  Check,
  Copy,
} from "lucide-react";

interface TechFeature {
  id: string;
  name: string;
  tag: string;
  icon: React.ReactNode;
  summary: string;
  details: string[];
  codeSnippet: string;
  language: string;
}

const TECH_FEATURES: TechFeature[] = [
  {
    id: "reverb",
    name: "Laravel Reverb WebSockets",
    tag: "Latency < 50ms",
    icon: <Radio className="w-5 h-5 text-amber-400" />,
    summary:
      "Engine broadcast WebSocket bawaan Laravel 11 berkecepatan tinggi. Mendistribusikan pesanan baru dari meja langsung ke layar dapur KDS dan kasir tanpa jeda polling.",
    details: [
      "Sub-50ms roundtrip latency untuk notifikasi tiket baru",
      "Channel terenkripsi per tenant: 'tenant.{id}.orders'",
      "Zero monthly fees: Tidak bergantung pada layanan eksternal berbayar seperti Pusher",
      "Graceful fallback ke exponential backoff polling jika jaringan seluler tidak stabil",
    ],
    codeSnippet: `// Backend Event Broadcast
class OrderCreated implements ShouldBroadcastNow {
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public function broadcastOn(): array {
        return [
            new PrivateChannel("tenant.{$this->order->tenant_id}.kds"),
            new PrivateChannel("tenant.{$this->order->tenant_id}.cashier"),
        ];
    }

    public function broadcastWith(): array {
        return ['order' => new OrderDetailResource($this->order)];
    }
}`,
    language: "php",
  },
  {
    id: "locks",
    name: "PostgreSQL 16 Atomic Locks",
    tag: "Anti Race-Condition",
    icon: <Database className="w-5 h-5 text-blue-400" />,
    summary:
      "Perlindungan level database menggunakan transaksi terkunci (SELECT FOR UPDATE) saat pembaruan status meja dan pembayaran serentak di jam sibuk.",
    details: [
      "Mencegah double-spending saat pelanggan membayar bersamaan dengan kasir",
      "Pemisahan row level lock sehingga transaksi meja lain tidak terblokir",
      "Pencatatan riwayat audit pembayaran (Payment Batch Log) tanpa selisih kas",
      "Kapasitas ribuan query serentak dengan pgBouncer connection pooling",
    ],
    codeSnippet: `// Atomic Table Batching Settlement
DB::transaction(function () use ($tableId, $paymentMethod) {
    // Kunci baris sesi meja untuk mencegah race condition
    $batch = PaymentBatch::where('table_id', $tableId)
        ->where('status', 'unpaid')
        ->lockForUpdate()
        ->firstOrFail();

    $batch->update([
        'status' => 'paid',
        'payment_method' => $paymentMethod,
        'settled_at' => now(),
    ]);

    event(new TableSettled($batch));
});`,
    language: "php",
  },
  {
    id: "printer",
    name: "Dual-Engine Thermal Cloud",
    tag: "ESC/POS 58mm & 80mm",
    icon: <Printer className="w-5 h-5 text-purple-400" />,
    summary:
      "Arsitektur cetak hybrid unik: dapat berjalan via Node.js di komputer PC Kasir (Raw TCP 9100) ATAU langsung via smartphone Android bekas menggunakan Bluetooth SPP/BLE.",
    details: [
      "Solusi hemat modal: Pemilik kafe tidak wajib membeli PC kasir mahal",
      "Antrean cetak database: Struk tidak hilang saat kertas habis atau koneksi terputus",
      "Dukungan printer ESC/POS universal (Epson, Xprinter, Panda, Iware, Zywell)",
      "Format struk rapi dengan logo kafe, barcode transaksi, dan qr meja",
    ],
    codeSnippet: `// ESC/POS Thermal Buffer Generator
const encoder = new EscPosEncoder();
const buffer = encoder
  .initialize()
  .align('center')
  .line('CAFE ORDER SYSTEM')
  .line('--------------------------------')
  .align('left')
  .line('Meja: #05          Pesanan: #1042')
  .line('2x Iced Sea Salt Latte  Rp 64.000')
  .line('1x Butter Croissant     Rp 26.000')
  .line('--------------------------------')
  .align('right')
  .line('Total: Rp 90.000')
  .cut()
  .encode();`,
    language: "typescript",
  },
  {
    id: "multitenant",
    name: "Multi-Tenant Scoping Middleware",
    tag: "Data Terisolasi Aman",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    summary:
      "Isolasi data ketat di setiap query API. Staf atau pelanggan kafe A mustahil melihat menu, pesanan, atau mutasi keuangan kafe B.",
    details: [
      "Global Eloquent Scope otomatis menyaring query berdasarkan tenant_id aktif",
      "Kebijakan otorisasi Laravel Sanctum terverifikasi di level middleware",
      "Dukungan custom domain atau subdomain untuk brand kafe mandiri",
      "Manajemen penarikan saldo (Payout) terpisah dengan rekening bank masing-masing",
    ],
    codeSnippet: `// Auto Tenant Scoping Trait
trait BelongsToTenant {
    protected static function bootBelongsToTenant(): void {
        static::addGlobalScope('tenant', function (Builder $builder) {
            if ($tenantId = auth()->user()?->tenant_id) {
                $builder->where('tenant_id', $tenantId);
            }
        });

        static::creating(function ($model) {
            $model->tenant_id = auth()->user()?->tenant_id;
        });
    }
}`,
    language: "php",
  },
];

export const TechStackShowcase: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState(TECH_FEATURES[0].id);
  const [copied, setCopied] = useState(false);

  const activeItem = TECH_FEATURES.find((t) => t.id === selectedTech) || TECH_FEATURES[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeItem.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="teknologi" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>ENGINEERING &amp; PERFORMANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Fondasi Teknologi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-amber-300">
              Tangguh &amp; Anti-Down
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Dibangun dengan standar rekayasa software modern untuk menjamin sistem tetap responsif,
            kredensial aman, dan tanpa celah race-condition pada puncak kepadatan pengunjung.
          </p>
        </div>

        {/* Tech Selector Nav */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {TECH_FEATURES.map((tech) => {
            const isActive = tech.id === selectedTech;
            return (
              <button
                key={tech.id}
                onClick={() => setSelectedTech(tech.id)}
                className={`p-4 rounded-2xl text-left border transition-all duration-300 ${
                  isActive
                    ? "bg-slate-900 border-brand-500 shadow-xl shadow-brand-500/10 scale-[1.02]"
                    : "bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-xl bg-slate-800">{tech.icon}</div>
                  <span className="text-[10px] font-mono text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/20">
                    {tech.tag}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white truncate">{tech.name}</h4>
              </button>
            );
          })}
        </div>

        {/* Selected Tech Code & Details Display */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Descriptions & Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-500/10 border border-brand-500/30">
                  {activeItem.icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">{activeItem.name}</h3>
                  <span className="text-xs font-mono text-brand-400">{activeItem.tag}</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">{activeItem.summary}</p>

              <div className="space-y-3 pt-2">
                {activeItem.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-300">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Code Snippet */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-inner overflow-hidden">
                {/* Code Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                    <span className="text-xs font-mono text-slate-400 ml-2">
                      {activeItem.language.toUpperCase()} Architecture
                    </span>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800/60 border border-slate-700 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Code Body */}
                <div className="p-4 overflow-x-auto max-h-[340px] text-xs font-mono text-slate-300 leading-relaxed scrollbar-thin">
                  <pre>
                    <code>{activeItem.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
