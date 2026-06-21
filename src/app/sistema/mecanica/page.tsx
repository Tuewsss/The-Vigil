import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import sectionStyles from "@/components/Section.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mecânica Base — O Sistema — The Sacred Blood: The Vigil",
  description: "O Dado, os Atributos Fortes e as Perícias: o que você rola em toda ação de um agente da Vigília.",
};

export default function MecanicaPage() {
  return (
    <>
      <Nav />
      <article>
        <section>
          <Link href="/sistema" className={styles.back}>
            ← Voltar ao Sistema
          </Link>
          <header className={styles.header}>
            <span className={styles.seal}>I</span>
            <div className={styles.classification}>Documento Técnico · Sistema de Jogo</div>
            <h1 className={styles.title}>Mecânica Base</h1>
            <p className={styles.epithet}>O Dado, os Atributos &amp; as Perícias</p>
          </header>
          <p className={`${sectionStyles.lede} ${styles.lede}`}>
            O que você rola em toda ação: o dado que decide, o atributo que diz quantos dados você joga, e a perícia
            que soma o seu treino ao resultado.
          </p>
        </section>

        <section>
          <Reveal as="div" className={styles.chapter}>
            <h2 className={styles.chapterTitle}>1. O Dado</h2>
            <div className={styles.dieWrap}>
              <div className={styles.dieArt} aria-hidden="true">
                <svg viewBox="0 0 120 120" role="img">
                  <title>Um dado de vinte faces</title>
                  <polygon
                    points="60,8 15,34 15,86 60,112 105,86 105,34"
                    fill="none"
                    stroke="#9C7C4E"
                    strokeWidth="1.4"
                  />
                  <polygon points="60,42 41,74 79,74" fill="none" stroke="#9C7C4E" strokeWidth="1.2" />
                  <line x1="60" y1="8" x2="60" y2="42" stroke="#5C4A30" strokeWidth="1" />
                  <line x1="15" y1="86" x2="41" y2="74" stroke="#5C4A30" strokeWidth="1" />
                  <line x1="105" y1="86" x2="79" y2="74" stroke="#5C4A30" strokeWidth="1" />
                  <line x1="15" y1="34" x2="41" y2="74" stroke="#5C4A30" strokeWidth=".7" />
                  <line x1="105" y1="34" x2="79" y2="74" stroke="#5C4A30" strokeWidth=".7" />
                  <line x1="60" y1="112" x2="41" y2="74" stroke="#5C4A30" strokeWidth=".7" />
                  <line x1="60" y1="112" x2="79" y2="74" stroke="#5C4A30" strokeWidth=".7" />
                  <text
                    x="60"
                    y="64"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#A4161A"
                    fontFamily="Cinzel, serif"
                    fontSize="15"
                    fontWeight="700"
                  >
                    20
                  </text>
                </svg>
              </div>
              <div className={styles.dieText}>
                <p className={sectionStyles.body} style={{ marginTop: 0 }}>
                  No RPG de mesa, o dado é o ponto onde a história deixa de ser certa. Você diz o que quer fazer; o
                  dado diz se o mundo concorda. E poucos dados carregam tanto peso quanto o <strong>d20</strong> — o
                  icosaedro de vinte faces, o motor clássico do hobby, o dado que há décadas decide, numa única
                  rolagem, entre o triunfo e o desastre.
                </p>
                <p className={sectionStyles.body}>
                  Neste sistema, ele funciona assim: você reúne tantos d20 quantos for o seu{" "}
                  <strong>Atributo Forte</strong> na área do teste, joga todos de uma vez, e fica com o{" "}
                  <strong>maior resultado</strong>. A esse número você soma o valor da <strong>perícia</strong> que
                  treinou. O total revela a qualidade do que aconteceu.
                </p>
                <p className={sectionStyles.body}>
                  Quanto mais dotado você é numa área, mais dados joga — e mais difícil fica tirar um número ruim.
                  Mas nenhum talento fura o teto: o máximo de um dado é sempre 20, e o pior, sempre 1. Até o agente
                  mais brilhante pode falhar. O <strong>20 natural</strong> é sempre um triunfo absoluto; o{" "}
                  <strong>1</strong>, sempre um tropeço — e nenhum dos dois se compra com talento.
                </p>
              </div>
            </div>

            <div className={styles.formula}>
              Atributo Corpo 2 + perícia Pontaria 2 = rola 2d20, pega o maior, soma +2.
            </div>

            <div className={styles.results}>
              <div className={styles.resultsHead}>Tabela de Resultados — a qualidade de cada rolagem</div>
              <div className={`${styles.resRow} ${styles.fail}`}>
                <span className={styles.resRange}>
                  1 – 2
                  <span className={styles.resPercent}>10%</span>
                </span>
                <span className={styles.resLabel}>Fracasso</span>
                <span className={styles.resMean}>Você falha — e algo dá errado de quebra.</span>
              </div>
              <div className={styles.resRow}>
                <span className={styles.resRange}>
                  3 – 10
                  <span className={styles.resPercent}>40%</span>
                </span>
                <span className={styles.resLabel}>Ruim</span>
                <span className={styles.resMean}>Falha, ou sai pela metade e com um custo.</span>
              </div>
              <div className={styles.resRow}>
                <span className={styles.resRange}>
                  11 – 16
                  <span className={styles.resPercent}>30%</span>
                </span>
                <span className={styles.resLabel}>Bom</span>
                <span className={styles.resMean}>Você consegue, limpo.</span>
              </div>
              <div className={styles.resRow}>
                <span className={styles.resRange}>
                  17 – 19
                  <span className={styles.resPercent}>15%</span>
                </span>
                <span className={styles.resLabel}>Ótimo</span>
                <span className={styles.resMean}>Consegue e ainda leva uma vantagem.</span>
              </div>
              <div className={`${styles.resRow} ${styles.crit}`}>
                <span className={styles.resRange}>
                  20 nat.
                  <span className={styles.resPercent}>5%</span>
                </span>
                <span className={styles.resLabel}>Crítico</span>
                <span className={styles.resMean}>Sucesso espetacular. Só vem rolado, nunca somado.</span>
              </div>
            </div>

            <p className={sectionStyles.body}>
              A dificuldade é a régua que o Mestre aponta nessa tabela: uma tarefa simples passa com um{" "}
              <strong>Ruim</strong>; uma normal exige um <strong>Bom</strong>; uma difícil só cede a um{" "}
              <strong>Ótimo</strong>.
            </p>
          </Reveal>

          <Reveal as="div" className={styles.chapter}>
            <h2 className={styles.chapterTitle}>2. Atributos Fortes</h2>
            <p className={styles.chapterSubtitle}>Definem quantos dados você joga</p>
            <p className={sectionStyles.body} style={{ marginTop: 0 }}>
              Eles dizem em que terreno você nasceu dotado. O valor de cada um é quantos d20 você reúne num teste
              daquela área — por isso são poucos, e cada ponto pesa.
            </p>

            <div className={styles.attrList}>
              <article className={styles.attr}>
                <div className={styles.attrNum}>I</div>
                <div>
                  <h3>Corpo</h3>
                  <div className={styles.attrKick}>A carne, e tudo o que ela faz.</div>
                  <p>
                    Força, velocidade, fôlego e violência. É o agente que arromba a porta, segura a linha, corre na
                    névoa e crava a estaca até o cabo. Num mundo onde a bala tantas vezes falha contra o que se
                    levanta de novo, o corpo é a última ferramenta que não emperra — e o primeiro escudo entre você e
                    aquilo que avança no escuro.
                  </p>
                  <div className={styles.rege}>
                    <b>Rege:</b> Vigor · Reflexos · Pontaria · Combate · Furtividade
                  </div>
                </div>
              </article>

              <article className={styles.attr}>
                <div className={styles.attrNum}>II</div>
                <div>
                  <h3>Mente &amp; Espírito</h3>
                  <div className={styles.attrKick}>A razão, e o ferro que a sustenta.</div>
                  <p>
                    Raciocínio, sentidos, memória e conhecimento — somados à têmpera necessária para não enlouquecer
                    quando o impossível está parado à sua frente. Antes de ser uma ordem de caçadores, a Vigília é
                    uma ordem de investigadores e estudiosos: é aqui que os casos se resolvem, que os símbolos se
                    leem, e que o horror se suporta sem que a mente se quebre.
                  </p>
                  <div className={styles.rege}>
                    <b>Rege:</b> Percepção · Investigação · Sangue-Frio · Saber Proibido · Medicina
                  </div>
                </div>
              </article>

              <article className={styles.attr}>
                <div className={styles.attrNum}>III</div>
                <div>
                  <h3>Social &amp; Segredo</h3>
                  <div className={styles.attrKick}>A máscara, e o silêncio por trás dela.</div>
                  <p>
                    A ordem sobrevive sendo invisível. Encantar uma testemunha, quebrar um suspeito, abrir uma porta
                    com palavras em vez de força — e, acima de tudo, apagar cada rastro antes que os jornais sintam o
                    cheiro de sangue. É o atributo de quem transita com a mesma desenvoltura nos salões da nobreza e
                    nos becos onde o véu se rasga.
                  </p>
                  <div className={styles.rege}>
                    <b>Rege:</b> Lábia · Intimidação · Encobrir
                  </div>
                </div>
              </article>

              <article className={styles.attr}>
                <div className={styles.attrNum}>IV</div>
                <div>
                  <h3>Sobrenatural</h3>
                  <div className={styles.attrKick}>Aquilo que não é humano.</div>
                  <p>
                    A maioria dos agentes não tem nada aqui — são apenas carne e sangue, e nisso reside uma espécie de
                    segurança. Mas alguns carregam o sangue de bruxa das velhas linhagens, ou o dom frio da cova, ou
                    um saber que nenhuma mente viva deveria conter. Cada ponto neste atributo abre uma porta que
                    talvez devesse permanecer fechada — e marca o agente como algo a mais, com todo o poder e todo o
                    risco que isso carrega.
                  </p>
                  <div className={styles.rege}>
                    <b>Rege:</b> Feitiçaria · Sangue · Ocultismo
                  </div>
                </div>
              </article>
            </div>
          </Reveal>

          <Reveal as="div" className={styles.chapter}>
            <h2 className={styles.chapterTitle}>3. Perícias</h2>
            <p className={styles.chapterSubtitle}>Definem o seu bônus</p>
            <p className={sectionStyles.body} style={{ marginTop: 0 }}>
              Se os Atributos Fortes dizem em que você nasceu dotado, as perícias dizem no que você apostou a sua
              vida. Cada uma soma o seu valor ao dado.
            </p>

            <div className={styles.skillGroup}>
              <div className={styles.groupHead}>Corpo</div>
              <div className={styles.skills}>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Vigor
                  </h4>
                  <p>
                    A resistência bruta do corpo: o quanto de castigo você absorve antes de cair. É o que separa quem
                    se levanta dos destroços de quem fica para trás — e o alicerce da sua vida.
                  </p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Reflexos
                  </h4>
                  <p>
                    O instante entre o perigo e a reação: desviar do bote, saltar do assoalho que cede, mover a mão
                    antes de a mente entender por quê.
                  </p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Pontaria
                  </h4>
                  <p>
                    A mão firme por trás da arma à distância — a besta, o rifle, a lâmina arremessada. É o ar que você
                    prende antes do disparo, no escuro, com a coisa se aproximando.
                  </p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Combate
                  </h4>
                  <p>
                    A violência de perto, íntima e feia: lâmina, punho e estaca. O trabalho sujo de derrubar algo que
                    já está em cima de você.
                  </p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Furtividade
                  </h4>
                  <p>
                    Mover-se sem ser visto nem ouvido: estar dentro do quarto antes que alguém perceba que a porta se
                    abriu.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.skillGroup}>
              <div className={styles.groupHead}>Mente &amp; Espírito</div>
              <div className={styles.skills}>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Percepção
                  </h4>
                  <p>
                    Os sentidos em alerta: o ponto frio numa sala quente, o cheiro de podre sob o perfume, a certeza
                    de que algo está errado antes mesmo de você saber nomeá-lo.
                  </p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Investigação
                  </h4>
                  <p>
                    A leitura fria de uma cena: o sangue, as cápsulas vazias, o fio de cabelo que todos os outros
                    pisam sem ver. Onde a Percepção sente, a Investigação entende.
                  </p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Sangue-Frio
                  </h4>
                  <p>
                    A têmpera para encarar o impossível sem se quebrar. É a espinha da ordem: decide quem mantém a
                    cabeça quando a noite se abre, e sustenta a mente contra tudo o que ela não deveria ver.
                  </p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Saber Proibido
                  </h4>
                  <p>
                    O conhecimento do não-natural: o que mata um vampiro, o que repele uma bruxa, o que significa
                    aquele símbolo riscado na parede. A colheita de um século de arquivos manchados de sangue.
                  </p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Medicina
                  </h4>
                  <p>
                    A arte de manter um corpo vivo: costurar feridas, estancar o sangue, saber quem entre os caídos
                    ainda pode ser salvo e quem só dá para acompanhar até o fim. A herança dos médicos da família
                    Clement.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.skillGroup}>
              <div className={styles.groupHead}>Social &amp; Segredo</div>
              <div className={styles.skills}>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Lábia
                  </h4>
                  <p>
                    A língua de prata: convencer, enganar, seduzir — abrir uma porta com palavras em vez de força, e
                    sair de uma sala com mais do que entrou.
                  </p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Intimidação
                  </h4>
                  <p>
                    O medo como ferramenta: impor presença, ameaçar, arrancar a verdade pela gola quando as palavras
                    gentis já não bastam.
                  </p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Encobrir
                  </h4>
                  <p>
                    O ofício-assinatura da Vigília: apagar vestígios, despistar a polícia, enterrar uma história antes
                    que ela chegue à primeira página. Manter o véu fechado vale tanto quanto o golpe que o fecha.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.skillGroup}>
              <div className={styles.groupHead}>Sobrenatural</div>
              <div className={styles.skills}>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Feitiçaria
                  </h4>
                  <p>
                    A magia tátil da bruxa — o poder que se vê e se sente. A feitiçaria mexe com o físico e com os
                    elementos: arremessa um corpo contra a parede, fere, quebra, queima. Não é ilusão nem truque de
                    salão; é força que se materializa no mundo e cobra um preço de quem a invoca.
                  </p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Sangue
                  </h4>
                  <p>
                    O domínio do vampiro sobre a própria natureza. Onde a bruxa tem a feitiçaria, o morto-vivo tem o
                    Sangue: uma feitiçaria da carne fria, que comanda o seu próprio ser e desperta as habilidades que
                    só um vampiro possui — força, sentidos, e as fomes que vêm com elas.
                  </p>
                </div>
                <div className={styles.skill}>
                  <h4>
                    <span className={styles.skillDot} />
                    Ocultismo
                  </h4>
                  <p>
                    O avesso silencioso da feitiçaria, também das mãos dos bruxos. Onde a feitiçaria se manifesta com
                    força, o ocultismo não se toca — é uma fumaça quase invisível que o conjurador guia, e que
                    trabalha sobretudo a mente: revela, sonda, sugere, sabe. Não golpeia o corpo; molda o que se pensa
                    e o que se vê.
                  </p>
                </div>
              </div>
            </div>

            <p className={styles.note}>
              Vigor e Sangue-Frio são especiais: além de perícias, definem as suas barras de Vida e Sanidade.
            </p>
          </Reveal>
        </section>
      </article>
      <Footer />
    </>
  );
}
