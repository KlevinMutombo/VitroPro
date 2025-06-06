import React from 'react';
import { Link } from 'react-router-dom';
import './HomeNavbar.css';

function HomeNavbar() {
  return (
    <nav className="home-navbar">
      <div className="logo">VitroPro</div>
      <div className="nav-links">
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <Link to="/booking" className="book-link">Book</Link>
      </div>
    </nav>
  );
}

export default HomeNavbar;
