import { Header } from "@/components/header"
import { SearchSection } from "@/components/search-section"
import { TrendingSearches } from "@/components/trending-searches"
import { CategorySection } from "@/components/category-section"
import { RecipeGrid } from "@/components/recipe-grid"
import { PremiumSection } from "@/components/premium-section"
import { BottomNav } from "@/components/bottom-nav"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SearchSection />
        <TrendingSearches />
        <CategorySection />
        <RecipeGrid />
        <PremiumSection />
      </main>
      <BottomNav />
    </div>
  )
}
