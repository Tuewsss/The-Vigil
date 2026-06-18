"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";

interface RevealProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export default function Reveal({ as: Tag = "div", className = "", children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${visible ? "in" : ""} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
