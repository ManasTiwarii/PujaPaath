import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Services from './components/Services';
import TrendingContent from './components/TrendingContent';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Services />
        <TrendingContent />
        <Testimonials />
      </main>
      <FloatingActionButton />
      <Footer />
    </div>
  );
}

export default App;