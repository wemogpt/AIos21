import Image from "next/image"
import { AppCard } from "@/components/layout/app-card"

interface OverlayTitleImageCardProps {
  title: string
}

export function OverlayTitleImageCard({ title }: OverlayTitleImageCardProps) {
  return (
    <AppCard className="p-0 overflow-hidden aspect-[4/3] relative">
      <Image
        src="/majestic-mountain-vista.png"
        alt="Mountain scenery"
        width={400}
        height={300}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{title}</h3>
    </AppCard>
  )
}
