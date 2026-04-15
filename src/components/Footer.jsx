import React, { useState } from "react";

const MODALS = {
  abstract: {
    title: "Resumen ejecutivo",
    content: (
      <div>
        <p style={{ marginBottom: "1rem", lineHeight: 1.7 }}>
          <strong>SM+</strong> (SaludMadrid+) es una propuesta de diseño y
          planificación de aplicación móvil multiplataforma que da respuesta a
          la fragmentación de los servicios digitales de salud de la Comunidad
          de Madrid.
        </p>
        <p style={{ marginBottom: "1rem", lineHeight: 1.7 }}>
          Ofrece en una única interfaz las funcionalidades de{" "}
          <strong>Cita Sanitaria</strong> y{" "}
          <strong>Tarjeta Sanitaria Virtual</strong>, e incorpora un módulo de{" "}
          <strong>Salud Mental</strong> inédito en las herramientas sanitarias
          públicas madrileñas.
        </p>
        <p style={{ lineHeight: 1.7 }}>
          La solución se sustenta en que el 85% de la población española mayor
          de 16 años utiliza smartphone a diario <em>(Statista, 2024)</em> y la
          Comunidad de Madrid cuenta con 6,9 millones de tarjetas sanitarias
          activas. SM+ cierra la brecha de equidad en salud mental ofreciendo
          herramientas gratuitas validadas clínicamente (PHQ-9 y GAD-7) a toda
          la población, en cumplimiento del RGPD, Ley 41/2002 y Esquema Nacional
          de Seguridad (Real Decreto 311/2022).
        </p>
      </div>
    ),
  },
  analisis: {
    title: "Análisis de requisitos",
    content: (
      <div>
        <p style={{ marginBottom: "1rem", lineHeight: 1.7 }}>
          El análisis identifica las carencias funcionales de las dos
          aplicaciones actuales de la Comunidad de Madrid:{" "}
          <strong>Cita Sanitaria</strong> (3,5/5 en Play Store, 23.000 reseñas)
          y <strong>Tarjeta Sanitaria Virtual</strong> (2,0/5, 8.000 reseñas).
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              background: "#E0EDF8",
              borderRadius: 8,
              padding: "0.75rem",
              borderLeft: "3px solid #00568F",
            }}
          >
            <strong style={{ color: "#00568F", fontSize: 13 }}>
              Fragmentación estructural
            </strong>
            <p
              style={{
                fontSize: 12,
                marginTop: 4,
                color: "#004070",
                lineHeight: 1.5,
              }}
            >
              Dos apps independientes sin integración funcional entre ellas.
            </p>
          </div>
          <div
            style={{
              background: "#EEEAFD",
              borderRadius: 8,
              padding: "0.75rem",
              borderLeft: "3px solid #6c5ce7",
            }}
          >
            <strong style={{ color: "#4a3aad", fontSize: 13 }}>
              Sin historial clínico
            </strong>
            <p
              style={{
                fontSize: 12,
                marginTop: 4,
                color: "#5a49c7",
                lineHeight: 1.5,
              }}
            >
              El ciudadano no puede acceder a diagnósticos ni prescripciones
              desde el móvil.
            </p>
          </div>
          <div
            style={{
              background: "#E3F5F5",
              borderRadius: 8,
              padding: "0.75rem",
              borderLeft: "3px solid #00A9A5",
            }}
          >
            <strong style={{ color: "#085041", fontSize: 13 }}>
              Sin salud mental
            </strong>
            <p
              style={{
                fontSize: 12,
                marginTop: 4,
                color: "#0F6E56",
                lineHeight: 1.5,
              }}
            >
              Ninguna app pública madrileña contempla recursos de bienestar
              emocional.
            </p>
          </div>
          <div
            style={{
              background: "#FDECEA",
              borderRadius: 8,
              padding: "0.75rem",
              borderLeft: "3px solid #E30613",
            }}
          >
            <strong style={{ color: "#b3050f", fontSize: 13 }}>
              Accesibilidad limitada
            </strong>
            <p
              style={{
                fontSize: 12,
                marginTop: 4,
                color: "#b3050f",
                lineHeight: 1.5,
              }}
            >
              Sin alto contraste, texto adaptable ni compatibilidad con lectores
              de pantalla.
            </p>
          </div>
        </div>
        <p style={{ lineHeight: 1.7, fontSize: 13, color: "#555" }}>
          SM+ responde con 6 módulos integrados: gestión de citas, tarjeta
          sanitaria digital, historial clínico, salud mental, recetas y
          teleconsulta.
        </p>
      </div>
    ),
  },
  diseno: {
    title: "Diseño de interfaz (UI/UX)",
    content: (
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            marginBottom: "1.25rem",
            lineHeight: 1.7,
            textAlign: "left",
          }}
        >
          El diseño de SM+ sigue la metodología de diseño centrado en el usuario
          (ISO 9241-210), con conformidad <strong>WCAG 2.1 nivel AA</strong> y
          sistema de componentes basado en <strong>Material Design 3</strong>.
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          {[
            "Login",
            "Dashboard",
            "Citas",
            "TSI",
            "Bienestar",
            "Historial",
            "Perfil",
          ].map((s) => (
            <div
              key={s}
              style={{
                background: "#E0EDF8",
                border: "1px solid #00568F",
                borderRadius: 8,
                padding: "6px 14px",
                fontSize: 12,
                fontWeight: 500,
                color: "#00568F",
              }}
            >
              {s}
            </div>
          ))}
        </div>
        <p
          style={{
            fontSize: 13,
            color: "#555",
            lineHeight: 1.6,
            textAlign: "left",
          }}
        >
          Paleta institucional: <code>#003DA5</code> · <code>#0072CE</code> ·{" "}
          <code>#00A9A5</code> · <code>#7C3AED</code>. Navegación en barra
          inferior con cinco accesos directos y profundidad máxima de 3 niveles.
          Los mockups de alta fidelidad están disponibles en el Anexo IV de la
          memoria.
        </p>
      </div>
    ),
  },
  conclusiones: {
    title: "Conclusiones",
    content: (
      <div>
        <p style={{ marginBottom: "1rem", lineHeight: 1.7 }}>
          SM+ (SaludMadrid+) ha alcanzado los tres objetivos específicos
          planteados: identificar las carencias de las apps actuales, proponer
          un diseño multiplataforma con el módulo de Salud Mental como elemento
          diferenciador, y demostrar la viabilidad técnica, económica y legal de
          la propuesta.
        </p>
        <p style={{ marginBottom: "1rem", lineHeight: 1.7 }}>
          La conclusión principal es que el problema real no es la carencia de
          servicios sino su <strong>dispersión</strong>. La unificación en una
          sola interfaz reduce la carga administrativa sobre los centros de
          salud y el módulo de Salud Mental responde a una necesidad de{" "}
          <strong>equidad social</strong> antes que tecnológica.
        </p>
        <div
          style={{
            background: "#E3F5F5",
            borderRadius: 10,
            padding: "1rem",
            borderLeft: "4px solid #00A9A5",
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: "#085041",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            <strong>Líneas futuras:</strong> IA para triaje inteligente de
            síntomas · conexión con wearables · gamificación del módulo de
            bienestar · interfaz espejo para profesionales sanitarios · pilotaje
            con usuarios reales.
          </p>
        </div>
      </div>
    ),
  },
  stack: {
    title: "Stack tecnológico",
    content: (
      <div>
        {[
          {
            layer: "Frontend",
            color: "#00568F",
            bg: "#E0EDF8",
            border: "#00568F",
            techs: [
              "React Native + Expo",
              "Redux Toolkit",
              "Material Design 3",
              "React Navigation",
            ],
          },
          {
            layer: "Backend",
            color: "#085041",
            bg: "#D0F0EF",
            border: "#00A9A5",
            techs: [
              "Node.js · microservicios",
              "API REST",
              "Cl@ve PIN · OIDC",
              "HL7 FHIR R4",
              "Firebase FCM",
            ],
          },
          {
            layer: "Base de datos",
            color: "#4a3aad",
            bg: "#EEEAFD",
            border: "#6c5ce7",
            techs: [
              "PostgreSQL · datos clínicos",
              "MongoDB · bienestar · chat",
            ],
          },
          {
            layer: "Infraestructura",
            color: "#085041",
            bg: "#E3F5F5",
            border: "#00A9A5",
            techs: [
              "Docker · contenedores",
              "Microsoft Azure · ENS alto",
              "GitHub Actions · CI/CD",
              "TLS 1.3 · AES-256",
            ],
          },
        ].map(({ layer, color, bg, border, techs }) => (
          <div key={layer} style={{ marginBottom: "0.75rem" }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 6,
              }}
            >
              {layer}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {techs.map((t) => (
                <span
                  key={t}
                  style={{
                    background: bg,
                    border: `1px solid ${border}`,
                    borderRadius: 20,
                    padding: "4px 12px",
                    fontSize: 12,
                    fontWeight: 500,
                    color,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  bibliografia: {
    title: "Bibliografía principal",
    content: (
      <div style={{ fontSize: 12, lineHeight: 1.8 }}>
        {[
          "Comunidad de Madrid (2024). Memoria anual del SERMAS 2024.",
          "Defensor del Pueblo (2020). Informe anual: atención a la salud mental en España.",
          "HL7 International (2023). HL7 FHIR R4: Fast Healthcare Interoperability Resources.",
          "Ministerio de Sanidad (2021). Plan de digitalización del SNS 2021-2026.",
          "Ministerio de Sanidad (2023). Informe anual del Sistema Nacional de Salud.",
          "NHS England (2024). NHS App: Features and usage statistics 2024.",
          "Osakidetza (2023). Memoria anual: Transformación digital.",
          "OMS (2022). Informe mundial sobre salud mental: Transformar la salud mental para todos.",
          "Real Decreto 311/2022. Esquema Nacional de Seguridad. BOE núm. 106.",
          "Reglamento (UE) 2016/679 (RGPD). Protección de datos personales.",
          "Statista (2024). mHealth — Statistics and facts.",
          "W3C (2018). Web Content Accessibility Guidelines (WCAG) 2.1.",
        ].map((ref, i) => (
          <p
            key={i}
            style={{
              paddingLeft: "1.2rem",
              textIndent: "-1.2rem",
              marginBottom: "0.4rem",
              color: "var(--color-text-secondary, #555)",
            }}
          >
            {ref}
          </p>
        ))}
      </div>
    ),
  },
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
            <img
              src="/logo-hero.png"
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
                <a href="/memoria.pdf" download>
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
