import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiTarget, FiEye } from 'react-icons/fi';
import { FaAward, FaUsers, FaProjectDiagram, FaHandshake } from 'react-icons/fa';
import AnimatedSection from '../component/UI/AnimatedSection';
import SectionHeader from '../component/UI/SectionHeader';
import { siteData } from '../data/siteData';

const values = [
  { icon: FaAward, title: 'Excellence', desc: 'We strive for excellence in every project we undertake.' },
  { icon: FaUsers, title: 'Teamwork', desc: 'Our collaborative approach ensures the best outcomes.' },
  { icon: FaProjectDiagram, title: 'Innovation', desc: 'We embrace modern techniques and creative solutions.' },
  { icon: FaHandshake, title: 'Integrity', desc: 'Honest and transparent in all our dealings.' },
];

const processSteps = [
  { step: '01', title: 'Consultation', desc: 'We listen to your vision and requirements.' },
  { step: '02', title: 'Planning', desc: 'Detailed project planning and design development.' },
  { step: '03', title: 'Execution', desc: 'Professional construction with quality control.' },
  { step: '04', title: 'Delivery', desc: 'Final touches and handover of your dream space.' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Curve Brand</title>
      </Helmet>

      {/* Page Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center bg-gradient-to-br from-dark-900/90 to-dark-900/80 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&q=80')] bg-cover bg-center">
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-subtitle !text-gold-400">About Us</span>
            <h1 className="font-heading text-5xl md:text-6xl text-white font-bold">Our Story</h1>
            <div className="section-divider" />
          </motion.div>
        </div>
      </section>

      {/* Main About */}
      <section className="py-24 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Our Story" className="w-full h-[500px] object-cover" />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold-400 flex flex-col items-center justify-center text-white text-center">
                  <span className="font-heading text-6xl font-bold leading-none">12+</span>
                  <span className="text-xs uppercase tracking-[2px] mt-2">Years Experience</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <span className="section-subtitle">Our Journey</span>
              <h2 className="section-title">Building Excellence Since 2012</h2>
              <div className="section-divider" />
              <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-4">
                Curve Brand was established with a vision to redefine the construction and interior design landscape. What started as a small firm has grown into a trusted name in the industry.
              </p>
              <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-4">
                Over the years, we have completed over 150 projects across residential, commercial, and industrial sectors, earning the trust and satisfaction of our clients.
              </p>
              <p className="text-dark-400 dark:text-dark-300 leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction drives everything we do, making us the preferred choice for discerning clients.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-dark-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-white dark:bg-dark-900 p-12 h-full border border-dark-100 dark:border-dark-700">
                <FiTarget className="text-gold-400 text-3xl mb-6" />
                <h3 className="font-heading text-2xl font-bold text-dark-900 dark:text-white mb-4">Our Mission</h3>
                <p className="text-dark-400 dark:text-dark-300 leading-relaxed">
                  To deliver exceptional construction and interior design solutions that exceed client expectations, while maintaining the highest standards of quality, safety, and sustainability.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white dark:bg-dark-900 p-12 h-full border border-dark-100 dark:border-dark-700">
                <FiEye className="text-gold-400 text-3xl mb-6" />
                <h3 className="font-heading text-2xl font-bold text-dark-900 dark:text-white mb-4">Our Vision</h3>
                <p className="text-dark-400 dark:text-dark-300 leading-relaxed">
                  To be the leading construction and design company in the region, known for our innovation, craftsmanship, and commitment to transforming spaces into extraordinary experiences.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <SectionHeader subtitle="Our Values" title="What Drives Us" description="Our core values guide every decision and action we take." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-gold-400/10 flex items-center justify-center text-gold-400 text-2xl mx-auto mb-5">
                    <value.icon />
                  </div>
                  <h4 className="font-heading text-xl font-bold text-dark-900 dark:text-white mb-3">{value.title}</h4>
                  <p className="text-dark-400 dark:text-dark-300 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-dark-50 dark:bg-dark-800">
        <div className="container-custom">
          <SectionHeader subtitle="Our Team" title="Meet The Experts" description="The talented people behind our success." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteData.team.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group text-center">
                  <div className="relative overflow-hidden mb-5">
                    <img src={member.image} alt={member.name} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gold-400/0 group-hover:bg-gold-400/80 transition-all duration-500 flex items-center justify-center">
                      <span className="text-white text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">View Profile</span>
                    </div>
                  </div>
                  <h4 className="font-heading text-lg font-bold text-dark-900 dark:text-white">{member.name}</h4>
                  <span className="text-gold-500 text-sm">{member.role}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <SectionHeader subtitle="Our Process" title="How We Work" description="A streamlined approach from concept to completion." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="text-center relative">
                  <span className="font-heading text-7xl font-bold text-dark-100 dark:text-dark-700 block mb-4">{step.step}</span>
                  <h4 className="font-heading text-xl font-bold text-dark-900 dark:text-white mb-3">{step.title}</h4>
                  <p className="text-dark-400 dark:text-dark-300 text-sm">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}