import React from 'react';
import '../styles/App.css';

const Hero = () => {
  return (
    <section className="hero-fullscreen">
      {/* CAPA ANIMADA DE FONDO TIPO LÁMPARA DE LAVA */}
      <div className="lava-lamp-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="hero-container">
        {/* LADO IZQUIERDO: TEXTO Y LOGO */}
        <div className="hero-content-side">
        <span className="title-sm">El futuro de la gestión sanitaria</span>
        
        <div className="hero-logo-wrapper">
            <img src="/logo-hero.png" alt="Logo SM+" className="hero-logo-img" />
        </div>
            <p className="hero-description">
                Innovación tecnológica para la salud mental. Una plataforma 
                diseñada para aportar calma, seguridad y eficiencia en cada proceso.
            </p>

            <div className="hero-buttons">
                <button className="btn-portal">Portal Paciente</button>
                <a href="#modulos" className="btn-discover">Descubrir Módulos</a>
            </div>
        </div>

        {/* LADO DERECHO: MOCKUP DE LA APP */}
        <div className="hero-mockup-side">
          <div className="phone-float-wrapper">
            {/* BISEL DEL TELÉFONO */}
            <div className="phone-bezel">
              {/* Zona superior: Dynamic Island */}
              <div className="phone-notch">
                <div className="phone-dynamic-island"></div>
              </div>

              {/* Pantalla (iframe escalado) */}
              <div className="phone-screen-clip">
                <iframe
                  src="/SaludMadrid_Prototipo_v3.html"
                  className="phone-embed"
                  title="SaludMadrid+ App"
                  scrolling="no"
                  frameBorder="0"
                />
              </div>

              {/* Barra home inferior */}
              <div className="phone-home-bar"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;