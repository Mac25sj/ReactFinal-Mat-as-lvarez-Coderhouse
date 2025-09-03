import Item from "./Item";
import { toCapital } from "../../helpers/toCapital";
import { useTheme } from "../context/ThemeContext";

const ItemList = ({ productos, titulo }) => {
  const { modoDark } = useTheme();

  const sectionBg = modoDark ? 'bg-gray-800' : 'bg-blue-100';
  const titleColor = modoDark ? 'text-white' : 'text-blue-900';
  const shadowStyle = modoDark ? 'shadow-md' : 'shadow-lg';

  return (
    <section className={`w-full px-6 py-8 lg:px-12 xl:px-20 ${sectionBg} rounded-xl ${shadowStyle} transition-colors duration-300`}>
      <h2 className={`text-2xl sm:text-3xl font-bold mb-6 text-center ${titleColor}`}>
        {toCapital(titulo)}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
        {productos.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </section>
  );
};

export default ItemList;