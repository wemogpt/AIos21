export type CardThemeConfig = {
  backgroundColor: string
  textColor: string
  borderColor: string
  borderRadius: string
  boxShadow: string
  fontFamily: string
  fontSize: string
  padding: string
}

export const defaultCardTheme: CardThemeConfig = {
  backgroundColor: "#ffffff",
  textColor: "#1a202c",
  borderColor: "#e2e8f0",
  borderRadius: "0.5rem",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  fontFamily: "inherit",
  fontSize: "1rem",
  padding: "1.5rem",
}

export const darkCardTheme: CardThemeConfig = {
  backgroundColor: "#1a202c",
  textColor: "#ffffff",
  borderColor: "#4a5568",
  borderRadius: "0.5rem",
  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  fontFamily: "inherit",
  fontSize: "1rem",
  padding: "1.5rem",
}
