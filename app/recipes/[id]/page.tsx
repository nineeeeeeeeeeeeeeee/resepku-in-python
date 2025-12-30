"use client"
import { RecipeIngredients } from "@/components/recipe-ingredients"
import { RecipeInstructions } from "@/components/recipe-instructions"
import { RecipeMeta } from "@/components/recipe-meta"
import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"
import { Heart, Share2, Printer, Bookmark } from "lucide-react"
import Image from "next/image"
import { getRecipeById } from "@/lib/recipes-data"

export default async function RecipePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const recipe = getRecipeById(Number(resolvedParams.id))

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Resep Tidak Ditemukan</h1>
          <p className="text-muted-foreground">Maaf, resep yang Anda cari tidak tersedia.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <article className="container max-w-5xl mx-auto px-4 py-6">
          {/* Recipe Header */}
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{recipe.title}</h1>
            <RecipeMeta author={recipe.author} />
            {recipe.description && (
              <p className="text-muted-foreground mt-4 text-pretty leading-relaxed">{recipe.description}</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 mb-6 print:hidden">
            <Button variant="outline" className="gap-2 bg-transparent">
              <Bookmark className="h-4 w-4" />
              Simpan Resep
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Share2 className="h-4 w-4" />
              Bagikan
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent" onClick={() => window.print()}>
              <Printer className="h-4 w-4" />
              Print
            </Button>
          </div>

          {/* Recipe Image */}
          <div className="relative aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden rounded-lg mb-8">
            <Image src={recipe.image || "/placeholder.svg"} alt={recipe.title} fill className="object-cover" priority />
          </div>

          {/* Recipe Time Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 bg-accent/30 rounded-lg">
            <div>
              <div className="text-sm text-muted-foreground">Persiapan</div>
              <div className="font-semibold text-foreground">{recipe.prepTime}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Memasak</div>
              <div className="font-semibold text-foreground">{recipe.cookTime}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Total Waktu</div>
              <div className="font-semibold text-foreground">{recipe.totalTime}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Porsi</div>
              <div className="font-semibold text-foreground">{recipe.servings} porsi</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr] gap-8">
            {/* Ingredients Sidebar */}
            <aside className="print:break-inside-avoid">
              <RecipeIngredients ingredients={recipe.ingredients} servings={recipe.servings} />
            </aside>

            {/* Instructions */}
            <div>
              <RecipeInstructions instructions={recipe.instructions} />
            </div>
          </div>

          {/* Cooksnap Section */}
          <div className="mt-12 p-8 bg-accent/20 rounded-lg text-center print:hidden">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Bagikan Cooksnap Pertama!</h3>
              <p className="text-muted-foreground mb-4">
                Apakah kamu sudah membuat resep ini? Bagikan foto hasil kreasimu!
              </p>
              <Button className="gap-2">
                <Heart className="h-4 w-4" />
                Kirim Cooksnap
              </Button>
            </div>
          </div>
        </article>
      </main>
      <BottomNav />
    </div>
  )
}
