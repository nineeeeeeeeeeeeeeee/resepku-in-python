import Image from "next/image"
import Link from "next/link"

interface Author {
  name: string
  username: string
  location: string
  avatar: string
}

interface RecipeMetaProps {
  author: Author
}

export function RecipeMeta({ author }: RecipeMetaProps) {
  return (
    <div className="flex items-start gap-4 pb-4 border-b">
      <Link href={`/users/${author.username}`} className="flex-shrink-0">
        <Image
          src={author.avatar || "/placeholder.svg"}
          alt={author.name}
          width={48}
          height={48}
          className="rounded-full border-2 border-border"
        />
      </Link>
      <div className="flex-1">
        <Link href={`/users/${author.username}`} className="font-semibold text-foreground hover:underline">
          {author.name}
        </Link>
        <div className="text-sm text-muted-foreground">
          {author.username} • {author.location}
        </div>
      </div>
    </div>
  )
}
