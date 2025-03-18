"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GridLayoutProps {
  children: ReactNode
  columns?: {
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  gap?: string
  className?: string
}

export default function GridLayout({
  children,
  columns = {
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
  },
  gap = "gap-8",
  className,
}: GridLayoutProps) {
  // Construir las clases de columnas basadas en los breakpoints
  const columnClasses = [
    columns.sm && `grid-cols-${columns.sm}`,
    columns.md && `md:grid-cols-${columns.md}`,
    columns.lg && `lg:grid-cols-${columns.lg}`,
    columns.xl && `xl:grid-cols-${columns.xl}`,
  ]
    .filter(Boolean)
    .join(" ")

  return <div className={cn("grid", columnClasses, gap, "auto-rows-fr", className)}>{children}</div>
}

