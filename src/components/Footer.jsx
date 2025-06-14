import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col footer-left">
            <div className="footer-logo">
              <h2>VEYLTECH</h2>
            </div>
          </div>
          
          <div className="footer-col footer-center">
            <div className="copyright">
              <p>&copy; 2025 Veyltech</p>
            </div>
          </div>
          
          <div className="footer-col footer-right">
            <div className="social-links">
              <a href="https://www.instagram.com/veyltech/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 