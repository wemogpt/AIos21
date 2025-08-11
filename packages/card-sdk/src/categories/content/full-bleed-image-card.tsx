"use client"

import Image from "next/image"
import { BaseCard } from "../../base/base-card"
import type { CardProps } from "../../types"

interface FullBleedImageCardProps extends CardProps {
  imageUrl: string
  altText: string
}

export function FullBleedImageCard({ imageUrl, altText, ...props }: FullBleedImageCardProps) {
  return (
    <BaseCard className="p-0 overflow-hidden aspect-[4/3]" {...props}>
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={altText}
        width={400}
        height={300}
        className="w-full h-full object-cover"
      />
    </BaseCard>
  )
}
