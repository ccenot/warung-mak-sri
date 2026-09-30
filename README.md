<div align="center">
  <img src="assets/images/logo-maksri.png" alt="Logo Mak Sri Kitchen" width="130" style="border-radius: 50%;">
  
  # Mak Sri Kitchen Yogyakarta 🍗
  <p><strong>Website Resmi & Bio-Link Hub Warung Spesial Olahan Ayam & Chinese Food Halal</strong></p>
  <p><em>Jl. Veteran, Muja Muju, Kec. Umbulharjo, Kota Yogyakarta</em></p>

  [![Website](https://img.shields.io/badge/Domain-dapurmaksri.biz.id-orange?style=for-the-badge&logo=googlechrome&logoColor=white)](https://dapurmaksri.biz.id/)
  [![WhatsApp](https://img.shields.io/badge/Order_WhatsApp-0895--7032--65466-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/62895703265466)
  [![Instagram](https://img.shields.io/badge/Instagram-@maksrikitchen-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/maksrikitchen)
  [![Status](https://img.shields.io/badge/Status-Production_Ready-brightgreen?style=for-the-badge)](#)
</div>

---

## 📖 Tentang Mak Sri Kitchen
**Mak Sri Kitchen** adalah warung kuliner yang berlokasi di Umbulharjo, Yogyakarta, spesialis menyajikan beragam varian olahan daging ayam segar pilihan dan masakan Chinese food halal yang dimasak mendadak saat pesanan masuk agar selalu disajikan hangat, renyah, dan beraroma sedap.

Repositori ini berisi kode sumber lengkap untuk:
1. **Website Utama / Katalog Menu Interaktif** (`index.html`)
2. **Halaman Link-in-Bio Multi-Channel Delivery** (`link/index.html` & `link.html`)
3. **Konfigurasi SEO & Search Engine Sitemap** (`robots.txt`, `sitemap.xml`, `manifest.json`)

---

## ✨ Fitur Unggulan

### 1. Landing Page Utama (`/`)
- **Hero Banner Interaktif:** Desain warm food palette (*Golden Crisp `#F07810`* & *Chili Red `#E03131`*) dengan tipografi modern Fredoka & Nunito.
- **Katalog 28 Menu Olahan Ayam:**
  - **Lauk Ayam Saus:** Koloke (Asam Manis), Cah Jamur, Saos Keju, Lada Garam, Telur Asin, Tepung Oat, Lada Hitam, Tahu Tausi.
  - **Ayam Goreng Spesial:** Bawang Jahe, Goreng Mentega, Ngohiang, Goreng Kecap, Goreng Kering, Masak Pedas, Saos Inggris, Ayam Korea.
  - **Kulit Ayam Crispy:** Original, Saos Keju, Telur Asin.
  - **Nasi & Sup Ayam:** Nasi Goreng Ayam, Nasi Goreng Kriuk, Nasi Siram Ayam, Nasi Ayam Jamur, Fu Yung Hay, Sup Ayam Sosis, Sup Asparagus, Tofu Siram, Cah Buncis Ayam.
- **Fitur Live Filter & Search:** Pengunjung dapat mencari menu seketika berdasarkan nama dan memfilter per kategori tanpa reload.
- **Ikon Flat Estetik:** Menggunakan ikon vektor SVG minimalis modern pada bagian nilai keunggulan.
- **Cerita Warung & Filosofi Resep:** Menghadirkan sentuhan hangat resep rumahan Mak Sri.
- **Testimoni Pelanggan Asli:** Ulasan nyata dengan foto profil asli para pelanggan.
- **Info Lokasi & Google Maps Embed:** Lengkap dengan jam operasional (`15:00 - 22:00 WIB`) dan tombol langsung buka rute aplikasi Maps.
- **FAQ Accordion:** Jawaban cepat seputar kehalalan (100% Halal), pemesanan katering/acara, dan kemasan saus terpisah.

### 2. Link-in-Bio Hub (`/link`)
- Terinspirasi dari layout mobile-first praktis untuk disematkan di bio Instagram `@maksrikitchen` dan TikTok.
- Tombol akses cepat satu klik:
  - **Pesan WhatsApp (Prioritas)** dengan pesan otomatis tersusun rapi.
  - **ShopeeFood, GoFood, & GrabFood**.
  - **Katalog Web Resmi**.
  - **Google Maps Navigasi**.
  - **Instagram Resmi**.

### 3. Optimasi SEO & Metadata Lengkap
- **Target Domain:** `https://dapurmaksri.biz.id/`
- **Search Engine Discovery:** Dilengkapi file `robots.txt` dan `sitemap.xml` yang siap di-submit ke Google Search Console.
- **Open Graph & Twitter Cards:** Thumbnail hero dan deskripsi muncul otomatis saat link dibagikan di WhatsApp, Telegram, Facebook, dan X.
- **Google Structured Data:** Skema Schema.org `FastFoodRestaurant` / `Restaurant` lengkap dengan jam buka, koordinat lokasi, dan rentang harga.
- **Web App Manifest (`manifest.json`):** Standar PWA untuk bookmark home-screen di Android & iOS.

---

## 📂 Struktur Proyek

```plaintext
warung-mak-sri/
├── assets/
│   └── images/
│       ├── logo-maksri.png              # Logo maskot bulat Mak Sri Kitchen
│       ├── hero-chicken.jpg             # Foto hero banner utama
│       ├── menu-koloke.jpg              # Foto menu resolusi bersih (tanpa watermark)
│       ├── menu-saos-keju.jpg
│       ├── menu-ngohiang.jpg
│       ├── menu-fuyunghay.jpg
│       ├── ... (total 28 menu ayam)
│       ├── review-bunda-rina.jpg        # Foto pelanggan testimoni
│       ├── review-dimas-prasetyo.jpg
│       └── review-sarah-indah.jpg
├── link/
│   └── index.html                       # Halaman link-in-bio (route: /link)
├── app.js                               # Logic filter kategori, realtime search, & render menu
├── index.html                           # Landing page utama
├── link.html                            # Standalone link-in-bio file
├── manifest.json                        # Web App Manifest PWA
├── menu-data.js                         # Database 28 menu ayam & konfigurasi warung
├── README.md                            # Dokumentasi resmi repositori
├── robots.txt                           # Instruksi crawler Googlebot
├── sitemap.xml                          # Peta situs resmi
└── style.css                            # Seluruh desain, token CSS, animasi, & responsivitas
```

---

## 🚀 Cara Menjalankan Secara Lokal

Website ini dibangun menggunakan **Vanilla HTML5, CSS3, & Modern JavaScript**, sehingga sangat ringan, instan, dan tidak membutuhkan proses *build* yang rumit.

### 1. Clone Repositori
```bash
git clone https://github.com/ccenot/warung-mak-sri.git
cd warung-mak-sri
```

### 2. Jalankan Dev Server
Kamu dapat menggunakan server statis apa pun (Node.js `serve`, Python, PHP, atau Live Server VS Code):

**Menggunakan `npx serve`:**
```bash
npx serve -l 3000
```

**Menggunakan Python 3:**
```bash
python -m http.server 3000
```

### 3. Buka di Browser
- **Website Utama:** [http://localhost:3000](http://localhost:3000)
- **Link-in-Bio:** [http://localhost:3000/link](http://localhost:3000/link)

---

## 🌐 Panduan Deployment (Live ke Domain `dapurmaksri.biz.id`)

Repositori ini siap langsung dihubungkan ke platform hosting modern gratis:

### Opsi 1: Vercel / Cloudflare Pages / Netlify
1. Hubungkan akun GitHub dan pilih repositori `ccenot/warung-mak-sri`.
2. Biarkan setting build command kosong (karena berupa static site murni).
3. Set root directory ke `./`.
4. Masuk ke menu **Custom Domains** dan tambahkan `dapurmaksri.biz.id`.
5. Update DNS Record CNAME / A Record sesuai panduan provider domain.

### Opsi 2: GitHub Pages
1. Buka tab **Settings** > **Pages** di repositori ini.
2. Pada bagian *Build and deployment*, pilih Branch `main` folder `/ (root)`.
3. Masukkan Custom domain `dapurmaksri.biz.id` dan centang **Enforce HTTPS**.

---

## 📍 Informasi Operasional Warung

| Informasi | Keterangan |
|---|---|
| **Nama Usaha** | Mak Sri Kitchen |
| **Alamat** | Jl. Veteran, Muja Muju, Kec. Umbulharjo, Kota Yogyakarta, D.I. Yogyakarta 55164 |
| **Jam Buka** | Setiap Hari, **15:00 – 22:00 WIB** *(Last Order 21:30 WIB)* |
| **WhatsApp Pemesanan** | [0895-7032-65466](https://wa.me/62895703265466) |
| **Instagram** | [@maksrikitchen](https://www.instagram.com/maksrikitchen) |
| **Domain Resmi** | [dapurmaksri.biz.id](https://dapurmaksri.biz.id) |

---

<div align="center">
  <p>© 2026 Mak Sri Kitchen. All rights reserved.</p>
</div>
