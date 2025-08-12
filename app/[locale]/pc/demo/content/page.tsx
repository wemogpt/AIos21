import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share, Eye, TrendingUp, Calendar, ArrowLeft, Plus } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/dictionaries"

export default function PCContentDemoPage({ params: { locale } }: { params: { locale: Locale } }) {
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
            <h1 className="text-xl font-semibold">内容管理平台 - PC版</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              创建内容
            </Button>
            <Button asChild>
              <Link href={`/${locale}/demo/content`}>移动版</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 左侧边栏 */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  内容概览
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">已发布</span>
                    <span className="text-2xl font-bold text-blue-600">24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">草稿</span>
                    <span className="text-2xl font-bold text-orange-600">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">总浏览</span>
                    <span className="text-2xl font-bold text-green-600">1.2k</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">总点赞</span>
                    <span className="text-2xl font-bold text-purple-600">356</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 热门分类 */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>热门分类</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge variant="outline" className="w-full justify-start">
                    UI设计
                  </Badge>
                  <Badge variant="outline" className="w-full justify-start">
                    用户体验
                  </Badge>
                  <Badge variant="outline" className="w-full justify-start">
                    前端开发
                  </Badge>
                  <Badge variant="outline" className="w-full justify-start">
                    设计系统
                  </Badge>
                  <Badge variant="outline" className="w-full justify-start">
                    交互设计
                  </Badge>
                  <Badge variant="outline" className="w-full justify-start">
                    视觉设计
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 主要内容区域 */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">热门内容</h2>
              <p className="text-gray-600">发现最受欢迎的设计和开发内容</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/generic-user-avatar.png" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-gray-800">AI设计师</span>
                        <Badge variant="secondary">创作者</Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">2024年UI设计趋势分析</h3>
                      <p className="text-gray-600 mb-4">
                        深入探讨今年最受欢迎的设计风格和用户体验趋势，包括极简主义、渐变色彩和微交互设计。本文将为设计师提供实用的设计指导和创意灵感。
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>2.3k</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>156</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>23</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Share className="w-4 h-4" />
                            <span>12</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>2天前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/generic-user-avatar.png" />
                      <AvatarFallback>UX</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-gray-800">UX专家</span>
                        <Badge variant="secondary">专家</Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">移动端交互设计最佳实践</h3>
                      <p className="text-gray-600 mb-4">
                        分享移动应用设计中的关键交互原则，如何提升用户体验和操作效率。涵盖手势操作、导航设计、反馈机制等核心要素。
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>1.8k</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>89</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>15</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Share className="w-4 h-4" />
                            <span>8</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>5天前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/generic-user-avatar.png" />
                      <AvatarFallback>FE</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-gray-800">前端工程师</span>
                        <Badge variant="secondary">开发者</Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">React 18新特性深度解析</h3>
                      <p className="text-gray-600 mb-4">
                        全面介绍React
                        18的并发特性、Suspense改进和新的Hooks。通过实际案例展示如何在项目中应用这些新功能。
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>3.1k</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>234</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>45</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Share className="w-4 h-4" />
                            <span>18</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>1周前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/generic-user-avatar.png" />
                      <AvatarFallback>DS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-gray-800">设计系统专家</span>
                        <Badge variant="secondary">架构师</Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">构建可扩展的设计系统</h3>
                      <p className="text-gray-600 mb-4">
                        从零开始构建企业级设计系统的完整指南，包括组件库设计、设计令牌管理和团队协作流程。
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>1.5k</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>67</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>12</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Share className="w-4 h-4" />
                            <span>5</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>1周前</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
