
import React from 'react';
import { LanguageProvider } from './components/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Method from './components/Method';
import Educators from './components/Educators';
import CTA from './components/CTA';
import Footer from './components/Footer';

function AppContent() {
  return (
    <div className="min-h-screen bg-white transition-all duration-1000">
      <Navbar />
      <Hero />
      
      {/* Logos Section */}
      <section className="py-24 border-y border-primary/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-between items-center gap-12 opacity-20 grayscale hover:opacity-100 transition-opacity duration-700">
             <span className="text-xl font-display font-black tracking-tighter">STEM-ORG</span>
             <span className="text-xl font-display font-black tracking-tighter italic">GLOBAL EDU</span>
             <span className="text-xl font-display font-black tracking-tighter">FUTURE_LAB</span>
             <span className="text-xl font-display font-black tracking-tighter italic">IVY CO.</span>
             <span className="text-xl font-display font-black tracking-tighter">PARIS ACADEMY</span>
          </div>
        </div>
      </section>

      <About />
      <Programs />
      <Method />
      <Educators />
      <CTA />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
