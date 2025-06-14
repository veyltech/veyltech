import React from 'react';
import Hero from '../components/Hero';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  return (
    <div className="home-page">
      <AnimatedSection id="hero">
        <Hero />
      </AnimatedSection>
      
      <AnimatedSection id="about">
        <About />
      </AnimatedSection>
      
      <AnimatedSection id="services">
        <Services />
      </AnimatedSection>
      
      <AnimatedSection id="projects">
        <Projects />
      </AnimatedSection>
      
      <AnimatedSection id="contact">
        <Contact />
      </AnimatedSection>
    </div>
  );
};

export default Home; 