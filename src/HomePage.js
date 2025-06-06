import React from "react";
import './HomePage.css';
import { Link } from 'react-router-dom';
import HomeNavbar from './HomeNavbar';

function HomePage() {
  return (
    <>
      <HomeNavbar />

      <div className="homepage">
        <header className="hero-section">
          <div className="hero-left">
            <h1>Welcome to VitroPro</h1>
            <div className="subtitle">
              <p>Professional Window and Frames cleaning</p>
            </div>

            <div className="tagline">
              <span className="emoji">🍀</span>
              <span className="text">Eco-Friendly Products</span>
            </div>
            <div className="tagline">
              <span className="emoji">🪟</span>
              <span className="text">Exterior Cleaning</span>
            </div>
            <div className="tagline">
              <span className="emoji">🕰️</span>
              <span className="text">Fast and Flexible Booking</span>
            </div>

            <Link to="/booking">
              <button className="cta-button">Book Now</button>
            </Link>
          </div>

          <div className="hero-right">
            <img src="/Mainimage.jpg" alt="Window Cleaning" className="hero-image" />
          </div>
        </header>

        <section id="about" className="about-us">
          <h2>Who We Are</h2>
          <p className="about-intro">
            VitroPro is more than just a window cleaning service — we’re your partner in making homes and businesses shine. 
            With years of experience and a reputation built on excellence, we bring clarity and brightness to every surface we touch.
          </p>

          <div className="about-grid">
            <div className="about-card">
              <h3>✨ Our Mission</h3>
              <p>
                To deliver premium, eco-friendly window and frame cleaning with a focus on reliability, quality, and customer satisfaction.
              </p>
            </div>
            <div className="about-card">
              <h3>🛠️ Our Experience</h3>
              <p>
                1300+ homes and offices cleaned. Trusted by hundreds of happy clients and rated 4.7 stars on Google.
              </p>
            </div>
            <div className="about-card">
              <h3>💚 Why Choose Us?</h3>
              <p>
                Friendly service, transparent pricing, and spotless results — every single time. We treat your space like our own.
              </p>
            </div>
          </div>


        <section className="highlights">
                <div className="tagline">
              <span className="emoji">✅</span>
              <span className="text">1300+ Jobs Doneg</span>
            </div>
              <div className="tagline">
              <span className="emoji">⭐</span>
              <span className="text">4.7 Stars on Google</span>
            </div>

        </section>
</section>

        <section id="services" className="features">
          <h2>What We Offer</h2>
          <div className="feature-list">
            <div className="feature">
              <h3>Exterior Windows and Frames</h3>
              <p>We not only clean all types of windows, but we make sure the frames are also spotless </p>
            </div>
            <div className="feature">
              <h3>Flexible Scheduling</h3>
              <p>Choose the date and time that works best for you</p>
            </div>
            <div className="feature">
              <h3>Affordable Pricing</h3>
              <p>Book now and get a quote for your house</p>
            </div>
          </div>
        </section>

        <section className="contact-us" id="contact">
          <h2>Contact Us</h2>
          <p>Have questions or want a quote? Leave us a message!</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>

      </div>
    </>
  );
}

export default HomePage;
