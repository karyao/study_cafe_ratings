'use client';

import { useState, useEffect } from 'react';

interface PolaroidImageProps {
  images?: string[];
}

export default function PolaroidImage({ images = [] }: PolaroidImageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // If no images provided, use default placeholder
  const displayImages = images.length > 0 ? images : ['[image]'];
  const totalImages = displayImages.length;

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % totalImages);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [totalImages]);

  return (
    <div className="polaroid-container w-full max-w-2xl relative">
      <div className="polaroid-photo relative">
        <div className="polaroid-image-placeholder polaroid-image-fullscreen relative overflow-hidden">
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="text-[#5a5a5a] text-lg opacity-50">
              {displayImages[currentImageIndex]}
            </span>
          </div>
          
          {/* Navigation Arrows on Polaroid - Always show if more than one image */}
          {totalImages > 1 && (
            <>
              {/* Left Arrow */}
              <button
                onClick={goToPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 hover:scale-110 flex items-center justify-center group z-10"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6 text-[#2d2d2d] group-hover:text-[#FFB6C1] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 hover:scale-110 flex items-center justify-center group z-10"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6 text-[#2d2d2d] group-hover:text-[#FFB6C1] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 px-3 py-1 rounded-full text-sm text-[#5a5a5a] shadow-md">
                {currentImageIndex + 1} / {totalImages}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

