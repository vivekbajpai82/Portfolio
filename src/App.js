import React from 'react';
import './index.css'; 

import ParticlesBackground from './components/ParticlesBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications'; 
import Achievements from './components/Achievements';   
import Footer from './components/Footer';

import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <>
      {/* ✨ Yaha Add Karo */}
      <CustomCursor />
      <ScrollProgress />
      
      <ParticlesBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications /> 
        <Achievements />
      </main>
      <Footer />
    </>
  );
}

export default App;