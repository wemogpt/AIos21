"use client"

import Image from "next/image"
import { AppCard } from "@/components/layout/app-card"
import { Star, CheckCircle } from 'lucide-react'

interface ReviewCardProps {
  avatarUrl: string
  userName: string
  isVerified: boolean
  rating: number
  content: string
  date: string
}

export function ReviewCard({ avatarUrl, userName, isVerified, rating, content, date }: ReviewCardProps) {
  return (
    <AppCard className="p-4">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image src={avatarUrl || "/placeholder.svg"} alt={userName} fill className="object-cover" />
          </div>
          <div>
            <h4 className="text-sm font-semibold" style={{ color: "var(--card-title-color)" }}>{userName}</h4>
            {isVerified && (
              <div className="flex items-center gap-1 text-xs text-green-600">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified Purchase</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-0.5 my-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
            />
          ))}
        </div>
        <p className="text-sm flex-1" style={{ color: "var(--card-text-color)" }}>
          {content}
        </p>
        <p className="text-xs text-right mt-3" style={{ color: "var(--card-text-color)" }}>
          {date}
        </p>
      </div>
    </AppCard>
  )
}
