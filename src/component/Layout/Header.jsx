import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import MobileMenu from './MobileMenu';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 dark:bg-dark-900/95 shadow-lg backdrop-blur-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-white font-heading text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
              C
            </div>
            <div>
              <span
                className={`font-heading text-xl font-bold tracking-wider transition-colors ${
                  scrolled ? 'text-dark-900 dark:text-white' : 'text-white'
                }`}
              >
                CURVE
              </span>
              <span
                className={`block text-[10px] tracking-[2px] uppercase transition-colors ${
                  scrolled ? 'text-dark-400 dark:text-dark-300' : 'text-dark-300'
                }`}
              >
                Construction & Design
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium uppercase tracking-wider py-2 transition-colors duration-300 ${
                  scrolled
                    ? location.pathname === link.path
                      ? 'text-gold-400'
                      : 'text-dark-600 dark:text-dark-300 hover:text-gold-400'
                    : location.pathname === link.path
                    ? 'text-gold-400'
                    : 'text-white hover:text-gold-400'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gold-400 transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gold-400 hover:text-white ${
                scrolled
                  ? 'text-dark-600 dark:text-dark-300'
                  : 'text-white'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
            </button>

            <Link
              to="/contact"
              className="hidden lg:inline-flex btn-primary !py-3 !px-6 !text-xs"
            >
              Get Quote
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                scrolled ? 'text-dark-900 dark:text-white' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
        currentPath={location.pathname}
      />
    </>
  );
}