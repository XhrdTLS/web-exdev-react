function Navbar() {
  return (
    <nav className="relative w-full h-full bg-slate-200 flex items-center justify-around">
      <div>
        <img src="" alt="" />
      </div>
      <ul className="flex gap-9">
        <li>Inicio</li>
        <li>Proyectos</li>
        <li>Contacto</li>
      </ul>
      <div className="flex items-center">
        <button className="py-2 px-8 rounded-xl bg-gradient-to-r from-purple-600  via-purple-700 to-blue-500 text-white hover:scale-105 ease-in-out duration-100">
          Iniciar Sesión
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
