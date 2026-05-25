import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiMapPin, FiCalendar, FiX } from 'react-icons/fi';
import AnimatedSection from '../component/UI/AnimatedSection';
import SectionHeader from '../component/UI/SectionHeader';
import { siteData } from '../data/siteData';

const categories = ['all', 'residential', 'commercial', 'interior'];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const filtered = filter === 'all' ? siteData.projects : siteData.projects.filter(p => p.category === filter);

  return (
    <>
      <Helmet>
        <title>Projects | Curve Brand</title>
      </Helmet>

      {/* Page Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center bg-gradient-to-br from-dark-900/90 to-dark-900/80 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&q=80')] bg-cover bg-center">
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-subtitle !text-gold-400">Portfolio</span>
            <h1 className="font-heading text-5xl md:text-6xl text-white font-bold">Our Projects</h1>
            <div className="section-divider" />
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <SectionHeader subtitle="Portfolio" title="Featured Projects" description="Explore our diverse portfolio of completed projects." />

          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 text-sm font-medium uppercase tracking-wider border transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gold-400 border-gold-400 text-white'
                    : 'border-dark-200 dark:border-dark-600 text-dark-500 dark:text-dark-400 hover:border-gold-400 hover:text-gold-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative h-96 overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 group-hover:bg-gradient-to-t group-hover:from-gold-400/90 group-hover:via-gold-400/30 transition-all duration-500">
                    <span className="text-gold-400 text-xs font-semibold tracking-[2px] uppercase mb-2 group-hover:text-white transition-colors">{project.category}</span>
                    <h3 className="font-heading text-2xl text-white font-bold mb-2">{project.title}</h3>
                    <div className="flex items-center gap-4 text-dark-300 text-xs mb-3 group-hover:text-white/80 transition-colors">
                      <span className="flex items-center gap-1"><FiMapPin size={12} /> {project.location}</span>
                      <span className="flex items-center gap-1"><FiCalendar size={12} /> {project.year}</span>
                    </div>
                    <p className="text-dark-300 text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 group-hover:text-white/90">{project.description}</p>
                  </div>
                  <div className="absolute top-5 right-5 w-12 h-12 bg-white flex items-center justify-center text-dark-900 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <FiArrowRight />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-dark-900 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-dark-900/50 hover:bg-gold-400 text-white hover:text-white flex items-center justify-center rounded-full z-10 transition-colors"
              >
                <FiX size={20} />
              </button>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-80 object-cover" />
              <div className="p-8">
                <span className="text-gold-400 text-sm font-semibold tracking-[2px] uppercase">{selectedProject.category}</span>
                <h3 className="font-heading text-3xl font-bold text-dark-900 dark:text-white mt-2 mb-4">{selectedProject.title}</h3>
                <div className="flex items-center gap-6 text-dark-400 text-sm mb-4">
                  <span className="flex items-center gap-2"><FiMapPin /> {selectedProject.location}</span>
                  <span className="flex items-center gap-2"><FiCalendar /> {selectedProject.year}</span>
                </div>
                <p className="text-dark-400 dark:text-dark-300 leading-relaxed mb-6">{selectedProject.description}</p>
                <Link to="/contact" className="btn-primary">Request Quote</Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}