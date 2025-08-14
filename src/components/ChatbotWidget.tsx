import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Panel */}
      {isOpen && (
        <div className="mb-4 w-80 bg-off-white rounded-2xl shadow-soft border border-sage-green/20 overflow-hidden">
          <div className="bg-sage-green text-off-white p-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">Garden Escapes</h4>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 rounded-full hover:bg-deep-sage/20 flex items-center justify-center"
              >
                <X size={16} />
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <div className="bg-sage-green/10 rounded-xl p-4 mb-4">
                <p className="text-deep-sage text-sm">
                  👋 Hello! I'm here to help with your landscaping needs. 
                </p>
              </div>
              <p className="text-deep-sage text-sm mb-4">
                Ready to transform your outdoor space? Get in touch for a free consultation!
              </p>
            </div>
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
              }}
              className="w-full bg-sage-green text-off-white py-3 px-4 rounded-xl font-medium hover:bg-deep-sage transition-colors"
            >
              Start Conversation
            </button>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-sage-green text-off-white rounded-full shadow-soft hover:bg-deep-sage transition-all duration-300 hover:shadow-lg flex items-center justify-center group"
      >
        <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default ChatbotWidget;