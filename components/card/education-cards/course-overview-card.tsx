"use client"

import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AppCard } from "@/components/layout/app-card"
import { PillButton } from "@/components/basic/pill-button"
import { BookOpen } from 'lucide-react'

interface CourseOverviewCardProps {
  imageUrl: string
  title: string
  instructorName: string
  instructorAvatarUrl: string
  lessonCount: number
  price: string
  buttonText: string
}

export function CourseOverviewCard({
  imageUrl,
  title,
  instructorName,
  instructorAvatarUrl,
  lessonCount,
  price,
  buttonText,
}: CourseOverviewCardProps) {
  return (
    <AppCard className="p-0 overflow-hidden">
      <div className="aspect-video relative">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 space-y-3">
        <h3 className="text-base font-bold truncate" style={{ color: "var(--card-title-color)" }}>
          {title}
        </h3>
        <div className="flex items-center justify-between text-xs" style={{ color: "var(--card-text-color)" }}>
          <div className="flex items-center gap-2">
            <Avatar className="w-6 h-6">
              <AvatarImage src={instructorAvatarUrl || "/placeholder.svg"} alt={instructorName} />
              <AvatarFallback>{instructorName.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{instructorName}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            <span>{lessonCount} 节课</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2">
          <p className="text-lg font-bold" style={{ color: "var(--card-title-color)" }}>
            {price}
          </p>
          <PillButton variant="primary">{buttonText}</PillButton>
        </div>
      </div>
    </AppCard>
  )
}
