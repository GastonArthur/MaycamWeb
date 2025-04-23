"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import NavbarLogo from "./navbar-logo"
import { Menu, X, ShoppingBag } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Verificar si un enlace está activo
  const isActive = (path: string) => {
    return pathname === path
  }

  // Rutas para el menú
  const routes = [
    { path: "/", label: "Inicio" },
    { path: "/sobre-nosotros", label: "Sobre Nosotros" },
    { path: "/jugadores", label: "Jugadores" },
    { path: "/staff", label: "Staff" },
    { path: "/logros", label: "Logros" },
    { path: "/contacto", label: "Contacto" },
  ]

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-gray-900/95 via-gray-950/95 to-gray-900/95 backdrop-blur-md py-2 shadow-lg shadow-violet-900/20"
            : "bg-gradient-to-r from-gray-900/80 via-gray-950/80 to-gray-900/80 backdrop-blur-sm py-4"
        }`}
      >
        {/* Línea decorativa superior */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"></div>

        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-violet-600/10 rounded-full blur-[50px] opacity-80"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600/10 rounded-full blur-[50px] opacity-80"></div>
        </div>

        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo con tamaño aumentado */}
          <Link href="/" className="relative z-10 scale-125 transform-gpu origin-left">
            <NavbarLogo />
          </Link>

          {/* Desktop Menu - Con barra pequeña en hover */}
          <ul className="hidden md:flex items-center relative z-10">
            {routes.map((item) => (
              <li key={item.path} className="mx-1">
                <Link
                  href={item.path}
                  className={`px-4 py-2 transition-all duration-300 relative group flex items-center ${
                    isActive(item.path) ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {/* Barra para elemento activo */}
                  {isActive(item.path) && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-500" />}
                  {/* Barra para hover (solo visible en hover y si no es el elemento activo) */}
                  {!isActive(item.path) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-500/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  )}
                </Link>
              </li>
            ))}

            {/* Separador visual */}
            <div className="mx-3 h-6 w-px bg-gray-700/50"></div>

            {/* Botón de tienda con icono y estilo mejorado */}
            <li>
              <Link
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-800 hover:from-violet-700 hover:to-violet-900 rounded-lg text-white font-bold transition-all duration-300 shadow-lg shadow-violet-900/30 hover:shadow-violet-900/50 border border-violet-500/50 transform hover:-translate-y-0.5"
                target="_blank"
                href="https://www.maycamgames.com.ar"
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Tienda
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden focus:outline-none z-50 p-2" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Extremadamente simple */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-50 md:hidden" style={{ top: "60px" }}>
          <div className="flex flex-col p-4">
            {routes.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={toggleMenu}
                className={`py-4 text-center text-xl font-bold ${
                  isActive(item.path) ? "text-violet-400" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-6 pt-6 border-t border-gray-800">
              <Link
                href="https://www.maycamgames.com.ar"
                target="_blank"
                onClick={toggleMenu}
                className="block w-full py-4 bg-violet-600 text-white text-center text-xl font-bold rounded-lg"
              >
                Tienda
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
