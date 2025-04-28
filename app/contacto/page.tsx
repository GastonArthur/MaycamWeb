"use client"
import type * as React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Twitch,
  Youtube,
  Send,
  CheckCircle,
  MessageSquare,
  Users,
  Clock,
} from "lucide-react"
import { websiteData } from "@/app/lib/data-service"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/send-email", {
        // Asegúrate de que la URL sea la correcta
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setError(result.error || "Hubo un error al enviar el formulario.")
      }
    } catch (err) {
      setError("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSubmitted(false)
  }

  const contactInfo = websiteData.contact || {
    email: "marketing@maycamevolve.com",
    phone: "+54 9 1159975193",
    address: "Buenos Aires, Argentina   ",
    socialMedia: {
      instagram: "https://instagram.com/maycamevolve",
      twitter: "https://twitter.com/maycamevolve",
      twitch: "https://twitch.tv/maycamevolve",
      youtube: "https://youtube.com/maycamevolve",
    },
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Fondo mejorado con gradientes más dinámicos */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-violet-950/20 to-gray-950"></div>

        {/* Elementos decorativos del fondo mejorados */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.3),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(124,58,237,0.2),transparent_70%)]"></div>

        {/* Líneas brillantes */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"></div>

        {/* Formas decorativas mejoradas */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>

        {/* Patrón de líneas sutil */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-violet-600/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-violet-500/40 shadow-lg shadow-violet-900/20">
              <MessageSquare className="h-4 w-4 text-violet-300 mr-2" />
              <span className="text-sm text-violet-200 font-medium">Estamos para ayudarte</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-title">Contacto</h1>
            <div className="w-24 h-1 bg-violet-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 font-text">
              Estamos aquí para responder a tus preguntas y escuchar tus propuestas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative overflow-hidden">
        {/* Fondo mejorado con gradientes más dinámicos */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-violet-950/10 to-gray-950"></div>

        {/* Elementos decorativos del fondo mejorados */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)]"></div>

        {/* Líneas brillantes */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"></div>

        {/* Formas decorativas mejoradas */}
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px]"></div>

        {/* Patrón de hexágonos sutil */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 20 L55 50 L30 65 L5 50 L5 20 Z' fill='none' stroke='white' strokeOpacity='0.2' strokeWidth='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Sidebar - Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Contact Card - Diseño mejorado */}
                <div className="relative group">
                  {/* Efecto de profundidad */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-violet-800/20 rounded-2xl transform rotate-1 scale-[0.99] opacity-70 group-hover:rotate-2 group-hover:scale-[1.01] transition-transform duration-300"></div>

                  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-950/95 rounded-2xl overflow-hidden shadow-[0_10px_50px_-12px_rgba(139,92,246,0.4)] backdrop-blur-sm border border-violet-500/20 group-hover:border-violet-500/40 transition-all duration-500 z-10">
                    {/* Brillo superior */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>

                    {/* Brillo lateral */}
                    <div className="absolute bottom-0 top-0 left-0 w-px bg-gradient-to-b from-transparent via-violet-500/50 to-transparent"></div>

                    {/* Elementos decorativos */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-violet-600/20 rounded-full blur-[50px] opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600/20 rounded-full blur-[50px] opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="p-6 border-b border-violet-500/20 relative z-10">
                      <h2 className="text-2xl font-bold text-white font-title">Información de contacto</h2>
                    </div>
                    <div className="p-6 space-y-6 relative z-10">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-violet-600/30 to-violet-800/30 flex items-center justify-center mr-4 border border-violet-500/30 shadow-lg shadow-violet-900/20 group-hover:shadow-violet-900/40 transition-all duration-300">
                          <Mail className="h-5 w-5 text-violet-300" />
                        </div>
                        <div>
                          <p className="text-sm text-violet-300 mb-1">Email</p>
                          <a
                            href={`mailto:${contactInfo.email}`}
                            className="text-white hover:text-violet-400 transition-colors"
                          >
                            {contactInfo.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-violet-600/30 to-violet-800/30 flex items-center justify-center mr-4 border border-violet-500/30 shadow-lg shadow-violet-900/20 group-hover:shadow-violet-900/40 transition-all duration-300">
                          <Phone className="h-5 w-5 text-violet-300" />
                        </div>
                        <div>
                          <p className="text-sm text-violet-300 mb-1">Teléfono</p>
                          <a
                            href={`tel:${contactInfo.phone}`}
                            className="text-white hover:text-violet-400 transition-colors"
                          >
                            {contactInfo.phone || "+54 9 1159975193"}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-violet-600/30 to-violet-800/30 flex items-center justify-center mr-4 border border-violet-500/30 shadow-lg shadow-violet-900/20 group-hover:shadow-violet-900/40 transition-all duration-300">
                          <MapPin className="h-5 w-5 text-violet-300" />
                        </div>
                        <div>
                          <p className="text-sm text-violet-300 mb-1">Ubicación</p>
                          <p className="text-white">{contactInfo.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media Card - Diseño mejorado */}
                <div className="relative group">
                  {/* Efecto de profundidad */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-violet-800/20 rounded-2xl transform -rotate-1 scale-[0.99] opacity-70 group-hover:-rotate-2 group-hover:scale-[1.01] transition-transform duration-300"></div>

                  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-950/95 rounded-2xl overflow-hidden shadow-[0_10px_50px_-12px_rgba(139,92,246,0.4)] backdrop-blur-sm border border-violet-500/20 group-hover:border-violet-500/40 transition-all duration-500 z-10">
                    {/* Brillo superior */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>

                    {/* Brillo lateral */}
                    <div className="absolute bottom-0 top-0 right-0 w-px bg-gradient-to-b from-transparent via-violet-500/50 to-transparent"></div>

                    {/* Elementos decorativos */}
                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-violet-600/20 rounded-full blur-[50px] opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-600/20 rounded-full blur-[50px] opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="p-6 border-b border-violet-500/20 relative z-10">
                      <h2 className="text-2xl font-bold text-white font-title">Redes sociales</h2>
                    </div>
                    <div className="p-6 relative z-10">
                      <div className="grid grid-cols-2 gap-4">
                        {contactInfo.socialMedia?.instagram && (
                          <a
                            href={contactInfo.socialMedia.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-3 bg-gradient-to-br from-violet-900/30 to-violet-800/20 rounded-xl hover:from-violet-800/40 hover:to-violet-700/30 transition-all duration-300 group border border-violet-500/30 shadow-lg shadow-violet-900/10 hover:shadow-violet-900/20"
                          >
                            <Instagram className="h-5 w-5 text-violet-300 mr-3 group-hover:text-white transition-colors" />
                            <span className="text-gray-300 group-hover:text-white transition-colors">Instagram</span>
                          </a>
                        )}

                        {contactInfo.socialMedia?.twitter && (
                          <a
                            href={contactInfo.socialMedia.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-3 bg-gradient-to-br from-violet-900/30 to-violet-800/20 rounded-xl hover:from-violet-800/40 hover:to-violet-700/30 transition-all duration-300 group border border-violet-500/30 shadow-lg shadow-violet-900/10 hover:shadow-violet-900/20"
                          >
                            <Twitter className="h-5 w-5 text-violet-300 mr-3 group-hover:text-white transition-colors" />
                            <span className="text-gray-300 group-hover:text-white transition-colors">Twitter</span>
                          </a>
                        )}

                        {contactInfo.socialMedia?.twitch && (
                          <a
                            href={contactInfo.socialMedia.twitch}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-3 bg-gradient-to-br from-violet-900/30 to-violet-800/20 rounded-xl hover:from-violet-800/40 hover:to-violet-700/30 transition-all duration-300 group border border-violet-500/30 shadow-lg shadow-violet-900/10 hover:shadow-violet-900/20"
                          >
                            <Twitch className="h-5 w-5 text-violet-300 mr-3 group-hover:text-white transition-colors" />
                            <span className="text-gray-300 group-hover:text-white transition-colors">Twitch</span>
                          </a>
                        )}

                        {contactInfo.socialMedia?.youtube && (
                          <a
                            href={contactInfo.socialMedia.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-3 bg-gradient-to-br from-violet-900/30 to-violet-800/20 rounded-xl hover:from-violet-800/40 hover:to-violet-700/30 transition-all duration-300 group border border-violet-500/30 shadow-lg shadow-violet-900/10 hover:shadow-violet-900/20"
                          >
                            <Youtube className="h-5 w-5 text-violet-300 mr-3 group-hover:text-white transition-colors" />
                            <span className="text-gray-300 group-hover:text-white transition-colors">YouTube</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours Card - Diseño mejorado */}
                <div className="relative group">
                  {/* Efecto de profundidad */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-violet-800/20 rounded-2xl transform rotate-1 scale-[0.99] opacity-70 group-hover:rotate-2 group-hover:scale-[1.01] transition-transform duration-300"></div>

                  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-950/95 rounded-2xl overflow-hidden shadow-[0_10px_50px_-12px_rgba(139,92,246,0.4)] backdrop-blur-sm border border-violet-500/20 group-hover:border-violet-500/40 transition-all duration-500 z-10">
                    {/* Brillo superior */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>

                    {/* Brillo lateral */}
                    <div className="absolute bottom-0 top-0 left-0 w-px bg-gradient-to-b from-transparent via-violet-500/50 to-transparent"></div>

                    {/* Elementos decorativos */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-violet-600/20 rounded-full blur-[50px] opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600/20 rounded-full blur-[50px] opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="p-6 border-b border-violet-500/20 relative z-10">
                      <h2 className="text-2xl font-bold text-white font-title">Horario de atención</h2>
                    </div>
                    <div className="p-6 space-y-4 relative z-10">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-violet-600/30 to-violet-800/30 flex items-center justify-center mr-4 border border-violet-500/30 shadow-lg shadow-violet-900/20 group-hover:shadow-violet-900/40 transition-all duration-300">
                          <Clock className="h-5 w-5 text-violet-300" />
                        </div>
                        <div>
                          <p className="text-white">Lunes a Viernes</p>
                          <p className="text-violet-300">9:00 - 18:00</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-violet-600/30 to-violet-800/30 flex items-center justify-center mr-4 border border-violet-500/30 shadow-lg shadow-violet-900/20 group-hover:shadow-violet-900/40 transition-all duration-300">
                          <Clock className="h-5 w-5 text-violet-300" />
                        </div>
                        <div>
                          <p className="text-white">Sábado</p>
                          <p className="text-violet-300">10:00 - 14:00</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-violet-600/30 to-violet-800/30 flex items-center justify-center mr-4 border border-violet-500/30 shadow-lg shadow-violet-900/20 group-hover:shadow-violet-900/40 transition-all duration-300">
                          <Clock className="h-5 w-5 text-violet-300" />
                        </div>
                        <div>
                          <p className="text-white">Domingo</p>
                          <p className="text-violet-300">Cerrado</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Contact Form and FAQ */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative group mb-12"
                id="contact-form"
              >
                {/* Efecto de profundidad */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-violet-800/20 rounded-2xl transform -rotate-1 scale-[0.99] opacity-70 group-hover:-rotate-2 group-hover:scale-[1.01] transition-transform duration-300"></div>

                <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-950/95 rounded-2xl overflow-hidden shadow-[0_10px_50px_-12px_rgba(139,92,246,0.4)] backdrop-blur-sm border border-violet-500/20 group-hover:border-violet-500/40 transition-all duration-500 z-10">
                  {/* Brillo superior */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>

                  {/* Brillo lateral */}
                  <div className="absolute bottom-0 top-0 right-0 w-px bg-gradient-to-b from-transparent via-violet-500/50 to-transparent"></div>

                  {/* Elementos decorativos */}
                  <div className="absolute -top-24 -left-24 w-64 h-64 bg-violet-600/20 rounded-full blur-[50px] opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-600/20 rounded-full blur-[50px] opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="p-6 border-b border-violet-500/20 relative z-10">
                    <h2 className="text-2xl font-bold text-white font-title flex items-center">
                      <MessageSquare className="h-6 w-6 mr-3 text-violet-400" />
                      Envíanos un mensaje
                    </h2>
                  </div>
                  <div className="p-6 relative z-10">
                    {isSubmitted ? (
                      <motion.div
                        className="text-center py-12"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-violet-600/30 to-violet-800/30 mb-4 border border-violet-500/30 shadow-lg shadow-violet-900/20">
                          <CheckCircle className="h-10 w-10 text-violet-300" />
                        </div>
                        <h4 className="text-2xl font-medium text-white mb-2">¡Mensaje enviado!</h4>
                        <p className="text-gray-300 mb-6">
                          Gracias por contactarnos. Te responderemos lo antes posible.
                        </p>
                        <button
                          onClick={resetForm}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-violet-800 hover:from-violet-700 hover:to-violet-900 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-violet-900/30 transform hover:-translate-y-1"
                        >
                          Enviar otro mensaje
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-violet-300 mb-2">
                              Nombre
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-gray-800/50 border border-violet-500/30 focus:border-violet-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-colors"
                              placeholder="Tu nombre"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-violet-300 mb-2">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formState.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-gray-800/50 border border-violet-500/30 focus:border-violet-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-colors"
                              placeholder="tu@email.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-violet-300 mb-2">
                            Asunto
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-gray-800/50 border border-violet-500/30 focus:border-violet-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-colors"
                            placeholder="Asunto del mensaje"
                          />
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-violet-300 mb-2">
                            Mensaje
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 bg-gray-800/50 border border-violet-500/30 focus:border-violet-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-colors resize-none"
                            placeholder="Escribe tu mensaje aquí..."
                          ></textarea>
                        </div>

                        {error && <div className="text-red-500 text-sm">{error}</div>}

                        <div>
                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-violet-600 to-violet-800 hover:from-violet-700 hover:to-violet-900 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-violet-900/30 disabled:opacity-70 transform hover:-translate-y-1 border border-violet-500/50"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {isSubmitting ? (
                              <span className="inline-flex items-center">
                                <svg
                                  className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Enviando...
                              </span>
                            ) : (
                              <span className="inline-flex items-center">
                                Enviar mensaje <Send className="ml-2 h-5 w-5" />
                              </span>
                            )}
                          </motion.button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* FAQ Section - Diseño mejorado */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                {/* Efecto de profundidad */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-violet-800/20 rounded-2xl transform rotate-1 scale-[0.99] opacity-70 group-hover:rotate-2 group-hover:scale-[1.01] transition-transform duration-300"></div>

                <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-950/95 rounded-2xl overflow-hidden shadow-[0_10px_50px_-12px_rgba(139,92,246,0.4)] backdrop-blur-sm border border-violet-500/20 group-hover:border-violet-500/40 transition-all duration-500 z-10">
                  {/* Brillo superior */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>

                  {/* Brillo lateral */}
                  <div className="absolute bottom-0 top-0 left-0 w-px bg-gradient-to-b from-transparent via-violet-500/50 to-transparent"></div>

                  {/* Elementos decorativos */}
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-violet-600/20 rounded-full blur-[50px] opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600/20 rounded-full blur-[50px] opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="p-6 border-b border-violet-500/20 relative z-10">
                    <h2 className="text-2xl font-bold text-white font-title flex items-center">
                      <Users className="h-6 w-6 mr-3 text-violet-400" />
                      Preguntas frecuentes
                    </h2>
                  </div>
                  <div className="p-6 relative z-10">
                    <div className="space-y-6">
                      <div className="border-b border-violet-500/20 pb-4">
                        <h3 className="text-lg font-medium text-white mb-2">¿Cómo puedo unirme al equipo?</h3>
                        <p className="text-gray-300">
                          Para unirte a nuestro equipo, debes participar en nuestras pruebas de selección. Mantente
                          atento a nuestras redes sociales donde anunciamos las convocatorias.
                        </p>
                      </div>

                      <div className="border-b border-violet-500/20 pb-4">
                        <h3 className="text-lg font-medium text-white mb-2">¿Ofrecen patrocinios para streamers?</h3>
                        <p className="text-gray-300">
                          Sí, contamos con un programa de patrocinio para streamers. Envíanos tu propuesta a través del
                          formulario de contacto y nuestro equipo la evaluará.
                        </p>
                      </div>

                      <div className="border-b border-violet-500/20 pb-4">
                        <h3 className="text-lg font-medium text-white mb-2">
                          ¿Dónde puedo comprar merchandising del equipo?
                        </h3>
                        <p className="text-gray-300">
                          Puedes adquirir nuestro merchandising oficial en nuestra tienda online. Próximamente estará
                          disponible en nuestra web.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-white mb-2">¿Realizan eventos presenciales?</h3>
                        <p className="text-gray-300">
                          Sí, organizamos y participamos en diversos eventos presenciales a lo largo del año. Mantente
                          informado a través de nuestras redes sociales.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900 via-violet-800 to-indigo-900"></div>

        {/* Elementos decorativos mejorados */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/30 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[100px]"></div>

        {/* Patrón de puntos sutil */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Líneas brillantes */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-title">
              ¿Listo para formar parte de nuestra comunidad?
            </h2>
            <div className="w-24 h-1 bg-white/50 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 mb-8 font-text">
              Únete a Maycam Evolve y sé parte de nuestra historia en los esports
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#contact-form"
                className="inline-flex items-center px-8 py-4 bg-white text-violet-900 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-white/20 group"
              >
                Contáctanos ahora
                <Send className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
