import React from 'react';
import { ArrowRight, Eye, MessageCircle, Phone } from 'lucide-react';
import LeafDivider from './LeafDivider';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-10 animate-fade-in pt-6">
          <img 
            src="/image.png" 
            alt="Garden Escapes Landscaping Ltd logo"
            className="mx-auto h-24 sm:h-32 md:h-40 lg:h-44 w-auto object-contain mb-2"
            width={320}
            height={160}
          />
          <h1 className="heading-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-charcoal">
            garden design, patios &<br />
            <span className="italic">driveways built to last</span>
          </h1>
          
          <LeafDivider />
          
          <p className="copy-md md:text-2xl max-w-2xl mx-auto">
            <span className="font-normal text-charcoal">20+ years' experience — from major civil works to bespoke garden transformations.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary group"
            >
              Get a Quote
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://wa.me/447939212973"
              className="btn-secondary group"
            >
              <MessageCircle size={20} className="mr-2" />
              WhatsApp
            </a>
            <a 
              href="tel:+447939212973"
              className="btn-secondary group"
            >
              <Phone size={20} className="mr-2" />
              Call Me
            </a>
            {/* Removed the fourth button to center the remaining three */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator removed */}
    </section>
  );
};

export default Hero;