import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.sealLine}>Sanguis Sanctus &nbsp;·&nbsp; Vigilia &nbsp;·&nbsp; Sanguis Sanctus</div>
      <h1 className={styles.title}>
        THE SACRED <span className={styles.blood}>BLOOD</span>
      </h1>
      <div className={styles.sub}>THE VIGIL</div>
      <div className={styles.rule}></div>
      <p className={styles.epigraph}>
        <span className={styles.quote}>&ldquo;</span>A morte já não derruba os homens como antes. A guerra não matou
        uma geração — arrombou uma porta. E nós somos os que sobraram deste lado, com a mão na maçaneta.
        <span className={styles.quote}>&rdquo;</span>
        <span className={styles.attr}>Ancião da Vigília — a um recruta, 1920</span>
      </p>
      <div className={styles.scrolltip}>desça aos arquivos ↓</div>
    </header>
  );
}
