"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Instagram, Twitter, Twitch, Youtube, Send, CheckCircle } from "lucide-react"
import { websiteData } from "@/app/lib/data-service"

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

export default function CTASection({ title, subtitle, buttonText, buttonLink }: CTASectionProps) {
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

  const tInfo = websiteData.contact || {
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
    <section id="contacto" className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-900/20 rounded-full mix-blend-normal filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900/20 rounded-full mix-blend-normal filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4 font-title">CONTACTO</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-violet-700 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto font-text">
            ¿Tienes alguna pregunta o propuesta? No dudes en ponerte en to con nosotros
          </p>
        </motion.div>

        {/* DISEÑO COMPLETAMENTE NUEVO */}
        <div className="max-w-5xl mx-auto">
          {/* Social Media Bar - TOP */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="flex flex-wrap gap-6 justify-center">
              {tInfo.socialMedia?.instagram && (
                <motion.a
                  href={tInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-800 p-0.5">
                    <div className="h-full w-full rounded-2xl bg-gray-900 flex items-center justify-center group-hover:bg-transparent transition-all duration-300">
                      <Instagram className="h-7 w-7 text-violet-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <p className="text-center text-xs text-gray-400 mt-2">Instagram</p>
                </motion.a>
              )}

              {tInfo.socialMedia?.twitter && (
                <motion.a
                  href={tInfo.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-800 p-0.5">
                    <div className="h-full w-full rounded-2xl bg-gray-900 flex items-center justify-center group-hover:bg-transparent transition-all duration-300">
                      <Twitter className="h-7 w-7 text-violet-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <p className="text-center text-xs text-gray-400 mt-2">Twitter</p>
                </motion.a>
              )}

              {tInfo.socialMedia?.twitch && (
                <motion.a
                  href={tInfo.socialMedia.twitch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-800 p-0.5">
                    <div className="h-full w-full rounded-2xl bg-gray-900 flex items-center justify-center group-hover:bg-transparent transition-all duration-300">
                      <Twitch className="h-7 w-7 text-violet-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <p className="text-center text-xs text-gray-400 mt-2">Twitch</p>
                </motion.a>
              )}

              {tInfo.socialMedia?.youtube && (
                <motion.a
                  href={tInfo.socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-800 p-0.5">
                    <div className="h-full w-full rounded-2xl bg-gray-900 flex items-center justify-center group-hover:bg-transparent transition-all duration-300">
                      <Youtube className="h-7 w-7 text-violet-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <p className="text-center text-xs text-gray-400 mt-2">YouTube</p>
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* t Info Cards - MIDDLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-gradient-to-br from-violet-600/20 to-purple-800/20 backdrop-blur-sm p-0.5 rounded-xl">
              <div className="bg-gray-900/80 rounded-xl p-6 h-full flex flex-col items-center justify-center text-center">
                <div className="h-16 w-16 rounded-full bg-violet-900/30 flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-title">Email</h3>
                <a
                  href={`mailto:${tInfo.email}`}
                  className="text-violet-400 hover:text-violet-300 transition-colors"
                >
                  {tInfo.email}
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-violet-600/20 to-purple-800/20 backdrop-blur-sm p-0.5 rounded-xl">
              <div className="bg-gray-900/80 rounded-xl p-6 h-full flex flex-col items-center justify-center text-center">
                <div className="h-16 w-16 rounded-full bg-violet-900/30 flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-title">Teléfono</h3>
                <a
                  href={`tel:${tInfo.phone}`}
                  className="text-violet-400 hover:text-violet-300 transition-colors"
                >
                  {tInfo.phone}
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-violet-600/20 to-purple-800/20 backdrop-blur-sm p-0.5 rounded-xl">
              <div className="bg-gray-900/80 rounded-xl p-6 h-full flex flex-col items-center justify-center text-center">
                <div className="h-16 w-16 rounded-full bg-violet-900/30 flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-title">Ubicación</h3>
                <p className="text-violet-400">{tInfo.address}</p>
              </div>
            </div>
          </motion.div>

          {/* t Form - BOTTOM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-violet-600/20 to-purple-800/20 backdrop-blur-sm p-0.5 rounded-xl overflow-hidden"
          >
            <div className="bg-gray-900/80 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center font-title">Envíanos un mensaje</h3>

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
                  <p className="text-gray-400 mb-6">Gracias por tarnos. Te responderemos lo antes posible.</p>
                  <button
                    onClick={resetForm}
                    className="inline-flex items-center px-6 py-3 bg-violet-700 hover:bg-violet-800 text-white rounded-md transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                        className="w-full px-4 py-3 bg-gray-800/50 border border-violet-900/30 focus:border-violet-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-colors"
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
                        className="w-full px-4 py-3 bg-gray-800/50 border border-violet-900/30 focus:border-violet-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
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
                      className="w-full px-4 py-3 bg-gray-800/50 border border-violet-900/30 focus:border-violet-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-colors"
                      placeholder="Asunto del mensaje"
                    />
                  </div>

                  <div className="mb-6">
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
                      className="w-full px-4 py-3 bg-gray-800/50 border border-violet-900/30 focus:border-violet-500 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-colors resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>

                  {error && <div className="text-red-500 text-sm mb-6">{error}</div>}

                  <div className="text-center">
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-violet-600 to-violet-800 hover:from-violet-700 hover:to-violet-900 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-violet-900/30 disabled:opacity-70"
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
        </div>
      </div>
    </section>
  )
}

