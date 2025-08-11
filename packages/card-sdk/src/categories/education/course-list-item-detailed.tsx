"use client"

import Image from "next/image"
import { BaseCard } from "../../base/base-card"
import type { CardProps } from "../../types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface CourseListItemDetailedProps extends CardProps {
  imageUrl: string
  title: string
  description: string
  instructorName: string
  instructorAvatarUrl: string
  buttonText: string
}

export function CourseListItemDetailed({
  imageUrl,
  title,
  description,
  instructorName,
  instructorAvatarUrl,
  buttonText,
  ...props
}: CourseListItemDetailedProps) {
  return (
    <BaseCard className="p-4" {...props}>
      <div className="flex items-center gap-4">
        <div className="w-1/3 aspect-video relative overflow-hidden rounded-lg">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <div className="w-2/3 flex flex-col justify-center space-y-2">
          <h3 className="font-bold text-base" style={{ color: "var(--card-title-color)" }}>
            {title}
          </h3>
          <p className="text-xs leading-snug" style={{ color: "var(--card-text-color)" }}>
            {description}
          </p>
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src={instructorAvatarUrl || "/placeholder.svg"} alt={instructorName} />
                <AvatarFallback>{instructorName.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-xs" style={{ color: "var(--card-text-color)" }}>
                {instructorName}
              </span>
            </div>
            <Button variant="default" size="sm" className="text-xs px-3 py-1 h-auto">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </BaseCard>
  )
}
