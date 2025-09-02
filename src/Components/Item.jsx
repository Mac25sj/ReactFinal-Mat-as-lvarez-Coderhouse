import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row gap-6 p-6">
      <img
        src={producto.imagen}
        alt={producto.titulo}
        className="w-full md:w-1/2 object-cover rounded-lg aspect-[4/3]"
      />

      <div className="flex flex-col justify-between gap-4 md:w-1/2">
        <div>
          <h4 className="text-2xl font-bold text-blue-800">{producto.titulo}</h4>
          <p className="text-sm text-gray-700 mt-2">{producto.descripcion}</p>
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-medium">Precio:</span> ${producto.precio}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Stock:</span> {producto.stock}
          </p>
        </div>

        <Link
          to={`/item/${producto.id}`}
          className="self-start bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition"
        >
          Ver más
        </Link>
      </div>
    </div>
  )
}

export default Item