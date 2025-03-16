import React from 'react';
import './Banner.css';

function Banner({text}) {
  return (
    <div className="page-header">
      <div className="header-overlay">
        <div className="header-content">
          <h1 className="header-title">
            <span className="home-text">Home</span>
            <span className="separator">/</span>
            <span className="banner-text">{text}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;