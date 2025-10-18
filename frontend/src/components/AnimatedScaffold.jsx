import React, { useEffect, useState } from 'react';
import './AnimatedScaffold.css';

const AnimatedScaffold = () => {
  const [position, setPosition] = useState(20);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPos = prev + direction * 0.5;
        if (newPos >= 70 || newPos <= 10) {
          setDirection((d) => -d);
        }
        return newPos;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="animated-scaffold-container">
      <div className="scaffold-wrapper" style={{ top: `${position}%` }}>
        {/* Ropes */}
        <div className="rope rope-left"></div>
        <div className="rope rope-right"></div>
        
        {/* Platform */}
        <div className="scaffold-platform">
          <div className="platform-top"></div>
          <div className="platform-body">
            <div className="platform-grid">
              <div className="grid-line"></div>
              <div className="grid-line"></div>
              <div className="grid-line"></div>
            </div>
            <div className="safety-rail"></div>
            <div className="safety-rail bottom"></div>
          </div>
          <div className="pulley pulley-left"></div>
          <div className="pulley pulley-right"></div>
        </div>
        
        {/* Hologram effect */}
        <div className="hologram-glow"></div>
      </div>
    </div>
  );
};

export default AnimatedScaffold;