import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import reviews from '../data/reviews.json';

const ReviewsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    sliderRef.current?.setAttribute('data-touch-start', touch.clientX.toString());
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchStart = sliderRef.current?.getAttribute('data-touch-start');
    if (!touchStart) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = parseInt(touchStart) - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex(prev => (prev + 1) % reviews.length);
      } else {
        setCurrentIndex(prev => (prev - 1 + reviews.length) % reviews.length);
      }
    }
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-gradient-to-r from-sage-green/10 to-deep-sage/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
            What Our Clients Say
          </h2>
        </div>

        <div 
          ref={sliderRef}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="bg-off-white rounded-2xl shadow-soft p-8 lg:p-12 max-w-4xl mx-auto">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={24} className="text-leaf-gold fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="copy-md text-center mb-8">
                    "{truncateText(review.text, 280)}"
                  </blockquote>
                  
                  <div className="text-center">
                    <cite className="text-charcoal font-semibold text-lg">
                      {review.author}
                    </cite>
                    <div className="mt-2">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        review.source === 'Google' 
                          ? 'bg-blue-100 text-blue-800' 
                          : review.source === 'Facebook'
                          ? 'bg-blue-50 text-blue-700'
                          : 'bg-deep-sage/15 text-secondary'
                      }`}>
                        {review.source}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-sage-green' : 'bg-sage-green/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSlider;