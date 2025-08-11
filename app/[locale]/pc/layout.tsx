import type React from "react"
import { PcLeftSidebar } from "@/components/navigation/pc-left-sidebar"
import { PcTopHeader } from "@/components/navigation/pc-top-header"
import { PcDynamicBackground } from "@/components/theme/pc-dynamic-background"
import { getDictionary } from "@/lib/dictionaries"
import type { Locale } from "@/packages/core-config/src/i18n/i18n.config"

export default async function PcLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const dict = await getDictionary(locale)

  return (
    <div className="flex h-screen w-full flex-col bg-white dark:bg-gray-950">
      <PcTopHeader />
      <div className="flex flex-1 overflow-hidden">
        <PcLeftSidebar dictionary={dict.pc.sidebar} />
        <main className="relative flex-1 overflow-y-auto">
          <PcDynamicBackground />
          <div className="relative z-10 p-6">{children}</div>
        </main>
      </div>
    </div>
  )
}
