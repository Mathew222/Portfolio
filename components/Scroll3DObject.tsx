
import React, { useEffect, useRef } from 'react';

const Scroll3DObject: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // State for smooth animation physics
  // We use refs to hold mutable values without triggering re-renders
  const physics = useRef({
    currentY: 0,
    targetY: 0,
    currentX: 50,
    targetX: 50,
    rotX: 0,
    rotY: 0
  });

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      // 1. Calculate Scroll Progress (0.0 to 1.0)
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const rawProgress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      
      // 2. Define the Path (The "Continuous Flow")
      // Instead of hard jumps, we use Math functions for smooth curves.
      
      // Vertical Path: Starts at 20% down screen, ends at 80% down screen
      const targetYPercent = 20 + (rawProgress * 60);
      
      // Horizontal Path: A gentle Sine wave that weaves through the content
      // Center (50%) -> Right (80%) -> Left (20%) -> Center (50%)
      const targetXPercent = 50 + 30 * Math.sin(rawProgress * Math.PI * 3);

      // 3. Apply Physics (Linear Interpolation / LERP)
      // This creates the "weighty" feel. The object trails slightly behind the scroll.
      const ease = 0.08; // Lower = smoother/heavier feel
      
      physics.current.currentY += (targetYPercent - physics.current.currentY) * ease;
      physics.current.currentX += (targetXPercent - physics.current.currentX) * ease;

      // Rotation Logic: Constant spin + Scroll velocity influence
      physics.current.rotX += 0.5 + (rawProgress * 5); // Spins faster as you scroll down
      physics.current.rotY += 0.5;

      // 4. Apply Transforms
      if (containerRef.current) {
        containerRef.current.style.left = `${physics.current.currentX}%`;
        containerRef.current.style.top = `${physics.current.currentY}%`;
        containerRef.current.style.transform = `
          translate3d(-50%, -50%, 0)
          rotateX(${physics.current.rotX}deg) 
          rotateY(${physics.current.rotY}deg)
          scale(${1 + rawProgress * 0.5}) 
        `;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Shared Ring Styles
  const ringStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    borderRadius: '50%',
    border: '4px solid currentColor', // Uses current text color which is handled by mix-blend-mode
    transformStyle: 'preserve-3d',
  };

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[40] overflow-hidden hidden md:block" 
      style={{ 
        perspective: '1000px',
        // Critical: This makes the object invert colors based on background
        // White bg -> Black Object. Black bg -> White Object.
        mixBlendMode: 'exclusion' 
      }}
    >
      <div 
        ref={containerRef}
        className="absolute w-32 h-32 text-white" // Base color white, exclusion makes it black on white
        style={{ transformStyle: 'preserve-3d', willChange: 'transform, top, left' }}
      >
        {/* Ring 1: Large Outer */}
        <div 
          style={{ 
            ...ringStyle, 
            width: '100%', 
            height: '100%', 
            transform: 'translate(-50%, -50%) rotateX(0deg) rotateY(0deg)',
            borderWidth: '2px',
            opacity: 0.9
          }} 
        />

        {/* Ring 2: Medium Cross */}
        <div 
          style={{ 
            ...ringStyle, 
            width: '80%', 
            height: '80%', 
            transform: 'translate(-50%, -50%) rotateX(90deg)',
            borderWidth: '3px',
            opacity: 0.8
          }} 
        />

        {/* Ring 3: Small Inner */}
        <div 
          style={{ 
            ...ringStyle, 
            width: '60%', 
            height: '60%', 
            transform: 'translate(-50%, -50%) rotateY(90deg)',
            borderWidth: '4px',
            opacity: 0.7
          }} 
        />

        {/* The Core: Glowing Nucleus */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"
          style={{
            boxShadow: '0 0 20px 5px rgba(255, 255, 255, 0.8)'
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full translate-x-10 -translate-y-4 opacity-60" />
        <div className="absolute bottom-0 right-1/2 w-1 h-1 bg-white rounded-full -translate-x-8 translate-y-6 opacity-60" />

      </div>
    </div>
  );
};

export default Scroll3DObject;
