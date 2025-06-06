import React from 'react';
import { useLocation } from 'react-router-dom';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
  const location = useLocation();
  const { name, date, time } = location.state || {};

  return (
    <div className="confirmation-container">
      <h2>See you soon, {name}!</h2>
      <h3>Booking Details:</h3>
      <p><strong>Service:</strong> Exterior Window Cleaning</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Status:</strong> Confirmed</p>
      <p>An email confirmation has been sent. Looking forward to seeing you!</p>
      <button className="manage-btn">Manage my booking</button>
    </div>
  );
};

export default ConfirmationPage;
