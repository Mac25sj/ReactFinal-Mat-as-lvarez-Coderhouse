import Item from "./Item"
import { toCapital } from "../../helpers/toCapital"

const ItemList = ({ productos, titulo }) => {
  return (
    <section className="px-4 py-8 bg-blue-100 rounded-xl shadow-lg max-w-screen-xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 text-center">
        {toCapital(titulo)}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productos.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </section>
  )
}

export default ItemList