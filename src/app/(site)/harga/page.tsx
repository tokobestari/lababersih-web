import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harga — LabaBersih",
  description:
    "Mulai gratis, upgrade kapan aja. Lihat paket & harga LabaBersih untuk seller online Indonesia.",
};

const tiers = [
  {
    name: "Free",
    price: "Gratis",
    priceNote: "selamanya",
    orders: "200",
    members: "1",
    shops: "1",
    cta: "Mulai Gratis",
    href: "https://app.lababersih.com/register",
    highlighted: false,
  },
  {
    name: "Starter",
    price: "Rp 149.000",
    priceNote: "/bulan",
    orders: "1.500",
    members: "3",
    shops: "3",
    cta: "Pilih Starter",
    href: "https://app.lababersih.com/register?tier=starter",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "Rp 399.000",
    priceNote: "/bulan",
    orders: "8.000",
    members: "10",
    shops: "Unlimited",
    cta: "Pilih Pro",
    href: "https://app.lababersih.com/register?tier=pro",
    highlighted: true,
  },
  {
    name: "Suhu",
    price: "Rp 1.499.000",
    priceNote: "/bulan",
    orders: "50.000",
    members: "Unlimited",
    shops: "Unlimited",
    cta: "Pilih Suhu",
    href: "https://app.lababersih.com/register?tier=suhu",
    highlighted: false,
  },
];

const coreFeatures = [
  "Import pesanan",
  "Rekonsiliasi otomatis",
  "Hitung laba bersih",
  "HPP FIFO",
  "Kalkulator harga",
  "Manajemen gudang & stok",
  "Packing & fulfillment",
  "Purchase order",
  "RTS & klaim management",
  "Jurnal otomatis",
];

const proFeatures = [
  {
    name: "API integration (TikTok, Mengantar)",
    free: false,
    starter: false,
    pro: true,
    suhu: true,
  },
  {
    name: "Dashboard Marketing",
    free: false,
    starter: false,
    pro: true,
    suhu: true,
  },
  {
    name: "AI Analytics",
    free: false,
    starter: false,
    pro: false,
    suhu: true,
  },
];

type FeatureRow = {
  name: string;
  free: boolean;
  starter: boolean;
  pro: boolean;
  suhu: boolean;
  comingSoon?: boolean;
};

const reportFeatures: FeatureRow[] = [
  {
    name: "Laporan dasar (Laba Rugi, Neraca, Buku Besar)",
    free: true,
    starter: true,
    pro: true,
    suhu: true,
  },
  {
    name: "Laba per produk",
    free: false,
    starter: false,
    pro: true,
    suhu: true,
    comingSoon: true,
  },
  {
    name: "Laba per platform",
    free: false,
    starter: false,
    pro: true,
    suhu: true,
    comingSoon: true,
  },
  {
    name: "Trend & perbandingan bulan",
    free: false,
    starter: false,
    pro: true,
    suhu: true,
    comingSoon: true,
  },
];

const supportFeatures: FeatureRow[] = [
  {
    name: "WhatsApp support",
    free: true,
    starter: true,
    pro: true,
    suhu: true,
  },
  {
    name: "Priority support",
    free: false,
    starter: false,
    pro: true,
    suhu: true,
  },
];

const faqs = [
  {
    q: "Bisa ganti paket kapan aja?",
    a: "Bisa. Upgrade atau downgrade kapan aja tanpa penalti. Perubahan berlaku di billing period berikutnya.",
  },
  {
    q: "Gimana cara bayar?",
    a: "Transfer bank atau virtual account. Setelah daftar, kamu bisa pilih metode pembayaran di dalam aplikasi.",
  },
  {
    q: "Ada trial gak?",
    a: "Paket Free bisa dipakai selamanya — gak ada batas waktu. Kalau mau coba fitur lebih, langsung upgrade aja.",
  },
  {
    q: "Kiriman yang dihitung apa aja?",
    a: "Semua kiriman yang di-import ke LabaBersih dalam satu bulan. Termasuk kiriman dari Shopee, TikTok Shop, Mengantar, dan platform lain yang terhubung.",
  },
];

function Check() {
  return (
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
  );
}

function Cross() {
  return (
    <svg
      className="h-5 w-5 text-gray-300"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function FeatureTable({
  title,
  features,
}: {
  title: string;
  features: FeatureRow[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[600px] text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left">
              <th className="pb-3 pr-4 font-medium text-gray-500">Fitur</th>
              <th className="pb-3 px-4 text-center font-medium text-gray-500">
                Free
              </th>
              <th className="pb-3 px-4 text-center font-medium text-gray-500">
                Starter
              </th>
              <th className="pb-3 px-4 text-center font-medium text-green-600">
                Pro
              </th>
              <th className="pb-3 px-4 text-center font-medium text-gray-500">
                Suhu
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {features.map((f) => (
              <tr key={f.name}>
                <td className="py-3 pr-4 text-gray-700">
                  {f.name}
                  {f.comingSoon && (
                    <span className="ml-2 inline-block rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">
                      Coming Soon
                    </span>
                  )}
                </td>
                <td className="py-3 px-4">
                  <div className="flex justify-center">
                    {f.free ? <Check /> : <Cross />}
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex justify-center">
                    {f.starter ? <Check /> : <Cross />}
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex justify-center">
                    {f.pro ? <Check /> : <Cross />}
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex justify-center">
                    {f.suhu ? <Check /> : <Cross />}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function HargaPage() {
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
      <section className="mx-auto max-w-4xl px-6 py-16 text-center lg:py-24">
        <h1 className="text-3xl font-bold leading-tight text-gray-900 lg:text-5xl lg:leading-tight">
          Harga yang pas untuk toko kamu
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-gray-600">
          Mulai gratis, upgrade kapan aja. Gak ada kontrak.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-6xl px-6 pb-16 lg:pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-xl border px-5 py-6 ${
                tier.highlighted
                  ? "border-green-600 shadow-lg shadow-green-600/10 ring-1 ring-green-600 lg:scale-105"
                  : "border-gray-100 shadow-sm"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-3 py-0.5 text-xs font-semibold text-white">
                  Terbaik
                </span>
              )}

              <h3
                className={`text-lg font-bold ${tier.highlighted ? "text-green-600" : "text-gray-900"}`}
              >
                {tier.name}
              </h3>

              <div className="mt-4">
                <span className="text-2xl font-bold text-gray-900">
                  {tier.price}
                </span>
                <span className="ml-1 text-sm text-gray-500">
                  {tier.priceNote}
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <Check />
                  <span>
                    <span className="font-medium">{tier.orders}</span> kiriman/bulan
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check />
                  <span>
                    <span className="font-medium">{tier.members}</span> anggota
                    tim
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check />
                  <span>
                    <span className="font-medium">{tier.shops}</span> toko
                    marketplace
                  </span>
                </li>
              </ul>

              <a
                href={tier.href}
                className={`mt-8 block rounded-lg px-4 py-2.5 text-center text-sm font-medium transition-colors ${
                  tier.highlighted
                    ? "bg-green-600 text-white shadow-sm hover:bg-green-700"
                    : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="border-t border-gray-100 bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
            Bandingkan semua fitur
          </h2>

          {/* Core features */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900">
              Fitur Utama
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Semua tier dapat akses fitur utama berikut:
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {coreFeatures.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                  <Check />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Pro features table */}
          <div className="mt-12">
            <FeatureTable title="Fitur Pro & Suhu" features={proFeatures} />
          </div>

          {/* Report features table */}
          <div className="mt-12">
            <FeatureTable title="Laporan" features={reportFeatures} />
          </div>

          {/* Support features table */}
          <div className="mt-12">
            <FeatureTable title="Support" features={supportFeatures} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
            Pertanyaan yang sering ditanya
          </h2>
          <div className="mt-8 divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white shadow-sm">
            {faqs.map((faq) => (
              <div key={faq.q} className="px-5 py-4">
                <h3 className="text-sm font-semibold text-gray-900">
                  {faq.q}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-100 bg-green-600 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-xl font-bold text-white lg:text-2xl">
            Coba gratis sekarang
          </h2>
          <p className="mt-3 text-green-100">
            Gak perlu kartu kredit. Langsung pakai hari ini.
          </p>
          <a
            href="https://app.lababersih.com/register"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-green-700 shadow-sm transition-colors hover:bg-green-50"
          >
            Mulai Sekarang
          </a>
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
