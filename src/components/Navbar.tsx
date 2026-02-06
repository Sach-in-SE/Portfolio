import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, Code, Settings } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-material-dark-surface/80 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="flex items-center gap-2 font-bold text-xl cursor-pointer"
        >
          <Code className="text-material-dark-primary" size={24} />
          <span className="hidden sm:inline">Sachin Kumar</span>
        </ScrollLink>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              className="nav-link cursor-pointer"
            >
              {link.name}
            </ScrollLink>
          ))}
          <a
            href="/admin"
            className="p-2 rounded-full bg-material-dark-primary/10 hover:bg-material-dark-primary/20 text-material-dark-primary transition-colors duration-200"
            title="Admin Panel"
          >
            <Settings size={18} />
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-md text-material-dark-onBg hover:bg-material-dark-elevated transition-colors duration-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`md:hidden absolute w-full bg-material-dark-surface shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden py-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              activeClass="active"
              className="nav-link py-2 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;