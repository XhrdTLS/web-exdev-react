export const Navbar = () => {
  return (
    <nav className="sticky w-screen h-28 top-0 bg-[#F1F1F1] shadow-md flex items-center justify-between z-50 px-7">
      <a href="#" className="flex items-center h-16 gap-3">
        <div className="flex items-center">
          <img src="./exdev-logo.svg" alt="logo" />
        </div>
        <span className="imaginotipo-text text-3xl font-bold">ExDev</span>
      </a>
      <ul className="flex gap-9 justify-center items-center font-medium text-lg">
        <li>
          <a
            href="#"
            className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#A225C2] to-[#01B7CD] hover:border-b-2 border-rose-800"
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#A225C2] to-[#01B7CD] hover:border-b-2 border-rose-800 "
          >
            Proyectos
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#A225C2] to-[#01B7CD] hover:border-b-2 border-rose-800 "
          >
            Contacto
          </a>
        </li>
      </ul>
      <div className="flex items-center">
        <button className="py-2 px-8 rounded-xl bg-gradient-to-r from-[#A225C2] to-[#01B7CD] text-white hover:scale-105 ease-in duration-100">
          Iniciar Sesión
        </button>
      </div>
    </nav>
  );
};
