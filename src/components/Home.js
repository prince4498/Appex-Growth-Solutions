import React from 'react';
import { useEffect } from 'react';
import '../App.css';
import Header from './Header';
import Hero from './Hero.js';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import MouseFollower from '../hooks/MouseFollower';
import AboutAgency from './AboutAgency';
import KeyBenefits from './KeyBenefits';
import WhyUs from './WhyUs';

function Home() {

  return (
    <div className="app">
     
      <Hero />
      <AboutAgency/>
      <Services />
      <WhyUs/>
      <KeyBenefits/>
      <Contact />
    </div>
  );
}

export default Home;

