import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className="max-w-screen-xl mx-auto px-6">
            <h1 className="mt-8">Carrito</h1>

            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <br />
                        <h3>{prod.titulo}</h3>
                        <p>Precio unit: ${prod.precio}</p>
                        <p>Precio total: ${prod.precio * prod.cantidad}</p>
                        <p>Cant: {prod.cantidad}</p>
                        <br />
                    </div>
                ))
            }

            {
                carrito.length > 0 ?
                    <>
                        <h2>Precio total: ${precioTotal()}</h2>
                        <button onClick={handleVaciar}>Vaciar</button>
                        <Link to="/checkout">Finalizar compra 🎸🎸</Link>
                    </> :
                    <h2>Tu carrito está más ligero que una nota músical al viento! Añade crea una sinfonía de compras. 🛒🎶”</h2>
            }

        </div>
    )
}

export default Carrito