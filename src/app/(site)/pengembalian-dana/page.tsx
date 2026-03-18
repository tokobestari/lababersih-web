import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Pengembalian Dana — LabaBersih",
  description:
    "Kebijakan refund dan pengembalian dana LabaBersih.",
};

const lastUpdated = "18 Maret 2026";

export default function PengembalianDanaPage() {
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
          Kebijakan Pengembalian Dana
        </h1>
        <p className="mt-5 text-lg leading-8 text-gray-600">
          Kami ingin kamu puas menggunakan LabaBersih. Kalau tidak cocok, kami
          punya kebijakan refund yang jelas dan adil.
        </p>
      </section>

      {/* Content */}
      <section className="border-t border-gray-100 bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl space-y-12 px-6">
          {/* Garansi Uang Kembali */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
              Garansi 7 hari uang kembali
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Kalau kamu baru berlangganan dan merasa LabaBersih tidak sesuai
              kebutuhan, kamu bisa minta refund dalam{" "}
              <span className="font-semibold text-gray-900">
                7 hari pertama
              </span>{" "}
              sejak pembayaran. Tanpa pertanyaan ribet — kami proses.
            </p>
          </div>

          {/* Syarat Refund */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
              Syarat pengembalian dana
            </h2>
            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Dalam 7 hari pertama",
                  desc: "Refund 100% tanpa syarat. Cukup hubungi kami via email atau WhatsApp, kami proses dalam 3-5 hari kerja.",
                  icon: "check",
                },
                {
                  title: "Setelah 7 hari",
                  desc: "Refund tidak berlaku untuk periode yang sudah berjalan. Kamu tetap bisa menggunakan layanan sampai akhir periode berlangganan, dan langganan tidak akan diperpanjang otomatis.",
                  icon: "info",
                },
                {
                  title: "Upgrade / downgrade paket",
                  desc: "Kalau kamu upgrade di tengah periode, selisih dihitung prorata. Kalau downgrade, sisa kredit dihitung untuk periode berikutnya.",
                  icon: "info",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                        item.icon === "check"
                          ? "bg-green-100"
                          : "bg-blue-100"
                      }`}
                    >
                      {item.icon === "check" ? (
                        <svg
                          className="h-3.5 w-3.5 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-3.5 w-3.5 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                          />
                        </svg>
                      )}
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
                </div>
              ))}
            </div>
          </div>

          {/* Yang TIDAK bisa di-refund */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
              Yang tidak bisa di-refund
            </h2>
            <div className="mt-6 space-y-3">
              {[
                "Langganan yang sudah melewati 7 hari sejak pembayaran.",
                "Akun yang dinonaktifkan karena pelanggaran Syarat & Ketentuan.",
                "Biaya yang timbul dari penggunaan layanan pihak ketiga (marketplace, platform iklan) melalui integrasi LabaBersih.",
              ].map((item, i) => (
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
          </div>

          {/* Cara minta refund */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
              Cara minta pengembalian dana
            </h2>
            <div className="mt-6 space-y-4">
              {[
                {
                  step: "1",
                  title: "Hubungi kami",
                  desc: "Kirim email ke halo@lababersih.com atau WhatsApp ke +62 812 7075 3975 dengan subjek \"Refund\".",
                },
                {
                  step: "2",
                  title: "Kami verifikasi",
                  desc: "Kami cek tanggal pembayaran dan status akun kamu. Proses ini biasanya selesai dalam 1 hari kerja.",
                },
                {
                  step: "3",
                  title: "Dana dikembalikan",
                  desc: "Refund diproses ke metode pembayaran yang sama. Transfer bank biasanya 3-5 hari kerja.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
                    {item.step}
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

          {/* Kontak */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
              Ada pertanyaan?
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-700">
              Kalau ada yang mau ditanyain soal refund, langsung hubungi kami.
            </p>
            <div className="mt-4 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm">
              <div className="space-y-1 text-sm text-gray-700">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:halo@lababersih.com"
                    className="font-medium text-green-600 hover:text-green-700"
                  >
                    halo@lababersih.com
                  </a>
                </p>
                <p>WhatsApp: +62 812 7075 3975</p>
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
