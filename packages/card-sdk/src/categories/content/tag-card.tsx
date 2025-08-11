import type { FC } from "react"
import { BaseCard } from "../../base/base-card"
import { useChartTheme } from "@/components/providers/chart-theme-provider"
import { Tag } from "lucide-react"

interface TagItem {
  id: string
  name: string
}

interface TagCardProps {
  tags: TagItem[]
}

export const TagCard: FC<TagCardProps> = ({ tags }) => {
  const { palette } = useChartTheme()
  const primaryColor = palette[0] || "#3b82f6"

  return (
    <BaseCard className="p-4">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <div
            key={tag.id}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full"
            style={{ backgroundColor: `${primaryColor}26` }} // ~15% opacity
          >
            <Tag className="w-4 h-4" style={{ color: primaryColor }} />
            <span className="text-sm font-medium" style={{ color: primaryColor }}>
              {tag.name}
            </span>
          </div>
        ))}
      </div>
    </BaseCard>
  )
}
