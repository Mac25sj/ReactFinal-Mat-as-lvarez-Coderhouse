import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from "react-icons/fa";
import { useTheme } from '../context/ThemeContext';

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);
  const cantidad = cantidadEnCarrito();
  const { modoDark } = useTheme();

  const iconColor = modoDark ? 'text-yellow-300 hover:text-white' : 'text-white hover:text-yellow-300';
  const badgeBg = modoDark ? 'bg-red-500' : 'bg-red-600';

  return (
    <Link
      to="/carrito"
      className={`relative inline-flex items-center justify-center w-10 h-10 transition ${iconColor}`}
    >
      <FaShoppingCart className="text-2xl" />

      {cantidad > 0 && (
        <span className={`absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 ${badgeBg} text-white text-[0.6rem] md:text-xs font-bold px-1.5 py-0.5 rounded-full animate-pulse`}>
          {cantidad}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;