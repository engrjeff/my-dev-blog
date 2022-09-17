import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const scrollCallback = () => {
      const scrolledFromTop = window.scrollY;
      setShown(() => scrolledFromTop > 300);
    };

    window.addEventListener('scroll', scrollCallback);

    scrollCallback();

    return () => {
      window.removeEventListener('scroll', scrollCallback);
    };
  }, []);

  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      aria-label='scroll to top'
      onClick={scrolltoTop}
      className={`${
        shown ? 'scale-100' : 'scale-0'
      } w-12 h-12 transition-transform duration-200 flex md:hidden fixed right-10 bottom-10 bg-primary rounded-full shadow-lg shadow-gray-900 justify-center items-center`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={2}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 15.75l7.5-7.5 7.5 7.5' />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
