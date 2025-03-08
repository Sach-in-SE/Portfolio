import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Briefcase, GraduationCap, Star } from 'lucide-react';
import { skills } from '../data/skills';
import { timeline } from '../data/timeline';
import { SkillCategory } from '../types';

const AboutSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const getIconForTimelineItem = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase size={20} className="text-primary" />;
      case 'education':
        return <GraduationCap size={20} className="text-primary" />;
      case 'certification':
        return <Award size={20} className="text-primary" />;
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-material-dark-surface">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            {/* Futuristic Profile Circle */}
            <div className="relative w-64 h-64 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-material-dark-primary via-material-dark-secondary to-material-dark-primary animate-gradient-spin" />
              <div className="absolute inset-1 rounded-full bg-material-dark-surface" />
              <div className="absolute inset-2 rounded-full overflow-hidden bg-material-dark-elevated">
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Dots */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-material-dark-primary rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 45}deg) translate(120px) rotate(-${i * 45}deg)`,
                  }}
                />
              ))}
            </div>

            <div className="flex-1">
              <motion.h2 className="text-3xl md:text-4xl font-bold mb-6 text-material-dark-primary">
                About Me
              </motion.h2>
              <div className="space-y-4 text-material-dark-onBg/90">
                <p>
                  I'm a passionate full-stack developer specializing in building web and mobile applications.
                  With expertise in React, TypeScript, and Node.js, I focus on creating performant and accessible user interfaces.
                </p>
                <p>
                  My journey in software development began during my computer science studies, where I discovered
                  my passion for creating elegant solutions to complex problems.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing my knowledge through technical articles and conference talks.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-material-dark-primary">Skills & Technologies</h3>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value as SkillCategory | 'all')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    activeCategory === category.value
                      ? 'bg-material-dark-primary text-material-dark-onPrimary'
                      : 'bg-material-dark-elevated text-material-dark-onBg/75 hover:bg-material-dark-elevated/80'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-material-dark-elevated p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col items-center"
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-material-dark-primary/20 flex items-center justify-center text-material-dark-primary">
                      {skill.name.charAt(0)}
                    </div>
                  </div>
                  <h4 className="font-medium text-center mb-2 text-material-dark-onBg">{skill.name}</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < skill.level 
                            ? 'text-material-dark-secondary fill-material-dark-secondary' 
                            : 'text-material-dark-onBg/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-material-dark-primary">Experience</h3>
            
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-material-dark-elevated"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div
                    key={item.id}
                    className={`relative flex flex-col md:flex-row ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-material-dark-primary border-4 border-material-dark-surface"></div>
                    
                    <div className="ml-6 md:ml-0 md:w-1/2 md:px-8">
                      <div className="bg-material-dark-elevated p-4 rounded-lg shadow-lg">
                        <div className="flex items-center mb-2">
                          {getIconForTimelineItem(item.type)}
                          <h4 className="text-lg font-bold ml-2 text-material-dark-onBg">{item.title}</h4>
                        </div>
                        <p className="text-sm text-material-dark-onBg/75 mb-1">
                          {item.organization} | {item.date}
                        </p>
                        <p className="text-sm text-material-dark-onBg/90">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;