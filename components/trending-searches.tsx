"use client"

import { TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

const trendingKeywords = [
  "ayam bakar",
  "ayam goreng mentega",
  "sambal goreng kentang ati ampela",
  "garang asem ayam",
  "ayam kecap pedas",
  "nasi kuning magic com",
  "capcay",
  "ayam bakar kecap",
  "rendang daging",
  "soto ayam",
  "nasi goreng",
  "bakso",
]

export function TrendingSearches() {
  const router = useRouter()

  return (
    <section className="px-4 py-6 border-b bg-accent/30">
      <div className="container">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Pencarian Populer</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Diperbarui {new Date().toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" })}{" "}
          {new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}
        </p>
        <div className="flex flex-wrap gap-2">
          {trendingKeywords.map((keyword, index) => (
            <Badge
              key={index}
              variant="secondary"
              onClick={() => router.push(`/search?q=${encodeURIComponent(keyword)}`)}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {keyword}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
