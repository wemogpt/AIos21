import Image from "next/image"
import { AppCard } from "@/components/layout/app-card"

export function FullBleedImageCard() {
  return (
    <AppCard className="p-0 overflow-hidden aspect-[4/3]">
      <Image
        src="/abstract-landscape.png"
        alt="Abstract landscape"
        width={400}
        height={300}
        className="w-full h-full object-cover"
      />
    </AppCard>
  )
}
