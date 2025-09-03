import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useForm } from 'react-hook-form'
import { collection, addDoc } from 'firebase/firestore'
import { guitarproductos } from '../firebase/config'
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [guitarid, setguitarid] = useState('');
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    }

    const pedidosRef = collection(guitarproductos, 'ventas')

    addDoc(pedidosRef, pedido).then((doc) => {
      setguitarid(doc.id)
      vaciarCarrito()
    })
  }

  if (guitarid) {
    return (
      <section className="max-w-screen-md mx-auto px-4 py-10 text-center">
        <h1 className="text-2xl font-bold text-blue-800 mb-4">
          Muchas gracias por tu pedido, en breve nos comunicamos contigo 
        </h1>
        <p className="text-lg text-gray-700">Número de seguimiento: <span className="font-semibold">{guitarid}</span></p>
      </section>
    )
  }

  return (
    <section className="max-w-screen-md mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">Finalizar compra</h1>

      <form
        onSubmit={handleSubmit(comprar)}
        className="flex flex-col gap-6 bg-white p-6 rounded-xl shadow-md"
      >
        <input
          type="text"
          placeholder="❓ ¿Cómo te llamás?"
          {...register('nombre')}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          placeholder="📧 e-mail"
          {...register('email')}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="tel"
          placeholder="📱 Número"
          {...register('telefono')}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {}
        <label className="flex items-center gap-3 text-sm text-gray-700">
          <input
            type="checkbox"
            {...register('confirmacion')}
            className="accent-blue-600 w-4 h-4 rounded focus:ring-2 focus:ring-blue-500"
          />
          Confirmo que revisé mi pedido y acepto continuar con la compra
        </label>

        <button
          type="submit"
          className="bg-green-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-green-800 transition"
        >
          Confirmar Compra
        </button>
        <button
  type="button"
  onClick={() => navigate('/productos')} 
  className="bg-red-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-red-800 transition"
>
  Cancelar y volver atrás
</button>
      </form>
    </section>
  )
}

export default Checkout