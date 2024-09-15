import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'




const Navbar = () => {
  return (
    <nav className="bg-yellow-400 p-8 flex justify-between items-center bg-main border-b-3 border-black">
        <Link to="/" className="text-4xl font-semibold text-red-600 mb-4"><h1>Guitarcoder 🎸</h1></Link>
        <ul className="list-none flex items-center space-x-4">
            <li><Link className="text-black text-base hover:underline transition duration-200 ease-in-out" to="/">Inicio</Link></li>
            <li><Link className="text-black text-base hover:underline transition duration-200 ease-in-out" to="/productos/Guitarras">Guitarras</Link></li>
            <li><Link className="text-black text-base hover:underline transition duration-200 ease-in-out" to="/productos/Bajos">Bajos</Link></li>
            <li><Link className="text-black text-base hover:underline transition duration-200 ease-in-out" to="/productos/Accesorios">Accesorios</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar