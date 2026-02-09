'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/portfolio';

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-indigo-50/30 dark:from-primary-950/20 dark:via-transparent dark:to-indigo-950/10" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-primary-600 dark:text-primary-400 font-medium mb-2"
        >
          Hello, I&apos;m
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-3"
        >
          {siteConfig.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-xl sm:text-2xl text-primary-600 dark:text-primary-400 font-medium mb-4"
        >
          {siteConfig.role}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8 text-base sm:text-lg"
        >
          {siteConfig.summary}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/25"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-medium hover:bg-primary-50 dark:hover:bg-primary-950/50 transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
