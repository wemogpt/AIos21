import { AppCard } from "@/components/layout/app-card"
import { Cpu } from "lucide-react"
import { useChartTheme } from "@/components/providers/chart-theme-provider"

interface TagCardProps {
  title: string
  tags: string[]
}

export function TagCard({ title, tags }: TagCardProps) {
  const { palette } = useChartTheme()
  const primaryColor = palette[0] || "#3b82f6"

  return (
    <AppCard className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <Cpu className="w-5 h-5" style={{ color: primaryColor }} />
        <h3 className="text-lg font-semibold" style={{ color: "var(--card-title-color)" }}>
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <div
            key={tag}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{ backgroundColor: `${primaryColor}26` }} // ~15% opacity
          >
            <Cpu className="w-4 h-4" style={{ color: primaryColor }} />
            <span className="text-sm font-medium" style={{ color: primaryColor }}>
              {tag}
            </span>
          </div>
        ))}
      </div>
    </AppCard>
  )
}
