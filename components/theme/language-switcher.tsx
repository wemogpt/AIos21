"use client"

import { usePathname } from "next/navigation"
import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageSwitcher() {
  const pathname = usePathname()
  const handleSwitchLanguage = (newLocale: string) => {
    const currentLocale = pathname.split("/")[1]
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`)
    window.location.assign(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-white/50 backdrop-blur-md">
          <Languages className="w-5 h-5 text-gray-700" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/80 backdrop-blur-lg border-gray-200/60 rounded-xl">
        <DropdownMenuItem onClick={() => handleSwitchLanguage("zh")}>中文</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSwitchLanguage("en")}>English</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
