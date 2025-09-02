import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext)
  const cantidad = cantidadEnCarrito()

  return (
    <Link
      to="/carrito"
      className="relative flex items-center text-white text-lg hover:text-yellow-300 transition"
    >
      🛒
      {cantidad > 0 && (
        <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
          {cantidad}
        </span>
      )}
    </Link>
  )
}

export default CartWidget