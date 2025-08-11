"use client"
import { BaseCard } from "../../base/base-card"
import type { CardProps } from "../../types"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Bot, Brain, BarChart3, ChevronDown, ChevronUp, Rocket, TrendingUp, Sparkles } from "lucide-react"
import { CourseSectionList } from "../education/course-section-list"
import { RecommendedBooksCard } from "../education/recommended-books-card"
import { ClassicPapersCard } from "../education/classic-papers-card"
import { IndividualCoursesCard } from "../education/individual-courses-card"

export interface AILearningCardProps extends CardProps {
  userName?: string
  recommendationReason?: string
  planDuration?: string
  studyPeriod?: string
  learningGoal?: string
  totalHours?: number
  courseSections?: any[] // Define more specific type if available
  books?: any[] // Define more specific type if available
  papers?: any[] // Define more specific type if available
  individualCourses?: any[] // Define more specific type if available
  onStepToggle: (stepId: string) => void
  expandedSteps: Set<string>
  showFullPlan: boolean
  onShowFullPlanToggle: () => void
  typedReason: string
  typedStep1Explanation: string
  typedStep2Explanation: string
  typedStep3Explanation: string
}

export function AiLearningCard({
  userName = "同学",
  planDuration = "4-8周",
  studyPeriod = "4.8周",
  learningGoal = "掌握中级知识",
  totalHours = 34,
  courseSections = [],
  books = [],
  papers = [],
  individualCourses = [],
  onStepToggle,
  expandedSteps,
  showFullPlan,
  onShowFullPlanToggle,
  typedReason,
  typedStep1Explanation,
  typedStep2Explanation,
  typedStep3Explanation,
  ...baseProps
}: AILearningCardProps) {
  return (
    <BaseCard {...baseProps} className="relative overflow-hidden bg-white/80 backdrop-blur-xl border-0 shadow-2xl">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/30 to-gray-100/50" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gray-300/20 rounded-full blur-2xl" />

      <div className="relative z-10 p-6 sm:p-8">
        {/* AI Teacher Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="relative flex-shrink-0">
            <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center shadow-sm">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-bold text-gray-900">AI智能导师</h3>
              <Badge variant="secondary" className="bg-green-100/80 text-green-700 border-green-200/50">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1.5" />
                在线
              </Badge>
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
          <p className="text-sm text-gray-700 leading-relaxed mb-6 min-h-[84px]">{typedReason}</p>
        </div>

        {/* Learning Plan Section */}
        <BaseCard className="bg-white/40 backdrop-blur-sm border border-gray-200/30 shadow-lg">
          <div className="p-6">
            <div className="text-center">
              <h4 className="text-lg font-bold text-gray-900 mb-1">个性定制学习计划</h4>
              <p className="text-xs text-gray-500 mb-6">1分钟评估定制</p>
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-2">计划时长</p>
                  <p className="text-xl font-bold text-gray-900">{planDuration}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-2">每周学习</p>
                  <p className="text-xl font-bold text-gray-900">{studyPeriod}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-2">预计目标</p>
                  <p className="text-xl font-bold text-gray-900">{learningGoal}</p>
                </div>
              </div>
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white text-sm py-3 rounded-xl shadow-md">
                <Brain className="w-4 h-4 mr-2" />
                评估学习基础，为你定制AI方案
              </Button>
            </div>
          </div>
        </BaseCard>

        {/* Learning Outcomes Data Visualization */}
        <div className="my-8">
          <BaseCard className="bg-white/40 backdrop-blur-sm border border-gray-200/30 shadow-lg">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5 text-gray-700" />
                <h4 className="text-lg font-bold text-gray-900">学习成果预期</h4>
                <Badge
                  variant="outline"
                  className="text-xs bg-white/60 backdrop-blur-sm border-gray-300 text-gray-700 shadow-sm"
                >
                  数据驱动
                </Badge>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/40">
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900 mb-1">85%</div>
                  <p className="text-xs text-gray-600">技能掌握</p>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900 mb-1">92%</div>
                  <p className="text-xs text-gray-600">就业成功</p>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900 mb-1">3+</div>
                  <p className="text-xs text-gray-600">专业认证</p>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900 mb-1">2.8K</div>
                  <p className="text-xs text-gray-600">成功学员</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">机器学习基础</span>
                    <span className="text-sm text-gray-500">90%</span>
                  </div>
                  <Progress value={90} className="h-2 bg-gray-200/50" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">深度学习应用</span>
                    <span className="text-sm text-gray-500">85%</span>
                  </div>
                  <Progress value={85} className="h-2 bg-gray-200/50" />
                </div>
              </div>
            </div>
          </BaseCard>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {/* Step 1 */}
          <div>
            <div
              className="flex items-center justify-between cursor-pointer mb-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors"
              onClick={() => onStepToggle("step1")}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
                  1
                </div>
                <h4 className="font-bold text-gray-900">第一步 - 基础知识建立</h4>
                <Badge
                  variant="outline"
                  className="text-xs bg-white/60 backdrop-blur-sm border-gray-300 text-gray-700 shadow-sm ml-2"
                >
                  {totalHours}课时
                </Badge>
              </div>
              <div className="w-6 h-6 bg-gray-100/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                {expandedSteps.has("step1") ? (
                  <ChevronUp className="w-3 h-3 text-gray-600" />
                ) : (
                  <ChevronDown className="w-3 h-3 text-gray-600" />
                )}
              </div>
            </div>
            {expandedSteps.has("step1") && (
              <div className="ml-8 space-y-4">
                <div className="p-4 bg-gray-50/50 backdrop-blur-sm rounded-xl border border-gray-200/30">
                  <p className="text-sm text-gray-700 leading-relaxed min-h-[64px]">{typedStep1Explanation}</p>
                </div>
                <CourseSectionList sections={courseSections} />
                <RecommendedBooksCard books={books} />
                <ClassicPapersCard papers={papers} />
                <IndividualCoursesCard courses={individualCourses} />
              </div>
            )}
          </div>

          {/* Step 2 */}
          <div>
            <div
              className="flex items-center justify-between cursor-pointer mb-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors"
              onClick={() => onStepToggle("step2")}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
                  2
                </div>
                <h4 className="font-bold text-gray-900">第二步 - 进阶技能提升</h4>
              </div>
              <div className="w-6 h-6 bg-gray-100/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                {expandedSteps.has("step2") ? (
                  <ChevronUp className="w-3 h-3 text-gray-600" />
                ) : (
                  <ChevronDown className="w-3 h-3 text-gray-600" />
                )}
              </div>
            </div>
            {expandedSteps.has("step2") && (
              <div className="ml-8 p-4 bg-gray-50/50 backdrop-blur-sm rounded-xl border border-gray-200/30">
                <p className="text-sm text-gray-700 leading-relaxed min-h-[84px]">{typedStep2Explanation}</p>
              </div>
            )}
          </div>

          {/* Step 3 */}
          <div>
            <div
              className="flex items-center justify-between cursor-pointer mb-4 p-3 rounded-xl hover:bg-gray-50/50 transition-colors"
              onClick={() => onStepToggle("step3")}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
                  3
                </div>
                <h4 className="font-bold text-gray-900">第三步 - 专业认证与就业</h4>
              </div>
              <div className="w-6 h-6 bg-gray-100/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                {expandedSteps.has("step3") ? (
                  <ChevronUp className="w-3 h-3 text-gray-600" />
                ) : (
                  <ChevronDown className="w-3 h-3 text-gray-600" />
                )}
              </div>
            </div>
            {expandedSteps.has("step3") && (
              <div className="ml-8">
                <div className="mb-6 p-4 bg-gray-50/50 backdrop-blur-sm rounded-xl border border-gray-200/30">
                  <p className="text-sm text-gray-700 leading-relaxed min-h-[84px]">{typedStep3Explanation}</p>
                </div>
                <div className="text-center">
                  <Button
                    variant="outline"
                    onClick={onShowFullPlanToggle}
                    className="w-full sm:w-auto bg-white/60 backdrop-blur-sm border-gray-300 hover:bg-white/80 shadow-md"
                  >
                    {showFullPlan ? "收起完整计划" : "查看完整学习计划"}
                    {showFullPlan ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm py-3 rounded-xl shadow-lg flex items-center justify-center gap-2">
            <Rocket className="w-4 h-4" />
            加入学习计划
          </Button>
          <Button
            variant="outline"
            className="w-full bg-white/60 backdrop-blur-sm border-gray-300 hover:bg-white/80 text-gray-900 text-sm py-3 rounded-xl shadow-lg flex items-center justify-center gap-2"
          >
            <Brain className="w-4 h-4" />
            重新评估需求
          </Button>
        </div>

        {/* AI Encouragement */}
        <div className="mt-8 flex items-start gap-4">
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl rounded-tl-sm p-4 shadow-lg border border-gray-200/50 relative">
              <div className="absolute -left-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white/70 border-b-8 border-b-transparent"></div>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                <span className="font-semibold text-gray-900">AI导师的贴心提醒：</span>
                学习是一个循序渐进的过程，不要着急。我会根据你的学习进度调整计划，确保每一步都扎实掌握！记住，我随时在这里为你答疑解惑。
              </p>
              <div className="bg-white/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-200/40">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <TrendingUp className="w-3 h-3 text-gray-600" />
                  <span>
                    已有 <span className="font-semibold text-gray-900">2,847</span> 位同学通过此方案成功掌握AI技能
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  )
}
