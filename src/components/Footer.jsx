import React from "react";

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="lava-lamp-bg">
        <div className="blob-footer-1"></div>
        <div className="blob-footer-2"></div>
      </div>

      <div className="footer-container">
        {/* COLUMNA 1: INFO DEL PROYECTO */}
        <div className="footer-info-col">
          <img
            src="/logo-hero.png"
            className="footer-logo-img"
            alt="M+ SaludMadrid"
          />
          <p className="footer-tagline">
            Trabajo de Fin de Grado enfocado en la digitalización y optimización
            de procesos en la salud pública mediante tecnologías web modernas.
          </p>
          <div className="footer-author-info">
            <p>
              <span>Autor:</span> Isaac Alonso & Iker Domínguez
            </p>
            <p>
              <span>Tutor:</span> Enrique Andrés
            </p>
            <p>
              <span>Grado:</span> Desarrollo de Aplicaciones Multiplataforma
            </p>
          </div>
        </div>

        {/* COLUMNA 2: MEMORIA / DOCS */}
        <div className="footer-links-col">
          <h4>Documentación</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#abstract">Resumen / Abstract</a>
            </li>
            <li>
              <a href="#analisis">Análisis de Requisitos</a>
            </li>
            <li>
              <a href="#diseno">Diseño de Interfaz (UI/UX)</a>
            </li>
            <li>
              <a href="#conclusiones">Conclusiones</a>
            </li>
          </ul>
        </div>

        {/* COLUMNA 3: RECURSOS */}
        <div className="footer-links-col">
          <h4>Recursos</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#github">Repositorio GitHub</a>
            </li>
            <li>
              <a href="#stack">Stack Tecnológico</a>
            </li>
            <li>
              <a href="#bibliografia">Bibliografía</a>
            </li>
            <li>
              <a href="#memoria">Descargar Memoria (PDF)</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2026 TFG - SM+ SaludMadrid. Desarrollado con fines académicos.
        </p>
        <p>CFPS - Davante</p>
      </div>
    </footer>
  );
};

export default Footer;
