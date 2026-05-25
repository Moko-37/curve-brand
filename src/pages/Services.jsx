import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBuilding, FaCouch, FaWindowMaximize, FaTools, FaPaintRoller, FaProjectDiagram } from 'react-icons/fa';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import AnimatedSection from '../component/UI/AnimatedSection';
import SectionHeader from '../component/UI/SectionHeader';
import { siteData } from '../data/siteData';

const iconMap = { FaBuilding, FaCouch, FaWindowMaximize, FaTools, FaPaintRoller, FaProjectDiagram };

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Curve Brand</title>
      </Helmet>

      {/* Page Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center bg-gradient-to-br from-dark-900/90 to-dark-900/80 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=2000&q=80')] bg-cover bg-center">
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-subtitle !text-gold-400">Our Services</span>
            <h1 className="font-heading text-5xl md:text-6xl text-white font-bold">What We Offer</h1>
            <div className="section-divider" />
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <SectionHeader subtitle="What We Do" title="Our Premium Services" description="Comprehensive construction and design solutions for every need." />

          <div className="space-y-20">
            {siteData.services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              const isReversed = index % 2 !== 0;

              return (
                <AnimatedSection key={service.id}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                    <div className={isReversed ? 'order-2 lg:order-1' : ''}>
                      <img src={service.image} alt={service.title} className="w-full h-[400px] object-cover" />
                    </div>
                    <div className={isReversed ? 'order-1 lg:order-2' : ''}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-gold-400/10 flex items-center justify-center text-gold-400 text-xl">
                          <IconComponent />
                        </div>
                        <span className="text-gold-400 font-heading text-5xl font-bold">0{index + 1}</span>
                      </div>
                      <h3 className="font-heading text-3xl font-bold text-dark-900 dark:text-white mb-4">{service.title}</h3>
                      <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-6">{service.fullDesc}</p>

                      <ul className="grid grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <FiCheckCircle className="text-gold-400 shrink-0" size={16} />
                            <span className="text-dark-600 dark:text-dark-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link to="/contact" className="btn-primary">
                        Request Quote <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}