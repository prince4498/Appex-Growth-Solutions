// GetInTouchButton.jsx
import React, { useState } from 'react';
import './GetInTouchButton.css';
import { Link } from 'react-router-dom';

const GetInTouchButton = ({text,href}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link to={href}>
    <button 
      className={`get-in-touch-btn ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{text}</span>
      <div 
        className="arrow"
        
      >
        ➚
      </div>
    </button>
    </Link>
  );
};

export default GetInTouchButton;