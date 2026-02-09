'use client';

import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 scroll-mt-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
