import React from 'react';
import LeafDivider from './LeafDivider';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image Area */}
          <div className="order-first lg:order-none">
            <figure className="aspect-square rounded-2xl shadow-soft overflow-hidden">
              <img 
                src="/gallery/2ed678_4512af86c9814bb1b8e49d80b9546a19~mv2_d_2048_1365_s_2.avif" 
                alt="Garden Escapes project highlight"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </figure>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
                Crafting Outdoor Spaces with
                <span className="italic text-sage-green"> Expertise</span>
              </h2>
              <LeafDivider align="left" />
            </div>
            
            <div className="copy-md space-y-6">
              <p className="text-secondary font-light">
                With 30 years of experience in the industry including architectural and civil projects 
                such as large estates, the Olympic Stadium and Gunwharf Quays, I founded Garden Escapes 
                to work directly with homeowners and deliver personal, recommendation-worthy results.
              </p>
              
              <p className="text-secondary font-light">
                From general garden maintenance to all aspects of groundworks — domestic and commercial — 
                we tailor every build to your space and lifestyle. Specializing in bespoke outdoor kitchens, 
                water features, and comprehensive landscaping solutions, our approach combines decades of 
                experience with a genuine passion for creating outdoor spaces that enhance your home 
                and bring lasting joy.
              </p>
              
              <p className="text-secondary font-light">
                Every project begins with understanding your vision, followed by meticulous planning 
                and execution that ensures durability, beauty, and value for years to come.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-sage-green mb-2">30+</div>
                <div className="text-sm text-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sage-green mb-2">500+</div>
                <div className="text-sm text-secondary">Projects Completed</div>
              </div>
            </div>

            {/* Professional Credentials */}
            <div className="mt-12 p-6 sm:p-8 bg-sage-green/10 rounded-2xl">
              <h3 className="text-lg sm:text-xl font-semibold text-charcoal mb-6 text-center">Professional Accreditations & Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-sage-green rounded-full flex-shrink-0"></div>
                  <span className="text-secondary font-light text-sm sm:text-base">Jackson's Fencing Approved Installer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-sage-green rounded-full flex-shrink-0"></div>
                  <span className="text-secondary font-light text-sm sm:text-base">Brett Approved Installer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-sage-green rounded-full flex-shrink-0"></div>
                  <span className="text-secondary font-light text-sm sm:text-base">Pavestone Approved Installer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-sage-green rounded-full flex-shrink-0"></div>
                  <span className="text-secondary font-light text-sm sm:text-base">Beauxfort Gravel Rings Approved Installer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-sage-green rounded-full flex-shrink-0"></div>
                  <span className="text-secondary font-light text-sm sm:text-base">Eco Grid Approved Installer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-sage-green rounded-full flex-shrink-0"></div>
                  <span className="text-secondary font-light text-sm sm:text-base">Tobermore Approved Installer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-sage-green rounded-full flex-shrink-0"></div>
                  <span className="text-secondary font-light text-sm sm:text-base">London Stone Approved Installer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-sage-green rounded-full flex-shrink-0"></div>
                  <span className="text-secondary font-light text-sm sm:text-base">Durapost Approved Installer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;