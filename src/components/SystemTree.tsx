import Link from "next/link";
import styles from "./SystemTree.module.css";

interface SystemBranch {
  href: string;
  numeral: string;
  title: string;
  description: string;
}

const BRANCHES: SystemBranch[] = [
  {
    href: "/sistema/mecanica",
    numeral: "I",
    title: "Mecânica Base",
    description: "O Dado, os Atributos Fortes e as Perícias — o que você rola em toda ação.",
  },
  {
    href: "/sistema/vitalidade",
    numeral: "II",
    title: "Vida & Sanidade",
    description: "As duas barras que podem se esvaziar, e a Iniciativa que decide quem age primeiro.",
  },
  {
    href: "/sistema/trauma",
    numeral: "III",
    title: "Sistema de Trauma",
    description: "O que acontece quando o limite é alcançado — Desespero, Cicatrizes e Trauma Mental.",
  },
  {
    href: "/sistema/armas",
    numeral: "IV",
    title: "Sistema de Armas",
    description: "Calibre, lâmina e traço — o catálogo de armas de fogo, brancas e improvisadas da era.",
  },
];

export default function SystemTree() {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.tree}>
        <li>
          <div className={styles.root}>
            <span className={styles.rootSeal}>1d20</span>
            <span className={styles.rootLabel}>O Sistema</span>
          </div>
          <ul>
            {BRANCHES.map((branch) => (
              <li key={branch.href}>
                <Link href={branch.href} className={styles.node}>
                  <span className={styles.numeral}>{branch.numeral}</span>
                  <h3>{branch.title}</h3>
                  <p>{branch.description}</p>
                  <span className={styles.open}>[ abrir capítulo ]</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
