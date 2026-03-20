import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads CAPI + Reporting — LabaBersih",
  description:
    "Kirim data pembelian real ke Google Ads otomatis. Google tau iklan mana yang menghasilkan penjualan — bukan cuma klik.",
};

const steps = [
  {
    num: "1",
    title: "Pasang Script",
    desc: "Copy-paste script ke Google Ads. Token sudah terisi otomatis, gak perlu edit apa-apa.",
  },
  {
    num: "2",
    title: "Data Mengalir Otomatis",
    desc: "Setiap jam, data iklan masuk ke LabaBersih. Setiap ada pembelian, langsung terkirim balik ke Google Ads.",
  },
  {
    num: "3",
    title: "Google Jadi Lebih Pintar",
    desc: "Google Ads tau iklan mana yang menghasilkan penjualan. Campaign optimize sendiri — budget gak terbuang ke klik yang gak beli.",
  },
];

const benefits = [
  {
    title: "ROAS yang Akurat",
    desc: "Tau persis berapa rupiah yang kembali dari setiap rupiah yang dikeluarkan untuk iklan.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Campaign Lebih Efisien",
    desc: "Google optimize berdasarkan data pembelian real — bukan cuma klik atau form submit.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Gak Perlu Developer",
    desc: "Setup 5 menit. Copy script, paste, selesai. Tanpa coding, tanpa approval API.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Spend + Revenue Satu Dashboard",
    desc: "Lihat spend, CPC, ROAS, dan revenue dari Google Ads langsung di LabaBersih. Gak perlu buka banyak tab.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
];

const comparisons = [
  { label: "Tau iklan mana yang menghasilkan penjualan", without: false, with: true },
  { label: "Google optimize berdasarkan data pembelian", without: false, with: true },
  { label: "ROAS dihitung dari revenue real", without: false, with: true },
  { label: "Budget iklan terbuang ke klik tanpa beli", without: true, with: false },
  { label: "Manual export-import data", without: true, with: false },
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
      <section className="mx-auto max-w-4xl px-6 py-16 text-center lg:py-24">
        <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
          Google Ads CAPI + Reporting
        </span>
        <h1 className="mt-6 text-3xl font-bold leading-tight text-gray-900 lg:text-5xl lg:leading-tight">
          Google Ads tau mana iklan<br className="hidden lg:block" /> yang menghasilkan penjualan
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          Data pembelian real otomatis terkirim ke Google Ads. Campaign jadi lebih pintar, budget lebih efisien — tanpa setup ribet.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href="https://app.lababersih.com/register" className="rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-700">
            Mulai Sekarang
          </a>
          <Link href="/harga" className="rounded-lg border border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
            Lihat Harga
          </Link>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-gray-100 bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
            Masalah iklan Google tanpa data konversi
          </h2>
          <p className="mt-4 text-gray-600">
            Google Ads cuma tau siapa yang <strong>klik</strong> iklan kamu. Tapi gak tau siapa yang <strong>beli</strong>. Akibatnya Google optimize ke arah yang salah — banyak klik, sedikit beli, budget habis.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-center text-xl font-bold text-gray-900 lg:text-2xl">
            Tanpa vs Dengan CAPI
          </h2>
          <div className="mt-10 overflow-hidden rounded-xl border border-gray-100 shadow-sm">
            <div className="grid grid-cols-[1fr_80px_80px] bg-gray-50/60 px-5 py-3 sm:grid-cols-[1fr_120px_120px]">
              <span className="text-xs font-medium text-gray-500" />
              <span className="text-center text-xs font-medium text-red-500">Tanpa</span>
              <span className="text-center text-xs font-medium text-green-600">Dengan</span>
            </div>
            <div className="divide-y divide-gray-50">
              {comparisons.map((c) => (
                <div key={c.label} className="grid grid-cols-[1fr_80px_80px] items-center px-5 py-3 sm:grid-cols-[1fr_120px_120px]">
                  <span className="text-sm text-gray-700">{c.label}</span>
                  <div className="flex justify-center">
                    {c.without ? <Check /> : <Cross />}
                  </div>
                  <div className="flex justify-center">
                    {c.with ? <Check /> : <Cross />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-gray-100 bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-xl font-bold text-gray-900 lg:text-2xl">
            Setup 5 menit, jalan otomatis selamanya
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                  {s.num}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-xl font-bold text-gray-900 lg:text-2xl">
            Apa yang kamu dapat
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-gray-100 p-5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                  {b.icon}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-gray-900">{b.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-100 bg-green-600 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-xl font-bold text-white lg:text-2xl">
            Biar Google Ads kerja lebih pintar
          </h2>
          <p className="mt-3 text-green-100">
            Mulai kirim data pembelian real ke Google Ads. Setup 5 menit.
          </p>
          <a
            href="https://app.lababersih.com/register"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-green-700 shadow-sm transition-colors hover:bg-green-50"
          >
            Coba Gratis Sekarang
          </a>
          <p className="mt-3 text-xs text-green-200">
            Tersedia di paket Pro (Rp 399.000/bulan)
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
