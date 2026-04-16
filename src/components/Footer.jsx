import React, { useState } from "react";

// ... (MODALS se mantiene igual que en tu código) ...

const MODALS = {
  // Todo el contenido de MODALS se mantiene igual, no necesita cambios de ruta
  abstract: { /* ... */ },
  analisis: { /* ... */ },
  diseno: { /* ... */ },
  conclusiones: { /* ... */ },
  stack: { /* ... */ },
  bibliografia: { /* ... */ },
};

const Modal = ({ id, onClose }) => {
  const data = MODALS[id];
  if (!data) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: 16,
          width: "100%",
          maxWidth: 600,
          maxHeight: "80vh",
          overflowY: "auto",
          boxShadow: "0 8px 40px rgba(0,86,143,0.15)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.25rem 1.5rem 1rem",
            borderBottom: "0.5px solid #e0e0e0",
            position: "sticky",
            top: 0,
            background: "#fff",
            borderRadius: "16px 16px 0 0",
            zIndex: 1,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 17,
              fontWeight: 600,
              color: "#00568F",
            }}
          >
            {data.title}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 20,
              color: "#888",
              lineHeight: 1,
              padding: "2px 6px",
              borderRadius: 6,
            }}
          >
            ×
          </button>
        </div>
        <div
          style={{
            padding: "1.25rem 1.5rem 1.5rem",
            fontSize: 14,
            color: "#333",
          }}
        >
          {data.content}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const open = (id) => (e) => {
    e.preventDefault();
    setActiveModal(id);
  };

  return (
    <>
      <footer className="modern-footer">
        <div className="lava-lamp-bg">
          <div className="blob-footer-1"></div>
          <div className="blob-footer-2"></div>
        </div>

        <div className="footer-container">
          <div className="footer-info-col">
            {/* CORRECCIÓN: Quitamos la / inicial de logo-hero.png */}
            <img
              src="logo-hero.png" 
              className="footer-logo-img"
              alt="M+ SaludMadrid"
            />
            <p className="footer-tagline">
              Trabajo de Fin de Grado enfocado en la digitalización y
              optimización de procesos en la salud pública mediante tecnologías
              web modernas.
            </p>
            <div className="footer-author-info">
              <p>
                <span>Autor:</span> Isaac Alonso & Iker Domínguez
              </p>
              <p>
                <span>Tutor:</span> Enrique Andrés
              </p>
              <p>
                <span>Grado:</span> Desarrollo de Aplicaciones Multiplataforma
              </p>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Documentación</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#abstract" onClick={open("abstract")}>
                  Resumen / Abstract
                </a>
              </li>
              <li>
                <a href="#analisis" onClick={open("analisis")}>
                  Análisis de Requisitos
                </a>
              </li>
              <li>
                <a href="#diseno" onClick={open("diseno")}>
                  Diseño de Interfaz (UI/UX)
                </a>
              </li>
              <li>
                <a href="#conclusiones" onClick={open("conclusiones")}>
                  Conclusiones
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Recursos</h4>
            <ul className="footer-links-list">
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  Repositorio GitHub
                </a>
              </li>
              <li>
                <a href="#stack" onClick={open("stack")}>
                  Stack Tecnológico
                </a>
              </li>
              <li>
                <a href="#bibliografia" onClick={open("bibliografia")}>
                  Bibliografía
                </a>
              </li>
              <li>
                {/* CORRECCIÓN: Quitamos la / inicial de memoria.pdf */}
                <a href="memoria.pdf" download>
                  Descargar Memoria (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2026 TFG - SM+ SaludMadrid. Desarrollado con fines
            académicos.
          </p>
          <p>CFPS - Davante</p>
        </div>
      </footer>

      {activeModal && (
        <Modal id={activeModal} onClose={() => setActiveModal(null)} />
      )}
    </>
  );
};

export default Footer;