'use client';

import { ReactLenis, useLenis } from 'lenis/react';

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useLenis((lenis) => {
    if (typeof window !== 'undefined') {
      (window as unknown as { __lenis: typeof lenis }).__lenis = lenis;
    }
  });

  return <ReactLenis root>{children}</ReactLenis>;
}
