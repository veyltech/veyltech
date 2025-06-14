import React, { useContext } from 'react';
import AnimatedElement from '../components/AnimatedElement';
import { SiteContentContext } from '../App';

const About = () => {
  const siteContent = useContext(SiteContentContext);
  const about = siteContent?.about || [];
  const header = about.find(f => f.FieldName === 'HEADER')?.FieldValue || "VEYLTECH'İN HİKAYESİ";
  const content = about.find(f => f.FieldName === 'CONTENT')?.FieldValue || 'Geleceği sadece izlemekle yetinecek miyiz…?';
  const visionHeader = about.find(f => f.FieldName === 'VISION_HEADER')?.FieldValue || 'Kuruluş Vizyonu';
  const visionContent = about.find(f => f.FieldName === 'VISION_CONTENT')?.FieldValue || 'Sis arkasındaki potansiyeli ortaya çıkarma';
  const sentenceHeader = about.find(f => f.FieldName === 'SENTENCE_HEADER')?.FieldValue || 'Vizyon Cümlesi';
  const sentenceContent = about.find(f => f.FieldName === 'SENTENCE_CONTENT')?.FieldValue || 'Teknoloji bir araç değil, bir vizyondur.';

  return (
    <div className="about-page">
      <section className="about-section">
        <AnimatedElement>
          <h1 className="section-title">{header}</h1>
        </AnimatedElement>
        
        <AnimatedElement delay={0.2}>
          <div className="question-section">
            <h2>{content}</h2>
          </div>
        </AnimatedElement>
        
        <AnimatedElement delay={0.4}>
          <div className="vision-section">
            <h2>{visionHeader}</h2>
            <p>{visionContent}</p>
          </div>
        </AnimatedElement>
        
        <AnimatedElement delay={0.6}>
          <div className="statement-section">
            <h2>{sentenceHeader}</h2>
            <p>{sentenceContent}</p>
          </div>
        </AnimatedElement>
      </section>
    </div>
  );
};

export default About; 