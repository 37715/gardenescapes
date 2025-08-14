import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal text-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="inline-block rounded-xl bg-off-white/90 border border-sage-green/30 shadow-soft px-2 py-1">
              <img src="/image.png" alt="Garden Escapes Landscaping Ltd logo" className="h-14 w-auto object-contain" loading="lazy" width={140} height={56} />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Professional landscaping services with 20+ years of experience. 
              From garden design to major groundworks, we deliver exceptional results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="heading-serif text-xl text-off-white mb-6">Quick Links</h3>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block text-gray-300 hover:text-sage-green transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-sage-green transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-sage-green transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block text-gray-300 hover:text-sage-green transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-sage-green transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="heading-serif text-xl text-off-white mb-6">Connect</h3>
            <div className="space-y-4">
              <a 
                href="mailto:john@gardenescapes.me.uk"
                className="block text-gray-300 hover:text-sage-green transition-colors"
              >
                john@gardenescapes.me.uk
              </a>
              <a 
                href="tel:+447939212973"
                className="block text-gray-300 hover:text-sage-green transition-colors"
              >
                07939 212973
              </a>
              
              <div className="flex space-x-4 pt-4">
                <a 
                  href="https://www.facebook.com/Gardenescapeslandscapingltd"
                  className="w-10 h-10 bg-sage-green/20 rounded-lg flex items-center justify-center hover:bg-sage-green/30 transition-colors"
                  target="_blank" rel="noreferrer noopener"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="http://instagram.com/gardenescapes.me/"
                  className="w-10 h-10 bg-sage-green/20 rounded-lg flex items-center justify-center hover:bg-sage-green/30 transition-colors"
                  target="_blank" rel="noreferrer noopener"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/john-bishop-9b551216b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="w-10 h-10 bg-sage-green/20 rounded-lg flex items-center justify-center hover:bg-sage-green/30 transition-colors"
                  target="_blank" rel="noreferrer noopener"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p className="mb-1">
                Garden Escapes Landscaping Ltd • Company No. 12603757
              </p>
              <p>
                Registered office: 74A Rails Lane, Hayling Island, PO11 9LP
              </p>
            </div>
            <div className="text-gray-500 text-sm">
              crafted without stock images
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;