import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AgentDrawer from "@/components/AgentDrawer";
import sectionStyles from "@/components/Section.module.css";
import drawerStyles from "@/components/AgentDrawer.module.css";
import { AGENTS } from "@/data/agents";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Os Agentes — The Sacred Blood: The Vigil",
  description: "Arquivo de pessoal da Vigília — fichas e arquétipos dos agentes em campo.",
};

export default function AgentesPage() {
  return (
    <>
      <Nav />
      <article>
        <section>
          <Link href="/#arquivos" className={styles.back}>
            ← Voltar aos arquivos
          </Link>
          <header className={styles.header}>
            <span className={styles.seal}>A</span>
            <div className={styles.classification}>Arquivo de Pessoal · Acesso Liberado</div>
            <h1 className={styles.title}>Os Agentes</h1>
            <p className={styles.epithet}>Arquétipos & Fichas</p>
          </header>
          <p className={`${sectionStyles.lede} ${styles.lede}`}>
            Um armário de ferro, gavetas pesadas, etiquetas amareladas. Cada uma guarda a pasta de quem veste o
            distintivo da Vigília — quem são, o que já fizeram, e o que ainda carregam. Puxe uma gaveta para abrir a
            ficha completa.
          </p>
        </section>

        <section>
          <div className={drawerStyles.cabinet}>
            {AGENTS.map((agent) => (
              <AgentDrawer key={agent.slug} agent={agent} />
            ))}
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
}
