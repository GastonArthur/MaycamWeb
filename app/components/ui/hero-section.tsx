"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  badge?: {
    icon: ReactNode
    text: string
  }
  children?: ReactNode
}

export function HeroSection({ title, subtitle, backgroundImage, badge, children }: HeroSectionProps) {
  return (
    <section className="relative py-32 bg-gradient-to-r from-violet-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {backgroundImage && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
        </div>
      )}

      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 -left-10 w-72 h-72 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {badge && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center bg-violet-900/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-violet-500/30"
            >
              <div className="h-4 w-4 text-violet-400 mr-2">{badge.icon}</div>
              <span className="text-sm text-violet-300 font-medium">{badge.text}</span>
            </motion.div>
          )}

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-title drop-shadow-lg">{title}</h1>
          <div className="w-24 h-1 bg-violet-600 mb-6"></div>
          {subtitle && <p className="text-xl text-gray-200 font-text">{subtitle}</p>}
          {children}
        </motion.div>
      </div>
    </section>
  )
}

