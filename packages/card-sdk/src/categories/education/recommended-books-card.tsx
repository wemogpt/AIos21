import { BaseCard } from "../../base/base-card"
import type { CardProps } from "../../types"

interface Book {
  title: string
  author: string
  tags: { text: string }[]
  readingTime: string
}

interface RecommendedBooksCardProps extends CardProps {
  books: Book[]
}

export function RecommendedBooksCard({ books, ...baseProps }: RecommendedBooksCardProps) {
  return (
    <BaseCard
      {...baseProps}
      className="bg-white/50 backdrop-blur-sm border border-gray-200/40 shadow-lg overflow-hidden rounded-xl p-4"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-0.5 h-8 bg-blue-600 rounded-full shadow-sm" />
        <div>
          <h5 className="font-semibold text-gray-900 text-sm flex items-center gap-1.5">
            推荐书籍
            <span className="text-xs bg-blue-50 border border-blue-200 text-blue-700 rounded-md px-1.5 py-0.5">
              {books.length}本
            </span>
          </h5>
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
                  {book.tags.map((tag) => (
                    <span
                      key={tag.text}
                      className="text-xs bg-green-50 border border-green-200 text-green-700 rounded-md px-1.5 py-0.5"
                    >
                      {tag.text}
                    </span>
                  ))}
                  <span className="text-xs text-gray-400">• {book.readingTime}</span>
                </div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-sm h-7 px-3 text-xs rounded-md">
                阅读
              </button>
            </div>
          </div>
        ))}
      </div>
    </BaseCard>
  )
}
