"use client"

import Image from "next/image"
import { BaseCard } from "../../base/base-card"
import type { CardProps } from "../../types"

interface TitleBelowImageCardProps extends CardProps {
  imageUrl: string
  altText: string
  title: string
  subtitle: string
}

export function TitleBelowImageCard({ imageUrl, altText, title, subtitle, ...props }: TitleBelowImageCardProps) {
  return (
    <BaseCard className="p-4" {...props}>
      <div className="aspect-[4/3] overflow-hidden rounded-lg">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={altText}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-bold" style={{ color: "var(--card-title-color)" }}>
          {title}
        </h3>
        <p className="text-sm mt-1" style={{ color: "var(--card-text-color)" }}>
          {subtitle}
        </p>
      </div>
    </BaseCard>
  )
}
