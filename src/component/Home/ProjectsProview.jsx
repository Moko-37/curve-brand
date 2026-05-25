import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import AnimatedSection from '../UI/AnimatedSection';
import SectionHeader from '../UI/SectionHeader';
import { siteData } from '../../data/siteData';

const categories = ['all', 'residential', 'commercial', 'interior'];

export default function ProjectsPreview() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? siteData.projects.slice(0, 6) : siteData.projects.filter(p => p.category === filter).slice(0, 6);

  return (
    <section className="py-24 bg-dark-900">
      <div className="container-custom">
        <SectionHeader
          subtitle="Portfolio"
          title="Featured Projects"
          description="Explore our diverse portfolio showcasing our commitment to excellence."
          light
        />

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 text-sm font-medium uppercase tracking-wider border transition-all duration-300 ${
                filter === cat
                  ? 'bg-gold-400 border-gold-400 text-white'
                  : 'border-dark-600 text-dark-400 hover:border-gold-400 hover:text-gold-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative h-96 overflow-hidden group cursor-pointer"
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 transition-all duration-500 group-hover:bg-gradient-to-t group-hover:from-gold-400/90 group-hover:via-gold-400/30">
                <span className="text-gold-400 text-xs font-semibold tracking-[2px] uppercase mb-2 group-hover:text-white transition-colors">
                  {project.category}
                </span>
                <h3 className="font-heading text-2xl text-white font-bold mb-2">{project.title}</h3>
                <p className="text-dark-300 text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 group-hover:text-white/90">
                  {project.description}
                </p>
              </div>
              <div className="absolute top-5 right-5 w-12 h-12 bg-white flex items-center justify-center text-dark-900 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <FiArrowRight />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects" className="btn-primary">
            View All Projects <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}