import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi — LabaBersih",
  description:
    "Kebijakan privasi LabaBersih. Kami jelasin sejujur-jujurnya soal data kamu.",
};

const lastUpdated = "18 Maret 2026";

export default function KebijakanPrivasiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-sm font-bold text-white">
              L
            </div>
            <span className="text-lg font-semibold text-gray-900">
              LabaBersih
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/tutorial"
              className="hidden text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 sm:block"
            >
              Tutorial
            </Link>
            <Link
              href="/harga"
              className="hidden text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 sm:block"
            >
              Harga
            </Link>
            <a
              href="https://app.lababersih.com"
              className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-700"
            >
              Buka Aplikasi
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <p className="text-sm font-medium text-green-600">
          Terakhir diperbarui: {lastUpdated}
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 lg:text-5xl lg:leading-tight">
          Kebijakan Privasi
        </h1>
        <p className="mt-5 text-lg leading-8 text-gray-600">
          Kami gak suka baca kebijakan privasi yang panjang dan penuh bahasa
          hukum. Jadi kami tulis ini sejujur dan sesederhana mungkin. Kalau ada
          yang gak jelas, tanya aja — kami bales.
        </p>
      </section>

      {/* Content */}
      <section className="border-t border-gray-100 bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-6">
          {/* Siapa Kami */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
              Siapa kami
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              LabaBersih adalah aplikasi keuangan untuk seller online Indonesia.
              Kami bantu kamu ngitung laba bersih yang beneran — bukan cuma
              omzet. Website kami ada di{" "}
              <span className="font-medium text-gray-900">lababersih.com</span>{" "}
              dan aplikasinya di{" "}
              <span className="font-medium text-gray-900">
                app.lababersih.com
              </span>
              .
            </p>
          </div>

          {/* Data yang kami kumpulkan */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
              Data apa aja yang kami kumpulkan
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Jujur aja, kami cuma kumpulin data yang emang perlu biar aplikasi
              bisa jalan. Gak lebih.
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Data akun",
                  desc: "Nama, email, dan password (yang di-hash, kami sendiri gak bisa baca). Ini buat login dan identifikasi akun kamu.",
                },
                {
                  title: "Data toko & pesanan",
                  desc: "Info toko marketplace, data pesanan, HPP, fee, ongkir — semua yang kamu input atau import ke LabaBersih. Ini inti dari aplikasinya.",
                },
                {
                  title: "Data penggunaan",
                  desc: "Halaman yang dikunjungi, fitur yang dipakai, error yang terjadi. Ini buat kami tau bagian mana yang perlu diperbaiki.",
                },
                {
                  title: "Cookies",
                  desc: "Kami pakai cookies buat session login dan preferensi dasar. Gak ada cookies tracking iklan dari pihak ketiga.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm"
                >
                  <h3 className="text-sm font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Yang TIDAK kami lakukan */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
              Yang TIDAK kami lakukan
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Ini penting. Biar gak ada salah paham:
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Kami TIDAK jual data kamu ke siapapun. Titik.",
                "Kami TIDAK pasang iklan di dalam aplikasi.",
                "Kami TIDAK share data pesanan kamu ke seller lain.",
                "Kami TIDAK pakai data kamu buat targeting iklan.",
                "Kami TIDAK kirim email spam. Kalau kami email, itu penting.",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-red-100 bg-white px-5 py-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">
                    X
                  </span>
                  <p className="text-sm leading-6 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gimana kami pakai data */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
              Gimana kami pakai data kamu
            </h2>
            <div className="mt-6 divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white shadow-sm">
              {[
                {
                  q: "Biar aplikasi bisa jalan",
                  a: "Data pesanan, toko, dan produk kamu diproses buat ngitung laba bersih, bikin jurnal, dan nampilin laporan. Itu fungsi utamanya.",
                },
                {
                  q: "Biar kami bisa perbaiki aplikasi",
                  a: "Data penggunaan (bukan data bisnis kamu) kami pake buat tau fitur mana yang sering dipake, mana yang error, dan mana yang perlu diperbaiki.",
                },
                {
                  q: "Biar kami bisa hubungi kamu kalau perlu",
                  a: "Email kamu kami pake buat notifikasi penting — misalnya perubahan layanan, masalah keamanan, atau info billing. Bukan buat promosi tiap minggu.",
                },
              ].map((item) => (
                <div key={item.q} className="px-5 py-4">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {item.q}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Penyimpanan & Keamanan */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
              Penyimpanan & keamanan data
            </h2>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Di mana data disimpan",
                  desc: "Data kamu disimpan di server cloud yang aman. Kami pakai layanan infrastruktur terpercaya dengan enkripsi standar industri.",
                },
                {
                  title: "Enkripsi",
                  desc: "Semua koneksi ke LabaBersih pakai HTTPS (SSL/TLS). Password di-hash dan gak pernah disimpan dalam bentuk teks biasa.",
                },
                {
                  title: "Akses internal",
                  desc: "Cuma tim LabaBersih yang punya akses ke infrastruktur. Dan itupun terbatas — gak semua orang bisa lihat data pengguna.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm"
                >
                  <h3 className="text-sm font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pihak Ketiga */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
              Pihak ketiga
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Kami pakai beberapa layanan pihak ketiga buat menjalankan
              LabaBersih. Misalnya: hosting, database, email transaksional, dan
              analytics. Layanan ini cuma dapat akses data yang mereka butuhkan
              buat fungsinya — gak lebih.
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Kami gak pake layanan yang bisnis modelnya jualan data pengguna.
              Kalau ada perubahan vendor yang signifikan, kami akan update
              halaman ini.
            </p>

            <h3 className="mt-6 text-base font-bold text-gray-900">
              Integrasi platform iklan & marketplace
            </h3>
            <p className="mt-2 text-sm leading-7 text-gray-700">
              Kalau kamu menghubungkan akun platform iklan atau marketplace ke
              LabaBersih, kami mengakses data berikut{" "}
              <span className="font-medium text-gray-900">
                atas izin kamu (OAuth)
              </span>
              :
            </p>
            <div className="mt-4 space-y-3">
              {[
                {
                  title: "Google Ads",
                  desc: "Data pengeluaran iklan harian (spend, impressions, clicks, CPC, CPM). Read-only — kami tidak membuat atau mengubah campaign.",
                },
                {
                  title: "Meta / Facebook Ads",
                  desc: "Data pengeluaran iklan harian (spend, impressions, clicks). Diakses melalui Meta Marketing API. Read-only.",
                },
                {
                  title: "TikTok Ads",
                  desc: "Data spend GMV Max dan Web Conversion (cost, impressions, clicks). Read-only.",
                },
                {
                  title: "TikTok Shop & Shopee",
                  desc: "Data pesanan, settlement, dan return untuk sinkronisasi otomatis ke dashboard.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm"
                >
                  <h4 className="text-sm font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-7 text-gray-700">
              Data dari platform ini{" "}
              <span className="font-medium text-gray-900">
                hanya digunakan untuk dashboard marketing di LabaBersih
              </span>
              . Kami tidak membagikan data platform-mu ke pihak lain. Kamu bisa
              mencabut akses kapan saja dari halaman Pengaturan &gt; Integrasi.
            </p>
          </div>

          {/* Penghapusan Data */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
              Penghapusan data
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Kamu bisa meminta penghapusan seluruh data akun kamu kapan saja
              dengan menghubungi{" "}
              <a
                href="mailto:halo@lababersih.com"
                className="font-medium text-green-600 hover:text-green-700"
              >
                halo@lababersih.com
              </a>
              . Setelah permintaan diterima, kami akan menghapus semua data
              secara permanen dalam maksimal 30 hari. Ini termasuk data akun,
              data bisnis, dan data dari integrasi platform pihak ketiga.
            </p>
          </div>

          {/* Hak Kamu */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
              Hak kamu atas data kamu
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Data kamu ya punya kamu. Berikut hak yang kamu punya:
            </p>
            <div className="mt-6 space-y-3">
              {[
                {
                  title: "Akses",
                  desc: "Kamu bisa lihat semua data yang tersimpan di akun kamu kapan aja lewat aplikasi.",
                },
                {
                  title: "Export",
                  desc: "Kamu bisa export data kamu. Kami gak mau kamu merasa 'terjebak' di platform kami.",
                },
                {
                  title: "Hapus",
                  desc: "Mau hapus akun? Hubungi kami, dan kami akan hapus semua data kamu secara permanen. Gak ada drama.",
                },
                {
                  title: "Koreksi",
                  desc: "Kalau ada data yang salah, kamu bisa ubah sendiri lewat aplikasi atau minta kami bantu.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50">
                    <svg
                      className="h-5 w-5 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Perubahan Kebijakan */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
              Kalau kebijakan ini berubah
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Kalau ada perubahan yang signifikan, kami akan kasih tau lewat
              email atau notifikasi di aplikasi. Kami gak akan diam-diam ubah
              kebijakan terus berharap gak ada yang nyadar. Tanggal &ldquo;terakhir
              diperbarui&rdquo; di atas halaman ini selalu menunjukkan versi terbaru.
            </p>
          </div>

          {/* Kontak */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
              Ada pertanyaan?
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Kalau ada yang mau ditanyain soal privasi data kamu di LabaBersih,
              langsung hubungi kami aja. Kami bales — beneran.
            </p>
            <div className="mt-4 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
              <p className="text-sm text-gray-700">
                Email:{" "}
                <a
                  href="mailto:halo@lababersih.com"
                  className="font-medium text-green-600 hover:text-green-700"
                >
                  halo@lababersih.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-green-600 text-xs font-bold text-white">
              L
            </div>
            <span className="text-sm font-medium text-gray-900">
              LabaBersih
            </span>
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              href="/tentang"
              className="text-sm text-gray-500 transition-colors hover:text-gray-700"
            >
              Tentang
            </Link>
            <Link
              href="/kebijakan-privasi"
              className="text-sm text-gray-500 transition-colors hover:text-gray-700"
            >
              Privasi
            </Link>
            <Link
              href="/syarat-ketentuan"
              className="text-sm text-gray-500 transition-colors hover:text-gray-700"
            >
              Syarat
            </Link>
            <Link
              href="/pengembalian-dana"
              className="text-sm text-gray-500 transition-colors hover:text-gray-700"
            >
              Refund
            </Link>
            <a
              href="https://app.lababersih.com"
              className="text-sm text-gray-500 transition-colors hover:text-gray-700"
            >
              Aplikasi
            </a>
          </div>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} LabaBersih
          </p>
        </div>
      </footer>
    </div>
  );
}
