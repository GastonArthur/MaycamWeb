"use client"

import { useState } from "react"
import { Users, Mail, Phone, Linkedin, Twitter, Instagram, ArrowRight, X, Share2 } from "lucide-react"
import { websiteData } from "@/app/lib/data-service"
import { HeroSection } from "@/app/components/ui/hero-section"
import CTASection from "../components/contact-section"
import { fadeIn, staggerContainer, useAnimationInView } from "@/hooks/useAnimation"
import { motion, AnimatePresence } from "framer-motion"

export default function StaffPage() {
  const staffData = websiteData.staff || {
    staffMembers: [],
    title: "Nuestro Staff",
    description: "El equipo detrás de los jugadores",
    socialMedia: {
      twitter: "",
      instagram: "",
      linkedin: "",
    } as {
      email?: string
      phone?: string
      twitter?: string
      instagram?: string
      linkedin?: string
    },
  }
  const staffMembers = staffData.staffMembers || []
  const [selectedMember, setSelectedMember] = useState<null | (typeof staffMembers)[0]>(null)
  const staffAnimation = useAnimationInView()

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section */}
      <HeroSection
        title={staffData.title || "Nuestro Staff"}
        subtitle={staffData.description || "El equipo detrás de los jugadores que hace posible nuestro éxito"}
        badge={{
          icon: <Users className="h-4 w-4" />,
          text: "Nuestro Equipo",
        }}
      />

      {/* Staff Members Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background elements */}
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
          {staffMembers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">No hay miembros del staff disponibles en este momento.</p>
            </div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={staffAnimation.animate}
              ref={staffAnimation.ref}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {staffMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="group cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                  whileHover={{ y: -10 }}
                >
                  {/* Tarjeta con efecto de profundidad */}
                  <div className="relative">
                    {/* Fondo con efecto de profundidad */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-violet-800/20 rounded-xl transform rotate-3 scale-[0.97] opacity-70 group-hover:rotate-6 group-hover:scale-[0.98] transition-transform duration-300"></div>

                    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden h-[380px] border border-violet-500/30 group-hover:border-violet-500/50 transition-all duration-300 shadow-lg shadow-violet-900/20 group-hover:shadow-violet-900/30 z-10">
                      {/* Imagen con overlay */}
                      <div className="absolute inset-0 z-0">
                        {member.image && (
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name || "Staff Member"}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => {
                              e.currentTarget.style.display = "none" // Oculta la imagen en caso de error
                            }}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80"></div>
                      </div>

                      {/* Contenido */}
                      <div className="relative z-10 h-full flex flex-col justify-end p-6">
                        {/* Badge de rol */}
                        <div className="absolute top-4 right-4 bg-violet-900/80 backdrop-blur-sm px-3 py-1 text-xs text-white rounded-full border border-violet-500/30 shadow-lg shadow-violet-900/20">
                          {member.role}
                        </div>

                        {/* Línea decorativa */}
                        <div className="w-12 h-1 bg-violet-600 mb-3 group-hover:w-20 transition-all duration-300"></div>

                        <h3 className="text-2xl font-bold text-white mb-2 font-title group-hover:text-violet-300 transition-colors">
                          {member.name}
                        </h3>

                        <p className="text-gray-300 text-sm line-clamp-2 font-text mb-4">{member.description}</p>

                        {/* Botón "Ver perfil completo" */}
                        <div className="flex items-center text-violet-400 text-sm font-medium bg-violet-900/30 backdrop-blur-sm py-1.5 px-3 rounded-md border border-violet-500/20 inline-block w-fit group-hover:bg-violet-900/50 transition-all duration-300">
                          <span>Ver perfil completo</span>
                          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Staff Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-gradient-to-br from-gray-800/90 via-gray-850/90 to-gray-900/95 rounded-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-[0_20px_60px_-15px_rgba(124,58,237,0.4)] border border-violet-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Borde brillante */}
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-violet-400/40 via-violet-600/20 to-transparent pointer-events-none"></div>

              {/* Elementos decorativos */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/15 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>

              {/* Elemento decorativo adicional */}
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.1),transparent_70%)] pointer-events-none"></div>

              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedMember(null)
                  }}
                  className="absolute top-4 right-4 bg-gray-800/70 p-2 rounded-full text-white hover:bg-violet-600 transition-colors z-20 backdrop-blur-sm border border-violet-500/20"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="md:flex">
                  {/* Left side - Image */}
                  <div className="md:w-2/5 relative h-80 md:h-auto">
                    <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-b from-black/70 to-transparent z-10"></div>
                    {selectedMember.image && (
                      <img
                        src={selectedMember.image || "/placeholder.svg"}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none" // Oculta la imagen en caso de error
                        }}
                      />
                    )}

                    {/* Badge de rol en la imagen */}
                    <div className="absolute top-4 left-4 bg-violet-800/80 backdrop-blur-sm px-4 py-1 text-sm text-white rounded-full font-medium border border-violet-500/30 shadow-lg shadow-violet-900/20 flex items-center">
                      <Users className="h-4 w-4 mr-2 text-violet-300" />
                      {selectedMember.role}
                    </div>
                  </div>

                  {/* Right side - Info */}
                  <div className="md:w-3/5 p-8">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-white mb-2 font-title">{selectedMember.name}</h3>
                      <p className="text-violet-400 text-lg mb-4">{selectedMember.role}</p>
                      <div className="w-16 h-1 bg-violet-600 mb-6"></div>

                      {selectedMember.description && (
                        <div className="bg-gradient-to-br from-violet-900/10 to-violet-800/5 rounded-xl p-6 backdrop-blur-sm border border-violet-500/20 shadow-inner shadow-violet-900/5 mb-6">
                          <p className="text-gray-200 leading-relaxed">{selectedMember.description}</p>
                        </div>
                      )}
                    </div>

                    {/* Social Media */}
                    {selectedMember.socialMedia && (
                      <div>
                        <h4 className="text-xl font-bold text-white mb-3 font-title flex items-center">
                          <span className="bg-violet-900/30 p-1.5 rounded-md mr-2 inline-flex">
                            <Share2 className="h-4 w-4 text-violet-300" />
                          </span>
                          Redes sociales
                        </h4>
                        <div className="flex space-x-4">
                          {selectedMember.socialMedia?.twitter && (
                            <a
                              href={selectedMember.socialMedia.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gray-800/70 p-3 rounded-full text-gray-400 hover:text-white hover:bg-violet-900/70 transition-colors border border-violet-500/20"
                            >
                              <Twitter className="h-5 w-5" />
                            </a>
                          )}

                          {selectedMember.socialMedia?.instagram && (
                            <a
                              href={selectedMember.socialMedia.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gray-800/70 p-3 rounded-full text-gray-400 hover:text-white hover:bg-violet-900/70 transition-colors border border-violet-500/20"
                            >
                              <Instagram className="h-5 w-5" />
                            </a>
                          )}

                          {selectedMember.socialMedia?.linkedin && (
                            <a
                              href={selectedMember.socialMedia.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gray-800/70 p-3 rounded-full text-gray-400 hover:text-white hover:bg-violet-900/70 transition-colors border border-violet-500/20"
                            >
                              <Linkedin className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <CTASection
        title="¿Quieres formar parte de nuestro equipo?"
        subtitle="Estamos siempre en búsqueda de nuevos talentos para unirse a Maycam Evolve"
        buttonText="Contáctanos"
        buttonLink="/contacto"
      />
    </main>
  )
}
