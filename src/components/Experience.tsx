'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { experiences } from '@/data/portfolio';

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Professional and development experience"
    >
      <div className="max-w-3xl mx-auto">
        <div className="relative border-l-2 border-primary-300 dark:border-primary-600 pl-8 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-slate-900" />
              <div className="glass-card p-6">
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                    {exp.title}
                  </h3>
                  <span className="text-primary-600 dark:text-primary-400 font-medium">
                    {exp.company}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 text-sm">
                  {exp.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
