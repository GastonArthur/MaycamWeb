"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Instagram, Twitch, Twitter } from "lucide-react"

interface PlayerCardProps {
  player: any
  gameName: string
}

export default function PlayerCard({ player, gameName }: PlayerCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      className="relative group overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-lg border border-violet-900/30 group-hover:border-violet-500 transition-all duration-300 z-0"></div>

      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-100 blur-md z-0"
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
      ></motion.div>

      <div className="relative z-10">
        {/* Imagen del jugador */}
        {player.image && !imageError && (
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-lg">
            <img
              src={player.image}
              alt={player.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={() => setImageError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
            <div className="absolute top-4 right-4 bg-violet-900/80 px-3 py-1 text-xs text-white rounded-full backdrop-blur-sm">
              {gameName}
            </div>
          </div>
        )}

        {/* Información del jugador */}
        <div className="p-6 relative">
          <h3 className="text-2xl font-bold text-white mb-1 font-title">{player.nickname || player.name}</h3>
          <p className="text-gray-400 text-sm mb-2 font-text">{player.name}</p>
          <div className="flex items-center">
            <span className="inline-block bg-violet-900/50 text-violet-300 px-3 py-1 text-xs rounded-full font-medium">
              {player.role}
            </span>
          </div>
          {player.description && <p className="text-gray-300 mt-4 line-clamp-2 text-sm font-text">{player.description}</p>}
        </div>
      </div>
    </motion.div>
  )
}
