import React from 'react';
import '../styles/App.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Encabezado de la sección */}
        <div className="about-header">
          <h2 className="features-title">Sobre el <em>Proyecto</em></h2>
          <p className="features-subtitle">
            Una iniciativa nacida para transformar la gestión de la salud mental 
            a través de la tecnología y el diseño centrado en el usuario.
          </p>
        </div>

        {/* Grid de información (puedes reusar la clase features-bento) */}
        <div className="features-bento">
          
          {/* Bloque 1: El Origen (Grande) */}
          <div className="bento-item bento-large">
            <div className="bento-content">
              <span className="bento-tag">Origen</span>
              <h3>¿Por qué SM+?</h3>
              <p>
                Este proyecto surge como Trabajo de Fin de Grado (TFG) con el objetivo 
                de modernizar la interfaz actual de SaludMadrid, enfocándonos 
                específicamente en la accesibilidad y la reducción del estrés visual 
                para pacientes de salud mental.
              </p>
            </div>
          </div>

          {/* Bloque 2: La Misión */}
          <div className="bento-item bento-medium">
            <div className="bento-content">
              <span className="bento-tag">Misión</span>
              <h3>Nuestro Objetivo</h3>
              <p>
                Centralizar herramientas críticas en una plataforma intuitiva que 
                aporte calma, seguridad y eficiencia tanto a pacientes como a profesionales.
              </p>
            </div>
          </div>

          {/* Bloque 3: Tecnología */}
          <div className="bento-item bento-small">
            <div className="bento-content">
              <span className="bento-tag">Stack</span>
              <h3>Tecnología</h3>
              <p>
                Desarrollado con React, CSS3 Moderno y un enfoque Mobile-First.
              </p>
            </div>
          </div>
        </div>

        {/* Footer del About: Un pequeño tagline académico */}
        <p className="footer-tagline" style={{ marginTop: '40px', opacity: 0.7 }}>
          Proyecto desarrollado por Isaac Alonso e Iker Domínguez. © 2024
        </p>
      </div>
    </section>
  );
};

export default About;