"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  hoverEffect?: boolean
}

export function Card({ children, className, onClick, hoverEffect = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        "bg-gradient-to-br from-gray-900 to-black border border-violet-900/30 rounded-xl overflow-hidden",
        hoverEffect &&
          "group hover:border-violet-500 transition-all duration-300 hover:shadow-lg hover:shadow-violet-900/20",
        onClick && "cursor-pointer",
        className,
      )}
      whileHover={hoverEffect ? { y: -10 } : undefined}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

