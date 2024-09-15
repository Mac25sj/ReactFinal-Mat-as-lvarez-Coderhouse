import React from 'react'

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

  return (
    <div>

        <div className="flex items-center gap-4 mt-4">
            <button onClick={handleRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleSumar}>+</button>
        </div>
        <button className="bg-blue-400 border-2 border-main rounded-md w-8 h-8 text-white cursor-pointer text-base flex items-center justify-center transition duration-200 hover:underline" onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount