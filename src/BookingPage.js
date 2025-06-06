// BookingPage.js
import React, { useState } from 'react';
import './BookingPage.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';


const BookingPage = () => {
  const navigate = useNavigate();
  const [houseType, setHouseType] = useState('');
  const [time, setTime] = useState('');
  const [quote, setQuote] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showQuote, setShowQuote] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '' });
  const [errors, setErrors] = useState({});

  const handleHouseTypeChange = (e) => setHouseType(e.target.value);
  const handleTimeSelect = (selectedTime) => setTime(selectedTime);
  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\d{3}-\d{3}-\d{4}$/.test(phone);

  const handleQuoteClick = () => {
    const newErrors = {};
    if (!selectedDate) newErrors.date = 'You didn\'t choose a date';
    if (!time) newErrors.time = 'You didn\'t choose a time';
    if (!formData.name) newErrors.name = 'You didn\'t enter a name';
    if (!formData.email) newErrors.email = 'You didn\'t enter an email';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format. Use the format name@example.com.';
    if (!formData.phone) newErrors.phone = 'You didn\'t enter a phone number';
    else if (!validatePhone(formData.phone)) newErrors.phone = 'Invalid phone number. Use the format XXX-XXX-XXXX';
    if (!formData.address) newErrors.address = 'You didn\'t enter an address';
    if (!houseType) newErrors.houseType = 'You didn\'t select a house type';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const prices = {
        'Detached House': 200,
        'Semi-Detached House': 180,
        'Town House': 150,
        'condo/Apartment': 130,
        'Duplex/Triplex': 170
      };
      setQuote(prices[houseType]);
      setShowQuote(true);
    } else {
      setShowQuote(false);
    }
  };

  return (
    <div className="booking-container">
      <h1>Book Your Window Cleaning</h1>
      <div className="booking-grid">
        <div className="step-column">
          <h3>1. Choose a date.</h3>
          <div className="calendar-container">
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              minDate={new Date()}
            />
            {errors.date && <p className="error-msg">{errors.date}</p>}
          </div>
        </div>

        <div className="step-column">
          <h3>2. Choose a time.</h3>
          <div className="times">
            {['9 am', '11 am', '1 pm', '3 pm', '5 pm'].map((slot) => (
              <button
                key={slot}
                className={`time-btn ${time === slot ? 'selected' : ''} ${['1 pm', '3 pm'].includes(slot) ? 'disabled' : ''}`}
                onClick={() => !['1 pm', '3 pm'].includes(slot) && handleTimeSelect(slot)}
                disabled={['1 pm', '3 pm'].includes(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
          {errors.time && <p className="error-msg">{errors.time}</p>}
        </div>

        <div className="step-column">
          <h3>3. Enter your information.</h3>
          <div className="form-section">
            <input name="name" value={formData.name} onChange={handleInputChange} type = "text" placeholder="Your Name" required/>
            {errors.name && <p className="error-msg">{errors.name}</p>}
            <input name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" />
            {errors.email && <p className="error-msg">{errors.email}</p>}
            <input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Your Phone Number" />
            {errors.phone && <p className="error-msg">{errors.phone}</p>}
            <input name="address" value={formData.address} onChange={handleInputChange} placeholder="Your Address" />
            {errors.address && <p className="error-msg">{errors.address}</p>}
            <select value={houseType} onChange={handleHouseTypeChange}>
              <option value="">Select House Type</option>
              <option>Detached House</option>
              <option>Semi-Detached House</option>
              <option>Town House</option>
              <option>condo/Apartment</option>
              <option>Duplex/Triplex</option>
            </select>
            {errors.houseType && <p className="error-msg">{errors.houseType}</p>}

            <button className="confirm-btn" onClick={handleQuoteClick}>
              Get Your Instant Quote
            </button>

            {showQuote && (
              <div className="quote-wrapper">
                <div className="quote-box">
                  🎉 Great choice!<br />
                  Your estimated quote for a {houseType.toLowerCase()} is <strong>${quote}</strong>.<br />
                  Selected date: <strong>{selectedDate.toDateString()}</strong><br />
                  Selected time: <strong>{time}</strong><br />
                  <br />
                  <strong>Your service includes:</strong>
                  <ul>
                    <li>Exterior window washing (all levels)</li>
                    <li>Screen cleaning and reinstallation</li>
                    <li>Window frame wiping</li>
                    <li>Spot-free drying</li>
                    <li>Environmental-friendly detergents</li>
                  </ul>
                  <button className="confirm-btn" onClick={() =>
                    navigate('/confirmation', {
                    state: {
                        name: formData.name,
                        date: selectedDate.toLocaleDateString(),
                        time: time
                    }
                    })
                    }> Confirm Booking
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;


  