import React from 'react';
import '../styles/App.css';

const About = () => {
  const commitmentData = [
    { 
      title: "Accesibilidad", 
      text: "Rediseño basado en la reducción de la carga cognitiva, facilitando la navegación para usuarios en crisis o con estrés visual." 
    },
    { 
      title: "Interfaz SM+", 
      text: "Evolución de la plataforma tradicional hacia un ecosistema digital intuitivo, centralizando servicios médicos clave." 
    },
    { 
      title: "Salud Mental", 
      text: "Enfoque prioritario en la calma y la seguridad, eliminando elementos distractores que generan ansiedad en el paciente." 
    }
  ];

  const differenceData = [
    { 
      title: "Validación Real", 
      text: "Proyecto respaldado por una investigación exhaustiva sobre las carencias del sistema sanitario actual en Madrid." 
    },
    { 
      title: "Diseño Atómico", 
      text: "Estructura modular escalable que permite una experiencia consistente tanto en móvil como en escritorio." 
    },
    { 
      title: "Impacto Social", 
      text: "Buscamos democratizar el acceso a la salud mental, haciendo que la tecnología sea un puente y no una barrera." 
    }
  ];

  return (
    <section id="proyecto" className="about-section">
      {/* FILA 1: EL COMPROMISO ACADÉMICO */}
      <div className="about-row dark-row">
        <div className="about-content">
          <h2 className="section-title">Nuestro <span>Compromiso</span></h2>
          <div className="about-grid">
            {commitmentData.map((item, index) => (
              <div key={index} className="about-card">
                <div className="icon-sphere blue"></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FILA 2: BANNER DEL TFG (Vuestra Autoría) */}
      <div className="about-banner">
        <div className="banner-overlay">
          <span className="banner-tag">TRABAJO DE FIN DE GRADO</span>
          <h2 className="banner-title">Salud Madrid Plus</h2>
          <p className="banner-desc">Innovación tecnológica aplicada al bienestar ciudadano.</p>
          <div className="banner-line"></div>
          <p className="banner-author">Desarrollado por Isaac Alonso e Iker Domínguez</p>
        </div>
      </div>

      {/* FILA 3: LA DIFERENCIA DEL PROYECTO */}
      <div className="about-row light-row">
        <div className="about-content">
          <h2 className="section-title">¿Por qué <span>SM+</span>?</h2>
          <div className="about-grid">
            {differenceData.map((item, index) => (
              <div key={index} className="about-card">
                <div className="icon-sphere red"></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;