import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmationPage from './ConfirmationPage';
import Footer from './Footer'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/booking">Book</Link>
          
        </div>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}


export default App;
