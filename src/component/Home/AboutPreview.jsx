import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import AnimatedSection from '../UI/AnimatedSection';
import { siteData } from '../../data/siteData';

export default function AboutPreview() {
  const features = ['Licensed & Insured', 'Quality Materials', 'Expert Team', 'On-Time Delivery'];

  return (
    <section className="py-24 bg-white dark:bg-dark-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="About Curve Brand"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold-400 flex flex-col items-center justify-center text-white text-center">
                <span className="font-heading text-6xl font-bold leading-none">12+</span>
                <span className="text-xs uppercase tracking-[2px] mt-2">Years Experience</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <span className="section-subtitle">About Us</span>
            <h2 className="section-title">Crafting Exceptional Spaces Since 2012</h2>
            <div className="section-divider" />
            <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-4">
              Curve Brand, a division of {siteData.company.fullName}, stands at the forefront of premium construction and interior design. We combine traditional craftsmanship with modern innovation.
            </p>
            <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-8">
              Our team of skilled architects, engineers, and designers work collaboratively to transform your vision into reality with excellence and precision.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FiCheckCircle className="text-gold-400 shrink-0" size={20} />
                  <span className="font-semibold text-dark-900 dark:text-white text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-dark">
              Learn More <FiArrowRight />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}