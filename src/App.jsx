import './styles/Variables.css';
import './styles/index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About'; // Importado para que funcione
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <main>
        {/* SECCIÓN INICIO */}
        <section id="inicio">
          <Hero />
        </section>

        {/* SECCIÓN MÓDULOS */}
        <section id="modulos">
          <Features />
        </section>

        {/* SECCIÓN PROYECTO */}
        <section id="proyecto">
          <About />
        </section>

        {/* SECCIÓN SERVICIOS (Espacio reservado) */}
        <div id="servicios"></div>

        {/* SECCIÓN CONTACTO */}
        <section id="contacto">
          <Contacto />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;