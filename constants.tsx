import { Service, Project, TeamMember, TimelineStep } from './types';

export const SERVICES: Service[] = [
  {
    id: 'saas',
    title: 'SaaS Architecture',
    description: 'Scalable, cloud-native software ecosystems.',
    detailedInfo: 'We build robust multi-tenant architectures with automated scaling, secure billing integrations, and seamless deployment pipelines. Our SaaS solutions are engineered to grow with your user base.',
    icon: 'Cloud'
  },
  {
    id: 'ai',
    title: 'AI Automation',
    description: 'Next-gen intelligence for your workflows.',
    detailedInfo: 'Integrating LLMs, computer vision, and predictive analytics into your business processes. We transform manual bottlenecks into autonomous, high-speed profit centers.',
    icon: 'Cpu'
  },
  {
    id: 'marketing',
    title: 'Marketing Agency',
    description: 'Data-driven growth and digital presence.',
    detailedInfo: 'Performance marketing that actually converts. We combine SEO, content clusters, and paid media with behavioral analytics to skyrocket your brand awareness.',
    icon: 'Target'
  },
  {
    id: 'design',
    title: 'Design & Graphics',
    description: 'Aesthetic systems that define industries.',
    detailedInfo: 'High-fidelity UI/UX design and motion graphics. We create brand identities that look premium, feel intuitive, and command authority in the digital space.',
    icon: 'Palette'
  }
];

export const TIMELINE: TimelineStep[] = [
  {
    week: 'Week 0',
    title: 'Strategy & Onboarding',
    description: 'Deep-dive session to align business goals with technical requirements. We map the entire user journey.'
  },
  {
    week: 'Week 1',
    title: 'Rapid Prototyping',
    description: 'Development of the core MVP architecture and high-fidelity UI designs. Speed meets precision.'
  },
  {
    week: 'Week 2',
    title: 'Testing & Deployment',
    description: 'Rigorous stress-testing, QA automation, and final production launch with 24/7 monitoring setup.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'imagify',
    title: 'Imagify',
    category: 'AI Generative SaaS',
    description: 'A high-performance text-to-image generator using stable diffusion with custom style fine-tuning. We handled the entire prompt-engineering pipeline.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200',
    tags: ['Next.js', 'PyTorch', 'AWS']
  },
  {
    id: 'farmhelp',
    title: 'FarmHelp',
    category: 'Agritech SaaS',
    description: 'AI-driven crop recommendation engine based on localized soil nitrogen levels and weather patterns. Helping farmers achieve 40% higher yields.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200',
    tags: ['React Native', 'Data Science', 'Postgres']
  },
  {
    id: 'aiservice',
    title: 'AI Enterprise Suite',
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200',
    description: 'An all-in-one automation tool for document classification and financial sentiment analysis for Fortune 500 companies.',
    tags: ['Python', 'FastAPI', 'Azure']
  },
  {
    id: 'marketing-p',
    title: 'ViralGrowth',
    category: 'Digital Strategy',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    description: 'Successful marketing campaign overhaul for a leading fintech brand, yielding 300% ROI and massive social engagement.',
    tags: ['Marketing', 'Ads', 'Analytics']
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Lingesh MV',
    role: 'Team Lead & Connect',
    image: 'https://image2url.com/r2/bucket2/images/1766843517992-85753fb1-3a97-4976-86c8-e1bef1767be3.jpeg',
    linkedin: 'https://www.linkedin.com/in/lingesh-m-a527272b1',
    github: 'https://github.com/lingesh-cdkey'
  },
  {
    name: 'Meiyappan KMA',
    role: 'Lead Developer',
    image: 'https://image2url.com/r2/bucket2/images/1766843564003-bc479830-b132-4877-b42a-375c2929d25c.jpeg',
    linkedin: 'https://www.linkedin.com/in/menu-57a9a5298/',
    github: 'https://github.com/Meiyappan2006'
  },
  {
    name: 'Adithiyaa JP',
    role: 'Senior Developer',
    image: 'https://image2url.com/r2/bucket2/images/1766843610932-d2e444d9-7c51-46a3-8206-1cbb656fd81d.jpeg',
    linkedin: 'https://www.linkedin.com/in/adithiyaa-jp-a51953303/',
    github: 'https://github.com/harsha-d-kyousuke'
  },
  {
    name: 'Subhash R',
    role: 'Devops Engineer',
    image: 'https://image2url.com/r2/bucket2/images/1766843442568-c29fe727-4be0-4244-b65a-aab1ed04134e.jpeg',
    linkedin: 'https://www.linkedin.com/in/subhash-r-b21137393/',
    github: 'https://github.com/Subhash-777'
  }
];
