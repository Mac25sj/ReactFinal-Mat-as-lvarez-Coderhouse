import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-blue-700 border-b-4 border-black px-6 py-4">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold text-white hover:text-yellow-300 transition"
        >
          Guitarcoder 🎸
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="text-white md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Menú desktop */}
        <ul className="hidden md:flex gap-6 items-center">
          {['Inicio', 'Guitarras', 'Bajos', 'Accesorios'].map((label, i) => (
            <li key={i}>
              <Link
                to={label === 'Inicio' ? '/' : `/productos/${label}`}
                className="text-white text-lg px-2 py-1 rounded-md hover:bg-yellow-300 hover:text-black transition"
              >
                {label}
              </Link>
            </li>
          ))}
          <li><CartWidget /></li>
        </ul>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden">
          {['Inicio', 'Guitarras', 'Bajos', 'Accesorios'].map((label, i) => (
            <li key={i}>
              <Link
                to={label === 'Inicio' ? '/' : `/productos/${label}`}
                className="text-white text-base px-2 py-1 rounded-md hover:bg-yellow-300 hover:text-black transition"
              >
                {label}
              </Link>
            </li>
          ))}
          <li><CartWidget /></li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar