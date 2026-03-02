import React from 'react';
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import Concepto from './components/Concepto';
import Simbologia from './components/Simbologia';
import Planimetria from './components/Planimetria';
import GamaColores from './components/GamaColores';
import TipografiaSection from './components/TipografiaSection';
import Aplicaciones from './components/Aplicaciones';
import Versiones from './components/Versiones';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <Concepto />
      <Simbologia />
      <Planimetria />
      <GamaColores />
      <TipografiaSection />
      <Aplicaciones />
      <Versiones />
      <Footer />
    </div>
  );
}

export default App;
