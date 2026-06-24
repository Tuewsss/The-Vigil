import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./Dossier.module.css";

export interface DossierProps {
  gnum: string;
  plateTitle: string;
  plateSub: string;
  eyebrow: string;
  heading: string;
  lede: ReactNode;
  signoff: string;
  children: ReactNode;
}

export default function Dossier({ gnum, plateTitle, plateSub, eyebrow, heading, lede, signoff, children }: DossierProps) {
  return (
    <>
      <Link href="/sistema" className={styles.back}>
        ← Voltar ao gaveteiro
      </Link>

      <div className={styles.drawer}>
        <div className={styles.plate}>
          <p className={styles.plateEyebrow}>{gnum}</p>
          <h1 className={styles.plateTitle}>{plateTitle}</h1>
          <p className={styles.plateSub}>{plateSub}</p>
        </div>
        <div className={styles.handle} aria-hidden="true" />
      </div>

      <article className={styles.sheet}>
        <div className={styles.stamp}>Confidencial</div>

        <header className={styles.docHead}>
          <p className={styles.docEyebrow}>{eyebrow}</p>
          <h2 className={styles.docHeading}>{heading}</h2>
          <p className={styles.lede}>{lede}</p>
        </header>

        <hr className={styles.rule} />

        {children}

        <div className={styles.signoff}>
          <div>{signoff}</div>
          <div className={styles.mark}>A Vigília</div>
        </div>
      </article>
    </>
  );
}
