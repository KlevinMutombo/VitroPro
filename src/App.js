import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmationPage from './ConfirmationPage';
import Footer from './Footer';
import './App.css';

// Custom wrapper to access route
function AppWrapper() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="app-wrapper">
      {/* Show regular navbar only if not on the homepage */}
      {!isHomePage && (
        <div className="navbar">
          <div className="logo">VitroPro</div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/" state={{ scrollTo: 'about' }}>About Us</Link>
            <Link to="/" state={{ scrollTo: 'services' }}>Services</Link>
            <Link to="/" state={{ scrollTo: 'contact' }}>Contact</Link>
          </div>
        </div>
      )}

      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
