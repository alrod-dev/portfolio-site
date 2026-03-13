export const PERSONAL_INFO = {
  name: 'Alfredo Wiesner',
  email: 'alrod.dev@gmail.com',
  github: 'https://github.com/alrod-dev',
  bio: 'AI Engineer & Senior Full-Stack Developer with 8+ years building production systems — from RAG architectures and LLM-powered applications to enterprise platforms serving millions of users',
  taglines: ['AI Engineer', 'Senior Full-Stack Engineer', 'LLM & RAG Architect'],
}

export const PROJECTS = [
  {
    id: 1,
    title: 'ai-nexus-chat',
    subtitle: 'Multi-Model AI Chat Platform',
    description: 'Intelligent chat platform supporting multiple AI models with real-time streaming, conversation memory, and markdown rendering.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'OpenAI', 'Anthropic'],
    github: 'https://github.com/alrod-dev/ai-nexus-chat',
    demo: 'https://ai-nexus-chat.vercel.app',
    icon: '🤖',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 2,
    title: 'rag-engine',
    subtitle: 'Document Intelligence RAG System',
    description: 'Advanced Retrieval-Augmented Generation system for document analysis with semantic search and intelligent answering.',
    technologies: ['Python', 'FastAPI', 'LangChain', 'Pinecone', 'Next.js'],
    github: 'https://github.com/alrod-dev/rag-engine',
    demo: 'https://rag-engine-sigma.vercel.app',
    icon: '📚',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'auto-reviewer',
    subtitle: 'AI-Powered Code Review Agent',
    description: 'GitHub-integrated AI code reviewer that provides intelligent feedback on pull requests with Claude API.',
    technologies: ['Node.js', 'TypeScript', 'Claude API', 'GitHub Webhooks'],
    github: 'https://github.com/alrod-dev/auto-reviewer',
    demo: 'https://auto-reviewer-flax.vercel.app',
    icon: '🔍',
    color: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 4,
    title: 'ml-pipeline-studio',
    subtitle: 'Visual ML Pipeline Builder',
    description: 'No-code visual editor for creating and training machine learning pipelines with drag-and-drop interface.',
    technologies: ['Python', 'FastAPI', 'React', 'scikit-learn'],
    github: 'https://github.com/alrod-dev/ml-pipeline-studio',
    demo: 'https://ml-pipeline-studio.vercel.app',
    icon: '⚙️',
    color: 'from-purple-500 to-cyan-500',
  },
  {
    id: 5,
    title: 'vue-forge',
    subtitle: 'Enterprise Vue 3 Component Library',
    description: 'Production-ready Vue 3 component library with 50+ components, comprehensive documentation, and Storybook integration.',
    technologies: ['Vue 3', 'TypeScript', 'VitePress', 'Tailwind CSS'],
    github: 'https://github.com/alrod-dev/vue-forge',
    demo: 'https://vue-forge.vercel.app',
    icon: '🎨',
    color: 'from-green-500 to-cyan-500',
  },
  {
    id: 6,
    title: 'react-realtime-dashboard',
    subtitle: 'Real-Time Analytics Dashboard',
    description: 'WebSocket-powered analytics dashboard with live data streaming, D3 visualizations, and state management with Zustand.',
    technologies: ['React', 'Next.js', 'WebSocket', 'D3', 'Zustand'],
    github: 'https://github.com/alrod-dev/react-realtime-dashboard',
    demo: 'https://react-realtime-dashboard-five.vercel.app',
    icon: '📊',
    color: 'from-orange-500 to-cyan-500',
  },
  {
    id: 7,
    title: 'next-commerce',
    subtitle: 'Full-Stack E-Commerce Platform',
    description: 'Complete e-commerce solution with Stripe payments, product management, shopping cart, and order tracking.',
    technologies: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/alrod-dev/next-commerce',
    demo: 'https://next-commerce-six-orpin.vercel.app',
    icon: '🛒',
    color: 'from-red-500 to-cyan-500',
  },
  {
    id: 8,
    title: 'aem-react-toolkit',
    subtitle: 'Adobe AEM + React Integration Toolkit',
    description: 'Toolkit for seamless integration of React components with Adobe AEM, including SPA SDK utilities and Storybook support.',
    technologies: ['React', 'AEM SPA SDK', 'Storybook'],
    github: 'https://github.com/alrod-dev/aem-react-toolkit',
    demo: 'https://aem-react-toolkit.vercel.app',
    icon: '🏗️',
    color: 'from-indigo-500 to-cyan-500',
  },
]

export const EXPERIENCE = [
  {
    id: 1,
    title: 'AI Engineering & Intelligent Systems',
    description:
      'Architected and deployed AI-powered features integrating LLM APIs and intelligent automation into production web applications serving millions of users. Built RAG-based tools using vector embeddings and semantic search to surface relevant data, reducing response times significantly.',
    highlights: [
      'LLM integration (OpenAI, Anthropic Claude, open-source models)',
      'RAG architectures with LangChain, Pinecone, and ChromaDB',
      'AI agent workflows and prompt engineering',
      'Multi-model chat systems with streaming and memory',
    ],
  },
  {
    id: 2,
    title: 'Enterprise Front-End Architecture',
    description:
      'Led framework migrations and built component libraries for applications serving 10M+ annual visitors. Spearheaded Vue 2 to Vue 3 and Tailwind CSS migrations with zero downtime, improving bundle size by 35% and developer velocity across engineering teams.',
    highlights: [
      'Led zero-downtime framework migrations at scale',
      'Built reusable component libraries used across product lines',
      'TypeScript adoption across entire ecosystems',
      'Performance optimization achieving 40%+ improvements',
    ],
  },
  {
    id: 3,
    title: 'Full-Stack & Enterprise Solutions',
    description:
      'Delivered React and Adobe AEM solutions for Fortune 500 clients including enterprise brands. Integrated headless CMS, built GraphQL data layers, and containerized development environments with Docker, cutting deployment times by 60%.',
    highlights: [
      'React + AEM SPA architecture for enterprise clients',
      'RESTful APIs and GraphQL data layer optimization',
      'Docker containerization and CI/CD pipeline automation',
      'A/B testing and analytics-driven optimization',
    ],
  },
]

export const PARTNERS = [
  { name: 'NVIDIA', industry: 'AI & GPU Computing', logo: '/logos/nvidia.svg', color: '#76B900' },
  { name: 'Adobe', industry: 'Enterprise Software', logo: '/logos/adobe.svg', color: '#FF0000' },
  { name: 'T-Mobile', industry: 'Telecommunications', logo: '/logos/t-mobile.svg', color: '#E20074' },
  { name: 'Sherwin-Williams', industry: 'Fortune 500', logo: '/logos/sherwin-williams.svg', color: '#0067A5' },
  { name: 'US Marines', industry: 'Government', logo: '/logos/usmarines.svg', color: '#C8102E' },
  { name: 'Perficient', industry: 'Digital Consultancy', logo: '/logos/perficient.svg', color: '#00A3E0' },
]

export const SKILLS = {
  'AI & ML': [
    'LLMs (OpenAI, Claude, Open-Source)',
    'RAG Architectures',
    'LangChain',
    'Vector Databases (Pinecone, ChromaDB)',
    'Prompt Engineering',
    'AI Agent Workflows',
    'Embeddings & Semantic Search',
    'scikit-learn',
    'Python',
  ],
  'Front-End': [
    'React',
    'Vue.js (2 & 3)',
    'Next.js',
    'Nuxt.js',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'SCSS/SASS',
  ],
  'Back-End': [
    'Node.js (Express)',
    'FastAPI',
    'Python',
    'Go',
    'PHP (Laravel)',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'GraphQL',
  ],
  'DevOps & Tools': [
    'Docker',
    'AWS',
    'Vercel',
    'CI/CD Pipelines',
    'Git',
    'Adobe AEM',
    'Storybook',
    'Cypress / Jest',
  ],
}

export const STATS = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Projects Delivered', value: '50+' },
  { label: 'Enterprise Clients', value: 'Fortune 500' },
  { label: 'Users Impacted', value: '10M+' },
]

export const ABOUT_CARDS = [
  {
    id: 1,
    title: 'I engineer AI-powered systems and scalable full-stack platforms',
    description:
      'From RAG architectures and LLM integrations to enterprise applications serving millions — I build solutions that are intelligent, performant, and production-ready.',
    isLarge: true,
    type: 'intro',
  },
  {
    id: 2,
    title: 'Available for remote work worldwide',
    description: 'Based in the Pacific timezone, ready to collaborate with teams across the globe.',
    type: 'globe',
  },
  {
    id: 3,
    title: 'Tech Stack',
    description: 'Specialized in modern web technologies and AI frameworks',
    type: 'tech-stack',
  },
  {
    id: 4,
    title: 'By The Numbers',
    description: '8+ Years | 50+ Projects | Fortune 500 Clients | 10M+ Users',
    type: 'stats',
  },
  {
    id: 5,
    title: 'Currently Building',
    description: 'Exploring multi-agent AI orchestration and advanced RAG pipelines for enterprise applications.',
    type: 'currently-building',
  },
  {
    id: 6,
    title: "Let's build something together",
    description: 'Have an idea? Reach out and let me know how I can help bring it to life.',
    type: 'cta',
  },
]
