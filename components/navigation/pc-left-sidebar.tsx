"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutGrid,
  Component,
  Navigation,
  MousePointerIcon as MousePointerSquare,
  BarChart3,
  CreditCard,
  MessageSquareWarning,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Define the structure of the dictionary expected by this component
interface SidebarDictionary {
  overview: string
  basic: string
  navigation: string
  input: string
  dataDisplay: string
  card: string
  feedback: string
}

interface PcLeftSidebarProps {
  dictionary: SidebarDictionary
}

export function PcLeftSidebar({ dictionary }: PcLeftSidebarProps) {
  const pathname = usePathname()

  const menuItems = [
    {
      href: "/pc/components/basic",
      label: dictionary.basic,
      icon: Component,
    },
    {
      href: "/pc/components/navigation",
      label: dictionary.navigation,
      icon: Navigation,
    },
    {
      href: "/pc/components/input",
      label: dictionary.input,
      icon: MousePointerSquare,
    },
    {
      href: "/pc/components/data-display",
      label: dictionary.dataDisplay,
      icon: BarChart3,
    },
    {
      href: "/pc/components/card",
      label: dictionary.card,
      icon: CreditCard,
    },
    {
      href: "/pc/components/feedback",
      label: dictionary.feedback,
      icon: MessageSquareWarning,
    },
  ]

  return (
    <aside className="w-64 flex-shrink-0 border-r bg-gray-50/15 p-4 dark:bg-gray-900/15">
      <nav className="space-y-2">
        <Link
          href="/pc"
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800",
            {
              "bg-gray-200 dark:bg-gray-800": pathname === "/pc" || pathname === "/zh/pc" || pathname === "/en/pc",
            },
          )}
        >
          <LayoutGrid className="h-5 w-5" />
          {dictionary.overview}
        </Link>
        <div className="space-y-1 pl-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 transition-all hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800",
                {
                  "bg-gray-200 font-semibold text-gray-900 dark:bg-gray-800 dark:text-gray-50": pathname.includes(
                    item.href,
                  ),
                },
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  )
}
