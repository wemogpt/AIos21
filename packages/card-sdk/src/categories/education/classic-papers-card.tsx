import type React from "react"
import { BaseCard } from "../../base/base-card"
import type { CardProps } from "../../types"

interface Paper {
  title: string
  description: string
  badge: React.ReactNode
  year: string
}

interface ClassicPapersCardProps extends CardProps {
  papers: Paper[]
}

export function ClassicPapersCard({ papers, ...baseProps }: ClassicPapersCardProps) {
  return (
    <BaseCard
      {...baseProps}
      className="bg-white/50 backdrop-blur-sm border border-gray-200/40 shadow-lg overflow-hidden rounded-xl p-4"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-0.5 h-8 bg-purple-600 rounded-full shadow-sm" />
        <div>
          <h5 className="font-semibold text-gray-900 text-sm flex items-center gap-1.5">
            经典论文
            <span className="text-xs bg-purple-50 border border-purple-200 text-purple-700 rounded-md px-1.5 py-0.5">
              {papers.length}篇
            </span>
          </h5>
          <p className="text-xs text-gray-500">AI领域里程碑论文</p>
        </div>
      </div>
      <div className="space-y-3">
        {papers.map((paper, index) => (
          <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-8 h-10 bg-purple-100 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-purple-700">📄</span>
              </div>
              <div className="flex-1 min-w-0">
                <h6 className="font-medium text-gray-900 text-xs mb-1">{paper.title}</h6>
                <p className="text-xs text-gray-500 mb-2">{paper.description}</p>
                <div className="flex items-center gap-2">
                  {paper.badge}
                  <span className="text-xs text-gray-400">• {paper.year}</span>
                </div>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white border-0 shadow-sm h-7 px-3 text-xs rounded-md">
                阅读
              </button>
            </div>
          </div>
        ))}
      </div>
    </BaseCard>
  )
}
