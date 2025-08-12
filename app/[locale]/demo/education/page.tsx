import { BrowserHeader } from "@/components/layout/browser-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Users, Award, Play, Star } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/dictionaries"

export default function EducationDemoPage({ params: { locale } }: { params: { locale: Locale } }) {
  return (
    <div className="min-h-screen pb-32">
      <BrowserHeader title="教育应用Demo" />

      <div className="px-4 pt-4">
        {/* 头部介绍 */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">在线教育平台</h1>
          <p className="text-gray-600">完整的在线学习管理系统，包含课程管理、学习进度跟踪、互动讨论等功能</p>
        </div>

        {/* 学习进度卡片 */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              我的学习进度
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">React基础课程</span>
                  <span className="text-sm text-gray-500">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">JavaScript进阶</span>
                  <span className="text-sm text-gray-500">45%</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 推荐课程 */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">推荐课程</h2>
          <div className="space-y-3">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Play className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">TypeScript完全指南</h3>
                    <p className="text-sm text-gray-600 mb-2">从基础到高级，全面掌握TypeScript</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">前端开发</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm">4.8</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">1.2k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">Node.js后端开发</h3>
                    <p className="text-sm text-gray-600 mb-2">构建高性能的后端API服务</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">后端开发</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm">4.9</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">856</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 学习统计 */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>本周学习统计</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">12</div>
                <div className="text-sm text-gray-500">完成课时</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">3.5h</div>
                <div className="text-sm text-gray-500">学习时长</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 返回按钮 */}
        <div className="flex gap-2">
          <Button variant="outline" asChild className="flex-1 bg-transparent">
            <Link href={`/${locale}`}>返回首页</Link>
          </Button>
          <Button asChild className="flex-1">
            <Link href={`/${locale}/pc/demo/education`}>查看PC版</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
