import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Github, Linkedin } from 'lucide-react';
import { SectionId } from '../types';
import { RESUME_DATA } from '../constants';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { label: 'Work', id: SectionId.PROJECTS },
    { label: 'Research', id: SectionId.RESEARCH },
    { label: 'Experience', id: SectionId.EXPERIENCE },
    { label: 'Education', id: SectionId.EDUCATION },
    { label: 'Certs', id: SectionId.CERTIFICATES },
    { label: 'Contact', id: SectionId.CONTACT },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md py-4 shadow-sm border-b border-gray-100 dark:border-zinc-800' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="flex items-baseline">
                <span className="font-display font-bold text-3xl tracking-tight text-black dark:text-white transition-colors">Mathew</span>
                <span className="w-2 h-2 rounded-full bg-accent ml-1 group-hover:animate-ping"></span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href={`https://${RESUME_DATA.socials.github}`} target="_blank" rel="noreferrer" className="text-black dark:text-white hover:text-accent transition-colors hover:scale-125 transform duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href={`https://${RESUME_DATA.socials.linkedin}`} target="_blank" rel="noreferrer" className="text-black dark:text-white hover:text-accent transition-colors hover:scale-125 transform duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            <div className="flex items-baseline space-x-8 xl:space-x-12">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-black dark:text-gray-300 font-sans text-sm font-medium uppercase tracking-widest hover:line-through decoration-2 decoration-accent transition-all dark:hover:text-white"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors text-black dark:text-white"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors text-black dark:text-white"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-zinc-950 fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in transition-colors duration-300">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 p-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full">
            <X className="h-8 w-8" />
          </button>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-black dark:text-white text-3xl md:text-4xl font-display font-bold uppercase hover:text-accent transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;