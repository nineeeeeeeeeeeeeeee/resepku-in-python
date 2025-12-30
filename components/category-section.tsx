import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { UtensilsCrossed, Coffee, Cookie } from "lucide-react"

const categories = [
  {
    slug: "makanan",
    name: "Masakan",
    description: "20 resep masakan Indonesia",
    icon: UtensilsCrossed,
    color: "bg-orange-500",
  },
  {
    slug: "minuman",
    name: "Minuman",
    description: "10 resep minuman segar",
    icon: Coffee,
    color: "bg-blue-500",
  },
  {
    slug: "jajanan",
    name: "Jajanan",
    description: "5 resep jajanan pasar",
    icon: Cookie,
    color: "bg-green-500",
  },
]

export function CategorySection() {
  return (
    <section className="px-4 py-8 bg-accent/20">
      <div className="container">
        <h2 className="text-2xl font-bold text-foreground mb-6">Jelajahi Kategori</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
