"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 w-full bg-white text-gray-900 shadow-md z-50"
      style={{
        fontFamily: "var(--font-noto-sans-jp), sans-serif"
      }}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo + Nombre */}
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="Logo Ma-To" width={60} height={60} />
          <span className="text-xl font-bold">Ma-To Shoyu Ramen</span>
        </div>

        {/* Navegación */}
        <nav className="flex items-center space-x-6">
          <Link href="/" className="hover:text-red-400 transition">Inicio</Link>
          <Link href="/menu" className="hover:text-red-400 transition">Menú</Link>
          <Link href="/promociones" className="hover:text-red-400 transition">Promociones</Link>
          <Link href="/ubicacion" className="hover:text-red-400 transition">Ubicación</Link>
  
          <a
            href="https://www.didifood.com"  // <-- Pon aquí la URL real de tu restaurante en DiDi
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="ml-4 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md font-semibold">
              Ordenar ahora
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
}