"use client"

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

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
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
    email: "info@maycamevolve.com",
    phone: "+54 9 11 5997 5193",
    address: "Buenos Aires, Argentina",
    socialMedia: {
      instagram: "https://instagram.com/maycamevolve",
      twitter: "https://twitter.com/maycamevolve",
      twitch: "https://twitch.tv/maycamevolve",
      youtube: "https://youtube.com/maycamevolve",
    },
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-violet-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 -left-10 w-72 h-72 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-10 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-title drop-shadow-lg">Contacto</h1>
            <p className="text-xl text-gray-200 font-text">
              Estamos aquí para responder a tus preguntas y escuchar tus propuestas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Sidebar - Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Contact Card */}
                <div className="bg-gradient-to-br from-violet-900/20 to-indigo-900/20 rounded-xl overflow-hidden">
                  <div className="p-6 border-b border-gray-800">
                    <h2 className="text-2xl font-bold text-white font-title">Información de contacto</h2>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-violet-900/20 flex items-center justify-center mr-4">
                        <Mail className="h-5 w-5 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Email</p>
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="text-white hover:text-violet-400 transition-colors animated-underline"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-violet-900/20 flex items-center justify-center mr-4">
                        <Phone className="h-5 w-5 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Teléfono</p>
                        <a
                          href={`tel:${contactInfo.phone}`}
                          className="text-white hover:text-violet-400 transition-colors animated-underline"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-violet-900/20 flex items-center justify-center mr-4">
                        <MapPin className="h-5 w-5 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Ubicación</p>
                        <p className="text-white">{contactInfo.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media Card */}
                <div className="bg-gradient-to-br from-violet-900/20 to-indigo-900/20 rounded-xl overflow-hidden">
                  <div className="p-6 border-b border-gray-800">
                    <h2 className="text-2xl font-bold text-white font-title">Redes sociales</h2>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {contactInfo.socialMedia?.instagram && (
                        <a
                          href={contactInfo.socialMedia.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-3 bg-gray-800/50 rounded-lg hover:bg-violet-900/30 transition-colors group"
                        >
                          <Instagram className="h-5 w-5 text-violet-400 mr-3 group-hover:text-white transition-colors" />
                          <span className="text-gray-300 group-hover:text-white transition-colors">Instagram</span>
                        </a>
                      )}

                      {contactInfo.socialMedia?.twitter && (
                        <a
                          href={contactInfo.socialMedia.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-3 bg-gray-800/50 rounded-lg hover:bg-violet-900/30 transition-colors group"
                        >
                          <Twitter className="h-5 w-5 text-violet-400 mr-3 group-hover:text-white transition-colors" />
                          <span className="text-gray-300 group-hover:text-white transition-colors">Twitter</span>
                        </a>
                      )}

                      {contactInfo.socialMedia?.twitch && (
                        <a
                          href={contactInfo.socialMedia.twitch}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-3 bg-gray-800/50 rounded-lg hover:bg-violet-900/30 transition-colors group"
                        >
                          <Twitch className="h-5 w-5 text-violet-400 mr-3 group-hover:text-white transition-colors" />
                          <span className="text-gray-300 group-hover:text-white transition-colors">Twitch</span>
                        </a>
                      )}

                      {contactInfo.socialMedia?.youtube && (
                        <a
                          href={contactInfo.socialMedia.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-3 bg-gray-800/50 rounded-lg hover:bg-violet-900/30 transition-colors group"
                        >
                          <Youtube className="h-5 w-5 text-violet-400 mr-3 group-hover:text-white transition-colors" />
                          <span className="text-gray-300 group-hover:text-white transition-colors">YouTube</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Business Hours Card */}
                <div className="bg-gradient-to-br from-violet-900/20 to-indigo-900/20 rounded-xl overflow-hidden">
                  <div className="p-6 border-b border-gray-800">
                    <h2 className="text-2xl font-bold text-white font-title">Horario de atención</h2>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-violet-400 mr-3" />
                      <div>
                        <p className="text-white">Lunes a Viernes</p>
                        <p className="text-gray-400">9:00 - 18:00</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-violet-400 mr-3" />
                      <div>
                        <p className="text-white">Sábado</p>
                        <p className="text-gray-400">10:00 - 14:00</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-violet-400 mr-3" />
                      <div>
                        <p className="text-white">Domingo</p>
                        <p className="text-gray-400">Cerrado</p>
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
                className="bg-gradient-to-br from-violet-900/20 to-indigo-900/20 rounded-xl overflow-hidden mb-12"
              >
                <div className="p-6 border-b border-gray-800">
                  <h2 className="text-2xl font-bold text-white font-title flex items-center">
                    <MessageSquare className="h-6 w-6 mr-3 text-violet-400" />
                    Envíanos un mensaje
                  </h2>
                </div>
                <div className="p-6">
                  {isSubmitted ? (
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-violet-900/20 mb-4">
                        <CheckCircle className="h-10 w-10 text-violet-400" />
                      </div>
                      <h4 className="text-2xl font-medium text-white mb-2">¡Mensaje enviado!</h4>
                      <p className="text-gray-400 mb-6">Gracias por contactarnos. Te responderemos lo antes posible.</p>
                      <button
                        onClick={resetForm}
                        className="inline-flex items-center px-6 py-3 bg-violet-700 hover:bg-violet-800 text-white rounded-md transition-colors"
                      >
                        Enviar otro mensaje
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Nombre
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 focus:border-violet-500 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-colors"
                            placeholder="Tu nombre"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 focus:border-violet-500 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-colors"
                            placeholder="tu@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                          Asunto
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 focus:border-violet-500 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-colors"
                          placeholder="Asunto del mensaje"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          Mensaje
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 focus:border-violet-500 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-colors resize-none"
                          placeholder="Escribe tu mensaje aquí..."
                        ></textarea>
                      </div>

                      {error && <div className="text-red-500 text-sm">{error}</div>}

                      <div>
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-violet-600 to-violet-800 hover:from-violet-700 hover:to-violet-900 text-white font-medium rounded-md transition-all duration-300 shadow-lg shadow-violet-900/30 disabled:opacity-70"
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
              </motion.div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-violet-900/20 to-indigo-900/20 rounded-xl overflow-hidden"
              >
                <div className="p-6 border-b border-gray-800">
                  <h2 className="text-2xl font-bold text-white font-title flex items-center">
                    <Users className="h-6 w-6 mr-3 text-violet-400" />
                    Preguntas frecuentes
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="border-b border-gray-800 pb-4">
                      <h3 className="text-lg font-medium text-white mb-2">¿Cómo puedo unirme al equipo?</h3>
                      <p className="text-gray-400">
                        Para unirte a nuestro equipo, debes participar en nuestras pruebas de selección. Mantente atento
                        a nuestras redes sociales donde anunciamos las convocatorias.
                      </p>
                    </div>

                    <div className="border-b border-gray-800 pb-4">
                      <h3 className="text-lg font-medium text-white mb-2">¿Ofrecen patrocinios para streamers?</h3>
                      <p className="text-gray-400">
                        Sí, contamos con un programa de patrocinio para streamers. Envíanos tu propuesta a través del
                        formulario de contacto y nuestro equipo la evaluará.
                      </p>
                    </div>

                    <div className="border-b border-gray-800 pb-4">
                      <h3 className="text-lg font-medium text-white mb-2">
                        ¿Dónde puedo comprar merchandising del equipo?
                      </h3>
                      <p className="text-gray-400">
                        Puedes adquirir nuestro merchandising oficial en nuestra tienda online. Próximamente estará
                        disponible en nuestra web.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">¿Realizan eventos presenciales?</h3>
                      <p className="text-gray-400">
                        Sí, organizamos y participamos en diversos eventos presenciales a lo largo del año. Mantente
                        informado a través de nuestras redes sociales.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

