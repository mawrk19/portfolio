import React, { useEffect, useState, Children, ReactNode } from "react";

interface CarouselProps {
  children: ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoSlide = false,
  autoSlideInterval = 5000,
}) => {
  const [current, setCurrent] = useState(0);
  const totalSlides = Children.count(children);

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, totalSlides]);

  return (
    <div className="relative overflow-hidden w-[90%] md:w-[60%] h-[60vh] mx-auto rounded-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {Children.map(children, (child, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 flex justify-center items-center"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              current === idx ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
