import React from 'react';

interface LeafDividerProps {
  align?: 'center' | 'left' | 'right';
}

const LeafDivider: React.FC<LeafDividerProps> = ({ align = 'center' }) => {
  const alignmentClass = {
    center: 'justify-center',
    left: 'justify-start',
    right: 'justify-end'
  }[align];

  return (
    <div className={`flex ${alignmentClass} items-center my-6`}>
      <div className="w-16 h-px bg-sage-green"></div>
      <div className="mx-4">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-sage-green"
        >
          <path 
            d="M12 2L10.5 8.5L4 7L10.5 12L4 17L10.5 15.5L12 22L13.5 15.5L20 17L13.5 12L20 7L13.5 8.5L12 2Z" 
            fill="currentColor"
            fillOpacity="0.7"
          />
        </svg>
      </div>
      <div className="w-16 h-px bg-sage-green"></div>
    </div>
  );
};

export default LeafDivider;