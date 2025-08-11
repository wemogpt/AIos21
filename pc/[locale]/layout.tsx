import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/providers/theme-provider"
import { ChartThemeProvider } from "@/components/providers/chart-theme-provider"
import { CardThemeProvider } from "@/components/providers/card-theme-provider"
import { FrostedEffectProvider } from "@/components/providers/frosted-effect-provider"
import { DataChartThemeProvider } from "@/components/providers/data-chart-theme-provider"
import { DynamicBackground } from "@/components/theme/dynamic-background"
import { cn } from "@/lib/utils"
import { getDictionary, type Locale } from "@/lib/dictionaries"
import "../../app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "iPollo PC Application",
  description: "PC version of iPollo unified application base.",
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }]
}

export default async function PCRootLayout({
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
                    <main className="relative z-10 min-h-screen">
                      {children}
                    </main>
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
