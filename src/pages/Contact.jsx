import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import toast from 'react-hot-toast';
import AnimatedSection from '../component/UI/AnimatedSection';
import SectionHeader from '../component/UI/SectionHeader';
import { siteData } from '../data/siteData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you! We will get back to you within 24 hours.');
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Curve Brand</title>
      </Helmet>

      {/* Page Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center bg-gradient-to-br from-dark-900/90 to-dark-900/80 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=2000&q=80')] bg-cover bg-center">
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-subtitle !text-gold-400">Contact Us</span>
            <h1 className="font-heading text-5xl md:text-6xl text-white font-bold">Get In Touch</h1>
            <div className="section-divider" />
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-dark-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <AnimatedSection>
              <div>
                <SectionHeader subtitle="Get In Touch" title="Let's Discuss Your Project" description="Ready to transform your space? Contact us today." />

                <div className="space-y-6 mt-10">
                  {[
                    { icon: FiMapPin, title: 'Office Location', content: siteData.company.address },
                    { icon: FiPhone, title: 'Phone Number', content: siteData.company.phone, link: `tel:${siteData.company.phone}` },
                    { icon: FiMail, title: 'Email Address', content: siteData.company.email, link: `mailto:${siteData.company.email}` },
                    { icon: FiClock, title: 'Working Hours', content: `${siteData.company.workingHours}\n${siteData.company.workingHours2}` },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-white dark:bg-dark-900 flex items-center justify-center text-gold-400 shrink-0 shadow-md">
                        <item.icon size={22} />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-dark-900 dark:text-white mb-1">{item.title}</h4>
                        {item.link ? (
                          <a href={item.link} className="text-dark-400 hover:text-gold-400 transition-colors text-sm whitespace-pre-line">{item.content}</a>
                        ) : (
                          <p className="text-dark-400 text-sm whitespace-pre-line">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 mt-8">
                  {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 bg-white dark:bg-dark-900 flex items-center justify-center text-dark-600 dark:text-dark-300 hover:bg-gold-400 hover:text-white transition-all duration-300 shadow-md">
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white dark:bg-dark-900 p-10 shadow-lg">
                <h3 className="font-heading text-2xl font-bold text-dark-900 dark:text-white mb-8">Request a Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-dark-900 dark:text-white mb-2">Full Name *</label>
                      <input
                        type="text" required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-900 dark:text-white focus:outline-none focus:border-gold-400 transition-colors"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark-900 dark:text-white mb-2">Email Address *</label>
                      <input
                        type="email" required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-900 dark:text-white focus:outline-none focus:border-gold-400 transition-colors"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-dark-900 dark:text-white mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-900 dark:text-white focus:outline-none focus:border-gold-400 transition-colors"
                        placeholder="Your Phone"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark-900 dark:text-white mb-2">Service</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-900 dark:text-white focus:outline-none focus:border-gold-400 transition-colors"
                      >
                        <option value="">Select Service</option>
                        <option value="construction">Building Construction</option>
                        <option value="interior">Interior Design</option>
                        <option value="aluminum">Aluminum & Glass</option>
                        <option value="renovation">Renovation</option>
                        <option value="painting">Painting & Finishing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-dark-900 dark:text-white mb-2">Project Details *</label>
                    <textarea
                      required rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-900 dark:text-white focus:outline-none focus:border-gold-400 transition-colors resize-vertical"
                      placeholder="Describe your project requirements..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message <FiSend />
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.697!2d55.2707!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4348bb5f0f27%3A0x6b3e5a5a5c5c5c5c!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
          className="w-full h-full border-none grayscale hover:grayscale-0 transition-all duration-500"
          allowFullScreen=""
          loading="lazy"
          title="Office Location"
        />
      </div>
    </>
  );
}