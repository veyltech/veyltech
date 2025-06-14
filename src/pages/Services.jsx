import React, { useContext } from 'react';
import AnimatedElement from '../components/AnimatedElement';
import { SiteContentContext } from '../App';

const Services = () => {
  const siteContent = useContext(SiteContentContext);
  const services = siteContent?.services || [];
  const header = services.find(f => f.FieldCode === 'SERVICES_HEADER')?.FieldValue || 'HİZMETLERİMİZ';
  const card1Header = services.find(f => f.FieldName === 'SERVICES_CARD_1' && f.FieldCode === 'HEADER')?.FieldValue || 'DİJİTAL DAVETİYELER';
  const card1Content = services.find(f => f.FieldName === 'SERVICES_CARD_1' && f.FieldCode === 'CONTENT')?.FieldValue || 'WhatsApp ve sosyal medyada paylaşılan, konum bilgisi içeren web davetiyesi.';
  const card2Header = services.find(f => f.FieldName === 'SERVICES_CARD_2' && f.FieldCode === 'HEADER')?.FieldValue || 'CRM ÇÖZÜMLERİ';
  const card2Content = services.find(f => f.FieldName === 'SERVICES_CARD_2' && f.FieldCode === 'CONTENT')?.FieldValue || 'Yapay zeka destekli, iş süreçlerinizi akıllı hale getiren altyapı.';

  // Dynamically group service cards by _1, _2, ...
  const cardGroups = [];
  const cardIndexes = Array.from(new Set(
    services
      .filter(f => f.FieldName.startsWith('SERVICES_CARD_'))
      .map(f => f.FieldName.match(/SERVICES_CARD_(\d+)/)?.[1])
      .filter(Boolean)
  ));
  cardIndexes.forEach((idx) => {
    const header = services.find(f => f.FieldName === `SERVICES_CARD_${idx}` && f.FieldCode === 'HEADER')?.FieldValue;
    const content = services.find(f => f.FieldName === `SERVICES_CARD_${idx}` && f.FieldCode === 'CONTENT')?.FieldValue;
    if (header && content) {
      cardGroups.push({ header, content });
    }
  });

  return (
    <div className="services-page">
      <AnimatedElement>
        <h1 className="section-title">{header}</h1>
      </AnimatedElement>
      
      <div className="services-container">
        {cardGroups.length > 0
          ? cardGroups.map((card, i) => (
              <AnimatedElement key={i} delay={0.2 + i * 0.2} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="service-card">
                  <h2 className="service-title">{card.header}</h2>
                  <p className="service-description">{card.content}</p>
                </div>
              </AnimatedElement>
            ))
          : (
            <>
              <AnimatedElement delay={0.2} direction="left">
                <div className="service-card">
                  <h2 className="service-title">{card1Header}</h2>
                  <p className="service-description">{card1Content}</p>
                </div>
              </AnimatedElement>
              <AnimatedElement delay={0.4} direction="right">
                <div className="service-card">
                  <h2 className="service-title">{card2Header}</h2>
                  <p className="service-description">{card2Content}</p>
                </div>
              </AnimatedElement>
            </>
          )}
      </div>
    </div>
  );
};

export default Services; 