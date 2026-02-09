import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-slate-50 dark:bg-slate-900">
      <h1 className="text-6xl md:text-8xl font-bold text-primary-500 dark:text-primary-400">404</h1>
      <p className="text-slate-600 dark:text-slate-400 mt-2 text-center">
        This page could not be found.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
