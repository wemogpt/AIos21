"use client"

import { AppCard } from "@/components/layout/app-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const papers = [
  {
    title: "Attention Is All You Need",
    description: "Transformer架构奠基论文",
    badge: <Badge variant="outline" className="text-xs bg-red-50 border-red-200 text-red-700">里程碑</Badge>,
    year: "2017年发表",
  },
  {
    title: "Deep Residual Learning for Image Recognition",
    description: "ResNet网络结构论文",
    badge: <Badge variant="outline" className="text-xs bg-orange-50 border-orange-200 text-orange-700">计算机视觉</Badge>,
    year: "2015年发表",
  },
]

export function ClassicPapersCard() {
  return (
    <AppCard className="bg-white/50 backdrop-blur-sm border border-gray-200/40 shadow-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-0.5 h-8 bg-purple-600 rounded-full shadow-sm" />
          <div>
            <h5 className="font-semibold text-gray-900 text-sm flex items-center gap-1.5">经典论文<Badge variant="outline" className="text-xs bg-purple-50 border-purple-200 text-purple-700">2篇</Badge></h5>
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
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white border-0 shadow-sm h-7 px-3 text-xs">阅读</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppCard>
  )
}
