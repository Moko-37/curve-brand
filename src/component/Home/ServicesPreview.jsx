import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { FaBuilding, FaCouch, FaWindowMaximize, FaTools, FaPaintRoller, FaProjectDiagram } from 'react-icons/fa';
import AnimatedSection from '../UI/AnimatedSection';
import SectionHeader from '../UI/SectionHeader';
import { siteData } from '../../data/siteData';

const iconMap = { FaBuilding, FaCouch, FaWindowMaximize, FaTools, FaPaintRoller, FaProjectDiagram };

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-dark-50 dark:bg-dark-800">
      <div className="container-custom">
        <SectionHeader
          subtitle="What We Do"
          title="Our Premium Services"
          description="We offer comprehensive construction and design solutions tailored to meet your unique needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <div className="bg-white dark:bg-dark-900 p-10 relative overflow-hidden group card-hover border border-dark-100 dark:border-dark-700">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gold-400 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="absolute top-5 right-5 font-heading text-5xl font-bold text-dark-100 dark:text-dark-700">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="w-16 h-16 bg-dark-50 dark:bg-dark-800 flex items-center justify-center text-gold-400 text-2xl mb-6 group-hover:bg-gold-400 group-hover:text-white transition-all duration-300">
                    <IconComponent />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-dark-900 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-dark-400 dark:text-dark-300 text-sm leading-relaxed mb-6">{service.shortDesc}</p>
                  <Link to="/services" className="inline-flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider hover:gap-4 transition-all duration-300">
                    Learn More <FiArrowRight />
                  </Link>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}