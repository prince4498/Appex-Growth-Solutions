import React from 'react';
import './Services.css';
import service_01 from "../images/service_01.png"
import service_02 from "../images/service_02.png"
import service_03 from "../images/service_03.png"
import GetInTouchButton from '../buttons/GetInTouchButton';
import star from "../images/star.png"

const Services = ({hello=false}) => {
  return (
    <div className="artistics-page">
      <div className="services-section">
        <div className="services-header">
          <img className='star' src={star}></img> OUR SERVICES
        </div>
        
        <div className="main-heading">
          <h1>
            Our <span className="highlight"> Services</span> To Grow Your Brand
          </h1>

          <div>
          
          </div>
        </div>
        
        
        
        {!hello&&<div className="service-cards">
          <div className="service-card">
            <div className="card-header">
              <div className="card-icon ">
                <img src={service_01}></img>
              </div>
              <div className="card-arrow">➚</div>
            </div>
            <h2>Facebook/Instagram Ads (Expertise)</h2>
            <p>Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.</p>
          </div>
          
          <div className="service-card">
            <div className="card-header">
              <div className="card-icon ">
              <img src={service_02}></img>
              </div>
              <div className="card-arrow">➚</div>
            </div>
            <h2>Lead Generation</h2>
            <p>We craft powerful lead generation campaigns that bring in qualified, high-intent leads for your business. Using the right mix of ads, landing pages, and automation, we ensure that your sales pipeline is always full.</p>
          </div>
          
          <div className="service-card">
            <div className="card-header">
              <div className="card-icon ">
              <img src={service_03}></img>
              </div>
              <div className="card-arrow">➚</div>
            </div>
            <h2>Social Media Management</h2>
            <p>We manage your social media presence across Facebook, Instagram, LinkedIn, and more. Our team handles content creation, scheduling, audience engagement, and growth strategies to keep your brand active and engaging.</p>
          </div>
        </div>}
        
        {!hello&&<div className="footer" >
          <p>Let's make something great work together. <a href="https://calendly.com/maulikvaghasiya1999/30min" target="_blank" className="cta-link">Get Free Quote</a></p>
        </div>}
      </div>
    </div>
  );
};

export default Services;