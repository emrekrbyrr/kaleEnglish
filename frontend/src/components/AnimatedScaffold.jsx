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
            src="https://customer-assets.emergentagent.com/job_f26ed2bd-7f38-45ed-a0bc-2f5ec395f275/artifacts/ys6t1mmf_Ads%C4%B1z%20tasar%C4%B1m.png"
            alt="Kale Platform Suspended Scaffold"
            className="scaffold-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedScaffold;