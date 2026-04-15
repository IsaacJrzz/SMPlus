import React from 'react';
import '../styles/App.css';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contacto = () => {
  const team = [
    {
      nombre: "Isaac",
      rol: "Desarrollo Full Stack",
      img: "/isaac.jpeg",
      correo: "isaacalonsojrz@gmail.com",
      linkedin: "https://www.linkedin.com/in/isaacalonsojuarez/",
      github: "https://github.com/IsaacJrzz"
    },
    {
      nombre: "Iker",
      rol: "Desarrollo Full Stack",
      img: "/iker.png",
      correo: "ikerdc2005@gmail.com",
      linkedin: "https://www.linkedin.com/in/iker-dom%C3%ADnguez-calcerrada-423736298/",
      github: "https://github.com/dominguezz05"
    }
  ];

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-container">
        
        {/* PARTE SUPERIOR: Grid de Autores (Isaac a la izquierda, Iker a la derecha) */}
        <div className="team-container">
          <h2 className="features-title">Hablemos de <em>Innovación</em></h2>
          <p className="features-subtitle">
            Somos los autores detrás del rediseño de SM+. Si tienes dudas sobre el proyecto, escríbenos.
          </p>
          
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="member-card">
                <div className="member-photo-wrapper">
                  <img src={member.img} alt={member.nombre} className="member-photo" />
                </div>
                <div className="member-info">
                  <h3>{member.nombre}</h3>
                  <span className="member-rol">{member.rol}</span>
                  
                  <div className="member-email">
                    <FaEnvelope size={14} className="email-icon" />
                    <a href={`mailto:${member.correo}`}>{member.correo}</a>
                  </div>
                  
                  <div className="member-socials">
                    <a href={member.linkedin} target="_blank" rel="noreferrer" title="Ver LinkedIn">
                      <FaLinkedinIn size={18} />
                    </a>
                    <a href={member.github} target="_blank" rel="noreferrer" title="Ver GitHub">
                      <FaGithub size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PARTE INFERIOR: Formulario */}
        <div className="contacto-form-wrapper">
          <form className="contacto-form" onSubmit={(e) => e.preventDefault()}>
            <h3 className="form-subtitle">Envíanos un mensaje</h3>
            <div className="form-row">
              <div className="input-group">
                <input type="text" placeholder="Tu Nombre" required />
              </div>
              <div className="input-group">
                <input type="email" placeholder="Tu Email" required />
              </div>
            </div>
            <div className="input-group full-width">
              <textarea placeholder="¿En qué podemos ayudarte?" rows="4" required></textarea>
            </div>
            <div className="form-action">
              <button type="submit" className="btn-portal">Enviar Consulta</button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contacto;