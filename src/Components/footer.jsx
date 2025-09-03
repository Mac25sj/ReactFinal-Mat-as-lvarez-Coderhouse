import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { modoDark } = useTheme();

  const bgColor = modoDark ? "bg-gray-900" : "bg-blue-100";
  const textColor = modoDark ? "text-gray-100" : "text-blue-900";
  const subTextColor = modoDark ? "text-gray-400" : "text-gray-600";
  const linkHover = modoDark ? "hover:bg-blue-400 hover:text-white" : "hover:bg-blue-700 hover:text-white";
  const borderTop = modoDark ? "border-t border-gray-700" : "";

  return (
    <footer className={`${bgColor} ${textColor} py-12 md:py-20 mt-auto ${borderTop} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left min-h-[300px]">
        
        {/* Marca */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">GuitarCoder 🎸</h3>
          <p className={`text-sm ${subTextColor}`}>
            Desarrollado con React, Vite y Firebase
          </p>
        </div>

        {/* Enlaces */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <a
            href="https://github.com/Mac25sj"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-sm px-3 py-2 rounded transition-colors duration-200 ${linkHover}`}
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>

          <a
            href="mailto:mac25sj@gmail.com"
            className={`flex items-center gap-2 text-sm px-3 py-2 rounded transition-colors duration-200 ${linkHover}`}
          >
            <MdEmail className="text-lg" />
            Correo
          </a>

          <a
            href="https://www.linkedin.com/in/mat%C3%ADas%C3%A1lvarezclara/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-sm px-3 py-2 rounded transition-colors duration-200 ${linkHover}`}
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <div className={`text-xs ${subTextColor}`}>
          &copy; {new Date().getFullYear()} Matías Álvarez. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;