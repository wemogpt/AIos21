import { LayoutGrid, Grid3x3, List, ImageIcon, RectangleHorizontal, MessageSquare, Monitor } from 'lucide-react'
import { BrowserHeader } from "@/components/layout/browser-header"
import { CategoryCard } from "@/components/browser/category-card"
import Link from "next/link"
import { getDictionary, type Locale } from "@/lib/dictionaries"
import { Button } from "@/components/ui/button"

export default async function ComponentsBrowserPage({ params: { locale } }: { params: { locale: Locale } }) {
  const dict = await getDictionary(locale)
  const mainPageDict = dict.mainPage

  const componentCategories = [
    { name: mainPageDict.basic, icon: LayoutGrid, href: `/${locale}/components/basic` },
    { name: mainPageDict.navigation, icon: Grid3x3, href: `/${locale}/components/navigation` },
    { name: mainPageDict.input, icon: List, href: `/${locale}/components/input` },
    { name: mainPageDict.dataDisplay, icon: ImageIcon, href: `/${locale}/components/data-display` },
    { name: mainPageDict.card, icon: RectangleHorizontal, href: `/${locale}/components/card` },
    { name: mainPageDict.feedback, icon: MessageSquare, href: `/${locale}/components/feedback` },
  ]

  return (
    <div className="min-h-screen pb-32">
      <BrowserHeader title={dict.browserHeader.title} />
      
      {/* PC版本入口 */}
      <div className="px-4 pt-4">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 mb-6 border border-blue-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Monitor className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">PC版本可用</h3>
                <p className="text-sm text-gray-600">体验专为桌面端优化的界面</p>
              </div>
            </div>
            <Button size="sm" asChild>
              <Link href={`/${locale}/pc`}>
                访问PC版
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              <span className="text-blue-500">AI</span> Design
            </h1>
            <p className="text-sm text-gray-500 mt-1">{mainPageDict.description}</p>
          </div>
        </div>

        <div className="space-y-8">
          {componentCategories.map((category) => (
            <Link href={category.href} key={category.name}>
              <CategoryCard name={category.name} icon={category.icon} />
            </Link>
          ))}
        </div>
      </div>
      <footer className="text-center text-xs text-gray-400 mt-12 px-4 space-y-1">
        <p>
          <Link href="#" className="text-blue-600">
            {mainPageDict.serviceAgreement}
          </Link>
        </p>
        <p>{mainPageDict.privacyNotice}</p>
        <p className="pt-2">Copyright © 1998 - 2025 iPollo. All Rights Reserved.</p>
      </footer>
    </div>
  )
}
