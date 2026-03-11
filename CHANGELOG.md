# 📋 Changelog — JualanDapur

Semua perubahan penting pada aplikasi didokumentasikan di sini.

---

## [v1.2] — 2026-03-11

### 🐛 Bug Fix
- **BUG-001** `Setelan` — Tambah validasi modal awal: tidak boleh kosong atau negatif sebelum disimpan
- **BUG-002** `Setelan` — `jd2_disclaimer` sekarang ikut dihapus saat Reset Semua Data
- **BUG-003** `Onboarding` — Tombol Step 3 kini routing ke halaman yang sesuai (Produksi / Kasir / Stok), sebelumnya semua ke Dasbor
- **BUG-004** `Kasir` — Hapus dead code `diskonTambahan < 0` di `proses()` yang tidak pernah tercapai karena input sudah di-clamp di UI
- **BUG-005** `Setelan` — Perilaku save nama usaha dan modal awal kini konsisten: keduanya hanya diupdate saat klik tombol Simpan
- **BUG-006** `Reseller` — Tombol WA kini memvalidasi nomor HP sebelum membuka WhatsApp; menampilkan toast error jika HP kosong
- **BUG-007** `Laporan` — Perbaiki race condition pada swap tanggal custom filter; gunakan variabel lokal sebelum setState untuk menghindari stale closure
- **BUG-008** `Catat Produksi` — Pesan validasi kini spesifik: "Pilih resep terlebih dahulu" vs "Isi jumlah pcs jadi"

### ✨ Peningkatan UX
- **UX-001** `Catat Produksi` — Tampilkan modal konfirmasi eksplisit saat produksi dengan bahan tidak cukup
- **UX-002** `Kasir` — Tombol qty `−/+` diperbesar dari 34px → 44px (memenuhi standar touch target mobile)
- **UX-003** `Dasbor` — Sub-label jumlah transaksi ditambahkan di kartu Omzet Hari Ini
- **UX-005** `Laporan` — Tabel HPP kini memiliki fade gradient kanan dan hint teks scroll horizontal
- **UX-006** `Topbar` — Saldo kas berwarna merah jika bernilai negatif
- **UX-007** `Setelan` — FAQ diperluas dari 4 → 10 item (mencakup alur harian UMKM lengkap)

### 📄 Dokumen & PWA
- **DOC-001** `manifest.json` — `start_url` dan `scope` diperbarui ke `/jualan-dapur/` untuk GitHub Pages sub-path; URL shortcut juga diperbarui
- **DOC-002** `sw.js` — Cache name diperbarui ke `jualan-dapur-v2`; Google Fonts dihapus dari ASSETS_TO_CACHE (opaque response); komentar diperjelas
- **DOC-003** `sw.js` — Offline fallback path diperbaiki ke `/jualan-dapur/index.html`
- **DOC-004** `README.md` — Diperbarui lengkap: fitur baru, instruksi Netlify, struktur file v1.2
- **DOC-005** `README.md` — Tambah fitur "Tambah Stok Cepat" dan "Template Disclaimer Nota" di tabel fitur
- **DOC-006** `REPLIKASI-PROMPT.md` — Prompt diperbarui selaras dengan semua perubahan v1.2; fitur yang sudah ada tidak lagi tercantum sebagai "perlu ditambahkan"
- **DOC-007** `REPLIKASI-PROMPT.md` — Prompt perbaikan bug yang sudah resolved dihapus; checklist deploy diperbarui
- **BARU** `CHANGELOG.md` — Dokumen riwayat versi ditambahkan

---

## [v1.1] — Rilis Sebelumnya

### Fitur yang Ditambahkan dari v1.0
- Fitur Print Stiker Produk (62mm) di halaman struk kasir
- Fitur Print Nota Thermal (80mm) di halaman struk kasir
- Tambah Stok Cepat per bahan di halaman Bahan Baku
- Template Disclaimer Nota di Setelan (tersimpan di `jd2_disclaimer`)
- Fix: stok produk berkurang setelah transaksi kasir
- Fix: harga otomatis update saat ganti jenis pembeli di kasir
- Fix: bar chart laporan mengikuti filter periode aktif

---

## [v1.0] — Rilis Pertama

- Aplikasi JualanDapur pertama kali dirilis
- 10 halaman: Dasbor, Kasir, Produksi, Stok, Bahan Baku, Resep, Reseller, Pengeluaran, Laporan, Setelan
- Onboarding 4 langkah untuk pengguna baru
- PWA: installable, offline support via Service Worker
- Data seed: 5 resep, 15 bahan, 4 reseller, 5 produk jadi
