import React from 'react';
import { Phone, MessageCircle, Facebook } from 'lucide-react';

const ActionsBar: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
      <div className="bg-off-white/95 backdrop-blur-md shadow-soft rounded-2xl border border-sage-green/20 p-2">
        <div className="flex items-center space-x-2">
          <a
            href="https://wa.me/447939212973"
            className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-xl shadow-sm hover:bg-green-600 transition-colors"
          >
            <MessageCircle size={20} />
          </a>
          <a
            href="https://www.facebook.com/Gardenescapeslandscapingltd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-xl shadow-sm hover:bg-blue-600 transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a
            href="tel:+447939212973"
            className="flex items-center justify-center w-12 h-12 bg-sage-green text-white rounded-xl shadow-sm hover:bg-deep-sage transition-colors"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActionsBar;