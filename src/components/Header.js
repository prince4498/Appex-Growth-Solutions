import React, { useState, useEffect } from 'react';
import './Header.css';
import logoImage from '../images/logo.png'; // Make sure to add this image to your assets folder

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body scroll when menu is open
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  // Close menu when clicking outside
  const closeMenu = (e) => {
    if (isMenuOpen && e.target.classList.contains('menu-overlay')) {
      setIsMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  };

  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Cleanup when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <header className={`site-header ${isSticky ? 'sticky' : ''}`}>
        <div className="container">
          <div className="header-inner">
            <div className="site-logo">
              <a href="/">
                <img src={logoImage} alt="logo" />
              </a>
            </div>

            <div className="header-navigation">
              <nav className={`main-menu ${isMenuOpen ? 'active' : ''}`}>
                <ul className="primary-menu">
                  <li className="menu-item-has-children">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="/services">Services</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="/why-us">Why Us</a>
                  </li>
                  <li>
                    <a href="/portfolio"> Portfolio </a>
                  </li>
                  <li>
                    <a href="/contact">Contact us</a>
                  </li>
                </ul>
                
                
              </nav>

             

              <div className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Overlay for mobile menu */}
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </>
  );
};

export default Header;