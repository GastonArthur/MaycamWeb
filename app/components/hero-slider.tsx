"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { websiteData } from "@/app/lib/data-service"

export default function HeroSlider() {
  const heroImages = websiteData?.hero?.backgroundImages || [
    {
      url: "/bg_photo/home_bg4.jpg",
      alt: "Maycam Evolve",
    },
    {
      url: "/bg_photo/home_bg2.jpg",
      alt: "Equipo Profesional",
    },
    {
      url: "/bg_photo/home_bg1.jpg",
      alt: "Gaming Community",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // Cambia la imagen cada 5 segundos automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  // Función para cambiar manualmente de imagen
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
  }

  return (
    <section className="relative h-[100vh] overflow-hidden">
      {/* Imagen de fondo con transición */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        <img
          src={heroImages[currentIndex].image}
          alt={heroImages[currentIndex].alt || "Maycam Evolve"}
          className="h-full w-full object-cover transition-opacity duration-1000"
          onError={(e) => {
            e.currentTarget.src = ""
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Contenido encima de la imagen */}
      <div className="container px-4 md:px-6 text-white relative z-10 h-full flex items-center">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent font-title mb-4">
            {websiteData?.hero?.title || "MAYCAM EVOLVE"}
          </h1>
          <div className="w-24 h-1 bg-violet-600 mx-auto mb-6"></div>
          <p className="text-gray-300 md:text-xl max-w-[800px] mx-auto font-text">
            {websiteData?.hero?.description ||
              "Equipo profesional de eSports con presencia en los principales títulos competitivos"}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={websiteData?.hero?.buttonUrl || "/sobre-nosotros"}
              className="inline-flex items-center justify-center px-6 py-3 bg-violet-600 text-white font-medium rounded-sm shadow-lg hover:bg-violet-700 transition-all duration-300 transform hover:-translate-y-1 font-title"
            >
              {websiteData?.hero?.buttonText || "Conoce al equipo"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent hover:bg-violet-900/20 text-white font-medium rounded-sm border border-violet-600 shadow-lg hover:shadow-violet-600/20 transition-all duration-300 transform hover:-translate-y-1 font-title"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>

      {/* Botones de navegación */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
        onClick={goToPrevious}
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
        onClick={goToNext}
      >
        <ArrowRight className="w-6 h-6" />
      </button>

      {/* Indicadores (dots) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-violet-500" : "bg-gray-400"
            } transition`}
          ></button>
        ))}
      </div>
    </section>
  )
}
