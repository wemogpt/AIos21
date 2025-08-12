import type React from "react"
import { getDictionary } from "@/lib/dictionaries"
import type { Locale } from "@/lib/dictionaries"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { CardThemeProvider } from "@/components/providers/card-theme-provider"
import { DataChartThemeProvider } from "@/components/providers/data-chart-theme-provider"
import { ChartThemeProvider } from "@/components/providers/chart-theme-provider"
import { FrostedEffectProvider } from "@/components/providers/frosted-effect-provider"
import { PCDynamicBackground } from "@/components/theme/pc-dynamic-background"
import { PCLeftSidebar } from "@/components/navigation/pc-left-sidebar"
import { PCTopHeader } from "@/components/navigation/pc-top-header"

export default async function PCLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const dict = await getDictionary(locale)

  return (
    <ThemeProvider>
      <DataChartThemeProvider>
        <CardThemeProvider>
          <ChartThemeProvider>
            <FrostedEffectProvider>
              <div className="min-h-screen relative overflow-hidden">
                <PCDynamicBackground />

                {/* Left Sidebar */}
                <PCLeftSidebar dict={dict} locale={locale} />

                {/* Main Content Area */}
                <div className="pl-20 transition-all duration-300">
                  {/* Top Header */}
                  <PCTopHeader dict={dict} locale={locale} />

                  {/* Page Content */}
                  <main className="relative z-10 p-6 pt-20">
                    <div className="max-w-7xl mx-auto">{children}</div>
                  </main>
                </div>
              </div>
            </FrostedEffectProvider>
          </ChartThemeProvider>
        </CardThemeProvider>
      </DataChartThemeProvider>
    </ThemeProvider>
  )
}
