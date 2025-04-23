"use client"
import { motion } from "framer-motion"
import { Shield, Target, Users, ChevronRight, Eye, Star, Zap } from "lucide-react"
import { websiteData } from "@/app/lib/data-service"

export default function SobreNosotrosPage() {
  const aboutData = websiteData.about
  const values = aboutData.values || []
  const historyImage = "../maycam_logo/LOGOCosturas1.png"

  // Validación de imagen de fondo
  const backgroundImage =
    aboutData.backgroundImage && typeof aboutData.backgroundImage === "string" ? aboutData.backgroundImage : null

  return (
    <main className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 min-h-screen">
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

        {/* Elementos decorativos del fondo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.1),transparent_70%)]"></div>

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-violet-600/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-violet-500/30">
              <span className="text-violet-300 font-medium flex items-center text-sm">
                <Users className="h-4 w-4 mr-2" />
                Conocenos
              </span>
            </div>
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
      <section className="py-24 relative overflow-hidden">
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
                <div className="flex items-center mb-6">
                  <div className="h-px w-12 bg-violet-600 mr-4"></div>
                  <h2 className="text-3xl font-bold text-white font-title flex items-center">
                    <Shield className="h-7 w-7 text-violet-500 mr-3" />
                    Nuestra Historia
                  </h2>
                  <div className="h-px flex-grow bg-violet-600/30 ml-4"></div>
                </div>

                <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-2 border-violet-500/50 shadow-sm relative overflow-hidden mb-6">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/5 rounded-full blur-xl pointer-events-none"></div>

                  <p className="text-gray-300 font-text leading-relaxed relative z-10">
                    Maycam Evolve nació en 2018 con la visión de crear un equipo de esports que no solo compitiera al
                    más alto nivel, sino que también fomentara el desarrollo personal y profesional de sus jugadores.
                  </p>
                </div>

                <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-2 border-violet-500/50 shadow-sm relative overflow-hidden mb-6">
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-violet-600/5 rounded-full blur-xl pointer-events-none"></div>

                  <p className="text-gray-300 font-text leading-relaxed relative z-10">
                    Desde nuestros humildes comienzos, hemos crecido hasta convertirnos en uno de los equipos más
                    reconocidos en la escena competitiva, participando en torneos nacionales e internacionales en
                    múltiples disciplinas.
                  </p>
                </div>

                <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-xl border-l-2 border-violet-500/50 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/5 rounded-full blur-xl pointer-events-none"></div>

                  <p className="text-gray-300 font-text leading-relaxed relative z-10">
                    Nuestro compromiso con la excelencia y la innovación nos ha permitido construir una comunidad sólida
                    de seguidores y colaboradores que comparten nuestra pasión por los deportes electrónicos.
                  </p>
                </div>
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
                <div className="relative overflow-hidden rounded-xl border border-violet-500/30 shadow-lg shadow-violet-900/30">
                  <img
                    src={historyImage || "/placeholder.svg"}
                    alt="Historia de Maycam Evolve"
                    className="w-full h-auto"
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
      <section className="py-24 relative overflow-hidden">
        {/* Fondo mejorado con gradientes y elementos decorativos */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"></div>

        {/* Elementos decorativos del fondo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-violet-600/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-violet-500/30">
              <span className="text-violet-300 font-medium flex items-center text-sm">
                <Star className="h-4 w-4 mr-2" />
                Nuestros Principios
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6 font-title">Misión y Visión</h2>
            <div className="w-24 h-1 bg-violet-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              {/* Fondo con efecto de profundidad */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-violet-800/20 rounded-xl transform rotate-1 scale-[0.99] opacity-70 group-hover:rotate-2 group-hover:scale-[1.01] transition-transform duration-300"></div>

              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-950/95 p-8 rounded-xl shadow-lg shadow-violet-900/10 backdrop-blur-sm border border-violet-500/20 overflow-hidden group-hover:border-violet-500/40 transition-all duration-300 z-10">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-600/10 rounded-full blur-2xl pointer-events-none opacity-70"></div>

                <div className="flex items-center mb-6">
                  <div className="bg-violet-900/30 p-3 rounded-lg mr-4">
                    <Target className="h-8 w-8 text-violet-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-title">Misión</h3>
                </div>

                <p className="text-gray-300 relative z-10">
                  {aboutData.mission ||
                    "Nuestra misión es desarrollar jugadores de élite y equipos competitivos que representen con orgullo nuestra marca en torneos nacionales e internacionales, mientras fomentamos valores como el trabajo en equipo, la disciplina y el respeto."}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              {/* Fondo con efecto de profundidad */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-violet-800/20 rounded-xl transform -rotate-1 scale-[0.99] opacity-70 group-hover:-rotate-2 group-hover:scale-[1.01] transition-transform duration-300"></div>

              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-950/95 p-8 rounded-xl shadow-lg shadow-violet-900/10 backdrop-blur-sm border border-violet-500/20 overflow-hidden group-hover:border-violet-500/40 transition-all duration-300 z-10">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-violet-600/10 rounded-full blur-2xl pointer-events-none opacity-70"></div>

                <div className="flex items-center mb-6">
                  <div className="bg-violet-900/30 p-3 rounded-lg mr-4">
                    <Eye className="h-8 w-8 text-violet-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-title">Visión</h3>
                </div>

                <p className="text-gray-300 relative z-10">
                  {aboutData.vision ||
                    "Ser reconocidos como el equipo de esports líder, impulsando la profesionalización del sector y creando oportunidades para que los jugadores desarrollen carreras sostenibles, mientras construimos una comunidad global unida por la pasión por los deportes electrónicos."}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="py-24 relative overflow-hidden">
        {/* Fondo mejorado con gradientes y elementos decorativos */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950"></div>

        {/* Elementos decorativos del fondo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-violet-600/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-violet-500/30">
              <span className="text-violet-300 font-medium flex items-center text-sm">
                <Zap className="h-4 w-4 mr-2" />
                Lo que nos define
              </span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-6 font-title">Nuestros Valores</h2>
            <div className="w-24 h-1 bg-violet-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900/90 to-gray-950/95 p-8 rounded-xl shadow-lg shadow-violet-900/10 backdrop-blur-sm border border-violet-500/20 overflow-hidden group-hover:border-violet-500/40 transition-all duration-300 h-full flex flex-col items-center text-center relative">
                  {/* Elemento decorativo */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl pointer-events-none opacity-60"></div>

                  {/* ICONO EMOJI con fondo */}
                  <div className="text-4xl mb-6 bg-violet-900/30 p-4 rounded-xl transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon || "✨"}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 font-title">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900 to-indigo-900"></div>

        {/* Elementos decorativos */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>

        {/* Patrón de puntos sutil */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-title text-white">
              ¿Quieres formar parte de nuestro equipo?
            </h2>
            <p className="text-xl mb-8 font-text text-violet-100 max-w-2xl mx-auto">
              Estamos siempre en búsqueda de nuevos talentos para unirse a Maycam Evolve y ayudarnos a alcanzar nuevas
              metas.
            </p>

            <a
              href="/contacto"
              className="inline-flex items-center px-8 py-4 bg-white text-violet-900 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-white/20 group"
            >
              Contáctanos
              <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
