import { createClient } from "@sanity/client";
import { createReadStream } from "fs";
import path from "path";

const client = createClient({
  projectId: "5csqqnmu",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Upload gambar ke Sanity dan return asset reference
async function uploadImage(filePath, filename) {
  try {
    const asset = await client.assets.upload(
      "image",
      createReadStream(filePath),
      { filename }
    );
    console.log(`  📷 Uploaded: ${filename}`);
    return {
      _type: "image",
      _key: `img_${filename.replace(/[^a-z0-9]/gi, "_")}`,
      caption: filename.replace(/^\d+-/, "").replace(/\.png$/, "").replace(/-/g, " "),
      asset: { _type: "reference", _ref: asset._id },
    };
  } catch (err) {
    console.error(`  ✗ Gagal upload ${filename}:`, err.message);
    return null;
  }
}

// Helper: buat text block
function block(key, style, text, marks = []) {
  const children = [];

  if (marks.length === 0) {
    children.push({ _type: "span", _key: `${key}_s`, text });
  } else {
    // Split text by **bold** markers
    const parts = text.split(/(\*\*[^*]+\*\*)/);
    parts.forEach((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        children.push({
          _type: "span",
          _key: `${key}_s${i}`,
          text: part.slice(2, -2),
          marks: ["strong"],
        });
      } else if (part) {
        children.push({
          _type: "span",
          _key: `${key}_s${i}`,
          text: part,
        });
      }
    });
  }

  return { _type: "block", _key: key, style, children };
}

function heading(key, text) {
  return block(key, "h2", text);
}

function subheading(key, text) {
  return block(key, "h3", text);
}

function paragraph(key, text) {
  return block(key, "normal", text, text.includes("**") ? ["parse"] : []);
}

async function seed() {
  console.log("🚀 Uploading screenshots ke Sanity...\n");

  // Upload 4 screenshot Shopee
  const imgDir = path.resolve("public/images/tutorial/shopee");
  const img1 = await uploadImage(`${imgDir}/01-export-pesanan-shopee.png`, "01-export-pesanan-shopee.png");
  const img2 = await uploadImage(`${imgDir}/02-pilih-tanggal-export.png`, "02-pilih-tanggal-export.png");
  const img3 = await uploadImage(`${imgDir}/03-halaman-import-lababersih.png`, "03-halaman-import-lababersih.png");
  const img4 = await uploadImage(`${imgDir}/04-mapping-sku-import.png`, "04-mapping-sku-import.png");

  console.log("\n📝 Creating tutorials...\n");

  const tutorials = [
    // === SHOPEE ===
    {
      _type: "tutorial",
      title: "Bulk Import Pesanan Shopee",
      slug: { _type: "slug", current: "bulk-import-pesanan-shopee" },
      description: "Panduan lengkap cara import pesanan dari Shopee ke LabaBersih secara massal menggunakan file export dari Shopee Seller Center.",
      category: "pesanan",
      order: 11,
      publishedAt: new Date().toISOString(),
      body: [
        heading("h1", "Persiapan"),
        paragraph("p1", "Sebelum mulai, pastikan kamu sudah punya akun LabaBersih yang aktif, toko Shopee sudah terhubung di menu **Toko**, dan punya akses ke **Shopee Seller Center** (seller.shopee.co.id)."),

        heading("h2", "Langkah 1: Export Data Pesanan dari Shopee"),
        paragraph("p2", "Buka **Shopee Seller Center**, lalu masuk ke menu **Pesanan Saya**. Klik tab **Perlu Dikirim** untuk melihat pesanan yang siap diproses, lalu klik tombol **Export** di pojok kanan atas."),
        ...(img1 ? [img1] : []),
        paragraph("p2b", "Pastikan kamu berada di tab \"Perlu Dikirim\" agar yang ter-export hanya pesanan yang relevan."),

        heading("h3", "Langkah 2: Pilih Rentang Tanggal"),
        paragraph("p3", "Setelah klik Export, akan muncul kalender untuk memilih rentang tanggal. Pilih **tanggal awal** dan **tanggal akhir** pesanan yang mau di-export, lalu klik **Export** untuk mengunduh file."),
        ...(img2 ? [img2] : []),
        paragraph("p3b", "Biasanya cukup export pesanan **kemarin sampai hari ini** agar data tidak terlalu banyak dan tetap up-to-date. File yang ter-download berformat Excel (.xlsx)."),

        heading("h4", "Langkah 3: Buka Halaman Import di LabaBersih"),
        paragraph("p4", "Sekarang pindah ke **LabaBersih**. Buka menu **Pesanan** di sidebar kiri, lalu klik tombol **Import** di bagian atas halaman."),
        ...(img3 ? [img3] : []),

        heading("h5", "Langkah 4: Pilih Platform, Toko & Upload File"),
        paragraph("p5", "Di halaman import, pilih platform **Shopee**, pilih **Toko** yang sesuai, lalu upload file Excel yang sudah di-download dari Shopee tadi."),
        paragraph("p5b", "Sistem akan otomatis membaca file dan menampilkan ringkasan: **Total Pesanan** (jumlah semua pesanan), **Dipilih** (siap import), **SKU Match** (produk yang cocok), dan **Belum Mapping** (produk yang belum dikenali)."),
        ...(img4 ? [img4] : []),

        heading("h6", "Langkah 5: Review & Import"),
        paragraph("p6", "Sebelum import, periksa tab **Importable** (pesanan siap masuk), **Unmatched SKU** (perlu mapping SKU dulu di menu Produk), dan **Dilewati** (duplikat atau sudah pernah di-import)."),
        paragraph("p6b", "Kalau sudah yakin, klik **Import** untuk memasukkan semua pesanan ke LabaBersih. Pesanan baru akan muncul dengan status **Dibuat**."),

        heading("h7", "Tips & FAQ"),
        paragraph("p7", "Kenapa ada pesanan di tab \"Dilewati\"? Biasanya karena sudah pernah di-import sebelumnya — LabaBersih otomatis mendeteksi duplikat."),
        paragraph("p8", "Apa itu \"Unmatched SKU\"? Artinya ada produk di file Shopee yang SKU-nya belum terdaftar di LabaBersih. Buka menu **Produk** dan tambahkan mapping SKU-nya dulu."),
        paragraph("p9", "Bisa import dari beberapa toko sekaligus? Tidak dalam satu kali upload. Lakukan import per toko — pilih toko yang sesuai, upload file, lalu ulangi untuk toko lainnya."),
      ],
    },

    // === TIKTOK ===
    {
      _type: "tutorial",
      title: "Bulk Import Pesanan TikTok Shop",
      slug: { _type: "slug", current: "bulk-import-pesanan-tiktok" },
      description: "Panduan lengkap cara import pesanan dari TikTok Shop ke LabaBersih secara massal menggunakan file export dari TikTok Seller Center.",
      category: "pesanan",
      order: 12,
      publishedAt: new Date().toISOString(),
      body: [
        heading("h1", "Persiapan"),
        paragraph("p1", "Sebelum mulai, pastikan kamu sudah punya akun LabaBersih yang aktif, toko TikTok Shop sudah terhubung di menu **Toko**, dan punya akses ke **TikTok Shop Seller Center** (seller-id.tiktok.com)."),

        heading("h2", "Langkah 1: Export Data Pesanan dari TikTok Shop"),
        paragraph("p2", "Buka **TikTok Shop Seller Center**, lalu masuk ke menu **Pesanan**. Klik tab **Menunggu Pengiriman**, lalu klik tombol **Export** di bagian atas."),
        paragraph("p2b", "Sama seperti Shopee, fokus export pesanan yang statusnya siap kirim agar data yang masuk ke LabaBersih relevan."),

        heading("h3", "Langkah 2: Pilih Rentang Tanggal & Download"),
        paragraph("p3", "Pilih **rentang tanggal** pesanan yang mau di-export, lalu klik **Export** untuk mengunduh file. File yang ter-download berformat Excel (.xlsx)."),

        heading("h4", "Langkah 3: Buka Halaman Import di LabaBersih"),
        paragraph("p4", "Buka menu **Pesanan** di sidebar kiri, lalu klik tombol **Import** di bagian atas halaman."),

        heading("h5", "Langkah 4: Pilih Platform, Toko & Upload File"),
        paragraph("p5", "Di halaman import, pilih platform **TikTok**, pilih **Toko** TikTok Shop yang sesuai, lalu upload file Excel yang sudah di-download."),
        paragraph("p5b", "Sistem akan menampilkan ringkasan yang sama seperti Shopee: **Total Pesanan**, **Dipilih**, **SKU Match**, dan **Belum Mapping**. Proses di sisi LabaBersih identik dengan Shopee."),

        heading("h6", "Langkah 5: Review & Import"),
        paragraph("p6", "Periksa tab **Importable**, **Unmatched SKU**, dan **Dilewati**. Kalau sudah yakin, klik **Import**."),

        heading("h7", "Perbedaan TikTok vs Shopee"),
        paragraph("p7", "Dari sisi LabaBersih, proses import identik. Yang berbeda hanya sumber file (TikTok Seller Center vs Shopee Seller Center) dan jenis fee marketplace. TikTok mengenakan **Komisi** dan **Biaya Lainnya**, sedangkan Shopee mengenakan **Admin**, **Layanan**, dan **Proses**. LabaBersih otomatis mengenali dan menghitung fee sesuai platform."),

        heading("h8", "Tips & FAQ"),
        paragraph("p8", "Apakah perlu mapping SKU terpisah? Ya. Mapping SKU bersifat per platform dan per toko. SKU yang sudah di-mapping untuk Shopee tidak otomatis berlaku untuk TikTok."),
        paragraph("p9", "Fee TikTok dihitung otomatis? Ya. Saat import, LabaBersih otomatis membaca kolom fee dari file TikTok dan menghitung profit bersih."),
      ],
    },

    // === MENGANTAR ===
    {
      _type: "tutorial",
      title: "Bulk Import Pesanan Mengantar",
      slug: { _type: "slug", current: "bulk-import-pesanan-mengantar" },
      description: "Panduan cara import pesanan dari Mengantar ke LabaBersih. Mengantar punya model COD offline yang berbeda dari marketplace.",
      category: "pesanan",
      order: 13,
      publishedAt: new Date().toISOString(),
      body: [
        heading("h1", "Perbedaan Mengantar dengan Shopee/TikTok"),
        paragraph("p0", "Sebelum mulai, penting untuk paham bahwa Mengantar punya model yang **berbeda** dari Shopee dan TikTok."),
        paragraph("p0b", "Shopee dan TikTok menggunakan model marketplace (escrow) dengan fee persentase. Mengantar menggunakan model **COD offline** dengan fee flat. Piutang Mengantar sudah dalam bentuk nett (sudah potong ongkir), dan seller tidak dikenakan ongkir RTS lagi."),

        heading("h2", "Persiapan"),
        paragraph("p1", "Pastikan kamu sudah punya akun LabaBersih yang aktif dan toko Mengantar sudah terdaftar di menu **Toko** di LabaBersih."),

        heading("h3", "Langkah 1: Siapkan File Pesanan Mengantar"),
        paragraph("p2", "Dapatkan file data pesanan dari sistem Mengantar. File ini biasanya berformat Excel (.xlsx). Berbeda dengan Shopee/TikTok yang export dari Seller Center, data Mengantar bisa didapat dari **dashboard Mengantar** atau file yang dikirim oleh tim operasional."),

        heading("h4", "Langkah 2: Buka Halaman Import di LabaBersih"),
        paragraph("p3", "Buka menu **Pesanan** di sidebar kiri, lalu klik tombol **Import** di bagian atas halaman."),

        heading("h5", "Langkah 3: Pilih Platform, Toko & Upload File"),
        paragraph("p4", "Di halaman import, pilih platform **Mengantar**, pilih **Toko** yang sesuai, lalu upload file Excel dari Mengantar."),
        paragraph("p4b", "Sistem akan menampilkan ringkasan: **Total Pesanan**, **Dipilih**, **SKU Match**, dan **Belum Mapping**."),

        heading("h6", "Langkah 4: Review & Import"),
        paragraph("p5", "Perhatikan beberapa hal khusus Mengantar: piutang sudah dalam bentuk nett (harga jual dikurangi ongkir), COD fee sudah termasuk PPN, dan tidak ada fee mapping detail seperti Shopee/TikTok (admin fee, service fee, dll) — fee Mengantar bersifat flat."),
        paragraph("p5b", "Kalau data sudah sesuai, klik **Import**."),

        heading("h7", "Tips & FAQ"),
        paragraph("p6", "Kenapa fee Mengantar berbeda? Mengantar menggunakan model COD offline, jadi fee-nya flat (bukan persentase). COD fee sudah termasuk PPN dan dipotong langsung dari nilai pesanan."),
        paragraph("p7", "Bagaimana dengan ongkir? Ongkir sudah dipotong dari piutang (nilai nett). Angka yang masuk ke LabaBersih sudah bersih dari ongkir."),
        paragraph("p8", "Kalau ada RTS di Mengantar? Seller tidak dikenakan ongkir RTS lagi karena piutang sudah nett. Penanganan RTS bisa dilakukan di menu **Return / RTS**."),
        paragraph("p9", "Apakah perlu mapping SKU terpisah? Ya. Mapping SKU bersifat per platform dan per toko. SKU yang sudah di-mapping untuk Shopee/TikTok tidak berlaku untuk Mengantar."),
      ],
    },
  ];

  for (const tutorial of tutorials) {
    try {
      const result = await client.create(tutorial);
      console.log(`✓ ${tutorial.title} (${result._id})`);
    } catch (err) {
      console.error(`✗ ${tutorial.title}:`, err.message);
    }
  }

  console.log("\n✅ Done! Tutorial bulk import published.");
  console.log("Cek di: https://www.lababersih.com/tutorial/bulk-import-pesanan-shopee");
  console.log("Cek di: https://www.lababersih.com/tutorial/bulk-import-pesanan-tiktok");
  console.log("Cek di: https://www.lababersih.com/tutorial/bulk-import-pesanan-mengantar");
}

seed();
