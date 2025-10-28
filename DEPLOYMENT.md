# Panduan Deployment ke GitHub Pages

Proyek ini telah dikonfigurasi untuk deployment otomatis ke GitHub Pages.

## Konfigurasi yang Telah Dilakukan

### 1. Vite Configuration
File `vite.config.ts` telah dikonfigurasi dengan:
- `base: "/"` - Mengatur aplikasi berjalan di root directory
- `host: "0.0.0.0"` - Memungkinkan akses dari luar
- `port: 5000` - Port untuk development server

### 2. GitHub Actions Workflow
File `.github/workflows/deploy.yml` telah dibuat untuk deployment otomatis:
- Trigger: Push ke branch `main`
- Build: Menggunakan `npm run build`
- Deploy: Otomatis ke GitHub Pages

## Cara Menggunakan

### Setup di GitHub Repository

1. **Push kode ke GitHub:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. **Aktifkan GitHub Pages:**
   - Buka repository di GitHub
   - Pergi ke Settings → Pages
   - Di bagian "Source", pilih "GitHub Actions"
   - Workflow akan berjalan otomatis setiap kali ada push ke branch `main`

3. **Akses Website:**
   - Setelah deployment selesai, website akan tersedia di:
   - `https://<username>.github.io/<repository-name>/` (jika bukan repository utama)
   - `https://<username>.github.io/` (jika repository bernama `<username>.github.io`)

### Development Lokal

Untuk menjalankan development server:
```bash
npm run dev
```
Server akan berjalan di `http://localhost:5000`

### Build Production

Untuk membuat production build:
```bash
npm run build
```
Output akan berada di folder `dist/`

### Preview Production Build

Untuk preview production build secara lokal:
```bash
npm run preview
```

## Catatan Penting

- Pastikan branch default adalah `main`
- GitHub Actions memerlukan permissions untuk deploy (sudah dikonfigurasi di workflow)
- Perubahan akan otomatis deploy setelah push ke branch `main`
- Build gagal? Cek tab "Actions" di repository GitHub untuk melihat error log

## Custom Domain (Opsional)

Jika ingin menggunakan custom domain:
1. Buat file `public/CNAME` dengan isi nama domain Anda
2. Konfigurasi DNS domain untuk mengarah ke GitHub Pages
3. Di Settings → Pages, masukkan custom domain

## Troubleshooting

**Problem:** Routing tidak bekerja di GitHub Pages
**Solusi:** Tambahkan file `public/404.html` yang redirect ke `index.html`

**Problem:** Assets tidak terload
**Solusi:** Pastikan `base` di `vite.config.ts` sesuai dengan path repository

**Problem:** Build gagal di GitHub Actions
**Solusi:** Cek compatibility Node.js version (workflow menggunakan Node 20)
