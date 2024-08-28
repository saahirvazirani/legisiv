// ScrollAnimation.jsx
import React, { useEffect, useState } from 'react';
import MainSection from './MainSection';
import './MainSection.css';
import './ScrollAnimation.css';

const ScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-animation-container">
      <MainSection scrollY={scrollY} />
      <div className={`popup ${scrollY > 100 ? 'expand' : ''}`}>
        <div className={`blue-circle ${scrollY > 500 ? 'show' : ''}`}>
          <p>Bridging the connection between legislation and AI</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
