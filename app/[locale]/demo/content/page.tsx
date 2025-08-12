"use client"

import type React from "react"

import { AppHeader } from "@/components/navigation/app-header"
import { BottomNavigation } from "@/components/navigation/bottom-navigation"
import { Button } from "@/components/ui/button"
import { BusinessCardWrapper } from "@/components/card/business-card-wrapper"
import { CardRegistry } from "@/components/card/registry"
import { AppCard } from "@/components/layout/app-card"
import { Badge } from "@/components/ui/badge"
import { EnhancedDraggableCardContainer } from "@/components/card/enhanced-draggable-card-container"
import {
  Heart,
  Share2,
  ShoppingCart,
  Star,
  TrendingUp,
  Users,
  Settings,
  Plus,
  X,
  Grid3X3,
  Edit3,
  Save,
} from "lucide-react"
import { useState } from "react"

// 基础卡片示例
const BASIC_CARDS = [
  {
    id: "user-info",
    name: "用户信息",
    category: "基础",
    component: (
      <AppCard className="p-6 hover:shadow-lg transition-all duration-300">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-3">
            <Users className="w-5 h-5 text-primary" />
            <h4 className="text-lg font-bold">用户信息</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-4">查看和编辑用户基本信息</p>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src="/diverse-user-avatars.png"
                alt="用户头像"
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
            </div>
            <div className="flex-1">
              <p className="font-medium">张三</p>
              <p className="text-sm text-muted-foreground">zhang.san@example.com</p>
              <Badge variant="secondary" className="mt-1 text-xs">
                活跃用户
              </Badge>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full hover:bg-primary hover:text-primary-foreground transition-colors mt-4 bg-transparent"
          >
            <Settings className="w-4 h-4 mr-2" />
            编辑资料
          </Button>
        </div>
      </AppCard>
    ),
  },
  {
    id: "sales-data",
    name: "销售数据",
    category: "基础",
    component: (
      <AppCard className="p-6 hover:shadow-lg transition-all duration-300">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-3">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <h4 className="text-lg font-bold">今日销售</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-4">实时销售数据统计</p>
          <div className="space-y-3">
            <div className="text-3xl font-bold">¥12,345</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span className="font-medium">+15.2%</span>
                <span className="text-muted-foreground">较昨日</span>
              </div>
              <Badge variant="outline" className="text-green-600 border-green-600/30">
                增长中
              </Badge>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full transition-all duration-500" style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>
      </AppCard>
    ),
  },
  {
    id: "quick-actions",
    name: "快速操作",
    category: "基础",
    component: (
      <AppCard className="p-6 hover:shadow-lg transition-all duration-300">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-3">
            <Star className="w-5 h-5 text-primary" />
            <h4 className="text-lg font-bold">快速操作</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-4">常用功能快捷入口</p>
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              size="sm"
              className="h-12 flex-col space-y-1 hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="text-xs">订单</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-12 flex-col space-y-1 hover:bg-red-500 hover:text-white transition-colors bg-transparent"
            >
              <Heart className="w-4 h-4" />
              <span className="text-xs">收藏</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-12 flex-col space-y-1 hover:bg-blue-500 hover:text-white transition-colors bg-transparent"
            >
              <Share2 className="w-4 h-4" />
              <span className="text-xs">分享</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-12 flex-col space-y-1 hover:bg-yellow-500 hover:text-white transition-colors bg-transparent"
            >
              <Star className="w-4 h-4" />
              <span className="text-xs">评价</span>
            </Button>
          </div>
        </div>
      </AppCard>
    ),
  },
]

// 业务卡片数据
const BUSINESS_CARD_DATA = {
  "ecommerce-product": {
    id: "1",
    name: "iPhone 15 Pro",
    price: "¥7,999",
    image: "/iphone-15-pro-hands.png",
    rating: 4.8,
    inStock: true,
  },
  "news-article": {
    id: "1",
    title: "人工智能技术的最新发展趋势",
    summary: "探讨AI技术在各个领域的应用前景，以及对未来社会发展的深远影响。",
    author: "张三",
    publishTime: "2024-01-15",
    category: "科技",
    image: "/ai-technology.png",
    readTime: "5分钟",
    comments: 23,
  },
  "learning-plan-summary": {
    planDuration: "4-8周",
    weeklyStudy: "4.8周",
    targetGoal: "掌握中级知识",
    assessmentTime: "1分钟评估定制",
  },
  "course-module": {
    title: "基础课程",
    totalModules: 4,
    courses: [
      { id: 1, name: "AI基础概念介绍", duration: "40分钟", status: "available" },
      { id: 2, name: "AI发展历程回顾", duration: "45分钟", status: "available" },
      { id: 3, name: "机器学习入门", duration: "60分钟", status: "available" },
      { id: 4, name: "深度学习基础", duration: "55分钟", status: "available" },
    ],
  },
  "learning-outcome": {
    stats: {
      skillMastery: 85,
      employmentSuccess: 92,
      certifications: "3+",
      successfulStudents: "2.8K",
    },
    skillProgress: [
      { skill: "机器学习基础", progress: 90 },
      { skill: "深度学习应用", progress: 85 },
      { skill: "项目实战能力", progress: 80 },
      { skill: "行业应用理解", progress: 75 },
    ],
  },
}

interface WorkspaceCard {
  id: string
  type: string
  name: string
  category: string
  component: React.ReactNode
}

export default function ContentDemoPage() {
  const [cards, setCards] = useState<WorkspaceCard[]>([])
  const [showCardSelector, setShowCardSelector] = useState(false)
  const [isEditing, setIsEditing] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>("全部")

  const getAllAvailableCards = () => {
    const allCards = []

    // 添加基础卡片
    allCards.push(...BASIC_CARDS)

    // 添加注册的业务卡片
    const registeredCards = CardRegistry.getAll()
    registeredCards.forEach((card) => {
      const data = BUSINESS_CARD_DATA[card.name as keyof typeof BUSINESS_CARD_DATA]
      allCards.push({
        id: card.name,
        name: card.displayName || card.name,
        category: card.category,
        component: data ? (
          <BusinessCardWrapper
            cardName={card.name}
            data={data}
            onAction={(action, data) => console.log("Card action:", action, data)}
          />
        ) : (
          <AppCard className="p-6 hover:shadow-lg transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-3">
                <Grid3X3 className="w-5 h-5 text-primary" />
                <h4 className="text-lg font-bold">{card.displayName || card.name}</h4>
              </div>
              <p className="text-sm text-muted-foreground">{card.businessFlow}</p>
              <Badge variant="outline" className="text-xs">
                {card.category}
              </Badge>
            </div>
          </AppCard>
        ),
      })
    })

    return allCards
  }

  const availableCards = getAllAvailableCards()

  const filteredCards =
    selectedCategory === "全部" ? availableCards : availableCards.filter((card) => card.category === selectedCategory)

  const cardsByCategory = filteredCards.reduce(
    (acc, card) => {
      if (!acc[card.category]) {
        acc[card.category] = []
      }
      acc[card.category].push(card)
      return acc
    },
    {} as Record<string, typeof availableCards>,
  )

  const allCategories = ["全部", ...Array.from(new Set(availableCards.map((card) => card.category)))]

  const addCard = (cardConfig: any) => {
    const newCard: WorkspaceCard = {
      id: `${cardConfig.id}-${Date.now()}`,
      type: cardConfig.id,
      name: cardConfig.name,
      category: cardConfig.category,
      component: cardConfig.component,
    }
    setCards([...cards, newCard])
    setShowCardSelector(false)
  }

  const removeCard = (cardId: string) => {
    setCards(cards.filter((card) => card.id !== cardId))
  }

  const handleReorder = (newOrder: string[]) => {
    const reorderedCards = newOrder.map((id) => cards.find((card) => card.id === id)).filter(Boolean) as WorkspaceCard[]
    setCards(reorderedCards)
  }

  const toggleEditMode = () => {
    setIsEditing(!isEditing)
  }

  return (
    <div className="min-h-screen pb-32">
      <AppHeader title="内容应用Demo" />

      <div className="px-4 pt-4">
        <div className="mb-6">
          {cards.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Grid3X3 className="w-8 h-8 text-gray-400" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">我的工作台</h1>
              <p className="text-gray-600 mb-4">点击右下角 ➕ 按钮添加功能卡片，自定义您的工作台</p>
            </div>
          ) : (
            <EnhancedDraggableCardContainer
              items={cards.map((card) => ({
                id: card.id,
                content: (
                  <div className="relative group">
                    {isEditing && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6 p-0 z-10"
                        onClick={() => removeCard(card.id)}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    )}
                    {card.component}
                  </div>
                ),
              }))}
              onReorder={handleReorder}
              layout="vertical"
              className="space-y-4"
              disabled={!isEditing}
            />
          )}
        </div>

        <div className="flex gap-2">
          <Button variant={isEditing ? "default" : "outline"} className="flex-1" onClick={toggleEditMode}>
            {isEditing ? (
              <>
                <Save className="w-4 h-4 mr-2" />
                保存布局
              </>
            ) : (
              <>
                <Edit3 className="w-4 h-4 mr-2" />
                编辑布局
              </>
            )}
          </Button>
        </div>
      </div>

      {isEditing && (
        <Button
          className="fixed bottom-24 right-6 w-14 h-14 rounded-full shadow-lg z-30"
          size="icon"
          onClick={() => setShowCardSelector(true)}
        >
          <Plus className="w-6 h-6" />
        </Button>
      )}

      {showCardSelector && isEditing && (
        <>
          {/* 遮罩层 */}
          <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setShowCardSelector(false)} />

          {/* 底部弹窗 */}
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl max-h-[70vh] overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">选择功能卡片</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowCardSelector(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-1">点击卡片添加到工作台</p>
              <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                {allCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    className="whitespace-nowrap text-xs h-8"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="p-4 overflow-y-auto max-h-[calc(70vh-140px)]">
              {selectedCategory === "全部" ? (
                Object.entries(cardsByCategory).map(([category, categoryCards]) => (
                  <div key={category} className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 px-2">{category}</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {categoryCards.map((cardConfig) => {
                        const isAdded = cards.some((card) => card.type === cardConfig.id)

                        return (
                          <div
                            key={cardConfig.id}
                            className={`cursor-pointer transition-all border rounded-lg p-3 ${
                              isAdded
                                ? "bg-gray-50 border-gray-200 opacity-50"
                                : "hover:shadow-md hover:scale-[1.02] border-gray-200"
                            }`}
                            onClick={() => !isAdded && addCard(cardConfig)}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h5 className="font-medium text-sm">{cardConfig.name}</h5>
                                <p className="text-xs text-gray-500">{cardConfig.category}分类</p>
                              </div>
                              {isAdded && (
                                <Badge variant="secondary" className="text-xs">
                                  已添加
                                </Badge>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))
              ) : (
                <div className="grid grid-cols-1 gap-3">
                  {filteredCards.map((cardConfig) => {
                    const isAdded = cards.some((card) => card.type === cardConfig.id)

                    return (
                      <div
                        key={cardConfig.id}
                        className={`cursor-pointer transition-all border rounded-lg p-3 ${
                          isAdded
                            ? "bg-gray-50 border-gray-200 opacity-50"
                            : "hover:shadow-md hover:scale-[1.02] border-gray-200"
                        }`}
                        onClick={() => !isAdded && addCard(cardConfig)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="font-medium text-sm">{cardConfig.name}</h5>
                            <p className="text-xs text-gray-500">{cardConfig.category}分类</p>
                          </div>
                          {isAdded && (
                            <Badge variant="secondary" className="text-xs">
                              已添加
                            </Badge>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <BottomNavigation
        dict={{
          home: "首页",
          components: "组件",
          ai: "AI",
          profile: "我的",
        }}
      />
    </div>
  )
}
