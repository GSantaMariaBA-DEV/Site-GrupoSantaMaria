import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Region } from './components/Region';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppBtn } from './components/WhatsAppBtn';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative bg-brand-sand">
      <Navbar />
      <main>
        <Hero />
        <About /> {/* Now acts as the "Concept/Manifesto" section (Dark) */}
        <Projects /> {/* Main Product Showcase (Light/Airy) + Future Projects */}
        <Region /> {/* Lifestyle Gallery */}
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppBtn />
    </div>
  );
};

export default App;