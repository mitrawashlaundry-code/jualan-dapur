# 🍱 JualanDapur — Manajemen UMKM Makanan Siap Saji

Aplikasi manajemen produksi, stok, dan penjualan untuk UMKM makanan siap saji. Dibangun sebagai single-file PWA berbasis React, cocok untuk ibu-ibu pelaku usaha rendang, frozen food, lauk beku, katering, dan sejenisnya.

> **Versi:** 1.2 | **Status:** Stable ✅

---

## ✨ Fitur Lengkap

| Menu | Fungsi |
|------|--------|
| 🏠 Dasbor | Ringkasan omzet + jumlah transaksi, stok, dan alert stok/expired hari ini |
| 🛒 Kasir Penjualan | Nota digital + kirim via WhatsApp + print thermal + print stiker |
| 🍳 Catat Produksi | Batch produksi, HPP otomatis, konfirmasi jika bahan kurang |
| 📦 Stok & Produk | Pantau stok produk jadi, harga ecer & reseller |
| 🧂 Bahan Baku | Stok bahan, **tambah stok cepat per bahan**, alert hampir habis, riwayat beli |
| 📋 Resep | Komposisi bahan, estimasi biaya, HPP per resep |
| 👥 Reseller | Harga khusus reseller, riwayat transaksi, kirim WA (dengan validasi nomor) |
| 💸 Pengeluaran | Catat biaya operasional per kategori |
| 📊 Laporan | Omzet, laba, tren, tabel HPP dengan scroll hint, export CSV |
| ⚙️ Setelan | Nama usaha, modal awal, backup & restore JSON, **template disclaimer nota**, FAQ lengkap |

---

## 🚀 Deploy ke GitHub Pages

### Langkah 1: Buat Repository

```bash
git init
git add .
git commit -m "🍱 JualanDapur v1.2 — Initial Release"
git branch -M main
git remote add origin https://github.com/USERNAME/jualan-dapur.git
git push -u origin main
```

### Langkah 2: Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik **Settings** → **Pages**
3. Source: **Deploy from a branch** → Branch: `main` / `(root)`
4. Klik **Save**

Aplikasi tersedia di: `https://USERNAME.github.io/jualan-dapur/`

### ⚠️ Langkah 3: Verifikasi URL di manifest.json

File `manifest.json` sudah dikonfigurasi untuk sub-path `/jualan-dapur/`:

```json
{
  "start_url": "/jualan-dapur/",
  "scope": "/jualan-dapur/"
}
```

Jika nama repository Anda **bukan** `jualan-dapur`, sesuaikan nilai di atas dengan nama repo Anda sebelum push.

---

## 🌐 Deploy ke Netlify (Alternatif)

### Cara Drag & Drop (paling mudah, tanpa Git)

1. Buka [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag & drop **seluruh folder** `jualan-dapur/` ke area yang tersedia
3. Tunggu ~30 detik → aplikasi langsung live

### Penting setelah deploy ke Netlify

Jika deploy ke Netlify (bukan sub-path), update `manifest.json`:

```json
{
  "start_url": "/",
  "scope": "/"
}
```

Dan di `sw.js`, ubah semua path `/jualan-dapur/` menjadi `/`.

---

## 📁 Struktur File

```
jualan-dapur/
├── index.html                   ← Aplikasi utama (single-file React PWA)
├── manifest.json                ← PWA manifest (dikonfigurasi untuk sub-path)
├── sw.js                        ← Service Worker v2 (offline support)
├── 404.html                     ← GitHub Pages SPA redirect
├── .nojekyll                    ← Nonaktifkan Jekyll processing
├── README.md                    ← Dokumen ini
├── REPLIKASI-PROMPT.md          ← Prompt untuk membuat ulang dengan AI
├── CHANGELOG.md                 ← Riwayat perubahan versi
├── icons/                       ← Icon aplikasi PWA (8 ukuran)
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png
│   ├── icon-384x384.png
│   └── icon-512x512.png
└── screenshots/
    └── dasbor.png
```

---

## 📲 Install di HP sebagai Aplikasi

### Android (Chrome)
1. Buka URL aplikasi di Chrome
2. Tap menu ⋮ → **"Tambahkan ke Layar Utama"** atau **"Install App"**
3. Konfirmasi → ikon JualanDapur muncul di layar utama

### iPhone (Safari)
1. Buka URL di **Safari** (bukan Chrome)
2. Tap ikon Share → **"Add to Home Screen"**
3. Tap **Add** → ikon muncul di layar utama

---

## 💾 Tentang Data

- Semua data tersimpan di **localStorage browser** — tidak ada server, tidak ada biaya
- Data bersifat **lokal per perangkat**
- Gunakan fitur **Backup JSON** di ⚙️ Setelan untuk:
  - Pindah HP atau ganti browser
  - Backup rutin mingguan
  - Berbagi data ke HP lain

---

## 🔄 Update Icon Aplikasi

Icon saat ini adalah placeholder. Untuk mengganti dengan logo usaha:

1. Buka [realfavicongenerator.net](https://realfavicongenerator.net/)
2. Upload foto produk / logo usaha (minimal 512×512px)
3. Download dan letakkan file di folder `icons/`

---

## 🛠️ Tech Stack

- **React 18** via CDN (no npm, no bundler)
- **Babel Standalone** untuk JSX transpiling
- **Service Worker v2** untuk offline + PWA install
- **localStorage** untuk persistensi data (hook `usePersist`)
- **Google Fonts** — DM Sans + Space Grotesk
- Pure HTML/CSS/JS — bisa dibuka langsung di browser tanpa setup apapun

---

## 📝 Lisensi

Bebas digunakan dan dimodifikasi untuk keperluan UMKM Indonesia. 🇮🇩

---

*Dibuat dengan ❤️ untuk ibu-ibu pelaku UMKM Indonesia*
