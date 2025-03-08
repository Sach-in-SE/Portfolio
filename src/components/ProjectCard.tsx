import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card group h-full flex flex-col"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-2">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 transition-colors duration-200"
              aria-label="View Demo"
            >
              <ExternalLink size={16} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 transition-colors duration-200"
              aria-label="View GitHub Repository"
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {project.caseStudy && (
          <div className="mt-auto">
            <button
              onClick={() => setShowCaseStudy(!showCaseStudy)}
              className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
            >
              {showCaseStudy ? 'Hide Case Study' : 'View Case Study'}
              {showCaseStudy ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {showCaseStudy && (
              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200">Problem:</h4>
                  <p className="text-gray-600 dark:text-gray-300">{project.caseStudy.problem}</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200">Solution:</h4>
                  <p className="text-gray-600 dark:text-gray-300">{project.caseStudy.solution}</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200">Outcome:</h4>
                  <p className="text-gray-600 dark:text-gray-300">{project.caseStudy.outcome}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;