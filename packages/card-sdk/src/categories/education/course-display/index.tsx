import { GridStyle } from "./variants/grid-style"
// Import other styles like ListStyle, DetailedStyle here

interface CourseDisplayProps {
  variant: "grid" | "list" | "detailed"
  // Add other props needed for all variants
  [key: string]: any
}

export function CourseDisplay({ variant, ...props }: CourseDisplayProps) {
  switch (variant) {
    case "grid":
      return <GridStyle {...props} />
    // Add cases for 'list' and 'detailed'
    default:
      return <GridStyle {...props} />
  }
}
