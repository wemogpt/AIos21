import Image from "next/image"
import { AppCard } from "@/components/layout/app-card"

interface ImageLeftContentRightCardProps {
  title: string
  subtitle: string
}

export function ImageLeftContentRightCard({ title, subtitle }: ImageLeftContentRightCardProps) {
  return (
    <AppCard className="p-4">
      <div className="flex items-center gap-4">
        <div className="w-1/3 aspect-square relative overflow-hidden rounded-lg">
          <Image src="/futuristic-city-street.png" alt="Futuristic city street" fill className="object-cover" />
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
    </AppCard>
  )
}
