import type { ReactNode } from "react";
import styles from "./Occult.module.css";

export type OccultTheme = "sangue" | "feiticaria" | "ocultismo";

export interface OccultSheetProps {
  theme: OccultTheme;
  stamp: string;
  slabNum: string;
  slabTitle: string;
  docHead: string;
  asideNote?: string;
  children: ReactNode;
}

export default function OccultSheet({ theme, stamp, slabNum, slabTitle, docHead, asideNote, children }: OccultSheetProps) {
  return (
    <section className={`${styles.sheet} ${styles[theme]}`}>
      {theme === "sangue" && (
        <>
          <div className={styles.drip} aria-hidden="true" />
          <svg className={styles.stain} viewBox="0 0 170 170" fill="none" aria-hidden="true">
            <ellipse cx="95" cy="80" rx="65" ry="54" fill="#e05050" />
            <ellipse cx="130" cy="58" rx="34" ry="25" fill="#c83838" />
            <ellipse cx="72" cy="116" rx="32" ry="23" fill="#e86060" />
            <circle cx="152" cy="95" r="15" fill="#c84040" />
            <circle cx="48" cy="140" r="10" fill="#e05050" />
            <circle cx="158" cy="42" r="8" fill="#b83030" />
            <circle cx="28" cy="100" r="6" fill="#e05050" />
            <circle cx="120" cy="140" r="5" fill="#c83838" />
          </svg>
        </>
      )}

      {theme === "feiticaria" && (
        <svg className={styles.sigil} viewBox="0 0 230 230" fill="none" aria-hidden="true">
          <circle cx="115" cy="115" r="110" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="115" cy="115" r="86" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="115" cy="115" r="62" stroke="currentColor" strokeWidth="0.4" />
          <polygon points="115,17 201,173 29,173" fill="none" stroke="currentColor" strokeWidth="0.7" />
          <polygon points="115,213 29,57 201,57" fill="none" stroke="currentColor" strokeWidth="0.7" />
          <circle cx="115" cy="115" r="8" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="115" cy="115" r="3" fill="currentColor" />
          <line x1="115" y1="7" x2="115" y2="223" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
          <line x1="7" y1="115" x2="223" y2="115" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
          <line x1="38" y1="38" x2="192" y2="192" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
          <line x1="192" y1="38" x2="38" y2="192" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
        </svg>
      )}

      {theme === "ocultismo" && <div className={styles.fog} aria-hidden="true" />}

      <span className={styles.stamp}>{stamp}</span>

      <div className={styles.inner}>
        <div className={styles.slab}>
          <span className={styles.slabNum}>{slabNum}</span>
          <h3>{slabTitle}</h3>
        </div>

        <h2 className={styles.docHead}>{docHead}</h2>
        <hr className={styles.sep} />

        {children}

        {asideNote && <p className={styles.asideNote}>{asideNote}</p>}
      </div>
    </section>
  );
}
