import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutDoctor from './components/AboutDoctor';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import AppointmentForm from './components/AppointmentForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPage from './pages/Admin';
import Toast from './components/Toast';
import '../src/index.css';

export const ToastContext = React.createContext(null);

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <AboutDoctor />
      <Testimonials />
      <WhyChooseUs />
      <AppointmentForm />
      <Contact />
    </>
  );
}

function App() {
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 4000);
  };

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.12 }
    );
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <ToastContext.Provider value={showToast}>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <main>
                    <HomePage />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </div>
        <Toast show={toast.show} message={toast.message} type={toast.type} />
      </Router>
    </ToastContext.Provider>
  );
}

export default App;