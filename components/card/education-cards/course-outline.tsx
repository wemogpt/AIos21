"use client"

import * as React from "react"
import { ChevronDown } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Lesson {
  id: number
  title: string
  duration: string
}

interface Module {
  title: string
  lessons: Lesson[]
}

interface CourseSection {
  title: string
  type: string
  totalHours: string
  modules: Module[]
}

interface CourseOutlineProps {
  title: string
  section: CourseSection
}

export function CourseOutline({ title, section }: CourseOutlineProps) {
  return (
    <div className="bg-white rounded-xl p-6 md:p-8 w-full max-w-3xl mx-auto shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">{title}</h2>
      <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="hover:no-underline p-0">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-blue-600 border border-blue-300 rounded-md px-2 py-0.5 bg-blue-50">
                  {section.type}
                </span>
                <span className="text-base font-medium text-gray-600">{section.totalHours}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200" />
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-6 pb-0">
            <div className="space-y-6">
              {section.modules.map((module, moduleIndex) => (
                <div key={moduleIndex}>
                  <h4 className="font-semibold text-gray-800 mb-4 pl-4 py-2 rounded-md bg-blue-50/50">{module.title}</h4>
                  <ul className="space-y-3">
                    {module.lessons.map((lesson) => (
                      <li key={lesson.id} className="flex justify-between items-center ml-4 py-2">
                        <span className="text-gray-600">{`${lesson.id}. ${lesson.title}`}</span>
                        <span className="text-sm text-gray-500">{lesson.duration}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
