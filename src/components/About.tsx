import React from 'react';
import LeafDivider from './LeafDivider';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              <p>
                <span className="font-normal text-charcoal">I've worked in the industry for 20 years including architectural and civil projects 
                such as large estates, the Olympic Stadium and Gunwharf Quays. I founded Garden Escapes 
                to work directly with homeowners and deliver personal, recommendation-worthy results.</span>
              </p>
              
              <p>
                <span className="font-normal text-charcoal">From general garden maintenance to all aspects of groundworks — domestic and commercial — 
                we tailor every build to your space and lifestyle. Our approach combines decades of 
                experience with a genuine passion for creating outdoor spaces that enhance your home 
                and bring lasting joy.</span>
              </p>
              
              <p>
                <span className="font-normal text-charcoal">Every project begins with understanding your vision, followed by meticulous planning 
                and execution that ensures durability, beauty, and value for years to come.
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-sage-green mb-2">20+</div>
                <div className="text-sm text-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sage-green mb-2">500+</div>
                <div className="text-sm text-secondary">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Image Area */}
          <div className="lg:order-first">
            <figure className="aspect-square rounded-2xl shadow-soft overflow-hidden">
              <img 
                src="/gallery/2ed678_4512af86c9814bb1b8e49d80b9546a19~mv2_d_2048_1365_s_2.avif" 
                alt="Garden Escapes project highlight"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;