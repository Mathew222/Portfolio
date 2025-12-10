import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Certificates from './components/Certificates';
import Timeline from './components/Timeline';
import Education from './components/Education';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import Cursor from './components/Cursor';
import Marquee from './components/Marquee';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from local storage
  // Modified to default to Light Mode unless 'dark' is explicitly saved
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      // Default to light mode (ignores system preference to enforce light default)
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      // Optionally ensure persistence for the default
      if (!savedTheme) {
        localStorage.setItem('theme', 'light');
      }
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight === 0) return;
      const scroll = totalScroll / windowHeight;
      setScrollProgress(scroll);
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen text-black dark:text-white selection:bg-accent selection:text-white relative transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <Cursor />
      
      {/* Film Grain Overlay */}
      <div className="bg-noise pointer-events-none"></div>
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1.5 bg-accent z-[60] transition-all duration-150 ease-out origin-left shadow-[0_0_10px_rgba(255,51,51,0.5)]" 
        style={{ transform: `scaleX(${scrollProgress})` }} 
      />

      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="bg-white dark:bg-zinc-950 transition-colors duration-300">
        <Hero />
        <Marquee />
        <Skills />
        <Timeline />
        <Education />
        <Projects />
        <Research />
        <Certificates />
        <Contact />
      </main>
      <ChatWidget />
    </div>
  );
}

export default App;