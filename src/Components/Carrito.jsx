import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';


const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const { modoDark } = useTheme();

  const bgColor = modoDark ? 'bg-gray-900' : 'bg-white';
  const cardBg = modoDark ? 'bg-gray-800' : 'bg-white';
  const titleColor = modoDark ? 'text-white' : 'text-blue-800';
  const textColor = modoDark ? 'text-gray-300' : 'text-gray-700';
  const metaColor = modoDark ? 'text-gray-400' : 'text-gray-600';
  const shadowStyle = modoDark ? 'shadow-md' : 'shadow-lg';

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <section className={`max-w-screen-xl mx-auto px-4 py-10 transition-colors duration-300 ${bgColor}`}>
      <h1 className={`text-3xl font-bold mb-8 text-center ${titleColor}`}>Carrito</h1>

      {carrito.length > 0 ? (
        <>
          <div className="grid gap-6 mb-8">
            {carrito.map((prod) => (
              <div
                key={prod.id}
                className={`rounded-lg p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center ${cardBg} ${shadowStyle}`}
              >
                <div>
                  <h3 className={`text-xl font-semibold ${textColor}`}>{prod.titulo}</h3>
                  <p className={`text-sm ${metaColor}`}>Precio unitario: ${prod.precio}</p>
                  <p className={`text-sm ${metaColor}`}>Cantidad: {prod.cantidad}</p>
                  <p className={`text-sm font-medium ${metaColor}`}>
                    Subtotal: ${prod.precio * prod.cantidad}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-bold text-green-500">
              Total: ${precioTotal()}
            </h2>

            <div className="flex gap-4">
              <button
                onClick={handleVaciar}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 transition"
              >
                Vaciar carrito
              </button>
              <Link
                to="/checkout"
                className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-900 transition"
              >
                Finalizar compra 🎸
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className={`text-center text-lg mt-10 ${textColor}`}>
          <h2 className="text-xl font-semibold mb-4">
            Tu carrito está más ligero que una nota musical al viento 🎶
          </h2>
          <p>¡Añade productos y crea tu sinfonía de compras! 
 </p>
        </div>
      )}
    </section>
  );
};

export default Carrito;