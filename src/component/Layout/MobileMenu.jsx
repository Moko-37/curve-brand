import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPhone, FiMail } from 'react-icons/fi';
import { siteData } from '../../data/siteData';

export default function MobileMenu({ isOpen, onClose, links, currentPath }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 z-[998] backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full sm:w-80 h-full bg-dark-900 z-[999] flex flex-col overflow-y-auto"
          >
            <div className="p-6 flex justify-between items-center border-b border-dark-700">
              <span className="font-heading text-xl text-white tracking-wider">CURVE</span>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {links.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={onClose}
                    className={`block font-heading text-3xl py-4 border-b border-dark-700 transition-colors duration-300 ${
                      currentPath === link.path
                        ? 'text-gold-400'
                        : 'text-white hover:text-gold-400'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6"
              >
                <Link to="/contact" onClick={onClose} className="btn-primary w-full justify-center">
                  Get Quote
                </Link>
              </motion.div>
            </nav>

            <div className="p-8 border-t border-dark-700">
              <div className="flex gap-4 mb-4">
                <a href={`tel:${siteData.company.phone}`} className="flex items-center gap-2 text-dark-300 hover:text-gold-400 text-sm">
                  <FiPhone size={14} /> {siteData.company.phone}
                </a>
              </div>
              <a href={`mailto:${siteData.company.email}`} className="flex items-center gap-2 text-dark-300 hover:text-gold-400 text-sm">
                <FiMail size={14} /> {siteData.company.email}
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}