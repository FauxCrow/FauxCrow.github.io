import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from "react";
import { MediaSlide } from './MediaSlide';

{ /* Reference: https://medium.com/@branchwag/how-to-make-an-image-carousel-in-react-b4a3764420c3 */ }
export function MediaCarousel({ images }) {
  const [curr, setCurr] = useState(0);

  // set image to previous or next on button press
  const prev = (e) => {
    e.stopPropagation();
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  }
  const next = (e) => {
    e.stopPropagation();
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  }

  return (
    <div className="overflow-hidden relative">
      { /* Media Display */}
      <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
        {images.map((item, index) => (
          <MediaSlide
            key={index}
            item={item}
            isActive={curr === index}
          />
        ))}
      </div>

      { /* Overlay Left Right Buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
        <button
          onPointerDown={prev}
          className="p-1 rounded-full shadow bg-white/50 text-gray-800 hover:bg-white pointer-events-auto"
        >
          <ChevronLeft className="w-4 h-4 md:w-10 md:h-10" />
        </button>
        <button
          onPointerDown={next}
          className="p-1 rounded-full shadow bg-white/50 text-gray-800 hover:bg-white pointer-events-auto"
        >
          <ChevronRight className="w-4 h-4 md:w-10 md:h-10" />
        </button>
      </div>

      { /* Media Number Indicator */}
      <div className="absolute bottom-4 right-0 left-0 pointer-events-none">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-1 md:w-2 h-1 md:h-2 bg-white rounded-full
              ${curr === i ? "p-1 md:p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}