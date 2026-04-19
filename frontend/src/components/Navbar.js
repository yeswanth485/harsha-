import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`bg-transparent transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src="/logo.png" alt="Happy Teeth Dental Group" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="hover:text-primary transition-colors duration-200">Home</a>
                <a href="#" className="hover:text-primary transition-colors duration-200">About</a>
                <a href="#" className="hover:text-primary transition-colors duration-200">Services</a>
                <a href="#" className="hover:text-primary transition-colors duration-200">Contact</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <a href="#appointment-form"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark hover:scale-105 transition-all duration-200 btn-hover">
              Book Appointment
            </a>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="inline-flex items-center p-2 text-gray-500 hover:text-gray-700 rounded-md">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className="md:hidden">
          <div className="mt-2 space-y-1">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-gray-900">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-gray-900">About</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-gray-900">Services</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;