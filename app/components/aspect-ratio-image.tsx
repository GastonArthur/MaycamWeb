"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface AspectRatioImageProps {
  src: string
  alt: string
  aspectRatio?: string
  className?: string
  fallbackSrc?: string
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  priority?: boolean
}

export default function AspectRatioImage({
  src,
  alt,
  aspectRatio = "1/1",
  className,
  fallbackSrc = "",
  objectFit = "cover",
  priority = false,
}: AspectRatioImageProps) {
  const [error, setError] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [imageSrc, setImageSrc] = useState<string>(src)

  // Actualizar la fuente de la imagen cuando cambia la prop src
  useEffect(() => {
    if (src !== imageSrc && !error) {
      setImageSrc(src)
      setLoaded(false)
    }
  }, [src, imageSrc, error])

  const handleError = () => {
    console.error(`Error loading image: ${src}`)
    setError(true)

    // Construir una URL de fallback con el texto alt
    const fallbackUrl = `${fallbackSrc}?height=200&width=200&text=${encodeURIComponent(alt || "Image")}`
    setImageSrc(fallbackUrl)
  }

  const handleLoad = () => {
    setLoaded(true)
  }

  return (
    <div className={cn("relative overflow-hidden", className)} style={{ aspectRatio }}>
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {!error && imageSrc ? (
        <img
          src={imageSrc}
          alt={alt}
          className={cn(
            "absolute inset-0 h-full w-full transition-all duration-300",
            `object-${objectFit}`,
            !loaded ? "opacity-0" : "opacity-100"
          )}
          onError={handleError}
          onLoad={handleLoad}
          loading={priority ? "eager" : "lazy"}
        />
      ) : null}
    </div>
  )
}