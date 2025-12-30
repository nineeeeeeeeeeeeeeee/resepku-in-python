# Resepku Frontend (HTML/CSS/JavaScript)

Frontend statis untuk aplikasi Resepku menggunakan HTML, CSS, dan JavaScript murni.

## Struktur File

```
frontend/
├── index.html          # Halaman utama
├── recipe.html         # Halaman detail resep
├── search.html         # Halaman hasil pencarian
├── styles/
│   ├── main.css        # Style utama
│   ├── components.css  # Style komponen
│   └── recipe-detail.css # Style detail resep
└── scripts/
    ├── config.js       # Konfigurasi API
    ├── api.js          # Fungsi API
    ├── main.js         # Script halaman utama
    ├── search.js       # Script halaman pencarian
    └── recipe-detail.js # Script detail resep
```

## Cara Menjalankan

### Opsi 1: Python HTTP Server
```bash
cd frontend
python -m http.server 8000
```
Buka: http://localhost:8000

### Opsi 2: PHP Built-in Server
```bash
cd frontend
php -S localhost:8000
```

### Opsi 3: Live Server (VS Code Extension)
1. Install extension "Live Server" di VS Code
2. Klik kanan pada index.html
3. Pilih "Open with Live Server"

## Konfigurasi

Edit `scripts/config.js` untuk mengubah URL API:
```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

## Fitur

1. **Halaman Utama (index.html)**
   - Pencarian resep
   - Trending keywords
   - Kategori resep
   - Grid semua resep

2. **Halaman Pencarian (search.html)**
   - Hasil pencarian berdasarkan keyword
   - Filter berdasarkan kategori
   - Tampilan grid resep

3. **Halaman Detail (recipe.html)**
   - Detail resep lengkap
   - Bahan-bahan terorganisir per kategori
   - Instruksi step-by-step
   - Fitur print resep
   - Informasi author

## Catatan Penting

- Pastikan Flask backend sudah berjalan di http://localhost:5000
- Browser modern diperlukan untuk menjalankan aplikasi ini
- Untuk production, ubah API_BASE_URL ke URL server production Anda
