import LogoExdev from "/logo-exdev.svg";

export const Navbar = () => {
  return (
    <nav className="sticky w-full h-28 top-0 bg-[#F1F1F1] shadow-md flex items-center justify-between z-50 px-7">
      <a href="#">
        <picture>
          <img src={LogoExdev} alt="logo" className="w-52" />
        </picture>
      </a>
      <ul className="flex gap-20 justify-center items-center font-medium text-lg">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Proyectos</a>
        </li>
        <li>
          <a href="#">Contacto</a>
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
