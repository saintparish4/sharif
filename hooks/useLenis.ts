// hooks/useLenis.ts
'use client';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  
  useEffect(() => {
    // Disable smooth scroll on mobile for better performance
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    if (isMobile) {
      return; // Use native scroll on mobile
    }
    
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      touchMultiplier: 1, // Reduced from 2
    });
    
    setLenis(lenisInstance);
    
    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
    return () => {
      lenisInstance.destroy();
    };
  }, []);
  
  return lenis;
};