import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.crest}>
        SANGUIS <b>SANCTUS</b> · VIGILIA
      </div>
      <div className={styles.meta}>Fundada em 1812 · Inglaterra · A vela está acesa. A noite será longa.</div>
    </footer>
  );
}
