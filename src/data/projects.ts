import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'nextcommerce',
    title: 'NextCommerce',
    description: 'A scalable e-commerce platform built with React, Next.js, and Stripe integration.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Next.js', 'Node.js', 'Stripe', 'MongoDB'],
    demoUrl: 'https://ecommerce-demo.dev',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    featured: true,
    category: 'web',
    caseStudy: {
      problem: 'Traditional e-commerce solutions lack customization and have high transaction fees.',
      solution: 'Built a custom platform with React and Next.js, integrating Stripe for payment processing with lower fees.',
      outcome: 'Reduced transaction costs by 30% and improved page load times by 45% compared to previous solution.'
    }
  },
  {
    id: 'ai-image-generator',
    title: 'AI Image Generator',
    description: 'A web application that generates images from text descriptions using AI.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'TypeScript', 'OpenAI API', 'TailwindCSS'],
    demoUrl: 'https://img-gen-rator.netlify.app/',
    githubUrl: 'https://github.com/Sach-in-SE/AI-Image-Generator',
    featured: true,
    category: 'ai',
    caseStudy: {
      problem: 'Creating custom images for projects is time-consuming and expensive.',
      solution: 'Developed an application that leverages AI to generate images from text descriptions.',
      outcome: 'Reduced image creation time from hours to seconds, with a 90% cost reduction.'
    }
  },
 
  {
    id: 'codepedia',
    title: 'Code Pedia',
    description: 'A Comprehensive Documentaion for All Programming Languages,Frameworks, and Libraries in one place .',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'TypeScript', 'Storybook', 'Jest', 'a11y'],
    demoUrl: 'https://component-library.dev',
    githubUrl: 'https://github.com/username/react-component-library',
    featured: false,
    category: 'open-source'
  },
  
  {
    id: 'devops-dashboard',
    title: 'DevOps Dashboard',
    description: 'A centralized dashboard for monitoring CI/CD pipelines and infrastructure.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Node.js', 'Docker', 'Kubernetes', 'Prometheus'],
    demoUrl: 'https://devops-dashboard.dev',
    githubUrl: 'https://github.com/username/devops-dashboard',
    featured: true,
    category: 'web'
  },
  {
    id: 'language-learning-app',
    title: 'Language Learning App',
    description: 'A mobile application for learning new languages through interactive exercises.',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    tags: ['Flutter', 'Firebase', 'ML Kit', 'i18n'],
    demoUrl: 'https://language-app.dev',
    githubUrl: 'https://github.com/username/language-learning-app',
    featured: false,
    category: 'mobile'
  },
  {
    id: 'lucky-assistant',
    title: 'Lucky Assistant',
    description: 'An AI-powered chatbot for customer service and support automation.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Node.js', 'NLP', 'Machine Learning'],
    demoUrl: 'https://lucky-assistant.netlify.app/',
    githubUrl: 'https://github.com/Sachin-Kumar-007/lucky-assistant',
    featured: false,
    category: 'ai'
  }
];