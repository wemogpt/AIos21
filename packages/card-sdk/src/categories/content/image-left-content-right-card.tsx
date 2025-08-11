"use client"

import Image from "next/image"
import { BaseCard } from "../../base/base-card"
import type { CardProps } from "../../types"

interface ImageLeftContentRightCardProps extends CardProps {
  imageUrl: string
  altText: string
  title: string
  subtitle: string
}

export function ImageLeftContentRightCard({
  imageUrl,
  altText,
  title,
  subtitle,
  ...props
}: ImageLeftContentRightCardProps) {
  return (
    <BaseCard className="p-4" {...props}>
      <div className="flex items-center gap-4">
        <div className="w-1/3 aspect-square relative overflow-hidden rounded-lg">
          <Image src={imageUrl || "/placeholder.svg"} alt={altText} fill className="object-cover" />
        </div>
        <div className="w-2/3 flex flex-col justify-center">
          <h3 className="font-bold" style={{ color: "var(--card-title-color)" }}>
            {title}
          </h3>
          <p className="text-sm mt-1" style={{ color: "var(--card-text-color)" }}>
            {subtitle}
          </p>
        </div>
      </div>
    </BaseCard>
  )
}
