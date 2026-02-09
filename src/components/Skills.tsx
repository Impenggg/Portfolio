'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { skills } from '@/data/portfolio';

const categories = [
  { key: 'frontend' as const, title: 'Frontend', icon: '🖥️' },
  { key: 'backend' as const, title: 'Backend', icon: '⚙️' },
  { key: 'tools' as const, title: 'Tools', icon: '🛠️' },
];

export function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies and tools I work with">
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((cat, catIndex) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: catIndex * 0.1 }}
            className="glass-card p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl" aria-hidden>{cat.icon}</span>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{cat.title}</h3>
            </div>
            <ul className="space-y-3">
              {skills[cat.key].map((skill) => (
                <li
                  key={skill.name}
                  className="text-slate-600 dark:text-slate-300"
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
