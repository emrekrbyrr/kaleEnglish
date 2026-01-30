import React, { useEffect, useState } from 'react';
import './AnimatedScaffold.css';

const AnimatedScaffold = () => {
  const [position, setPosition] = useState(-10);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        // Slow continuous downward movement
        const newPos = prev + 0.15;
        // Reset to top when reaches bottom
        if (newPos >= 100) {
          return -10;
        }
        return newPos;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animated-scaffold-container">
      <div className="scaffold-wrapper" style={{ top: `${position}%` }}>
        {/* Suspension Ropes */}
        <div className="rope rope-left"></div>
        <div className="rope rope-right"></div>
        
        {/* Actual Scaffold Image */}
        <div className="scaffold-image-wrapper">
          <img
            src="/kalelift-scaffold-animated.svg"
            alt="KaleLift suspended platform"
            className="scaffold-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedScaffold;