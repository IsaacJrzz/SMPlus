import React from 'react';
import '../styles/App.css';

const Servicios = () => {
  const serviciosData = [
    {
      title: "Gestión de Citas",
      desc: "Optimización de agendas mediante triaje inteligente para reducir la carga administrativa y mejorar la atención.",
      // Icono de Calendario Técnico
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2zM8 14h2M8 18h2M14 14h2M14 18h2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    {
      title: "Telemedicina",
      desc: "Plataforma de videoconsulta cifrada de extremo a extremo, garantizando la privacidad absoluta del paciente.",
      // Icono de Video/Conectividad
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    {
      title: "Historial Digital",
      desc: "Centralización de datos clínicos y evolución del paciente bajo estándares de ciberseguridad sanitaria.",
      // Icono de Documento/Seguridad
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
    }
  ];

  return (
    <section id="servicios" className="services-section">
      <div className="container">
        <div className="services-header">
          <h2 className="features-title">Nuestros <em>Servicios</em></h2>
          <p className="features-subtitle">
            Sistemas avanzados para una infraestructura sanitaria de alta eficiencia.
          </p>
        </div>

        <div className="services-simple-grid">
          {serviciosData.map((ser, index) => (
            <div key={index} className="service-simple-card">
              <div className="service-icon-box">
                {ser.icon}
              </div>
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