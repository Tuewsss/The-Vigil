import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import sectionStyles from "@/components/Section.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sistema de Trauma — O Sistema — The Sacred Blood: The Vigil",
  description: "O que acontece quando o limite é alcançado: Desespero, Cicatrizes e Trauma Mental.",
};

export default function TraumaPage() {
  return (
    <>
      <Nav />
      <article>
        <section>
          <Link href="/sistema" className={styles.back}>
            ← Voltar ao Sistema
          </Link>
          <header className={styles.header}>
            <span className={styles.seal}>III</span>
            <div className={styles.classification}>Documento Técnico · Sistema de Jogo</div>
            <h1 className={styles.title}>Sistema de Trauma</h1>
            <p className={styles.epithet}>O Que Acontece Quando o Limite É Alcançado</p>
          </header>
          <p className={`${sectionStyles.lede} ${styles.lede}`}>
            O trauma entra em cena quando o agente chega a um estado crítico — pela Vida ou pela Sanidade. Todo
            trauma é resistido com a mesma rolagem da iniciativa: <strong>1d20 + Sangue-Frio</strong>. O Sangue-Frio é
            o que segura tudo.
          </p>
        </section>

        <section>
          <Reveal as="div" className={styles.chapter}>
            <h2 className={styles.chapterTitle}>1. Sistema de Trauma</h2>

            <div className={styles.callout}>
              <div className={styles.calloutTitle}>Regra · Desvantagem</div>
              <p>
                Sob trauma, muitas rolagens vêm em <strong>Desvantagem</strong>: você fica com o <strong>menor</strong>{" "}
                dado em vez do maior. Se você só tem um dado, sofre <strong>−5</strong> no resultado. É o espelho
                exato da regra de pegar o maior.
              </p>
            </div>

            <div className={styles.skillGroup}>
              <div className={styles.groupHead}>1 · O Desespero — Vida</div>
              <p className={sectionStyles.body} style={{ marginTop: 0 }}>
                Quando a Vida cai <strong>abaixo de 20% do máximo</strong>, o agente entra em Desespero — ele sente,
                no corpo, que vai morrer.
              </p>
              <div className={styles.callout}>
                <div className={styles.calloutTitle}>Teste de Persistência · no início de cada turno</div>
                <p className={`${styles.roll} ${styles.rollLarge}`}>1d20 + Sangue-Frio</p>
                <div className={`${styles.branch} ${styles.branchFirst}`}>
                  <span className={styles.branchCond}>Maior que 12</span>
                  <span className={styles.branchOut}>
                    Ele <b>segura a postura</b> e age normalmente neste turno.
                  </span>
                </div>
                <div className={styles.branch}>
                  <span className={styles.branchCond}>12 ou menos</span>
                  <span className={styles.branchOut}>
                    O desespero domina: age em <b>Desvantagem</b> e não consegue avançar — só{" "}
                    <b>defender, recuar ou fugir</b>, nunca atacar.
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.skillGroup}>
              <div className={styles.groupHead}>2 · Cicatrizes — Traumas Permanentes</div>
              <p className={sectionStyles.body} style={{ marginTop: 0 }}>
                Quando um agente <strong>cai a 0 de Vida e sobrevive</strong> — estabilizado a tempo, arrastado para
                fora —, ele pode carregar uma cicatriz que nunca fecha. São debuffs fortes, mas{" "}
                <strong>jamais tiram o personagem da mesa</strong>: um agente caolho, maneta ou manco continua
                lutando, só que mais difícil.
              </p>
              <div className={styles.skills}>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Olho perdido
                  </h4>
                  <p>Desvantagem em Pontaria e em Percepção visual à distância; erra o julgamento de distância.</p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Braço perdido ou inutilizado
                  </h4>
                  <p>
                    Não usa armas de duas mãos nem recarrega rápido (a besta dupla vira um suplício); Desvantagem em
                    Combate e em todo esforço que peça as duas mãos.
                  </p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Perna perdida ou aleijada
                  </h4>
                  <p>Velocidade pela metade, não corre; Desvantagem em Reflexos, Esquiva e Furtividade.</p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Mão ou dedos mutilados
                  </h4>
                  <p>Desvantagem em tarefas finas: arrombar, recarregar, costurar uma ferida (Medicina).</p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Surdez parcial
                  </h4>
                  <p>Desvantagem em Percepção auditiva e ao ser pego de surpresa.</p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Rosto desfigurado
                  </h4>
                  <p>
                    Desvantagem em Lábia e em charme; em compensação, vantagem em Intimidação — o medo que você causa
                    virou ferramenta.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.skillGroup}>
              <div className={styles.groupHead}>3 · Trauma Mental — Sanidade</div>
              <p className={sectionStyles.body} style={{ marginTop: 0 }}>
                <strong>Abaixo de 30% — A Marca da Loucura.</strong> O agente desenvolve uma fobia ou mania. É
                narrativo e interpretável, mas tem peso: sempre que o gatilho aparece em cena, ele age em{" "}
                <strong>Desvantagem</strong>. Escolha a que combina com o que quebrou a mente dele.
              </p>
              <div className={styles.skills}>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Medo de sangue
                  </h4>
                  <p>Diante de sangue, seu ou alheio, ele trava: Desvantagem enquanto houver sangue à vista.</p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Medo de ferimentos
                  </h4>
                  <p>Feridas abertas o apavoram: Desvantagem ao tratar feridos (atrapalha Medicina) ou ao se machucar.</p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Medo do escuro
                  </h4>
                  <p>Na penumbra, Desvantagem em tudo; pode se recusar a entrar em lugares sem luz.</p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Necrofobia
                  </h4>
                  <p>Corpos e mortos-vivos o paralisam de horror: Desvantagem perto de cadáveres. Cruel, para um caçador de vampiros.</p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Fonofobia
                  </h4>
                  <p>Tiros e gritos o fazem sobressaltar: Desvantagem na iniciativa e no primeiro turno de combate.</p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Paranoia
                  </h4>
                  <p>Desconfia de todos, até dos aliados: Desvantagem em testes sociais e dificuldade de aceitar ajuda.</p>
                </div>
              </div>

              <div className={styles.callout}>
                <div className={styles.calloutTitle}>Sanidade baixa · em geral</div>
                <p>
                  A mente abalada deixa o agente lento para reagir: <strong>Desvantagem na iniciativa</strong>.
                </p>
              </div>

              <p className={sectionStyles.body}>
                <strong>Abaixo de 20% em combate — O Teste de Pânico.</strong> A mente chega ao limite. O agente rola{" "}
                <span className={styles.roll}>1d20 + Sangue-Frio</span> e lê na Tabela de Resultados:
              </p>
              <div className={styles.results}>
                <div className={styles.resultsHead}>Teste de Pânico — o que a mente faz no limite</div>
                <div className={`${styles.resRow} ${styles.fail}`}>
                  <span className={styles.resRange}>Fracasso</span>
                  <span className={styles.resLabel}>Ele se mata</span>
                  <span className={styles.resMean}>
                    A mente se parte; no auge do desespero, volta a arma contra si próprio.
                  </span>
                </div>
                <div className={styles.resRow}>
                  <span className={styles.resRange}>Ruim</span>
                  <span className={styles.resLabel}>Paralisado</span>
                  <span className={styles.resMean}>O terror o congela: não consegue se mover neste turno.</span>
                </div>
                <div className={styles.resRow}>
                  <span className={styles.resRange}>Bom</span>
                  <span className={styles.resLabel}>Alerta</span>
                  <span className={styles.resMean}>Segura o pânico e se mantém de prontidão.</span>
                </div>
                <div className={styles.resRow}>
                  <span className={styles.resRange}>Ótimo</span>
                  <span className={styles.resLabel}>De volta</span>
                  <span className={styles.resMean}>Respira fundo e se acalma; retoma o controle.</span>
                </div>
                <div className={`${styles.resRow} ${styles.crit}`}>
                  <span className={styles.resRange}>Crítico</span>
                  <span className={styles.resLabel}>Imperturbável</span>
                  <span className={styles.resMean}>
                    Calma quase assustadora, como se nada tivesse acontecido: se recompõe por inteiro.
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </article>
      <Footer />
    </>
  );
}
