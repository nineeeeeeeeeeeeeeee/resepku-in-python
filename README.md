# Resepku - Platform Berbagi Resep Indonesia

[![Python](https://img.shields.io/badge/Python-3.8+-blue?style=for-the-badge&logo=python)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-3.0-green?style=for-the-badge&logo=flask)](https://flask.palletsprojects.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Deskripsi

**Resepku** adalah platform berbagi resep masakan Indonesia yang dibangun dengan arsitektur hybrid:
- **Backend:** Python Flask untuk REST API
- **Frontend:** HTML, CSS, dan JavaScript murni (vanilla)

Platform ini memiliki 35 resep Indonesia lengkap (20 masakan, 10 minuman, 5 jajanan) dengan bahan-bahan dan instruksi pembuatan yang detail.

## Fitur Utama

- 35 Resep Indonesia lengkap dengan gambar, bahan, dan cara membuat
- Pencarian resep berdasarkan keyword
- Filter resep berdasarkan kategori (Masakan, Minuman, Jajanan)
- Detail resep lengkap dengan instruksi step-by-step
- Fitur print resep yang dioptimalkan untuk printer
- Responsive design (mobile, tablet, desktop)
- REST API yang clean dan mudah digunakan

## Struktur Proyek

```
resepku/
├── backend/                    # Python Flask Backend
│   ├── app.py                 # Flask application dan API routes
│   ├── data/
│   │   └── recipes.py         # Data 35 resep Indonesia
│   ├── requirements.txt       # Python dependencies
│   └── README.md             # Backend documentation
│
├── frontend/                  # HTML/CSS/JS Frontend
│   ├── index.html            # Homepage
│   ├── recipe.html           # Detail resep
│   ├── search.html           # Halaman pencarian
│   ├── styles/
│   │   ├── main.css          # Styling utama
│   │   ├── components.css    # Styling komponen
│   │   └── recipe-detail.css # Styling detail resep
│   ├── scripts/
│   │   ├── config.js         # Konfigurasi API
│   │   ├── api.js            # Fungsi API calls
│   │   ├── main.js           # Script homepage
│   │   ├── search.js         # Script pencarian
│   │   └── recipe-detail.js  # Script detail resep
│   └── README.md             # Frontend documentation
│
├── DOCUMENTATION.md          # Dokumentasi lengkap
└── README.md                 # File ini
```

## Cara Menjalankan

### 1. Setup Backend (Python Flask)

```bash
# Masuk ke folder backend
cd backend

# Install dependencies
pip install -r requirements.txt

# Jalankan Flask server
python app.py
```

Backend akan berjalan di `http://localhost:5000`

### 2. Setup Frontend (HTML/CSS/JS)

**Opsi A: Python HTTP Server**
```bash
cd frontend
python -m http.server 8000
```

**Opsi B: PHP Built-in Server**
```bash
cd frontend
php -S localhost:8000
```

**Opsi C: Live Server (VS Code Extension)**
1. Install extension "Live Server" di VS Code
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"

Frontend akan berjalan di `http://localhost:8000`

## API Endpoints

### Get All Recipes
```
GET /api/recipes
```

### Get Recipe by ID
```
GET /api/recipes/:id
```

### Search Recipes
```
GET /api/search?q=keyword
```

### Get Recipes by Category
```
GET /api/categories/:category
```

### Get All Categories
```
GET /api/categories
```

### Get Trending Keywords
```
GET /api/trending
```

### Health Check
```
GET /api/health
```

## Teknologi yang Digunakan

### Backend
- **Python 3.8+** - Bahasa pemrograman
- **Flask 3.0** - Web framework untuk REST API
- **Flask-CORS** - Handling Cross-Origin Resource Sharing

### Frontend
- **HTML5** - Struktur halaman web
- **CSS3** - Styling dan layout
- **JavaScript (Vanilla)** - Interaktivitas dan API calls
- **Fetch API** - HTTP requests ke backend

## Fitur Detail

### Homepage
- Header dengan logo dan search bar
- Trending search keywords
- Kategori resep (Masakan, Minuman, Jajanan)
- Grid semua resep dengan gambar dan info

### Halaman Detail Resep
- Gambar resep berkualitas tinggi
- Informasi lengkap (waktu memasak, porsi, dll)
- Bahan-bahan terorganisir per kategori
- Instruksi memasak step-by-step
- Informasi author (nama, lokasi)
- Tombol print resep

### Halaman Pencarian
- Search bar untuk mencari resep
- Hasil pencarian berdasarkan keyword
- Filter berdasarkan kategori
- Tampilan grid hasil pencarian

### Fitur Print
- Layout optimized untuk printer
- Menghilangkan elemen UI yang tidak perlu
- Format yang rapi dan mudah dibaca
- CSS `@media print` untuk styling khusus

## Konfigurasi

Untuk mengubah URL API backend, edit file `frontend/scripts/config.js`:

```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

Untuk production, ubah ke URL server production Anda.

## Resep yang Tersedia

### Masakan (20 resep)
1. Rendang Daging Sapi
2. Soto Ayam Lamongan
3. Nasi Goreng Kampung
4. Gado-Gado Jakarta
5. Ayam Geprek Sambal Bawang
6. Sate Ayam Madura
7. Rawon Daging Sapi
8. Gulai Kambing
9. Pecel Lele
10. Bakso Sapi
11. Sayur Asem Jakarta
12. Pempek Palembang
13. Iga Bakar Madu
14. Sop Buntut
15. Opor Ayam
16. Nasi Liwet Solo
17. Ayam Taliwang
18. Semur Daging Sapi
19. Capcay
20. Tongseng Kambing

### Minuman (10 resep)
21. Es Teh Manis
22. Es Jeruk
23. Es Kelapa Muda
24. Wedang Jahe
25. Es Campur
26. Bandrek
27. Es Cendol
28. Bajigur
29. Es Buah Segar
30. Sekoteng

### Jajanan (5 resep)
31. Pisang Goreng
32. Lemper Ayam
33. Risoles Mayo
34. Onde-Onde
35. Martabak Manis

## Pengembangan Lebih Lanjut

### Backend
- Tambahkan database (PostgreSQL, MySQL, MongoDB)
- Implementasi user authentication
- Upload gambar resep
- Rating dan review system
- User favorites/bookmarks

### Frontend
- Implementasi state management
- Offline support dengan Service Workers
- Progressive Web App (PWA)
- Dark mode
- Multi-language support

## Lisensi

This project is open source and available for educational purposes.

## Kontak

Untuk pertanyaan atau saran, silakan buka issue di repository ini.

---

**Built with Python Flask + HTML/CSS/JavaScript**
