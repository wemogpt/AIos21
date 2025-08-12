export { BaseCard } from "./base-card"
export { EnhancedBaseCard } from "./enhanced-base-card"
export { CardFactory } from "./card-factory"

// 类型导出
export type { BaseCardProps } from "./base-card"
export type { EnhancedBaseCardProps } from "./enhanced-base-card"
export type { CardFactoryProps } from "./card-factory"

// 废弃警告：直接使用基础组件
export { Card } from "@/components/ui/card"
// @deprecated 请使用 BaseCard 或 EnhancedBaseCard 替代
export { AppCard } from "@/components/layout/app-card"
// @deprecated 请使用 CardFactory 替代
export { BusinessCardWrapper } from "./business-card-wrapper"
