"use client"

import { AppCard } from "@/components/layout/app-card"
import { PillButton } from "@/components/basic/pill-button"
import { Award } from 'lucide-react'

interface CertificateCardProps {
  courseName: string
  userName: string
  completionDate: string
  certificateId: string
  buttonText: string
}

export function CertificateCard({
  courseName,
  userName,
  completionDate,
  certificateId,
  buttonText,
}: CertificateCardProps) {
  return (
    <AppCard className="p-6 relative overflow-hidden">
      <div className="absolute -top-8 -right-8 w-32 h-32 opacity-10">
        <Award className="w-full h-full text-yellow-500" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-400/20 text-yellow-500">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold" style={{ color: "var(--card-title-color)" }}>
              结业证书
            </h3>
            <p className="text-xs" style={{ color: "var(--card-text-color)" }}>
              Certificate of Completion
            </p>
          </div>
        </div>
        <div className="space-y-3 my-6">
          <p className="text-sm" style={{ color: "var(--card-text-color)" }}>
            兹证明 <span className="font-semibold" style={{ color: "var(--card-title-color)" }}>{userName}</span>
          </p>
          <p className="text-sm" style={{ color: "var(--card-text-color)" }}>
            已于 {completionDate} 完成并通过
          </p>
          <p className="text-lg font-bold" style={{ color: "var(--card-title-color)" }}>
            《{courseName}》
          </p>
          <p className="text-sm" style={{ color: "var(--card-text-color)" }}>
            课程的所有要求。
          </p>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
          <p className="text-[10px]" style={{ color: "var(--card-text-color)" }}>
            证书编号: {certificateId}
          </p>
          <PillButton variant="outline">{buttonText}</PillButton>
        </div>
      </div>
    </AppCard>
  )
}
