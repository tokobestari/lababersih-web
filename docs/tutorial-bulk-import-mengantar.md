# Tutorial: Bulk Import Pesanan Mengantar

Panduan lengkap cara import pesanan dari Mengantar ke LabaBersih secara massal (bulk).

---

## Persiapan

Sebelum mulai, pastikan kamu sudah:
- Punya akun LabaBersih yang aktif
- Toko Mengantar sudah terdaftar di menu **Toko** di LabaBersih
- Punya file pesanan dari sistem Mengantar

---

## Perbedaan Mengantar dengan Shopee/TikTok

> **Penting:** Mengantar punya pola yang **berbeda** dari Shopee dan TikTok.

| | Shopee / TikTok | Mengantar |
|---|---|---|
| Model penjualan | Marketplace (escrow) | COD offline |
| Fee | Persentase dari harga jual | Flat (COD fee termasuk PPN) |
| Piutang | Nett (harga jual - fee) | Nett (sudah potong ongkir) |
| Ongkir RTS | Platform yang tanggung | Seller tidak kena lagi |

Karena modelnya COD offline, cara export dan data yang dihasilkan berbeda dari marketplace.

---

## Langkah 1: Siapkan File Pesanan Mengantar

Dapatkan file data pesanan dari sistem Mengantar. File ini biasanya berformat Excel (.xlsx).

<!-- TODO: Tambahkan screenshot export dari Mengantar -->
<!-- ![Export pesanan dari Mengantar](/images/tutorial/mengantar/01-export-pesanan-mengantar.png) -->

> **Catatan:** Berbeda dengan Shopee/TikTok yang export dari Seller Center, data Mengantar bisa didapat dari dashboard Mengantar atau file yang dikirim oleh tim operasional.

---

## Langkah 2: Buka Halaman Import di LabaBersih

1. Buka menu **Pesanan** di sidebar kiri
2. Klik tombol **"Import"** di bagian atas halaman

<!-- TODO: Tambahkan screenshot -->
<!-- ![Halaman Pesanan di LabaBersih](/images/tutorial/mengantar/02-halaman-import-lababersih.png) -->

---

## Langkah 3: Pilih Platform, Toko & Upload File

Di halaman import:

1. **Pilih Platform** — klik **"Mengantar"**
2. **Pilih Toko** — pilih toko Mengantar yang sesuai
3. **Upload file** Excel dari Mengantar
4. Sistem akan menampilkan ringkasan:
   - **Total Pesanan** — jumlah semua pesanan dalam file
   - **Dipilih** — pesanan yang siap di-import
   - **SKU Match** — produk yang sudah cocok
   - **Belum Mapping** — produk yang belum dikenali

<!-- TODO: Tambahkan screenshot mapping Mengantar -->
<!-- ![Mapping SKU Mengantar](/images/tutorial/mengantar/03-mapping-sku-import.png) -->

---

## Langkah 4: Review & Import

Perhatikan beberapa hal khusus Mengantar:

- **Piutang** sudah dalam bentuk nett (harga jual dikurangi ongkir). Tidak perlu kalkulasi tambahan.
- **COD fee** sudah termasuk PPN — LabaBersih otomatis menghitung ini.
- **Tidak ada fee mapping** seperti Shopee/TikTok (admin fee, service fee, dll). Fee Mengantar bersifat flat.

Kalau data sudah sesuai, klik **Import**.

---

## Langkah 5: Cek Hasil Import

Pesanan dari Mengantar akan muncul di halaman **Pesanan** dengan status **"Dibuat"**.

<!-- TODO: Tambahkan screenshot hasil import -->
<!-- ![Hasil import pesanan Mengantar](/images/tutorial/mengantar/04-hasil-import.png) -->

---

## Selesai!

Pesanan Mengantar sudah masuk ke LabaBersih.

---

## FAQ

**Q: Kenapa fee Mengantar berbeda dari Shopee/TikTok?**
A: Mengantar menggunakan model COD offline, jadi fee-nya flat (bukan persentase). COD fee sudah termasuk PPN dan dipotong langsung dari nilai pesanan.

**Q: Bagaimana dengan ongkir Mengantar?**
A: Ongkir sudah dipotong dari piutang (nilai nett). Jadi angka yang masuk ke LabaBersih sudah bersih dari ongkir.

**Q: Kalau ada RTS di Mengantar, bagaimana?**
A: Berbeda dengan Shopee/TikTok. Di Mengantar, seller tidak dikenakan ongkir RTS lagi karena piutang sudah dalam bentuk nett. Penanganan RTS bisa dilakukan di menu **Return / RTS**.

**Q: Apakah perlu mapping SKU terpisah untuk Mengantar?**
A: Ya. Mapping SKU per platform dan per toko. SKU yang sudah di-mapping untuk Shopee tidak otomatis berlaku untuk Mengantar.
