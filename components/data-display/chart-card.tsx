import { AppCard } from "@/components/layout/app-card"

interface ChartCardProps {
  children: React.ReactNode
}

export function ChartCard({ children }: ChartCardProps) {
  return (
    <AppCard className="p-4 h-full w-full relative">
      {children}
    </AppCard>
  )
}
