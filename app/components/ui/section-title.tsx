"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  subtitle?: string
  icon?: ReactNode
  center?: boolean
  className?: string
}

export function SectionTitle({ title, subtitle, icon, center = false, className }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("mb-12", center && "text-center", className)}
    >
      <div className={cn("flex items-center", center && "justify-center")}>
        {icon && <div className="mr-3 text-violet-500">{icon}</div>}
        <h2 className="text-3xl font-bold text-white font-title">{title}</h2>
      </div>
      <div className={cn("w-24 h-1 bg-violet-600 my-4", center && "mx-auto")}></div>
      {subtitle && <p className={cn("text-gray-400 max-w-2xl font-text", center && "mx-auto")}>{subtitle}</p>}
    </motion.div>
  )
}

