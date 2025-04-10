"use client"
import { motion } from "framer-motion"
import { Shield, Target, Award, Users } from "lucide-react"
import { websiteData } from "@/app/lib/data-service"

export default function SobreNosotrosPage() {
  const aboutData = websiteData.about
  const values = aboutData.values || []
  const historyImage = "../maycam_logo/LOGOMaycamCostura.webp"

  // Validación de imagen de fondo
  const backgroundImage =
    aboutData.backgroundImage && typeof aboutData.backgroundImage === "string"
      ? aboutData.backgroundImage
      : null

  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section con Parallax */}
      <section className="relative h-[70vh] overflow-hidden">
        {backgroundImage && (
          <div className="absolute inset-0">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              className="w-full h-full"
            >
              <div
                className="w-full h-full bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
              </div>
            </motion.div>
          </div>
        )}

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-title">
              {aboutData.title || "Sobre Nosotros"}
            </h1>
            <div className="w-24 h-1 bg-violet-600 mb-6"></div>
            <p className="text-xl text-gray-200 font-text">
              {aboutData.description || "Conoce más sobre nuestro equipo"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6 font-title flex items-center">
                  <Shield className="h-7 w-7 text-violet-500 mr-3" />
                  Nuestra Historia
                </h2>
                <div className="w-20 h-1 bg-violet-600 mb-8"></div>
                <p className="text-gray-300 mb-6 font-text leading-relaxed">
                  Maycam Evolve nació en 2018 con la visión de crear un equipo de esports que no solo compitiera al más
                  alto nivel, sino que también fomentara el desarrollo personal y profesional de sus jugadores.
                </p>
                <p className="text-gray-300 mb-6 font-text leading-relaxed">
                  Desde nuestros humildes comienzos, hemos crecido hasta convertirnos en uno de los equipos más
                  reconocidos en la escena competitiva, participando en torneos nacionales e internacionales en múltiples disciplinas.
                </p>
                <p className="text-gray-300 font-text leading-relaxed">
                  Nuestro compromiso con la excelencia y la innovación nos ha permitido construir una comunidad sólida
                  de seguidores y colaboradores que comparten nuestra pasión por los deportes electrónicos.
                </p>
              </motion.div>
            </div>

            {historyImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-xl blur-xl opacity-70"></div>
                <div className="relative overflow-hidden rounded-xl border border-violet-500/30">
                  <img
                    src={historyImage}
                    alt="Historia de Maycam Evolve"
                    className="w-full h-full"
                    onError={(e) => e.currentTarget.remove()}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-violet-600/20 rounded-full blur-xl"></div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-title">Misión y Visión</h2>
          <div className="w-24 h-1 bg-violet-600 mx-auto mb-6"></div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div className="p-8 bg-gray-900 rounded-xl shadow-lg">
              <Target className="h-10 w-10 text-violet-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-3 font-title">Misión</h3>
              <p className="text-gray-300">{aboutData.mission || "Nuestra misión es..."}</p>
            </motion.div>

            <motion.div className="p-8 bg-gray-900 rounded-xl shadow-lg">
              <Award className="h-10 w-10 text-violet-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-3 font-title">Visión</h3>
              <p className="text-gray-300">{aboutData.vision || "Nuestra visión es..."}</p>
            </motion.div>
          </div>
        </div>
      </section>

            {/* Nuestros Valores */}
            <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-title">Nuestros Valores</h2>
          <div className="w-24 h-1 bg-violet-600 mx-auto mb-6"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-gray-900 rounded-xl shadow-lg"
              >
                {/* ICONO EMOJI */}
                <div className="text-4xl mb-4">{value.icon || "✨"}</div>

                <h3 className="text-xl font-bold text-white mb-3 font-title">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-900 to-indigo-900 text-center text-white">
        <h2 className="text-3xl font-bold mb-4 font-title">¿Quieres formar parte de nuestro equipo?</h2>
        <p className="text-xl mb-8 font-text">Estamos siempre en búsqueda de nuevos talentos para unirse a Maycam Evolve.</p>
        <a href="/contacto" className="px-8 py-4 bg-white text-violet-900 font-bold rounded-md hover:bg-gray-100 transition">
          Contáctanos
        </a>
      </section>
    </main>
  )
}
