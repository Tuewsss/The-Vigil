import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
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
            teste é uma pequena aposta contra o escuro — e o escuro raramente joga limpo. Quanto mais você domina
            uma área, mais constante se torna; mas nenhum talento o livra por completo do azar.
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
                <span className={styles.resRange}>1</span>
                <span className={styles.resLabel}>Fracasso</span>
                <span className={styles.resMean}>Você falha — e algo dá errado de quebra.</span>
              </div>
              <div className={styles.resRow}>
                <span className={styles.resRange}>2 – 7</span>
                <span className={styles.resLabel}>Ruim</span>
                <span className={styles.resMean}>Falha, ou sai pela metade e com um custo.</span>
              </div>
              <div className={styles.resRow}>
                <span className={styles.resRange}>8 – 16</span>
                <span className={styles.resLabel}>Bom</span>
                <span className={styles.resMean}>Você consegue, limpo.</span>
              </div>
              <div className={styles.resRow}>
                <span className={styles.resRange}>17 – 19</span>
                <span className={styles.resLabel}>Ótimo</span>
                <span className={styles.resMean}>Consegue e ainda leva uma vantagem.</span>
              </div>
              <div className={`${styles.resRow} ${styles.crit}`}>
                <span className={styles.resRange}>20 nat.</span>
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

          <Reveal as="div" className={styles.chapter}>
            <h2 className={styles.chapterTitle}>4. Vida &amp; Sanidade</h2>
            <p className={styles.chapterSubtitle}>As duas barras que podem se esvaziar</p>
            <p className={sectionStyles.body} style={{ marginTop: 0 }}>
              O sobrenatural não ataca um lugar só. Ele mira o corpo e a mente ao mesmo tempo — e por isso cada agente
              carrega duas barras que podem se esvaziar. Todo agente começa com <strong>10 de Vida</strong> e{" "}
              <strong>20 de Sanidade</strong>, e cresce dali conforme onde investe seus pontos.
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

          <Reveal as="div" className={styles.chapter}>
            <h2 className={styles.chapterTitle}>5. Sistema de Trauma</h2>
            <p className={styles.chapterSubtitle}>O que acontece quando o limite é alcançado</p>
            <p className={sectionStyles.lede} style={{ marginTop: 0 }}>
              O trauma entra em cena quando o agente chega a um estado crítico — pela Vida ou pela Sanidade. Todo
              trauma é resistido com a mesma rolagem da iniciativa: <strong>1d20 + Sangue-Frio</strong>. O
              Sangue-Frio é o que segura tudo.
            </p>

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
