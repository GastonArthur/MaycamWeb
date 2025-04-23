"use client"

import { useState } from "react"
import { Trophy, Calendar, X, Award } from "lucide-react"
import { websiteData } from "@/app/lib/data-service"
import { HeroSection } from "@/app/components/ui/hero-section"
import { motion, AnimatePresence } from "framer-motion"

export default function AchievementsPage() {
  const achievements = websiteData.achievements.achievements || []
  const [selectedAchievement, setSelectedAchievement] = useState<(typeof achievements)[0] | null>(null)
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({})

  // Manejo de error de imagen
  const handleImageError = (id: string) => {
    setImageErrors((prevErrors) => ({ ...prevErrors, [id]: true }))
  }

  // Función para formatear fechas
  const formatDate = (dateString: string) => {
    const options = { year: "numeric" as const, month: "long" as const, day: "numeric" as const }
    return new Date(dateString).toLocaleDateString("es-ES", options)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section */}
      <HeroSection
        title="Nuestros Logros"
        subtitle="Descubre los éxitos y reconocimientos de Maycam Evolve"
        badge={{
          icon: <Trophy className="h-4 w-4" />,
          text: "Nuestros Éxitos",
        }}
      />

      {/* Achievements Timeline Section */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        {/* Fondo mejorado con gradientes y elementos decorativos */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950"></div>

        {/* Elementos decorativos del fondo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>

        {/* Patrón de puntos sutil */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        {/* Formas decorativas */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-violet-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          {achievements.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">No hay logros disponibles en este momento.</p>
            </div>
          ) : (
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id || index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  className="mb-20 block md:flex md:items-center relative"
                >
                  {/* Línea de tiempo decorativa */}
                  {index < achievements.length - 1 && (
                    <div className="absolute left-1/2 md:left-auto md:top-1/2 transform -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 w-px md:w-16 h-20 md:h-px bg-gradient-to-b md:bg-gradient-to-r from-violet-500/40 to-violet-900/10 top-full md:left-[calc(50%-8px)]"></div>
                  )}

                  <div className={`w-full md:w-7/12 mb-6 md:mb-0 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                    {/* Renderizar imagen solo si `imageUrl` existe y no tiene error */}
                    {achievement.imageUrl && !imageErrors[achievement.id] && (
                      <motion.div
                        className="relative aspect-video overflow-hidden rounded-2xl cursor-pointer group shadow-[0_0_25px_-5px_rgba(124,58,237,0.2)]"
                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                        onClick={() => setSelectedAchievement(achievement)}
                      >
                        <img
                          src={achievement.imageUrl || "/placeholder.svg"}
                          alt={achievement.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={() => handleImageError(achievement.id)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-300"></div>

                        {/* Overlay con icono al hacer hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-violet-600/40 backdrop-blur-sm p-4 rounded-full">
                            <Award className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Achievement Info */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:order-2 md:pl-12 md:text-left" : "md:order-1 md:pr-12 md:text-right"
                    }`}
                  >
                    <motion.div
                      className="bg-gradient-to-br from-gray-800/70 via-gray-850/70 to-gray-900/70 rounded-2xl p-7 transition-all duration-300 cursor-pointer relative overflow-hidden shadow-[0_10px_40px_-15px_rgba(124,58,237,0.25)] backdrop-blur-sm"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 15px 50px -12px rgba(124,58,237,0.3)",
                      }}
                      onClick={() => setSelectedAchievement(achievement)}
                    >
                      {/* Borde brillante */}
                      <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-violet-400/30 via-violet-600/20 to-transparent pointer-events-none"></div>

                      {/* Elemento decorativo */}
                      <div className="absolute -top-10 -right-10 w-20 h-20 bg-violet-500/15 rounded-full blur-2xl pointer-events-none"></div>
                      <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none"></div>

                      <div className="text-xl font-bold text-white mb-3">{achievement.title}</div>
                      {achievement.date && (
                        <div
                          className={`flex items-center text-sm text-violet-200 mb-3 ${
                            index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                          } justify-start`}
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{formatDate(achievement.date)}</span>
                        </div>
                      )}
                      {achievement.description && (
                        <p className="text-gray-200 text-sm leading-relaxed">{achievement.description}</p>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Achievement Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-gradient-to-br from-gray-800/90 via-gray-850/90 to-gray-900/95 rounded-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-[0_20px_60px_-15px_rgba(124,58,237,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Borde brillante */}
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-violet-400/40 via-violet-600/20 to-transparent pointer-events-none"></div>

              {/* Elementos decorativos */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/15 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedAchievement(null)
                  }}
                  className="absolute top-4 right-4 bg-gray-800/70 p-2 rounded-full text-white hover:bg-violet-600 transition-colors z-20 backdrop-blur-sm"
                >
                  <X className="h-5 w-5" />
                </button>

                {selectedAchievement.imageUrl && !imageErrors[selectedAchievement.id] && (
                  <div className="relative h-56 sm:h-64 md:h-80">
                    <img
                      src={selectedAchievement.imageUrl || "/placeholder.svg"}
                      alt={selectedAchievement.title}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(selectedAchievement.id)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-violet-500/20 p-3 rounded-xl">
                      <Trophy className="h-6 w-6 text-violet-200" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedAchievement.title}</h3>
                      {selectedAchievement.date && (
                        <div className="flex items-center text-sm text-violet-200 mt-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{formatDate(selectedAchievement.date)}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {selectedAchievement.description && (
                    <div className="bg-violet-500/10 rounded-xl p-6 backdrop-blur-sm border border-violet-500/20">
                      <p className="text-gray-200 leading-relaxed">{selectedAchievement.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
