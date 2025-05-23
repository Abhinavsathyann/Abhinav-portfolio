import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;