import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/legisiv.png" alt="Logo" className="logo-img" />
        <span className="logo-text">LEGISIV</span>
      </div>
      <ul className="navbar-links">
        <li><a href="/">HOME</a></li>
        <li><a href="/project">PROJECT: UNITED</a></li>
        <li><a href="/join">JOIN</a></li>
        <li><a href="/blog">BLOG</a></li>
        <li><a href="/waitlist">WAITLIST</a></li>
        <li><a href="/about">ABOUT</a></li>
        <li><a href="/contact">CONTACT</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
