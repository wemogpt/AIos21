"use client"

import { AppCard } from "@/components/layout/app-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const books = [
  {
    title: "《人工智能：一种现代方法》",
    author: "Stuart Russell & Peter Norvig 著",
    tags: [{ text: "经典教材", color: "green" }],
    readingTime: "约30小时阅读",
  },
  {
    title: "《机器学习》",
    author: "周志华 著",
    tags: [{ text: "中文经典", color: "green" }],
    readingTime: "约25小时阅读",
  },
]

export function RecommendedBooksCard() {
  return (
    <AppCard className="bg-white/50 backdrop-blur-sm border border-gray-200/40 shadow-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-0.5 h-8 bg-blue-600 rounded-full shadow-sm" />
          <div>
            <h5 className="font-semibold text-gray-900 text-sm flex items-center gap-1.5">推荐书籍<Badge variant="outline" className="text-xs bg-blue-50 border-blue-200 text-blue-700">2本</Badge></h5>
            <p className="text-xs text-gray-500">经典AI入门书籍</p>
          </div>
        </div>
        <div className="space-y-3">
          {books.map((book, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-10 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-blue-700">📚</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h6 className="font-medium text-gray-900 text-xs mb-1">{book.title}</h6>
                  <p className="text-xs text-gray-500 mb-2">{book.author}</p>
                  <div className="flex items-center gap-2">
                    {book.tags.map(tag => (
                      <Badge key={tag.text} variant="outline" className="text-xs bg-green-50 border-green-200 text-green-700">{tag.text}</Badge>
                    ))}
                    <span className="text-xs text-gray-400">• {book.readingTime}</span>
                  </div>
                </div>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-sm h-7 px-3 text-xs">阅读</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppCard>
  )
}
