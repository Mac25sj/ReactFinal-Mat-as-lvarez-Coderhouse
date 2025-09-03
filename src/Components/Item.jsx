import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Item = ({ producto }) => {
  const { modoDark } = useTheme();

  const cardBg = modoDark ? 'bg-gray-800' : 'bg-white';
  const titleColor = modoDark ? 'text-white' : 'text-blue-800';
  const descColor = modoDark ? 'text-gray-300' : 'text-gray-700';
  const metaColor = modoDark ? 'text-gray-400' : 'text-gray-600';
  const shadowStyle = modoDark ? 'shadow-md' : 'shadow-lg';
  const buttonBg = modoDark ? 'bg-yellow-400 hover:bg-yellow-500 text-black' : 'bg-blue-700 hover:bg-blue-900 text-white';

  return (
    <div className={`rounded-xl overflow-hidden flex flex-col md:flex-row gap-6 p-6 transition-colors duration-300 ${cardBg} ${shadowStyle}`}>
      
      <img
        src={producto.imagen}
        alt={`Imagen del producto ${producto.titulo}`}
        loading="lazy"
        className="w-full md:w-1/2 object-cover rounded-lg aspect-[4/3] shadow-sm hover:shadow-lg transition-shadow duration-300 hover:scale-105"
      />

      <div className="flex flex-col justify-between gap-4 md:w-1/2">
        <div>
          <h4 className={`text-2xl font-bold ${titleColor}`}>{producto.titulo}</h4>
          <p className={`text-sm mt-2 ${descColor}`}>{producto.descripcion}</p>
          <p className={`text-sm mt-1 ${metaColor}`}>
            <span className="font-medium">Precio:</span> ${producto.precio}
          </p>
          <p className={`text-sm ${metaColor}`}>
            <span className="font-medium">Stock:</span> {producto.stock}
          </p>
        </div>

        <Link
          to={`/item/${producto.id}`}
          className={`self-start px-4 py-2 rounded-md font-medium transition ${buttonBg}`}
        >
          Ver producto
        </Link>
      </div>
    </div>
  );
};

export default Item;