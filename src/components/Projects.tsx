'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { Badge } from '@/components/Badge';
import { projects } from '@/data/portfolio';

export function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Things I've built and worked on">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="glass-card p-5 flex flex-col"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                {project.title}
              </h3>
              {project.status === 'in-progress' && (
                <Badge variant="in-progress">In Progress</Badge>
              )}
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((t) => (
                <Badge key={t} variant="tech">
                  {t}
                </Badge>
              ))}
            </div>
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors"
              >
                Live Demo
              </Link>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
