import { Link } from 'react-router-dom';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import AnimatedSection from '../UI/AnimatedSection';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-gold-400 to-gold-600">
      <div className="container-custom text-center">
        <AnimatedSection>
          <h2 className="font-heading text-4xl md:text-5xl text-white font-bold mb-5">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
            Let's discuss your vision and transform your space into something extraordinary. Get in touch with our team today for a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-outline !border-white">
              Request Quote <FiArrowRight />
            </Link>
            <a href="tel:+971501234567" className="btn-outline !border-white">
              <FiPhone /> Call Now
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}