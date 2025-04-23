"use client"

import { useState, useEffect, useRef } from "react"
import { websiteData } from "@/app/lib/data-service"
import { motion, AnimatePresence } from "framer-motion"
import { Instagram, Twitch, Twitter, ChevronRight, Users, Trophy, Target, Gamepad2 } from "lucide-react"
import Link from "next/link"

export default function PlayersPage() {
  const { players, games } = websiteData.players
  const [selectedGame, setSelectedGame] = useState<string>("all")
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredPlayer, setHoveredPlayer] = useState<string | null>(null)

  // Referencia para el efecto de parallax
  const heroRef = useRef<HTMLDivElement>(null)

  // Set loaded state after a short delay for animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  // Efecto de parallax en el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        heroRef.current.style.transform = `translateY(${scrollY * 0.5}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Filter players based on selected game
  const filteredPlayers = selectedGame === "all" ? players : players.filter((player) => player.gameId === selectedGame)

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <div
            ref={heroRef}
            className="w-full h-[120%] bg-cover bg-center"
            style={{
              backgroundImage: "url(/bg_photo/jugadores.jpg)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
          </div>
        </div>

        {/* Elementos decorativos del fondo */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.1),transparent_70%)]"></div>

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center bg-violet-600/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-violet-500/30"
            >
              <Gamepad2 className="h-4 w-4 text-violet-400 mr-2" />
              <span className="text-sm text-violet-300 font-medium">Nuestro Roster</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-title">Nuestros Jugadores</h1>
            <div className="w-24 h-1 bg-violet-600 mb-6"></div>
            <p className="text-xl text-gray-200 font-text max-w-2xl">
              Conoce a los profesionales que forman parte de Maycam Evolve, un equipo de talento excepcional que compite
              en los torneos más prestigiosos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Combined Games and Players Section */}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-title flex items-center justify-center">
              <Trophy className="h-7 w-7 text-violet-500 mr-3" />
              Nuestras Disciplinas
            </h2>
            <div className="w-24 h-1 bg-violet-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto font-text">
              Selecciona un juego para ver los jugadores de esa disciplina
            </p>
          </motion.div>

          {/* Game Filters - Mejorados visualmente */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedGame("all")}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedGame === "all"
                  ? "bg-violet-600 text-white"
                  : "bg-violet-600/10 backdrop-blur-sm text-gray-300 hover:bg-violet-600/20 border border-violet-500/30"
              }`}
            >
              Todos
            </motion.button>

            {games.map((game, index) => (
              <motion.button
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedGame(game.id)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center ${
                  selectedGame === game.id
                    ? "bg-violet-600 text-white"
                    : "bg-violet-600/10 backdrop-blur-sm text-gray-300 hover:bg-violet-600/20 border border-violet-500/30"
                }`}
              >
                {game.name}
                {selectedGame === game.id && (
                  <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                    {players.filter((p) => p.gameId === game.id).length}
                  </span>
                )}
              </motion.button>
            ))}
          </div>

          {/* Game Info - Mejorado visualmente */}
          {selectedGame !== "all" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              {games
                .filter((game) => game.id === selectedGame)
                .map((game) => (
                  <div
                    key={game.id}
                    className="bg-gradient-to-br from-gray-800/60 via-gray-800/70 to-gray-900/80 rounded-2xl p-7 transition-all duration-300 relative overflow-hidden shadow-[0_10px_40px_-15px_rgba(124,58,237,0.3)] backdrop-blur-sm border border-violet-500/10"
                  >
                    {/* Borde brillante */}
                    <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-violet-400/30 via-violet-600/20 to-transparent pointer-events-none"></div>

                    {/* Elemento decorativo */}
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-violet-500/15 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none"></div>

                    {/* Elemento decorativo adicional */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-600/10 to-transparent pointer-events-none rounded-br-2xl"></div>

                    <div className="md:flex items-center relative z-10">
                      {game.image && (
                        <div className="md:w-1/4 mb-4 md:mb-0 md:mr-6">
                          <div className="aspect-video rounded-lg overflow-hidden border border-violet-500/20 shadow-lg shadow-violet-900/20">
                            <img
                              src={game.image || "/placeholder.svg"}
                              alt={game.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = "/placeholder.svg"
                              }}
                            />
                          </div>
                        </div>
                      )}
                      <div className="md:w-3/4">
                        <h3 className="text-2xl font-bold text-white mb-2 font-title">{game.name}</h3>
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center bg-violet-900/30 backdrop-blur-sm px-3 py-1 text-sm text-white rounded-full font-medium border border-violet-500/30 shadow-lg shadow-violet-900/20">
                            <Users className="h-4 w-4 mr-2 text-violet-300" />
                            <span>{players.filter((p) => p.gameId === game.id).length} jugadores</span>
                          </div>
                          <div className="flex items-center bg-violet-900/30 backdrop-blur-sm px-3 py-1 text-sm text-white rounded-full font-medium border border-violet-500/30 shadow-lg shadow-violet-900/20">
                            <Target className="h-4 w-4 mr-2 text-violet-300" />
                            <span>Competitivo</span>
                          </div>
                        </div>
                        <p className="text-gray-200 font-text">
                          {game.description ||
                            `Nuestro equipo de ${game.name} compite en los torneos más prestigiosos.`}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          )}

          {/* Players Grid - Mejorado visualmente */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedGame}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <PlayerGrid
                players={filteredPlayers}
                games={games}
                isLoaded={isLoaded}
                hoveredPlayer={hoveredPlayer}
                setHoveredPlayer={setHoveredPlayer}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section - Mejorado visualmente */}
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

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-title">
              ¿Quieres unirte a nuestro equipo?
            </h2>
            <p className="text-xl text-gray-200 mb-8 font-text">
              Estamos siempre en búsqueda de nuevos talentos para unirse a Maycam Evolve
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contacto"
                className="inline-flex items-center px-8 py-4 bg-white text-violet-900 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-white/20 group"
              >
                Contáctanos
                <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

interface Player {
  id: string
  name: string
  nickname?: string
  image: string
  gameId: string
  role: string
  description?: string
  socialMedia?: {
    twitter?: string
    instagram?: string
    twitch?: string
  }
}

interface Game {
  id: string
  name: string
  image?: string
  description?: string
}

function PlayerGrid({
  players,
  games,
  isLoaded,
  hoveredPlayer,
  setHoveredPlayer,
}: {
  players: Player[]
  games: Game[]
  isLoaded: boolean
  hoveredPlayer: string | null
  setHoveredPlayer: (id: string | null) => void
}) {
  // Animation variants for staggered animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  // Function to get game name by ID
  const getGameNameById = (gameId: string) => {
    const game = games.find((g) => g.id === gameId)
    return game ? game.name : "Juego desconocido"
  }

  return (
    <motion.div
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={container}
      initial="hidden"
      animate={isLoaded ? "show" : "hidden"}
    >
      {players.length === 0 ? (
        <motion.div className="col-span-full text-center py-12" variants={item}>
          <p className="text-gray-400 text-lg">No hay jugadores disponibles para esta selección.</p>
        </motion.div>
      ) : (
        players.map((player) => (
          <motion.div
            key={player.id}
            className="group"
            variants={item}
            onHoverStart={() => setHoveredPlayer(player.id)}
            onHoverEnd={() => setHoveredPlayer(null)}
            whileHover={{ y: -10 }}
          >
            {/* Tarjeta con efecto de profundidad */}
            <div className="relative">
              {/* Fondo con efecto de profundidad */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-violet-800/20 rounded-xl transform rotate-3 scale-[0.97] opacity-70 group-hover:rotate-6 group-hover:scale-[0.98] transition-transform duration-300"></div>

              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden border border-violet-500/30 group-hover:border-violet-500/50 transition-all duration-300 shadow-lg shadow-violet-900/20 group-hover:shadow-violet-900/30 z-10">
                {/* Imagen con overlay */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={player.image || "/placeholder.svg"}
                    alt={player.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80"></div>

                  {/* Badge de juego */}
                  <div className="absolute top-4 right-4 bg-violet-800/80 backdrop-blur-sm px-3 py-1 text-xs text-white rounded-full font-medium border border-violet-500/30 shadow-lg shadow-violet-900/20">
                    {getGameNameById(player.gameId)}
                  </div>

                  {/* Social media icons - appear on hover */}
                  <motion.div
                    className="absolute bottom-4 right-4 flex space-x-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: hoveredPlayer === player.id ? 1 : 0, y: hoveredPlayer === player.id ? 0 : 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {player.socialMedia?.twitter && (
                      <motion.a
                        href={player.socialMedia.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800/70 p-2 rounded-full text-gray-400 hover:text-white hover:bg-violet-900/70 transition-colors border border-violet-500/20"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Twitter className="w-4 h-4" />
                      </motion.a>
                    )}
                    {player.socialMedia?.instagram && (
                      <motion.a
                        href={player.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800/70 p-2 rounded-full text-gray-400 hover:text-white hover:bg-violet-900/70 transition-colors border border-violet-500/20"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Instagram className="w-4 h-4" />
                      </motion.a>
                    )}
                    {player.socialMedia?.twitch && (
                      <motion.a
                        href={player.socialMedia.twitch}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800/70 p-2 rounded-full text-gray-400 hover:text-white hover:bg-violet-900/70 transition-colors border border-violet-500/20"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Twitch className="w-4 h-4" />
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Player info */}
                <div className="p-6 relative">
                  {/* Línea decorativa */}
                  <div className="w-12 h-1 bg-violet-600 mb-3 group-hover:w-20 transition-all duration-300"></div>

                  <h3 className="text-2xl font-bold text-white mb-1 font-title group-hover:text-violet-300 transition-colors">
                    {player.nickname || player.name}
                  </h3>

                  <p className="text-gray-400 text-sm mb-2 font-text">{player.name}</p>

                  <div className="flex items-center">
                    <span className="bg-violet-900/30 backdrop-blur-sm px-3 py-1 text-xs text-white rounded-full font-medium border border-violet-500/30 shadow-lg shadow-violet-900/20">
                      {player.role}
                    </span>
                  </div>

                  {player.description && (
                    <p className="text-gray-300 text-sm line-clamp-2 font-text mt-3">{player.description}</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))
      )}
    </motion.div>
  )
}
