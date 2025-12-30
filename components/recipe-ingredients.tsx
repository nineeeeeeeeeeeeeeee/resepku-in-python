import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface Ingredient {
  item: string
  category: string
}

interface RecipeIngredientsProps {
  ingredients: Ingredient[]
  servings: number
}

export function RecipeIngredients({ ingredients, servings }: RecipeIngredientsProps) {
  const groupedIngredients = ingredients.reduce(
    (acc, ingredient) => {
      const category = ingredient.category
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(ingredient)
      return acc
    },
    {} as Record<string, Ingredient[]>,
  )

  const categories = Object.keys(groupedIngredients)

  return (
    <Card className="sticky top-20 print:relative print:top-0">
      <CardHeader>
        <CardTitle className="text-xl">Bahan-bahan</CardTitle>
        <p className="text-sm text-muted-foreground">{servings} porsi</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {categories.map((category, categoryIndex) => (
          <div key={category}>
            {categoryIndex > 0 && <Separator className="my-4" />}
            {categories.length > 1 && <h4 className="font-semibold text-sm mb-3 text-foreground">{category}:</h4>}
            <ul className="space-y-2.5">
              {groupedIngredients[category].map((ingredient, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span className="text-foreground leading-relaxed">{ingredient.item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
