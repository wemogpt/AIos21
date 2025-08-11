import Image from "next/image"
import { AppCard } from "@/components/layout/app-card"

interface TitleBelowImageCardProps {
  title: string
  subtitle: string
}

export function TitleBelowImageCard({ title, subtitle }: TitleBelowImageCardProps) {
  return (
    <AppCard className="p-0 overflow-hidden">
      <div className="aspect-[4/3]">
        <Image
          src="/forest-trail.png"
          alt="Forest trail"
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
      </div>
    </AppCard>
  )
}
