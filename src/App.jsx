import React, { useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/main.css';
import axios from 'axios';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// ScrollToTop component to handle basic navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const SiteContentContext = createContext(null);

function App() {
  const [siteContent, setSiteContent] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios.get('https://activepieces.eyyupsert.com/api/v1/webhooks/7jd4CIeDoqYtM72cZG4dg/sync')
      .then(res => {
        setSiteContent(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
        <DotLottieReact
          src="/preloader.lottie" // Update this path to your actual .lottie file
          loop
          autoplay
          style={{ width: 800, height: 800 }}
        />
      </div>
    );
  }

  return (
    <SiteContentContext.Provider value={siteContent}>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </SiteContentContext.Provider>
  );
}

export default App;
