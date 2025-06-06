import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './HomeNavbar.css';

function HomeNavbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <nav className="home-navbar">
      <div className="logo">VitroPro</div>
      <div className="nav-links">
        <button onClick={() => scrollToSection('about')} className="nav-btn">About Us</button>
        <button onClick={() => scrollToSection('services')} className="nav-btn">Services</button>
        <button onClick={() => scrollToSection('contact')} className="nav-btn">Contact</button>
        <Link to="/booking" className="book-link">Book</Link>
      </div>
    </nav>
  );
}

export default HomeNavbar;
