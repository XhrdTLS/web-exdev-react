export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div>
          <img className="navbar__logo" src="./logo-exdev.svg" alt="logo" />
        </div>
        <div className="navbar__menu">
          <span className="navbar__menu--item">Inicio</span>
          <span className="navbar__menu--item">Proyectos</span>
          <span className="navbar__menu--item">Sobre nostros</span>
          <button className="navbar__menu--button">Log In</button>
        </div>
      </div>
    </nav>
  );
};
