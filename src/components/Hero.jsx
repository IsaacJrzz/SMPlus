import React, { useState, useEffect, useRef, useCallback } from "react";
import "../styles/App.css";

const Hero = () => {
  const [interacted, setInteracted] = useState(false);
  const [showRipple, setShowRipple] = useState(false);
  const rippleTimerRef = useRef(null);
  const inactivityTimerRef = useRef(null);

  // Ripple loop: se ejecuta sólo cuando NO se ha interactuado
  useEffect(() => {
    if (interacted) {
      clearTimeout(rippleTimerRef.current);
      return;
    }
    const schedule = () => {
      rippleTimerRef.current = setTimeout(() => {
        setShowRipple(true);
        setTimeout(() => setShowRipple(false), 1200);
        schedule();
      }, 4000);
    };
    schedule();
    return () => clearTimeout(rippleTimerRef.current);
  }, [interacted]);

  // Inactividad: si en 60s no hay actividad, vuelven a aparecer los hints
  const startInactivityTimer = useCallback(() => {
    clearTimeout(inactivityTimerRef.current);
    inactivityTimerRef.current = setTimeout(() => {
      setInteracted(false);
    }, 60000);
  }, []);

  // Cuando el usuario interactúa con el iframe, la ventana pierde el foco
  // → aprovechamos ese evento para resetear el timer de inactividad
  useEffect(() => {
    if (!interacted) return;
    const handleBlur = () => startInactivityTimer();
    window.addEventListener("blur", handleBlur);
    return () => window.removeEventListener("blur", handleBlur);
  }, [interacted, startInactivityTimer]);

  // Limpieza al desmontar
  useEffect(() => {
    return () => {
      clearTimeout(rippleTimerRef.current);
      clearTimeout(inactivityTimerRef.current);
    };
  }, []);

  const handleFirstInteraction = () => {
    setInteracted(true);
    startInactivityTimer();
  };

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
            <img
              src="/logo-hero.png"
              alt="Logo SM+"
              className="hero-logo-img"
            />
          </div>
          <p className="hero-description">
            Innovación tecnológica para la salud mental. Una plataforma diseñada
            para aportar calma, seguridad y eficiencia en cada proceso.
          </p>

          <div className="hero-buttons">
            <button className="btn-portal">Portal Paciente</button>
            <a href="#modulos" className="btn-discover">
              Descubrir Módulos
            </a>
          </div>
        </div>

        {/* LADO DERECHO: MOCKUP DE LA APP */}
        <div className="hero-mockup-side">
          <div className="phone-float-wrapper">
            {/* BISEL DEL TELÉFONO */}
            <div className="phone-bezel">
              {/* Zona superior: Dynamic Island */}
              <div className="phone-notch">
                <div className="phone-dynamic-island"></div>
              </div>

              {/* Pantalla (iframe escalado) */}
              <div className="phone-screen-clip">
                <iframe
                  src="/SaludMadrid_Prototipo_v3.html"
                  className="phone-embed"
                  title="SaludMadrid+ App"
                  scrolling="no"
                  frameBorder="0"
                />

                {/* Click-catcher: div transparente sobre el iframe que detecta
                    el primer toque. Al interactuar se desmonta, dejando el
                    iframe libre para recibir todos los eventos. */}
                {!interacted && (
                  <div
                    className="phone-click-catcher"
                    onPointerDown={handleFirstInteraction}
                  />
                )}

                {/* Ripple visual — pointer-events:none para no bloquear nada */}
                {!interacted && (
                  <div
                    className={`phone-tap-overlay${showRipple ? " is-rippling" : ""}`}
                  >
                    <div className="phone-tap-ripple" />
                    <span className="phone-tap-cursor">☝️</span>
                  </div>
                )}
              </div>

              {/* Barra home inferior */}
              <div className="phone-home-bar"></div>
            </div>

            {/* Badge flotante — desaparece al interactuar, vuelve tras 60s */}
            {!interacted && (
              <div className="phone-hint-group">
                <div className="phone-pruebalo-badge">
                  <span className="badge-dot"></span>
                  Interactivo · Pruébalo
                </div>
                <p className="phone-hint-arrow">
                  <span className="hint-arrow-icon">↕</span> Desliza o toca
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
