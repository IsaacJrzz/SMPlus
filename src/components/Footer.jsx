import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <h3 style={{ color: 'var(--primary)' }}>SM+</h3>
          <p>Innovación en Salud Pública Digital.</p>
        </div>
        
        <div className="footer-links">
          <h4>Proyecto</h4>
          <ul>
            <li><a href="#features">Módulos</a></li>
            <li><a href="#stack">Tecnologías</a></li>
            <li><a href="#doc">Documentación</a></li>
          </ul>
        </div>

        <div className="footer-legal">
          <h4>Normativa</h4>
          <ul>
            <li>RGPD / LOPDGDD</li>
            <li>Esquema Nacional de Seguridad</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 SM+ Salud Madrid Plus. Proyecto con fines académicos - MEDAC.</p>
      </div>
    </footer>
  );
};

export default Footer;