"use client";

import { useEffect, useId, useState } from "react";
import styles from "./BloodIntro.module.css";

const STORAGE_KEY = "vigil-intro-played";
const TOTAL_DURATION = 2650;

const DROP_PATH =
  "M50,8 C65,28 80,50 80,68 C80,87 67,98 50,98 C33,98 20,87 20,68 C20,50 35,28 50,8 Z";

export default function BloodIntro() {
  const [show, setShow] = useState(false);
  const clipId = useId();

  useEffect(() => {
    const alreadyPlayed = sessionStorage.getItem(STORAGE_KEY) === "1";
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (alreadyPlayed || reducedMotion) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      return;
    }

    sessionStorage.setItem(STORAGE_KEY, "1");
    setShow(true);
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, TOTAL_DURATION);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div className={styles.overlay} aria-hidden="true">
      <svg
        className={styles.dropSvg}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={DROP_PATH} className={styles.outline} />
        <clipPath id={clipId}>
          <rect x="0" y="0" width="100" height="0" className={styles.fillRect} />
        </clipPath>
        <path d={DROP_PATH} fill="var(--blood-bright)" clipPath={`url(#${clipId})`} />
      </svg>
    </div>
  );
}