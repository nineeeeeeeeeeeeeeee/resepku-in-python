"use client"

import type React from "react"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function Header() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    } else {
      router.push("/search")
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary">
            <span className="text-primary-foreground font-bold text-lg">R</span>
          </div>
          <span className="font-bold text-xl text-foreground">Resepku</span>
        </Link>

        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Cari resep..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </form>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden md:inline-flex">
            Masuk
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Tulis Resep</Button>
        </div>
      </div>
    </header>
  )
}
