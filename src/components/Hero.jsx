import React, { useState, useEffect, useContext } from 'react';
import AnimatedElement from './AnimatedElement';
import { SiteContentContext } from '../App';
// YouTube arkaplanı yerine yerel video kullanacağız

const Hero = () => {
  const [videoError, setVideoError] = useState(false);
  const [useYoutubeBackground, setUseYoutubeBackground] = useState(false); // YouTube kullanımını devre dışı bırakıyoruz
  const siteContent = useContext(SiteContentContext);
  const heroCard = siteContent?.heroCard || [];
  const header = heroCard.find(f => f.FieldName === 'HEADER')?.FieldValue || 'GELECEĞİ KODLUYORUZ';
  const content = heroCard.find(f => f.FieldName === 'CONTENT')?.FieldValue || 'Yenilikçi CRM ve dijital davetiye çözümleriyle iş süreçlerinizi dönüştürüyoruz.';
  const button = heroCard.find(f => f.FieldName === 'BUTTON')?.FieldValue || 'DAHA FAZLASI';

  return (
    <div className="hero-section">
      {useYoutubeBackground ? (
        // YouTube arkaplanı kullanımı devre dışı
        <div className="hero-background">
          <div className="video-overlay"></div>
        </div>
      ) : (
        <div className="hero-background">
          {!videoError && (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="hero-video"
              onError={() => setVideoError(true)}
            >
              <source src="/videos/istanbul.mp4" type="video/mp4" />
            </video>
          )}
          <div className="video-overlay"></div>
        </div>
      )}
      <div className="hero-content">
        <AnimatedElement delay={0.1}>
          <h1 className="hero-title">{header}</h1>
        </AnimatedElement>
        
        <AnimatedElement delay={0.4}>
          <p className="hero-subtitle">{content}</p>
        </AnimatedElement>
        
        <AnimatedElement delay={0.7}>
          <a href="#about" className="cta-button">{button}</a>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default Hero; 