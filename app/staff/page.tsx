"use client"

import { useState } from "react"
import { Users, Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react"
import { websiteData } from "@/app/lib/data-service"
import { HeroSection } from "@/app/components/ui/hero-section"
import { Card } from "@/components/ui/card"
import { Modal } from "@/app/components/ui/modal"
import CTASection from "../components/contact-section"
import { fadeIn, staggerContainer, useAnimationInView } from "@/hooks/useAnimation"
import { motion } from "framer-motion"

export default function StaffPage() {
  const staffData = websiteData.staff || {
    staffMembers: [],
    title: "Nuestro Staff",
    description: "El equipo detrás de los jugadores",
    socialMedia: {
      email: "",
      phone: "",
      twitter: "",
      instagram: "",
      linkedin: "",
    } as {
      email?: string;
      phone?: string;
      twitter?: string;
      instagram?: string;
      linkedin?: string;
    },
  }
  const staffMembers = staffData.staffMembers || []
  const [selectedMember, setSelectedMember] = useState<null | typeof staffMembers[0]>(null)
  const staffAnimation = useAnimationInView()

  return (
    <main className="min-h-screen bg-black">
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
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-900/10 rounded-full mix-blend-normal filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full mix-blend-normal filter blur-3xl"></div>
        </div>

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
                  className="relative bg-gradient-to-br from-gray-900 to-black border border-violet-900/30 rounded-xl overflow-hidden group hover:border-violet-500 transition-all duration-300 hover:shadow-lg hover:shadow-violet-900/20 cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                  whileHover={{ y: -10 }}
                >
                   {/* Role badge */}
                   <div className="absolute top-4 right-4 bg-violet-900/80 backdrop-blur-sm px-3 py-1 text-xs text-white rounded-full z-10 border border-violet-500/30">
                      {member.role}
                    </div>
                  {/* Image with overlay */}
                  <div className="relative h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70 z-10"></div>
                    {member.image && (
                      <img
                        src={member.image}
                        alt={member.name || "Staff Member"}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.style.display = "none"; // Oculta la imagen en caso de error
                        }}
                      />
                    )}
                    <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                      <h3 className="text-2xl font-bold text-white mb-2 font-title group-hover:text-violet-400 transition-colors">
                        {member.name}
                      </h3>
                      <div className="w-12 h-1 bg-violet-600 mb-3"></div>
                      <p className="text-gray-300 text-sm line-clamp-2 font-text">{member.description}</p>
                      <motion.div
                        className="mt-4 inline-flex items-center text-violet-400 text-sm font-medium"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        Ver perfil completo
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Staff Member Modal */}
      <Modal isOpen={!!selectedMember} onClose={() => setSelectedMember(null)}>
        {selectedMember && (
          <div>
            <div className="md:flex">
              {/* Left side - Image */}
              <div className="md:w-2/5 relative h-80 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-b from-black/70 to-transparent z-10"></div>
                <img
                  src={selectedMember.image || ""}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = ""
                  }}
                />
              </div>

              {/* Right side - Info */}
              <div className="md:w-3/5 p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-2 font-title">{selectedMember.name}</h3>
                  <p className="text-violet-400 text-lg mb-4">{selectedMember.role}</p>
                  <div className="w-16 h-1 bg-violet-600 mb-6"></div>

                  {selectedMember.description && (
                    <p className="text-gray-300 mb-6 font-text leading-relaxed">{selectedMember.description}</p>
                  )}
                </div>

                {/* Contact Info */}
                <div className="mb-6 space-y-4">
                  <h4 className="text-xl font-bold text-white mb-3 font-title">Información de contacto</h4>

                  {selectedMember.socialMedia?.email && (
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-violet-400 mr-3" />
                      <a
                        href={`mailto:${selectedMember.socialMedia.email}`}
                        className="text-gray-300 hover:text-violet-400 transition-colors"
                      >
                        {selectedMember.socialMedia.email}
                      </a>
                    </div>
                  )}

                  {selectedMember.socialMedia?.phone && (
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-violet-400 mr-3" />
                      <a
                        href={`tel:${selectedMember.socialMedia.phone}`}
                        className="text-gray-300 hover:text-violet-400 transition-colors"
                      >
                        {selectedMember.socialMedia.phone}
                      </a>
                    </div>
                  )}
                </div>

                {/* Social Media */}
                {selectedMember.socialMedia && (
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3 font-title">Redes sociales</h4>
                    <div className="flex space-x-4">
                      {selectedMember.socialMedia?.twitter && (
                        <a
                          href={selectedMember.socialMedia.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-violet-900/70 transition-colors"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}

                      {selectedMember.socialMedia?.instagram && (
                        <a
                          href={selectedMember.socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-violet-900/70 transition-colors"
                        >
                          <Instagram className="h-5 w-5" />
                        </a>
                      )}

                      {selectedMember.socialMedia?.linkedin && (
                        <a
                          href={selectedMember.socialMedia.linkedin}
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
        )}
      </Modal>

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

