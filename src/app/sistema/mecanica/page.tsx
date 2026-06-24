import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Dossier from "@/components/Dossier";
import DragScroll from "@/components/DragScroll";
import doc from "@/components/Document.module.css";

export const metadata: Metadata = {
  title: "Mecânica Base — O Sistema — The Sacred Blood: The Vigil",
  description: "O dado, os modificadores de cena e os Atributos Fortes e Perícias dos agentes da Vigília.",
};

interface SkillEntry {
  name: string;
  description: string;
}

const CORPO_SKILLS: SkillEntry[] = [
  { name: "Vigor", description: "A resistência do corpo." },
  { name: "Reflexo", description: "Desviar e se mover com rapidez." },
  { name: "Pontaria", description: "Mirar armas de fogo à distância, ou arremessar objetos." },
  { name: "Combate", description: "A forma física e violenta de reagir." },
  { name: "Furtividade", description: "Mover-se sem ser percebido." },
];

const MENTE_SKILLS: SkillEntry[] = [
  { name: "Percepção", description: "O calafrio; sentir o que está ali antes de ver." },
  { name: "Investigação", description: "Ler a cena e identificar o que os outros não notam." },
  { name: "Sangue Frio", description: "Manter a cabeça fria e se manter firme sob pressão." },
  { name: "Saber Proibido", description: "O conhecimento do não-natural — tudo que é mágico e oculto neste mundo." },
  { name: "Medicina", description: "Cuidar de feridas e curar." },
];

const SOCIAL_SKILLS: SkillEntry[] = [
  { name: "Lábia", description: "Conduzir uma conversa e sair em vantagem, só com palavras." },
  { name: "Intimidação", description: "Impor-se pela presença, mostrar-se superior sem precisar agir." },
  { name: "Encobrir", description: "Esconder, distrair, fazer passar um objeto ou documento sem ser notado." },
];

const SOBRENATURAL_SKILLS: SkillEntry[] = [
  { name: "Feitiçaria", description: "A magia das bruxas: visível, sensível, capaz de ferir e até tirar uma vida." },
  { name: "Sangue", description: "O poder dos vampiros — mágico e físico ao mesmo tempo." },
  { name: "Ocultismo", description: "O que nunca foi compreendido nem revelado; uma névoa que não se vê, mas tem muito a dizer." },
];

function SkillGlossary({ skills }: { skills: SkillEntry[] }) {
  return (
    <div className={doc.glossary}>
      {skills.map((skill) => (
        <div key={skill.name} className={doc.termCard}>
          <h5>{skill.name}</h5>
          <p>{skill.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function MecanicaPage() {
  return (
    <>
      <Nav />
      <article>
        <section>
          <Dossier
            gnum="Gaveta I"
            plateTitle="O Sistema"
            plateSub="Manual Operacional · Mecânica Base"
            eyebrow="Ref. SIS-I — Custódia da Ordem — Não reproduzir"
            heading="Mecânica Base"
            signoff="Arquivado pela custódia da Ordem — Gaveta I, circulação restrita."
            lede={
              <>
                O dado que decide tudo: quantos d20 você rola, o que cada faixa de resultado significa, e os
                Atributos Fortes e Perícias que moldam cada teste.
              </>
            }
          >
            <section className={doc.panel} id="dado">
              <div className={doc.tab}>
                <span className={doc.tabNum}>I.</span>
                <h3>O d20</h3>
              </div>
              <p className={doc.body}>
                Toda ação de resultado incerto passa pelo <strong>d20</strong>. Você rola tantos d20 quanto seu{" "}
                <strong>atributo forte</strong> e fica com o <strong>maior</strong> deles; a esse maior dado somam-se
                o <strong>bônus de perícia</strong> e os <strong>modificadores de cena</strong>. O total define a
                faixa do resultado — o dado não diz só se deu certo, mas como.
              </p>
              <p className={doc.body}>
                Dois resultados no maior dado são soberanos e ignoram qualquer soma:
              </p>
              <div className={doc.glossary}>
                <div className={doc.termCard}>
                  <h5>20 Natural</h5>
                  <p>Crítico, o melhor desfecho possível. Só o 20 natural concede Crítico; nenhum bônus alcança essa faixa.</p>
                </div>
                <div className={doc.termCard}>
                  <h5>1 Natural</h5>
                  <p>A Grande Tragédia, o pior dos fracassos — só ocorre quando todos os dados do monte saem 1.</p>
                </div>
              </div>
              <p className={doc.body} style={{ marginTop: "0.8rem" }}>
                Tabela de Resultados:
              </p>
              <div className={doc.ledger} role="table" aria-label="Tabela de Resultados">
                <div className={`${doc.row} ${doc.rowBad}`}>
                  <span className={doc.band}>Fracasso</span>
                  <span className={doc.range}>1 – 2</span>
                  <span className={doc.what}>O gesto falha e cobra seu preço.</span>
                </div>
                <div className={doc.row}>
                  <span className={doc.band}>Ruim</span>
                  <span className={doc.range}>3 – 10</span>
                  <span className={doc.what}>Sucesso parcial, ou com um custo.</span>
                </div>
                <div className={doc.row}>
                  <span className={doc.band}>Bom</span>
                  <span className={doc.range}>11 – 16</span>
                  <span className={doc.what}>Funciona, de forma simples e direta.</span>
                </div>
                <div className={doc.row}>
                  <span className={doc.band}>Ótimo</span>
                  <span className={doc.range}>17 – 19</span>
                  <span className={doc.what}>Funciona e concede uma vantagem.</span>
                </div>
                <div className={`${doc.row} ${doc.rowCrit}`}>
                  <span className={doc.band}>Crítico</span>
                  <span className={doc.range}>20 nat.</span>
                  <span className={doc.what}>O melhor desfecho possível.</span>
                </div>
              </div>
            </section>

            <hr className={doc.rule} />

            <section className={doc.panel} id="complicacoes">
              <div className={doc.tab}>
                <span className={doc.tabNum}>II.</span>
                <h3>Complicações</h3>
              </div>
              <p className={doc.body}>
                Sempre que <strong>qualquer dado</strong> do seu monte cair em 1 natural — mesmo que o maior dado seja
                alto e o resultado final seja um sucesso —, a ação carrega uma <strong>complicação</strong>: um
                custo, um ruído, uma consequência indesejada.
              </p>
              <p className={doc.note}>
                Quanto mais dados você rola, mais exposto às complicações fica. A competência abre portas, mas nunca
                silencia o risco.
              </p>
            </section>

            <hr className={doc.rule} />

            <section className={doc.panel} id="modificadores">
              <div className={doc.tab}>
                <span className={doc.tabNum}>III.</span>
                <h3>Modificadores de Cena</h3>
              </div>
              <p className={doc.body}>
                A dificuldade não vem do dado — vem do mundo. Conforme a circunstância, o narrador soma ou subtrai do
                resultado:
              </p>
              <DragScroll className={doc.tableWrap}>
                <table className={doc.wTable}>
                  <thead>
                    <tr>
                      <th>Circunstância</th>
                      <th>Modificador</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Favorável</td>
                      <td>+2</td>
                    </tr>
                    <tr>
                      <td>Normal</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Difícil</td>
                      <td>−2</td>
                    </tr>
                    <tr>
                      <td>Muito difícil</td>
                      <td>−5</td>
                    </tr>
                    <tr>
                      <td>Beira do impossível</td>
                      <td>−8</td>
                    </tr>
                  </tbody>
                </table>
              </DragScroll>
              <p className={doc.note}>
                Um especialista quase sempre alcança Bom no dado limpo; é o modificador negativo que o faz suar.
              </p>
            </section>

            <hr className={doc.rule} />

            <section className={doc.panel} id="vantagem-desvantagem">
              <div className={doc.tab}>
                <span className={doc.tabNum}>IV.</span>
                <h3>Vantagem e Desvantagem</h3>
              </div>
              <p className={doc.body}>Posição, preparo ou pressão mudam quantos dados você rola:</p>
              <div className={doc.glossary}>
                <div className={doc.termCard}>
                  <h5>Vantagem</h5>
                  <p>Role +1 dado no seu monte.</p>
                </div>
                <div className={doc.termCard}>
                  <h5>Desvantagem</h5>
                  <p>Role −1 dado (mínimo de 1).</p>
                </div>
              </div>
            </section>

            <hr className={doc.rule} />

            <section className={doc.panel} id="atributos-pericias">
              <div className={doc.tab}>
                <span className={doc.tabNum}>V.</span>
                <h3>Atributos Fortes e Perícias</h3>
              </div>
              <p className={doc.body}>
                Os <strong>quatro atributos fortes</strong> são os pilares do personagem e definem o rumo que ele
                toma. Tudo o mais são <strong>perícias</strong> — dezesseis ao todo, distribuídas entre os quatro
                pilares.
              </p>

              <p className={doc.cap} style={{ marginTop: "0.8rem" }}>
                Corpo
              </p>
              <SkillGlossary skills={CORPO_SKILLS} />

              <p className={doc.cap} style={{ marginTop: "1rem" }}>
                Mente &amp; Espírito
              </p>
              <SkillGlossary skills={MENTE_SKILLS} />

              <p className={doc.cap} style={{ marginTop: "1rem" }}>
                Social &amp; Segredo
              </p>
              <SkillGlossary skills={SOCIAL_SKILLS} />

              <p className={doc.cap} style={{ marginTop: "1rem" }}>
                Sobrenatural
              </p>
              <SkillGlossary skills={SOBRENATURAL_SKILLS} />
            </section>
          </Dossier>
        </section>
      </article>
      <Footer />
    </>
  );
}
