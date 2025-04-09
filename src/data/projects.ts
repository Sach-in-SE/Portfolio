import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'shopkart',
    title: 'ShopKart',
    description: 'A scalable e-commerce platform built with React, Next.js, and Stripe integration.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Next.js', 'Node.js', 'Stripe', 'MongoDB'],
    demoUrl: 'https://shopkart-shop.vercel.app/',
    githubUrl: 'https://github.com/Sach-in-SE/ShopKart',
    featured: true,
    category: 'web',
    caseStudy: {
      problem: 'Traditional e-commerce solutions lack customization and have high transaction fees.',
      solution: 'Built a custom platform with React and Next.js, integrating Stripe for payment processing with lower fees.',
      outcome: 'Reduced transaction costs by 30% and improved page load times by 45% compared to previous solution.'
    }
  },
  {
    id: 'qrcodegenerator',
    title: 'QR Code Generator',
    description: 'A simple and efficient tool to generate custom QR codes for various use cases, built with React and Node.js.',
    image: 'https://img.freepik.com/free-photo/illustration-qr-quick-response-code-application_53876-124202.jpg?t=st=1743721818~exp=1743725418~hmac=3a806c17b13a0ea1db444a814ab94d108c040ff2dc31d3fbeaa9e8d8d69f286d&w=740',
    tags: ['React', 'Node.js', 'Express', 'JavaScript'],
    demoUrl: 'https://gen-ur-qr.vercel.app/',
    githubUrl: 'https://github.com/Sach-in-SE/QR-Code-Generator',
    featured: true,
    category: 'web',
    caseStudy: {
      problem: 'Generating custom QR codes with complex data was cumbersome and inefficient using traditional methods.',
      solution: 'Developed an intuitive web app using React and Node.js to allow users to quickly generate custom QR codes with dynamic data inputs.',
      outcome: 'Improved user experience, reduced QR code generation time by 50%, and increased user engagement by 25%.'
    }
  },
  {
    id: 'multitoolapp',
    title: 'Multi Tool App',
    description: 'A versatile app with multiple useful tools: Age Calculator, BMI Calculator, Word Counter, Percentage Calculator, and Image to PDF Converter.',
    image: 'https://img.freepik.com/free-photo/people-showing-phone-with-applications_53876-88439.jpg?ga=GA1.1.1073523380.1743721396&semt=ais_hybrid&w=740',
    tags: ['React', 'JavaScript'],
    demoUrl: 'https://multi2l.netlify.app/',
    githubUrl: 'https://github.com/Sach-in-SE/Multi-Tool',
    featured: true,
    category: 'web',
    caseStudy: {
      problem: 'Users often need access to multiple tools for everyday tasks like calculating age, BMI, percentages, counting words, and converting images to PDFs.',
      solution: 'Developed a single app combining these tools into one convenient, easy-to-use interface.',
      outcome: 'Increased user convenience, saving time by providing all necessary tools in one place, improving overall productivity and user engagement.'
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
    githubUrl: 'https://github.com/Sach-in-SE/CodePedia',
    featured: false,
    category: 'open-source'
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
