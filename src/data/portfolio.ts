export const siteConfig = {
  name: 'Adrian John C. Garcia',
  role: 'Full-Stack Web Developer / Computer Science Student',
  summary:
    'Results-oriented Computer Science professional with experience building full-stack web applications using React, Next.js, TypeScript, and Laravel. Skilled in responsive UI development, REST API design, authentication systems, and database-driven applications.',
  email: 'garciaadrianjohn75@gmail.com',
  phone: '09497939859',
  facebookUrl: 'https://www.facebook.com/share/18CmRo1Yvh/',
  linkedinUrl: 'https://www.linkedin.com/in/garcia-adrian-john-c-5673a93aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  resumeUrl: '/Resume.pdf',
  school: 'Pamantasan ng Cabuyao',
  aboutParagraphs: [
    'I am a Computer Science graduate from Pamantasan ng Cabuyao with a strong passion for full-stack development.',
    'I enjoy building real-world systems and scalable web applications that solve actual problems. From planning and design to deployment, I love being involved across the full development lifecycle.',
  ],
};

export type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'backend';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: ProjectCategory;
  status?: 'completed' | 'in-progress';
}

export const projects: Project[] = [
  {
    id: 'codementor',
    title: 'CodeMentor',
    description:
      'AI-powered interactive tutor for Java programming. Built with Next.js and integrated AI APIs for personalized learning.',
    image: 'https://picsum.photos/600/280?random=1',
    tech: ['Next.js', 'AI APIs', 'Database'],
    category: 'fullstack',
    status: 'completed',
  },
  {
    id: 'case-study',
    title: 'Case Study Project',
    description: 'Ongoing case study and full-stack application. In active development.',
    image: 'https://picsum.photos/600/280?random=3',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://case-study-bice.vercel.app/',
    category: 'fullstack',
    status: 'in-progress',
  },
  {
    id: 'attendance-systems',
    title: 'Attendance / Web Systems Projects',
    description:
      'Full-stack web systems with authentication, database integration, and responsive dashboards for internal use.',
    image: 'https://picsum.photos/600/280?random=2',
    tech: ['React', 'Next.js', 'Laravel'],
    category: 'fullstack',
    status: 'completed',
  },
];

export const skills = {
  frontend: [
    { name: 'React', level: 'Advanced' },
    { name: 'Next.js', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Tailwind CSS', level: 'Advanced' },
  ],
  backend: [
    { name: 'Laravel', level: 'Intermediate' },
    { name: 'REST API Development', level: 'Advanced' },
    { name: 'Authentication Systems', level: 'Advanced' },
    { name: 'Database Integration', level: 'Advanced' },
  ],
  tools: [
    { name: 'Git', level: 'Advanced' },
    { name: 'UI/UX Design', level: 'Intermediate' },
    { name: 'Deployment (Vercel)', level: 'Advanced' },
  ],
};

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'peso',
    title: 'Web Developer',
    company: 'PESO City of Cabuyao',
    period: '2026',
    responsibilities: [
      'Developed internal web systems for organizational use',
      'Built responsive dashboards and admin interfaces',
      'Integrated APIs and database services for data management',
      'Collaborated with stakeholders to deliver scalable solutions',
    ],
  },
];
