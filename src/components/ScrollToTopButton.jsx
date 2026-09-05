import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = 
        window.pageYOffset || 
        document.documentElement.scrollTop || 
        document.body.scrollTop || 
        window.scrollY || 
        0;

      // Show button as soon as user scrolls down more than 80px
      if (scrollPosition > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Scroll to top"
      style={{ zIndex: 99999 }}
      className={`fixed bottom-24 right-5 sm:bottom-28 sm:right-8 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#f59e0b] hover:bg-[#d97706] active:bg-[#b45309] text-white flex items-center justify-center shadow-xl hover:shadow-2xl active:scale-90 transition-all duration-300 cursor-pointer border-2 border-white drop-shadow-md ${
        isVisible 
          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
      }`}
    >
      <svg 
        className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3] fill-none stroke-current" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
