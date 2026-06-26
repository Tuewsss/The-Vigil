"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import styles from "./RitualGate.module.css";

export type RitualTheme = "feiticaria" | "sangue" | "ocultismo";

const HOLD_MS = 1000;
const CHARGE_POP_MS = 180;
const BURST_MS: Record<RitualTheme, number> = {
  feiticaria: 950,
  sangue: 1150,
  ocultismo: 1050,
};
// dispara a navegação no auge do efeito (tela já coberta), não no fim da animação,
// pra esconder a troca instantânea de página por trás do clímax visual
const NAV_AT = 0.78;

const COPY: Record<RitualTheme, { instruction: string; charging: string; locked?: string }> = {
  feiticaria: {
    instruction: "Pressione e segure o sigilo",
    charging: "O ritual se fecha…",
  },
  sangue: {
    instruction: "Pressione e segure a gota",
    charging: "O sangue desperta…",
  },
  ocultismo: {
    instruction: "Pressione e segure o olho",
    charging: "Algo começa a olhar de volta…",
    locked: "O Ocultismo ainda não foi revelado a ninguém. [ permanece em catalogação ]",
  },
};

type Phase = "hold" | "charged" | "burst" | "reveal";

export default function RitualGate({
  theme,
  href,
  className,
  children,
}: {
  theme: RitualTheme;
  href?: string;
  className?: string;
  children: ReactNode;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<Phase>("hold");
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startedAtRef = useRef<number | null>(null);
  const pressableRef = useRef<HTMLDivElement>(null);

  const stopRaf = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  const openGate = () => {
    stopRaf();
    startedAtRef.current = null;
    setProgress(0);
    setPhase("hold");
    setOpen(true);
  };

  const closeGate = () => {
    stopRaf();
    setOpen(false);
  };

  const startHold = () => {
    if (phase !== "hold" || rafRef.current !== null) return;
    startedAtRef.current = performance.now();
    const tick = (now: number) => {
      const start = startedAtRef.current ?? now;
      const pct = Math.min(100, ((now - start) / HOLD_MS) * 100);
      setProgress(pct);
      if (pct >= 100) {
        stopRaf();
        setPhase("charged");
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const cancelHold = () => {
    if (phase !== "hold") return;
    stopRaf();
    startedAtRef.current = null;
    setProgress(0);
  };

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    pressableRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape" && (phase === "hold" || phase === "reveal")) closeGate();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, phase]);

  useEffect(() => {
    if (phase === "charged") {
      const t = window.setTimeout(() => setPhase("burst"), CHARGE_POP_MS);
      return () => window.clearTimeout(t);
    }
    if (phase === "burst") {
      if (href) {
        const t = window.setTimeout(() => router.push(href), BURST_MS[theme] * NAV_AT);
        return () => window.clearTimeout(t);
      }
      const t = window.setTimeout(() => setPhase("reveal"), BURST_MS[theme]);
      return () => window.clearTimeout(t);
    }
  }, [phase, theme, href, router]);

  useEffect(() => stopRaf, []);

  const handlePressableKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if ((e.key === "Enter" || e.key === " ") && !e.repeat) {
      e.preventDefault();
      startHold();
    }
  };

  const handlePressableKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") cancelHold();
  };

  const copy = COPY[theme];
  const locked = !href;
  const burstActive = phase === "burst" || phase === "reveal";

  return (
    <>
      {href ? (
        <Link
          href={href}
          className={className}
          onClick={(e) => {
            e.preventDefault();
            openGate();
          }}
        >
          {children}
        </Link>
      ) : (
        <div
          role="button"
          tabIndex={0}
          className={className}
          onClick={openGate}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openGate();
            }
          }}
        >
          {children}
        </div>
      )}

      {open && (
        <div className={styles.overlay} data-theme={theme} data-phase={phase} role="dialog" aria-modal="true">
          <div className={styles.backdrop} onClick={() => phase === "hold" && closeGate()} />

          <button type="button" className={styles.closeBtn} onClick={closeGate} aria-label="Cancelar">
            ✕
          </button>

          <div className={styles.stage}>
            <div
              ref={pressableRef}
              role="button"
              tabIndex={0}
              className={styles.pressable}
              aria-label={copy.instruction}
              onPointerDown={startHold}
              onPointerUp={cancelHold}
              onPointerLeave={cancelHold}
              onPointerCancel={cancelHold}
              onKeyDown={handlePressableKeyDown}
              onKeyUp={handlePressableKeyUp}
            >
              <RitualGlyph theme={theme} progress={progress} />
              <RingProgress progress={progress} />
            </div>

            <p className={styles.instruction}>
              {phase === "hold" ? copy.instruction : phase !== "reveal" ? copy.charging : ""}
            </p>
          </div>

          {burstActive && <BurstEffect theme={theme} />}

          {phase === "reveal" && locked && (
            <div className={styles.lockedReveal}>
              <p>{copy.locked}</p>
              <button type="button" className={styles.lockedClose} onClick={closeGate}>
                Fechar
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

function RitualGlyph({ theme, progress }: { theme: RitualTheme; progress: number }) {
  const opacity = 0.4 + (progress / 100) * 0.6;

  if (theme === "feiticaria") {
    return (
      <svg viewBox="0 0 100 100" className={styles.glyph} style={{ opacity }} aria-hidden="true">
        <circle cx="50" cy="50" r="46" className={styles.glyphLine} />
        <circle cx="50" cy="50" r="34" className={styles.glyphLine} />
        <polygon points="50,8 87,72 13,72" className={styles.glyphLine} />
        <polygon points="50,92 13,28 87,28" className={styles.glyphLine} />
        <circle cx="50" cy="50" r="4" className={styles.glyphCore} />
      </svg>
    );
  }

  if (theme === "sangue") {
    return (
      <svg viewBox="0 0 100 100" className={styles.glyph} style={{ opacity }} aria-hidden="true">
        <path
          d="M50,8 C65,28 80,50 80,68 C80,87 67,98 50,98 C33,98 20,87 20,68 C20,50 35,28 50,8 Z"
          className={styles.glyphDrop}
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 100" className={styles.glyph} style={{ opacity }} aria-hidden="true">
      <path d="M5,50 Q50,14 95,50 Q50,86 5,50 Z" className={styles.glyphLine} />
      <circle cx="50" cy="50" r="18" className={styles.glyphIris} />
      <circle cx="50" cy="50" r="7" className={styles.glyphCore} />
    </svg>
  );
}

function RingProgress({ progress }: { progress: number }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress / 100);

  return (
    <svg viewBox="0 0 120 120" className={styles.ring} aria-hidden="true">
      <circle cx="60" cy="60" r={radius} className={styles.ringTrack} />
      <circle
        cx="60"
        cy="60"
        r={radius}
        className={styles.ringFill}
        style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
      />
    </svg>
  );
}

function BurstEffect({ theme }: { theme: RitualTheme }) {
  if (theme === "sangue") {
    return (
      <div className={styles.bloodFill} aria-hidden="true">
        <div className={styles.bloodWave} />
      </div>
    );
  }

  if (theme === "feiticaria") {
    return (
      <div className={styles.sigilBurst} aria-hidden="true">
        <div className={styles.sigilRays} />
        <div className={styles.sigilFlash} />
      </div>
    );
  }

  return (
    <div className={styles.eyeBurst} aria-hidden="true">
      <div className={styles.eyeShape}>
        <svg viewBox="0 0 200 200" className={styles.eyeSvg}>
          <path d="M4,100 Q100,8 196,100 Q100,192 4,100 Z" className={styles.eyeWhite} />
          <circle cx="100" cy="100" r="46" className={styles.eyeIris} />
          <circle cx="100" cy="100" r="20" className={styles.eyePupil} />
        </svg>
      </div>
      <div className={styles.eyeFlash} />
    </div>
  );
}
