export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  variants?: { name: string; price: number }[];
  tags: string[];
}

export const SAMPLE_MENUS: MenuItem[] = [
  {
    id: "m-1",
    name: "Iced Sea Salt Latte",
    category: "Coffee",
    price: 32000,
    description: "Espresso robusta & arabica dengan krim sea salt gurih lembut.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&auto=format&fit=crop&q=80",
    variants: [
      { name: "Regular", price: 32000 },
      { name: "Large", price: 38000 },
    ],
    tags: ["Bestseller", "Signature"],
  },
  {
    id: "m-2",
    name: "Artisan Croissant Butter",
    category: "Bakery",
    price: 26000,
    description: "Flaky & buttery croissant dipanggang fresh setiap pagi.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=80",
    tags: ["Fresh Baked"],
  },
  {
    id: "m-3",
    name: "Creamy Truffle Pasta",
    category: "Mains",
    price: 54000,
    description: "Fettuccine dengan saus krim jamur truffle & taburan parmesan.",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281699?w=500&auto=format&fit=crop&q=80",
    tags: ["Chef Special"],
  },
  {
    id: "m-4",
    name: "Kyoto Matcha Glaze",
    category: "Non-Coffee",
    price: 35000,
    description: "Matcha Uji murni Jepang dengan susu oat creamy dan foam lembut.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&auto=format&fit=crop&q=80",
    tags: ["Favorite"],
  },
];

export const PILLARS = [
  {
    id: "customer",
    badge: "01. Customer App",
    title: "Zero-Install Web App",
    subtitle: "Pesan Instan Tanpa Unduh Aplikasi",
    description:
      "Pelanggan cukup arahkan kamera HP ke QR Meja. Langsung terbuka antarmuka mobile-first yang cepat dan mulus. Dilengkapi Geofence GPS untuk mencegah order iseng dari luar kafe.",
    features: [
      "Scan QR langsung terbuka di browser",
      "Pilihan varian ukuran, es/panas & custom topping",
      "Live order tracking dengan audio alert saat makanan siap",
      "Mendukung Pay Later (Bayar Nanti) maupun Bayar Dulu (QRIS)",
    ],
    tech: "React 18 + Zustand + Framer Motion + Geolocation API",
    color: "from-amber-500/20 to-orange-500/10 border-orange-500/30",
    badgeColor: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  },
  {
    id: "kitchen",
    badge: "02. Kitchen Display System",
    title: "KDS Dapur Tanpa Kertas",
    subtitle: "Dapur Efisien, Bersih & Nol Tiket Hilang",
    description:
      "Gantikan tumpukan struk kertas basah di dapur dengan layar KDS real-time. Pesanan masuk otomatis dengan nada lonceng, terkelompok rapi per varian, dan status diubah dengan 1 ketukan.",
    features: [
      "Notifikasi instan via WebSocket (Laravel Reverb)",
      "Audio chime otomatis saat pesanan baru masuk",
      "Timer durasi masak & pemisahan status (Pending -> Cooking -> Ready)",
      "Satu klik 'Siap Saji' otomatis memanggil pelanggan",
    ],
    tech: "Laravel Reverb WebSockets + TanStack Table + Web Audio",
    color: "from-blue-500/20 to-indigo-500/10 border-blue-500/30",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  {
    id: "cashier",
    badge: "03. Cashier POS & Batching",
    title: "Point of Sale & Sesi Meja",
    subtitle: "Pesan Berkali-kali, 1x Bayar di Kasir",
    description:
      "Kasir dapat melayani pesanan langsung (walk-in) dan menyelesaikan tagihan meja dengan mudah. Pesanan bertahap dari meja yang sama otomatis digabung dalam satu Payment Batch.",
    features: [
      "Fitur Smart Table Batching (Order gabungan otomatis)",
      "Konfirmasi bukti transfer bank & QRIS statis / dinamis",
      "Input pesanan manual kasir cepat dengan shortcut",
      "Cetak ulang struk kasir dan kitchen ticket kapan saja",
    ],
    tech: "Payment Batch Engine + Xendit/Midtrans + Local Storage",
    color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
  {
    id: "printer",
    badge: "04. Printer Thermal Engine",
    title: "Pencetakan Cloud Resilient",
    subtitle: "Cetak Otomatis dari PC Maupun HP Android Bekas",
    description:
      "Solusi cerdas bagi kafe yang tidak memiliki komputer kasir. Gunakan HP Android bekas dicolokkan ke printer via Bluetooth untuk mencetak tiket dapur dan struk kasir dari cloud secara mandiri.",
    features: [
      "Mode Desktop (Node.js) via Raw TCP LAN IP:9100 / Serial USB",
      "Mode Mobile (React Native) via Bluetooth SPP/BLE tanpa PC",
      "Antrean andal di database (tidak ada struk hilang saat koneksi putus)",
      "Format struk termal ESC/POS 58mm & 80mm presisi",
    ],
    tech: "Node.js ESC/POS + React Native Bluetooth Driver + Device Tokens",
    color: "from-purple-500/20 to-pink-500/10 border-purple-500/30",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  },
  {
    id: "analytics",
    badge: "05. Multi-Tenant & SaaS",
    title: "Multi-Cabang & Analitik Live",
    subtitle: "Kendali Penuh Seluruh Cabang Kafe",
    description:
      "Kelola puluhan cabang kafe dalam satu platform. Pantau omzet, menu terlaris, jam-jam tersibuk (*hourly heatmap*), atur bagi hasil platform, serta verifikasi rekening bank penarikan dana (*payout*).",
    features: [
      "Isolasi data aman per tenant (Multi-tenant PostgreSQL)",
      "Laporan analitik omzet & ekspor laporan Excel (XLSX)",
      "Sistem fee bagi hasil platform & otomatisasi payout",
      "Manajemen meja, QR generator massal & hak akses staff",
    ],
    tech: "Laravel 11 REST API + PostgreSQL 16 + Sanctum Auth",
    color: "from-rose-500/20 to-red-500/10 border-rose-500/30",
    badgeColor: "bg-rose-500/20 text-rose-400 border-rose-500/30",
  },
];

export const FAQS = [
  {
    q: "Apakah pelanggan harus mengunduh aplikasi terlebih dahulu?",
    a: "Tidak sama sekali! Pelanggan cukup mengarahkan kamera bawaan HP ke QR Code di meja. Aplikasi web langsung terbuka seketika di browser tanpa perlu registrasi akun atau download apa pun.",
  },
  {
    q: "Bagaimana jika kafe kami tidak memiliki komputer PC kasir?",
    a: "Sistem CafeOrder memiliki aplikasi printer mobile Android. Anda cukup menggunakan HP Android bekas yang terhubung ke printer thermal Bluetooth murah. Pesanan dari meja pelanggan akan otomatis mencetak tiket dapur tanpa perlu PC kasir!",
  },
  {
    q: "Apakah kafe bisa memilih alur Bayar Nanti (Pay Later) atau Bayar Dulu (QRIS)?",
    a: "Sangat bisa! Anda bebas memilih alur pembayaran sesuai konsep kafe Anda. Untuk kafe nongkrong santai, gunakan mode Pay Later (bayar di kasir saat mau pulang). Untuk coffee shop cepat saji atau food court, gunakan mode Pay First QRIS di mana pesanan baru masuk ke dapur setelah pelanggan menyelesaikan pembayaran di HP.",
  },
  {
    q: "Bagaimana jika pelanggan di satu meja memesan berkali-kali?",
    a: "Sistem kami memiliki teknologi Smart Table Batching. Pesanan pertama (misal: 2 kopi) dan pesanan susulan 30 menit kemudian (misal: 1 kentang goreng) otomatis digabung ke dalam satu tagihan meja yang sama untuk dilunasi di akhir.",
  },
  {
    q: "Bagaimana jika koneksi internet kafe sempat terputus?",
    a: "Sistem dilengkapi mekanisme Offline Reconnection Banner & Queue Retry. Pekerjaan cetak di database tetap aman berstatus 'queued' dan otomatis dicetak saat koneksi kembali normal tanpa ada order yang terlewat.",
  },
  {
    q: "Bagaimana cara kerja fitur Geolocation di kafe dan apakah radiusnya bisa diatur?",
    a: "Fitur Geolocation memvalidasi posisi GPS smartphone pelanggan secara otomatis saat membuka menu. Pemilik kafe memiliki kendali penuh untuk mengaktifkan atau menonaktifkan fitur ini, serta mengatur toleransi radius batas (misal: 30 hingga 100 meter) sesuai luas area meja kafe Anda guna mencegah pesanan fiktif dari luar.",
  },
];
