import { useState, useEffect } from "react";
import { texts } from "../../constants/texts";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = document.querySelector('.overflow-y-auto');
    if (!container) return;

    const toggleVisibility = () => {
      if (container.scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    container.addEventListener('scroll', toggleVisibility);

    return () => {
      container.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const container = document.querySelector('.overflow-y-auto');
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#0086E3] text-white p-3 rounded-full shadow-lg hover:bg-[#0086E3] transition-all duration-300 hover:scale-110"
          aria-label={texts.accessibility.scrollToTopAria}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}
