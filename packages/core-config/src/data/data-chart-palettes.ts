export const dataChartPalettes = {
  palette1: [
    {
      name: "森林",
      colors: ["#22c55e", "#16a34a", "#15803d", "#4d7c0f", "#a3e635"],
    },
    {
      name: "海洋",
      colors: ["#3b82f6", "#2563eb", "#0ea5e9", "#06b6d4", "#67e8f9"],
    },
    {
      name: "日落",
      colors: ["#f97316", "#ea580c", "#c2410c", "#ef4444", "#fca5a5"],
    },
    {
      name: "葡萄",
      colors: ["#8b5cf6", "#7c3aed", "#6d28d9", "#a855f7", "#d8b4fe"],
    },
    {
      name: "沙漠",
      colors: ["#eab308", "#ca8a04", "#a16207", "#f59e0b", "#fcd34d"],
    },
  ],
  default: ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE", "#00C49F"],
  vibrant: ["#ff6b6b", "#feca57", "#48dbfb", "#1dd1a1", "#5f27cd", "#ff9f43"],
  categorical: ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE", "#00C49F", "#FFBB28", "#FF8042"],
  sequential: ["#D1E5F0", "#92C5DE", "#4393C3", "#2166AC", "#053061"],
  diverging: ["#B2182B", "#D6604D", "#F4A582", "#FDDBC7", "#D1E5F0", "#92C5DE", "#4393C3", "#2166AC"],
}

export type DataChartPalette =
  | (typeof dataChartPalettes)["palette1"]
  | (typeof dataChartPalettes)["default"]
  | (typeof dataChartPalettes)["vibrant"]
  | (typeof dataChartPalettes)["categorical"]
  | (typeof dataChartPalettes)["sequential"]
  | (typeof dataChartPalettes)["diverging"]

export type DataChartPaletteConfig = {
  name: string
  palette: DataChartPalette
}
