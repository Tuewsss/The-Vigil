import Link from "next/link";
import styles from "./ErrorScreen.module.css";

type Action =
  | { type: "link"; href: string; label: string }
  | { type: "button"; label: string; onClick: () => void };

function ActionItem({ action, className }: { action: Action; className: string }) {
  if (action.type === "link") {
    return (
      <Link href={action.href} className={className}>
        {action.label}
      </Link>
    );
  }

  return (
    <button type="button" className={className} onClick={action.onClick}>
      {action.label}
    </button>
  );
}

export default function ErrorScreen({
  stamp,
  eyebrow,
  code,
  title,
  children,
  primary,
  secondary,
}: {
  stamp: string;
  eyebrow: string;
  code: string;
  title: string;
  children: React.ReactNode;
  primary: Action;
  secondary?: Action;
}) {
  return (
    <section className={styles.section}>
      <div className={styles.stamp}>{stamp}</div>
      <div className={styles.eyebrow}>{eyebrow}</div>
      <div className={styles.code}>{code}</div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.body}>{children}</p>
      <div className={styles.actions}>
        <ActionItem action={primary} className={styles.primary} />
        {secondary && <ActionItem action={secondary} className={styles.secondary} />}
      </div>
    </section>
  );
}
