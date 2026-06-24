import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Dossier from "@/components/Dossier";
import doc from "@/components/Document.module.css";

export const metadata: Metadata = {
  title: "Combate e Iniciativa — O Sistema — The Sacred Blood: The Vigil",
  description: "Iniciativa, ataque, defesa, contra-golpe, ataques desarmados e proteção.",
};

export default function CombatePage() {
  return (
    <>
      <Nav />
      <article>
        <section>
          <Dossier
            gnum="Gaveta III"
            plateTitle="O Sistema"
            plateSub="Manual Operacional · Combate e Iniciativa"
            eyebrow="Ref. SIS-III — Custódia da Ordem — Não reproduzir"
            heading="Combate e Iniciativa"
            signoff="Arquivado pela custódia da Ordem — Gaveta III, circulação restrita."
            lede={
              <>
                O combate corre em turnos, na ordem da Iniciativa. O que decide uma luta não é uma regra nova — é a
                arma na sua mão, pois é ela que carrega o dano.
              </>
            }
          >
            <section className={doc.panel} id="iniciativa">
              <div className={doc.tab}>
                <span className={doc.tabNum}>I.</span>
                <h3>Iniciativa</h3>
              </div>
              <p className={doc.body}>
                No início do combate, cada combatente rola a Iniciativa: pool de <strong>Mente &amp; Espírito</strong>,
                fica com o maior, soma <strong>Sangue Frio</strong>. Quem tirar mais age primeiro; segue-se em ordem
                decrescente.
              </p>
              <p className={doc.note}>
                Armas Pesadas impõem Desvantagem nessa rolagem. Em caso de empate: maior Sangue Frio; persistindo,
                maior Reflexo.
              </p>
            </section>

            <hr className={doc.rule} />

            <section className={doc.panel} id="ataque">
              <div className={doc.tab}>
                <span className={doc.tabNum}>II.</span>
                <h3>O Ataque</h3>
              </div>
              <p className={doc.body}>Atacar segue a Regra Universal de Dano (ver Sistema de Armas):</p>
              <div className={doc.glossary}>
                <div className={doc.termCard}>
                  <h5>À Distância</h5>
                  <p>Pontaria.</p>
                </div>
                <div className={doc.termCard}>
                  <h5>Corpo a Corpo</h5>
                  <p>Combate.</p>
                </div>
              </div>
              <p className={doc.note} style={{ marginTop: "0.8rem" }}>
                A faixa do resultado define o dano: Raspão (metade), base, base + traço, ou dobrado.
              </p>
            </section>

            <hr className={doc.rule} />

            <section className={doc.panel} id="defesa">
              <div className={doc.tab}>
                <span className={doc.tabNum}>III.</span>
                <h3>Defesa: Esquiva e Aparar</h3>
              </div>
              <p className={doc.body}>
                Defesa é uma <strong>reação</strong>. Quando você é atacado, pode gastar sua reação da rodada para
                tentar evitar o golpe, de duas formas:
              </p>
              <div className={doc.glossary}>
                <div className={doc.termCard}>
                  <h5>Esquiva (Reflexo)</h5>
                  <p>Sair da linha do ataque. Funciona contra golpes corpo a corpo e à distância.</p>
                </div>
                <div className={doc.termCard}>
                  <h5>Aparar (Combate)</h5>
                  <p>Deter o golpe com a arma. Só com armas que têm o traço Aparar, e só contra ataques corpo a corpo. Não se apara uma bala.</p>
                </div>
              </div>
              <p className={doc.body} style={{ marginTop: "0.8rem" }}>
                Role sua reação e compare o total com o do atacante:
              </p>
              <div className={doc.ledger} role="table" aria-label="Resultado da Defesa">
                <div className={doc.row}>
                  <span className={doc.band}>Reação ≥ Ataque</span>
                  <span className={doc.range}>Evitado</span>
                  <span className={doc.what}>O golpe é evitado. Nenhum dano.</span>
                </div>
                <div className={`${doc.row} ${doc.rowBad}`}>
                  <span className={doc.band}>Ataque &gt; Reação</span>
                  <span className={doc.range}>Acerta</span>
                  <span className={doc.what}>O golpe acerta; aplique o dano pela faixa do atacante.</span>
                </div>
              </div>
              <p className={doc.note} style={{ marginTop: "0.8rem" }}>
                Naturais soberanos: um 20 natural no ataque acerta de qualquer forma (é Crítico, inevitável); um 20
                natural na reação evita de qualquer forma.
              </p>
              <p className={doc.note}>
                Você tem uma reação por rodada. Ataques além disso, na mesma rodada, chegam sem resposta.
              </p>
            </section>

            <hr className={doc.rule} />

            <section className={doc.panel} id="contra-golpe">
              <div className={doc.tab}>
                <span className={doc.tabNum}>IV.</span>
                <h3>O Contra-Golpe</h3>
              </div>
              <p className={doc.body}>Aparar é mais que bloquear — é a chance de virar o jogo:</p>
              <div className={doc.glossary}>
                <div className={doc.termCard}>
                  <h5>Aparada Normal</h5>
                  <p>Você vence o atacante: o golpe é parado, e nada mais.</p>
                </div>
                <div className={doc.termCard}>
                  <h5>Aparada Perfeita</h5>
                  <p>
                    Ótimo+ e você vence o atacante: você quebra a guarda do inimigo. Ele fica exposto, e você desfere
                    um contra-golpe imediato e gratuito — um ataque de Combate fora do seu turno. No Crítico, esse
                    contra-golpe vem com Vantagem.
                  </p>
                </div>
              </div>
              <p className={doc.note} style={{ marginTop: "0.8rem" }}>
                É o prêmio por trocar a segurança da esquiva pela ousadia de encarar a lâmina.
              </p>
            </section>

            <hr className={doc.rule} />

            <section className={doc.panel} id="desarmado">
              <div className={doc.tab}>
                <span className={doc.tabNum}>V.</span>
                <h3>Ataques Desarmados</h3>
              </div>
              <p className={doc.body}>
                Socos e chutes usam Combate e causam dano fixo baixo — e só importam contra humanos. Contra
                criaturas sobrenaturais, a mão nua é desprezível: não é assim que se fere o que não pertence a este
                mundo. Por isso o combate de verdade se faz com armas, e por isso o dano delas é fixo.
              </p>
              <div className={doc.slips} style={{ gridTemplateColumns: "1fr" }}>
                <div className={doc.slip}>
                  <p className={doc.slipLabel}>Dano Desarmado</p>
                  <p className={doc.formula}>2 — apenas contra alvos humanos.</p>
                </div>
              </div>
            </section>

            <hr className={doc.rule} />

            <section className={doc.panel} id="protecao">
              <div className={doc.tab}>
                <span className={doc.tabNum}>VI.</span>
                <h3>Proteção</h3>
              </div>
              <p className={doc.body}>
                Armadura, couro grosso ou cobertura oferecem Proteção: um valor fixo subtraído do dano recebido.
              </p>
              <div className={doc.glossary}>
                <div className={doc.termCard}>
                  <h5>Perfurante</h5>
                  <p>Ignora metade da Proteção (arredonda pra baixo).</p>
                </div>
                <div className={doc.termCard}>
                  <h5>Crítico</h5>
                  <p>Ignora toda a Proteção.</p>
                </div>
              </div>
            </section>
          </Dossier>
        </section>
      </article>
      <Footer />
    </>
  );
}
