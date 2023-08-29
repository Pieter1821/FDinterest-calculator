import React from 'react';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">
          &copy; 2023 Pieter Deane. All rights reserved.
        </p>
        <p className="footer-text">
          Made with <span className="heart-icon">&hearts;</span> and
          <span className="react-icon">React</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

        