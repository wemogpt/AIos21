"use client"

import { AppCard } from "@/components/layout/app-card"
import { PillButton } from "@/components/basic/pill-button"

interface OrderSummaryCardProps {
  title: string
  subtotal: number
  shipping: number
  tax: number
  totalLabel: string
  buttonText: string
}

export function OrderSummaryCard({ title, subtotal, shipping, tax, totalLabel, buttonText }: OrderSummaryCardProps) {
  const total = subtotal + shipping + tax
  const formatPrice = (p: number) => `¥${p.toFixed(2)}`

  return (
    <AppCard className="p-4">
      <div className="space-y-3">
        <h3 className="text-base font-semibold" style={{ color: "var(--card-title-color)" }}>
          {title}
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span style={{ color: "var(--card-text-color)" }}>Subtotal</span>
            <span style={{ color: "var(--card-title-color)" }}>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span style={{ color: "var(--card-text-color)" }}>Shipping</span>
            <span style={{ color: "var(--card-title-color)" }}>{formatPrice(shipping)}</span>
          </div>
          <div className="flex justify-between">
            <span style={{ color: "var(--card-text-color)" }}>Tax</span>
            <span style={{ color: "var(--card-title-color)" }}>{formatPrice(tax)}</span>
          </div>
        </div>
        <div className="border-t border-dashed border-gray-200/70 my-3" />
        <div className="flex justify-between items-center">
          <span className="text-base font-bold" style={{ color: "var(--card-title-color)" }}>
            {totalLabel}
          </span>
          <span className="text-lg font-bold" style={{ color: "var(--card-title-color)" }}>
            {formatPrice(total)}
          </span>
        </div>
        <PillButton variant="primary" className="w-full mt-3">
          {buttonText}
        </PillButton>
      </div>
    </AppCard>
  )
}
