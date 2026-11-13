export interface ProjectItem {
  title: string;
  status: string;
  description: string;
  problem?: string;
  features?: string;
  technologies?: string;
  liveUrl: string;
  githubUrl?: string;
}

export interface PracticeExperiment {
  name: string;
  note: string;
  githubUrl?: string;
}

export const PROFILE = {
  brandName: 'Rajendra Madival',
  role: 'Computer Science Engineering Student | Aspiring Software Developer',
  college: 'KLS Vishwanathrao Deshpande Institute of Technology (KLS VDIT), Haliyal',
  degree: 'Bachelor of Engineering (B.E.) in Computer Science and Engineering',
  graduationYear: '2028',
  cgpa: '8.92',
  location: 'India',
  email: 'rajendramadival7@gmail.com',
  links: {
    portfolio: 'https://rajendra-madival.vercel.app',
    github: 'https://github.com/Rajendra-Madival',
    linkedin: 'https://www.linkedin.com/in/rajendra-madival',
    leetcode: 'https://leetcode.com/u/Rajendra_madival',
  },
};

export const HERO_CONTENT = {
  typewriterText:
    'I turn ideas into working software, and explain how I built them.',
  actions: [
    { label: 'View my projects', href: '#projects' },
    { label: 'A little about me', href: '#about' },
    { label: 'Explore my skills', href: '#skills' },
    { label: 'My coding journey', href: '#journey' },
  ],
};

export const SHORT_INTRO = [
  "I'm Rajendra Madival, a Computer Science Engineering student at KLS VDIT, Haliyal. I enjoy building things with code, exploring how software works behind the scenes, and turning ideas into practical applications.",
  "I've worked with frontend technologies and React, and I'm now expanding into backend development, databases, and stronger problem-solving skills.",
  'I want to become a well-rounded software developer who can build applications end-to-end and explain the engineering decisions behind them.',
];

export const SKILLS = {
  current: [
    {
      category: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS (working knowledge)'],
    },
    {
      category: 'Programming',
      items: ['C++ (foundational knowledge)', 'JavaScript'],
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'VS Code', 'Vite'],
    },
  ],
  learning: [
    'Backend development',
    'Node.js',
    'Express.js',
    'PostgreSQL',
    'SQL',
    'Data Structures and Algorithms',
  ],
};

export const MAIN_PROJECTS: ProjectItem[] = [
  {
    title: 'Gym Khanna',
    status: 'Practical Build, Planned Rebuild',
    description:
      'A fitness tracking web application built around a practical need I encountered while working at a gym. I plan to improve and rebuild it as my development skills grow.',
    problem:
      'Addresses the everyday need for gym-goers to track workouts, nutrition, and body progress in one place without relying on scattered notes.',
    features:
      'Workout and exercise logging (sets, reps, rest timers, routines), nutrition, macro and water intake tracking, body measurements and progress logs, training analytics, and offline local storage with JSON export/import.',
    technologies: 'JavaScript, HTML, CSS',
    liveUrl: 'https://gym-khanna.vercel.app',
    githubUrl: 'https://github.com/Rajendra-Madival/GYM_KHANNA',
  },
  {
    title: 'Namma Kannada',
    status: 'Experimental Project',
    description:
      'Namma Kannada (Regional Dialect Explorer) is an experimental project related to Kannada. Currently in an experimental state, with microphone-related issues that need attention and debugging.',
    liveUrl: 'https://namma-kannada-three.vercel.app',
  },
];

export const PRACTICE_EXPERIMENTS: PracticeExperiment[] = [
  {
    name: 'Amazon Clone',
    note: 'Frontend layout & HTML/CSS practice build',
    githubUrl: 'https://github.com/Rajendra-Madival/Amazon_clone',
  },
  {
    name: 'Rock Paper Scissors',
    note: 'Interactive JavaScript game logic practice',
  },
  {
    name: 'Currency Converter',
    note: 'Frontend utility practice project',
  },
  {
    name: 'Calculator',
    note: 'Core DOM & JavaScript state practice',
  },
];

export const LEETCODE_PROBLEMS = [
  53, 67, 125, 1480, 1920, 1929, 1470, 2089, 1295, 1672, 50, 268, 26,
];

export const LEARNING_JOURNEY = [
  'Strengthen frontend development with React.',
  'Learn backend development using Node.js and Express.',
  'Learn PostgreSQL and SQL.',
  'Build full-stack applications that solve practical problems.',
  'Improve DSA and core computer science fundamentals.',
  'Become capable of independently designing, implementing, debugging, and explaining software.',
];

export const BEYOND_CODE = [
  'I enjoy playing chess.',
  'I enjoy creative writing and developing fictional worlds and stories.',
  'I like learning new technologies by experimenting and building.',
  'I value understanding concepts rather than blindly copying code.',
  'I want to become an independent developer who can take an idea from concept to implementation.',
];

export const CAREER_GOALS = [
  'Find software development and full-stack development internship opportunities.',
  'Become comfortable building and maintaining end-to-end applications.',
  'Strengthen programming fundamentals and problem-solving.',
  'Build a credible portfolio of projects that I can confidently explain in interviews.',
  'Grow into a capable, independent software engineer.',
];
