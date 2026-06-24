import Link from "next/link";
import Reveal from "./Reveal";
import styles from "./DrawerCabinet.module.css";

interface Drawer {
  href: string;
  seal: string;
  gnum: string;
  title: string;
  description: string;
  chapters: number;
}

const DRAWERS: Drawer[] = [
  {
    href: "/sistema/mecanica",
    seal: "I",
    gnum: "Gaveta I",
    title: "Mecânica Base",
    description: "O d20, complicações, modificadores de cena e os Atributos Fortes e Perícias.",
    chapters: 5,
  },
  {
    href: "/sistema/criacao",
    seal: "II",
    gnum: "Gaveta II",
    title: "Criação de Personagem",
    description: "Distribuição de pontos, limites na criação, e as fórmulas de Vida e Sanidade.",
    chapters: 4,
  },
  {
    href: "/sistema/combate",
    seal: "III",
    gnum: "Gaveta III",
    title: "Combate e Iniciativa",
    description: "Ataque, defesa, contra-golpe e o peso da arma na mão.",
    chapters: 6,
  },
  {
    href: "/sistema/armas",
    seal: "IV",
    gnum: "Gaveta IV",
    title: "Sistema de Armas",
    description: "Calibre, lâmina e traço — o catálogo de armas da era.",
    chapters: 7,
  },
  {
    href: "/sistema/sobrenatural",
    seal: "V",
    gnum: "Gaveta V",
    title: "Sobrenatural",
    description: "Sangue, Feitiçaria e Ocultismo — o que não pertence a este mundo.",
    chapters: 3,
  },
];

export default function DrawerCabinet() {
  return (
    <div className={styles.cabinet}>
      {DRAWERS.map((drawer) => (
        <Link key={drawer.href} href={drawer.href} className={styles.drawerLink}>
          <Reveal as="article" className={styles.drawer}>
            <div className={styles.plate}>
              <span className={styles.seal}>{drawer.seal}</span>
              <div>
                <div className={styles.codename}>{drawer.gnum}</div>
                <div className={styles.classification}>Manual Operacional</div>
              </div>
            </div>
            <h3 className={styles.name}>{drawer.title}</h3>
            <span className={styles.role}>{drawer.description}</span>
            <div className={styles.statusRow}>
              <span>
                Capítulos: <b>{drawer.chapters}</b>
              </span>
              <span>
                Status: <b>Aberta</b>
              </span>
            </div>
            <div className={styles.open}>[ abrir dossiê ]</div>
          </Reveal>
        </Link>
      ))}
    </div>
  );
}
