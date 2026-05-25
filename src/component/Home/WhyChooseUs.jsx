import { FaAward, FaClock, FaShieldAlt, FaLeaf } from 'react-icons/fa';
import AnimatedSection from '../UI/AnimatedSection';
import SectionHeader from '../UI/SectionHeader';
import { siteData } from '../../data/siteData';

const iconMap = { FaAward, FaClock, FaShieldAlt, FaLeaf };

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white dark:bg-dark-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div>
              <div className="text-left mb-10">
                <span className="section-subtitle">Why Choose Us</span>
                <h2 className="section-title">Excellence in Every Detail</h2>
                <div className="section-divider" />
                <p className="text-dark-400 dark:text-dark-300 leading-relaxed mt-4">
                  We don't just build structures – we create spaces that inspire, endure, and exceed expectations.
                </p>
              </div>

              <div className="space-y-8">
                {siteData.whyChooseUs.map((item, index) => {
                  const IconComponent = iconMap[item.icon];
                  return (
                    <div key={index} className="flex gap-5">
                      <div className="w-14 h-14 bg-gold-400 flex items-center justify-center text-white text-xl shrink-0">
                        <IconComponent />
                      </div>
                      <div>
                        <h4 className="font-heading text-xl font-bold text-dark-900 dark:text-white mb-2">{item.title}</h4>
                        <p className="text-dark-400 dark:text-dark-300 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                alt="Why Choose Curve Brand"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-gold-400 p-10 text-white text-center">
                <span className="font-heading text-6xl font-bold block leading-none">100%</span>
                <span className="text-xs uppercase tracking-[2px] mt-2 block">Client Satisfaction</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}