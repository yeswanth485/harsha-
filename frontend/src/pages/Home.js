import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import AboutDoctor from '../components/AboutDoctor';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import AppointmentForm from '../components/AppointmentForm';

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Hero />
      <ServicesSection className={`scroll-reveal ${scrollPosition > 100 ? 'active' : ''}`} />
      <AboutDoctor className={`scroll-reveal ${scrollPosition > 300 ? 'active' : ''}`} />
      <Testimonials className={`scroll-reveal ${scrollPosition > 500 ? 'active' : ''}`} />
      <WhyChooseUs className={`scroll-reveal ${scrollPosition > 700 ? 'active' : ''}`} />
      <AppointmentForm className={`scroll-reveal ${scrollPosition > 900 ? 'active' : ''}`} />
    </div>
  );
};

export default Home;