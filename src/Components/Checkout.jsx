import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { guitarproductos } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Checkout = () => {
  const [guitarid, setguitarid] = useState('');
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const { modoDark } = useTheme();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };

    const pedidosRef = collection(guitarproductos, 'ventas');

    addDoc(pedidosRef, pedido).then((doc) => {
      setguitarid(doc.id);
      vaciarCarrito();
      reset();
    });
  };

  const bgColor = modoDark ? 'bg-gray-900' : 'bg-white';
  const formBg = modoDark ? 'bg-gray-800' : 'bg-white';
  const textColor = modoDark ? 'text-white' : 'text-blue-800';
  const labelColor = modoDark ? 'text-gray-300' : 'text-gray-700';
  const inputBorder = modoDark ? 'border-gray-600' : 'border-gray-300';
  const inputFocus = modoDark ? 'focus:ring-yellow-400' : 'focus:ring-blue-500';
  const errorColor = modoDark ? 'text-red-400' : 'text-red-600';
  const shadowStyle = modoDark ? 'shadow-md' : 'shadow-lg';

  if (guitarid) {
    return (
      <section className={`max-w-screen-md mx-auto px-4 py-10 text-center transition-colors duration-300 ${bgColor}`}>
        <h1 className={`text-2xl font-bold mb-4 ${textColor}`}>
          Muchas gracias por tu pedido, en breve nos comunicamos contigo
        </h1>
        <p className={`text-lg ${modoDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Número de seguimiento: <span className="font-semibold">{guitarid}</span>
        </p>
      </section>
    );
  }

  return (
    <section className={`max-w-screen-md mx-auto px-4 py-10 transition-colors duration-300 ${bgColor}`}>
      <h1 className={`text-3xl font-bold mb-6 text-center ${textColor}`}>Finalizar compra</h1>

      <form
        onSubmit={handleSubmit(comprar)}
        className={`flex flex-col gap-6 p-6 rounded-xl ${formBg} ${shadowStyle}`}
      >
        <input
          type="text"
          placeholder="❓ ¿Cómo te llamás?"
          {...register('nombre', { required: 'Este campo es obligatorio' })}
          className={`border ${inputBorder} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${inputFocus} bg-transparent ${modoDark ? 'text-white' : 'text-black'}`}
        />
        {errors.nombre && <span className={`text-xs ${errorColor}`}>{errors.nombre.message}</span>}

        <input
          type="email"
          placeholder="📧 e-mail"
          {...register('email', {
            required: 'Este campo es obligatorio',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Correo inválido'
            }
          })}
          className={`border ${inputBorder} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${inputFocus} bg-transparent ${modoDark ? 'text-white' : 'text-black'}`}
        />
        {errors.email && <span className={`text-xs ${errorColor}`}>{errors.email.message}</span>}

        <input
          type="tel"
          placeholder="📱 Número"
          {...register('telefono', {
            required: 'Este campo es obligatorio',
            minLength: {
              value: 6,
              message: 'Número demasiado corto'
            }
          })}
          className={`border ${inputBorder} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${inputFocus} bg-transparent ${modoDark ? 'text-white' : 'text-black'}`}
        />
        {errors.telefono && <span className={`text-xs ${errorColor}`}>{errors.telefono.message}</span>}

        <label className={`flex items-center gap-3 text-sm ${labelColor}`}>
          <input
            type="checkbox"
            {...register('confirmacion', { required: 'Debés confirmar para continuar' })}
            className="accent-blue-600 w-4 h-4 rounded focus:ring-2 focus:ring-blue-500"
          />
          Confirmo que revisé mi pedido y acepto continuar con la compra
        </label>
        {errors.confirmacion && <span className={`text-xs ${errorColor}`}>{errors.confirmacion.message}</span>}

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
  );
};

export default Checkout;