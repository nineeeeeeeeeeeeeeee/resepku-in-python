"use client"

import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { RecipeCard } from "@/components/recipe-card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { useState, useEffect } from "react"
import { searchRecipes, recipes } from "@/lib/recipes-data"
import { useSearchParams } from "next/navigation"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""

  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState(recipes.slice(0, 12))

  useEffect(() => {
    if (query.trim() === "") {
      setResults(recipes.slice(0, 12))
    } else {
      const searchResults = searchRecipes(query)
      setResults(searchResults)
    }
  }, [query])

  useEffect(() => {
    setQuery(initialQuery)
  }, [initialQuery])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container max-w-6xl mx-auto px-4 py-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">Cari Resep</h1>
            <div className="relative max-w-2xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cari resep, bahan, atau kategori..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 pr-4 py-6 text-lg"
              />
            </div>
          </div>

          <div className="mb-6">
            <p className="text-muted-foreground">
              {query.trim() === "" ? (
                <>Menampilkan resep terbaru</>
              ) : (
                <>
                  Ditemukan <span className="font-semibold text-foreground">{results.length}</span> resep untuk "{query}
                  "
                </>
              )}
            </p>
          </div>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {results.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-2">Tidak ada resep ditemukan</p>
              <p className="text-sm text-muted-foreground">Coba kata kunci lain</p>
            </div>
          )}
        </div>
      </main>
      <BottomNav />
    </div>
  )
}
