import React from 'react';
import '../styles/App.css';

const Hero = () => {
  return (
    <section className="hero-fullscreen">
      <div className="hero-split">
        
        {/* Lado Izquierdo - Texto y Acciones */}
        <div className="hero-left">
          <div className="hero-text-block">
            <h1 className="hero-title">
              <span className="title-sm">SALUD MENTAL</span>
              <span className="title-plus">SM+</span>
            </h1>
            <p className="hero-description">
              Innovación. Seguridad. Integración. Accede al futuro de la gestión sanitaria 
              con nuestra plataforma unificada para la Comunidad de Madrid.
            </p>
            <div className="hero-buttons">
              <button className="btn-discover">
                <span>Descubrir</span> <span className="btn-arrow"></span>
              </button>
              <a href="#contacto" className="link-connect">
                <span className="icon-discord-mock"></span> Portal Ciudadano
              </a>
            </div>
          </div>
        </div>

        {/* Lado Derecho - Imagen Conceptual */}
        <div className="hero-right">
          {/* El fondo de esta sección será la imagen conceptual sanitaria */}
          <div className="conceptual-overlay"></div>
        </div>
      </div>

      {/* Barra de Acciones Inferior (como la de referencia) */}
      <footer className="hero-bottom-bar">
        <div className="bar-container">
          
          <div className="bar-action-play">
            <button className="btn-play">
              <span className="play-icon">▶</span>
            </button>
            <span className="play-text">VER VIDEO</span>
          </div>

          <div className="bar-info-block block-1">
            <span className="block-number">01</span>
            <p className="block-text">
              Plataforma digital integrada para gestionar citas, historial clínico y bienestar mental en un solo lugar.
            </p>
          </div>

          <div className="bar-info-block block-2">
            <span className="block-number">02</span>
            <p className="block-text">
              Tecnología avanzada para unificar la atención primaria y especializada en la Comunidad de Madrid.
            </p>
          </div>

          <div className="bar-info-arrow">
            <button className="btn-next-bar">→</button>
          </div>

          <div className="bar-socials">
            {/* Usaré texto o placeholders para los iconos de redes sociales */}
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">in</a>
            <a href="#" className="social-icon">ig</a>
            <a href="#" className="social-icon">X</a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Hero;