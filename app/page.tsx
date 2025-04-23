"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Users, ChevronRight, X, User, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"
import FadeIn from "./components/transitions/fade-in"
import SlideIn from "./components/transitions/slide-in"
import LoadingSpinner from "./components/loading-spinner"
import { websiteData } from "@/app/lib/data-service"
import ContactSection from "./components/contact-section"
import SponsorsBar from "./components/sponsors-bar"
import HeroSlider from "./components/hero-slider"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedStaffMember, setSelectedStaffMember] = useState<{
    id: string
    name: string
    role: string
    image?: string
    description?: string
    socialMedia?: {
      twitter?: string
      instagram?: string
      linkedin?: string
    }
  } | null>(null)

  useEffect(() => {
    // Simular tiempo de carga
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  if (isLoading) {
    return <LoadingSpinner message="Cargando..." />
  }

  return (
    <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <HeroSlider />

      <SponsorsBar />

      {/* 2. NOTICIAS SECTION */}
      <section className="py-20 relative overflow-hidden">
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

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <FadeIn>
            <div className="flex items-center mb-12">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent via-violet-600 to-transparent"></div>
              <h2 className="text-3xl font-bold text-white mx-4 font-title flex items-center">
                <Users className="h-6 w-6 mr-2 text-violet-500" />
                NOTICIAS
              </h2>
              <div className="h-px flex-grow bg-gradient-to-r from-transparent via-violet-600 to-transparent"></div>
            </div>
          </FadeIn>

          {/* 2_2. LINKEDIN SLIDER SECTION */}
          <script src="https://static.elfsight.com/platform/platform.js" async></script>
          <div className="elfsight-app-622032dd-25d1-4dfd-a3b8-b9efa4fb4faa" data-elfsight-app-lazy></div>
        </div>

        {/* 2_2. INSTAGRAM SLIDER SECTION */}
        <div className="flex justify-center mt-4 w-full max-w-[1800px] mx-auto relative z-10">
          <div className="w-full max-w-[1290px] mb-0">
            <script src="https://static.elfsight.com/platform/platform.js" async></script>
            <div className="elfsight-app-845495eb-d958-403d-8d17-87a5d7d70ade" data-elfsight-app-lazy></div>
          </div>
        </div>
      </section>

      {/* 3. SOBRE NOSOTROS SECTION */}
      <section className="py-20 relative overflow-hidden">
        {/* Fondo mejorado con gradientes y elementos decorativos */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-850 via-gray-900 to-gray-950"></div>

        {/* Elementos decorativos del fondo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>

        {/* Patrón de líneas sutil */}
        <div
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(124, 58, 237, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(124, 58, 237, 0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* Formas decorativas */}
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <FadeIn>
            <div className="flex items-center mb-12">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent via-violet-600 to-transparent"></div>
              <h2 className="text-3xl font-bold text-white mx-4 font-title">SOBRE NOSOTROS</h2>
              <div className="h-px flex-grow bg-gradient-to-r from-transparent via-violet-600 to-transparent"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
            <SlideIn direction="left">
              <div className="relative h-[400px] overflow-hidden rounded-xl border border-violet-500/20 shadow-lg shadow-violet-900/30 group transition-all duration-300 hover:shadow-violet-900/40">
                {/* Borde brillante sutil */}
                <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-br from-violet-400/20 via-violet-600/10 to-transparent pointer-events-none"></div>

                <img
                  src="/bg_photo/home_bg2.jpg"
                  alt="Equipo Maycam Evolve"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 font-title">
                    {websiteData?.teamInfo?.name || "Maycam Evolve"}
                  </h3>
                  <p className="text-violet-400 italic font-title">
                    "{websiteData?.teamInfo?.slogan || "Evoluciona. Compite. Conquista."}"
                  </p>
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right">
              <div className="space-y-6">
                <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-2 border-violet-500/50 shadow-sm relative overflow-hidden">
                  {/* Elementos decorativos sutiles */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/5 rounded-full blur-xl pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-violet-600/5 rounded-full blur-xl pointer-events-none"></div>

                  <p className="text-gray-200 text-lg leading-relaxed font-text relative z-10">
                    {websiteData?.teamInfo?.description ||
                      "Maycam Evolve es un equipo profesional de esports fundado con la misión de revolucionar la escena competitiva. Nuestro enfoque se centra en el desarrollo de talento y la creación de una comunidad apasionada por los deportes electrónicos."}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-2 border-violet-500/50 shadow-sm group hover:border-violet-400/70 transition-all duration-300 relative overflow-hidden">
                    {/* Elemento decorativo sutil */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-violet-600/5 rounded-full blur-xl pointer-events-none"></div>

                    <h4 className="text-white font-bold mb-3 font-title flex items-center relative z-10">
                      <span className="text-violet-400 mr-2">•</span>
                      MISIÓN
                    </h4>
                    <p className="text-gray-300 text-sm font-text relative z-10">
                      {websiteData?.teamInfo?.mission?.substring(0, 120) + "..." ||
                        "Desarrollar jugadores de élite y equipos competitivos que representen con orgullo nuestra marca en torneos nacionales e internacionales..."}
                    </p>
                  </div>

                  <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-2 border-violet-500/50 shadow-sm group hover:border-violet-400/70 transition-all duration-300 relative overflow-hidden">
                    {/* Elemento decorativo sutil */}
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-violet-600/5 rounded-full blur-xl pointer-events-none"></div>

                    <h4 className="text-white font-bold mb-3 font-title flex items-center relative z-10">
                      <span className="text-violet-400 mr-2">•</span>
                      VISIÓN
                    </h4>
                    <p className="text-gray-300 text-sm font-text relative z-10">
                      {websiteData?.teamInfo?.vision?.substring(0, 120) + "..." ||
                        "Ser reconocidos como el equipo de esports líder, impulsando la profesionalización del sector y creando oportunidades..."}
                    </p>
                  </div>
                </div>

                <Link
                  href="/sobre-nosotros"
                  className="inline-flex items-center text-violet-300 hover:text-violet-200 transition-colors font-medium font-title group mt-4"
                >
                  <span className="relative">
                    Conoce más sobre nosotros
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* 4. STAFF SECTION */}
      <section className="py-20 relative overflow-hidden">
        {/* Fondo mejorado con gradientes y elementos decorativos */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950"></div>

        {/* Elementos decorativos del fondo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>

        {/* Patrón de hexágonos sutil */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 20 L55 50 L30 65 L5 50 L5 20 Z' fill='none' stroke='white' strokeOpacity='0.2' strokeWidth='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* Formas decorativas */}
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <FadeIn>
            <div className="flex items-center mb-12">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent via-violet-600 to-transparent"></div>
              <h2 className="text-3xl font-bold text-white mx-4 font-title flex items-center">
                <Users className="h-6 w-6 mr-2 text-violet-500" />
                STAFF TÉCNICO
              </h2>
              <div className="h-px flex-grow bg-gradient-to-r from-transparent via-violet-600 to-transparent"></div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {websiteData?.staff?.staffMembers?.slice(0, 3).map((member, index) => (
              <SlideIn key={member.id} direction="up" delay={index * 0.1}>
                <motion.div
                  className="group cursor-pointer"
                  onClick={() => setSelectedStaffMember(member)}
                  whileHover={{ y: -10 }}
                >
                  {/* Tarjeta con diseño hexagonal */}
                  <div className="relative">
                    {/* Fondo con efecto de profundidad */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-violet-800/20 rounded-lg transform rotate-3 scale-[0.97] opacity-70 group-hover:rotate-6 group-hover:scale-[0.98] transition-transform duration-300"></div>

                    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden h-[320px] border border-violet-500/30 group-hover:border-violet-500/50 transition-all duration-300 shadow-lg shadow-violet-900/20 group-hover:shadow-violet-900/30 z-10">
                      {/* Imagen con overlay */}
                      <div className="absolute inset-0 z-0">
                        {member.image && (
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
              </SlideIn>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/staff"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-violet-600/10 to-violet-800/10 hover:from-violet-600/20 hover:to-violet-800/20 text-white font-medium rounded-lg border border-violet-600/50 shadow-lg hover:shadow-violet-600/30 transition-all duration-300 transform hover:-translate-y-1 font-title backdrop-blur-sm group"
            >
              Ver todo el staff
              <ChevronRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Modal de perfil de staff */}
      <AnimatePresence>
        {selectedStaffMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm"
            onClick={() => setSelectedStaffMember(null)}
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
                    setSelectedStaffMember(null)
                  }}
                  className="absolute top-4 right-4 bg-gray-800/70 p-2 rounded-full text-white hover:bg-violet-600 transition-colors z-20 backdrop-blur-sm border border-violet-500/20"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="md:flex">
                  {/* Left side - Image */}
                  <div className="md:w-2/5 relative h-80 md:h-auto">
                    <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-b from-black/70 to-transparent z-10"></div>
                    {selectedStaffMember.image && (
                      <img
                        src={selectedStaffMember.image || "/placeholder.svg"}
                        alt={selectedStaffMember.name}
                        className="w-full h-full object-cover"
                      />
                    )}

                    {/* Badge de rol en la imagen */}
                    <div className="absolute top-4 left-4 bg-violet-800/80 backdrop-blur-sm px-4 py-1 text-sm text-white rounded-full font-medium border border-violet-500/30 shadow-lg shadow-violet-900/20 flex items-center">
                      <User className="h-4 w-4 mr-2 text-violet-300" />
                      {selectedStaffMember.role}
                    </div>
                  </div>

                  {/* Right side - Info */}
                  <div className="md:w-3/5 p-8">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-white mb-2 font-title">{selectedStaffMember.name}</h3>
                      <p className="text-violet-400 text-lg mb-4">{selectedStaffMember.role}</p>
                      <div className="w-16 h-1 bg-violet-600 mb-6"></div>

                      {selectedStaffMember.description && (
                        <p className="text-gray-300 mb-6 font-text leading-relaxed">
                          {selectedStaffMember.description}
                        </p>
                      )}
                    </div>

                    {/* Social Media */}
                    {selectedStaffMember.socialMedia && (
                      <div className="mb-6">
                        <h4 className="text-xl font-bold text-white mb-3 font-title">Redes sociales</h4>
                        <div className="flex space-x-4">
                          {selectedStaffMember.socialMedia?.twitter && (
                            <a
                              href={selectedStaffMember.socialMedia.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-violet-900/70 transition-colors"
                            >
                              <Twitter className="h-5 w-5" />
                            </a>
                          )}

                          {selectedStaffMember.socialMedia?.instagram && (
                            <a
                              href={selectedStaffMember.socialMedia.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-violet-900/70 transition-colors"
                            >
                              <Instagram className="h-5 w-5" />
                            </a>
                          )}

                          {selectedStaffMember.socialMedia?.linkedin && (
                            <a
                              href={selectedStaffMember.socialMedia.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-violet-900/70 transition-colors"
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

      {/* 6. CONTACTO SECTION - Ahora al final antes del footer */}
      <ContactSection title={""} subtitle={""} buttonText={""} buttonLink={""} />
    </div>
  )
}
