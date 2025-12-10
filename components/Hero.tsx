import React from 'react';
import { ArrowDown, Github, Linkedin, Cpu, BrainCircuit, Code, Globe, Palette, Server, Zap, Layers, Box, Hash, Command, Braces } from 'lucide-react';
import { RESUME_DATA } from '../constants';
import { SectionId } from '../types';

// Helper component for staggering letter animations
const AnimatedLetters = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  return (
    <span className={`inline-flex flex-wrap justify-center ${className}`}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block opacity-0 animate-letter-pop origin-bottom"
          style={{
            animationDelay: `${delay + (i * 0.08)}s`, // 0.08s delay between each letter
            animationFillMode: 'forwards'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex flex-col pt-20 md:pt-20 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">

      {/* Background Gradients for Glass Effect - RED/BLACK THEME */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-accent rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-10 dark:opacity-20 animate-blob"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-black dark:bg-zinc-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-5 dark:opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-900 dark:bg-red-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-10 dark:opacity-20 animate-blob animation-delay-4000"></div>

      {/* Decorative Glass Elements - Hidden on small mobile screens to reduce clutter, visible on larger */}

      {/* Tile 1: Right Top (CPU) */}
      <div className="absolute top-32 right-10 md:right-32 animate-float hidden lg:block z-20">
        <div className="backdrop-blur-md bg-white/30 dark:bg-zinc-800/30 border border-white/20 dark:border-white/10 p-4 rounded-2xl shadow-lg rotate-12 hover:scale-110 transition-transform duration-500">
          <Cpu className="w-8 h-8 text-black dark:text-gray-200 opacity-80" />
        </div>
      </div>

      {/* Tile 2: Left Bottom (Brain) */}
      <div className="absolute bottom-40 left-10 animate-float-slow hidden lg:block z-20">
        <div className="backdrop-blur-md bg-white/30 dark:bg-zinc-800/30 border border-white/20 dark:border-white/10 p-4 rounded-2xl shadow-lg -rotate-6 hover:scale-110 transition-transform duration-500">
          <BrainCircuit className="w-8 h-8 text-black dark:text-gray-200 opacity-80" />
        </div>
      </div>

      {/* Tile 3: Top Left (Code) */}
      <div className="absolute top-40 left-20 animate-float-reverse hidden lg:block z-20">
        <div className="backdrop-blur-md bg-white/30 dark:bg-zinc-800/30 border border-white/20 dark:border-white/10 p-3 rounded-xl shadow-lg rotate-6 hover:scale-110 transition-transform duration-500">
          <Code className="w-6 h-6 text-black dark:text-gray-200 opacity-80" />
        </div>
      </div>

      {/* Tile 4: Bottom Right (Palette) */}
      <div className="absolute bottom-60 right-20 animate-float-fast hidden lg:block z-20">
        <div className="backdrop-blur-md bg-white/30 dark:bg-zinc-800/30 border border-white/20 dark:border-white/10 p-3 rounded-xl shadow-lg -rotate-12 hover:scale-110 transition-transform duration-500">
          <Palette className="w-6 h-6 text-black dark:text-gray-200 opacity-80" />
        </div>
      </div>

      {/* Tile 5: Mid Right (Globe) */}
      <div className="absolute top-1/2 right-10 animate-float-delayed hidden lg:block z-20">
        <div className="backdrop-blur-md bg-white/30 dark:bg-zinc-800/30 border border-white/20 dark:border-white/10 p-2 rounded-lg shadow-lg rotate-3 hover:scale-110 transition-transform duration-500">
          <Globe className="w-5 h-5 text-black dark:text-gray-200 opacity-80" />
        </div>
      </div>

      {/* NEW TILES */}

      {/* Tile 6: Top Center Left (Server) */}
      <div className="absolute top-24 left-1/4 animate-float-diagonal hidden lg:block z-20">
        <div className="backdrop-blur-md bg-white/20 dark:bg-zinc-800/20 border border-white/20 dark:border-white/10 p-3 rounded-lg shadow-lg rotate-6 hover:scale-110 transition-transform duration-500">
          <Server className="w-6 h-6 text-black dark:text-gray-200 opacity-70" />
        </div>
      </div>

      {/* Tile 7: Bottom Center Right (Zap) */}
      <div className="absolute bottom-32 right-1/4 animate-float hidden lg:block z-20">
        <div className="backdrop-blur-md bg-white/40 dark:bg-zinc-800/40 border border-white/20 dark:border-white/10 p-4 rounded-2xl shadow-xl -rotate-3 hover:scale-110 transition-transform duration-500">
          <Zap className="w-7 h-7 text-accent opacity-90" />
        </div>
      </div>

      {/* Tile 8: Far Left High (Layers) */}
      <div className="absolute top-64 -left-4 animate-float-slow hidden xl:block z-20">
        <div className="backdrop-blur-md bg-white/30 dark:bg-zinc-800/30 border border-white/20 dark:border-white/10 p-3 rounded-xl shadow-lg rotate-12 hover:scale-110 transition-transform duration-500">
          <Layers className="w-6 h-6 text-black dark:text-gray-200 opacity-80" />
        </div>
      </div>

      {/* Tile 9: Far Right Low (Box) */}
      <div className="absolute bottom-1/3 -right-4 animate-float-reverse hidden xl:block z-20">
        <div className="backdrop-blur-md bg-white/30 dark:bg-zinc-800/30 border border-white/20 dark:border-white/10 p-3 rounded-xl shadow-lg -rotate-12 hover:scale-110 transition-transform duration-500">
          <Box className="w-6 h-6 text-black dark:text-gray-200 opacity-80" />
        </div>
      </div>

      {/* EXTRA NEW TILES (MORE!) */}

      {/* Tile 10: Top Center (Hash) */}
      <div className="absolute top-10 left-1/2 animate-float-fast hidden lg:block z-20">
        <div className="backdrop-blur-sm bg-white/10 dark:bg-zinc-800/10 border border-white/20 dark:border-white/10 p-2 rounded-lg shadow-sm rotate-45">
          <Hash className="w-4 h-4 text-gray-400 dark:text-gray-500" />
        </div>
      </div>

      {/* Tile 11: Mid Left (Command) */}
      <div className="absolute top-2/3 left-12 animate-float-delayed hidden lg:block z-20">
        <div className="backdrop-blur-md bg-white/50 dark:bg-zinc-800/50 border border-white/30 dark:border-white/10 p-2 rounded-full shadow-lg">
          <Command className="w-5 h-5 text-black dark:text-white" />
        </div>
      </div>

      {/* Tile 12: Bottom Left (Braces) */}
      <div className="absolute bottom-10 left-32 animate-float-reverse hidden lg:block z-20">
        <div className="backdrop-blur-md bg-white/20 dark:bg-zinc-800/20 border border-white/20 dark:border-white/10 p-3 rounded-xl rotate-12 shadow-md">
          <Braces className="w-6 h-6 text-accent" />
        </div>
      </div>

      {/* Abstract Shape 1 */}
      <div className="absolute top-40 right-1/3 w-16 h-16 rounded-full border border-black/5 dark:border-white/5 animate-float-slow hidden lg:block z-10 bg-white/5 dark:bg-white/5 backdrop-blur-sm"></div>

      {/* Abstract Shape 2 */}
      <div className="absolute bottom-20 right-1/3 w-24 h-24 rounded-2xl border border-accent/10 animate-float-diagonal hidden lg:block z-10 rotate-12 bg-accent/5 backdrop-blur-sm"></div>

      {/* Abstract Shape 3 */}
      <div className="absolute top-1/2 left-20 w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 animate-bounce hidden lg:block z-10"></div>


      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center relative z-10 px-4">

        {/* Intro Tag with Pop-Up Text */}
        <div className="mb-2 md:mb-4 flex items-center gap-2 animate-fade-in">
          <span className="text-xl md:text-2xl animate-pop-up" style={{ animationDelay: '0.2s' }}>⚡</span>
          <div className="font-sans text-gray-600 dark:text-gray-300 font-medium text-sm md:text-base">
            <AnimatedLetters text={`Hello, I'm ${RESUME_DATA.name}`} delay={0.4} />
          </div>
        </div>

        {/* Massive Typography & Image Composition */}
        <div className="relative w-full max-w-[1400px] flex flex-col items-center justify-center">

          {/* Top Text - Letter by Letter Pop */}
          <h1 className="text-[22vw] md:text-[15vw] leading-[0.8] font-display font-bold text-black dark:text-white tracking-tighter text-center z-0 select-none flex justify-center transition-colors">
            <AnimatedLetters text="AI" delay={0.2} />
          </h1>

          {/* Cutout Image */}
          <div className="relative z-10 -mt-2 -mb-2 md:-mt-[2vw] md:-mb-[4vw] h-[45vh] md:h-[60vh] w-auto animate-fade-in transition-transform duration-500 hover:scale-105">
            <div className="h-full w-auto drop-shadow-[0_0_25px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]">
              <img
                src={RESUME_DATA.profileUrl}
                alt="Mathew P Binu"
                fetchPriority="high"
                loading="eager"
                className="h-full w-auto object-cover object-top contrast-110 rounded-3xl"
                style={{ maskImage: 'linear-gradient(to bottom, black 0%, black 90%, transparent 100%)' }}
              />
            </div>
            {/* Floating Glass Label with POP UP Animation - Tag style on Profile Pic (Partially Outside) */}
            <div className="absolute top-32 -left-2 md:top-48 md:-left-3 backdrop-blur-xl bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 p-1.5 md:p-2 rounded-xl md:rounded-2xl shadow-xl animate-pop-up flex items-center gap-1.5 hover:scale-110 transition-transform origin-center z-30" style={{ animationDelay: '1.2s' }}>
              <div className="w-2 h-2 md:w-3 md:h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="font-sans font-bold text-[10px] md:text-xs uppercase tracking-wider whitespace-nowrap text-black dark:text-white">Open for work</span>
            </div>
          </div>

          {/* Bottom Text (Outlined) - Letter by Letter Pop */}
          <h1 className="text-[14vw] md:text-[12vw] leading-[0.8] font-display font-bold text-outline dark:text-outline tracking-tighter text-center z-20 select-none hover:text-black dark:hover:text-white transition-colors duration-500 cursor-default flex justify-center">
            <AnimatedLetters text="ENGINEER" delay={0.8} />
          </h1>

        </div>

        {/* Location - Pop Up Reveal */}
        <div className="mt-4 md:mt-8 text-gray-500 dark:text-gray-400 font-sans text-xs md:text-lg tracking-wide animate-pop-up backdrop-blur-sm bg-white/30 dark:bg-black/30 px-4 py-1 rounded-full border border-white/20 dark:border-white/10 text-center" style={{ animationDelay: '1.8s' }}>
          based in {RESUME_DATA.location}.
        </div>

        {/* Action Buttons */}
        <div className="mt-6 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6 animate-fade-in pb-8 md:pb-12 z-30 w-full sm:w-auto px-6 sm:px-0" style={{ animationDelay: '2.0s' }}>
          <button
            onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative bg-black dark:bg-white text-white dark:text-black px-8 py-4 font-sans font-medium text-sm uppercase tracking-wider overflow-hidden hover:shadow-xl transition-all w-full sm:w-auto text-center rounded-lg sm:rounded-none"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Portfolio
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 text-white"></div>
          </button>
        </div>

        {/* Socials - Adjusted for mobile position */}
        <div className="md:absolute bottom-8 right-8 flex gap-6 text-black dark:text-white z-30 animate-fade-in justify-center w-full md:w-auto pb-8 md:pb-0" style={{ animationDelay: '2.2s' }}>
          <a href={`https://${RESUME_DATA.socials.github}`} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors hover:scale-125 transform duration-200"><Github className="w-5 h-5" /></a>
          <a href={`https://${RESUME_DATA.socials.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors hover:scale-125 transform duration-200"><Linkedin className="w-5 h-5" /></a>
        </div>

      </div>
    </section>
  );
};

export default Hero;