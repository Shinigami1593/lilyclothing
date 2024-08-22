// import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
  return (
    <div>
      <section className="hero-section">
        <h1>LilyClothing</h1>
        <button className="get-started-btn">
          <Link to="/products">Get Started</Link>
        </button>
      </section>

      <section className="image-placeholder">
        <img src="placeholder.png" alt="Placeholder Image" />
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <img src="logo.png" alt="Lily Clothing Logo" />
          </div>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
