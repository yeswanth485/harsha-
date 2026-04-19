import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-text-primary">
              Your Perfect Smile Starts Here
            </h1>
            <p className="text-text-secondary max-w-xl">
              Experience exceptional dental care in a warm, welcoming environment. 
              Our experienced team combines advanced technology with personalized attention 
              to create beautiful, healthy smiles that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <button 
                className="flex items-center px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors duration-200 btn-hover shadow-sm"
              >
                Book Appointment
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
              <button 
                className="flex items-center px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary/10 transition-colors duration-200 btn-hover"
              >
                Call Now
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 015.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center space-x-3 text-sm text-text-secondary">
              <span>⭐</span>
              <span>4.9 Rating from 241+ Patients</span>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="relative">
            <div className="floating inline-block">
              <img 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover" 
                src="/hero-image.jpg" 
                alt="Smiling patient at Happy Teeth Dental Group"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;