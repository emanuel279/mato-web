"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full bg-white text-gray-900 shadow-md z-50"
      style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo + Nombre */}
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo Ma-To" width={50} height={50} />
          <span className="text-lg sm:text-xl font-bold">Ma-To Shoyu Ramen</span>
        </div>

        {/* Botón de menú móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-2xl focus:outline-none"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Navegación */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col sm:flex sm:flex-row sm:items-center sm:space-x-6 absolute sm:static top-full left-0 w-full sm:w-auto bg-white sm:bg-transparent text-center sm:text-left border-t sm:border-none`}
        >
          <Link href="/" className="block py-2 sm:py-0 hover:text-red-400 transition">
            Inicio
          </Link>
          <Link href="/menu" className="block py-2 sm:py-0 hover:text-red-400 transition">
            Menú
          </Link>
          <Link href="/promociones" className="block py-2 sm:py-0 hover:text-red-400 transition">
            Promociones
          </Link>
          <Link href="/ubicacion" className="block py-2 sm:py-0 hover:text-red-400 transition">
            Ubicación
          </Link>

          <a
            href="https://www.didifood.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block sm:inline"
          >
            <button className="my-3 sm:my-0 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md font-semibold text-white w-11/12 sm:w-auto">
              Ordenar ahora
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
}
