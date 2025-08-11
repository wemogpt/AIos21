"use client"

import type React from "react"
import Image from "next/image"
import { AppCard } from "@/components/layout/app-card"
import { Button } from "@/components/ui/button"

interface TeamMemberCardProps {
  avatarUrl: string
  name: string
  role: string
  isOnline: boolean
  socials: { icon: React.ReactNode; href: string }[]
  bio: string
}

export function TeamMemberCard({ avatarUrl, name, role, isOnline, socials, bio }: TeamMemberCardProps) {
  return (
    <AppCard className="p-6">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/50 shadow-lg">
            <Image src={avatarUrl || "/placeholder.svg"} alt={name} width={96} height={96} className="object-cover" />
          </div>
          {isOnline && (
            <span className="absolute bottom-1 right-1 block h-4 w-4 rounded-full bg-green-500 border-2 border-white" />
          )}
        </div>
        <h3 className="text-lg font-bold" style={{ color: "var(--card-title-color)" }}>
          {name}
        </h3>
        <p className="text-sm" style={{ color: "var(--card-text-color)" }}>
          {role}
        </p>
        <p className="text-xs mt-3 max-w-xs" style={{ color: "var(--card-text-color)" }}>
          {bio}
        </p>
        <div className="flex items-center gap-3 mt-4">
          {socials.map((social, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className="w-8 h-8 rounded-full bg-gray-100/50 text-gray-600 hover:bg-gray-200/50"
              asChild
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </AppCard>
  )
}
