import Link from "next/link";
import Reveal from "./Reveal";
import sectionStyles from "./Section.module.css";
import styles from "./ArchivesSection.module.css";

const LOCKED_ARCHIVES = [
  { title: "As Criaturas", description: "bestiário do pacto" },
  { title: "As Missões", description: "casos da Vigília" },
];

export default function ArchivesSection() {
  return (
    <section id="arquivos">
      <div className={sectionStyles.eyebrow}>Arquivos — Em selo</div>
      <h2 className={sectionStyles.heading}>Ainda lacrados</h2>
      <p className={sectionStyles.body}>
        A ordem guarda mais do que a sua história. Estes registros aguardam abertura — o sistema de jogo, o catálogo
        de criaturas, as fichas dos agentes e as missões.
      </p>
      <div className={styles.archiveGrid}>
        <Reveal className={`${styles.locked} ${styles.unlocked}`}>
          <Link href="/sistema" className={styles.unlockedLink}>
            <b>O Sistema</b>
            <span className={styles.tagOpen}>[ aberto ]</span> dados, testes & regras
          </Link>
        </Reveal>
        <Reveal className={`${styles.locked} ${styles.unlocked}`}>
          <Link href="/agentes" className={styles.unlockedLink}>
            <b>Os Agentes</b>
            <span className={styles.tagOpen}>[ aberto ]</span> arquétipos & fichas
          </Link>
        </Reveal>
        {LOCKED_ARCHIVES.map((archive) => (
          <Reveal key={archive.title} className={styles.locked}>
            <b>{archive.title}</b>
            <span className={styles.tag}>[ lacrado ]</span> {archive.description}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
