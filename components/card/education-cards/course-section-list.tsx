"use client"

import { useState } from "react"
import { AppCard } from "@/components/layout/app-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PlayCircle, ChevronDown, ChevronUp, Clock } from 'lucide-react'
import { cn } from "@/lib/utils"

interface LessonItem {
  id: number
  title: string
  duration: string
  type: 'online' | 'offline'
}

interface CourseSection {
  title: string
  type: 'online' | 'offline'
  lessons: LessonItem[]
}

interface CourseSectionListProps {
  sections: CourseSection[]
}

export function CourseSectionList({ sections }: CourseSectionListProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set([sections[0]?.title || ""]))

  const toggleSection = (sectionTitle: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(sectionTitle)) {
      newExpanded.delete(sectionTitle)
    } else {
      newExpanded.add(sectionTitle)
    }
    setExpandedSections(newExpanded)
  }

  return (
    <div className="space-y-4">
      {sections.map((section) => (
        <AppCard key={section.title} className="bg-white/50 backdrop-blur-sm border border-gray-200/40 shadow-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/60 transition-all duration-200" onClick={() => toggleSection(section.title)}>
            <div className="flex items-center gap-3">
              <div className="w-0.5 h-8 bg-gray-800 rounded-full shadow-sm" />
              <div>
                <h5 className="font-semibold text-gray-900 text-sm flex items-center gap-1.5">{section.title}<PlayCircle className="w-3.5 h-3.5 text-gray-600" /></h5>
                <p className="text-xs text-gray-500">{section.lessons.length} 个课程模块</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={section.type === 'online' ? 'default' : 'secondary'} className={cn("text-xs font-medium shadow-sm px-2 py-0.5", section.type === 'online' ? "bg-gray-800 text-white border-0" : "bg-gray-600 text-white border-0")}>{section.type === 'online' ? '线上' : '线下'}</Badge>
              <div className="w-6 h-6 bg-gray-100/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">{expandedSections.has(section.title) ? <ChevronUp className="w-3 h-3 text-gray-600" /> : <ChevronDown className="w-3 h-3 text-gray-600" />}</div>
            </div>
          </div>
          {expandedSections.has(section.title) && (
            <div className="px-4 pb-4 space-y-2">
              {section.lessons.map((lesson, index) => (
                <div key={lesson.id} className="bg-white/70 backdrop-blur-sm rounded-lg p-3 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <div className="w-6 h-6 bg-gray-800 rounded-md flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-sm">{index + 1}</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 text-xs truncate">{lesson.title}</p>
                        <div className="flex items-center gap-1 mt-0.5">
                          <Clock className="w-2.5 h-2.5 text-gray-400" />
                          <p className="text-xs text-gray-500">{lesson.duration}</p>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white border-0 shadow-sm ml-2 h-7 px-3 text-xs">开始</Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </AppCard>
      ))}
    </div>
  )
}
