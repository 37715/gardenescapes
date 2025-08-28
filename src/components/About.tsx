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
            <div className="mt-16 mb-8">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4 text-center">
                  <span className="italic text-sage-green">Professional</span> Accreditations
                </h3>
                <p className="text-secondary font-light text-center mb-12 max-w-2xl mx-auto">
                  We are proud approved installers for leading industry brands, ensuring quality and reliability in every project.
                </p>
                
                <div className="bg-white rounded-3xl shadow-soft p-8 sm:p-12">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                    <a href="https://www.jacksons-fencing.co.uk" target="_blank" rel="noopener noreferrer" 
                       className="group flex flex-col items-center justify-center p-4 rounded-2xl hover:bg-sage-green/5 transition-all duration-300">
                      <div className="w-20 h-20 mb-3 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden group-hover:shadow-md transition-shadow">
                        <img src="https://www.jacksons-fencing.co.uk/-/media/jacksons/images/homepage/footer-logo.jpg" 
                             alt="Jackson's Fencing" className="max-w-full max-h-full object-contain" />
                      </div>
                      <span className="text-xs font-medium text-secondary text-center group-hover:text-sage-green transition-colors">
                        Jackson's Fencing
                      </span>
                    </a>

                    <a href="https://www.brettlandscaping.co.uk" target="_blank" rel="noopener noreferrer" 
                       className="group flex flex-col items-center justify-center p-4 rounded-2xl hover:bg-sage-green/5 transition-all duration-300">
                      <div className="w-20 h-20 mb-3 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden group-hover:shadow-md transition-shadow">
                        <img src="https://www.brettlandscaping.co.uk/wp-content/uploads/2019/11/Brett-Logo.png" 
                             alt="Brett Landscaping" className="max-w-full max-h-full object-contain" />
                      </div>
                      <span className="text-xs font-medium text-secondary text-center group-hover:text-sage-green transition-colors">
                        Brett Landscaping
                      </span>
                    </a>

                    <a href="https://www.pavestone.com" target="_blank" rel="noopener noreferrer" 
                       className="group flex flex-col items-center justify-center p-4 rounded-2xl hover:bg-sage-green/5 transition-all duration-300">
                      <div className="w-20 h-20 mb-3 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden group-hover:shadow-md transition-shadow">
                        <img src="https://www.pavestone.com/img/logos/pavestone-logo-aqc.png" 
                             alt="Pavestone" className="max-w-full max-h-full object-contain" />
                      </div>
                      <span className="text-xs font-medium text-secondary text-center group-hover:text-sage-green transition-colors">
                        Pavestone
                      </span>
                    </a>

                    <a href="https://beauxfort.com" target="_blank" rel="noopener noreferrer" 
                       className="group flex flex-col items-center justify-center p-4 rounded-2xl hover:bg-sage-green/5 transition-all duration-300">
                      <div className="w-20 h-20 mb-3 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden group-hover:shadow-md transition-shadow">
                        <img src="https://beauxfort.com/wp-content/uploads/2025/06/logo.png" 
                             alt="Beauxfort" className="max-w-full max-h-full object-contain" />
                      </div>
                      <span className="text-xs font-medium text-secondary text-center group-hover:text-sage-green transition-colors">
                        Beauxfort
                      </span>
                    </a>

                    <a href="https://ecogrid.co.uk" target="_blank" rel="noopener noreferrer" 
                       className="group flex flex-col items-center justify-center p-4 rounded-2xl hover:bg-sage-green/5 transition-all duration-300">
                      <div className="w-20 h-20 mb-3 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden group-hover:shadow-md transition-shadow">
                        <img src="https://ecogrid.co.uk/wp-content/uploads/ecogrid-wlog.png" 
                             alt="EcoGrid" className="max-w-full max-h-full object-contain" />
                      </div>
                      <span className="text-xs font-medium text-secondary text-center group-hover:text-sage-green transition-colors">
                        EcoGrid
                      </span>
                    </a>

                    <a href="https://www.tobermore.co.uk" target="_blank" rel="noopener noreferrer" 
                       className="group flex flex-col items-center justify-center p-4 rounded-2xl hover:bg-sage-green/5 transition-all duration-300">
                      <div className="w-20 h-20 mb-3 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden group-hover:shadow-md transition-shadow">
                        <img src="https://www.tobermore.co.uk/wp-content/uploads/tobermore-logo.svg" 
                             alt="Tobermore" className="max-w-full max-h-full object-contain" />
                      </div>
                      <span className="text-xs font-medium text-secondary text-center group-hover:text-sage-green transition-colors">
                        Tobermore
                      </span>
                    </a>

                    <a href="https://www.londonstone.co.uk" target="_blank" rel="noopener noreferrer" 
                       className="group flex flex-col items-center justify-center p-4 rounded-2xl hover:bg-sage-green/5 transition-all duration-300">
                      <div className="w-20 h-20 mb-3 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden group-hover:shadow-md transition-shadow">
                        <img src="https://d30xrygccugj8u.cloudfront.net/resources/home/london-stone-logo.svg" 
                             alt="London Stone" className="max-w-full max-h-full object-contain" />
                      </div>
                      <span className="text-xs font-medium text-secondary text-center group-hover:text-sage-green transition-colors">
                        London Stone
                      </span>
                    </a>

                    <a href="https://www.birkdalesales.com/pages/approved-installer-durapost" target="_blank" rel="noopener noreferrer" 
                       className="group flex flex-col items-center justify-center p-4 rounded-2xl hover:bg-sage-green/5 transition-all duration-300">
                      <div className="w-20 h-20 mb-3 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden group-hover:shadow-md transition-shadow">
                        <img src="https://www.birkdalesales.com/cdn/shop/files/durapost_logo.svg?v=1718714688" 
                             alt="DuraPost" className="max-w-full max-h-full object-contain" />
                      </div>
                      <span className="text-xs font-medium text-secondary text-center group-hover:text-sage-green transition-colors">
                        DuraPost
                      </span>
                    </a>
                  </div>
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