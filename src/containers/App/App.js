import React from 'react';

import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ServicesSection />
      <ServicesSection />
    </div>
  );
}

export default App;
