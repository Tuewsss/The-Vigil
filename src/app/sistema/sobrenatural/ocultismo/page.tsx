import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import OccultSheet from "@/components/OccultSheet";
import styles from "@/components/Occult.module.css";

export const metadata: Metadata = {
  title: "Ocultismo — Sobrenatural — The Sacred Blood: The Vigil",
  description: "O conhecimento proibido: Reserva de Sanidade Oculta, O Despertar, Formas e as Revelações que revelam tudo.",
};

export default function OcultismoPage() {
  return (
    <>
      <Nav />
      <div className={styles.pg}>
        <div className={styles.wrap}>
          <Link href="/sistema/sobrenatural" className={styles.back}>
            ← Sobrenatural
          </Link>

          <OccultSheet
            theme="ocultismo"
            stamp="Ocultismo"
            slabNum="III · IV"
            slabTitle="Ocultismo"
            docHead="O Que Nunca Foi Revelado"
          >
            <p className={styles.bodyP}>
              Não é magia. É a lacuna entre o que existe e o que nunca deveria ter existido. O Ocultismo não se vê —
              é como névoa: você sabe que está ali, mas nunca diretamente. Jamás foi compreendido por inteiro, jamás
              foi nomeado com segurança. Revela o que não poderia ser revelado, e sempre cobra por isso.
            </p>
            <p className={styles.bodyP}>
              Toda revelação ocultista é resolvida pela rolagem de sempre: pool de <strong>Sobrenatural</strong> (o
              atributo), fica com o maior, soma <strong>Ocultismo</strong> (a perícia), lê na tabela.
            </p>
            <p className={styles.note}>Apenas personagens despertados pelo Ocultismo possuem uma Reserva de Sanidade Oculta.</p>

            <p className={styles.groupLabel}>O Despertar</p>
            <p className={styles.bodyP}>
              Ninguém escolhe ser ocultista. O Ocultismo escolhe você — através daquilo que você não consegue parar
              de olhar.
            </p>
            <p className={styles.bodyP}>
              Pode começar de qualquer forma: ficar olhando para algo que chama sua atenção por muito tempo, pensar
              demais em algo, aquilo que toma seu tempo sem sentido. Olhar no espelho e ver algo que não deveria estar
              lá. Olhar em um beco escuro por tanto tempo que percebe movimento onde não há. Uma vez que o Ocultismo
              desperta, você enxerga a própria verdade dele: você sempre foi capaz de ver. Só nunca havia prestado
              atenção.
            </p>
            <p className={styles.note}>
              O narrador marca o Despertar. Não é uma escolha do personagem — é algo que acontece, e depois não há volta.
            </p>

            <p className={styles.groupLabel}>A Reserva de Sanidade Oculta</p>
            <p className={styles.bodyP}>O Ocultismo não consome magia nem sangue. Consome a própria mente.</p>
            <p className={styles.note}>Reserva de Sanidade Oculta = 10 + (Sobrenatural × 3) + (Ocultismo × 5)</p>
            <div className={styles.tableWrap}>
              <table className={styles.otable}>
                <thead>
                  <tr>
                    <th>Sobrenatural / Ocultismo</th>
                    <th>Sanidade Oculta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 / 0</td>
                    <td>13</td>
                  </tr>
                  <tr>
                    <td>2 / 1</td>
                    <td>21</td>
                  </tr>
                  <tr>
                    <td>3 / 2</td>
                    <td>31</td>
                  </tr>
                  <tr>
                    <td>4 / 3</td>
                    <td>41</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={styles.bodyP}>
              Ao contrário da Sanidade comum — que se recupera descansando —, a Sanidade Oculta retorna apenas quando
              se distancia do conhecimento:
            </p>
            <div className={styles.tableWrap}>
              <table className={styles.otable}>
                <thead>
                  <tr>
                    <th>Recuperação</th>
                    <th>Devolve</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Conversa profunda com outro ocultista</td>
                    <td>Metade da Reserva</td>
                  </tr>
                  <tr>
                    <td>Ritual de esquecimento (1 noite completa)</td>
                    <td>Tudo</td>
                  </tr>
                  <tr>
                    <td>Distanciamento total (1 semana longe de pistas e segredos)</td>
                    <td>Tudo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={styles.groupLabel}>Os Despertados</p>
            <p className={styles.bodyP}>
              Três estados entre aqueles que viram. A natureza do seu Despertar molda como você sustenta a verdade.
            </p>
            <div className={styles.tableWrap}>
              <table className={styles.otable}>
                <thead>
                  <tr>
                    <th>Natureza</th>
                    <th>O que é</th>
                    <th>Mecânica</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>O Vidente</td>
                    <td>Nasceu vendo através do véu. O Despertar foi apenas confirmação.</td>
                    <td>Sanidade Oculta +5. Vantagem em Testes contra Horror. Pode dominar 2 Formas.</td>
                  </tr>
                  <tr>
                    <td>O Observador</td>
                    <td>Olhou para o errado e não conseguiu desviar o olhar. Agora enxerga.</td>
                    <td>Sanidade Oculta normal. Uma Forma. Começa com uma Cicatriz de Despertar.</td>
                  </tr>
                  <tr>
                    <td>O Corrompido</td>
                    <td>O que viu saiu do outro lado e entrou nele. Já não é totalmente humano.</td>
                    <td>Sanidade Oculta −5. Uma Forma. Marca permanente visível (só ele vê). Imune parcial a Horror.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={styles.groupLabel}>Formas de Visão</p>
            <p className={styles.bodyP}>
              Cada ocultista domina uma Forma: sua lente de revelação. As habilidades da própria Forma custam metade
              da Sanidade (arredonda pra baixo, mínimo 1). O ocultista começa com a revelação-assinatura da sua Forma
              e desenvolve outras dentro dela com o tempo.
            </p>
            <div className={styles.tableWrap}>
              <table className={styles.otable}>
                <thead>
                  <tr>
                    <th>Forma</th>
                    <th>O segredo de...</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Visão Esquecida</td>
                    <td>Ver através do tempo: pegadas do passado, ecos de eventos, sombras do que virá.</td>
                  </tr>
                  <tr>
                    <td>Sussurros do Vazio</td>
                    <td>Ouvir o que não fala: verdade nua por trás de mentiras, intenção antes de ação.</td>
                  </tr>
                  <tr>
                    <td>Costura do Mundo</td>
                    <td>Enxergar conexões ocultas: conspirações, elos de sangue, raízes sobrenaturais.</td>
                  </tr>
                  <tr>
                    <td>Verdade Descarnada</td>
                    <td>Desvendar disfarces: o que realmente é, por trás de toda ilusão e engano.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={styles.groupLabel}>Invocando Revelações</p>
            <p className={styles.bodyP}>Para revelar, pague o custo em Sanidade Oculta (metade, se for da sua Forma). Depois:</p>
            <p className={styles.groupNote}>
              Revelações de Percepção funcionam automaticamente — você vê o que estava oculto. Revelações de Contato
              exigem resistência (em geral Sangue Frio). Revelações de Manipulação alteram a realidade menor, mas o
              Ocultismo sempre deixa marcas invisíveis que o narrador anota.
            </p>

            <p className={styles.groupLabel}>Revelações Comuns</p>
            <p className={styles.groupNote}>Qualquer despertado conhece.</p>
            <div className={styles.tableWrap}>
              <table className={styles.otable}>
                <thead>
                  <tr>
                    <th>Revelação</th>
                    <th>Custo</th>
                    <th>Efeito</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sussurro Oculto</td>
                    <td>1</td>
                    <td>Você ouve um segredo mínimo sobre uma pessoa ou lugar — um detalhe que ninguém mais sabe, mas que sempre esteve ali.</td>
                  </tr>
                  <tr>
                    <td>Véu Fino</td>
                    <td>2</td>
                    <td>Enxerga manifestações sobrenaturais e pressenças invisíveis por uma cena, como névoa disforme. Duração: 1 cena.</td>
                  </tr>
                  <tr>
                    <td>Marca da Atenção</td>
                    <td>2</td>
                    <td>Coloca uma marca invisível num alvo. Você sempre sabe sua direção e estado emocional geral. Duração: até remoção.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={styles.groupLabel}>Revelações de Forma</p>
            <p className={styles.groupNote}>A assinatura de cada escola.</p>
            <div className={styles.tableWrap}>
              <table className={styles.otable}>
                <thead>
                  <tr>
                    <th>Revelação</th>
                    <th>Forma</th>
                    <th>Custo</th>
                    <th>Efeito</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Eco do Passado</td>
                    <td>Visão Esquecida</td>
                    <td>4</td>
                    <td>Toca num objeto ou local e vê 3 momentos-chave da história dele — imagens fragmentadas, sem som. Duração: instantânea.</td>
                  </tr>
                  <tr>
                    <td>Leitura Profunda</td>
                    <td>Sussurros do Vazio</td>
                    <td>4</td>
                    <td>Conversa com alguém e extrai a verdade maior que ela carrega — seu medo, desejo ou segredo mais guardado. Ela resiste com Sangue Frio.</td>
                  </tr>
                  <tr>
                    <td>Costura Visível</td>
                    <td>Costura do Mundo</td>
                    <td>4</td>
                    <td>Vê as conexões ocultas entre pessoas, objetos ou locais — como linhas de causa e conspiração. Duração: 1 cena.</td>
                  </tr>
                  <tr>
                    <td>Desvendação</td>
                    <td>Verdade Descarnada</td>
                    <td>3</td>
                    <td>Vê através de um disfarce, ilusão ou engano — a forma verdadeira, a intenção real. Duração: enquanto observar.</td>
                  </tr>
                  <tr>
                    <td>Presságio</td>
                    <td>Visão Esquecida</td>
                    <td>5</td>
                    <td>Vê 3 possíveis caminhos do próximo dia. O narrador descreve sem dizer qual é mais provável. Duração: até o amanhecer.</td>
                  </tr>
                  <tr>
                    <td>Língua do Silêncio</td>
                    <td>Sussurros do Vazio</td>
                    <td>4</td>
                    <td>Por uma cena, você entende intenção antes de ação — lê expressões faciais, tom, mudanças de ritmo. Vantagem contra mentiras. Duração: 1 cena.</td>
                  </tr>
                  <tr>
                    <td>Rastreamento Oculto</td>
                    <td>Costura do Mundo</td>
                    <td>4</td>
                    <td>Sente a presença de um alvo que você viu antes, em qualquer distância próxima. Sente apenas a direção e urgência emocional. Duração: 1 cena.</td>
                  </tr>
                  <tr>
                    <td>Quebranto da Mentira</td>
                    <td>Verdade Descarnada</td>
                    <td>5</td>
                    <td>Toca alguém que está mentindo e quebra o feitiço dela pelo resto da cena. Ilusões racham, disfarces se soltam. Duração: 1 cena.</td>
                  </tr>
                  <tr>
                    <td>Reescrita Breve</td>
                    <td>Visão Esquecida</td>
                    <td>6</td>
                    <td>Reverte um evento menor para 10 minutos atrás — mas nem todos veem essa mudança. Deixa cicatrizes no tecido da realidade.</td>
                  </tr>
                  <tr>
                    <td>Grito Silencioso</td>
                    <td>Sussurros do Vazio</td>
                    <td>5</td>
                    <td>Induz uma criatura a revelar em alto e bom som aquilo que mais esconde de si mesma. Ela resiste com Ocultismo + Mente & Espírito.</td>
                  </tr>
                  <tr>
                    <td>Passagem Esquecida</td>
                    <td>Costura do Mundo</td>
                    <td>6</td>
                    <td>Encontra uma rota entre dois pontos que ninguém mais sabe que existe — invisível às mentes ordinárias. Pode levar outros, mas sentem a estranheza.</td>
                  </tr>
                  <tr>
                    <td>Palavra que Nega</td>
                    <td>Verdade Descarnada</td>
                    <td>6</td>
                    <td>Enuncia uma falsidade absoluta — uma mentira tão grande que o mundo não consegue sustentá-la. Desfaz Glamours e Ilusões. O Ocultismo cobra dobrado.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={styles.groupLabel}>Revelações Proibidas</p>
            <p className={styles.groupNote}>Conhecimento que ninguém deveria buscar. Apenas Videntes podem invocar.</p>
            <div className={styles.tableWrap}>
              <table className={styles.otable}>
                <thead>
                  <tr>
                    <th>Revelação</th>
                    <th>Custo</th>
                    <th>Efeito</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Negação da Existência</td>
                    <td>12</td>
                    <td>Apaga uma pessoa ou criatura da memória coletiva por 1 semana — ninguém lembra que existiu. Ela ainda age, invisível aos olhos da mente.</td>
                  </tr>
                  <tr>
                    <td>Verdade Além do Véu</td>
                    <td>15</td>
                    <td>Você aprende a verdade completa sobre um segredo cosmicamente oculto. Ganha uma Marca permanente. Sanidade nunca mais se recupera totalmente.</td>
                  </tr>
                  <tr>
                    <td>Chamado do Que Observa</td>
                    <td>Drena tudo (Sanidade → 1)</td>
                    <td>Convida tudo aquilo que sempre esteve vendo você a olhar de volta. Dano 10 em área ampla. Depois, você está marcado. Ele sempre sabe onde você está.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={styles.groupLabel}>O Custo Invisível</p>
            <p className={styles.bodyP}>
              O Ocultismo sempre cobra. Nem sempre em Sanidade. Sempre que uma Revelação é invocada, o narrador marca
              uma <strong>Cicatriz Oculta</strong> — pequenas mudanças que ninguém além de você percebe: insetos
              silenciam perto, espelhos mostram coisas diferentes, suas sombras se movem errado.
            </p>
            <p className={styles.bodyP}>
              Ao acumular 3 Cicatrizes, você ganha uma <strong>Marca</strong> — mudança real. Sensibilidade a ferro,
              incapacidade de atravessar água corrente, uma compulsão ritualística, ou a perda do sono normal.
            </p>
            <p className={styles.note}>O Ocultismo não perdoa. Conhecimento é herança, e herança tem peso.</p>
          </OccultSheet>
        </div>
      </div>
      <Footer />
    </>
  );
}