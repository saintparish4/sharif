'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useGSAPScrollAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Check if mobile for performance optimization
    const isMobile = window.innerWidth < 768;
    
    // Disable parallax on mobile - too expensive
    if (!isMobile) {
      gsap.utils.toArray<HTMLElement>('.parallax-bg').forEach((element) => {
        gsap.to(element, {
          yPercent: -50,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    }

    // Simplified animations for project cards on mobile
    gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, index) => {
      if (isMobile) {
        // Simple fade-in on mobile
        gsap.fromTo(card, 
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true // Only animate once on mobile
            }
          }
        );
      } else {
        // Full animation on desktop
        gsap.fromTo(card, 
          { y: 100, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            force3D: true,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.1
          }
        );
      }
    });

    // Simplified skill bars on mobile
    gsap.utils.toArray<HTMLElement>('.skill-bar').forEach((bar) => {
      const progress = bar.dataset.progress;
      gsap.fromTo(bar.querySelector('.skill-fill'), 
        { width: '0%' },
        {
          width: `${progress}%`,
          duration: isMobile ? 1 : 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Simplified text reveals on mobile
    gsap.utils.toArray<HTMLElement>('.text-reveal').forEach((text) => {
      if (isMobile) {
        gsap.fromTo(text, 
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: text,
              start: "top 90%",
              toggleActions: "play none none none",
              once: true
            }
          }
        );
      } else {
        gsap.fromTo(text, 
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            force3D: true,
            scrollTrigger: {
              trigger: text,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // Disable pinning on mobile - causes scroll jank
    if (!isMobile) {
      gsap.utils.toArray<HTMLElement>('.pin-section').forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: 1
        });
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};

// Individual animation hooks for specific components
export const useProjectCardAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(ref.current, 
      {
        y: 60,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out"
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return ref;
};

export const useSkillBarAnimation = (progress: number) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const fillElement = ref.current.querySelector('.skill-fill');
    
    if (fillElement) {
      gsap.fromTo(fillElement, 
        { width: '0%' },
        {
          width: `${progress}%`,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [progress]);

  return ref;
};


