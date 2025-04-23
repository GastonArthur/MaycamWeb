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
          scrolled ? "bg-black py-2 shadow-lg" : "bg-black py-4"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <NavbarLogo />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center">
            {routes.map((item) => (
              <li key={item.path} className="mx-1">
                <Link
                  href={item.path}
                  className={`px-4 py-2 ${isActive(item.path) ? "text-white" : "text-gray-300 hover:text-white"}`}
                >
                  {item.label}
                  {isActive(item.path) && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-500" />}
                </Link>
              </li>
            ))}

            {/* Separador visual */}
            <div className="mx-3 h-6 w-px bg-gray-700"></div>

            {/* Botón de tienda */}
            <li>
              <Link
                className="inline-flex items-center px-4 py-2 bg-violet-600 rounded-lg text-white font-bold"
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
