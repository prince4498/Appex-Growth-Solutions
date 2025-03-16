import React, { useState, useEffect } from 'react';
import './Hero.css';
import playbtn from '../images/play-btn.png'
import GetInTouchButton from '../buttons/GetInTouchButton';
import { Link } from 'react-router-dom';

const Hero = () => {

  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [animationState, setAnimationState] = useState('enter'); // 'enter', 'visible', 'exit'
  const rotatingTexts = ["Sales", "Leads", "Growth" , "ROI" , "Profitability" , "Traffic" , "Branding", "Engagement","Conversions","Revenue"];

  useEffect(() => {
    if (animationState === 'enter') {
      // Text has entered, set to visible after animation completes
      const enterTimer = setTimeout(() => {
        setAnimationState('visible');
      }, 500); // Match this to the CSS animation duration
      
      return () => clearTimeout(enterTimer);
    } 
    else if (animationState === 'visible') {
      // Text is visible, start exit after delay
      const visibleTimer = setTimeout(() => {
        setAnimationState('exit');
      }, 2000); // How long to show the text
      
      return () => clearTimeout(visibleTimer);
    }
    else if (animationState === 'exit') {
      // Text is exiting, prepare for next text
      const exitTimer = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
        setAnimationState('enter');
      }, 500); // Match this to the CSS animation duration
      
      return () => clearTimeout(exitTimer);
    }
  }, [animationState, currentTextIndex, rotatingTexts]);

  return (
    <div className="hero-section">
      <div className="hero-content">
        
        <h1 className="hero-title">
          Innovative solutions for
          <div className="animated-text-container">
            <span 
              className={`animated-text animated-text-${animationState}`} 
              
            >
              {rotatingTexts[currentTextIndex]}
            </span>
          </div>
        </h1>

        <div className='hero-flex'>
        <div className="play-button-container">
          <Link to="https://youtube.com/@marketing.maulik?si=9OeuoD1YqhwwFici" target="_blank">
          <button className="play-button">
            <div className="play-icon">
              ➤ 
            </div>
          </button></Link>
          <div className="learn-more-text">
            <svg className="circular-text" viewBox="0 0 100 100">
              <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
              <text>
                <textPath href="#circle">LEARN MORE • LEARN MORE • LEARN MORE •</textPath>
              </text>
            </svg>
          </div>
        </div>
        <div className="hero-description">
          <p>
            {/* At our Creative Digital Agency, we bring your ideas to life by crafting engaging, impactful digital
            experiences that captivate audiences and drive results. From innovative web design to compelling
            content and cutting-edge digital strategies. */}
             At Appex Growth Solutions, We don’t just run ads—we build growth engines that drive leads, sales, and revenue.

 Tired of high ad costs & low conversions? Our data-driven strategies and creative storytelling ensure your brand reaches the right audience—profitably!

 Trusted by 100+ brands for scaling with high-ROI Meta Ads.

 Want the same results? Let’s talk! Book a free strategy call.
          </p>

<GetInTouchButton text="Get In Touch" href="/contact" />
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Hero;