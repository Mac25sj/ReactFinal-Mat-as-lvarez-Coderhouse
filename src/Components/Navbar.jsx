import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { useTheme } from '../context/ThemeContext';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { modoDark, toggleTheme } = useTheme();

  const navBg = modoDark ? 'bg-gray-900 border-gray-700' : 'bg-blue-700 border-black';
  const linkBase = 'px-2 py-1 rounded-md transition';
  const linkColor = modoDark ? 'text-white hover:bg-yellow-300 hover:text-black' : 'text-white hover:bg-yellow-300 hover:text-black';

  return (
    <nav className={`${navBg} border-b-4 px-6 py-4 transition-colors duration-300`}>
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className={`text-2xl md:text-3xl font-bold transition ${modoDark ? 'text-white hover:text-yellow-300' : 'text-white hover:text-yellow-300'}`}
        >
          Guitarcoder 🎸
        </Link>

        <button
          className="text-white md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul className="hidden md:flex gap-6 items-center">
          {['Inicio', 'Guitarras', 'Bajos', 'Accesorios'].map((label, i) => (
            <li key={i}>
              <Link
                to={label === 'Inicio' ? '/' : `/productos/${label}`}
                className={`${linkBase} ${linkColor} text-lg`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li><CartWidget /></li>
          <li>
            <button
              onClick={toggleTheme}
              className="text-xl p-2 rounded-full bg-yellow-300 text-black hover:bg-yellow-400 transition flex items-center justify-center"
            >
              {modoDark ? <MdOutlineLightMode /> : <MdDarkMode />}
            </button>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden">
          {['Inicio', 'Guitarras', 'Bajos', 'Accesorios'].map((label, i) => (
            <li key={i}>
              <Link
                to={label === 'Inicio' ? '/' : `/productos/${label}`}
                className={`${linkBase} ${linkColor} text-base`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li><CartWidget /></li>
          <li>
            <button
              onClick={toggleTheme}
              className="text-xl p-2 rounded-full bg-yellow-300 text-black hover:bg-yellow-400 transition flex items-center justify-center"
            >
              {modoDark ? <MdOutlineLightMode /> : <MdDarkMode />}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;