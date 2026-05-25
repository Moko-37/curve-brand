import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import SectionHeader from '../UI/SectionHeader';
import { siteData } from '../../data/siteData';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % siteData.testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-dark-900 to-dark-800 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[300px] md:text-[400px] text-dark-700 opacity-20 select-none pointer-events-none">
        "
      </div>

      <div className="container-custom relative z-10">
        <SectionHeader subtitle="Testimonials" title="What Our Clients Say" light />

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl italic text-dark-300 leading-relaxed mb-10">
                "{siteData.testimonials[current].content}"
              </p>

              <div className="flex items-center justify-center gap-5 mb-4">
                <img
                  src={siteData.testimonials[current].avatar}
                  alt={siteData.testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold-400"
                />
                <div className="text-left">
                  <h4 className="font-heading text-lg font-bold text-white">
                    {siteData.testimonials[current].name}
                  </h4>
                  <span className="text-gold-400 text-sm">
                    {siteData.testimonials[current].role}
                  </span>
                </div>
              </div>

              <div className="flex justify-center gap-1 text-gold-400">
                {[...Array(siteData.testimonials[current].rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-10">
            {siteData.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 transition-all duration-300 ${
                  current === index ? 'bg-gold-400 w-8' : 'bg-dark-600 w-3 hover:bg-gold-400'
                }`}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}