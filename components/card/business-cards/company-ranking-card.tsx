"use client"

import { Building2 } from 'lucide-react'
import { AppCard } from "@/components/layout/app-card"
import { useDataChartTheme } from "@/components/providers/data-chart-theme-provider"

interface CompanyData {
  rank: number
  name: string
  jobCount: number
}

const companyData: CompanyData[] = [
  { rank: 1, name: "百度", jobCount: 222 },
  { rank: 2, name: "腾讯", jobCount: 33 },
  { rank: 3, name: "阿里", jobCount: 15 },
]

interface CompanyRankingCardProps {
  title?: string
}

export function CompanyRankingCard({ title = "新职业招聘企业排行" }: CompanyRankingCardProps) {
  const { palette } = useDataChartTheme()
  const primaryColor = palette[0] || "#6366f1"

  return (
    <AppCard className="p-6">
      <div className="space-y-6">
        {/* Title */}
        <h3 className="text-lg font-bold" style={{ color: "var(--card-title-color)" }}>
          {title}
        </h3>

        {/* Company List */}
        <div className="space-y-4">
          {companyData.map((company) => (
            <div key={company.rank} className="flex items-center justify-between py-3">
              {/* Left side: Icon, Name and Rank */}
              <div className="flex items-center gap-4">
                {/* Company Icon */}
                <div className="w-12 h-12 bg-gray-100/80 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-gray-600" />
                </div>
                
                {/* Company Name and Rank */}
                <div>
                  <h4 className="text-base font-semibold" style={{ color: "var(--card-title-color)" }}>
                    {company.name}
                  </h4>
                  <p className="text-sm" style={{ color: "var(--card-text-color)" }}>
                    排名 {company.rank}
                  </p>
                </div>
              </div>

              {/* Right side: Job Count */}
              <div className="text-right">
                <p className="text-2xl font-bold" style={{ color: primaryColor }}>
                  {company.jobCount}
                </p>
                <p className="text-xs" style={{ color: "var(--card-text-color)" }}>
                  在招职位
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppCard>
  )
}
