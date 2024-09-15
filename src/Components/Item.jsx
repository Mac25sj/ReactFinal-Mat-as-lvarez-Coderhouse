import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {producto} ) => {
  return (
    <div className="grid grid-cols-3 gap-8 py-8">
        <img src={producto.imagen} alt={producto.titulo} className='w-full' />
        <div>
            <h4>{producto.titulo}</h4>
            <p>{producto.descripcion}</p>
            <p>Precio: $ {producto.precio}</p>
            <p>Stock: {producto.stock}</p>
            <Link className="text-white bg-black px-2 py-1 rounded-md transition duration-200 hover:underline" to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item