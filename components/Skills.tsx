import React from 'react';
import { SectionId } from '../types';
import { Code2, Brain, Terminal, LineChart, Palette, Layers } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  // We define the layout data locally to allow for a richer structure than the simple list in constants.ts
  const skillCategories = [
    {
      title: "Artificial Intelligence & ML",
      icon: <Brain className="w-6 h-6" />,
      description: "Building intelligent systems and predictive models.",
      skills: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "NLP", "Neural Networks", "Deep Learning"],
      className: "md:col-span-2 md:row-span-2", // Large Main Card
      highlight: true
    },
    {
      title: "Data Science & Analysis",
      icon: <LineChart className="w-6 h-6" />,
      description: "Extracting insights from complex datasets.",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Visualization"],
      className: "md:col-span-1 md:row-span-1",
      highlight: false
    },
    {
      title: "Software Development",
      icon: <Code2 className="w-6 h-6" />,
      description: "Software engineering and logic.",
      skills: ["C", "SQL", "HTML/CSS"],
      className: "md:col-span-1 md:row-span-1",
      highlight: false
    },
    {
      title: "Tools & Environment",
      icon: <Terminal className="w-6 h-6" />,
      description: "The ecosystem I build within.",
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Google Colab"],
      className: "md:col-span-1 md:row-span-1",
      highlight: false
    },
    {
      title: "Creative Design",
      icon: <Palette className="w-6 h-6" />,
      description: "Visualizing ideas and designing assets.",
      skills: ["3D Modelling", "Video Editing", "Graphic Design"],
      className: "md:col-span-2 md:row-span-1", // Wide bottom card
      highlight: false
    }
  ];

  return (
    <section id={SectionId.SKILLS} ref={ref as any} className="py-16 md:py-24 bg-white dark:bg-zinc-950 relative overflow-hidden transition-colors duration-300">
      
      {/* Background Animated Blobs for Glass Contrast */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-black dark:bg-zinc-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="mb-12 md:mb-16 relative">
            <span className={`text-accent font-bold tracking-widest uppercase text-sm mb-3 block transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>My Stack</span>
            
            {/* Heading Animation: Reveal Up with Dot Bounce */}
            <div className="overflow-hidden mb-4">
                <h2 className={`text-4xl md:text-5xl font-display font-bold text-black dark:text-white uppercase flex items-baseline gap-2 ${isVisible ? 'animate-reveal-up' : 'opacity-0 translate-y-full'}`}>
                    Capabilities
                    <span className={`w-3 h-3 md:w-4 md:h-4 bg-accent rounded-full inline-block ${isVisible ? 'animate-pop-dot' : 'scale-0'}`} style={{ animationDelay: '0.6s' }}></span>
                </h2>
            </div>
            
            <div className={`h-1 w-20 bg-accent transition-all duration-1000 ease-out ${isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'}`}></div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
            
            {skillCategories.map((category, index) => (
                <div 
                    key={index} 
                    className={`
                        group relative p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-1 overflow-hidden
                        ${category.className}
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                    `}
                    style={{ transitionDelay: `${index * 150}ms` }}
                >
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Decorative Top Line */}
                    <div className={`absolute top-0 left-0 w-full h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${category.highlight ? 'bg-accent' : 'bg-black dark:bg-white'}`}></div>

                    <div className="relative z-10 h-full flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <div className={`p-3 rounded-xl backdrop-blur-md transition-colors duration-300 ${category.highlight ? 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white' : 'bg-black/5 dark:bg-white/10 text-black dark:text-white group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black'}`}>
                                {category.icon}
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-display font-bold text-black dark:text-white uppercase">{category.title}</h3>
                                <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">{category.description}</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {category.skills.map((skill, idx) => (
                                <span 
                                    key={idx} 
                                    className="px-3 py-1.5 md:px-4 md:py-2 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg text-xs md:text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white hover:scale-105 transition-all cursor-default select-none shadow-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            {/* "More" / Stats Block */}
            <div 
                className={`
                    md:col-span-1 md:row-span-1 rounded-3xl border border-dashed border-gray-300 dark:border-zinc-700 bg-transparent flex flex-col items-center justify-center p-6 text-center hover:border-accent dark:hover:border-accent transition-all duration-700 group cursor-default
                    ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                `}
                style={{ transitionDelay: '800ms' }}
            >
                <Layers className="w-8 h-8 text-gray-400 dark:text-zinc-600 mb-4 group-hover:text-accent transition-colors" />
                <h4 className="font-display font-bold text-lg text-gray-500 dark:text-zinc-500 uppercase">Always Learning</h4>
                <p className="text-xs text-gray-400 dark:text-zinc-600 mt-2">Updating stack...</p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;