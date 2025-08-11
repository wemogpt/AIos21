"use client"

import { useState } from "react"
import { Tabs } from "@/components/navigation/tabs"
import { Breadcrumbs } from "@/components/navigation/breadcrumbs"
import { SegmentedControl } from "@/components/navigation/segmented-control"
import { ActionToolbar } from "@/components/navigation/action-toolbar"
import { FilterTabs, type FilterTabItem } from "@/components/navigation/filter-tabs"
import { Home, Settings, User, Star, Zap, Heart } from 'lucide-react'
import { AppCard } from "@/components/layout/app-card"
import { PillNavigation } from "@/components/navigation/pill-navigation"

interface NavigationComponentsClientViewProps {
  dict: {
    title: string
    tabs: string
    tabsContent: string[]
    appHeader: string
    appHeaderDescription: string
    breadcrumbs: string
    breadcrumbItems: { label: string; href: string }[]
    segmentedControl: string
    actionToolbar: string
    filterTabs: string
  }
}

export function NavigationComponentsClientView({ dict }: NavigationComponentsClientViewProps) {
  const [activeTab, setActiveTab] = useState(dict.tabsContent[0])
  const [activeFilterTab, setActiveFilterTab] = useState("Featured")
  const [activePillTab, setActivePillTab] = useState("职业数据")

  const segmentedControlItems = [
    { label: "Home", icon: <Home className="w-5 h-5" /> },
    { label: "Profile", icon: <User className="w-5 h-5" /> },
    { label: "Settings", icon: <Settings className="w-5 h-5" /> },
  ]

  const filterTabItems: FilterTabItem[] = [
    { label: "Featured", icon: <Star className="w-4 h-4 mr-2" /> },
    { label: "Popular", icon: <Zap className="w-4 h-4 mr-2" /> },
    { label: "Favorites", icon: <Heart className="w-4 h-4 mr-2" /> },
  ]

  const pillNavigationTabs = ["职业数据", "具备能力", "相关岗位", "技能要求", "发展前景"]

  return (
    <main className="px-4">
      <div className="space-y-12 pt-16">
        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.tabs}</h3>
          <AppCard className="flex justify-center items-center p-8">
            <Tabs tabs={dict.tabsContent} activeTab={activeTab} onTabChange={setActiveTab} />
          </AppCard>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.filterTabs}</h3>
          <AppCard className="flex justify-center items-center p-8">
            <FilterTabs items={filterTabItems} activeItem={activeFilterTab} onItemChange={setActiveFilterTab} />
          </AppCard>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Pill Navigation</h3>
          <AppCard className="flex justify-center items-center p-8">
            <PillNavigation 
              tabs={pillNavigationTabs} 
              activeTab={activePillTab} 
              onTabChange={setActivePillTab} 
            />
          </AppCard>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.appHeader}</h3>
          <AppCard className="flex justify-center items-center h-40 p-8">
            <p style={{ color: "var(--card-text-color)" }}>{dict.appHeaderDescription}</p>
          </AppCard>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.breadcrumbs}</h3>
          <AppCard className="flex justify-center items-center p-8">
            <Breadcrumbs items={dict.breadcrumbItems} />
          </AppCard>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.segmentedControl}</h3>
          <AppCard className="flex justify-center items-center p-8">
            <SegmentedControl items={segmentedControlItems} />
          </AppCard>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{dict.actionToolbar}</h3>
          <AppCard className="flex justify-center items-center p-8">
            <ActionToolbar />
          </AppCard>
        </section>
      </div>
    </main>
  )
}
