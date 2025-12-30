"use client"

import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { RecipeCard } from "@/components/recipe-card"
import { getRecipesByCategory } from "@/lib/recipes-data"
import { Badge } from "@/components/ui/badge"

const categoryNames = {
  makanan: "Masakan Indonesia",
  minuman: "Minuman Indonesia",
  jajanan: "Jajanan Indonesia",
}

const categoryDescriptions = {
  makanan: "Kumpulan resep masakan Indonesia yang lezat dan mudah dibuat",
  minuman: "Berbagai minuman tradisional dan modern khas Indonesia",
  jajanan: "Jajanan pasar dan camilan tradisional Indonesia",
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const category = resolvedParams.slug as "makanan" | "minuman" | "jajanan"

  if (!["makanan", "minuman", "jajanan"].includes(category)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Kategori Tidak Ditemukan</h1>
          <p className="text-muted-foreground">Silakan pilih kategori yang valid.</p>
        </div>
      </div>
    )
  }

  const recipes = getRecipesByCategory(category)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container max-w-6xl mx-auto px-4 py-6">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <h1 className="text-3xl font-bold text-foreground">{categoryNames[category]}</h1>
              <Badge variant="secondary" className="text-sm">
                {recipes.length} Resep
              </Badge>
            </div>
            <p className="text-muted-foreground">{categoryDescriptions[category]}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  )
}
