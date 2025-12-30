import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface Instruction {
  step: number
  description: string
  images?: string[]
}

interface RecipeInstructionsProps {
  instructions: Instruction[]
}

export function RecipeInstructions({ instructions }: RecipeInstructionsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Cara Membuat</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {instructions.map((instruction) => (
          <div key={instruction.step} className="print:break-inside-avoid">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                {instruction.step}
              </div>
              <div className="flex-1">
                <p className="text-foreground leading-relaxed mb-4">{instruction.description}</p>
                {instruction.images && instruction.images.length > 0 && (
                  <div className="grid grid-cols-3 gap-2">
                    {instruction.images.map((image, index) => (
                      <div key={index} className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`Step ${instruction.step} - Image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
