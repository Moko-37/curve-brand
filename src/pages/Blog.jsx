import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';
import AnimatedSection from '../component/UI/AnimatedSection';
import SectionHeader from '../component/UI/SectionHeader';
import { siteData } from '../data/siteData';

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Curve Brand</title>
      </Helmet>

      {/* Page Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center bg-gradient-to-br from-dark-900/90 to-dark-900/80 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2000&q=80')] bg-cover bg-center">
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="section-subtitle !text-gold-400">Blog</span>
            <h1 className="font-heading text-5xl md:text-6xl text-white font-bold">Insights & Tips</h1>
            <div className="section-divider" />
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <SectionHeader subtitle="Our Blog" title="Latest Articles" description="Stay updated with the latest trends and tips in construction and design." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.blogPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.1}>
                <div className="bg-white dark:bg-dark-900 overflow-hidden group card-hover border border-dark-100 dark:border-dark-700">
                  <div className="relative h-60 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-gold-400 text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-dark-400 text-sm mb-3">
                      <FiCalendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-dark-900 dark:text-white mb-3 group-hover:text-gold-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-dark-400 dark:text-dark-300 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                    <button className="inline-flex items-center gap-2 text-gold-500 font-semibold text-sm uppercase tracking-wider hover:gap-4 transition-all duration-300">
                      Read More <FiArrowRight />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}