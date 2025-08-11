"use client"
import { BaseCard } from "../../base/base-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface AiLearningCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  onStart?: () => void
  onDetails?: () => void
}

export function AiLearningCard({ title, description, tags, imageUrl, onStart, onDetails }: AiLearningCardProps) {
  return (
    <BaseCard className="w-full max-w-sm overflow-hidden">
      <div className="relative">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={400}
          height={225}
          className="aspect-video w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="mb-3 text-sm text-muted-foreground">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm" onClick={onDetails}>
            Details
          </Button>
          <Button size="sm" onClick={onStart}>
            Start Learning
          </Button>
        </div>
      </div>
    </BaseCard>
  )
}
