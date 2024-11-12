'use client'

const ReturnToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 left-4 bg-red-600
        text-white rounded-full p-3 shadow-lg
        hover:bg-red-700 transition-colors
        sm:p-4 sm:left-6 sm:bottom-6"
      aria-label="Return to top"
    >
      &#8679;
    </button>
  );
};

export default ReturnToTopButton;
