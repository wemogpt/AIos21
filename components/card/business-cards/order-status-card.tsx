"use client"

import Image from "next/image"
import { AppCard } from "@/components/layout/app-card"
import { useDataChartTheme } from "@/components/providers/data-chart-theme-provider"
import { cn } from "@/lib/utils"

interface OrderStatusCardProps {
  orderId: string
  orderDate: string
  status: string
  currentStep: number
  steps: string[]
  productImages: string[]
  totalPrice: string
}

export function OrderStatusCard({
  orderId,
  orderDate,
  status,
  currentStep,
  steps,
  productImages,
  totalPrice,
}: OrderStatusCardProps) {
  const { palette } = useDataChartTheme()
  const primaryColor = palette[0] || "#3b82f6"

  return (
    <AppCard className="p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs" style={{ color: "var(--card-text-color)" }}>
              订单号: {orderId}
            </p>
            <p className="text-xs" style={{ color: "var(--card-text-color)" }}>
              {orderDate}
            </p>
          </div>
          <span
            className="px-2.5 py-1 text-xs font-semibold rounded-full"
            style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
          >
            {status}
          </span>
        </div>

        {/* Status Timeline */}
        <div className="flex items-center">
          {steps.map((step, index) => (
            <div key={step} className="flex-1 flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                    index < currentStep ? "border-transparent" : "border-gray-300",
                  )}
                  style={{ backgroundColor: index < currentStep ? primaryColor : "white" }}
                >
                  {index < currentStep && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                <p
                  className={cn(
                    "text-[10px] mt-1.5 whitespace-nowrap",
                    index < currentStep ? "font-semibold" : "font-normal",
                  )}
                  style={{ color: index < currentStep ? primaryColor : "var(--card-text-color)" }}
                >
                  {step}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-1 transition-colors duration-300" 
                  style={{ backgroundColor: index < currentStep - 1 ? primaryColor : "#e5e7eb" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-200/50">
          <div className="flex -space-x-4">
            {productImages.map((src, index) => (
              <div key={index} className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white">
                <Image src={src || "/placeholder.svg"} alt={`Product ${index + 1}`} width={40} height={40} className="object-cover" />
              </div>
            ))}
          </div>
          <div>
            <p className="text-xs" style={{ color: "var(--card-text-color)" }}>
              总价
            </p>
            <p className="text-lg font-bold" style={{ color: "var(--card-title-color)" }}>
              {totalPrice}
            </p>
          </div>
        </div>
      </div>
    </AppCard>
  )
}
