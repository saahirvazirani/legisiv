// MainSection.jsx
import React from 'react';
import './MainSection.css';

const MainSection = ({ scrollY }) => {
  return (
    <div className="main-section">
      <div className="main-content">
        <h1
          className="main-title"
          style={{ transform: `translateX(${scrollY * -0.2}px)` }}
        >
          Legislation.
        </h1>
        <h1
          className="main-title"
          style={{ transform: `translateX(${scrollY * 0.2}px)` }}
        >
          Redefined.
        </h1>
      </div>
    </div>
  );
};

export default MainSection;
