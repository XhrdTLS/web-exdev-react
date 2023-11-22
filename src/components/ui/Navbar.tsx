import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const hamburgerActive = isOpen ? "fas fa-times" : "fas fa-bars";
  const menuActive = isOpen ? "navbar__menu--active" : "";

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div>
          <img className="navbar__logo" src="./logo.svg" alt="logo" />
        </div>
        <ul className={`navbar__menu ${menuActive}`}>
          <NavLink to="/home" className="navbar__item">
            Inicio
          </NavLink>
          <NavLink to="/home" className="navbar__item">
            Proyectos
          </NavLink>
          <NavLink to="/home" className="navbar__item">
            Sobre nostros
          </NavLink>
        </ul>
        <div className="navbar__toggle" onClick={handleToggle}>
          <i className={`${hamburgerActive} navbar__hamburger`}></i>
        </div>
      </div>
    </nav>
  );
};
