import Item from "./Item";
import { toCapital } from "../../helpers/toCapital";


const ItemList = ( {productos, titulo} ) => {

  return (
    <div className="producto p-4 bg-blue-200 rounded-lg shadow-md">
        <h2 className="main-title">{toCapital(titulo)}</h2>

        <div className="grid grid-cols-3 gap-8 py-8">
            { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
        </div>
    </div>
  )
}

export default ItemList