import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Inicio
            </a>
          </li>
          <li className="nav-item" id="link-solicitar">
            <a href="/solicitudtarjeta" className="nav-link">
              SOLICITA TU TARJETA
            </a>
          </li>
          <li className="nav-item" id="link-solicitar">
            <a href="/solicitudsorteo" className="nav-link">
              INSCRIPCION AL SORTEO
            </a>
          </li>
          <li className="nav-item" id="link-solicitar">
            <a href="/comerciosadheridos" className="nav-link">
              Listado de Comercios
            </a>
          </li>
          <li className="nav-item">
            <a href="#course" className="nav-link">
              Acerca Del Club
            </a>
          </li>
          <li className="nav-item">
            <a href="#features" className="nav-link">
              Secciones
            </a>
          </li>
          <li className="nav-item">
            <a href="#resources" className="nav-link">
              Sorteos
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
