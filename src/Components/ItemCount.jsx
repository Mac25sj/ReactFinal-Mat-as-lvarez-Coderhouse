import React from 'react'

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {
  return (
    <div className="flex flex-col gap-4 mt-6">
      {/* Contador */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleRestar}
          className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400 transition"
        >
          −
        </button>
        <span className="text-lg font-semibold">{cantidad}</span>
        <button
          onClick={handleSumar}
          className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400 transition"
        >
          +
        </button>
      </div>

      {/* Botón de agregar */}
      <button
        onClick={handleAgregar}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition font-medium"
      >
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount