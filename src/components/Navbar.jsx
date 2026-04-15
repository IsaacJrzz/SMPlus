import React from 'react';
import '../styles/App.css';

const Navbar = () => {
  return (
    <header className="nav-wrapper">
      <nav className="modern-nav">
        <div className="nav-logo-zone">
          <img src="/logo.png" alt="SM+" className="nav-logo-img" />
        </div>
        
        <div className="nav-tabs-wrapper">
          <a href="#inicio" className="tab-item active"><span>Inicio</span></a>
          <a href="#modulos" className="tab-item"><span>Módulos</span></a>
          <a href="#servicios" className="tab-item"><span>Servicios</span></a>
          <a href="#proyecto" className="tab-item"><span>Proyecto</span></a>
          <a href="#contacto" className="tab-item"><span>Contacto</span></a>
        </div>
      </nav>
      <div className="nav-accent-line"></div>
    </header>
  );
};

export default Navbar;