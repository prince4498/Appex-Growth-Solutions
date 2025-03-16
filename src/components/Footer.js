import React from "react";
import "./Footer.css";
import logo from "../images/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="">
            <a href="/" className="logo-link">
              <img className="footer-logo" src={logo}></img>
            </a>
            <p className="logo-description">Crafting Digital Success</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3 className="column-title">Navigation</h3>
              <ul className="footer-menu">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/why-us">Why Us</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="column-title">Services</h3>
              <ul className="footer-menu">
                <li>Digital Marketing</li>
                <li>Branding</li>
                <li>Graphic Design</li>
                <li>Web Development</li>
                <li>Social Media Management</li>
                
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="column-title">Connect</h3>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/share/1A8MRv556f/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/marvellous_maulik?igsh=dmUzcm53Z29oeDBx"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://youtube.com/@marketing.maulik?si=9OeuoD1YqhwwFici"
                  target="_blank"
                  aria-label="YouTube"
                >
                  <i class="fab fa-youtube"></i>
                </a>
                <a
                  href="https://x.com/STARMAULIK?t=AsoYcy20u7vzJVZfHSVIBg&s=09"
                  target="_blank"
                  aria-label="X (Twitter)"
                >
                  <i class="fab fa-x-twitter"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/maulik-vaghasiya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © 2025 AppexGrowthSolutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
