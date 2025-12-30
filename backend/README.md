# Resepku Backend API (Python Flask)

Backend API untuk aplikasi Resepku menggunakan Python Flask.

## Instalasi

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Jalankan server:
```bash
python app.py
```

Server akan berjalan di `http://localhost:5000`

## API Endpoints

### 1. Get All Recipes
```
GET /api/recipes
```

### 2. Get Recipe by ID
```
GET /api/recipes/:id
```

### 3. Search Recipes
```
GET /api/search?q=query
```

### 4. Get Recipes by Category
```
GET /api/categories/:category
```

### 5. Get All Categories
```
GET /api/categories
```

### 6. Get Trending Keywords
```
GET /api/trending
```

### 7. Health Check
```
GET /api/health
```

## Testing API

Gunakan tools seperti Postman atau curl untuk testing:

```bash
# Get all recipes
curl http://localhost:5000/api/recipes

# Search recipes
curl http://localhost:5000/api/search?q=rendang

# Get recipe by ID
curl http://localhost:5000/api/recipes/1
