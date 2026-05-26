import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import { CountUp } from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { siteData } from '../../data/siteData';

export default function Hero() {
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-dark-900/90 to-dark-900/80 bg-[url('https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=2000&q=80')] bg-cover bg-center bg-fixed">
      <div className="container-custom relative z-10 py-32">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block text-sm font-semibold tracking-[4px] uppercase text-gold-400 mb-5"
          >
            Welcome to Curve Brand
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.05] mb-6"
          >
            Building <span className="text-gold-400">Dreams</span> Into Reality
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg text-dark-900 max-w-xl mb-10 leading-relaxed"
          >
            Premium construction and interior design services by {siteData.company.fullName}. We transform spaces with precision, creativity, and excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/projects" className="btn-primary">
              View Our Work <FiArrowRight />
            </Link>
            <Link to="/contact" className="btn-outline">
              Request Quote <FiPhone />
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {siteData.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-heading font-bold text-gold-400 mb-2">
                {/* {statsInView ? <CountUp end={stat.number} duration={2} /> : '0'} */}
                <span>{statsInView ? stat.number : 0}{stat.suffix}</span>
                {/* {stat.suffix} */}
              </div>
              <div className="text-sm text-dark-900 uppercase tracking-[2px]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-xs tracking-[2px] uppercase">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-slate-600 rounded-full animate-bounce" />
        </div>
        Scroll
      </div>
    </section>
  );
}