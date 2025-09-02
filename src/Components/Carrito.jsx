import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

  const handleVaciar = () => {
    vaciarCarrito()
  }

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">Carrito</h1>

      {carrito.length > 0 ? (
        <>
          <div className="grid gap-6 mb-8">
            {carrito.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{prod.titulo}</h3>
                  <p className="text-sm text-gray-600">Precio unitario: ${prod.precio}</p>
                  <p className="text-sm text-gray-600">Cantidad: {prod.cantidad}</p>
                  <p className="text-sm text-gray-600 font-medium">
                    Subtotal: ${prod.precio * prod.cantidad}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-bold text-green-700">
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
        <div className="text-center text-gray-700 text-lg mt-10">
          <h2 className="text-xl font-semibold mb-4">
            Tu carrito está más ligero que una nota musical al viento 🎶
          </h2>
          <p>¡Añade productos y crea tu sinfonía de compras! 🛒</p>
        </div>
      )}
    </section>
  )
}

export default Carrito