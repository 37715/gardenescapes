import React, { useMemo, useState } from 'react';
import { Filter } from 'lucide-react';
import LeafDivider from './LeafDivider';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Before & After', 'Gardens', 'Patios', 'Water Features', 'Tiling', 'Driveways', 'Fencing'];

  const items = useMemo(() => ([
    // Before & After showcase
    { 
      src: '/gallery/1/garden before.jpg', 
      afterSrc: '/gallery/1/garden after.jpg',
      alt: 'Garden Transformation - Before', 
      afterAlt: 'Garden Transformation - After',
      tags: ['Before & After', 'Gardens'],
      isBeforeAfter: true
    },
    
    // Tree pond water feature series
    { src: '/gallery/1/tree pond.jpg', alt: 'Tree Pond Water Feature', tags: ['Water Features', 'Gardens'] },
    { src: '/gallery/1/tree pond 2.jpg', alt: 'Tree Pond Detail View', tags: ['Water Features', 'Gardens'] },
    { src: '/gallery/1/tree pond architecture.jpg', alt: 'Tree Pond Architectural Design', tags: ['Water Features', 'Gardens'] },
    
    // Waterfall feature
    { src: '/gallery/1/waterfall.jpg', alt: 'Custom Waterfall Feature', tags: ['Water Features', 'Gardens'] },
    
    // Tiling series
    { src: '/gallery/1/tiles.jpg', alt: 'Professional Tiling Work', tags: ['Tiling', 'Patios'] },
    { src: '/gallery/1/tiles 1.jpg', alt: 'Decorative Tile Installation', tags: ['Tiling', 'Patios'] },
    { src: '/gallery/1/tiles 2.jpg', alt: 'Patio Tiling Project', tags: ['Tiling', 'Patios'] },
    { src: '/gallery/1/tiles 3.jpg', alt: 'Custom Tile Design', tags: ['Tiling', 'Patios'] },
    { src: '/gallery/1/tiles 4.jpg', alt: 'Completed Tile Installation', tags: ['Tiling', 'Patios'] },
    
    // Existing gallery items
    { src: '/gallery/2ed678_4512af86c9814bb1b8e49d80b9546a19~mv2_d_2048_1365_s_2.avif', alt: 'Garden build 1', tags: ['Gardens'] },
    { src: '/gallery/2ed678_e3af24a5975d4c02a7aac20df84706ad~mv2_d_4032_3024_s_4_2.avif', alt: 'Garden build 2', tags: ['Gardens'] },
    { src: '/gallery/2ed678_bb15ffe32b46478caf012591aa13b29e~mv2_d_4032_3024_s_4_2.avif', alt: 'Patio', tags: ['Patios'] },
    { src: '/gallery/2ed678_60c6846303484b9fa086969779462344~mv2.avif', alt: 'Driveway', tags: ['Driveways'] },
    { src: '/gallery/victoria_hodgson_2.avif', alt: 'Fencing', tags: ['Fencing'] },
  ]), []);

  const visible = items.filter(i => activeFilter === 'All' || i.tags.includes(activeFilter));

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
            Our <span className="italic text-sage-green">Portfolio</span>
          </h2>
          <LeafDivider />
          <p className="text-secondary font-light text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mt-8 leading-relaxed">
            Explore our recent projects and see the quality craftsmanship that sets us apart.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-deep-sage text-off-white shadow-soft'
                  : 'bg-sage-green/15 text-secondary hover:bg-sage-green/25'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((img, idx) => (
            <figure key={idx} className={`overflow-hidden rounded-2xl shadow-soft bg-off-white ${
              img.isBeforeAfter ? 'sm:col-span-2 lg:col-span-3' : ''
            }`}>
              {img.isBeforeAfter ? (
                <div className="grid grid-cols-1 md:grid-cols-2 h-auto">
                  <div className="relative">
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500" 
                      loading="lazy" 
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={img.afterSrc} 
                      alt={img.afterAlt} 
                      className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500" 
                      loading="lazy" 
                    />
                    <div className="absolute top-4 left-4 bg-sage-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                      AFTER
                    </div>
                  </div>
                </div>
              ) : (
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" 
                  loading="lazy" 
                />
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;