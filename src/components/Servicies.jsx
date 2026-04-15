import React from 'react';
import '../styles/App.css';

const Servicios = () => {
  const serviciosData = [
    {
      title: "Gestión de Citas",
      desc: "Acceso rápido y simplificado para programar consultas con especialistas en salud mental.",
      icon: "📅"
    },
    {
      title: "Telemedicina",
      desc: "Plataforma de videoconsulta segura para reducir desplazamientos y estrés innecesario.",
      icon: "💻"
    },
    {
      title: "Historial Digital",
      desc: "Consulta tus informes y medicación de forma centralizada y con total privacidad.",
      icon: "📄"
    }
  ];

  return (
    <section id="servicios" className="services-section">
      <div className="container">
        <div className="services-header">
          <h2 className="features-title">Nuestros <em>Servicios</em></h2>
          <p className="features-subtitle">
            Soluciones digitales diseñadas para facilitar el acceso a la asistencia sanitaria.
          </p>
        </div>

        <div className="services-simple-grid">
          {serviciosData.map((ser, index) => (
            <div key={index} className="service-simple-card">
              <div className="service-icon-box">{ser.icon}</div>
              <h3>{ser.title}</h3>
              <p>{ser.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;