# Kost Pondok Ashoka

Website Kost Pondok Ashoka — "Hunian Nyaman, Aman, dan Strategis", 15 menit dari gerbang utama kampus, Cipadung, Cibiru, Bandung.

## Buka website

- **Situs (GitHub Pages):** https://yogasuamihatsunemiku.github.io/kost-pondok-ashoka1/
- **Situs (Lovable hosting):** https://kost-pondok-ashoka.lovable.app
- **Chat pengelola (WhatsApp):** https://wa.me/6285147618624

## Isi

Satu halaman: Beranda, Harga, Fasilitas, Galeri, Lokasi, Kontak.

- Harga Rp8.500.000 per tahun, sudah termasuk air dan listrik standar.
- 6 fasilitas: kasur + rak, WiFi 24 jam, kamar mandi dalam, parkiran motor luas, dapur bersama, akses gerbang sampai jam 9.
- 11 foto asli galeri dengan keterangan, plus peta lokasi.
- Proyek sosial kelompok C++ — mentor Hiro Faletehan; anggota Icad, Alpi, Ashifa, Cepti, Ihsan, Putri, Reyhan, Nabil, Rayyan, Yoga.

## Cara kerja

- `src/routes/index.tsx` — seluruh isi halaman.
- `src/styles.css` — warna dan animasi.
- `src/assets/photos/` — 11 foto asli, ikut tersimpan di repository ini.
- `pages/` + `vite.pages.config.ts` — versi statis untuk GitHub Pages.
- `.github/workflows/pages.yml` — membangun dan menerbitkan situs setiap ada perubahan di `main`.

Alamat situs mengikuti nama repository. Kalau repository diganti nama, alamat `github.io` ikut berubah dan situs dibangun ulang otomatis.

## Development

```sh
git clone https://github.com/YOGASUAMIHATSUNEMIKU/kost-pondok-ashoka1.git
cd kost-pondok-ashoka1
bun install
bun run dev
```

Proyek ini dibuat dengan [Lovable](https://lovable.dev) dan tersinkron dua arah dengan repository ini.
