import type { CardThemeConfig } from "@/types"

export const cardTheme: CardThemeConfig = {
  base: {
    card: "rounded-2xl overflow-hidden shadow-lg",
    header: "p-4",
    content: "p-4",
    footer: "p-4 border-t border-gray-200",
  },
  variants: {
    default: {
      card: "bg-white text-gray-800",
      header: "font-bold text-xl",
      content: "text-base",
      footer: "text-sm text-gray-500",
    },
    primary: {
      card: "bg-blue-500 text-white",
      header: "font-semibold text-2xl",
      content: "text-lg",
      footer: "text-blue-100",
    },
    ghost: {
      card: "bg-transparent shadow-none",
      header: "",
      content: "",
      footer: "",
    },
    outline: {
      card: "bg-white border border-gray-300",
      header: "",
      content: "",
      footer: "",
    },
  },
  sizes: {
    sm: {
      card: "max-w-sm",
      header: "p-3 text-lg",
      content: "p-3 text-sm",
      footer: "p-3 text-xs",
    },
    md: {
      card: "max-w-md",
      header: "p-4 text-xl",
      content: "p-4 text-base",
      footer: "p-4 text-sm",
    },
    lg: {
      card: "max-w-lg",
      header: "p-5 text-2xl",
      content: "p-5 text-lg",
      footer: "p-5 text-base",
    },
  },
}
