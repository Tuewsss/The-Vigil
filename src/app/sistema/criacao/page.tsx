import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Dossier from "@/components/Dossier";
import DragScroll from "@/components/DragScroll";
import doc from "@/components/Document.module.css";

export const metadata: Metadata = {
  title: "Criação de Personagem — O Sistema — The Sacred Blood: The Vigil",
  description: "Como distribuir Atributos Fortes e Perícias, os limites na criação, e as fórmulas de Vida e Sanidade.",
};

export default function CriacaoPage() {
  return (
    <>
      <Nav />
      <article>
        <section>
          <Dossier
            gnum="Gaveta II"
            plateTitle="O Sistema"
            plateSub="Manual Operacional · Criação de Personagem"
            eyebrow="Ref. SIS-II — Custódia da Ordem — Não reproduzir"
            heading="Criação de Personagem"
            signoff="Arquivado pela custódia da Ordem — Gaveta II, circulação restrita."
            lede={
              <>
                Seu personagem é alguém que já cruzou — por escolha ou por acaso — a linha entre o mundo natural e o
                que se move atrás dele. A criação o define em números: o que seu corpo aguenta, o que sua mente
                conhece e do que ele é capaz quando o dado é lançado.
              </>
            }
          >
            <section className={doc.panel} id="dados">
              <div className={doc.tab}>
                <span className={doc.tabNum}>I.</span>
                <h3>Como Funcionam os Dados</h3>
              </div>
              <div className={doc.glossary}>
                <div className={doc.termCard}>
                  <h5>Atributo Forte</h5>
                  <p>Define quantos d20 você rola — e você fica com o maior deles.</p>
                </div>
                <div className={doc.termCard}>
                  <h5>Perícia</h5>
                  <p>Um bônus fixo, somado a esse maior dado.</p>
                </div>
                <div className={doc.termCard}>
                  <h5>Modificadores de Cena</h5>
                  <p>Do narrador: somam ou subtraem do total.</p>
                </div>
              </div>
              <div className={doc.slips} style={{ marginTop: "0.8rem", gridTemplateColumns: "1fr" }}>
                <div className={doc.slip}>
                  <p className={doc.formula}>
                    Rolagem = (rola d20 igual ao seu atributo forte, fica com o maior) + bônus da perícia +
                    modificadores de cena
                  </p>
                </div>
              </div>
            </section>

            <hr className={doc.rule} />

            <section className={doc.panel} id="distribuicao">
              <div className={doc.tab}>
                <span className={doc.tabNum}>II.</span>
                <h3>Distribuição de Pontos</h3>
              </div>
              <p className={doc.body}>
                São quatro atributos fortes — Corpo, Mente &amp; Espírito, Social &amp; Segredo, Sobrenatural — e
                dezesseis perícias distribuídas entre eles.
              </p>
              <div className={doc.cards}>
                <div className={doc.card}>
                  <h4>Atributos Fortes</h4>
                  <p className={doc.cap}>Regra</p>
                  <ul>
                    <li>Cada um começa em 1, de graça.</li>
                    <li>Você recebe 5 pontos para distribuir.</li>
                    <li>Cada ponto vale +1 dado.</li>
                  </ul>
                </div>
                <div className={doc.card}>
                  <h4>Perícias</h4>
                  <p className={doc.cap}>Regra</p>
                  <ul>
                    <li>Todas começam em 0.</li>
                    <li>Você recebe 12 pontos para distribuir.</li>
                    <li>Cada ponto vale +1 de bônus.</li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className={doc.rule} />

            <section className={doc.panel} id="limites">
              <div className={doc.tab}>
                <span className={doc.tabNum}>III.</span>
                <h3>Limites na Criação</h3>
              </div>
              <DragScroll className={doc.tableWrap}>
                <table className={doc.wTable}>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Mínimo</th>
                      <th>Máximo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Atributo forte</td>
                      <td>1</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Perícia</td>
                      <td>0</td>
                      <td>3</td>
                    </tr>
                  </tbody>
                </table>
              </DragScroll>
            </section>

            <hr className={doc.rule} />

            <section className={doc.panel} id="vida-sanidade">
              <div className={doc.tab}>
                <span className={doc.tabNum}>IV.</span>
                <h3>Vida e Sanidade</h3>
              </div>
              <p className={doc.body}>
                Quando o dado cobra &ldquo;o seu preço&rdquo;, é aqui que ele cobra. A vida mede o quanto o corpo
                suporta antes de ceder; a sanidade, o quanto a mente resiste diante do que não deveria existir. Num
                jogo de horror, perder qualquer uma das duas é igualmente fatal.
              </p>
              <div className={doc.slips}>
                <div className={doc.slip}>
                  <p className={doc.slipLabel}>Vida</p>
                  <p className={doc.formula}>
                    base <b>10</b>
                    <br />+ 5 por ponto de Corpo
                    <br />+ 3 por ponto de Vigor
                  </p>
                </div>
                <div className={doc.slip}>
                  <p className={doc.slipLabel}>Sanidade</p>
                  <p className={doc.formula}>
                    base <b>20</b>
                    <br />+ 5 por Mente &amp; Espírito
                    <br />+ 4 por Sangue Frio
                  </p>
                </div>
              </div>
              <p className={doc.note} style={{ marginTop: "0.8rem" }}>
                A perícia Sangue Frio também determina a iniciativa nos combates.
              </p>
            </section>
          </Dossier>
        </section>
      </article>
      <Footer />
    </>
  );
}
