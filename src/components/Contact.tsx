'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { siteConfig } from '@/data/portfolio';

export function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="Get in touch with me">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <div className="glass-card p-8 space-y-6">
          <div>
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Email</h3>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
          <div>
            <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Phone</h3>
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              {siteConfig.phone}
            </a>
          </div>
          <div className="flex flex-wrap gap-6 pt-2">
            {siteConfig.facebookUrl && (
              <div>
                <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Facebook</h3>
                <Link
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Facebook profile
                </Link>
              </div>
            )}
            {siteConfig.linkedinUrl && (
              <div>
                <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">LinkedIn</h3>
                <Link
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  LinkedIn profile
                </Link>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
