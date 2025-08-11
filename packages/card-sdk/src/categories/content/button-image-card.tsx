"use client"

import Image from "next/image"
import { BaseCard } from "../../base/base-card"
import type { CardProps } from "../../types"
import { Button } from "@/components/ui/button"

interface ButtonImageCardProps extends CardProps {
  imageUrl: string
  altText: string
  title: string
  subtitle: string
  buttonText: string
}

export function ButtonImageCard({ imageUrl, altText, title, subtitle, buttonText, ...props }: ButtonImageCardProps) {
  return (
    <BaseCard className="p-0 overflow-hidden" {...props}>
      <div className="aspect-[4/3]">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={altText}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold" style={{ color: "var(--card-title-color)" }}>
          {title}
        </h3>
        <p className="text-sm mt-1" style={{ color: "var(--card-text-color)" }}>
          {subtitle}
        </p>
        <div className="mt-4 flex justify-end">
          <Button variant="default">{buttonText}</Button>
        </div>
      </div>
    </BaseCard>
  )
}
