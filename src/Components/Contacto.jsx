import { useForm } from "react-hook-form";

const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

  return (

    <div className="max-w-screen-xl mx-auto px-6">
        <h1 className="mt-8">Contacto</h1>
        <form className="flex flex-col gap-2 items-start" onSubmit={handleSubmit(enviar)}>

            <input type="text" placeholder="¿Como te llamás?" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu dirección de correo" {...register("email")} />
            <input type="phone" placeholder="A donde te escribo" {...register("telefono")} />

            <button className="enviar" type="submit">Enviar</button>

        </form>
    </div>

  )
}

export default Contacto