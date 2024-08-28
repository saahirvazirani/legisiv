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

const Page = () => {
  const [scrollY, setScrollY] = useState(0);
  const [whiteBackgroundHeight, setWhiteBackgroundHeight] = useState(0);
  const [blueBackgroundHeight, setBlueBackgroundHeight] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
      setWhiteBackgroundHeight(1.5 * window.innerHeight);
      setBlueBackgroundHeight(2.5 * window.innerHeight); // Set the scroll height where blue transition begins

      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const getBackgroundColor = () => {
    if (scrollY > blueBackgroundHeight) {
      return '#000000'; // Black
    } else if (scrollY > whiteBackgroundHeight) {
      return '#0362fc'; // Blue
    } else if (scrollY > 0) {
      return '#ffffff'; // White
    } else {
      return '#000000'; // Initial black
    }
  };

  return (
    <motion.div
      className="h-full"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <div className="scroll-animation-container">
        <MainSection scrollY={scrollY} />
        {isClient && (
          <>
            <motion.div
              className="full-screen-white"
              style={{
                clipPath: `circle(${(scrollY / window.innerHeight) * 150}% at 50% 100%)`,
              }}
            >
              <motion.div
                className="blue-circle"
                style={{
                  opacity: scrollY > whiteBackgroundHeight + 200 ? 1 : 0,
                }}
              >
                <p>Bridging the connection between legislation and AI</p>
              </motion.div>
            </motion.div>
            <motion.div
              className="full-screen-blue"
              style={{
                clipPath: `circle(${((scrollY - whiteBackgroundHeight) / window.innerHeight) * 150}% at 50% 100%)`,
                backgroundColor: '#0362fc',
              }}
            >
              <motion.div
                className="white-circle"
                style={{
                  opacity: scrollY > blueBackgroundHeight - 200 ? 1 : 0,
                }}
              >
                <p>Innovative solutions for modern legislation</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Page;