// hooks/useLenis.ts
'use client';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      touchMultiplier: 2,
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