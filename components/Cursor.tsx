
import React, { useEffect, useState, useRef } from 'react';

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  // Track precise mouse coordinates
  const mouse = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Check if device supports fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsTouchDevice(!mediaQuery.matches);
    
    // If it's a touch device, don't run cursor logic
    if (!mediaQuery.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
      
      // Update position immediately (No Lag)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over an interactive element
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const onMouseDown = (e: MouseEvent) => {
        setIsClicked(true);
        // Middle Click Check
        if (e.button === 1) document.body.classList.add('show-cursor');
        else document.body.classList.remove('show-cursor');
    };

    const onMouseUp = (e: MouseEvent) => {
        setIsClicked(false);
        if (e.button !== 1) document.body.classList.remove('show-cursor');
    };
    
    // Attach event listeners
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div 
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform transition-opacity duration-300 hidden md:block ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
            // Offset to align tip of arrow with actual coordinates perfectly
            marginLeft: '-4px', 
            marginTop: '-2px' 
        }}
    >
      <div 
        className={`
            relative transition-all duration-200 ease-out
            ${isHovering ? 'scale-125' : 'scale-100'}
            ${isClicked ? 'scale-90' : ''}
        `}
      >
        {/* The Glass Arrow SVG */}
        <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-2xl"
        >
            <path 
                d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" 
                className="fill-accent/60 stroke-white/60" 
                strokeWidth="1.5"
                strokeLinejoin="round"
                style={{
                    // Simulating glass refraction
                    backdropFilter: 'blur(8px)', 
                }}
            />
        </svg>

        {/* CSS-based Glass Layer (Overlaying the SVG shape for real blur effect) */}
        <div 
            className="absolute inset-0 bg-accent/40 backdrop-blur-[6px]"
            style={{
                clipPath: 'polygon(12.5% 12.5%, 41.9% 83.2%, 52.4% 52.4%, 83.2% 41.9%)'
            }}
        ></div>

        {/* Glow effect on hover */}
        <div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full blur-2xl transition-opacity duration-300 ${isHovering ? 'opacity-50' : 'opacity-0'}`}
        ></div>
      </div>
    </div>
  );
};

export default Cursor;
