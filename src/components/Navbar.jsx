import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Import logo
import Logo from '../assets/images/veyl-tech.png';
import { SiteContentContext } from '../App';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const siteContent = useContext(SiteContentContext);
  const navbarButtons = siteContent?.navbar || [
    { FieldValue: 'ANA SAYFA' },
    { FieldValue: 'HAKKIMIZDA' },
    { FieldValue: 'HİZMETLER' },
    { FieldValue: 'PROJELER' },
    { FieldValue: 'İLETİŞİM' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle logo click based on current page
  const handleLogoClick = (e) => {
    if (isHomePage) {
      e.preventDefault();
      // Smooth scroll to top/hero section if already on home page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    // Otherwise Link to="/" will navigate to home page
  };

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleLogoClick}>
          <img src={Logo} alt="VEYLTECH Logo" className="logo-img" />
        </Link>

        <div className="menu-icon" onClick={(e) => {
          e.stopPropagation();
          toggleMenu();
        }}>
          <div className={isMenuOpen ? 'hamburger open' : 'hamburger'}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            {isHomePage ? (
              <a href="#hero" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                {navbarButtons[0]?.FieldValue || 'ANA SAYFA'}
              </a>
            ) : (
              <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                {navbarButtons[0]?.FieldValue || 'ANA SAYFA'}
              </Link>
            )}
          </li>
          <li className="nav-item">
            {isHomePage ? (
              <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                {navbarButtons[1]?.FieldValue || 'HAKKIMIZDA'}
              </a>
            ) : (
              <Link to="/#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                {navbarButtons[1]?.FieldValue || 'HAKKIMIZDA'}
              </Link>
            )}
          </li>
          <li className="nav-item">
            {isHomePage ? (
              <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                {navbarButtons[2]?.FieldValue || 'HİZMETLER'}
              </a>
            ) : (
              <Link to="/#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                {navbarButtons[2]?.FieldValue || 'HİZMETLER'}
              </Link>
            )}
          </li>
          <li className="nav-item">
            {isHomePage ? (
              <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                {navbarButtons[3]?.FieldValue || 'PROJELER'}
              </a>
            ) : (
              <Link to="/#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                {navbarButtons[3]?.FieldValue || 'PROJELER'}
              </Link>
            )}
          </li>
          <li className="nav-item">
            {isHomePage ? (
              <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                {navbarButtons[4]?.FieldValue || 'İLETİŞİM'}
              </a>
            ) : (
              <Link to="/#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                {navbarButtons[4]?.FieldValue || 'İLETİŞİM'}
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 