"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function AnimatedNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link
      href={href}
      className="relative px-1"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span>{children}</span>
      {mounted && (
        <motion.span
          layoutId="nav-underline"
          className="absolute left-0 right-0 bottom-0 h-[2px] rounded origin-center"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
          style={{
            transformOrigin: "center",
            background: "linear-gradient(90deg, #bfaaff, #aee9f9, #b8f7d4, #ffe0f7, #ffe6b3)",
          }}
        />
      )}
    </Link>
  );
} 