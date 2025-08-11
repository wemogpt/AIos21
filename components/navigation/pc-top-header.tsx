"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { LanguageSwitcher } from "@/components/theme/language-switcher"
import { ColorPicker } from "@/components/theme/color-picker"
import { CardThemePicker } from "@/components/theme/card-theme-picker"
import { ChartThemePicker } from "@/components/theme/chart-theme-picker"
import { Button } from "@/components/ui/button"
import { Bell, Settings, User } from 'lucide-react'

interface PCTopHeaderProps {
  dict: any
  locale: string
}

export function PCTopHeader({ dict, locale }: PCTopHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-30 h-16 flex items-center justify-between px-6 transition-all duration-300",
        {
          "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20 shadow-sm": isScrolled,
          "bg-transparent": !isScrolled,
        }
      )}
    >
      {/* Left side - Page title or breadcrumb */}
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
          {locale === 'zh' ? "iPollo PC 组件库" : "iPollo PC Components"}
        </h1>
      </div>

      {/* Right side - Actions and theme controls */}
      <div className="flex items-center space-x-2">
        {/* Theme Controls */}
        <div className="flex items-center space-x-1 mr-4">
          <LanguageSwitcher />
          <ColorPicker />
          <CardThemePicker />
          <ChartThemePicker />
        </div>

        {/* Action Buttons */}
        <Button
          variant="ghost"
          size="sm"
          className="rounded-full w-10 h-10 p-0 hover:bg-white/50 dark:hover:bg-gray-800/50"
        >
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="rounded-full w-10 h-10 p-0 hover:bg-white/50 dark:hover:bg-gray-800/50"
        >
          <Settings className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="rounded-full w-10 h-10 p-0 hover:bg-white/50 dark:hover:bg-gray-800/50"
        >
          <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </Button>
      </div>
    </header>
  )
}
