"use client"

import { BaseCard } from "../../base/base-card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AiLearningCard() {
  return (
    <BaseCard className="p-0 overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-card-title mb-2">AI Learning Path</h2>
          <p className="text-card-text/80 mb-6">
            Systematically master AI, from foundational knowledge to advanced skills, with our curated learning path.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button size="lg" className="flex-grow sm:flex-grow-0">
              Start Learning
            </Button>
            <Button size="lg" variant="outline" className="flex-grow sm:flex-grow-0 bg-transparent">
              View Full Path
            </Button>
          </div>
        </div>
        <div className="bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center p-8 min-h-[200px] md:min-h-0">
          <Image src="/ai-robot.png" alt="AI Robot" width={200} height={200} className="object-contain" />
        </div>
      </div>
    </BaseCard>
  )
}
