import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'State-of-the-Art Technology',
      description: 'Advanced equipment for precise diagnoses and comfortable treatments.',
      icon: '💡'
    },
    {
      id: 2,
      title: 'Comfortable Environment',
      description: 'Relaxing office design with amenities to make your visit pleasant.',
      icon: '🛋️'
    },
    {
      id: 3,
      title: 'Transparent Pricing',
      description: 'Clear cost estimates before treatment with flexible payment options.',
      icon: '💰'
    },
    {
      id: 4,
      title: 'Emergency Availability',
      description: 'Same-day appointments for urgent dental issues when you need us most.',
      icon: '🚨'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-text-primary mb-4">
            Why Choose Happy Teeth Dental Group?
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Our commitment to excellence sets us apart in providing exceptional dental care 
            to the Miami community.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-6">
          {features.map(feature => (
            <div 
              key={feature.id} 
              className="text-center space-y-4"
            >
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-text-primary">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;