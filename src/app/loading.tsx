'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-50 dark:bg-slate-900 z-50">
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="w-12 h-12 rounded-full border-4 border-primary-200 dark:border-primary-800 border-t-primary-600 dark:border-t-primary-400"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-slate-600 dark:text-slate-400"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
}
