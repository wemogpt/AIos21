import type { CardThemeConfig } from "@/types"

/**
 * 核心配置API接口定义 (根据您的设计方案)
 * 这是未来实现的API结构，目前我们先导出原始配置。
 */
export interface CoreConfigAPI {
  /**
   * 继承现有 CardThemeProvider 功能
   */
  theme: {
    getTheme(): CardThemeConfig
    setTheme(theme: CardThemeConfig): void
    applyPreset(preset: CardThemeConfig): void
  }
  /**
   * 扩展语言管理
   */
  i18n: {
    getLanguage(): string
    setLanguage(lang: string): void
    loadCardLocale(category: string, lang: string): Promise<Record<string, string>>
  }
  /**
   * 继承现有数据配置
   */
  data: {
    getChartPalette(): string[]
    getDataConfig(): any
  }
}

// This file is the entry point for the package.
// It exports all the configurations, ensuring they are available under the @ipollo/core-config alias.
export * from "./i18n/i18n.config"
export * from "./theme/card-theme"
export * from "./theme/theme"
export * from "./chart/chart-theme"
export * from "./data/data-chart-palettes"
