import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Users, Award, Clock, Play, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/dictionaries"

export default function PCEducationDemoPage({ params: { locale } }: { params: { locale: Locale } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/${locale}/pc`}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回
              </Link>
            </Button>
            <h1 className="text-xl font-semibold">在线教育平台 - PC版</h1>
          </div>
          <Button asChild>
            <Link href={`/${locale}/demo/education`}>移动版</Link>
          </Button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧主要内容 */}
          <div className="lg:col-span-2 space-y-6">
            {/* 学习进度 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  我的学习进度
                </CardTitle>
                <CardDescription>跟踪您的学习进展和成就</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h3 className="font-medium">React基础课程</h3>
                        <p className="text-sm text-gray-500">已完成 15/20 章节</p>
                      </div>
                      <span className="text-lg font-semibold text-blue-600">75%</span>
                    </div>
                    <Progress value={75} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h3 className="font-medium">JavaScript进阶</h3>
                        <p className="text-sm text-gray-500">已完成 9/20 章节</p>
                      </div>
                      <span className="text-lg font-semibold text-orange-600">45%</span>
                    </div>
                    <Progress value={45} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h3 className="font-medium">TypeScript完全指南</h3>
                        <p className="text-sm text-gray-500">已完成 2/25 章节</p>
                      </div>
                      <span className="text-lg font-semibold text-gray-600">8%</span>
                    </div>
                    <Progress value={8} className="h-3" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 推荐课程 */}
            <Card>
              <CardHeader>
                <CardTitle>推荐课程</CardTitle>
                <CardDescription>基于您的学习历史为您推荐</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Play className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800 mb-1">TypeScript完全指南</h3>
                        <p className="text-sm text-gray-600 mb-2">从基础到高级，全面掌握TypeScript</p>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">前端开发</Badge>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm">4.8</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>1.2k 学员</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>12小时</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Award className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800 mb-1">Node.js后端开发</h3>
                        <p className="text-sm text-gray-600 mb-2">构建高性能的后端API服务</p>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">后端开发</Badge>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm">4.9</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            <span>856 学员</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>18小时</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 右侧边栏 */}
          <div className="space-y-6">
            {/* 学习统计 */}
            <Card>
              <CardHeader>
                <CardTitle>学习统计</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">本周学习时长</span>
                    <span className="text-xl font-bold text-blue-600">3.5h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">完成课时</span>
                    <span className="text-xl font-bold text-green-600">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">获得证书</span>
                    <span className="text-xl font-bold text-orange-600">2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">学习天数</span>
                    <span className="text-xl font-bold text-purple-600">45</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 最近活动 */}
            <Card>
              <CardHeader>
                <CardTitle>最近活动</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="text-sm">
                      <p className="font-medium">完成了 React Hooks 章节</p>
                      <p className="text-gray-500">2小时前</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="text-sm">
                      <p className="font-medium">获得了 JavaScript 基础证书</p>
                      <p className="text-gray-500">1天前</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="text-sm">
                      <p className="font-medium">开始学习 TypeScript 课程</p>
                      <p className="text-gray-500">3天前</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
