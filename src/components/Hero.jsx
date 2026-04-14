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
          <div className="mockup-container">
            <div className="mockup-img-wrapper">
              {/* Aquí irá tu imagen real: <img src="/mockup.png" alt="App Mockup" /> */}
              <p className="mockup-text-placeholder">Tu Mockup Aquí</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;