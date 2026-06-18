import Link from "next/link";
import styles from "./Nav.module.css";

const LINKS = [
  { href: "/#mundo", label: "O Mundo" },
  { href: "/#ordem", label: "A Ordem" },
  { href: "/#reliquia", label: "A Relíquia" },
  { href: "/#casas", label: "As Casas" },
  { href: "/#arquivos", label: "Arquivos" },
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <span className={styles.mark}>
        THE SACRED <b>BLOOD</b> · THE VIGIL
      </span>
      <ul className={styles.list}>
        {LINKS.map((link) => (
          <li key={link.href}>
            <Link className={styles.link} href={link.href} prefetch={false}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
