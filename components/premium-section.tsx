import { Crown, TrendingUp, Star } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PremiumSection() {
  return (
    <section className="px-4 py-8 bg-gradient-to-b from-accent/20 to-background">
      <div className="container">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <Crown className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Resepku Premium</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Temukan resep terpopuler di urutan teratas dan dapatkan akses ke fitur eksklusif
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Jajaran Resep Unggulan</CardTitle>
              <CardDescription>Resep yang menerima lebih dari 100 Cooksnap</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Paling Banyak Dilihat</CardTitle>
              <CardDescription>Resep yang paling banyak dilihat, diperbarui setiap hari</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Crown className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-lg">Menu Mingguan Premium</CardTitle>
              <CardDescription>Menu masak mingguan untukmu dan keluarga</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Mulai Premium
          </Button>
        </div>
      </div>
    </section>
  )
}
