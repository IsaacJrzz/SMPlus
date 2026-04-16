import React, { useState } from 'react';
import '../styles/App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="nav-wrapper">
      <nav className="modern-nav">
        <div className="nav-logo-zone">
<img src={`${import.meta.env.BASE_URL}logo.png`} alt="SM+" className="nav-logo-img" />        </div>

        {/* Botón Hamburguesa Simple */}
        <button 
          className={`nav-toggle ${isOpen ? 'open' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Desplegable limpio */}
        <div className={`nav-tabs-wrapper ${isOpen ? 'nav-open' : ''}`}>
          <a href="#inicio" className="tab-item" onClick={() => setIsOpen(false)}><span>Inicio</span></a>
          <a href="#modulos" className="tab-item" onClick={() => setIsOpen(false)}><span>Módulos</span></a>
          <a href="#servicios" className="tab-item" onClick={() => setIsOpen(false)}><span>Servicios</span></a>
          <a href="#proyecto" className="tab-item" onClick={() => setIsOpen(false)}><span>Proyecto</span></a>
          <a href="#contacto" className="tab-item" onClick={() => setIsOpen(false)}><span>Contacto</span></a>
        </div>
      </nav>
      <div className="nav-accent-line"></div>
    </header>
  );
};

export default Navbar;