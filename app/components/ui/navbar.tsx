"use client";

import Link from "next/link";
import NavbarLogo from "../navbar-logo";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        <NavbarLogo />
      </Link>
      <ul className="flex space-x-6 text-sm font-semibold">
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/sobre-nosotros">Sobre Nosotros</Link></li>
        <li><Link href="/jugadores">Jugadores</Link></li>
        <li><Link href="/staff">Staff</Link></li>
        <li><Link href="/logros">Logros</Link></li>
        <li><Link href="/galeria">Galería</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
        <li><Link className="bg-purple-600 px-4 py-2 rounded text-white font-bold" href="/tienda">Tienda</Link></li>
      </ul>
    </nav>
  );
}

