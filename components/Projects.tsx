import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';
import { SectionId } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Character set for scrambling effect
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";

const Projects: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [headingText, setHeadingText] = useState("SELECTED WORKS");
  const intervalRef = useRef<number | null>(null);

  // Scramble effect logic
  useEffect(() => {
    if (!isVisible) return;

    let iteration = 0;
    const originalText = "SELECTED WORKS";

    clearInterval(intervalRef.current as number);

    intervalRef.current = window.setInterval(() => {
      setHeadingText(
        originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= originalText.length) {
        clearInterval(intervalRef.current as number);
      }

      iteration += 1 / 2; // Speed control
    }, 50);

    return () => clearInterval(intervalRef.current as number);
  }, [isVisible]);

  // Get current active active image
  const activeImage = PROJECTS_DATA.find(p => p.id === hoveredProject)?.imageUrl;

  return (
    <section id={SectionId.PROJECTS} ref={ref as any} className="py-16 md:py-24 bg-black dark:bg-zinc-950 text-white relative min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center overflow-hidden border-t border-white/10 dark:border-zinc-800 transition-colors duration-300">

      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 border border-white/10 rounded-2xl rotate-12 animate-float-slow opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/5 rounded-full animate-float-reverse opacity-10 pointer-events-none"></div>

      {/* Floating Background Image Reveal */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
        <div
          className={`
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] 
                transition-all duration-500 ease-out opacity-0 rotate-12 scale-90 blur-sm
                ${hoveredProject ? 'opacity-30 scale-100 rotate-0 blur-0' : ''}
            `}
        >
          {activeImage && (
            <img
              src={activeImage}
              alt="Preview"
              className="w-full h-full object-cover grayscale opacity-50 rounded-lg shadow-2xl mask-image-fade"
            />
          )}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">

        <div className="flex justify-between items-end mb-8 md:mb-12 border-b border-white/20 dark:border-zinc-800 pb-4 md:pb-6">
          {/* Heading Animation: Cyberpunk Decode (Scramble) */}
          <h2 className="text-xs md:text-sm font-bold tracking-widest uppercase text-gray-400 dark:text-gray-500 min-w-[200px]">
            {headingText} (0{PROJECTS_DATA.length})
          </h2>
          <span className={`text-xs text-gray-500 hidden md:block transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            SCROLL TO EXPLORE
          </span>
        </div>

        <div className="flex flex-col gap-10 md:gap-0">
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={project.id}
              className={`group border-b border-white/10 dark:border-zinc-800 pb-10 md:pb-12 md:py-12 flex flex-col md:flex-row md:items-center justify-between transition-all duration-300 hover:bg-white/5 dark:hover:bg-zinc-900 px-0 md:px-4 -mx-0 md:-mx-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Index & Title */}
              <div className="flex items-baseline gap-4 md:gap-16">
                <span className="text-gray-600 font-mono text-sm hidden md:block">0{index + 1}</span>
                <h3 className="text-4xl md:text-7xl font-display font-bold uppercase text-transparent text-outline-white group-hover:text-white transition-all duration-300 ease-out break-words leading-tight">
                  {project.title}
                </h3>
              </div>

              {/* Metadata */}
              <div className="mt-6 md:mt-0 flex flex-col md:items-end gap-3 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-0 md:translate-y-0">
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs text-gray-400 uppercase tracking-wider border border-white/20 dark:border-zinc-700 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm max-w-xs text-left md:text-right md:block">
                  {project.description}
                </p>
                <a
                  href={project.link || '#'}
                  className="flex items-center gap-2 text-white text-sm font-bold uppercase tracking-wider mt-2 group-hover:text-accent transition-colors py-2 md:py-0 border border-white/20 dark:border-zinc-700 md:border-none justify-center md:justify-start rounded-md md:rounded-none bg-white/5 dark:bg-zinc-800 md:bg-transparent"
                >
                  View Repository <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-8 md:mt-12 flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a href="https://github.com/Mathew222" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors uppercase text-sm font-bold tracking-widest border-b border-transparent hover:border-white pb-1">
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;