import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "5csqqnmu",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const tutorials = [
  // === MEMULAI ===
  {
    _type: "tutorial",
    title: "Cara Daftar dan Login LabaBersih",
    slug: { _type: "slug", current: "cara-daftar-dan-login" },
    description: "Panduan langkah demi langkah untuk membuat akun dan masuk ke LabaBersih.",
    category: "memulai",
    order: 1,
    publishedAt: new Date().toISOString(),
    body: [
      { _type: "block", _key: "b1", style: "h2", children: [{ _type: "span", _key: "s1", text: "Buat Akun Baru" }] },
      { _type: "block", _key: "b2", style: "normal", children: [{ _type: "span", _key: "s2", text: "Buka app.lababersih.com di browser kamu. Klik tombol \"Daftar\" di halaman utama." }] },
      { _type: "block", _key: "b3", style: "normal", children: [{ _type: "span", _key: "s3", text: "Isi email dan password. Pastikan password minimal 8 karakter. Klik \"Buat Akun\" dan cek email untuk verifikasi." }] },
      { _type: "block", _key: "b4", style: "h2", children: [{ _type: "span", _key: "s4", text: "Login ke Dashboard" }] },
      { _type: "block", _key: "b5", style: "normal", children: [{ _type: "span", _key: "s5", text: "Setelah verifikasi, kembali ke app.lababersih.com. Masukkan email dan password, lalu klik \"Masuk\". Kamu akan langsung masuk ke dashboard utama." }] },
      { _type: "block", _key: "b6", style: "h2", children: [{ _type: "span", _key: "s6", text: "Setup Awal" }] },
      { _type: "block", _key: "b7", style: "normal", children: [{ _type: "span", _key: "s7", text: "Pertama kali masuk, kamu akan diminta mengisi data toko: nama toko, platform yang dipakai (Shopee/TikTok/Mengantar), dan informasi dasar lainnya. Ini cuma perlu dilakukan sekali." }] },
    ],
  },
  {
    _type: "tutorial",
    title: "Mengenal Dashboard LabaBersih",
    slug: { _type: "slug", current: "mengenal-dashboard" },
    description: "Penjelasan setiap bagian di dashboard utama dan cara membaca angka-angkanya.",
    category: "memulai",
    order: 2,
    publishedAt: new Date().toISOString(),
    body: [
      { _type: "block", _key: "b1", style: "h2", children: [{ _type: "span", _key: "s1", text: "Tampilan Dashboard" }] },
      { _type: "block", _key: "b2", style: "normal", children: [{ _type: "span", _key: "s2", text: "Dashboard adalah halaman pertama yang kamu lihat setelah login. Di sini kamu bisa langsung melihat ringkasan keuangan toko: total omzet, laba bersih, jumlah pesanan, dan status RTS." }] },
      { _type: "block", _key: "b3", style: "h2", children: [{ _type: "span", _key: "s3", text: "Angka-angka Penting" }] },
      { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Omzet: total penjualan kotor sebelum dipotong apapun. Laba Bersih: uang yang beneran masuk kantong setelah dipotong HPP, fee marketplace, dan ongkir. Jumlah Pesanan: total order yang masuk di periode yang dipilih." }] },
      { _type: "block", _key: "b5", style: "h2", children: [{ _type: "span", _key: "s5", text: "Filter Periode" }] },
      { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "Kamu bisa filter data berdasarkan periode: hari ini, 7 hari terakhir, bulan ini, atau pilih tanggal custom. Semua angka di dashboard akan otomatis berubah sesuai periode yang dipilih." }] },
    ],
  },
  // === PESANAN ===
  {
    _type: "tutorial",
    title: "Cara Input Pesanan Baru",
    slug: { _type: "slug", current: "cara-input-pesanan" },
    description: "Cara menambahkan pesanan dari Shopee, TikTok, atau Mengantar ke LabaBersih.",
    category: "pesanan",
    order: 3,
    publishedAt: new Date().toISOString(),
    body: [
      { _type: "block", _key: "b1", style: "h2", children: [{ _type: "span", _key: "s1", text: "Tambah Pesanan Manual" }] },
      { _type: "block", _key: "b2", style: "normal", children: [{ _type: "span", _key: "s2", text: "Buka menu \"Pesanan\" di sidebar, lalu klik tombol \"Tambah Pesanan\". Isi data pesanan: platform (Shopee/TikTok/Mengantar), nomor resi, nama pembeli, produk yang dipesan, dan harga jual." }] },
      { _type: "block", _key: "b3", style: "h2", children: [{ _type: "span", _key: "s3", text: "Fee Marketplace Otomatis" }] },
      { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Setelah kamu pilih platform dan isi harga jual, fee marketplace akan otomatis dihitung. Shopee dan TikTok punya persentase fee yang berbeda — LabaBersih sudah tau semua ini, jadi kamu gak perlu hitung manual." }] },
      { _type: "block", _key: "b5", style: "h2", children: [{ _type: "span", _key: "s5", text: "Jurnal Otomatis" }] },
      { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "Begitu pesanan disimpan, jurnal akuntansi otomatis dibuat. Piutang, pendapatan, HPP, dan fee — semuanya tercatat tanpa kamu perlu sentuh. Ini yang bikin LabaBersih beda dari spreadsheet." }] },
    ],
  },
  {
    _type: "tutorial",
    title: "Import Pesanan dari File",
    slug: { _type: "slug", current: "import-pesanan-dari-file" },
    description: "Cara import data pesanan secara bulk menggunakan file dari marketplace.",
    category: "pesanan",
    order: 4,
    publishedAt: new Date().toISOString(),
    body: [
      { _type: "block", _key: "b1", style: "h2", children: [{ _type: "span", _key: "s1", text: "Download Data dari Marketplace" }] },
      { _type: "block", _key: "b2", style: "normal", children: [{ _type: "span", _key: "s2", text: "Pertama, download data pesanan dari marketplace kamu. Di Shopee: buka Seller Centre → Pesanan Saya → Export. Di TikTok Shop: buka TikTok Shop Seller Center → Orders → Export." }] },
      { _type: "block", _key: "b3", style: "h2", children: [{ _type: "span", _key: "s3", text: "Upload ke LabaBersih" }] },
      { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Buka menu \"Import\" di LabaBersih. Pilih platform yang sesuai, lalu upload file yang tadi di-download. LabaBersih akan otomatis membaca dan memproses semua data pesanan." }] },
      { _type: "block", _key: "b5", style: "h2", children: [{ _type: "span", _key: "s5", text: "Review dan Konfirmasi" }] },
      { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "Setelah upload, kamu bisa review daftar pesanan yang akan di-import. Cek apakah datanya sudah benar, lalu klik \"Import\". Semua pesanan beserta jurnalnya akan otomatis dibuat." }] },
    ],
  },
  // === KEUANGAN ===
  {
    _type: "tutorial",
    title: "Cara Baca Laporan Laba Rugi",
    slug: { _type: "slug", current: "cara-baca-laporan-laba-rugi" },
    description: "Panduan memahami laporan laba rugi di LabaBersih tanpa harus ngerti akuntansi.",
    category: "keuangan",
    order: 5,
    publishedAt: new Date().toISOString(),
    body: [
      { _type: "block", _key: "b1", style: "h2", children: [{ _type: "span", _key: "s1", text: "Apa itu Laba Rugi?" }] },
      { _type: "block", _key: "b2", style: "normal", children: [{ _type: "span", _key: "s2", text: "Laporan laba rugi menunjukkan apakah toko kamu untung atau rugi dalam periode tertentu. Sederhananya: Pendapatan dikurangi semua biaya = Laba (atau Rugi kalau minus)." }] },
      { _type: "block", _key: "b3", style: "h2", children: [{ _type: "span", _key: "s3", text: "Komponen Penting" }] },
      { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Pendapatan Bersih: uang yang diterima setelah dipotong fee marketplace. HPP (Harga Pokok Penjualan): modal barang yang terjual. Laba Kotor: Pendapatan Bersih - HPP. Biaya Operasional: ongkir, packaging, dll. Laba Bersih: angka final — ini yang beneran masuk kantong." }] },
      { _type: "block", _key: "b5", style: "h2", children: [{ _type: "span", _key: "s5", text: "Tips Baca Laporan" }] },
      { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "Fokus ke Laba Bersih — itu angka yang paling jujur. Kalau laba kotor tinggi tapi laba bersih rendah, artinya biaya operasional kamu terlalu besar. Cek komponen biaya mana yang paling gede, dan cari cara ngurangin." }] },
    ],
  },
  {
    _type: "tutorial",
    title: "Memahami Jurnal Otomatis",
    slug: { _type: "slug", current: "memahami-jurnal-otomatis" },
    description: "Kenapa LabaBersih bikin jurnal otomatis dan apa artinya untuk keuangan toko kamu.",
    category: "keuangan",
    order: 6,
    publishedAt: new Date().toISOString(),
    body: [
      { _type: "block", _key: "b1", style: "h2", children: [{ _type: "span", _key: "s1", text: "Apa itu Jurnal?" }] },
      { _type: "block", _key: "b2", style: "normal", children: [{ _type: "span", _key: "s2", text: "Jurnal adalah catatan setiap transaksi keuangan. Setiap kali ada uang masuk atau keluar, itu dicatat di jurnal. Di LabaBersih, jurnal dibuat otomatis setiap kamu input pesanan — gak perlu tau debit kredit." }] },
      { _type: "block", _key: "b3", style: "h2", children: [{ _type: "span", _key: "s3", text: "Jurnal Apa Saja yang Dibuat?" }] },
      { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Setiap pesanan menghasilkan beberapa jurnal: pencatatan piutang (uang yang akan diterima dari marketplace), pencatatan pendapatan, pencatatan HPP, dan pencatatan fee marketplace. Semua ini terjadi otomatis." }] },
      { _type: "block", _key: "b5", style: "h2", children: [{ _type: "span", _key: "s5", text: "Kenapa Ini Penting?" }] },
      { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "Dengan jurnal yang rapi, laporan keuangan kamu (laba rugi, neraca) jadi akurat. Kamu bisa tau persis berapa untung, berapa yang masih tertahan di marketplace, dan berapa biaya yang keluar. Tanpa jurnal, semua cuma tebak-tebakan." }] },
    ],
  },
  // === INVENTORI ===
  {
    _type: "tutorial",
    title: "Kelola Stok Produk",
    slug: { _type: "slug", current: "kelola-stok-produk" },
    description: "Cara menambah produk, atur stok awal, dan monitoring stok real-time.",
    category: "inventori",
    order: 7,
    publishedAt: new Date().toISOString(),
    body: [
      { _type: "block", _key: "b1", style: "h2", children: [{ _type: "span", _key: "s1", text: "Tambah Produk Baru" }] },
      { _type: "block", _key: "b2", style: "normal", children: [{ _type: "span", _key: "s2", text: "Buka menu \"Produk\" di sidebar, klik \"Tambah Produk\". Isi nama produk, SKU (kode produk), harga jual, dan HPP (harga modal). Kamu juga bisa set stok awal di sini." }] },
      { _type: "block", _key: "b3", style: "h2", children: [{ _type: "span", _key: "s3", text: "Stok Otomatis Berubah" }] },
      { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Setiap kali ada pesanan masuk, stok otomatis berkurang. Kalau ada RTS (retur), stok otomatis bertambah lagi. Gak perlu update manual — LabaBersih yang ngitung." }] },
      { _type: "block", _key: "b5", style: "h2", children: [{ _type: "span", _key: "s5", text: "Cek Stok Real-time" }] },
      { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "Di halaman Produk, kamu bisa lihat stok terkini setiap produk. Kalau stok menipis, kamu langsung tau dan bisa restock sebelum kehabisan." }] },
    ],
  },
  // === RTS ===
  {
    _type: "tutorial",
    title: "Mengelola Paket RTS (Retur)",
    slug: { _type: "slug", current: "mengelola-paket-rts" },
    description: "Cara mencatat paket retur, menghitung kerugian ongkir, dan mengembalikan stok.",
    category: "rts",
    order: 8,
    publishedAt: new Date().toISOString(),
    body: [
      { _type: "block", _key: "b1", style: "h2", children: [{ _type: "span", _key: "s1", text: "Apa itu RTS?" }] },
      { _type: "block", _key: "b2", style: "normal", children: [{ _type: "span", _key: "s2", text: "RTS (Return to Seller) adalah paket yang dikembalikan ke seller. Bisa karena pembeli menolak, alamat salah, atau paket gagal dikirim. RTS itu rugi — ongkir sudah keluar tapi barang balik lagi." }] },
      { _type: "block", _key: "b3", style: "h2", children: [{ _type: "span", _key: "s3", text: "Catat RTS di LabaBersih" }] },
      { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Buka pesanan yang RTS, ubah statusnya jadi \"RTS\". LabaBersih otomatis: mengembalikan stok produk, mencatat kerugian ongkir, membatalkan piutang dari marketplace, dan mengupdate laporan keuangan." }] },
      { _type: "block", _key: "b5", style: "h2", children: [{ _type: "span", _key: "s5", text: "Pantau Kerugian RTS" }] },
      { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "Di dashboard, kamu bisa lihat total kerugian RTS per periode. Kalau angkanya tinggi, pertimbangkan untuk review packaging, cek alamat lebih teliti, atau evaluasi ekspedisi yang sering gagal kirim." }] },
    ],
  },
  // === LAPORAN ===
  {
    _type: "tutorial",
    title: "Membaca Neraca Keuangan",
    slug: { _type: "slug", current: "membaca-neraca-keuangan" },
    description: "Cara membaca neraca untuk tau posisi keuangan toko kamu saat ini.",
    category: "laporan",
    order: 9,
    publishedAt: new Date().toISOString(),
    body: [
      { _type: "block", _key: "b1", style: "h2", children: [{ _type: "span", _key: "s1", text: "Apa itu Neraca?" }] },
      { _type: "block", _key: "b2", style: "normal", children: [{ _type: "span", _key: "s2", text: "Neraca menunjukkan \"foto\" keuangan toko kamu pada satu titik waktu. Ada 3 komponen: Aset (apa yang kamu punya), Kewajiban (apa yang kamu hutang), dan Modal (selisihnya — ini \"kekayaan bersih\" toko)." }] },
      { _type: "block", _key: "b3", style: "h2", children: [{ _type: "span", _key: "s3", text: "Yang Perlu Kamu Perhatikan" }] },
      { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Piutang Marketplace: uang yang masih ditahan Shopee/TikTok. Ini aset kamu tapi belum cair. Persediaan: nilai stok barang yang kamu punya. Kas: uang cash yang sudah di tangan." }] },
      { _type: "block", _key: "b5", style: "h2", children: [{ _type: "span", _key: "s5", text: "Neraca Harus Balance" }] },
      { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "Total Aset harus sama dengan Total Kewajiban + Modal. Kalau gak balance, ada yang salah di pencatatan. Di LabaBersih, neraca otomatis balance karena semua jurnal dibuat secara double-entry." }] },
    ],
  },
  {
    _type: "tutorial",
    title: "Export dan Cetak Laporan",
    slug: { _type: "slug", current: "export-dan-cetak-laporan" },
    description: "Cara download laporan keuangan untuk keperluan pajak atau arsip.",
    category: "laporan",
    order: 10,
    publishedAt: new Date().toISOString(),
    body: [
      { _type: "block", _key: "b1", style: "h2", children: [{ _type: "span", _key: "s1", text: "Export Laporan" }] },
      { _type: "block", _key: "b2", style: "normal", children: [{ _type: "span", _key: "s2", text: "Buka halaman laporan yang mau di-export (Laba Rugi, Neraca, atau Jurnal). Klik tombol \"Export\" di pojok kanan atas. Pilih format yang diinginkan dan periode waktunya." }] },
      { _type: "block", _key: "b3", style: "h2", children: [{ _type: "span", _key: "s3", text: "Cetak Laporan" }] },
      { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Kalau mau cetak, bisa langsung dari browser: Ctrl+P (atau Cmd+P di Mac). Halaman laporan LabaBersih sudah dioptimasi untuk print — hasilnya rapi dan profesional." }] },
      { _type: "block", _key: "b5", style: "h2", children: [{ _type: "span", _key: "s5", text: "Untuk Keperluan Pajak" }] },
      { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "Laporan dari LabaBersih bisa digunakan sebagai dasar pelaporan pajak usaha. Export laporan laba rugi tahunan dan neraca akhir tahun untuk diserahkan ke konsultan pajak atau dilaporkan sendiri." }] },
    ],
  },
];

async function seed() {
  console.log("Publishing tutorials to Sanity...\n");

  for (const tutorial of tutorials) {
    try {
      const result = await client.create(tutorial);
      console.log(`✓ ${tutorial.title} (${result._id})`);
    } catch (err) {
      console.error(`✗ ${tutorial.title}:`, err.message);
    }
  }

  console.log("\nDone! All tutorials published.");
}

seed();
