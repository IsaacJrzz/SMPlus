import './styles/Variables.css';
import './styles/index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Aquí irían otras secciones como Testimonios o FAQs */}
      </main>
      <Footer />
    </div>
  )
}

export default App;