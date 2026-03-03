import Link from "next/link";

const problems = [
  "Gak tau laba bersih sebenarnya berapa — yang keliatan cuma omzet",
  "Fee marketplace dipotong tapi gak pernah direkap",
  "Paket RTS balik, stok berantakan, rugi ongkir gak keitung",
  "Akhir bulan bingung — untung atau rugi?",
  "Udah coba Excel, ribet. Coba app akuntansi, malah pusing",
];

const testimonials = [
  {
    name: "Nely",
    role: "Seller Shopee & TikTok",
    text: "Sebelumnya cuma ngira-ngira untung. Sekarang tiap hari bisa langsung liat laba bersih per pesanan. Gak perlu nunggu akhir bulan.",
  },
  {
    name: "Andi",
    role: "Seller Online",
    text: "Yang paling kerasa itu fitur RTS-nya. Dulu paket retur cuma dicatat seadanya, sekarang jelas kerugiannya berapa.",
  },
  {
    name: "Rina",
    role: "Seller Shopee",
    text: "Awalnya takut ribet kayak app akuntansi lain. Ternyata tinggal input pesanan, jurnal otomatis semua. Gak perlu ngerti akuntansi.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600 text-sm font-bold text-white">
              L
            </div>
            <span className="text-lg font-semibold text-gray-900">
              LabaBersih
            </span>
          </div>
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

      {/* Hero — Problem-first */}
      <section className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <p className="text-sm font-medium text-green-600">
          Untuk seller online Indonesia
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 lg:text-5xl lg:leading-tight">
          Jualan tiap hari, tapi gak tau{" "}
          <span className="text-green-600">untung berapa?</span>
        </h1>
        <p className="mt-5 text-lg leading-8 text-gray-600">
          Omzet kelihatan gede. Tapi setelah dipotong fee marketplace, ongkir,
          HPP, dan retur — berapa sih yang beneran masuk kantong?
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://app.lababersih.com"
            className="rounded-lg bg-green-600 px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-700"
          >
            Coba Gratis — Tanpa Kartu Kredit
          </a>
          <Link
            href="/tutorial"
            className="rounded-lg border border-gray-200 px-6 py-3 text-center text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
          >
            Lihat Tutorial Dulu
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="border-t border-gray-100 bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
            Kalau kamu ngalamin ini, kamu gak sendirian:
          </h2>
          <div className="mt-8 space-y-4">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-red-100 bg-white px-5 py-4"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">
                  {i + 1}
                </span>
                <p className="text-sm leading-6 text-gray-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-sm font-medium text-green-600">Solusinya</p>
          <h2 className="mt-2 text-xl font-bold text-gray-900 lg:text-2xl">
            LabaBersih — satu dashboard, langsung tau laba bersih
          </h2>
          <p className="mt-3 text-gray-600">
            Dibangun dari kebutuhan nyata seller, bukan fitur-fitur imajinasi.
            Gak perlu ngerti akuntansi — tinggal input pesanan, semua otomatis.
          </p>

          <div className="mt-10 space-y-6">
            {[
              {
                title: "Input pesanan → jurnal otomatis",
                desc: "Fee marketplace, HPP, ongkir, semuanya langsung dijurnal. Gak perlu hitung manual.",
                icon: "📋",
              },
              {
                title: "Multi-platform dalam satu tempat",
                desc: "Shopee, TikTok Shop, Mengantar — data dari semua platform terkumpul di satu dashboard.",
                icon: "🏪",
              },
              {
                title: "RTS? Tinggal klik, kerugian keitung",
                desc: "Paket retur langsung tercatat. Stok balik, ongkir rugi ter-record, gak ada yang kelewat.",
                icon: "📦",
              },
              {
                title: "Laporan real-time, bukan akhir bulan",
                desc: "Laba bersih, HPP, fee — semua angka penting bisa dicek kapan aja. Gak perlu nunggu.",
                icon: "📊",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-lg">
                  {item.icon}
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
      </section>

      {/* Social Proof */}
      <section className="border-t border-gray-100 bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
            Kata mereka yang udah pakai
          </h2>
          <div className="mt-8 space-y-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-gray-100 bg-white px-5 py-5 shadow-sm"
              >
                <p className="text-sm leading-7 text-gray-700">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simpel Section */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
            Kenapa LabaBersih, bukan app lain?
          </h2>
          <div className="mt-8 divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white shadow-sm">
            {[
              {
                q: "Gak perlu ngerti akuntansi",
                a: "Input pesanan, jurnal dibuat otomatis. Neraca, laba rugi — semua auto.",
              },
              {
                q: "Bukan ERP yang bikin pusing",
                a: "Fitur secukupnya, yang beneran dipake seller tiap hari. Gak ada menu yang bikin bingung.",
              },
              {
                q: "Dibangun dari kebutuhan sendiri",
                a: "Kami sendiri pakai LabaBersih tiap hari. Kalau ada yang gak enak, kami fix duluan.",
              },
              {
                q: "Gratis untuk mulai",
                a: "Langsung pakai, tanpa kartu kredit. Gak ada trial yang expire tiba-tiba.",
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
      </section>

      {/* Final CTA */}
      <section className="border-t border-gray-100 bg-green-600 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-xl font-bold text-white lg:text-2xl">
            Udah waktunya tau laba bersih yang sebenarnya
          </h2>
          <p className="mt-3 text-green-100">
            Gratis, tanpa kartu kredit. Langsung pakai hari ini.
          </p>
          <a
            href="https://app.lababersih.com"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-green-700 shadow-sm transition-colors hover:bg-green-50"
          >
            Mulai Sekarang
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-green-600 text-xs font-bold text-white">
              L
            </div>
            <span className="text-sm font-medium text-gray-900">
              LabaBersih
            </span>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/tutorial"
              className="text-sm text-gray-500 transition-colors hover:text-gray-700"
            >
              Tutorial
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
