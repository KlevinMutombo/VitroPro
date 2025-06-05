import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import HomePage from './HomePage';
import BookingPage from './BookingPage';
//import ConfirmationPage from './ConfirmationPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/booking">Book</Link>
        <Link to="/confirmation">Confirm</Link>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
