import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { guitarproductos } from "../firebase/config";
import { useTheme } from "../context/ThemeContext";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { modoDark } = useTheme();

  useEffect(() => {
    const docRef = doc(guitarproductos, "productos", id);
    getDoc(docRef)
      .then((resp) => {
        setItem({ ...resp.data(), id: resp.id });
      })
      .finally(() => setLoading(false));
  }, [id]);

  const bgColor = modoDark ? "bg-gray-900" : "bg-white";
  const loadingColor = modoDark ? "text-yellow-300" : "text-blue-700";
  const errorColor = modoDark ? "text-red-400" : "text-red-600";

  return (
    <section className={`max-w-screen-xl mx-auto px-4 py-8 transition-colors duration-300 ${bgColor}`}>
      {loading ? (
        <div className={`text-center text-xl font-semibold animate-pulse ${loadingColor}`}>
          Cargando producto...
        </div>
      ) : item ? (
        <ItemDetail item={item} />
      ) : (
        <div className={`text-center text-lg font-medium ${errorColor}`}>
          Producto no encontrado.
        </div>
      )}
    </section>
  );
};

export default ItemDetailContainer;