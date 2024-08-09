'use client';

/* eslint-disable @next/next/no-img-element */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateCurrent = useCallback(() => {
    if (!emblaApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateCurrent();
    emblaApi.on('select', updateCurrent);
    emblaApi.on('reInit', updateCurrent);
  }, [emblaApi, updateCurrent]);

  const handlePrevious = () => {
    emblaApi?.scrollPrev();

    updateCurrent();
  };

  const handleNext = () => {
    emblaApi?.scrollNext();

    updateCurrent();
  };

  const handleThumbClick = (index: number) => {
    if (!emblaApi || !emblaThumbsApi) return;
    emblaApi.scrollTo(index);

    updateCurrent();
  };

  return (
    <div className="my-8 space-y-6 not-prose">
      <div className="relative">
        <button
          aria-label="go to previous slide"
          onClick={handlePrevious}
          className="h-8 w-8 rounded-full flex items-center justify-center bg-white bg-opacity-40  absolute top-1/2 -translate-y-1/2 z-10 shadow-md left-4 text-black"
        >
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <button
          aria-label="go to next slide"
          onClick={handleNext}
          className="h-8 w-8 rounded-full flex items-center justify-center bg-white bg-opacity-40 absolute top-1/2 -translate-y-1/2 z-10 shadow-md right-4 text-black"
        >
          <ChevronRightIcon className="w-5 h-5" />
        </button>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div key={index} className="flex-[0_0_100%] aspect-video mx-4">
                <img
                  src={slide.url}
                  alt="sample"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleThumbClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === selectedIndex ? 'bg-slate-500' : 'bg-slate-800'
            }`}
          >
            <span className="sr-only">go to slide {index + 1}</span>
          </button>
        ))}
      </div>
      <div className="overflow-hidden" ref={emblaThumbsRef}>
        <div className="flex gap-3">
          {slides.map((thumb, index) => (
            <button
              key={index}
              onClick={() => handleThumbClick(index)}
              className="flex-[0_0_26%]"
            >
              <span className="sr-only">scroll to slide {index + 1}</span>
              <div
                className={`w-full ${
                  index === selectedIndex ? 'opacity-100' : 'opacity-40'
                }`}
              >
                <img
                  src={thumb.url}
                  alt="thumbnail"
                  className="object-cover rounded-lg"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
      <p className="text-center text-sm text-slate-400">
        Image Carousel Example
      </p>
    </div>
  );
}

export default Carousel;

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    url: 'https://images.unsplash.com/photo-1682686578289-cf9c8c472c9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
];
