import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-off-white/95 backdrop-blur-md shadow-soft' 
          : 'bg-off-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16 lg:h-20">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="nav-link"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-link"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="nav-link"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="nav-link"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="nav-link"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-link"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden absolute right-0 p-2 rounded-lg hover:bg-sage-green/10 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-off-white/95 backdrop-blur-md border-t border-sage-green/20 shadow-soft">
            <div className="px-4 py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left py-3 px-4 rounded-lg hover:bg-sage-green/10 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-3 px-4 rounded-lg hover:bg-sage-green/10 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left py-3 px-4 rounded-lg hover:bg-sage-green/10 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left py-3 px-4 rounded-lg hover:bg-sage-green/10 transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('reviews')}
                className="block w-full text-left py-3 px-4 rounded-lg hover:bg-sage-green/10 transition-colors"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left py-3 px-4 rounded-lg hover:bg-sage-green/10 transition-colors"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;