import React from 'react';
import './KeyBenefits.css';
import star from "../images/star.png"
import benefit_01 from "../images/benefit_01.png"
import benefit_02 from "../images/benefit_02.png"
import benefit_03 from "../images/benefit_03.png"
import benefit_04 from "../images/benefit_04.png"

const KeyBenefits = () => {
  return (
    <div className="benefits-page">
      <div className="benefits-container">
        <div className="benefits-header">
          <img className='star star-benefit' src={star}></img> KEY BENEFITS
        </div>
        
        <div className="benefits-content">
          <div className="left-content">
            <h1 className="main-heading-benefit">
              Discover The <span className="highlight">Benefits</span> Of Choosing Us
            </h1>
          </div>
          
          <div className="right-content">
            <p className="benefits-description">
            Get creativity, data-driven strategies, and dedicated support that bring real results for your brand.
              </p>
          </div>
        </div>
        
        <div className="benefits-cards">
          <div className="benefit-card">
            <div className="card-number">01</div>
            <div className="card-icon ">
                <img src={benefit_01}></img>
            </div>
            <h2>Personalized Approach</h2>
            <p>We create plans that fit your brand perfectly.</p>
          </div>
          
          <div className="benefit-card">
            <div className="card-number">02</div>
            <div className="card-icon "><img src={benefit_02}></img></div>
            <h2>Experienced Team</h2>
            <p>Combines industry knowledge and creativity to exceptional results for your brand.</p>
          </div>
          
          <div className="benefit-card">
            <div className="card-number">03</div>
            <div className="card-icon "><img src={benefit_03}></img></div>
            <h2>Data-Driven Decisions</h2>
            <p>We utilize data insights to refine strategies, optimize and ensure impactful, measurable results.</p>
          </div>
          
          <div className="benefit-card">
            <div className="card-number">04</div>
            <div className="card-icon "><img src={benefit_04}></img></div>
            <h2>Ongoing Support</h2>
            <p>We provide support to keep your ads and brand performing great.</p>
          </div>
        </div>
      </div>
      
      <div className="sphere-background"></div>
    </div>
  );
};

export default KeyBenefits;