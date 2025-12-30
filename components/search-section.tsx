"use client"

import type React from "react"

import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function SearchSection() {
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
    <section className="md:hidden px-4 py-4 border-b">
      <form onSubmit={handleSearch} className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="search"
          placeholder="Cari resep..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </form>
    </section>
  )
}
