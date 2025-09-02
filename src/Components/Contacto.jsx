import { useForm } from "react-hook-form"

const Contacto = () => {
  const { register, handleSubmit } = useForm()

  const enviar = (data) => {
    console.log(data)
  }

  return (
    <section className="max-w-screen-md mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">Contacto</h1>

      <form
        onSubmit={handleSubmit(enviar)}
        className="flex flex-col gap-6 bg-white p-6 rounded-xl shadow-md"
      >
        <div className="flex flex-col">
          <label htmlFor="nombre" className="text-sm font-medium text-gray-700 mb-1">
            ¿Cómo te llamás?
          </label>
          <input
            id="nombre"
            type="text"
            {...register("nombre")}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ej: Matías"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
            Dirección de correo
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ej: matias@email.com"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="telefono" className="text-sm font-medium text-gray-700 mb-1">
            Teléfono
          </label>
          <input
            id="telefono"
            type="tel"
            {...register("telefono")}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ej: +598..."
          />
        </div>

        <button
          type="submit"
          className="bg-blue-700 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-900 transition"
        >
          Enviar
        </button>
      </form>
    </section>
  )
}

export default Contacto