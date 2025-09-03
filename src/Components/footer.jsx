import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12 md:py-20 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left min-h-[300px]">
        
        {/* Marca */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">GuitarCoder 🎸</h3>
          <p className="text-sm text-gray-400">
            Desarrollado con React, Vite y Firebase
          </p>
        </div>

        {/* Enlaces */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <a
            href="https://github.com/Mac25sj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm px-3 py-2 rounded transition-colors duration-200 hover:bg-blue-400 hover:text-white"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>

          <a
            href="mailto:mac25sj@gmail.com"
            className="flex items-center gap-2 text-sm px-3 py-2 rounded transition-colors duration-200 hover:bg-blue-400 hover:text-white"
          >
            <MdEmail className="text-lg" />
            Correo
          </a>

          <a
            href="https://www.linkedin.com/in/mat%C3%ADas%C3%A1lvarezclara/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm px-3 py-2 rounded transition-colors duration-200 hover:bg-blue-400 hover:text-white"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Matías Álvarez. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;