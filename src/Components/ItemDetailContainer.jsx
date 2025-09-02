import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { guitarproductos } from "../firebase/config"

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const docRef = doc(guitarproductos, "productos", id)
    getDoc(docRef)
      .then((resp) => {
        setItem({ ...resp.data(), id: resp.id })
      })
      .finally(() => setLoading(false))
  }, [id])

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8">
      {loading ? (
        <div className="text-center text-blue-700 text-xl font-semibold animate-pulse">
          Cargando producto...
        </div>
      ) : item ? (
        <ItemDetail item={item} />
      ) : (
        <div className="text-center text-red-600 text-lg font-medium">
          Producto no encontrado.
        </div>
      )}
    </section>
  )
}

export default ItemDetailContainer