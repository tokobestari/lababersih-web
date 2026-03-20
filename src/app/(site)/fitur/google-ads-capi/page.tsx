import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads CAPI + Reporting — LabaBersih",
  description:
    "Kirim data pembelian real ke Google Ads otomatis. Setup 5 menit, tanpa developer, tanpa biaya mahal.",
};

const comparisons = [
  { label: "Google tau iklan mana yang menghasilkan beli", without: false, with: true },
  { label: "Campaign optimize dari data pembelian real", without: false, with: true },
  { label: "ROAS dihitung dari revenue real", without: false, with: true },
  { label: "Budget habis di klik yang gak beli", without: true, with: false },
  { label: "Harus export-import data manual", without: true, with: false },
];

function Check() {
  return (
    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function Cross() {
  return (
    <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function GoogleAdsCAPIPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-sm font-bold text-white">
              L
            </div>
            <span className="text-lg font-semibold text-gray-900">LabaBersih</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/harga" className="hidden text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 sm:block">
              Harga
            </Link>
            <a href="https://app.lababersih.com/register" className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-700">
              Coba Gratis
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <p className="text-sm font-medium text-green-600">Google Ads CAPI + Reporting</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 lg:text-5xl lg:leading-tight">
          Google Ads CAPI yang gak ribet dan gak mahal
        </h1>
        <p className="mt-5 text-lg leading-8 text-gray-600">
          Layanan CAPI untuk Google Ads biasanya butuh developer, setup rumit, dan biaya mahal. LabaBersih bikin ini jadi 5 menit — copy script, paste, selesai.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="https://app.lababersih.com/register" className="rounded-lg bg-green-600 px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-700">
            Mulai Sekarang
          </a>
          <Link href="/harga" className="rounded-lg border border-gray-200 px-6 py-3 text-center text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
            Lihat Harga
          </Link>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-gray-100 bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
            Google Ads cuma tau siapa yang klik — bukan siapa yang beli
          </h2>
          <p className="mt-4 text-gray-600">
            Tanpa data pembelian, Google optimize ke klik termurah. Bukan ke pembeli. Budget habis, penjualan gak naik.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
            Tanpa vs Dengan CAPI
          </h2>
          <div className="mt-8 overflow-hidden rounded-xl border border-gray-100 shadow-sm">
            <div className="grid grid-cols-[1fr_80px_80px] bg-gray-50/60 px-5 py-3 sm:grid-cols-[1fr_120px_120px]">
              <span />
              <span className="text-center text-xs font-medium text-red-500">Tanpa</span>
              <span className="text-center text-xs font-medium text-green-600">Dengan</span>
            </div>
            <div className="divide-y divide-gray-50">
              {comparisons.map((c) => (
                <div key={c.label} className="grid grid-cols-[1fr_80px_80px] items-center px-5 py-3 sm:grid-cols-[1fr_120px_120px]">
                  <span className="text-sm text-gray-700">{c.label}</span>
                  <div className="flex justify-center">{c.without ? <Check /> : <Cross />}</div>
                  <div className="flex justify-center">{c.with ? <Check /> : <Cross />}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-gray-100 bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
            Setup 5 menit
          </h2>
          <div className="mt-8 space-y-4">
            {[
              { num: "1", text: "Copy script dari LabaBersih — token sudah terisi otomatis" },
              { num: "2", text: "Paste ke Google Ads Scripts, klik Run" },
              { num: "3", text: "Selesai. Data iklan masuk ke LabaBersih, data pembelian terkirim ke Google Ads — otomatis setiap jam" },
            ].map((s) => (
              <div key={s.num} className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
                  {s.num}
                </span>
                <p className="text-sm leading-6 text-gray-700 pt-0.5">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-100 bg-green-600 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-xl font-bold text-white lg:text-2xl">
            Biar Google Ads kerja dari data pembelian real
          </h2>
          <p className="mt-3 text-green-100">
            Setup 5 menit. Jalan otomatis setiap jam.
          </p>
          <a
            href="https://app.lababersih.com/register"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-green-700 shadow-sm transition-colors hover:bg-green-50"
          >
            Coba Gratis Sekarang
          </a>
          <p className="mt-3 text-xs text-green-200">
            Tersedia di paket Pro — Rp 399.000/bulan
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-green-600 text-xs font-bold text-white">
              L
            </div>
            <span className="text-sm font-medium text-gray-900">LabaBersih</span>
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/harga" className="text-sm text-gray-500 transition-colors hover:text-gray-700">Harga</Link>
            <Link href="/tutorial" className="text-sm text-gray-500 transition-colors hover:text-gray-700">Tutorial</Link>
            <Link href="/tentang" className="text-sm text-gray-500 transition-colors hover:text-gray-700">Tentang</Link>
          </div>
          <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} LabaBersih</p>
        </div>
      </footer>
    </div>
  );
}
