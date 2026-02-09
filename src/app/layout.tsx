import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Navbar } from '@/components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-geist-sans' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  title: 'Adrian John C. Garcia | Full-Stack Web Developer',
  description:
    'Portfolio of Adrian John C. Garcia — Full-Stack Web Developer & Computer Science Student. React, Next.js, TypeScript, Laravel. Building scalable web applications.',
  keywords: [
    'Full-Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Laravel',
    'Web Developer',
    'Computer Science',
    'Pamantasan ng Cabuyao',
  ],
  authors: [{ name: 'Adrian John C. Garcia', url: 'https://github.com' }],
  openGraph: {
    title: 'Adrian John C. Garcia | Full-Stack Web Developer',
    description: 'Portfolio — Full-Stack Web Developer & CS Student. React, Next.js, TypeScript, Laravel.',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100`}
      >
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
