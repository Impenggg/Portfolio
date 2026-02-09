interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'in-progress' | 'tech';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const base = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  const variants = {
    default: 'bg-primary-100 text-primary-800 dark:bg-primary-900/40 dark:text-primary-300',
    'in-progress':
      'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 border border-amber-300/50',
    tech: 'bg-slate-200 text-slate-700 dark:bg-slate-600 dark:text-slate-200',
  };
  return <span className={`${base} ${variants[variant]} ${className}`}>{children}</span>;
}
