import React, { useEffect, useState } from 'react';
import './MouseFollower.css';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    // Show cursor once component is mounted
    setTimeout(() => setHidden(false), 1000);
    
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div 
      className={`mouse-follower ${hidden ? 'hidden' : ''}`} 
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px` 
      }}
    />
  );
};

export default MouseFollower;