import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Preventive Care',
      description: 'Regular check-ups, cleanings, and fluoride treatments to maintain optimal oral health.',
      icon: '🦷',
      bgColor: 'bg-primary/50'
    },
    {
      id: 2,
      title: 'Cosmetic Dentistry',
      description: 'Veneers, bonding, and teeth whitening to enhance your smile aesthetics.',
      icon: '✨',
      bgColor: 'bg-secondary/50'
    },
    {
      id: 3,
      title: 'Restorative Treatments',
      description: 'Fillings, crowns, bridges, and implants to restore function and appearance.',
      icon: '🔧',
      bgColor: 'bg-primary/50'
    },
    {
      id: 4,
      title: 'Orthodontics',
      description: 'Invisalign and traditional braces for straighter teeth and better bite.',
      icon: '📐',
      bgColor: 'bg-secondary/50'
    },
    {
      id: 5,
      title: 'Emergency Dental Care',
      description: 'Same-day appointments for toothaches, broken teeth, and other urgent issues.',
      icon: '🚑',
      bgColor: 'bg-primary/50'
    },
    {
      id: 6,
      title: 'Pediatric Dentistry',
      description: 'Gentle, compassionate care for children of all ages.',
      icon: '👶',
      bgColor: 'bg-secondary/50'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-text-primary mb-4">
            Comprehensive Dental Services
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We offer a full range of dental services to meet all your oral health needs, 
            from routine preventive care to advanced cosmetic and restorative treatments.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map(service => (
            <div 
              key={service.id} 
              className={`group bg-white rounded-card p-6 text-center ${service.bgColor} hover:-translate-y-2 hover:shadow-lg transition-all duration-300`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;