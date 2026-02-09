'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { siteConfig } from '@/data/portfolio';

export function About() {
  return (
    <Section id="about" title="About Me" subtitle="A bit about my background and interests">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto glass-card p-8 md:p-10"
      >
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          {siteConfig.aboutParagraphs[0]}
        </p>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          {siteConfig.aboutParagraphs[1]}
        </p>
        <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm">
          Graduated from <span className="font-medium text-primary-600 dark:text-primary-400">{siteConfig.school}</span>.
        </p>
      </motion.div>
    </Section>
  );
}
