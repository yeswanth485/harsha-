import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      quote: "The team at Happy Teeth Dental Group made me feel completely at ease during my procedure. The results exceeded my expectations!",
      name: "Sarah M.",
      rating: 5
    },
    {
      id: 2,
      quote: "Finally found a dentist I can trust! The staff is friendly, knowledgeable, and genuinely cares about their patients.",
      name: "Michael T.",
      rating: 5
    },
    {
      id: 3,
      quote: "My smile has never looked better. The cosmetic work they did was natural-looking and perfect for my face.",
      name: "Jennifer L.",
      rating: 5
    },
    {
      id: 4,
      quote: "As someone who dreaded dental visits, I now actually look forward to my cleanings. Amazing experience every time.",
      name: "Robert K.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-text-primary mb-4">
            What Our Patients Say
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Hear from our satisfied patients about their experiences at Happy Teeth Dental Group.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" 
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map(testimonial => (
              <div 
                key={testimonial.id} 
                className="flex-shrink-0 w-full lg:w-1/2 xl:w-1/3 px-4"
              >
                <div className="bg-white rounded-card p-6 shadow-soft">
                  <p className="italic text-text-secondary mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 space-y-1">
                      <h3 className="font-medium text-text-primary">{testimonial.name}</h3>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map(star => (
                          <svg 
                            key={star} 
                            className={`h-4 w-4 ${star <= testimonial.rating ? 'text-primary' : 'text-gray-300'}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.519 4.674c1.411.722 2.573 1.22 3.293 1.22a1 1 0 00.95-.69l1.519-4.674a1 1 0 00-.647-1.283l-3.976-2.888a1 1 0 00-.588-1.81l-3.976 2.888a1 1 0 00-.363-1.118l1.519-4.674z"/>
                            </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'} hover:bg-primary/50 transition-colors duration-200`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;