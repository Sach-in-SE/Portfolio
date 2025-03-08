import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import ParticleSystem from './ParticleSystem';
import TypewriterEffect from './TypewriterEffect';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const roles = [
    "Full Stack Developer",
    "AI Enthusiast",
    "Designer",
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.6 }}
      />
      
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ParticleSystem />
        </Canvas>
      </div>
      
      <div className="container mx-auto px-4 z-20 relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Hii There, I'm Sachin Kumar
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-mono">
              <TypewriterEffect phrases={roles} typingSpeed={100} deletingSpeed={50} delayBetweenLines={500} />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex gap-4 mb-8"
          >
            <a
              href="https://github.com/Sach-in-SE"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSGLCCBpjxbZcNdWTLhTfbKszFnKbKZwWhzhSJMmpBXqzKhxcNdHSnCDFhpdcCVBnztswXWR"
              className="p-3 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors duration-300"
              aria-label="Email Me"
            >
              <Mail size={20} />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              to="projects"
              smooth={true}
              duration={800}
              className="btn btn-primary"
            >
              View My Work
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link to="about" smooth={true} duration={800} className="cursor-pointer">
          <ChevronDown size={32} className="text-primary" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;