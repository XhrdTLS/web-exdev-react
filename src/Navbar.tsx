import Logo from "../public/exdev-logo.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="fixed w-full h-28 top-0 bg-[#F1F1F1] shadow-md flex items-center justify-between px-6 z-50">
      <div className="flex items-center h-16 gap-3">
        <div className=" flex items-center">
          <img src={Logo} className="h-full" alt="logo" />
        </div>
        <span className="imaginotipo-text">exdev</span>
      </div>
      <ul className="flex gap-9">
        <li>
          <a
            href="#"
            className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#A225C2] to-[#01B7CD] hover:border-b-2 border-rose-800 pb-10 font-medium text-lg"
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#A225C2] to-[#01B7CD] hover:border-b-2 border-rose-800 pb-10 font-medium text-lg"
          >
            Proyectos
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#A225C2] to-[#01B7CD] hover:border-b-2 border-rose-800 pb-10 font-medium text-lg"
          >
            Contacto
          </a>
        </li>
      </ul>
      <div className="flex items-center mr-6">
        <button className="py-2 px-8 rounded-xl bg-gradient-to-r from-[#A225C2] to-[#01B7CD] text-white hover:scale-105 ease-in-out duration-100">
          Iniciar Sesión
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
