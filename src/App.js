import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import MouseFollower from './hooks/MouseFollower';

// Pages
import PortfolioPage from './pages/PortfolioPage'
import Home from './components/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicePage';
import ContactUsPage from './pages/ContactUsPage';
import WhyUsPage from './pages/WhyUsPage';

function App() {

  useEffect(() => {
    const handleMouseEnter = () => {
      const follower = document.querySelector('.mouse-follower');
      if (follower) follower.classList.add('hover');
    };

    const handleMouseLeave = () => {
      const follower = document.querySelector('.mouse-follower');
      if (follower) follower.classList.remove('hover');
    };

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');

    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <Router>
      <MouseFollower />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
