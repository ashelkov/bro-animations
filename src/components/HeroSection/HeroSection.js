import React from 'react';
import HeroWave from '../HeroWave/HeroWave';
import './HeroSection.scss';

function HeroSection() {
  return (
    <section className="HeroSection" id="hero-section">
      <div className="content-container">
        <div className="text-wrapper">
          <h1 className="title">
            Technical partner for startups from MVP to Exit
          </h1>
          <p className="description">
            We design and develop Web & Mobile apps to support startups and
            businesses on their missions.
          </p>
          <button className="button outline">Case studies</button>
          <button className="button">Contact us</button>
        </div>
      </div>
      {/* <div className="hero-wave" /> */}
      <HeroWave />
    </section>
  );
}

export default HeroSection;
