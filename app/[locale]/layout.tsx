import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { ChartThemeProvider } from "@/components/providers/chart-theme-provider"
import { CardThemeProvider } from "@/components/providers/card-theme-provider"
import { FrostedEffectProvider } from "@/components/providers/frosted-effect-provider"
import { DataChartThemeProvider } from "@/components/providers/data-chart-theme-provider"
import { DynamicBackground } from "@/components/theme/dynamic-background"
import { cn } from "@/lib/utils"
import { BottomNavigation } from "@/components/navigation/bottom-navigation"
import { getDictionary } from "@/lib/dictionaries"
import type { Locale } from "@ipollo/core-config"
import { i18n } from "@ipollo/core-config"
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "iPollo Application Base",
  description: "Unified application base for iPollo projects.",
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: Locale }
}>) {
  const dict = await getDictionary(locale)
  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen font-sans antialiased", inter.className)}>
        <ThemeProvider>
          <ChartThemeProvider>
            <DataChartThemeProvider>
              <CardThemeProvider>
                <FrostedEffectProvider>
                  <div className="relative min-h-screen overflow-hidden">
                    <DynamicBackground />
                    <main className="relative z-10">{children}</main>
                    <BottomNavigation dict={dict.bottomNav} />
                  </div>
                </FrostedEffectProvider>
              </CardThemeProvider>
            </DataChartThemeProvider>
          </ChartThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
