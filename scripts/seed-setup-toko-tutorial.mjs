import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "5csqqnmu",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Helper: buat text block
function block(key, style, text, marks = []) {
  const children = [];

  if (marks.length === 0 && !text.includes("**")) {
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

function paragraph(key, text) {
  return block(key, "normal", text);
}

async function seed() {
  console.log("📝 Creating tutorial: Setup Toko Pertama...\n");

  const tutorial = {
    _type: "tutorial",
    title: "Setup Toko Pertama di LabaBersih",
    slug: { _type: "slug", current: "setup-toko-pertama" },
    description:
      "Panduan langkah demi langkah cara menambahkan toko pertama kamu di LabaBersih — dari login hingga toko siap dipakai.",
    category: "memulai",
    order: 2,
    publishedAt: new Date().toISOString(),
    body: [
      heading("h1", "Sebelum Mulai"),
      paragraph(
        "p1",
        "Pastikan kamu sudah punya akun LabaBersih yang aktif. Kalau belum, daftar dulu di **app.lababersih.com** — prosesnya cuma butuh email dan password."
      ),
      paragraph(
        "p1b",
        "Tutorial ini akan memandu kamu menambahkan toko pertama. Toko di LabaBersih adalah representasi dari channel penjualan kamu — bisa Shopee, TikTok Shop, atau Mengantar."
      ),

      heading("h2", "Langkah 1: Login ke LabaBersih"),
      paragraph(
        "p2",
        "Buka **app.lababersih.com** di browser, lalu login menggunakan email dan password yang sudah kamu daftarkan."
      ),
      paragraph(
        "p2b",
        "Setelah login, kamu akan masuk ke **Dashboard**. Kalau ini pertama kali, dashboard masih kosong karena belum ada data pesanan."
      ),

      heading("h3", "Langkah 2: Buka Menu Toko"),
      paragraph(
        "p3",
        "Di sidebar kiri, klik menu **Toko**. Halaman ini menampilkan daftar semua toko yang sudah terdaftar di akun LabaBersih kamu."
      ),
      paragraph(
        "p3b",
        "Kalau baru pertama kali, daftar toko masih kosong. Klik tombol **Tambah Toko** untuk mulai menambahkan toko baru."
      ),

      heading("h4", "Langkah 3: Pilih Platform"),
      paragraph(
        "p4",
        "Pilih platform tempat kamu berjualan. Saat ini LabaBersih mendukung tiga platform: **Shopee**, **TikTok Shop**, dan **Mengantar**."
      ),
      paragraph(
        "p4b",
        "Pilih platform yang sesuai dengan toko yang mau kamu tambahkan. Kalau kamu jualan di lebih dari satu platform, nanti bisa tambahkan toko lainnya setelah yang pertama selesai."
      ),

      heading("h5", "Langkah 4: Isi Detail Toko"),
      paragraph(
        "p5",
        "Isi nama toko sesuai dengan nama yang kamu pakai di platform tersebut. Contoh: **\"Toko Hafish Official\"** untuk Shopee, atau **\"Hafish Store\"** untuk TikTok."
      ),
      paragraph(
        "p5b",
        "Nama toko ini akan muncul di seluruh LabaBersih — di dropdown import pesanan, laporan, dan filter. Pakai nama yang mudah dikenali supaya gak bingung kalau punya banyak toko."
      ),

      heading("h6", "Langkah 5: Simpan & Selesai"),
      paragraph(
        "p6",
        "Klik **Simpan** untuk menyimpan toko baru. Toko akan langsung muncul di daftar toko dan siap dipakai untuk import pesanan."
      ),
      paragraph(
        "p6b",
        "Setelah toko terdaftar, langkah selanjutnya adalah **import pesanan pertama**. Buka tutorial **Bulk Import Pesanan** sesuai platform toko kamu (Shopee, TikTok, atau Mengantar)."
      ),

      heading("h7", "Tips"),
      paragraph(
        "p7",
        "Bisa tambah lebih dari satu toko? **Ya.** Kamu bisa menambahkan toko sebanyak yang kamu butuhkan — bahkan beberapa toko di platform yang sama (misal: 2 toko Shopee)."
      ),
      paragraph(
        "p8",
        "Apakah toko bisa dihapus? **Ya**, tapi hati-hati — menghapus toko akan mempengaruhi data pesanan yang sudah terkait dengan toko tersebut."
      ),
      paragraph(
        "p9",
        "Nama toko bisa diubah nanti? **Ya.** Buka menu Toko, klik toko yang mau diubah, lalu edit nama dan simpan."
      ),
    ],
  };

  try {
    const result = await client.create(tutorial);
    console.log(`✓ ${tutorial.title} (${result._id})`);
  } catch (err) {
    console.error(`✗ ${tutorial.title}:`, err.message);
  }

  console.log(
    "\n✅ Done! Tutorial published."
  );
  console.log(
    "Cek di: https://www.lababersih.com/tutorial/setup-toko-pertama"
  );
}

seed();
