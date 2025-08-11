import Image from "next/image"
import { AppCard } from "@/components/layout/app-card"

export function BorderedImageCard() {
  return (
    <AppCard className="p-2">
      <div className="aspect-[4/3] overflow-hidden rounded-lg border-4 border-white shadow-md">
        <Image
          src="/modern-architecture-cityscape.png"
          alt="Modern architecture"
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
    </AppCard>
  )
}
