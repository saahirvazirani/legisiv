"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../components/MainSection.css';
import '../components/ScrollAnimation.css';

const MainSection = ({ scrollY }) => {
  return (
    <div className="main-section">
      <div className="main-content">
        <h1
          className="main-title"
          style={{ transform: `translateX(${scrollY * -1}px)` }}
        >
          Legislation.
        </h1>
        <h1
          className="main-title"
          style={{ transform: `translateX(${scrollY * 1}px)` }}
        >
          Redefined.
        </h1>
      </div>
    </div>
  );
};

const Circle = ({ color, textColor, text, position, scale, opacity }) => (
  <motion.div
    className="circle"
    style={{
      backgroundColor: color,
      color: textColor,
      ...position,
      scale,
      opacity,
    }}
  >
    <p>{text}</p>
    <motion.div
      className="click-me"
      style={{
        position: 'absolute',
        top: '-30px',
        left: '50%',
        transform: 'translateX(-50%)',
        color: textColor,
        fontWeight: 'bold',
        opacity,
      }}
    >
      CLICK ME
    </motion.div>
  </motion.div>
);

const Page = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
      setWindowHeight(window.innerHeight);

      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const getBackgroundColor = () => {
    if (scrollY > windowHeight * 1.5) {
      return '#000000';
    } else if (scrollY > 0) {
      return '#ffffff';
    } else {
      return '#000000';
    }
  };

  const circleScale = Math.min((scrollY / (windowHeight * 0.5)) * 2, 1);
  const circleOpacity = Math.min((scrollY / (windowHeight * 0.3)), 1);
  const whiteBackgroundOpacity = Math.max(1 - (scrollY - windowHeight) / (windowHeight * 0.5), 0);

  const circles = [
    { color: '#7dccff', textColor: 'black', text: 'Bridging the connection between legislation and AI', position: { bottom: '10%', left: '50%', transform: 'translateX(-50%)' } },
    { color: '#ff7d7d', textColor: 'white', text: 'Empowering citizens with legislative knowledge', position: { top: '20%', left: '20%' } },
    { color: '#7dff7d', textColor: 'black', text: 'Simplifying complex policies for everyone', position: { top: '20%', right: '20%' } },
  ];

  return (
    <motion.div
      className="h-full"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <div className="scroll-animation-container">
        <MainSection scrollY={scrollY} />
        {isClient && (
          <motion.div
            className="full-screen-white"
            style={{
              clipPath: `circle(${circleScale * 150}% at 50% 100%)`,
              opacity: whiteBackgroundOpacity,
            }}
          >
            {circles.map((circle, index) => (
              <Circle
                key={index}
                {...circle}
                scale={circleScale}
                opacity={circleOpacity}
              />
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Page;