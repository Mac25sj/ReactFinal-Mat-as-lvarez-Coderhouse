import { useContext, useState } from "react"
import { toCapital } from "../../helpers/toCapital"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext"

const ItemDetail = ({ item }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext)
  const [cantidad, setCantidad] = useState(1)

  const handleRestar = () => {
    if (cantidad > 1) setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    if (cantidad < item.stock) setCantidad(cantidad + 1)
  }

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <img
          src={item.imagen}
          alt={item.titulo}
          className="w-full rounded-lg shadow-md object-cover aspect-[4/3]"
        />

        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold text-blue-900">{item.titulo}</h3>
          <p className="text-sm text-gray-700">{item.descripcion}</p>
          <p className="text-sm text-gray-600">
            Categoría: <span className="font-medium">{toCapital(item.categoria)}</span>
          </p>
          <p className="text-3xl font-semibold text-green-700 mt-4">${item.precio}</p>

          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => agregarAlCarrito(item, cantidad)}
          />
        </div>
      </div>
    </section>
  )
}

export default ItemDetail