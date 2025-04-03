import React from 'react';
import { Link } from 'react-scroll';
import { ArrowUp, Code, Heart, Github, Linkedin, Mail, Instagram, Disc as Discord } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(187, 134, 252, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
          opacity: 0.5
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div className="backdrop-blur-sm rounded-2xl px-6 pt-6">
            <div className="flex items-center gap-2 font-bold text-xl mb-2">
              <Code className="text-material-dark-primary" size={24} />
              <span>Sachin Kumar</span>
            </div>
            <p className="text-material-dark-onBg/70 ">
              Thank you for visiting! Let's connect and create something amazing.
              Explore my work or reach out for collaborations.
            </p>
          </div>
          {/* Contact Information */}
          <div className="backdrop-blur-sm rounded-2xl p-6 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-4 text-material-dark-onBg/70">
              <div className="flex flex-wrap gap-3 mt-4">
                {[
                  { icon: <Github size={20} />, url: 'https://github.com/Sach-in-SE', label: 'GitHub' },
                  { icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/username', label: 'LinkedIn' },
                  { icon: <Mail size={20} />, url: 'mailto:codersachin01@gmail.com', label: 'Email' },
                  { icon: <Instagram size={20} />, url: 'https://www.instagram.com/official__luc_ky/', label: 'Instagram' },
                  { icon: <Discord size={20} />, url: 'https://discord.com/app', label: 'Discord' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-material-dark-primary/10 hover:bg-material-dark-primary/20 text-material-dark-primary transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className=" pt-4 border-t border-material-dark-onBg/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-material-dark-onBg/70 text-sm flex items-center">
              © {currentYear} Made with <Heart size={14} className="mx-1 text-material-dark-error" /> by Sachin Kumar
            </p>
            
            <Link
              to="hero"
              smooth={true}
              duration={800}
              className="p-3 rounded-full bg-material-dark-primary/10 hover:bg-material-dark-primary/20 text-material-dark-primary transition-all duration-300 cursor-pointer group"
            >
              <ArrowUp size={20} className="transform group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;