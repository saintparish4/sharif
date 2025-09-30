'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useGSAPScrollAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax effect for background elements
    gsap.utils.toArray('.parallax-bg').forEach((element: any) => {
      gsap.to(element, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Stagger animations for project cards
    gsap.utils.toArray('.project-card').forEach((card: any, index) => {
      gsap.fromTo(card, 
        {
          y: 100,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.1
        }
      );
    });

    // Skills progress bars animation
    gsap.utils.toArray('.skill-bar').forEach((bar: any) => {
      const progress = bar.dataset.progress;
      gsap.fromTo(bar.querySelector('.skill-fill'), 
        { width: '0%' },
        {
          width: `${progress}%`,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Text reveal animations
    gsap.utils.toArray('.text-reveal').forEach((text: any) => {
      gsap.fromTo(text, 
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Section transitions with pinning
    gsap.utils.toArray('.pin-section').forEach((section: any) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: 1
      });
    });

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


