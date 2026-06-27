"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./RelicEasterEgg.module.css";

const CLICKS_TO_REVEAL = 3;

type Streak = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  width: number;
};

function spawnBatch(): Streak[] {
  const count = 3 + Math.floor(Math.random() * 2);
  return Array.from({ length: count }, () => ({
    id: Math.random(),
    left: 4 + Math.random() * 92,
    delay: Math.random() * 220,
    duration: 1800 + Math.random() * 1200,
    width: 3 + Math.random() * 5,
  }));
}

export default function RelicEasterEgg({ children, className }: { children: ReactNode; className?: string }) {
  const [streaks, setStreaks] = useState<Streak[]>([]);
  const [revealed, setRevealed] = useState(false);
  const clicksRef = useRef(0);
  const timersRef = useRef<number[]>([]);

  const clearTimers = () => {
    timersRef.current.forEach((t) => window.clearTimeout(t));
    timersRef.current = [];
  };

  useEffect(() => clearTimers, []);

  const spawnStreaks = () => {
    const batch = spawnBatch();
    setStreaks((prev) => [...prev, ...batch]);
    // cada respingo remove a si mesmo quando sua própria animação termina,
    // então sem novos cliques o sangue sempre para de cair sozinho
    batch.forEach((streak) => {
      const t = window.setTimeout(() => {
        setStreaks((prev) => prev.filter((s) => s.id !== streak.id));
      }, streak.delay + streak.duration + 500);
      timersRef.current.push(t);
    });
  };

  const handleActivate = () => {
    if (revealed) return;
    clicksRef.current += 1;
    if (clicksRef.current >= CLICKS_TO_REVEAL) {
      clicksRef.current = 0;
      clearTimers();
      setStreaks([]);
      setRevealed(true);
    } else {
      spawnStreaks();
    }
  };

  const closeReveal = () => setRevealed(false);

  useEffect(() => {
    if (!revealed) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeReveal();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [revealed]);

  return (
    <>
      <span
        role="button"
        tabIndex={0}
        className={className}
        onClick={handleActivate}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleActivate();
          }
        }}
      >
        {children}
      </span>

      {streaks.length > 0 &&
        createPortal(
          <div className={styles.bleedLayer} aria-hidden="true">
            {streaks.map((s) => (
              <span
                key={s.id}
                className={styles.streak}
                style={{
                  left: `${s.left}vw`,
                  width: `${s.width}px`,
                  animationDuration: `${s.duration}ms`,
                  animationDelay: `${s.delay}ms`,
                }}
              />
            ))}
          </div>,
          document.body
        )}

      {revealed &&
        createPortal(
          <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Sanguis Sanctus">
            <button type="button" className={styles.closeBtn} onClick={closeReveal} aria-label="Fechar">
              ✕
            </button>
            <RelicScene />
          </div>,
          document.body
        )}
    </>
  );
}

function RelicScene() {
  return (
    <div className={styles.scene}>
      <div className={styles.altarGlow} />

      <svg className={styles.rivers} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path className={styles.river} d="M50,40 C42,52 22,58 0,52" />
        <path className={styles.river} d="M50,40 C58,52 78,58 100,52" />
        <path className={styles.river} d="M50,40 C44,56 34,80 22,100" />
        <path className={styles.river} d="M50,40 C56,56 66,80 78,100" />
        <path className={styles.river} d="M50,40 C50,58 50,80 50,100" />
        <path className={styles.river} d="M50,40 C36,46 14,42 2,30" />
        <path className={styles.river} d="M50,40 C64,46 86,42 98,30" />
      </svg>

      <div className={styles.mount}>
        <svg viewBox="0 0 100 100" className={styles.gem} aria-hidden="true">
          <polygon points="50,6 76,34 68,90 32,90 24,34" className={styles.gemFacets} />
          <polygon points="50,6 76,34 50,46 24,34" className={styles.gemTop} />
          <polygon points="24,34 50,46 32,90" className={styles.gemLeft} />
          <polygon points="76,34 50,46 68,90" className={styles.gemRight} />
        </svg>
      </div>

      <span className={styles.drip} style={{ left: "30%" }} />
      <span className={styles.drip} style={{ left: "50%" }} />
      <span className={styles.drip} style={{ left: "70%" }} />

      <p className={styles.caption}>Sanguis Sanctus</p>
    </div>
  );
}
