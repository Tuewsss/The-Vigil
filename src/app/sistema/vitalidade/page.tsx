import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import sectionStyles from "@/components/Section.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Vida & Sanidade — O Sistema — The Sacred Blood: The Vigil",
  description: "As duas barras que podem se esvaziar — Vida, Sanidade e a Iniciativa dos agentes da Vigília.",
};

export default function VitalidadePage() {
  return (
    <>
      <Nav />
      <article>
        <section>
          <Link href="/sistema" className={styles.back}>
            ← Voltar ao Sistema
          </Link>
          <header className={styles.header}>
            <span className={styles.seal}>II</span>
            <div className={styles.classification}>Documento Técnico · Sistema de Jogo</div>
            <h1 className={styles.title}>Vida &amp; Sanidade</h1>
            <p className={styles.epithet}>As Duas Barras Que Podem Se Esvaziar</p>
          </header>
          <p className={`${sectionStyles.lede} ${styles.lede}`}>
            O sobrenatural não ataca um lugar só. Ele mira o corpo e a mente ao mesmo tempo — e por isso cada agente
            carrega duas barras que podem se esvaziar.
          </p>
        </section>

        <section>
          <Reveal as="div" className={styles.chapter}>
            <h2 className={styles.chapterTitle}>1. Vida &amp; Sanidade</h2>
            <p className={styles.chapterSubtitle}>As duas barras que podem se esvaziar</p>
            <p className={sectionStyles.body} style={{ marginTop: 0 }}>
              Todo agente começa com <strong>10 de Vida</strong> e <strong>20 de Sanidade</strong>, e cresce dali
              conforme onde investe seus pontos.
            </p>

            <div className={styles.vitals}>
              <div className={styles.vital}>
                <div className={styles.vname}>Vida</div>
                <div className={styles.vsub}>o quanto o corpo aguenta.</div>
                <div className={styles.vbase}>
                  Base: <b>10</b>
                </div>
                <div className={styles.vformulaBox}>
                  <div className={styles.frow}>
                    <span className={styles.frowSrc}>
                      Cada ponto em <b>Corpo</b>
                    </span>
                    <span className={styles.frowVal}>+10</span>
                  </div>
                  <div className={styles.frow}>
                    <span className={styles.frowSrc}>
                      Cada ponto em <b>Vigor</b>
                    </span>
                    <span className={styles.frowVal}>+2</span>
                  </div>
                </div>
                <p className={styles.vnote}>
                  A barra do dano físico — golpes, quedas, garras e lâminas. Quando chega a zero, o agente está
                  caindo, e a noite raramente perdoa quem cai.
                </p>
              </div>

              <div className={`${styles.vital} ${styles.vitalSan}`}>
                <div className={styles.vname}>Sanidade</div>
                <div className={styles.vsub}>o quanto a mente suporta.</div>
                <div className={styles.vbase}>
                  Base: <b>20</b>
                </div>
                <div className={styles.vformulaBox}>
                  <div className={styles.frow}>
                    <span className={styles.frowSrc}>
                      Cada ponto em <b>Mente &amp; Espírito</b>
                    </span>
                    <span className={styles.frowVal}>+5</span>
                  </div>
                  <div className={styles.frow}>
                    <span className={styles.frowSrc}>
                      Cada ponto em <b>Sangue-Frio</b>
                    </span>
                    <span className={styles.frowVal}>+4</span>
                  </div>
                </div>
                <p className={styles.vnote}>
                  A barra do dano que não deixa marca na pele — encarar o impossível, testemunhar o horror, sobreviver
                  ao que a mente não deveria ver. Quando se esgota, o que se quebra não cicatriza tão fácil.
                </p>
              </div>

              <div className={`${styles.vital} ${styles.vitalSan}`}>
                <div className={styles.vname}>Iniciativa</div>
                <div className={styles.vsub}>quem age primeiro.</div>
                <div className={styles.vformulaBox} style={{ marginTop: 0, borderTop: "none", paddingTop: 0 }}>
                  <div className={styles.frow}>
                    <span className={styles.frowSrc}>Rolagem</span>
                    <span className={styles.frowVal}>1d20 + Sangue-Frio</span>
                  </div>
                </div>
                <p className={styles.vnote}>O maior resultado age primeiro na rodada.</p>
              </div>
            </div>
          </Reveal>
        </section>
      </article>
      <Footer />
    </>
  );
}
