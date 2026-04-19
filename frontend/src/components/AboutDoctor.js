import React from 'react';

const AboutDoctor = () => {
  return (
    <section className="section-padding bg-section-bg">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <img 
              className="rounded-lg shadow-lg w-full h-[400px] object-cover" 
              src="/doctor-image.jpg" 
              alt="Dr. Alex Rodriguez, Dentist at Happy Teeth Dental Group"
            />
          </div>
          
          {/* Content Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-text-primary">
              Meet Dr. Alex Rodriguez
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Dr. Rodriguez brings over 15 years of experience in general and cosmetic dentistry 
              to Happy Teeth Dental Group. His patient-first approach ensures that every individual 
              receives personalized care tailored to their unique needs and goals.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-text-primary">Experienced Care</p>
                  <p className="text-text-secondary">Over 15 years of dental expertise</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-text-primary">Patient-First Approach</p>
                  <p className="text-text-secondary">Your comfort and satisfaction are our priority</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-text-primary">Clear Explanations</p>
                  <p className="text-text-secondary">We take time to educate you about your oral health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;