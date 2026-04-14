import React from 'react';

const Features = () => {
  const modulos = [
    { title: "Gestión de Citas", desc: "Solicitud y anulación unificada para atención primaria y especialistas." },
    { title: "Tarjeta Digital", desc: "Acceso offline a la TSI con integración de información clínica relevante." },
    { title: "Salud Mental", desc: "Innovación principal: Test PHQ-9/GAD-7 y diario emocional integrado." },
    { title: "Historial Clínico", desc: "Visualización de análisis con sistema de semáforo cromático de salud." },
    { title: "Recetas y Medicación", desc: "Recordatorios inteligentes y renovación de recetas crónicas online." },
    { title: "Teleconsulta", desc: "Videollamadas seguras y chat cifrado médico-paciente." }
  ];

  return (
    <section id="modulos" className="features-section">
      <div className="features-header">
        <h2>Un ecosistema sanitario completo</h2>
        <p>Seis módulos diseñados para transformar la experiencia del ciudadano.</p>
      </div>
      <div className="features-grid">
        {modulos.map((item, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">✓</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;