import { useContext, useState } from "react";
import { toCapital } from "../../helpers/toCapital"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext";


const ItemDetail = ( {item} ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

  return (
    <div className=" mx-auto px-6">
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={item.imagen} alt={item.titulo} className="w-full"/>
            <div>
                <h3 className="text-2xl">{item.titulo}</h3>
                <p className="text-xs text-gray-600 mt-4">{item.descripcion}</p>
                <p className="text-xs text-gray-600 mt-4 ">Categoría: {toCapital(item.categoria)}</p>
                <p className="text-2xl font-semibold mt-8">${item.precio}</p>
                <ItemCount
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                />
            </div>
        </div>
    </div>
  )
}

export default ItemDetail