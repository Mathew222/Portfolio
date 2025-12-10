import React from 'react';

const Marquee: React.FC = () => {
  const text = "AI ENGINEER • MACHINE LEARNING • COMPUTER VISION • PYTHON • DEEP LEARNING • VIDEO EDITOR •";
  
  return (
    <div className="w-full bg-black dark:bg-white py-4 overflow-hidden flex whitespace-nowrap border-y border-white/10 dark:border-black/10 relative z-20 transition-colors duration-300">
      <div className="animate-marquee inline-block">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-white dark:text-black font-display font-bold text-2xl md:text-4xl mx-4 tracking-wider uppercase opacity-80">
            {text}
          </span>
        ))}
      </div>
      <div className="animate-marquee inline-block" aria-hidden="true">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-white dark:text-black font-display font-bold text-2xl md:text-4xl mx-4 tracking-wider uppercase opacity-80">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;