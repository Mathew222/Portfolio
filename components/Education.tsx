import React from 'react';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';
import { EDUCATION_DATA } from '../constants';
import { SectionId } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Education: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id={SectionId.EDUCATION} ref={ref as any} className="py-16 md:py-24 bg-white dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Floating Elements */}
      <div className="absolute top-1/4 right-10 animate-float-slow hidden md:block opacity-20 dark:opacity-10 z-0">
         <GraduationCap className="w-16 h-16 text-black dark:text-white" />
      </div>
      
      <div className="absolute bottom-1/4 left-10 animate-float-reverse hidden md:block opacity-20 dark:opacity-10 z-0">
         <BookOpen className="w-12 h-12 text-accent" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="mb-12 md:mb-16">
            <span className={`text-accent font-bold tracking-widest uppercase text-sm mb-3 block transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Academic Background</span>
            
            {/* Heading Animation: Blur to Focus */}
            <h2 className={`text-4xl md:text-5xl font-display font-bold text-black dark:text-white uppercase mb-4 ${isVisible ? 'animate-blur-in' : 'opacity-0'}`}>
                Education
            </h2>
            
            <div className={`h-1 w-20 bg-accent transition-all duration-1000 ease-out delay-500 ${isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'}`}></div>
        </div>

        <div className="space-y-8">
            {EDUCATION_DATA.map((edu, index) => (
                <div 
                    key={edu.id} 
                    className={`group relative border-l-2 border-black/10 dark:border-white/10 pl-6 md:pl-12 py-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-20px]'}`}
                    style={{ transitionDelay: `${index * 200 + 300}ms` }}
                >
                    {/* Timeline Dot */}
                    <div className="absolute left-[-5px] top-6 w-2.5 h-2.5 bg-accent rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div>
                            <h3 className="text-xl md:text-3xl font-display font-bold text-black dark:text-white uppercase group-hover:text-accent transition-colors">
                                {edu.degree}
                            </h3>
                            <div className="text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium mt-1">
                                {edu.institution}
                            </div>
                            {edu.description && (
                                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base max-w-2xl leading-relaxed">
                                    {edu.description}
                                </p>
                            )}
                        </div>
                        
                        <div className="flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 bg-gray-50 dark:bg-zinc-900 rounded-lg self-start md:self-auto border border-gray-100 dark:border-zinc-800">
                             <Calendar className="w-3 h-3 md:w-4 md:h-4 text-gray-500 dark:text-gray-400" />
                             <span className="text-xs md:text-sm font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wide">{edu.year}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Education;