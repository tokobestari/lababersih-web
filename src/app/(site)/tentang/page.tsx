import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami — LabaBersih",
  description:
    "LabaBersih adalah platform manajemen keuangan dan inventori untuk penjual online Indonesia.",
};

const INTEGRATIONS = [
  {
    name: "Google Ads",
    desc: "Sync biaya iklan harian (spend, clicks, impressions, CPC, CPM) untuk kalkulasi ROAS dan net profit.",
  },
  {
    name: "Facebook / Meta Ads",
    desc: "Tracking spend sosial media dan performa kampanye LP Form & CTWA.",
  },
  {
    name: "TikTok Ads",
    desc: "GMV Max dan Web Conversion spend tracking otomatis.",
  },
  {
    name: "TikTok Shop",
    desc: "Sync pesanan, settlement, dan return dari TikTok Seller Center.",
  },
  {
    name: "Shopee",
    desc: "Sync pesanan dan rekonsiliasi settlement marketplace.",
  },
  {
    name: "Mengantar",
    desc: "Sync pesanan COD, RTS, dan settlement.",
  },
];

const FEATURES = [
  {
    title: "Laporan keuangan otomatis",
    desc: "Jurnal, neraca, laba rugi, arus kas — semua otomatis dari data pesanan.",
  },
  {
    title: "Manajemen pesanan",
    desc: "Import dari Shopee, TikTok Shop, Mengantar. Satu dashboard untuk semua channel.",
  },
  {
    title: "Inventori & gudang",
    desc: "Stok realtime, FIFO HPP, multi-gudang, packing session.",
  },
  {
    title: "Dashboard marketing",
    desc: "Tracking biaya iklan Google Ads, Facebook Ads, TikTok Ads dengan ROAS, ACoS, dan profit per toko.",
  },
  {
    title: "Rekonsiliasi settlement",
    desc: "Cocokkan data settlement marketplace dengan catatan keuangan secara otomatis.",
  },
];

export default function TentangPage() {
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
        <p className="text-sm font-medium text-green-600">Tentang Kami</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 lg:text-5xl lg:leading-tight">
          Dibangun dari kebutuhan nyata, bukan imajinasi.
        </h1>
        <p className="mt-5 text-lg leading-8 text-gray-600">
          LabaBersih bukan dibuat untuk jadi produk. Kami bangun karena tim kami
          sendiri butuh. Lalu orang lain lihat dan minta ikut pakai. Sesederhana
          itu.
        </p>
      </section>

      {/* Content */}
      <section className="border-t border-gray-100 bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-6">
          {/* Apa yang kami bangun */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
              Apa yang kami bangun
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Satu dashboard yang menyederhanakan kehidupan penjual online.
              Bukan ERP, bukan software yang butuh training. Cukup buka, pakai,
              selesai.
            </p>
            <div className="mt-6 space-y-4">
              {FEATURES.map((item) => (
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

          {/* Integrasi platform */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
              Integrasi platform
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              LabaBersih terintegrasi dengan berbagai platform iklan dan
              marketplace untuk menyederhanakan pelaporan:
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {INTEGRATIONS.map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm"
                >
                  <h3 className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tim */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
              Tim
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              LabaBersih dibangun dan dikelola oleh{" "}
              <span className="font-medium text-gray-900">
                PT Tumbuh Dari Desa
              </span>
              , berbasis di Kediri, Jawa Timur, Indonesia.
            </p>
            <div className="mt-6 rounded-xl border border-gray-100 bg-white px-5 py-5 shadow-sm">
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="text-xs font-medium text-gray-500">Alamat</p>
                  <p className="mt-0.5">
                    Dsn. Ngasem, Desa Ngasem, Kec. Ngasem
                    <br />
                    Kab. Kediri, Jawa Timur 64181, Indonesia
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500">Kontak</p>
                  <p className="mt-0.5">
                    Email:{" "}
                    <a
                      href="mailto:halo@lababersih.com"
                      className="font-medium text-green-600 hover:text-green-700"
                    >
                      halo@lababersih.com
                    </a>
                  </p>
                  <p>Telepon: +62 812 7075 3975</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500">NIB</p>
                  <p className="mt-0.5">2003230004843</p>
                </div>
              </div>
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
          <div className="flex items-center gap-6">
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
