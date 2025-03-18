"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Image, X, Check, Upload, LinkIcon, Trash2 } from "lucide-react"

interface ImageUrlUploaderProps {
  initialUrl?: string
  onImageSelected: (url: string) => void
  onImageRemoved?: () => void
  label?: string
  className?: string
  aspectRatio?: "square" | "video" | "portrait" | "banner"
  previewSize?: "small" | "medium" | "large"
  allowRemove?: boolean
  placeholder?: string
}

export default function ImageUrlUploader({
  initialUrl = "",
  onImageSelected,
  onImageRemoved,
  label = "Imagen",
  className = "",
  aspectRatio = "square",
  previewSize = "medium",
  allowRemove = true,
  placeholder = "https://ejemplo.com/imagen.jpg",
}: ImageUrlUploaderProps): React.JSX.Element {
  const [url, setUrl] = useState(initialUrl)
  const [previewUrl, setPreviewUrl] = useState(initialUrl)
  const [isValid, setIsValid] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [showPreview, setShowPreview] = useState(!!initialUrl)
  const [error, setError] = useState("")

  useEffect(() => {
    if (initialUrl && initialUrl !== url) {
      setUrl(initialUrl)
      setPreviewUrl(initialUrl)
      setShowPreview(!!initialUrl)
      setIsValid(true)
      setError("")
    }
  }, [initialUrl])

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
    setError("")
  }

  const handlePreview = () => {
    if (!url) {
      setError("Por favor, ingresa una URL de imagen")
      return
    }

    try {
      new URL(url)
    } catch (e) {
      setError("URL inválida. Asegúrate de incluir http:// o https://")
      return
    }

    setIsLoading(true)
    setShowPreview(true)
    setError("")

    const img = new window.Image()
    img.onload = () => {
      setPreviewUrl(url)
      setIsValid(true)
      setIsLoading(false)
      onImageSelected(url)
    }
    img.onerror = () => {
      setIsValid(false)
      setIsLoading(false)
      setError("No se pudo cargar la imagen. Verifica la URL e intenta nuevamente.")
    }
    img.src = url
  }

  const handleClear = () => {
    setUrl("")
    setPreviewUrl("")
    setShowPreview(false)
    setError("")
    if (onImageRemoved) {
      onImageRemoved()
    } else {
      onImageSelected("")
    }
  }

  return (
    <div className={`w-full ${className}`}>
      <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>

      <div className="flex flex-col space-y-4">
        <div className="flex space-x-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={url}
              onChange={handleUrlChange}
              placeholder={placeholder}
              className={`bg-gray-900 border ${error ? "border-red-500" : "border-gray-700"} focus:border-violet-500 focus:ring-1 focus:ring-violet-500 rounded-md w-full py-2 pl-10 pr-12 text-gray-300 placeholder-gray-500`}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePreview}
            disabled={!url || isLoading}
            className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Upload className="h-5 w-5" />
            <span>Previsualizar</span>
          </motion.button>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <AnimatePresence>
          {showPreview && isValid && previewUrl ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gray-800 rounded-lg p-4 border border-gray-700"
            >
              <img
                src={previewUrl}
                alt="Vista previa"
                className="w-full h-full object-cover"
              />
              <button onClick={handleClear} className="text-gray-400 hover:text-red-500 mt-2">
                <Trash2 className="h-5 w-5" />
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  )
}
