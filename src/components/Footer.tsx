'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href={`mailto:${siteConfig.email}`}
            className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
          >
            Email
          </Link>
          <Link
            href="#hero"
            className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
