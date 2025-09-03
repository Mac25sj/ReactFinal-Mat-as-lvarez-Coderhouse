import ItemDetailContainer from "./Components/ItemDetailContainer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Carrito from "./Components/Carrito";
import Checkout from "./Components/Checkout";
import ItemListContainer from "./Components/ItemListContainer";
import Footer from "./Components/footer";
import { FaWhatsapp } from "react-icons/fa";



function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>

          <Navbar />

          <Routes>
            //<Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
          <a
  href="https://wa.me/598098695029" // Reemplazá con tu número real
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105"
>
  <FaWhatsapp className="text-2xl" />
</a>
          <Footer/>
          
        </BrowserRouter>

      </CartProvider>
    </div>
  );
}

export default App;