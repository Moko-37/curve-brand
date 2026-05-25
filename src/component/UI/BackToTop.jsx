import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 left-8 w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center text-white shadow-lg shadow-gold-400/30 z-50 transition-all duration-500 hover:bg-gold-500 hover:-translate-y-1 ${
        visible ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
      }`}
      aria-label="Back to top"
    >
      <FiArrowUp size={20} />
    </button>
  );
}