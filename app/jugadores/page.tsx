"use client"

import { useState, useEffect, useRef } from "react"
import { websiteData } from "@/app/lib/data-service"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
    <main className="min-h-screen bg-black">
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
              className="inline-flex items-center bg-violet-900/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-violet-500/30"
            >
              <Gamepad2 className="h-4 w-4 text-violet-400 mr-2" />
              <span className="text-sm text-violet-300 font-medium">Nuestro Roster</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-title drop-shadow-lg">
              Nuestros Jugadores
            </h1>
            <div className="w-24 h-1 bg-violet-600 mb-6"></div>
            <p className="text-xl text-gray-200 font-text max-w-2xl">
              Conoce a los profesionales que forman parte de Maycam Evolve, un equipo de talento excepcional que compite
              en los torneos más prestigiosos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Games Stats Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-900/10 rounded-full mix-blend-normal filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full mix-blend-normal filter blur-3xl"></div>
        </div>

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
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-violet-700 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto font-text">
              Competimos en los juegos más populares y exigentes del panorama de los eSports
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-violet-900/30 rounded-xl overflow-hidden group hover:border-violet-500 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                { game.image && (
                    <img
                        src={game.image}
                        alt={game.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors font-title">
                      {game.name}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-violet-400 mr-2" />
                      <span className="text-sm text-gray-400">
                        {players.filter((p) => p.gameId === game.id).length} jugadores
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Target className="h-4 w-4 text-violet-400 mr-2" />
                      <span className="text-sm text-gray-400">Competitivo</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm line-clamp-2 font-text">
                    {game.description || `Nuestro equipo de ${game.name} compite en los torneos más prestigiosos.`}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Games Filter Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedGame}>
            <motion.div
              className="flex justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <TabsList className="bg-gray-900/80 p-1 backdrop-blur-sm border border-violet-900/20 rounded-full">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-violet-700 data-[state=active]:text-white px-6 py-3 rounded-full"
                >
                  Todos
                </TabsTrigger>
                {games.map((game) => (
                  <TabsTrigger
                    key={game.id}
                    value={game.id}
                    className="data-[state=active]:bg-violet-700 data-[state=active]:text-white px-6 py-3 rounded-full"
                  >
                    {game.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </motion.div>

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
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 -left-10 w-72 h-72 bg-violet-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-10 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

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
                className="inline-flex items-center px-8 py-4 bg-white text-violet-900 font-bold rounded-md hover:bg-gray-100 transition-colors shadow-lg text-lg font-title"
              >
                Contáctanos
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

interface Player {
  id: string;
  name: string;
  nickname?: string;
  image: string;
  gameId: string;
  role: string;
  description?: string;
  socialMedia?: {
    twitter?: string;
    instagram?: string;
    twitch?: string;
  };
}

interface Game {
  id: string;
  name: string;
  image?: string;
  description?: string;
}

function PlayerGrid({
  players,
  games,
  isLoaded,
  hoveredPlayer,
  setHoveredPlayer,
}: {
  players: Player[];
  games: Game[];
  isLoaded: boolean;
  hoveredPlayer: string | null;
  setHoveredPlayer: (id: string | null) => void;
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
            className="relative overflow-hidden rounded-xl group"
            variants={item}
            whileHover={{ y: -10 }}
            onHoverStart={() => setHoveredPlayer(player.id)}
            onHoverEnd={() => setHoveredPlayer(null)}
          >
            {/* Card background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-xl border border-violet-900/30 group-hover:border-violet-500 transition-all duration-300 z-0"></div>

            {/* Animated glow effect on hover */}
            <motion.div
              className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 blur-md z-0"
              animate={{ opacity: hoveredPlayer === player.id ? 0.3 : 0 }}
              transition={{ duration: 0.3 }}
            ></motion.div>

            <div className="relative z-10">
              {/* Player image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-xl">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = ""
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>

                {/* Game badge */}
                <div className="absolute top-4 right-4 bg-violet-900/80 backdrop-blur-sm px-3 py-1 text-xs text-white rounded-full border border-violet-500/30">
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
                      className="text-white p-2 bg-black/50 rounded-full hover:bg-violet-900/70 transition-colors backdrop-blur-sm"
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
                      className="text-white p-2 bg-black/50 rounded-full hover:bg-violet-900/70 transition-colors backdrop-blur-sm"
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
                      className="text-white p-2 bg-black/50 rounded-full hover:bg-violet-900/70 transition-colors backdrop-blur-sm"
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
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 font-title">{player.nickname || player.name}</h3>
                    <p className="text-gray-400 text-sm mb-2 font-text">{player.name}</p>
                    <div className="flex items-center">
                      <span className="inline-block bg-violet-900/50 text-violet-300 px-3 py-1 text-xs rounded-full font-medium border border-violet-500/20">
                        {player.role}
                      </span>
                    </div>
                  </div>
                </div>

                {player.description && (
                  <p className="text-gray-300 mt-4 line-clamp-2 text-sm font-text">{player.description}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))
      )}
    </motion.div>
  )
}

