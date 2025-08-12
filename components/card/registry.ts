import type { CardConfig, CardAction } from "@/types"
import LearningPlanSummaryCard from "./business-cards/learning-plan-summary-card"
import CourseModuleCard from "./business-cards/course-module-card"
import LearningOutcomeCard from "./business-cards/learning-outcome-card"

class CardRegistry {
  private static cards = new Map<string, CardConfig>()
  private static actionHandlers = new Map<string, (action: CardAction) => void>()

  static register(config: CardConfig) {
    this.cards.set(config.name, config)
  }

  static registerActionHandler(cardName: string, handler: (action: CardAction) => void) {
    this.actionHandlers.set(cardName, handler)
  }

  static executeAction(cardName: string, action: CardAction) {
    const handler = this.actionHandlers.get(cardName)
    if (handler) {
      handler(action)
    }
  }

  static get(name: string) {
    return this.cards.get(name)
  }

  static getConfig(name: string) {
    return this.cards.get(name)
  }

  static getAll() {
    return Array.from(this.cards.values())
  }

  static getByCategory(category: string) {
    return Array.from(this.cards.values()).filter((card) => card.category === category)
  }

  static unregister(name: string) {
    this.cards.delete(name)
    this.actionHandlers.delete(name)
  }
}

// 教育类卡片
CardRegistry.register({
  name: "learning-plan-summary",
  displayName: "学习计划摘要",
  category: "教育",
  component: LearningPlanSummaryCard,
  businessFlow: "个性定制学习计划摘要，显示学习时长、目标和评估功能",
  developer: {
    name: "AI Education System",
    version: "1.0.0",
    description: "个性定制学习计划摘要卡片，显示学习时长、目标和评估功能",
  },
})

CardRegistry.register({
  name: "course-module",
  displayName: "课程模块",
  category: "教育",
  component: CourseModuleCard,
  businessFlow: "课程模块展示，包含可展开的课程列表和学习进度",
  developer: {
    name: "AI Education System",
    version: "1.0.0",
    description: "课程模块卡片，展示可展开的课程列表和学习进度",
  },
})

CardRegistry.register({
  name: "learning-outcome",
  displayName: "学习成果",
  category: "教育",
  component: LearningOutcomeCard,
  businessFlow: "学习成果预期展示，包含统计数据和技能进度条",
  developer: {
    name: "AI Education System",
    version: "1.0.0",
    description: "学习成果预期卡片，显示统计数据和技能进度条",
  },
})

// 功能类卡片
CardRegistry.register({
  name: "notification-center",
  displayName: "通知中心",
  category: "功能",
  component: null,
  businessFlow: "消息通知管理，支持分类查看和批量操作",
  developer: {
    name: "System Core",
    version: "1.0.0",
    description: "统一的消息通知管理中心",
  },
})

CardRegistry.register({
  name: "search-widget",
  displayName: "搜索组件",
  category: "功能",
  component: null,
  businessFlow: "全局搜索功能，支持智能联想和历史记录",
  developer: {
    name: "System Core",
    version: "1.0.0",
    description: "智能搜索组件，提供快速检索能力",
  },
})

// 内容类卡片
CardRegistry.register({
  name: "article-editor",
  displayName: "文章编辑器",
  category: "内容",
  component: null,
  businessFlow: "富文本编辑器，支持markdown和所见即所得模式",
  developer: {
    name: "Content System",
    version: "1.0.0",
    description: "专业的文章编辑和发布工具",
  },
})

CardRegistry.register({
  name: "content-library",
  displayName: "内容库",
  category: "内容",
  component: null,
  businessFlow: "内容资源管理，支持分类、标签和搜索",
  developer: {
    name: "Content System",
    version: "1.0.0",
    description: "统一的内容资源管理平台",
  },
})

// 媒体类卡片
CardRegistry.register({
  name: "image-gallery",
  displayName: "图片画廊",
  category: "媒体",
  component: null,
  businessFlow: "图片展示和管理，支持批量上传和编辑",
  developer: {
    name: "Media System",
    version: "1.0.0",
    description: "专业的图片管理和展示组件",
  },
})

CardRegistry.register({
  name: "video-player",
  displayName: "视频播放器",
  category: "媒体",
  component: null,
  businessFlow: "多格式视频播放，支持字幕和播放控制",
  developer: {
    name: "Media System",
    version: "1.0.0",
    description: "高性能的视频播放解决方案",
  },
})

// 数据类卡片
CardRegistry.register({
  name: "analytics-dashboard",
  displayName: "数据分析",
  category: "数据",
  component: null,
  businessFlow: "数据可视化分析，支持多维度图表展示",
  developer: {
    name: "Analytics System",
    version: "1.0.0",
    description: "专业的数据分析和可视化工具",
  },
})

CardRegistry.register({
  name: "report-generator",
  displayName: "报表生成器",
  category: "数据",
  component: null,
  businessFlow: "自动化报表生成，支持定时任务和导出",
  developer: {
    name: "Analytics System",
    version: "1.0.0",
    description: "智能报表生成和管理系统",
  },
})

// 社交类卡片
CardRegistry.register({
  name: "user-profile",
  displayName: "用户档案",
  category: "社交",
  component: null,
  businessFlow: "用户信息展示，包含社交关系和动态",
  developer: {
    name: "Social System",
    version: "1.0.0",
    description: "完整的用户档案管理系统",
  },
})

CardRegistry.register({
  name: "chat-widget",
  displayName: "聊天组件",
  category: "社交",
  component: null,
  businessFlow: "实时聊天功能，支持群聊和文件传输",
  developer: {
    name: "Social System",
    version: "1.0.0",
    description: "实时通讯和社交互动平台",
  },
})

// 电商类卡片
CardRegistry.register({
  name: "product-showcase",
  displayName: "商品展示",
  category: "电商",
  component: null,
  businessFlow: "商品信息展示，包含价格、评价和购买功能",
  developer: {
    name: "E-commerce System",
    version: "1.0.0",
    description: "专业的商品展示和销售组件",
  },
})

CardRegistry.register({
  name: "shopping-cart",
  displayName: "购物车",
  category: "电商",
  component: null,
  businessFlow: "购物车管理，支持商品增减和结算",
  developer: {
    name: "E-commerce System",
    version: "1.0.0",
    description: "完整的购物车和结算系统",
  },
})

// 招聘类卡片
CardRegistry.register({
  name: "job-posting",
  displayName: "职位发布",
  category: "招聘",
  component: null,
  businessFlow: "职位信息发布和管理，支持筛选和搜索",
  developer: {
    name: "HR System",
    version: "1.0.0",
    description: "专业的职位发布和管理平台",
  },
})

CardRegistry.register({
  name: "candidate-profile",
  displayName: "候选人档案",
  category: "招聘",
  component: null,
  businessFlow: "候选人信息管理，包含简历和面试记录",
  developer: {
    name: "HR System",
    version: "1.0.0",
    description: "全面的候选人信息管理系统",
  },
})

// 零售类卡片
CardRegistry.register({
  name: "inventory-management",
  displayName: "库存管理",
  category: "零售",
  component: null,
  businessFlow: "库存监控和管理，支持预警和补货提醒",
  developer: {
    name: "Retail System",
    version: "1.0.0",
    description: "智能库存管理和监控系统",
  },
})

CardRegistry.register({
  name: "pos-terminal",
  displayName: "收银终端",
  category: "零售",
  component: null,
  businessFlow: "销售收银功能，支持多种支付方式",
  developer: {
    name: "Retail System",
    version: "1.0.0",
    description: "专业的收银和支付处理系统",
  },
})

// 旅行类卡片
CardRegistry.register({
  name: "trip-planner",
  displayName: "行程规划",
  category: "旅行",
  component: null,
  businessFlow: "旅行行程规划，包含路线推荐和预算管理",
  developer: {
    name: "Travel System",
    version: "1.0.0",
    description: "智能旅行规划和管理工具",
  },
})

CardRegistry.register({
  name: "hotel-booking",
  displayName: "酒店预订",
  category: "旅行",
  component: null,
  businessFlow: "酒店查询和预订，支持价格比较和评价查看",
  developer: {
    name: "Travel System",
    version: "1.0.0",
    description: "便捷的酒店预订和管理平台",
  },
})

export { CardRegistry }
