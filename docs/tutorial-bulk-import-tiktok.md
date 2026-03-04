# Tutorial: Bulk Import Pesanan TikTok Shop

Panduan lengkap cara import pesanan dari TikTok Shop ke LabaBersih secara massal (bulk).

---

## Persiapan

Sebelum mulai, pastikan kamu sudah:
- Punya akun LabaBersih yang aktif
- Toko TikTok Shop sudah terhubung di menu **Toko** di LabaBersih
- Punya akses ke **TikTok Shop Seller Center** (seller-id.tiktok.com)

---

## Langkah 1: Export Data Pesanan dari TikTok Shop

Buka **TikTok Shop Seller Center**, lalu masuk ke menu **Pesanan**.

1. Klik tab **"Menunggu Pengiriman"** untuk melihat pesanan yang siap diproses
2. Klik tombol **"Export"** di bagian atas

<!-- TODO: Tambahkan screenshot TikTok Seller Center -->
<!-- ![Export pesanan dari TikTok Seller Center](/images/tutorial/tiktok/01-export-pesanan-tiktok.png) -->

> **Tips:** Sama seperti Shopee, fokus export pesanan yang statusnya siap kirim.

---

## Langkah 2: Pilih Rentang Tanggal & Download

1. Pilih **rentang tanggal** pesanan yang mau di-export
2. Klik **"Export"** untuk mengunduh file

<!-- TODO: Tambahkan screenshot pilih tanggal -->
<!-- ![Pilih rentang tanggal export](/images/tutorial/tiktok/02-pilih-tanggal-export.png) -->

File yang ter-download berformat Excel (.xlsx). Simpan file ini.

---

## Langkah 3: Buka Halaman Import di LabaBersih

1. Buka menu **Pesanan** di sidebar kiri
2. Klik tombol **"Import"** di bagian atas halaman

<!-- TODO: Tambahkan screenshot (bisa reuse dari Shopee) -->
<!-- ![Halaman Pesanan di LabaBersih](/images/tutorial/tiktok/03-halaman-import-lababersih.png) -->

---

## Langkah 4: Pilih Platform, Toko & Upload File

Di halaman import:

1. **Pilih Platform** — klik **"TikTok"**
2. **Pilih Toko** — pilih toko TikTok Shop yang sesuai
3. **Upload file** Excel yang sudah di-download dari TikTok tadi
4. Sistem akan menampilkan ringkasan:
   - **Total Pesanan** — jumlah semua pesanan dalam file
   - **Dipilih** — pesanan yang siap di-import
   - **SKU Match** — produk yang sudah cocok
   - **Belum Mapping** — produk yang belum dikenali

<!-- TODO: Tambahkan screenshot mapping TikTok -->
<!-- ![Mapping SKU TikTok](/images/tutorial/tiktok/04-mapping-sku-import.png) -->

> **Catatan:** Proses di LabaBersih sama persis dengan Shopee. Yang berbeda hanya sumber file-nya (dari TikTok Seller Center, bukan Shopee).

---

## Langkah 5: Review & Import

Sebelum import, periksa:

- **Tab "Importable"** — pesanan yang siap masuk
- **Tab "Unmatched SKU"** — produk yang perlu mapping SKU dulu
- **Tab "Dilewati"** — pesanan duplikat atau sudah pernah di-import

Kalau sudah yakin, klik **Import**.

---

## Selesai!

Pesanan dari TikTok Shop sekarang sudah masuk ke LabaBersih dengan status **"Dibuat"**.

---

## Perbedaan TikTok vs Shopee

| | Shopee | TikTok Shop |
|---|---|---|
| Sumber export | Shopee Seller Center | TikTok Shop Seller Center |
| Format file | Excel (.xlsx) | Excel (.xlsx) |
| Proses di LabaBersih | Sama | Sama |
| Fee marketplace | Admin + Layanan + Proses | Komisi + Biaya Lainnya |

> Meskipun fee marketplace berbeda, LabaBersih otomatis mengenali dan menghitung fee sesuai platform.

---

## FAQ

**Q: Apakah proses import TikTok sama dengan Shopee?**
A: Ya, di sisi LabaBersih prosesnya identik. Yang berbeda hanya cara export dari Seller Center masing-masing platform.

**Q: Fee TikTok dihitung otomatis?**
A: Ya. Saat import, LabaBersih otomatis membaca kolom fee dari file TikTok dan menghitung profit bersih.
