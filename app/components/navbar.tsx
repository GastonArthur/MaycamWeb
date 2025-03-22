"use client";

import { useState } from "react";
import Link from "next/link";
import NavbarLogo from "./navbar-logo";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-black text-white p-4 fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <NavbarLogo />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-semibold">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/sobre-nosotros">Sobre Nosotros</Link></li>
          <li><Link href="/jugadores">Jugadores</Link></li>
          <li><Link href="/staff">Staff</Link></li>
          <li><Link href="/logros">Logros</Link></li>
          <li><Link href="/contacto">Contacto</Link></li>
          <li><Link className="bg-purple-600 px-4 py-2 rounded text-white font-bold" target="_blank" href="https://www.maycamgames.com.ar">Tienda</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="fixed top-0 right-0 w-3/4 h-full bg-black bg-opacity-90 backdrop-blur-md z-40 md:hidden rounded-l-xl"
          onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic dentro del menú
        >
          <div className="flex flex-col items-center justify-center min-h-full space-y-4 py-6">
            <Link href="/" onClick={toggleMenu} className="text-xl font-semibold">Inicio</Link>
            <Link href="/sobre-nosotros" onClick={toggleMenu} className="text-xl font-semibold">Sobre Nosotros</Link>
            <Link href="/jugadores" onClick={toggleMenu} className="text-xl font-semibold">Jugadores</Link>
            <Link href="/staff" onClick={toggleMenu} className="text-xl font-semibold">Staff</Link>
            <Link href="/logros" onClick={toggleMenu} className="text-xl font-semibold">Logros</Link>
            <Link href="/contacto" onClick={toggleMenu} className="text-xl font-semibold">Contacto</Link>
            <Link href="https://www.maycamgames.com.ar" target="_blank" onClick={toggleMenu} className="bg-purple-600 px-4 py-2 rounded text-white font-bold">Tienda</Link>
          </div>
        </motion.div>
      )}

      {/* Click Outside to Close */}
      {isOpen && <div className="fixed inset-0 z-30" onClick={toggleMenu} />}  
    </nav>
  );
}
