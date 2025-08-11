"use client"

import Image from "next/image"
import { BaseCard } from "../../base/base-card"
import type { CardProps } from "../../types"
import { Button } from "@/components/ui/button"

interface InstructorProfileCardProps extends CardProps {
  avatarUrl: string
  name: string
  bio: string
  courseCount: number
  studentCount: number
  buttonText: string
}

export function InstructorProfileCard({
  avatarUrl,
  name,
  bio,
  courseCount,
  studentCount,
  buttonText,
  ...props
}: InstructorProfileCardProps) {
  return (
    <BaseCard className="p-6" {...props}>
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/50 shadow-lg mb-4">
          <Image src={avatarUrl || "/placeholder.svg"} alt={name} width={96} height={96} className="object-cover" />
        </div>
        <h3 className="text-lg font-bold" style={{ color: "var(--card-title-color)" }}>
          {name}
        </h3>
        <p className="text-xs mt-1 max-w-xs" style={{ color: "var(--card-text-color)" }}>
          {bio}
        </p>
        <div className="flex items-center gap-6 my-4">
          <div className="text-center">
            <p className="font-bold text-lg" style={{ color: "var(--card-title-color)" }}>
              {courseCount}
            </p>
            <p className="text-xs flex items-center gap-1" style={{ color: "var(--card-text-color)" }}>
              <i className="i-lucide-video w-3 h-3" /> 课程
            </p>
          </div>
          <div className="text-center">
            <p className="font-bold text-lg" style={{ color: "var(--card-title-color)" }}>
              {studentCount.toLocaleString()}
            </p>
            <p className="text-xs flex items-center gap-1" style={{ color: "var(--card-text-color)" }}>
              <i className="i-lucide-users w-3 h-3" /> 学员
            </p>
          </div>
        </div>
        <Button variant="default" className="w-full">
          {buttonText}
        </Button>
      </div>
    </BaseCard>
  )
}
