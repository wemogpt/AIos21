import Image from "next/image"
import { AppCard } from "@/components/layout/app-card"
import { PillButton } from "@/components/basic/pill-button"

interface ButtonImageCardProps {
  title: string
  subtitle: string
  buttonText: string
}

export function ButtonImageCard({ title, subtitle, buttonText }: ButtonImageCardProps) {
  return (
    <AppCard className="p-0 overflow-hidden">
      <div className="aspect-[4/3]">
        <Image
          src="/serene-lake.png"
          alt="Serene lake"
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
        <div className="mt-4 flex justify-end">
          <PillButton variant="primary">{buttonText}</PillButton>
        </div>
      </div>
    </AppCard>
  )
}
