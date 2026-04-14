import React from 'react';

const modulos = [
  {
    id: '01',
    title: "Salud Mental",
    desc: "Innovación principal del proyecto: test PHQ-9 y GAD-7 integrados, diario emocional con seguimiento cronológico y recursos de apoyo psicológico accesibles en todo momento.",
    icon: "◉",
    tag: "Innovación Principal",
    color: "#e30613",
    cardClass: "card-salud card-wide",
  },
  {
    id: '02',
    title: "Gestión de Citas",
    desc: "Solicitud y anulación unificada para atención primaria y especialistas.",
    icon: "◎",
    color: "#00568F",
    cardClass: "",
  },
  {
    id: '03',
    title: "Tarjeta Digital",
    desc: "Acceso offline a la TSI con información clínica relevante siempre disponible.",
    icon: "▣",
    color: "#3b82f6",
    cardClass: "",
  },
  {
    id: '04',
    title: "Historial Clínico",
    desc: "Sistema de semáforo cromático para una lectura intuitiva de tu estado de salud.",
    icon: "≋",
    color: "#10b981",
    cardClass: "",
  },
  {
    id: '05',
    title: "Recetas y Medicación",
    desc: "Recordatorios inteligentes y renovación de recetas crónicas completamente online.",
    icon: "✚",
    color: "#f59e0b",
    cardClass: "card-recetas card-wide",
  },
  {
    id: '06',
    title: "Teleconsulta",
    desc: "Videollamadas seguras y chat cifrado para comunicación directa médico-paciente.",
    icon: "⬡",
    color: "#8b5cf6",
    cardClass: "",
  },
];

const Features = () => {
  return (
    <section id="modulos" className="features-section">

      {/* Blobs de fondo — eco visual del Hero */}
      <div className="features-blobs" aria-hidden="true">
        <div className="feat-blob-a"></div>
        <div className="feat-blob-b"></div>
      </div>

      {/* Cabecera */}
      <div className="features-header">
        <span className="section-eyebrow">Ecosistema Digital</span>
        <h2 className="features-title">
          Diseñado para <em>cuidar</em> cada detalle
        </h2>
        <p className="features-subtitle">
          Seis módulos integrados que transforman la experiencia sanitaria del ciudadano madrileño.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="features-bento">
        {modulos.map((m) => (
          <div
            key={m.id}
            className={`feature-card ${m.cardClass}`}
            style={{ '--accent': m.color }}
          >
            {/* Línea accent superior (aparece en hover) */}
            <div className="card-glow-line" />

            {/* Fila superior: icono + tag + número */}
            <div className="card-top">
              <div className="card-icon-badge">
                <span className="card-icon">{m.icon}</span>
              </div>
              {m.tag && <span className="card-tag">{m.tag}</span>}
              <span className="card-number">{m.id}</span>
            </div>

            {/* Contenido */}
            <div className="card-body">
              <h3 className="card-title">{m.title}</h3>
              <p className="card-desc">{m.desc}</p>
            </div>

            {/* Barra decorativa inferior izquierda */}
            <div className="card-corner-bar" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
