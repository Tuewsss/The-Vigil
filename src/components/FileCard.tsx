import type { ReactNode } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import styles from "./Houses.module.css";

export interface FileCardProps {
  slug?: string;
  seal: string;
  classification: string;
  hostileTag?: string;
  title: ReactNode;
  epithet: string;
  description: ReactNode;
  redacted?: boolean;
}

export default function FileCard({
  slug,
  seal,
  classification,
  hostileTag,
  title,
  epithet,
  description,
  redacted,
}: FileCardProps) {
  const cardClassName = redacted ? `${styles.file} ${styles.redacted}` : styles.file;

  const card = (
    <Reveal as="article" className={cardClassName}>
      <span className={styles.seal}>{seal}</span>
      <div className={styles.classification}>
        {classification}
        {hostileTag && (
          <>
            {" · "}
            <span className={styles.hostile}>{hostileTag}</span>
          </>
        )}
      </div>
      <h3>{title}</h3>
      <span className={styles.epithet}>{epithet}</span>
      <p>{description}</p>
    </Reveal>
  );

  if (!slug) {
    return card;
  }

  return (
    <Link href={`/casas/${slug}`} className={styles.cardLink}>
      {card}
    </Link>
  );
}
