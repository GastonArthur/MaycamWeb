"use client"
import { motion } from "framer-motion"
import { websiteData } from "@/app/lib/data-service"

export default function SponsorsBar() {
  const sponsors = websiteData.sponsors.sponsors || []

  if (!sponsors || sponsors.length === 0) {
    return null
  }

  // Crear un array duplicado para el efecto de scroll infinito
  const duplicatedSponsors = [...sponsors, ...sponsors]

  return (
    <div className="bg-gradient-to-r from-violet-900 via-black to-gray-900 py-12 overflow-hidden border-y border-violet-900/20">
      <div className="container mx-auto px-14 mb-14">
        <h3 className="text-center text-2xl uppercase tracking-wider text-white font-medium">
          NOS ACOMPAÑARON
        </h3>
      </div>

      <div className="sponsor-slider-container">
        <div className="sponsor-slider">
          {duplicatedSponsors.map((sponsor, index) => (
            <motion.div
              key={`${sponsor.id || `sponsor-${index}`}`} // 🔥 Solución para evitar claves duplicadas
              className="sponsor-item mx-14"
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.3 }}
            >
              <a href={sponsor.url || "#"} target="_blank" rel="noopener noreferrer" className="block">
                {sponsor.logo ? (
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name || "Sponsor"}
                    className="h-24 w-auto object-contain filter brightness-0 invert hover:brightness-100 transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.src = ""
                    }}
                  />
                ) : (
                  <div className="h-16 w-40 flex items-center justify-center bg-gray-800 text-white text-sm">
                    Sin imagen
                  </div>
                )}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
