import React from 'react';
import './WhyUs.css';
import whyus from "../images/why-choose-image.jpg"
import star from "../images/star.png"
import Banner from './Banner';

const WhyUs = () => {
  return (
    <>
    <div className="page-container">
      <div className="content-wrapper">
        <div className="left-section">
          <div className="header">
            <img className='star star-why' src={star}></img>
            <div className="why-choose">WHY CHOOSE</div>
          </div>
          
          <div className="headline">
            <h1>Expertise For <span className="highlight">Your Digital Growth Journey</span></h1>
          </div>
          
          <div className="features-container">
            <div className="feature-box">
              <h2>We understand your customers</h2>
              <p>Our ads connect with the right people based on their interests and behavior.
</p>
            </div>
            
            <div className="feature-box">
              <h2>We target the right audience</h2>
              <p>No wasted money! Your ads reach people who are ready to buy.</p>
            </div>
            
            <div className="feature-box">
              <h2> We use Meta AI smartly </h2>
              <p>We find hidden interests to attract more potential customers.</p>
            </div>

            <div className="feature-box">
              <h2> We build a full system, not just ads</h2>
              <p>Our strategy ensures people don’t just see your ad but also take action!</p>
            </div>
          </div>
        </div>
        
        <div className="right-section">
          <div className="text-box">
            <p>Our dedicated team is committed to understanding your unique needs, ensuring that we provide innovative strategies that drive results. With a focus on quality and integrity.</p>
          </div>
          
          <div className="image-container">
            <img src={whyus} alt="Business meeting with two professionals looking at data" />
          </div>
        </div>
      </div>
      
      
    </div>
    </>
  );
};

export default WhyUs;