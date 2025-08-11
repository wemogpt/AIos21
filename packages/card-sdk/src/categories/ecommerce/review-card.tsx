"use client"
import Image from "next/image"
import { BaseCard } from "../../base/base-card"
import { Star, CheckCircle } from "lucide-react"

interface ReviewCardProps {
  avatarUrl: string
  author: string
  isVerified?: boolean
  rating: number
  reviewText: string
  date: string
}

export function ReviewCard({ avatarUrl, author, isVerified, rating, reviewText, date }: ReviewCardProps) {
  return (
    <BaseCard className="p-5 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-11 h-11 relative rounded-full overflow-hidden">
          <Image src={avatarUrl || "/placeholder.svg"} alt={author} fill className="object-cover" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-card-title">{author}</h4>
          {isVerified && (
            <div className="flex items-center gap-1 text-xs text-green-600 mt-0.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Verified Purchase</span>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" />
        ))}
      </div>
      <p className="text-sm flex-1 text-card-text leading-relaxed">{reviewText}</p>
      <p className="text-xs text-right mt-4 text-card-text/70">{date}</p>
    </BaseCard>
  )
}
