import React, { useMemo, useState } from 'react';
import { Filter } from 'lucide-react';
import LeafDivider from './LeafDivider';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Gardens', 'Patios', 'Driveways', 'Fencing'];

  const items = useMemo(() => ([
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
          <p className="copy-md max-w-3xl mx-auto mt-8">
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
            <figure key={idx} className="overflow-hidden rounded-2xl shadow-soft bg-off-white">
              <img src={img.src} alt={img.alt} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;