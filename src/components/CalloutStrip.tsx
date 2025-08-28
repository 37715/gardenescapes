import React from 'react';
import { CheckCircle, Calendar } from 'lucide-react';

const CalloutStrip: React.FC = () => {
  const benefits = [
    'Free, bespoke designs',
    'Built for longevity',
    'Friendly, tidy, on-time'
  ];

  return (
    <section className="py-16 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-off-white">
                <CheckCircle size={20} className="mr-3 text-sage-green" />
                <span className="text-base md:text-lg font-light">{benefit}</span>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-sage-green text-off-white px-8 py-4 rounded-xl font-light text-lg shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 inline-flex items-center hover:bg-deep-sage"
          >
            <Calendar size={20} className="mr-3" />
            Book a Site Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default CalloutStrip;