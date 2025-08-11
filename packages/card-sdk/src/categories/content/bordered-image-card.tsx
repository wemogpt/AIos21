"use client"

import Image from "next/image"
import { BaseCard } from "../../base/base-card"
import type { CardProps } from "../../types"

interface BorderedImageCardProps extends CardProps {
  imageUrl: string
  altText: string
}

export function BorderedImageCard({ imageUrl, altText, ...props }: BorderedImageCardProps) {
  return (
    <BaseCard className="p-2" {...props}>
      <div className="aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-md">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={altText}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
    </BaseCard>
  )
}
