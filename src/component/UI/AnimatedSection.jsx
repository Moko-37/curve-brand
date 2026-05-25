import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function AnimatedSection({ children, className = '', delay = 0 }) {
  const { ref, inView } = useScrollAnimation(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}