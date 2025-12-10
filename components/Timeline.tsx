import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import { SectionId } from '../types';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Timeline: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id={SectionId.EXPERIENCE} ref={ref as any} className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Floating Elements */}
      <div className="absolute top-20 left-10 animate-float-slow hidden md:block opacity-30 dark:opacity-10">
        <div className="backdrop-blur-md bg-white/40 dark:bg-zinc-800/40 border border-gray-200 dark:border-zinc-800 p-6 rounded-2xl -rotate-12"></div>
      </div>
      <div className="absolute bottom-40 right-20 animate-float hidden md:block opacity-30 dark:opacity-10">
        <div className="backdrop-blur-md bg-white/40 dark:bg-zinc-800/40 border border-gray-200 dark:border-zinc-800 p-8 rounded-full"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 border-b border-black/10 dark:border-white/10 pb-8">
            <div>
                <span className={`text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-2 md:mb-3 block transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Career Path</span>
                
                {/* Heading Animation: Elastic Letter Spacing */}
                <h2 className={`text-5xl md:text-7xl font-display font-bold text-black dark:text-white uppercase transition-all ${isVisible ? 'animate-spacing-morph' : 'opacity-0'}`}>
                    Experience
                </h2>
            </div>
            <div className={`hidden md:block transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                 <Briefcase className="w-12 h-12 text-black/10 dark:text-white/10" />
            </div>
        </div>

        <div className="space-y-12 md:space-y-12">
            {EXPERIENCE_DATA.map((exp, index) => (
                <div 
                    key={exp.id} 
                    className={`group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-12 items-start transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                >
                    
                    {/* Left Column: Period & Indicator */}
                    <div className="md:col-span-4 lg:col-span-3 md:sticky md:top-32 flex flex-row justify-between md:flex-col items-center md:items-start pb-2 md:pb-0 border-b border-gray-200 dark:border-zinc-800 md:border-none mb-4 md:mb-0">
                        <span className="text-4xl md:text-6xl font-display font-bold text-transparent text-outline dark:text-outline group-hover:text-black dark:group-hover:text-white transition-colors duration-500 cursor-default uppercase">
                             {exp.timelineTitle || exp.period.split(' - ')[0]}
                        </span>
                        <div className="flex items-center gap-2 mt-0 md:mt-2 text-gray-500 dark:text-gray-400 font-medium bg-white/50 dark:bg-zinc-900/50 md:bg-transparent px-2 py-1 rounded-md md:p-0">
                            <Calendar className="w-4 h-4" />
                            <span className="uppercase tracking-wide text-xs md:text-sm">{exp.period}</span>
                        </div>
                    </div>

                    {/* Right Column: Card Content */}
                    <div className="md:col-span-8 lg:col-span-9 relative">
                        <div className="relative p-6 md:p-8 rounded-3xl border border-white/60 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:bg-white/60 dark:hover:bg-zinc-900/60 transition-all duration-300 transform group-hover:-translate-y-1 md:group-hover:-translate-y-2">
                            
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300 hidden md:block">
                                <ChevronRight className="w-6 h-6 text-accent" />
                            </div>

                            <h3 className="text-2xl md:text-3xl font-display font-bold text-black dark:text-white uppercase mb-1">{exp.role}</h3>
                            <div className="text-lg md:text-xl text-accent font-bold mb-4 md:mb-6">{exp.company}</div>
                            
                            <ul className="space-y-3 md:space-y-4">
                                {exp.description.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 leading-relaxed font-sans text-sm md:text-base">
                                        <span className="mt-2 w-1.5 h-1.5 bg-black dark:bg-white rounded-full flex-shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-gray-100 to-transparent dark:from-zinc-800 rounded-full opacity-50 blur-xl group-hover:opacity-80 transition-opacity pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;