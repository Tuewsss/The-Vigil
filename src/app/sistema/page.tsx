import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SystemTree from "@/components/SystemTree";
import sectionStyles from "@/components/Section.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "O Sistema — The Sacred Blood: The Vigil",
  description: "Dados, testes & regras: o sistema de 1d20 que governa os agentes da Vigília.",
};

export default function SystemPage() {
  return (
    <>
      <Nav />
      <article>
        <section>
          <Link href="/#arquivos" className={styles.back}>
            ← Voltar aos arquivos
          </Link>
          <header className={styles.header}>
            <span className={styles.seal}>1d20</span>
            <div className={styles.classification}>Documento Técnico · Sistema de Jogo</div>
            <h1 className={styles.title}>O Sistema</h1>
            <p className={styles.epithet}>Dados, Testes &amp; Regras</p>
          </header>
          <p className={`${sectionStyles.lede} ${styles.lede}`}>
            Aqui você não interpreta um herói invencível. Você é um agente da Vigília — alguém de carne e osso,
            enviado contra coisas mais antigas e mais fortes do que qualquer ser humano deveria enfrentar.
          </p>
          <p className={`${sectionStyles.body} ${styles.intro}`}>
            O sistema foi desenhado para uma única coisa: o medo. As regras são poucas, e isso é proposital. Cada
            teste é uma pequena aposta contra o escuro — e o escuro raramente joga limpo. Escolha um ramo da árvore
            abaixo para abrir o capítulo correspondente.
          </p>
        </section>

        <section>
          <SystemTree />
        </section>
      </article>
      <Footer />
    </>
  );
}
