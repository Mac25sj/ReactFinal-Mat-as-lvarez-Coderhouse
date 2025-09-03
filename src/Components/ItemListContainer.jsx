import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { guitarproductos } from "../firebase/config"
import { toCapital } from "../../helpers/toCapital"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoria } = useParams()
  const tituloFinal = categoria ? toCapital(categoria) : "Productos"

  useEffect(() => {
    setLoading(true)

    const productosRef = collection(guitarproductos, "productos")
    const q = categoria
      ? query(productosRef, where("categoria", "==", categoria))
      : productosRef

    getDocs(q)
      .then((resp) => {
        const productosFormateados = resp.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setProductos(productosFormateados)
      })
      .finally(() => setLoading(false))
  }, [categoria])

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-8 max-w-screen-xl mx-auto">
      {loading ? (
        <div className="text-center text-blue-700 py-12 animate-pulse">
          Cargando productos...
        </div>
      ) : (
        <ItemList productos={productos} titulo={tituloFinal} />
      )}
    </main>
  )
}

export default ItemListContainer