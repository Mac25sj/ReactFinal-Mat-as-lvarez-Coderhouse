import { useForm } from "react-hook-form";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

const Contacto = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { modoDark } = useTheme();
  const [confirmado, setConfirmado] = useState(false);

  const enviar = (data) => {
    console.log(data);
    setConfirmado(true);
    reset();
    setTimeout(() => setConfirmado(false), 4000);
  };

  const sectionBg = modoDark ? "bg-gray-900" : "bg-white";
  const formBg = modoDark ? "bg-gray-800" : "bg-white";
  const textColor = modoDark ? "text-white" : "text-blue-800";
  const labelColor = modoDark ? "text-gray-300" : "text-gray-700";
  const inputBorder = modoDark ? "border-gray-600" : "border-gray-300";
  const inputFocus = modoDark ? "focus:ring-yellow-400" : "focus:ring-blue-500";
  const errorColor = modoDark ? "text-red-400" : "text-red-600";
  const shadowStyle = modoDark ? "shadow-md" : "shadow-lg";

  return (
    <section className={`max-w-screen-md mx-auto px-4 py-10 transition-colors duration-300 ${sectionBg}`}>
      <h1 className={`text-3xl font-bold mb-6 text-center ${textColor}`}>Contacto</h1>

      {confirmado && (
        <div className="text-center mb-6 text-green-500 font-semibold animate-pulse">
          ¡Gracias por tu mensaje! Te responderé pronto.
        </div>
      )}

      <form
        onSubmit={handleSubmit(enviar)}
        className={`flex flex-col gap-6 p-6 rounded-xl ${formBg} ${shadowStyle}`}
      >
        {/* Nombre */}
        <div className="flex flex-col">
          <label htmlFor="nombre" className={`text-sm font-medium mb-1 ${labelColor}`}>
            ¿Cómo te llamás?
          </label>
          <input
            id="nombre"
            type="text"
            {...register("nombre", { required: "Este campo es obligatorio" })}
            className={`border ${inputBorder} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${inputFocus} bg-transparent text-sm ${modoDark ? 'text-white' : 'text-black'}`}
            placeholder="Ej: Matías"
          />
          {errors.nombre && <span className={`text-xs mt-1 ${errorColor}`}>{errors.nombre.message}</span>}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className={`text-sm font-medium mb-1 ${labelColor}`}>
            Dirección de correo
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Este campo es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Correo inválido, por favor chequea"
              }
            })}
            className={`border ${inputBorder} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${inputFocus} bg-transparent text-sm ${modoDark ? 'text-white' : 'text-black'}`}
            placeholder="Ej: tualias@email.com"
          />
          {errors.email && <span className={`text-xs mt-1 ${errorColor}`}>{errors.email.message}</span>}
        </div>

        {/* Teléfono */}
        <div className="flex flex-col">
          <label htmlFor="telefono" className={`text-sm font-medium mb-1 ${labelColor}`}>
            Teléfono
          </label>
          <input
            id="telefono"
            type="tel"
            {...register("telefono", {
              required: "Este campo es obligatorio",
              minLength: {
                value: 6,
                message: "Número demasiado corto"
              }
            })}
            className={`border ${inputBorder} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${inputFocus} bg-transparent text-sm ${modoDark ? 'text-white' : 'text-black'}`}
            placeholder="Ej: +598 123456789"
          />
          {errors.telefono && <span className={`text-xs mt-1 ${errorColor}`}>{errors.telefono.message}</span>}
        </div>

        <button
          type="submit"
          className="bg-blue-700 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-900 transition"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contacto;