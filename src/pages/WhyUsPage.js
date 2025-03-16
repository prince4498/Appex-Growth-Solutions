import React from 'react';
import './WhyUsPage.css';
import star from "../images/star.png";
import team_image from "../images/team-img.jpg";
import expertise_icon from "../images/benefit_02.png";
import innovation_icon from "../images/innovation.png";
import results_icon from "../images/digital_excellence.png";
import GetInTouchButton from '../buttons/GetInTouchButton';
import WhyUs from '../components/WhyUs';
import Banner from '../components/Banner';

const WhyUsPage = () => {
  return (
    <>
    <Banner text="Why Us"/>
    <WhyUs/>
    <div className="artistics-page">
      <div className="why-us-section">
        
        
        
        <div className="why-us-content">
          <div className="company-image">
            <img src={team_image} alt="Our Team" />
            <div className="stats-overlay">
              <div className="stat-item">
                <span className="stat-number highlight">4+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number highlight">115+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number highlight">96%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
          
          <div className="strengths-cards">
          <div className="header">
            <img className='star star-why' src={star}></img>
            <div className="why-choose">Why Our Team is Best?</div>
          </div>
            <div className="strength-card">
              <div className="card-header">
                <div className="card-icon">
                  <img src={expertise_icon} alt="Expertise Icon" />
                </div>
                <div className="card-arrow">➚</div>
              </div>
              <h2> Skilled & Experienced Team</h2>
              <p>Our experts know how to create ads that get real results.</p>
            </div>
            
            <div className="strength-card">
              <div className="card-header">
                <div className="card-icon">
                  <img src={innovation_icon} alt="Innovation Icon" />
                </div>
                <div className="card-arrow">➚</div>
              </div>
              <h2>Smart & Innovative Ideas</h2>
              <p>We use the latest tricks to keep your brand ahead of others.</p>
            </div>
            
            <div className="strength-card">
              <div className="card-header">
                <div className="card-icon">
                  <img src={results_icon} alt="Results Icon" />
                </div>
                <div className="card-arrow">➚</div>
              </div>
              <h2>Focus on Real Growth</h2>
              <p>Our plans help you get more customers and make more money.</p>
            </div>
          </div>
        </div>
        
        
        
        <div className="cta-section">
          <h2>Ready to elevate your brand?</h2>
          <p>Let's create something extraordinary together.</p>
          <GetInTouchButton text="Get Free Consultation" href="https://calendly.com/maulikvaghasiya1999/30min" target="_blank" />
        </div>
        
        
      </div>
    </div>
    </>
  );
};

export default WhyUsPage;