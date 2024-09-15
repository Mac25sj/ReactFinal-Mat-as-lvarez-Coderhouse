import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { guitarproductos } from '../firebase/config';

const Checkout = () => {


    const [guitarid, setguitarid] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(guitarproductos, "ventas");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setguitarid(doc.id);
                vaciarCarrito();
            })

    }

    if (guitarid) {
        return (
            <div className="">
                <h1 className="mt-8">Que disfrutes tu producto tanto como disfrutas la música</h1>
                <p>Número de seguimiento: {guitarid}</p>
            </div>
        )
    }

    return (
        <div className="container">
            <h1 className="main-title">Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>

                <input type="text" placeholder="❓¿Como te llamas? " {...register("nombre")} />
                <input type="email" placeholder="📧e-mail" {...register("email")} />
                <input type="phone" placeholder="📱Número" {...register("telefono")} />

                <button className="bg-green-500" type="submit">Confirmar Compra</button>

            </form>
        </div>
    )
}

export default Checkout