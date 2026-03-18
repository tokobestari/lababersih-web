import Link from "next/link";
import { getTutorials } from "@/sanity/queries";

const categoryLabels: Record<string, string> = {
  memulai: "Memulai",
  pesanan: "Pesanan",
  keuangan: "Keuangan",
  inventori: "Inventori",
  rts: "RTS",
  laporan: "Laporan",
};

export const metadata = {
  title: "Tutorial — LabaBersih",
  description: "Panduan lengkap menggunakan LabaBersih untuk mengelola toko online.",
};

export default async function TutorialPage() {
  const tutorials = await getTutorials();

  // Group by category
  const grouped = tutorials.reduce<Record<string, typeof tutorials>>(
    (acc, tutorial) => {
      const cat = tutorial.category || "lainnya";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(tutorial);
      return acc;
    },
    {}
  );

  const categoryOrder = ["memulai", "pesanan", "keuangan", "inventori", "rts", "laporan"];
  const sortedCategories = categoryOrder.filter((cat) => grouped[cat]);

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

      {/* Header */}
      <div className="mx-auto max-w-4xl px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 lg:text-4xl">
          Tutorial LabaBersih
        </h1>
        <p className="mt-3 text-gray-600">
          Panduan lengkap dari mulai daftar sampai baca laporan keuangan.
        </p>
      </div>

      {/* Tutorial List */}
      <div className="mx-auto max-w-4xl px-6 pb-20">
        {tutorials.length === 0 ? (
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-12 text-center shadow-sm">
            <p className="text-sm text-gray-500">
              Tutorial sedang disiapkan. Nantikan segera!
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {sortedCategories.map((category) => (
              <section key={category}>
                <h2 className="mb-4 text-sm font-semibold text-gray-900">
                  {categoryLabels[category] || category}
                </h2>
                <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white shadow-sm">
                  {grouped[category].map((tutorial) => (
                    <Link
                      key={tutorial._id}
                      href={`/tutorial/${tutorial.slug.current}`}
                      className="flex items-center justify-between px-5 py-4 transition-colors hover:bg-gray-50"
                    >
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          {tutorial.title}
                        </h3>
                        {tutorial.description && (
                          <p className="mt-1 text-xs text-gray-500">
                            {tutorial.description}
                          </p>
                        )}
                      </div>
                      <svg
                        className="h-4 w-4 shrink-0 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>

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
