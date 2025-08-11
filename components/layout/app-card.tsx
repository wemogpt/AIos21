"use client"
import type { CardProps } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { BaseCard } from "@/components/card/base-card"

export function AppCard({ className, children, ...props }: CardProps) {
  return (
    <BaseCard className={cn("rounded-xl", className)} {...props}>
      {children}
    </BaseCard>
  )
}
