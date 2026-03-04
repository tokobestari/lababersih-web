# Tutorial: Bulk Import Pesanan Shopee

Panduan lengkap cara import pesanan dari Shopee ke LabaBersih secara massal (bulk).

---

## Persiapan

Sebelum mulai, pastikan kamu sudah:
- Punya akun LabaBersih yang aktif
- Toko Shopee sudah terhubung di menu **Toko** di LabaBersih
- Punya akses ke **Shopee Seller Center** (seller.shopee.co.id)

---

## Langkah 1: Export Data Pesanan dari Shopee

Buka **Shopee Seller Center**, lalu masuk ke menu **Pesanan Saya**.

1. Klik tab **"Perlu Dikirim"** untuk melihat pesanan yang siap diproses
2. Klik tombol **"Export"** di pojok kanan atas

![Export pesanan dari Shopee Seller Center](/images/tutorial/shopee/01-export-pesanan-shopee.png)

> **Tips:** Pastikan kamu berada di tab "Perlu Dikirim" agar yang ter-export hanya pesanan yang relevan.

---

## Langkah 2: Pilih Rentang Tanggal

Setelah klik Export, akan muncul kalender untuk memilih rentang tanggal.

1. Pilih **tanggal awal** dan **tanggal akhir** pesanan yang mau di-export
2. Klik tombol **"Export"** untuk mengunduh file

![Pilih rentang tanggal export](/images/tutorial/shopee/02-pilih-tanggal-export.png)

> **Tips:** Biasanya cukup export pesanan **kemarin sampai hari ini** agar data tidak terlalu banyak dan tetap up-to-date.

File yang ter-download berformat Excel (.xlsx). Simpan file ini — kamu akan upload ke LabaBersih di langkah berikutnya.

---

## Langkah 3: Buka Halaman Import di LabaBersih

Sekarang pindah ke **LabaBersih**.

1. Buka menu **Pesanan** di sidebar kiri
2. Klik tombol **"Import"** di bagian atas halaman

![Halaman Pesanan di LabaBersih — klik tombol Import](/images/tutorial/shopee/03-halaman-import-lababersih.png)

Kamu akan diarahkan ke halaman import pesanan.

---

## Langkah 4: Pilih Platform, Toko & Upload File

Di halaman import:

1. **Pilih Platform** — klik **"Shopee"**
2. **Pilih Toko** — pilih toko Shopee yang sesuai (contoh: "Shopee tokobestari")
3. **Upload file** Excel yang sudah di-download dari Shopee tadi
4. Sistem akan otomatis membaca file dan menampilkan ringkasan:
   - **Total Pesanan** — jumlah semua pesanan dalam file
   - **Dipilih** — pesanan yang siap di-import
   - **SKU Match** — produk yang sudah cocok dengan data di LabaBersih
   - **Belum Mapping** — produk yang belum dikenali (perlu mapping SKU)

![Mapping SKU dan review pesanan sebelum import](/images/tutorial/shopee/04-mapping-sku-import.png)

---

## Langkah 5: Review & Import

Sebelum import, periksa data berikut:

- **Tab "Importable"** — pesanan yang siap masuk. Pastikan jumlahnya sesuai.
- **Tab "Unmatched SKU"** — jika ada, kamu perlu mapping SKU dulu di menu **Produk** sebelum bisa import.
- **Tab "Dilewati"** — pesanan yang di-skip (biasanya duplikat atau sudah pernah di-import).

Kalau sudah yakin, klik **Import** untuk memasukkan semua pesanan ke LabaBersih.

---

## Selesai!

Pesanan dari Shopee sekarang sudah masuk ke LabaBersih. Kamu bisa cek di halaman **Pesanan** — pesanan baru akan muncul dengan status **"Dibuat"**.

Langkah selanjutnya:
- [Input resi pengiriman](/docs/tutorial-input-resi.md) *(segera hadir)*
- [Rekonsiliasi pembayaran](/docs/tutorial-rekonsiliasi.md) *(segera hadir)*

---

## FAQ

**Q: Kenapa ada pesanan yang masuk tab "Dilewati"?**
A: Biasanya karena pesanan tersebut sudah pernah di-import sebelumnya. LabaBersih otomatis mendeteksi duplikat.

**Q: Apa itu "Unmatched SKU"?**
A: Artinya ada produk di file Shopee yang SKU-nya belum terdaftar di LabaBersih. Kamu perlu buka menu **Produk** dan tambahkan mapping SKU-nya dulu.

**Q: Bisa import dari beberapa toko Shopee sekaligus?**
A: Tidak dalam satu kali upload. Lakukan import per toko — pilih toko yang sesuai, upload file, lalu ulangi untuk toko lainnya.
