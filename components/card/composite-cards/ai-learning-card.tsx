"use client"

import { useState, useEffect } from "react"
import { AppCard } from "@/components/layout/app-card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Bot, Clock, Target, Calendar, PlayCircle, ChevronDown, ChevronUp, Sparkles, TrendingUp, Zap, Brain, Rocket, BarChart3, Users, Award, Briefcase } from 'lucide-react'
import { cn } from "@/lib/utils"
import { useTypewriter } from "@/components/hooks/use-typewriter"
import { CourseSectionList } from "@/components/card/education-cards/course-section-list"
import { RecommendedBooksCard } from "@/components/card/education-cards/recommended-books-card"
import { ClassicPapersCard } from "@/components/card/education-cards/classic-papers-card"
import { IndividualCoursesCard } from "@/components/card/education-cards/individual-courses-card"

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

interface AILearningCardProps {
userName?: string
userBackground?: string
recommendationReason?: string
planDuration?: string
studyPeriod?: string
learningGoal?: string
totalHours?: number
courseSections?: CourseSection[]
className?: string
}

const defaultCourseSections: CourseSection[] = [
{
title: "基础课程",
type: "online",
lessons: [
  { id: 1, title: "AI基础概念介绍", duration: "40分钟", type: "online" },
  { id: 2, title: "AI发展历程回顾", duration: "45分钟", type: "online" },
  { id: 3, title: "机器学习入门", duration: "60分钟", type: "online" },
  { id: 4, title: "深度学习基础", duration: "55分钟", type: "online" }
]
},
{
title: "应用课程",
type: "offline",
lessons: [
  { id: 5, title: "提示词设计与优化", duration: "90分钟", type: "offline" },
  { id: 6, title: "场景应用实践", duration: "120分钟", type: "offline" }
]
}
]

const stepExplanations = {
step1: "第一步很关键！我们先从AI基础概念开始，让你建立扎实的理论基础。这个阶段包括线上理论学习和线下实践操作，确保你能够理解AI的核心原理，为后续的深入学习打下坚实基础。",
step2: "现在进入进阶阶段！在掌握基础知识后，我们开始学习更高级的AI应用技术。这个阶段会同时进行大师课程的学习，让你接触到行业最前沿的技术和实践案例，提升你的专业技能水平。",
step3: "最后冲刺阶段！完成前两个阶段的学习后，我们将帮助你获得专业认证，并提供就业指导。这个阶段包括简历优化、面试辅导、项目作品集制作等，确保你能够成功进入AI行业。"
}

export function AILearningCard({
userName = "同学",
userBackground = "对AI技术感兴趣的初学者",
recommendationReason = "我仔细分析了你的需求，考虑了你的背景、时间和目标。这个学习方案结合了理论基础和实践应用，让你能够循序渐进地掌握AI核心技术，同时，我会一直陪伴你学习，有问题随时问我！",
planDuration = "4-8周",
studyPeriod = "4.8周",
learningGoal = "掌握中级知识",
totalHours = 34,
courseSections = defaultCourseSections,
className
}: AILearningCardProps) {
const [expandedSteps, setExpandedSteps] = useState<Set<string>>(new Set())
const [showFullPlan, setShowFullPlan] = useState(false)
const [streamingStep, setStreamingStep] = useState(0)
const [visibleCards, setVisibleCards] = useState<Record<string, number>>({})

// Typewriter hooks
const typedReason = useTypewriter(streamingStep >= 1 ? recommendationReason : '', 30)
const typedStep1Explanation = useTypewriter(expandedSteps.has("step1") ? stepExplanations.step1 : '', 30)
const typedStep2Explanation = useTypewriter(expandedSteps.has("step2") ? stepExplanations.step2 : '', 30)
const typedStep3Explanation = useTypewriter(expandedSteps.has("step3") ? stepExplanations.step3 : '', 30)

useEffect(() => {
const steps = [
  500,  // AI Teacher Header
  3000, // Learning Plan Section (allows time for recommendation to type)
  1000, // Learning Outcomes Data
  1000, // Step 1 (expands and starts typing)
  4700, // Step 2 (allows time for step 1 explanation and cards to animate)
  500,  // Step 3
  500,  // Action Buttons
  1000, // AI Encouragement
]

let cumulativeDelay = 0;
const timers: NodeJS.Timeout[] = [];
steps.forEach((delay, index) => {
  cumulativeDelay += delay;
  const timer = setTimeout(() => {
    setStreamingStep(index + 1)
    if (index === 3) { // When Step 1 appears, expand it
      setExpandedSteps(prev => new Set(prev).add("step1"));
    }
  }, cumulativeDelay)
  timers.push(timer);
})

return () => timers.forEach(clearTimeout);
}, [])

useEffect(() => {
    if (expandedSteps.has("step1")) {
      const cardGroups = ['courseSections', 'books', 'papers', 'individualCourses'];
      let delay = 3500; // Initial delay for typing
      const timers: NodeJS.Timeout[] = [];
      
      cardGroups.forEach(group => {
        delay += 200;
        const timer = setTimeout(() => {
          setVisibleCards(prev => ({ ...prev, [group]: 1 }));
        }, delay);
        timers.push(timer);
      });

      return () => timers.forEach(clearTimeout);
    }
  }, [expandedSteps]);


const toggleStep = (stepId: string) => {
const newExpanded = new Set(expandedSteps)
if (newExpanded.has(stepId)) {
  newExpanded.delete(stepId)
} else {
  newExpanded.add(stepId)
}
setExpandedSteps(newExpanded)
}

const renderItemWithAnimation = (key: string, children: React.ReactNode) => (
<div className={cn("transition-all duration-500 ease-out", visibleCards[key] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
  {children}
</div>
);

return (
<AppCard className={cn("relative overflow-hidden bg-white/80 backdrop-blur-xl border-0 shadow-2xl", className)}>
  {/* Subtle background pattern */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/30 to-gray-100/50" />
  <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200/20 rounded-full blur-3xl" />
  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-300/20 rounded-full blur-2xl" />
  
  <div className="relative z-10 p-6 sm:p-8">
    {/* Combined AI Teacher Header and Learning Plan */}
    <div className={cn("mb-8 transition-all duration-700 ease-out", streamingStep >= 1 ? "opacity-100" : "opacity-0 -translate-y-4")}>
      {/* AI Teacher Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="relative flex-shrink-0">
          <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
          <div className="absolute inset-0 w-12 h-12 bg-gray-400 rounded-2xl animate-ping opacity-10" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-bold text-gray-900">AI智能导师</h3>
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-100/80 backdrop-blur-sm rounded-full border border-green-200/50">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-xs font-medium text-green-700">在线</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 flex items-center gap-1.5">
            <Brain className="w-3.5 h-3.5" /> 为你量身定制的AI学习方案
          </p>
        </div>
      </div>

      {/* Recommendation Reason Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-gray-700" />
          <h4 className="font-semibold text-gray-900">专属推荐理由</h4>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed mb-6 min-h-[84px]">
          {typedReason}
        </p>
      </div>

      {/* Learning Plan Section */}
      <div className={cn("transition-all duration-700 ease-out", streamingStep >= 2 ? "opacity-100" : "opacity-0 -translate-y-4")}>
        <AppCard className="bg-white/40 backdrop-blur-sm border border-gray-200/30 shadow-lg">
          <div className="p-6">
            <div className="text-center">
              <h4 className="text-lg font-bold text-gray-900 mb-1">个性定制学习计划</h4>
              <p className="text-xs text-gray-500 mb-6">1分钟评估定制</p>
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="text-center"><p className="text-xs text-gray-500 mb-2">计划时长</p><p className="text-xl font-bold text-gray-900">{planDuration}</p></div>
                <div className="text-center"><p className="text-xs text-gray-500 mb-2">每周学习</p><p className="text-xl font-bold text-gray-900">{studyPeriod}</p></div>
                <div className="text-center"><p className="text-xs text-gray-500 mb-2">预计目标</p><p className="text-xl font-bold text-gray-900">{learningGoal}</p></div>
              </div>
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white text-sm py-3 rounded-xl shadow-md"><Brain className="w-4 h-4 mr-2" />评估学习基础，为你定制AI方案</Button>
            </div>
          </div>
        </AppCard>
      </div>
    </div>

    {/* Learning Outcomes Data Visualization */}
    <div className={cn("mb-8 transition-all duration-700 ease-out", streamingStep >= 3 ? "opacity-100" : "opacity-0 -translate-y-4")}>
      <AppCard className="bg-white/40 backdrop-blur-sm border border-gray-200/30 shadow-lg">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4"><BarChart3 className="w-5 h-5 text-gray-700" /><h4 className="text-lg font-bold text-gray-900">学习成果预期</h4><Badge variant="outline" className="text-xs bg-white/60 backdrop-blur-sm border-gray-300 text-gray-700 shadow-sm">数据驱动</Badge></div>
          <div className="grid grid-cols-4 gap-3 mb-6 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/40">
            <div className="text-center"><div className="text-xl font-bold text-gray-900 mb-1">85%</div><p className="text-xs text-gray-600">技能掌握</p></div>
            <div className="text-center"><div className="text-xl font-bold text-gray-900 mb-1">92%</div><p className="text-xs text-gray-600">就业成功</p></div>
            <div className="text-center"><div className="text-xl font-bold text-gray-900 mb-1">3+</div><p className="text-xs text-gray-600">专业认证</p></div>
            <div className="text-center"><div className="text-xl font-bold text-gray-900 mb-1">2.8K</div><p className="text-xs text-gray-600">成功学员</p></div>
          </div>
          <div className="space-y-4">
            <div><div className="flex justify-between items-center mb-2"><span className="text-sm font-medium text-gray-700">机器学习基础</span><span className="text-sm text-gray-500">90%</span></div><Progress value={90} className="h-2 bg-gray-200/50" /></div>
            <div><div className="flex justify-between items-center mb-2"><span className="text-sm font-medium text-gray-700">深度学习应用</span><span className="text-sm text-gray-500">85%</span></div><Progress value={85} className="h-2 bg-gray-200/50" /></div>
            <div><div className="flex justify-between items-center mb-2"><span className="text-sm font-medium text-gray-700">项目实战能力</span><span className="text-sm text-gray-500">80%</span></div><Progress value={80} className="h-2 bg-gray-200/50" /></div>
            <div><div className="flex justify-between items-center mb-2"><span className="text-sm font-medium text-gray-700">行业应用理解</span><span className="text-sm text-gray-500">75%</span></div><Progress value={75} className="h-2 bg-gray-200/50" /></div>
          </div>
        </div>
      </AppCard>
    </div>

    {/* Step 1 - Collapsible */}
    <div className={cn("mb-8 transition-all duration-700 ease-out", streamingStep >= 4 ? "opacity-100" : "opacity-0 -translate-y-4")}>
      <div className="flex items-center justify-between cursor-pointer mb-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors" onClick={() => toggleStep("step1")}>
        <div className="flex items-center gap-2"><div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">1</div><h4 className="font-bold text-gray-900">第一步 - 基础知识建立</h4><Badge variant="outline" className="text-xs bg-white/60 backdrop-blur-sm border-gray-300 text-gray-700 shadow-sm ml-2">{totalHours}课时</Badge></div>
        <div className="w-6 h-6 bg-gray-100/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">{expandedSteps.has("step1") ? <ChevronUp className="w-3 h-3 text-gray-600" /> : <ChevronDown className="w-3 h-3 text-gray-600" />}</div>
      </div>
      {expandedSteps.has("step1") && (
        <div className="ml-8">
          <div className="mb-6 p-4 bg-gray-50/50 backdrop-blur-sm rounded-xl border border-gray-200/30"><p className="text-sm text-gray-700 leading-relaxed min-h-[64px]"><span className="font-semibold text-gray-900">第一步很关键！</span>{typedStep1Explanation.substring(5)}</p></div>
          <div className="space-y-4">
            {renderItemWithAnimation('courseSections', <CourseSectionList sections={courseSections} />)}
          </div>
          <div className="mt-6 space-y-4">
            {renderItemWithAnimation('books', <RecommendedBooksCard />)}
            {renderItemWithAnimation('papers', <ClassicPapersCard />)}
            {renderItemWithAnimation('individualCourses', <IndividualCoursesCard />)}
          </div>
        </div>
      )}
    </div>

    {/* Step 2 - Collapsible */}
    <div className={cn("mb-8 transition-all duration-700 ease-out", streamingStep >= 5 ? "opacity-100" : "opacity-0 -translate-y-4")}>
      <div className="flex items-center justify-between cursor-pointer mb-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors" onClick={() => toggleStep("step2")}>
        <div className="flex items-center gap-2"><div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">2</div><h4 className="font-bold text-gray-900">第二步 - 进阶技能提升</h4></div>
        <div className="w-6 h-6 bg-gray-100/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">{expandedSteps.has("step2") ? <ChevronUp className="w-3 h-3 text-gray-600" /> : <ChevronDown className="w-3 h-3 text-gray-600" />}</div>
      </div>
      {expandedSteps.has("step2") && (
        <div className="ml-8">
          <div className="mb-6 p-4 bg-gray-50/50 backdrop-blur-sm rounded-xl border border-gray-200/30"><p className="text-sm text-gray-700 leading-relaxed min-h-[84px]"><span className="font-semibold text-gray-900">现在进入进阶阶段！</span>{typedStep2Explanation.substring(8)}</p></div>
          {/* Content for step 2 would go here with similar animation logic */}
        </div>
      )}
    </div>

    {/* Step 3 - Collapsible */}
    <div className={cn("mb-8 transition-all duration-700 ease-out", streamingStep >= 6 ? "opacity-100" : "opacity-0 -translate-y-4")}>
      <div className="flex items-center justify-between cursor-pointer mb-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors" onClick={() => toggleStep("step3")}>
        <div className="flex items-center gap-2"><div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">3</div><h4 className="font-bold text-gray-900">第三步 - 专业认证与就业</h4></div>
        <div className="w-6 h-6 bg-gray-100/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">{expandedSteps.has("step3") ? <ChevronUp className="w-3 h-3 text-gray-600" /> : <ChevronDown className="w-3 h-3 text-gray-600" />}</div>
      </div>
      {expandedSteps.has("step3") && (
        <div className="ml-8">
          <div className="mb-6 p-4 bg-gray-50/50 backdrop-blur-sm rounded-xl border border-gray-200/30"><p className="text-sm text-gray-700 leading-relaxed min-h-[84px]"><span className="font-semibold text-gray-900">最后冲刺阶段！</span>{typedStep3Explanation.substring(7)}</p></div>
          <div className="text-center"><Button variant="outline" onClick={() => setShowFullPlan(!showFullPlan)} className="w-full sm:w-auto bg-white/60 backdrop-blur-sm border-gray-300 hover:bg-white/80 shadow-md">{showFullPlan ? '收起完整计划' : '查看完整学习计划'}{showFullPlan ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}</Button></div>
        </div>
      )}
    </div>

    {/* Action Buttons */}
    <div className={cn("mb-8 transition-all duration-700 ease-out", streamingStep >= 7 ? "opacity-100" : "opacity-0 -translate-y-4")}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm py-3 rounded-xl shadow-lg flex items-center justify-center gap-2"><Rocket className="w-4 h-4" />加入学习计划</Button>
        <Button variant="outline" className="w-full bg-white/60 backdrop-blur-sm border-gray-300 hover:bg-white/80 text-gray-900 text-sm py-3 rounded-xl shadow-lg flex items-center justify-center gap-2"><Brain className="w-4 h-4" />重新评估需求</Button>
      </div>
    </div>

    {/* AI Encouragement - Chat Style */}
    <div className={cn("transition-all duration-700 ease-out", streamingStep >= 8 ? "opacity-100" : "opacity-0 -translate-y-4")}>
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"><Bot className="w-4 h-4 text-white" /></div>
        <div className="flex-1 min-w-0">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl rounded-tl-sm p-4 shadow-lg border border-gray-200/50 relative">
            <div className="absolute -left-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white/70 border-b-8 border-b-transparent"></div>
            <p className="text-sm text-gray-700 mb-3 leading-relaxed"><span className="font-semibold text-gray-900">AI导师的贴心提醒：</span>学习是一个循序渐进的过程，不要着急。我会根据你的学习进度调整计划，确保每一步都扎实掌握！记住，我随时在这里为你答疑解惑。</p>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-200/40"><div className="flex items-center gap-2 text-xs text-gray-600"><TrendingUp className="w-3 h-3 text-gray-600" /><span>已有 <span className="font-semibold text-gray-900">2,847</span> 位同学通过此方案成功掌握AI技能</span></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</AppCard>
)
}
