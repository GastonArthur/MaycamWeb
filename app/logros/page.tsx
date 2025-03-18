"use client";

import { useState } from "react";
import { Trophy, Calendar, Award, X } from "lucide-react";
import { websiteData } from "@/app/lib/data-service";
import { HeroSection } from "@/app/components/ui/hero-section";
import { motion, AnimatePresence } from "framer-motion";

export default function AchievementsPage() {
  const achievements = websiteData.achievements.achievements || [];
  const [selectedAchievement, setSelectedAchievement] = useState<typeof achievements[0] | null>(null);
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  // Manejo de error de imagen
  const handleImageError = (id: string) => {
    setImageErrors((prevErrors) => ({ ...prevErrors, [id]: true }));
  };

  // Función para formatear fechas
  const formatDate = (dateString: string) => {
    const options = { year: "numeric" as const, month: "long" as const, day: "numeric" as const };
    return new Date(dateString).toLocaleDateString("es-ES", options);
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <HeroSection
        title="Nuestros Logros"
        subtitle="Descubre los éxitos y reconocimientos de Maycam Evolve"
        badge={{
          icon: <Trophy className="h-4 w-4" />, text: "Nuestros Éxitos",
        }}
      />

      {/* Achievements Timeline Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {achievements.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">No hay logros disponibles en este momento.</p>
            </div>
          ) : (
            <motion.div initial="hidden" animate="show" variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id || index}
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                  className={`mb-16 flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Renderizar imagen solo si `imageUrl` existe y no tiene error */}
                  {achievement.imageUrl && !imageErrors[achievement.id] && (
                    <motion.div className="relative aspect-video overflow-hidden bg-gray-800 rounded-xl" whileHover={{ y: -10 }}>
                      <img
                        src={achievement.imageUrl}
                        alt={achievement.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        onError={() => handleImageError(achievement.id)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    </motion.div>
                  )}

                  {/* Achievement Info */}
                  <div className={`w-5/12 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                    <motion.div className="bg-gradient-to-br from-gray-900 to-black border border-violet-900/30 rounded-xl p-6 hover:border-violet-500 transition-all duration-300">
                      <div className="text-xl font-bold text-white mb-2">{achievement.title}</div>
                      {achievement.date && (
                        <div className="flex items-center text-sm text-violet-400 mb-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{formatDate(achievement.date)}</span>
                        </div>
                      )}
                      {achievement.description && (
                        <p className="text-gray-300 text-sm">{achievement.description}</p>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-violet-900/50 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-violet-900/70 transition-colors z-20"
                >
                  <X className="h-5 w-5" />
                </button>

                {selectedAchievement.imageUrl && !imageErrors[selectedAchievement.id] && (
                  <div className="relative h-80">
                    <img
                      src={selectedAchievement.imageUrl}
                      alt={selectedAchievement.title}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(selectedAchievement.id)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">{selectedAchievement.title}</h3>
                  {selectedAchievement.description && (
                    <p className="text-gray-300 mb-6 leading-relaxed">{selectedAchievement.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
