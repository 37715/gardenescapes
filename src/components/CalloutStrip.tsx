import React from 'react';
import { CheckCircle, Calendar } from 'lucide-react';

const CalloutStrip: React.FC = () => {
  const benefits = [
    'Free, bespoke designs',
    'Built for longevity',
    'Friendly, tidy, on-time'
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-sage-green to-deep-sage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-off-white">
                <CheckCircle size={24} className="mr-3 text-leaf-gold" />
                <span className="text-lg md:text-xl font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-off-white text-sage-green px-8 py-4 rounded-xl font-semibold text-lg shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1 inline-flex items-center"
          >
            <Calendar size={24} className="mr-3" />
            Book a Site Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default CalloutStrip;