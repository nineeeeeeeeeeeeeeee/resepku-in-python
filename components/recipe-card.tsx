import { Heart, Camera } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface Recipe {
  id: number
  title: string
  author: {
    name: string
    username: string
    location: string
    avatar: string
  }
  image: string
  cooksnaps: number
  saves: number
}

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipes/${recipe.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={recipe.image || "/placeholder.svg"}
            alt={recipe.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-2 right-2 h-8 w-8 rounded-full bg-card/90 hover:bg-card"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-foreground mb-1 line-clamp-2 text-balance">{recipe.title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{recipe.author.name}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Camera className="h-4 w-4" />
              <span>{recipe.cooksnaps}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              <span>{recipe.saves}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
