import React from 'react';
import { Leaf, Square, Grab as Grass, Fence, Loader as Road, Shovel } from 'lucide-react';
import LeafDivider from './LeafDivider';

const Services: React.FC = () => {
  const services = [
    {
      icon: Leaf,
      title: 'Garden Design & Landscaping',
      description: 'Bespoke designs, planting plans, and complete garden transformations tailored to your space and lifestyle.'
    },
    {
      icon: Square,
      title: 'Patios & Paving',
      description: 'Premium porcelain, natural stone installations, pathways, and stunning focal areas that stand the test of time.'
    },
    {
      icon: Grass,
      title: 'Artificial Grass',
      description: 'Low-maintenance, high-quality artificial grass installations for year-round perfect lawns.'
    },
    {
      icon: Fence,
      title: 'Fencing & Sleepers',
      description: 'Premium fencing solutions and timber features that provide privacy, security, and aesthetic appeal.'
    },
    {
      icon: Road,
      title: 'Driveways',
      description: 'Block paving, resin, tarmac, gravel, and grassgrid driveways designed for durability and curb appeal.'
    },
    {
      icon: Shovel,
      title: 'Groundworks',
      description: 'Professional preparation, drainage, and sub-base work ensuring longevity for all installations.'
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gradient-to-br from-sage-green/5 to-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
            Our <span className="italic text-sage-green">Services</span>
          </h2>
          <LeafDivider />
          <p className="text-lg md:text-xl text-deep-sage max-w-3xl mx-auto leading-relaxed mt-8">
            <span className="text-charcoal font-normal">From initial design concepts to final installation, we provide comprehensive 
            landscaping services that transform your outdoor vision into reality.
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-off-white rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-sage-green/10"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-sage-green/10 rounded-xl flex items-center justify-center group-hover:bg-sage-green/20 transition-colors mb-4">
                  <service.icon size={32} className="text-sage-green" />
                </div>
                <h3 className="heading-serif text-xl lg:text-2xl text-charcoal mb-4">
                  {service.title}
                </h3>
              </div>
              <p className="text-deep-sage leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-deep-sage mb-8">
            Not sure which service you need? We offer free consultations to discuss your project.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;