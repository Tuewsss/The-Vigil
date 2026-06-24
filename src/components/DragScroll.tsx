"use client";

import { useRef } from "react";
import type { PointerEvent, ReactNode } from "react";
import styles from "./DragScroll.module.css";

export default function DragScroll({ children, className = "" }: { children: ReactNode; className?: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    drag.current = { active: true, startX: e.clientX, scrollLeft: wrapper.scrollLeft };
    wrapper.classList.add(styles.dragging);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const wrapper = wrapperRef.current;
    if (!wrapper || !drag.current.active) return;
    wrapper.scrollLeft = drag.current.scrollLeft - (e.clientX - drag.current.startX);
  };

  const endDrag = () => {
    drag.current.active = false;
    wrapperRef.current?.classList.remove(styles.dragging);
  };

  return (
    <div
      ref={wrapperRef}
      className={`${styles.wrapper} ${className}`.trim()}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      {children}
    </div>
  );
}
