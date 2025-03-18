"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface SlideInProps {
  children: React.ReactNode
  className?: string
  direction?: "left" | "right" | "up" | "down"
  delay?: number
  duration?: number
  threshold?: number
}

export default function SlideIn({
  children,
  className,
  direction = "left",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
}: SlideInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "left":
          return "translateX(-50px)"
        case "right":
          return "translateX(50px)"
        case "up":
          return "translateY(50px)"
        case "down":
          return "translateY(-50px)"
        default:
          return "translateX(-50px)"
      }
    }
    return "translate(0, 0)"
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

