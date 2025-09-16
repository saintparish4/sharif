// components/animations/CustomCursor.tsx
'use client';
import { useEffect } from 'react';

export const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'fixed top-0 left-0 z-[99] h-20 w-20 rounded-full border-2 border-white bg-white/80 text-black text-xs font-bold flex items-center justify-center mix-blend-difference pointer-events-none';
    
    const cursorText = document.createElement('span');
    cursorText.textContent = 'View';
    cursorText.className = 'pointer-events-none text-[10px] sm:text-xs md:text-sm font-semibold';
    cursor.appendChild(cursorText);
    document.body.appendChild(cursor);
    
    const cursorAreas = document.querySelectorAll('.custom-cursor-area');
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.12;
      cursorY += (mouseY - cursorY) * 0.12;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      
      let isHovering = false;
      cursorAreas.forEach(area => {
        const rect = area.getBoundingClientRect();
        if (mouseX >= rect.left && mouseX <= rect.right && 
            mouseY >= rect.top && mouseY <= rect.bottom) {
          isHovering = true;
        }
      });
      
      cursor.style.display = isHovering ? 'flex' : 'none';
      requestAnimationFrame(updateCursor);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(updateCursor);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(cursor);
    };
  }, []);
  
  return null;
};