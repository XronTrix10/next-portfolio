"use client";

import { useState, useEffect } from "react";

export default function ScrollButton() {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > window.innerHeight * 0.6) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= window.innerHeight * 0.6) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div className="fixed bottom-6 right-6 z-20" id="scrollbtn">
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="backdrop-blur-xl border-2 border-[#ff0000] hover:text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-600 red-text rounded-xl p-2 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevrons-up"
          >
            <path d="m17 11-5-5-5 5" />
            <path d="m17 18-5-5-5 5" />
          </svg>
        </button>
      )}
    </div>
  );
}
