# Resepku - Recipe Sharing Platform Documentation

## Deskripsi Proyek

**Resepku** adalah platform berbagi resep masakan Indonesia yang terinspirasi dari Cookpad. Platform ini memungkinkan pengguna untuk menjelajahi, mencari, dan melihat detail resep masakan dengan antarmuka yang responsif dan ramah pengguna.

---

## 📋 Daftar Isi

1. [Teknologi yang Digunakan](#teknologi-yang-digunakan)
2. [Struktur Proyek](#struktur-proyek)
3. [Fitur Utama](#fitur-utama)
4. [Komponen dan Fungsinya](#komponen-dan-fungsinya)
5. [Halaman](#halaman)
6. [Model Data](#model-data)
7. [Styling dan Desain](#styling-dan-desain)
8. [Fitur Print](#fitur-print)
9. [Cara Penggunaan](#cara-penggunaan)
10. [Pengembangan Lebih Lanjut](#pengembangan-lebih-lanjut)

---

## 🛠️ Teknologi yang Digunakan

### Framework & Library
- **Next.js 16** - Framework React dengan App Router untuk server-side rendering
- **React 19** - Library JavaScript untuk membangun user interface
- **TypeScript** - Superset JavaScript dengan static typing
- **Tailwind CSS v4** - Utility-first CSS framework untuk styling

### UI Components
- **shadcn/ui** - Koleksi komponen UI yang dapat digunakan ulang
- **Lucide React** - Icon library untuk React
- **Radix UI** - Primitif UI yang accessible untuk komponen kompleks

### Font
- **Geist Sans** - Font utama untuk teks body
- **Geist Mono** - Font monospace untuk kode (jika diperlukan)

### Deployment
- **Vercel** - Platform hosting dan deployment
- **Vercel Analytics** - Analytics untuk monitoring performa

---

## 📁 Struktur Proyek

\`\`\`
resepku/
├── app/                          # Next.js App Router
│   ├── recipes/                  # Route untuk halaman resep
│   │   └── [id]/                 # Dynamic route untuk detail resep
│   │       └── page.tsx          # Halaman detail resep
│   ├── globals.css               # Global CSS dengan Tailwind & print styles
│   ├── layout.tsx                # Root layout dengan metadata
│   ├── page.tsx                  # Homepage
│   └── loading.tsx               # Loading state
│
├── components/                   # React components
│   ├── ui/                       # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── separator.tsx
│   │   └── ... (50+ komponen lainnya)
│   │
│   ├── header.tsx                # Header navigasi dengan search
│   ├── search-section.tsx        # Search bar untuk mobile
│   ├── trending-searches.tsx     # Keyword pencarian populer
│   ├── recipe-grid.tsx           # Grid layout untuk daftar resep
│   ├── recipe-card.tsx           # Card individual resep
│   ├── recipe-meta.tsx           # Info author dan reactions
│   ├── recipe-ingredients.tsx    # Daftar bahan-bahan
│   ├── recipe-instructions.tsx   # Langkah-langkah memasak
│   ├── premium-section.tsx       # Section premium
│   └── bottom-nav.tsx            # Bottom navigation bar
│
├── public/                       # Static assets
│   ├── images/                   # Gambar resep dan user avatars
│   └── icons/                    # Icons dan favicons
│
├── DOCUMENTATION.md              # File dokumentasi ini
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript configuration
└── next.config.mjs               # Next.js configuration
\`\`\`

---

## ✨ Fitur Utama

### 1. **Homepage (Landing Page)**
- Header dengan logo dan search bar
- Trending searches/pencarian populer
- Grid resep terbaru dengan thumbnail
- Responsive design (mobile, tablet, desktop)

### 2. **Halaman Detail Resep**
- **Informasi Lengkap Resep:**
  - Judul resep
  - Author dengan avatar dan lokasi
  - Deskripsi resep
  - Gambar resep berkualitas tinggi
  - Waktu persiapan, memasak, dan total
  - Jumlah porsi
  
- **Bahan-bahan:**
  - Daftar bahan utama
  - Daftar bumbu halus (jika ada)
  - Sticky sidebar untuk akses mudah saat scroll
  
- **Cara Membuat:**
  - Langkah-langkah bernomor
  - Deskripsi detail setiap langkah
  - Gambar untuk setiap langkah (opsional)
  
- **Action Buttons:**
  - Simpan Resep (bookmark)
  - Bagikan ke media sosial
  - Print resep

- **Reactions:**
  - Emoji reactions (😋 lapar, ❤️ love, 👏 applause)
  - Jumlah cooksnaps dan saves

### 3. **Fitur Pencarian**
- Search bar di header (desktop)
- Search bar terpisah untuk mobile
- Trending keywords yang dapat diklik

### 4. **Fitur Print**
- Layout optimized untuk printer
- Menghilangkan elemen UI yang tidak perlu (header, button, nav)
- Format yang rapi dan mudah dibaca
- Gambar dengan ukuran optimal
- Page breaks yang smart untuk menghindari pemisahan konten

---

## 🧩 Komponen dan Fungsinya

### Core Components

#### 1. **Header** (`components/header.tsx`)
**Fungsi:** Navigasi utama aplikasi

**Fitur:**
- Logo Resepku dengan link ke homepage
- Search bar (desktop) dengan icon
- Button "Masuk" dan "Tulis Resep"
- Sticky positioning untuk tetap terlihat saat scroll

**Props:** Tidak ada (stateless component)

---

#### 2. **RecipeCard** (`components/recipe-card.tsx`)
**Fungsi:** Menampilkan preview resep dalam bentuk card

**Fitur:**
- Thumbnail gambar resep dengan hover effect
- Judul dan nama author
- Statistik (cooksnaps dan saves)
- Heart button untuk save
- Link ke halaman detail

**Props:**
\`\`\`typescript
interface Recipe {
  id: number
  title: string
  author: string
  image: string
  cooksnaps: number
  saves: number
}
\`\`\`

---

#### 3. **RecipeMeta** (`components/recipe-meta.tsx`)
**Fungsi:** Menampilkan informasi author dan reactions

**Fitur:**
- Avatar author (circular)
- Nama, username, dan lokasi
- Emoji reactions dengan jumlah

**Props:**
\`\`\`typescript
interface Author {
  name: string
  username: string
  location: string
  avatar: string
}

interface RecipeMetaProps {
  author: Author
  reactions: {
    hungry?: number
    love?: number
    applause?: number
  }
}
\`\`\`

---

#### 4. **RecipeIngredients** (`components/recipe-ingredients.tsx`)
**Fungsi:** Menampilkan daftar bahan-bahan resep

**Fitur:**
- Card dengan sticky positioning
- Jumlah porsi
- Bahan utama dan bumbu halus terpisah
- Bullet points dengan warna primary
- Separator antara kategori

**Props:**
\`\`\`typescript
interface Ingredient {
  item: string
  category: 'main' | 'spices'
}

interface RecipeIngredientsProps {
  ingredients: Ingredient[]
  servings: number
}
\`\`\`

---

#### 5. **RecipeInstructions** (`components/recipe-instructions.tsx`)
**Fungsi:** Menampilkan langkah-langkah memasak

**Fitur:**
- Nomor step dalam circle badge
- Deskripsi detail setiap langkah
- Grid gambar untuk setiap step (3 kolom)
- Print-friendly layout

**Props:**
\`\`\`typescript
interface Instruction {
  step: number
  description: string
  images?: string[]
}

interface RecipeInstructionsProps {
  instructions: Instruction[]
}
\`\`\`

---

#### 6. **TrendingSearches** (`components/trending-searches.tsx`)
**Fungsi:** Menampilkan keyword pencarian yang trending

**Fitur:**
- Icon trending up
- Timestamp update (tanggal dan waktu)
- Badge untuk setiap keyword
- Hover effect dengan warna primary

**Data:** Array of strings dengan keyword populer

---

#### 7. **RecipeGrid** (`components/recipe-grid.tsx`)
**Fungsi:** Layout grid untuk menampilkan multiple resep

**Fitur:**
- Responsive grid (1-4 kolom tergantung screen size)
- Gap konsisten antar card
- Heading "Resep Terbaru"

**Layout:**
- Mobile: 1 kolom
- Tablet: 2 kolom
- Desktop: 3 kolom
- Large Desktop: 4 kolom

---

## 📄 Halaman

### 1. Homepage (`app/page.tsx`)

**URL:** `/`

**Struktur:**
\`\`\`
┌─────────────────────────┐
│       Header            │
├─────────────────────────┤
│   Search Section        │
│   (Mobile Only)         │
├─────────────────────────┤
│   Trending Searches     │
├─────────────────────────┤
│                         │
│    Recipe Grid          │
│  ┌───┐ ┌───┐ ┌───┐     │
│  │ R │ │ R │ │ R │     │
│  └───┘ └───┘ └───┘     │
│  ┌───┐ ┌───┐ ┌───┐     │
│  │ R │ │ R │ │ R │     │
│  └───┘ └───┘ └───┘     │
│                         │
├─────────────────────────┤
│   Premium Section       │
├─────────────────────────┤
│    Bottom Nav           │
└─────────────────────────┘
\`\`\`

**Komponen yang Digunakan:**
- Header
- SearchSection
- TrendingSearches
- RecipeGrid
- PremiumSection
- BottomNav

---

### 2. Recipe Detail Page (`app/recipes/[id]/page.tsx`)

**URL:** `/recipes/[id]`

**Dynamic Route:** Menggunakan ID resep sebagai parameter

**Struktur:**
\`\`\`
┌────────────────────────────────────┐
│           Header                   │
├────────────────────────────────────┤
│  Title: Udang Saus Padang Vol. 2  │
│  Author Info & Reactions           │
│  Description                       │
├────────────────────────────────────┤
│  [Simpan] [Bagikan] [Print]       │
├────────────────────────────────────┤
│      Recipe Image (16:9)           │
├────────────────────────────────────┤
│  Persiapan | Memasak | Total       │
├──────────────────┬─────────────────┤
│  Bahan-bahan     │  Cara Membuat   │
│  (Sidebar)       │                 │
│  • Udang         │  1. Goreng...   │
│  • Jagung        │  [images]       │
│  • Cabe          │                 │
│                  │  2. Tumis...    │
│  Bumbu Halus:    │  [images]       │
│  • Bawang        │                 │
│  • Cabe          │  3. ...         │
│                  │                 │
└──────────────────┴─────────────────┘
│   Bagikan Cooksnap Pertama!       │
└────────────────────────────────────┘
│        Bottom Nav                  │
└────────────────────────────────────┘
\`\`\`

**Komponen yang Digunakan:**
- Header
- RecipeMeta
- RecipeIngredients
- RecipeInstructions
- BottomNav

**Fitur Khusus:**
- Sticky ingredients sidebar
- Print functionality dengan CSS optimized
- Image gallery untuk setiap step
- Responsive layout (sidebar menjadi atas di mobile)

---

## 💾 Model Data

### Recipe Interface
\`\`\`typescript
interface Recipe {
  id: number
  title: string
  author: {
    name: string
    username: string
    location: string
    avatar: string
  }
  description: string
  image: string
  prepTime: string
  cookTime: string
  totalTime: string
  servings: number
  cooksnaps: number
  saves: number
  reactions: {
    hungry?: number
    love?: number
    applause?: number
  }
  ingredients: Ingredient[]
  instructions: Instruction[]
}
\`\`\`

### Ingredient Interface
\`\`\`typescript
interface Ingredient {
  item: string          // Nama bahan dan jumlahnya
  category: string      // 'main' atau 'spices'
}
\`\`\`

### Instruction Interface
\`\`\`typescript
interface Instruction {
  step: number          // Nomor urut langkah
  description: string   // Penjelasan lengkap
  images?: string[]     // Array URL gambar (opsional)
}
\`\`\`

---

## 🎨 Styling dan Desain

### Color Palette

**Light Mode:**
- **Background:** `oklch(0.99 0 0)` - Putih hangat
- **Foreground:** `oklch(0.25 0 0)` - Hitam soft
- **Primary:** `oklch(0.52 0.15 18)` - Orange kemerahan (cocok untuk food)
- **Accent:** `oklch(0.95 0.02 80)` - Krem lembut
- **Muted:** `oklch(0.96 0 0)` - Abu-abu sangat terang

**Dark Mode:**
- **Background:** `oklch(0.145 0 0)` - Hitam gelap
- **Foreground:** `oklch(0.985 0 0)` - Putih terang
- **Primary:** `oklch(0.985 0 0)` - Putih
- **Card:** `oklch(0.145 0 0)` - Sama dengan background

### Typography
- **Font Family:** Geist Sans (modern, readable)
- **Heading:** Bold weights untuk hierarchy
- **Body:** Regular weight, line-height 1.5-1.6

### Spacing System
- Menggunakan Tailwind spacing scale (4px increment)
- Consistent gaps dalam grid dan card layouts

### Responsive Breakpoints
\`\`\`css
sm:  640px   (tablet)
md:  768px   (landscape tablet)
lg:  1024px  (desktop)
xl:  1280px  (large desktop)
\`\`\`

### Design Principles
1. **Mobile-First:** Didesain untuk mobile terlebih dahulu
2. **Hierarchy:** Clear visual hierarchy dengan typography
3. **Whitespace:** Generous spacing untuk readability
4. **Consistency:** Konsisten dalam spacing, colors, dan typography
5. **Accessibility:** Semantic HTML dan ARIA labels

---

## 🖨️ Fitur Print

### Cara Menggunakan
1. Buka halaman detail resep
2. Klik tombol "Print" di bagian action buttons
3. Browser akan membuka print dialog
4. Pilih printer atau "Save as PDF"
5. Print!

### Optimasi Print

**CSS Print Styles** (`@media print` in `globals.css`):

1. **Hide Non-Essential Elements:**
   - Header navigation
   - Bottom navigation bar
   - All buttons dan interactive elements
   - Social media buttons

2. **Optimize Layout:**
   - Full width content (no max-width constraints)
   - Remove padding/margins yang tidak perlu
   - Black text on white background

3. **Typography Adjustments:**
   - H1: 28pt (readable title size)
   - H2/H3: 16pt (clear section headers)
   - Body: 11pt (standard print size)
   - Line height: 1.5 (optimal for reading)

4. **Image Handling:**
   - Max width 100% (fit to page)
   - Page break avoid (keep images with content)

5. **Smart Page Breaks:**
   - Avoid breaking inside ingredients list
   - Avoid breaking inside instruction steps
   - Keep headings with their content

6. **Border Styles:**
   - Subtle borders untuk cards (1px solid)
   - Remove shadows (no visual distractions)

### Print Layout Structure
\`\`\`
┌────────────────────────────┐
│  UDANG SAUS PADANG VOL. 2  │
│  by Febry Caturia          │
│  Bekasi                    │
│                            │
│  Persiapan: 15 menit       │
│  Memasak: 30 menit         │
│  Total: 45 menit           │
│  Porsi: 6                  │
├────────────────────────────┤
│  [Recipe Image]            │
├────────────────────────────┤
│  BAHAN-BAHAN               │
│  • 500 gr udang            │
│  • 1 bh jagung manis       │
│  ...                       │
│                            │
│  Bumbu Halus:              │
│  • 5 siung bawang putih    │
│  ...                       │
├────────────────────────────┤
│  CARA MEMBUAT              │
│  1. Goreng udang...        │
│     [Step images]          │
│                            │
│  2. Tumis bumbu...         │
│     [Step images]          │
│  ...                       │
└────────────────────────────┘
\`\`\`

---

## 📖 Cara Penggunaan

### Untuk Developer

#### 1. Setup Proyek
\`\`\`bash
# Clone atau download project
cd resepku

# Install dependencies (jika ada package.json)
npm install

# Run development server
npm run dev

# Buka browser
# http://localhost:3000
\`\`\`

#### 2. Menambah Resep Baru

Edit file `app/recipes/[id]/page.tsx`, tambahkan data di object `recipeData`:

\`\`\`typescript
const recipeData = {
  // ... resep existing
  "3": {  // ID baru
    id: 3,
    title: "Nasi Goreng Spesial",
    author: {
      name: "Warung Pak Budi",
      username: "@pakbudi",
      location: "Jakarta",
      avatar: "/avatar.png"
    },
    description: "Nasi goreng dengan bumbu rahasia",
    image: "/nasi-goreng.jpg",
    prepTime: "10 menit",
    cookTime: "15 menit",
    totalTime: "25 menit",
    servings: 4,
    cooksnaps: 312,
    saves: 1450,
    reactions: { hungry: 20, love: 30, applause: 10 },
    ingredients: [
      { item: "500 gr nasi putih", category: "main" },
      { item: "2 butir telur", category: "main" },
      // ... tambah bahan lain
    ],
    instructions: [
      {
        step: 1,
        description: "Panaskan minyak...",
        images: ["/step1.jpg"]
      },
      // ... tambah langkah lain
    ]
  }
}
\`\`\`

#### 3. Menambah Resep di Homepage

Edit `components/recipe-grid.tsx`, tambahkan di array `recipes`:

\`\`\`typescript
const recipes = [
  // ... resep existing
  {
    id: 9,  // ID harus match dengan recipeData
    title: "Nasi Goreng Spesial",
    author: "Warung Pak Budi",
    image: "/nasi-goreng.jpg",
    cooksnaps: 312,
    saves: 1450,
  }
]
\`\`\`

#### 4. Customize Styling

Edit `app/globals.css` untuk mengubah warna:

\`\`\`css
:root {
  --primary: oklch(0.52 0.15 18);  /* Ubah warna primary */
  --accent: oklch(0.95 0.02 80);   /* Ubah warna accent */
}
\`\`\`

---

### Untuk User (End User)

#### 1. Browsing Resep
- Buka homepage
- Scroll untuk melihat resep terbaru
- Klik trending keywords untuk pencarian cepat
- Gunakan search bar untuk mencari resep spesifik

#### 2. Melihat Detail Resep
- Klik pada card resep yang menarik
- Baca informasi lengkap: bahan, cara membuat, waktu
- Scroll sidebar ingredients akan tetap terlihat (desktop)

#### 3. Menyimpan Resep
- Klik tombol "Simpan Resep" (bookmark icon)
- Resep akan tersimpan (jika ada fitur backend)

#### 4. Membagikan Resep
- Klik tombol "Bagikan"
- Pilih platform (social media, email, dll)

#### 5. Print Resep
- Klik tombol "Print"
- Pilih printer atau save as PDF
- Format akan otomatis disesuaikan untuk print

---

## 🚀 Pengembangan Lebih Lanjut

### Backend Integration

#### 1. Database
**Rekomendasi:** Supabase atau Neon (PostgreSQL)

**Schema Tables:**
\`\`\`sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username VARCHAR(50) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  avatar_url TEXT,
  location VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Recipes table
CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  title VARCHAR(200) NOT NULL,
  description TEXT,
  image_url TEXT,
  prep_time VARCHAR(20),
  cook_time VARCHAR(20),
  total_time VARCHAR(20),
  servings INT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Ingredients table
CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY,
  recipe_id INT REFERENCES recipes(id) ON DELETE CASCADE,
  item TEXT NOT NULL,
  category VARCHAR(20),  -- 'main' or 'spices'
  order_index INT
);

-- Instructions table
CREATE TABLE instructions (
  id SERIAL PRIMARY KEY,
  recipe_id INT REFERENCES recipes(id) ON DELETE CASCADE,
  step_number INT NOT NULL,
  description TEXT NOT NULL,
  order_index INT
);

-- Instruction Images table
CREATE TABLE instruction_images (
  id SERIAL PRIMARY KEY,
  instruction_id INT REFERENCES instructions(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  order_index INT
);

-- Saves table (bookmark)
CREATE TABLE saves (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  recipe_id INT REFERENCES recipes(id),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, recipe_id)
);

-- Reactions table
CREATE TABLE reactions (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  recipe_id INT REFERENCES recipes(id),
  reaction_type VARCHAR(20),  -- 'hungry', 'love', 'applause'
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, recipe_id, reaction_type)
);

-- Cooksnaps table
CREATE TABLE cooksnaps (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  recipe_id INT REFERENCES recipes(id),
  image_url TEXT NOT NULL,
  caption TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

#### 2. API Routes

**Create:** `app/api/recipes/route.ts`
\`\`\`typescript
// GET all recipes
export async function GET(request: Request) {
  // Fetch dari database
  // Return JSON
}

// POST new recipe
export async function POST(request: Request) {
  // Validate data
  // Insert ke database
  // Return success
}
\`\`\`

**Create:** `app/api/recipes/[id]/route.ts`
\`\`\`typescript
// GET single recipe
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  // Fetch recipe by ID
  // Return JSON with ingredients and instructions
}

// PUT update recipe
// DELETE recipe
\`\`\`

#### 3. Authentication
**Rekomendasi:** Supabase Auth atau NextAuth.js

**Features:**
- Email/password login
- Social login (Google, Facebook)
- Protected routes untuk create/edit recipe
- User profile management

---

### Fitur Tambahan yang Bisa Dikembangkan

#### 1. **Search & Filter**
- Real-time search dengan debouncing
- Filter by:
  - Kategori (appetizer, main course, dessert)
  - Waktu memasak
  - Tingkat kesulitan
  - Bahan utama
- Sort by: terbaru, terpopuler, rating tertinggi

#### 2. **User Features**
- User registration & login
- User profile page
- Upload recipe dengan form
- Edit & delete own recipes
- Follow other users
- Personal recipe collection (saved recipes)

#### 3. **Social Features**
- Comment system
- Rating system (1-5 stars)
- Cooksnap gallery untuk setiap resep
- Share ke social media (Facebook, Twitter, WhatsApp)

#### 4. **Advanced Features**
- Recipe recommendations based on user preference
- Meal planner (plan menu untuk seminggu)
- Shopping list generator dari resep
- Nutrition information calculator
- Video tutorial upload
- Multi-language support (ID, EN)

#### 5. **Performance Optimization**
- Image optimization dengan Next.js Image
- Lazy loading untuk images
- Infinite scroll untuk recipe grid
- Caching dengan SWR atau React Query
- CDN untuk static assets

#### 6. **PWA (Progressive Web App)**
- Offline support
- Install to home screen
- Push notifications untuk resep baru
- Offline recipe reading

#### 7. **Admin Panel**
- Moderate recipes
- Manage users
- Analytics dashboard
- Featured recipes management

---

## 🔧 Troubleshooting

### Common Issues

#### 1. Images Not Loading
**Problem:** Gambar tidak muncul atau broken image

**Solution:**
- Pastikan path image benar di `public/` folder
- Untuk placeholder: gunakan `/placeholder.svg?height=400&width=600`
- Check file extension (jpg, png, webp)
- Verify image sudah di-generate atau di-upload

#### 2. Print Layout Tidak Rapi
**Problem:** Print output berantakan

**Solution:**
- Pastikan CSS print styles sudah di-load
- Check `@media print` di `globals.css`
- Test di browser yang berbeda (Chrome, Firefox)
- Adjust margin di print settings

#### 3. Responsive Issues
**Problem:** Layout broken di mobile atau desktop

**Solution:**
- Test dengan DevTools responsive mode
- Check breakpoint Tailwind: `sm:`, `md:`, `lg:`
- Verify flex/grid properties
- Use `container` class untuk max-width

#### 4. Recipe Not Found
**Problem:** Klik recipe card → 404 error

**Solution:**
- Pastikan ID di RecipeCard match dengan recipeData
- Check dynamic route: `app/recipes/[id]/page.tsx`
- Verify Link href: \`/recipes/$\{recipe.id\}\`

---

## 📝 Code Style Guidelines

### TypeScript
- Use interfaces untuk type definitions
- Avoid `any` type
- Use optional chaining: `author?.name`
- Destructure props: `{ recipe }` instead of `props.recipe`

### React Components
- Use functional components dengan hooks
- Client components: use `"use client"` directive
- Server components: default (no directive needed)
- Props interface di atas component

### Naming Conventions
- Components: PascalCase (`RecipeCard`)
- Files: kebab-case (`recipe-card.tsx`)
- Functions: camelCase (`getRecipeById`)
- Constants: UPPER_SNAKE_CASE (`MAX_RECIPES`)

### Tailwind CSS
- Use semantic classes: `text-foreground` > `text-black`
- Group classes: layout → spacing → colors → effects
- Use line breaks untuk readability
- Responsive modifiers terakhir

---

## 📞 Support & Contributing

### Untuk Bug Reports
1. Screenshot issue
2. Describe steps untuk reproduce
3. Browser dan device information
4. Error message dari console (jika ada)

### Untuk Feature Requests
1. Describe fitur yang diinginkan
2. Use case / skenario penggunaan
3. Mockup atau wireframe (opsional)

---

## 📜 License

Project ini dibuat untuk keperluan edukasi dan portfolio. Feel free to use and modify!

---

## 👨‍💻 Credits

**Dibuat dengan:**
- Next.js by Vercel
- shadcn/ui by shadcn
- Tailwind CSS by Tailwind Labs
- Lucide Icons by Lucide
- Inspiration: Cookpad Indonesia

---

**Terakhir diupdate:** 30 Desember 2024

**Versi:** 1.0.0

---

## 📚 Referensi & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)
