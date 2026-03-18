import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan — LabaBersih",
  description:
    "Syarat dan ketentuan penggunaan LabaBersih.",
};

const lastUpdated = "18 Maret 2026";

const SECTIONS = [
  {
    title: "1. Tentang layanan ini",
    content:
      "LabaBersih adalah platform SaaS (Software as a Service) untuk manajemen keuangan, inventori, dan marketing bagi penjual online di Indonesia. Layanan ini dikelola oleh PT Tumbuh Dari Desa.",
  },
  {
    title: "2. Akun pengguna",
    items: [
      "Kamu bertanggung jawab atas keamanan akun dan password-mu.",
      "Satu organisasi bisa memiliki beberapa anggota dengan role berbeda (owner, manager, finance, staff gudang, CS).",
      "Kamu tidak boleh membagikan kredensial login ke pihak yang tidak berwenang.",
    ],
  },
  {
    title: "3. Penggunaan yang diperbolehkan",
    content: "LabaBersih hanya boleh digunakan untuk mengelola keuangan dan inventori bisnis kamu, mengakses data iklan dan marketplace yang kamu otorisasi, dan membuat laporan keuangan untuk keperluan bisnis.",
    forbidden: [
      "Menggunakan layanan untuk aktivitas ilegal",
      "Mencoba mengakses data organisasi lain",
      "Melakukan reverse engineering terhadap sistem kami",
      "Menggunakan API kami tanpa izin tertulis",
    ],
  },
  {
    title: "4. Integrasi pihak ketiga",
    content:
      "LabaBersih terintegrasi dengan platform pihak ketiga (Google Ads, Facebook Ads, TikTok Ads, TikTok Shop, Shopee, Mengantar). Ketika kamu menghubungkan akun, kami hanya mengakses data yang kamu otorisasi. Data iklan (spend, impressions, clicks) digunakan untuk dashboard marketing di LabaBersih. Kami tidak membagikan data platform-mu ke pihak lain. Kamu bisa mencabut akses kapan saja dari halaman Pengaturan > Integrasi.",
  },
  {
    title: "5. Data dan privasi",
    content:
      "Pengelolaan data diatur dalam Kebijakan Privasi kami. Secara ringkas: data bisnismu adalah milikmu, kami tidak menjual data ke pihak ketiga, kamu bisa export atau hapus datamu kapan saja, dan data disimpan terenkripsi di server yang aman.",
    link: { href: "/kebijakan-privasi", label: "Baca Kebijakan Privasi" },
  },
  {
    title: "6. Ketersediaan layanan",
    items: [
      "Kami berusaha menjaga uptime layanan, tapi tidak menjamin 100% availability.",
      "Maintenance terjadwal akan diinformasikan sebelumnya.",
      "Kami tidak bertanggung jawab atas kerugian akibat downtime di luar kendali kami.",
    ],
  },
  {
    title: "7. Pembayaran",
    items: [
      "Informasi harga dan paket tersedia di website kami.",
      "Pembayaran dilakukan sesuai paket yang dipilih.",
      "Kami berhak mengubah harga dengan pemberitahuan 30 hari sebelumnya.",
    ],
  },
  {
    title: "8. Batasan tanggung jawab",
    items: [
      "LabaBersih adalah alat bantu manajemen, bukan pengganti akuntan profesional.",
      "Keputusan bisnis berdasarkan data dari LabaBersih adalah tanggung jawab pengguna.",
      "Kami tidak bertanggung jawab atas ketidakakuratan data yang diinput oleh pengguna atau dari platform pihak ketiga.",
    ],
  },
  {
    title: "9. Penghentian akun",
    items: [
      "Kamu bisa menutup akun kapan saja dengan menghubungi kami.",
      "Kami berhak menangguhkan akun yang melanggar syarat & ketentuan ini.",
      "Setelah akun ditutup, data akan dihapus dalam 30 hari kecuali diminta lebih cepat.",
    ],
  },
  {
    title: "10. Perubahan syarat & ketentuan",
    content:
      "Kami bisa mengubah syarat ini kapan saja. Perubahan signifikan akan diinformasikan via email. Penggunaan layanan setelah perubahan dianggap sebagai persetujuan.",
  },
  {
    title: "11. Hukum yang berlaku",
    content:
      "Syarat & ketentuan ini tunduk pada hukum Republik Indonesia. Sengketa diselesaikan secara musyawarah, dan jika tidak tercapai, melalui pengadilan yang berwenang di Kediri, Jawa Timur.",
  },
];

export default function SyaratKetentuanPage() {
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
          Syarat & Ketentuan
        </h1>
        <p className="mt-5 text-lg leading-8 text-gray-600">
          Dengan menggunakan LabaBersih, kamu setuju dengan syarat & ketentuan
          berikut. Kami tulis sesederhana mungkin — tanpa jebakan.
        </p>
      </section>

      {/* Content */}
      <section className="border-t border-gray-100 bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-6">
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
                {section.title}
              </h2>
              {section.content && (
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  {section.content}
                </p>
              )}
              {section.items && (
                <div className="mt-4 space-y-2">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                      <p className="text-sm leading-6 text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              )}
              {section.forbidden && (
                <div className="mt-4 space-y-2">
                  {section.forbidden.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-red-100 bg-white px-5 py-3"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">
                        X
                      </span>
                      <p className="text-sm leading-6 text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              )}
              {section.link && (
                <Link
                  href={section.link.href}
                  className="mt-3 inline-block text-sm font-medium text-green-600 transition-colors hover:text-green-700"
                >
                  {section.link.label} &rarr;
                </Link>
              )}
            </div>
          ))}

          {/* Kontak */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
              12. Kontak
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Pertanyaan tentang syarat & ketentuan ini?
            </p>
            <div className="mt-4 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
              <div className="space-y-1 text-sm text-gray-700">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:cs@lababersih.com"
                    className="font-medium text-green-600 hover:text-green-700"
                  >
                    cs@lababersih.com
                  </a>
                </p>
                <p>Telepon: +62 812 7075 3975</p>
                <p className="pt-2 text-xs text-gray-500">
                  PT Tumbuh Dari Desa — Dsn. Ngasem, Desa Ngasem, Kec. Ngasem,
                  Kab. Kediri, Jawa Timur 64181, Indonesia
                </p>
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
