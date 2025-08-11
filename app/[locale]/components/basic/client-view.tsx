"use client"

import { useState } from "react"
import { Pagination } from "@/components/basic/pagination"
import { PillButton } from "@/components/basic/pill-button"
import { FloatingButton } from "@/components/basic/floating-button"
import { ContactMethodItem } from "@/components/basic/contact-method-item"
import { AppCard } from "@/components/layout/app-card"

interface BasicComponentsClientViewProps {
  dict: {
    pagination: string
    pillButton: string
    floatingButton: string
    floatingButtonDescription: string
    previous: string
    next: string
    contactMethodItem: string
    contactMethodItemTitle: string
    contactMethodItemDescription: string
    contactMethodItemButtonText: string
  }
}

export function BasicComponentsClientView({ dict }: BasicComponentsClientViewProps) {
  const [currentPage, setCurrentPage] = useState(2)
  const totalPages = 17

  return (
    <main className="px-4">
      <div className="space-y-12">
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.pagination}</h3>
          <AppCard className="flex justify-center items-center p-8">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              prevText={dict.previous}
              nextText={dict.next}
            />
          </AppCard>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.pillButton}</h3>
          <AppCard className="flex flex-wrap justify-center items-center gap-4 p-8">
            <PillButton variant="default">Default</PillButton>
            <PillButton variant="primary">Primary</PillButton>
            <PillButton variant="outline">Outline</PillButton>
          </AppCard>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.floatingButton}</h3>
          <AppCard className="relative flex justify-center items-center h-40 p-8">
            <p style={{ color: "var(--card-text-color)" }}>{dict.floatingButtonDescription}</p>
            <FloatingButton className="absolute bottom-4 right-4" />
          </AppCard>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.contactMethodItem}</h3>
          <AppCard className="flex justify-center items-center p-8">
            <div className="w-full max-w-md">
              <ContactMethodItem
                icon="chat"
                title={dict.contactMethodItemTitle}
                description={dict.contactMethodItemDescription}
                buttonText={dict.contactMethodItemButtonText}
                href="#"
              />
            </div>
          </AppCard>
        </section>
      </div>
    </main>
  )
}
