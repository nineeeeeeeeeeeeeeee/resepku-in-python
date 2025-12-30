import { RecipeCard } from "@/components/recipe-card"
import { recipes } from "@/lib/recipes-data"

export function RecipeGrid() {
  return (
    <section className="px-4 py-8">
      <div className="container">
        <h2 className="text-2xl font-bold text-foreground mb-6">Resep Terbaru</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.slice(0, 12).map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  )
}
