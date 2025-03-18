"use client"

import { useState } from "react"
import { X, ZoomIn, ZoomOut, Download, AlertCircle } from "lucide-react"

interface ImagePreviewProps {
  src: string
  alt: string
  onClose: () => void
}

export default function ImagePreview({ src, alt, onClose }: ImagePreviewProps) {
  const [zoom, setZoom] = useState(1)
  const [imageError, setImageError] = useState(false)

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3))
  }

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5))
  }

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = src
    link.download = alt || "image"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleImageError = () => {
    console.error(`Error al cargar la imagen en vista previa: ${src}`)
    setImageError(true)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center" onClick={onClose}>
      <div className="absolute top-4 right-4 flex space-x-2">
        <button
          onClick={(e) => {
            e.stopPropagation()
            handleZoomIn()
          }}
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          disabled={imageError}
        >
          <ZoomIn className="h-5 w-5 text-white" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            handleZoomOut()
          }}
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          disabled={imageError}
        >
          <ZoomOut className="h-5 w-5 text-white" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            handleDownload()
          }}
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
          disabled={imageError}
        >
          <Download className="h-5 w-5 text-white" />
        </button>
        <button onClick={onClose} className="p-2 bg-red-900 rounded-full hover:bg-red-800 transition-colors">
          <X className="h-5 w-5 text-white" />
        </button>
      </div>

      <div className="max-w-[90vw] max-h-[80vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
        {imageError ? (
          <div className="bg-red-900/20 border border-red-700 rounded-md p-8 text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-red-400 mb-2">Error al cargar la imagen</h3>
            <p className="text-gray-300 mb-4">No se pudo cargar la imagen desde la URL proporcionada.</p>
            <p className="text-sm text-gray-400 break-all">{src}</p>
          </div>
        ) : (
          src ? (
            <img
              src={src}
              alt={alt}
              className="transition-transform duration-300 ease-in-out"
              style={{ transform: `scale(${zoom})` }}
              onError={handleImageError}
            />
          ) : null
        )}
      </div>

      {!imageError && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 px-4 py-2 rounded-md">
          <p className="text-white text-sm">Zoom: {zoom}x</p>
        </div>
      )}
    </div>
  )
}
