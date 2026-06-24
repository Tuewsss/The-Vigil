import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import OccultSheet from "@/components/OccultSheet";
import styles from "@/components/Occult.module.css";

export const metadata: Metadata = {
  title: "Sangue — Sobrenatural — The Sacred Blood: The Vigil",
  description: "O poder dos vampiros: Reserva de Sangue, Estados de Fome, a Transformação e as Habilidades de Sangue.",
};

export default function SanguePage() {
  return (
    <>
      <Nav />
      <div className={styles.pg}>
        <div className={styles.wrap}>
          <Link href="/sistema/sobrenatural" className={styles.back}>
            ← Sobrenatural
          </Link>

          <OccultSheet
            theme="sangue"
            stamp="Sangue"
            slabNum="II · IV"
            slabTitle="Sangue"
            docHead="O Poder dos Vampiros"
          >
            <p className={styles.bodyP}>
              O Sangue é o poder mais antigo que os vampiros guardam. Não se conjura com palavras nem rituais: brota
              da própria essência vital. Mágico e físico ao mesmo tempo, ele fortalece, domina, drena e fere —
              inclusive aquilo que nenhuma arma comum alcança.
            </p>
            <p className={styles.bodyP}>
              Toda habilidade de Sangue é resolvida pela rolagem de sempre: pool de <strong>Sobrenatural</strong> (o
              atributo), fica com o maior, soma <strong>Sangue</strong> (a perícia), lê na tabela.
            </p>
            <p className={styles.note}>Apenas personagens de natureza vampírica possuem uma Reserva de Sangue.</p>

            <p className={styles.groupLabel}>A Reserva de Sangue</p>
            <p className={styles.bodyP}>
              A Reserva é o combustível das habilidades. Como Vida e Sanidade, ela nasce da ficha:
            </p>
            <p className={styles.note}>Reserva de Sangue = 10 + (Sobrenatural × 5) + (Sangue × 5)</p>
            <div className={styles.tableWrap}>
              <table className={styles.otable}>
                <thead>
                  <tr>
                    <th>Sobrenatural / Sangue</th>
                    <th>Reserva</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 / 0</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td>2 / 1</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>3 / 2</td>
                    <td>35</td>
                  </tr>
                  <tr>
                    <td>4 / 3</td>
                    <td>45</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={styles.bodyP}>
              A Reserva só se recupera com alimentação — descanso não devolve uma gota. E como o poço dos vampiros
              mais fortes é mais fundo, eles também têm mais sede: precisam de mais sangue para se encher.
            </p>

            <p className={styles.groupLabel}>Alimentação</p>
            <div className={styles.tableWrap}>
              <table className={styles.otable}>
                <thead>
                  <tr>
                    <th>Fonte</th>
                    <th>Recupera</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Humano saudável</td>
                    <td>~15</td>
                  </tr>
                  <tr>
                    <td>Humano ferido ou fraco</td>
                    <td>~8</td>
                  </tr>
                  <tr>
                    <td>Animal</td>
                    <td>~6</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={styles.note}>O narrador ajusta pela vítima.</p>

            <p className={styles.groupLabel}>Estados de Fome</p>
            <p className={styles.bodyP}>
              A fome é medida pela fração da Reserva máxima. Quanto mais vazia, mais perto da besta.
            </p>
            <div className={styles.tableWrap}>
              <table className={styles.otable}>
                <thead>
                  <tr>
                    <th>Reserva</th>
                    <th>Estado</th>
                    <th>Efeito</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>76 – 100%</td>
                    <td>Saciado</td>
                    <td>Nenhuma penalidade.</td>
                  </tr>
                  <tr>
                    <td>51 – 75%</td>
                    <td>Fome Leve</td>
                    <td>Sente o cheiro de sangue com intensidade. Sem penalidade mecânica.</td>
                  </tr>
                  <tr>
                    <td>26 – 50%</td>
                    <td>Faminto</td>
                    <td>−2 em Testes de Controle e ações sob tentação. O cheiro de sangue distrai.</td>
                  </tr>
                  <tr>
                    <td>1 – 25%</td>
                    <td>Fome Extrema</td>
                    <td>−5 nesses testes. Impulsos violentos, Desvantagem em ações sociais, Testes de Controle frequentes.</td>
                  </tr>
                  <tr>
                    <td>0%</td>
                    <td>Frenesi</td>
                    <td>Perde o controle. O narrador assume o personagem, que ataca a fonte de sangue mais próxima até se alimentar.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={styles.groupLabel}>A Natureza Vampírica</p>
            <p className={styles.bodyP}>Há três estados conhecidos da espécie. Só os dois primeiros são jogáveis.</p>
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
                    <td>Herdeiro de Sangue</td>
                    <td>Nascido nas antigas linhagens; carrega a essência desde o berço.</td>
                    <td>Vantagem em Testes de Controle; +5 na Reserva base.</td>
                  </tr>
                  <tr>
                    <td>Convertido</td>
                    <td>Humano que sobreviveu à transformação. Membro legítimo da espécie.</td>
                    <td>Sem bônus. Domina o próprio sangue à força de vontade.</td>
                  </tr>
                  <tr>
                    <td>Besta da Sede</td>
                    <td>Vampiro que perdeu a razão de vez. Só resta a fome.</td>
                    <td>NPC. Não distingue aliado de inimigo.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={styles.groupLabel}>A Transformação</p>
            <p className={styles.bodyP}>
              Quando um vampiro consciente drena um humano pela mordida, começa uma infecção sobrenatural veloz. A
              vítima desmaia em minutos e desperta na Fome Primordial: a visão se distorce, o mundo perde a cor, só
              fontes de sangue quente parecem vivas, e o instinto de caça domina tudo. Amigos e familiares viram
              apenas alimento.
            </p>
            <p className={styles.bodyP}>
              <strong>O Primeiro Banquete.</strong> Para sobreviver, o recém-convertido precisa encher a Reserva até
              o topo. Se não consegue, o corpo entra em colapso e ele vira uma Besta da Sede.
            </p>
            <p className={styles.bodyP}>
              <strong>O Teste de Controle.</strong> Cheio de sangue, ele enfrenta o instinto — o momento mais
              perigoso de sua existência. Faz um Teste de Controle:
            </p>
            <div className={styles.ledger}>
              <div className={styles.lrow}>
                <span className={styles.lrowK}>Bom ou melhor</span>
                <span className={styles.lrowV}>Mantém a consciência. Torna-se um Vampiro Completo.</span>
              </div>
              <div className={styles.lrow}>
                <span className={styles.lrowK}>Ruim</span>
                <span className={styles.lrowV}>Vacila — mantém o controle, mas a custo (o narrador impõe uma marca ou Desvantagem).</span>
              </div>
              <div className={styles.lrow}>
                <span className={styles.lrowK}>Fracasso</span>
                <span className={styles.lrowV}>Sucumbe. Torna-se permanentemente uma Besta da Sede.</span>
              </div>
            </div>

            <p className={styles.groupLabel}>O Teste de Controle</p>
            <p className={styles.bodyP}>
              Sempre que a fome ameaça vencer — ao despertar, diante de muito sangue, ao cair em Fome Extrema —,
              faz-se um Teste de Controle.
            </p>
            <p className={styles.note}>
              Teste de Controle = pool de Mente &amp; Espírito + Sangue Frio, com o modificador de fome (Faminto −2,
              Fome Extrema −5).
            </p>
            <p className={styles.bodyP}>
              É a mesma cabeça fria que segura o pânico que segura a besta. Falhar empurra rumo ao Frenesi.
            </p>

            <p className={styles.groupLabel}>Usando as Habilidades</p>
            <p className={styles.bodyP}>Para usar uma habilidade, pague o custo em Reserva. Depois:</p>
            <p className={styles.groupNote}>
              Habilidades de ataque são resolvidas como qualquer ataque: pool de Sobrenatural + Sangue, lido na
              tabela (Raspão = metade, Bom = base, Ótimo = + traço, Crítico = dobro). O dano é fixo, como o das
              armas — e fere o sobrenatural. Habilidades de defesa, percepção e transformação apenas custam Reserva
              e funcionam; o narrador pede teste só se houver resistência.
            </p>

            <p className={styles.groupLabel}>Percepção</p>
            <div className={styles.tableWrap}>
              <table className={styles.otable}>
                <thead>
                  <tr>
                    <th>Habilidade</th>
                    <th>Custo</th>
                    <th>Efeito</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sentidos de Predador</td>
                    <td>2</td>
                    <td>Sente pulsos e enxerga calor e fluxo sanguíneo num raio curto, mesmo no escuro ou através de paredes finas. Duração: 1 cena.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={styles.groupLabel}>Ofensivas</p>
            <div className={styles.tableWrap}>
              <table className={styles.otable}>
                <thead>
                  <tr>
                    <th>Habilidade</th>
                    <th>Custo</th>
                    <th>Efeito</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Arma de Sangue</td>
                    <td>3</td>
                    <td>Modela o sangue em garra, lâmina, lança ou machado. Dano 6. Escolha um traço pela forma: Sangramento (garra), Alcance (lança) ou Perfurante (machado). Duração: 1 cena.</td>
                  </tr>
                  <tr>
                    <td>Chicote de Sangue</td>
                    <td>3</td>
                    <td>Açoite de sangue condensado. Dano 4, traços Alcance e Enredar (pode prender ou puxar em vez de ferir).</td>
                  </tr>
                  <tr>
                    <td>Maré Escarlate</td>
                    <td>8</td>
                    <td>Uma onda varre a área à frente: dano 5 a todos e os empurra para trás.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={styles.groupLabel}>Defensivas &amp; Utilitárias</p>
            <div className={styles.tableWrap}>
              <table className={styles.otable}>
                <thead>
                  <tr>
                    <th>Habilidade</th>
                    <th>Custo</th>
                    <th>Efeito</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Coagulação</td>
                    <td>4</td>
                    <td>Fecha os próprios ferimentos: recupera 8 de Vida. Em Ótimo+, também estanca Sangramento.</td>
                  </tr>
                  <tr>
                    <td>Roubo Vital</td>
                    <td>4</td>
                    <td>Por 1 cena, cada golpe seu devolve metade do dano causado como Reserva.</td>
                  </tr>
                  <tr>
                    <td>Névoa Carmesim</td>
                    <td>5</td>
                    <td>Dispersa sangue em névoa: a área fica encoberta. Vantagem em Furtividade; quem ataca dentro dela tem Desvantagem.</td>
                  </tr>
                  <tr>
                    <td>Corpo Fluido</td>
                    <td>6</td>
                    <td>O corpo vira sangue líquido por 3 turnos: ataques físicos sofrem Desvantagem contra você, e você passa por frestas.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={styles.groupLabel}>Domínio &amp; Transformação</p>
            <div className={styles.tableWrap}>
              <table className={styles.otable}>
                <thead>
                  <tr>
                    <th>Habilidade</th>
                    <th>Custo</th>
                    <th>Efeito</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Coração Dominante</td>
                    <td>6</td>
                    <td>Toma os batimentos de uma criatura próxima. Ela resiste com Sangue Frio; falhando, sofre tontura, medo ou paralisia (perde a próxima ação ou age em Desvantagem).</td>
                  </tr>
                  <tr>
                    <td>Avatar Carmesim</td>
                    <td>10</td>
                    <td>O sangue envolve o corpo por 3 turnos: +1 dado em Corpo, Vantagem em Reflexo, +2 de dano corpo a corpo e regeneração de 5 de Vida por turno.</td>
                  </tr>
                  <tr>
                    <td>Dilúvio de Sangue</td>
                    <td>Drena tudo (Reserva → 1)</td>
                    <td>Técnica suprema. Libera quase toda a Reserva numa manifestação devastadora: dano 12 em área ampla, ignorando proteção. Depois, a fome chega brutal e imediata.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </OccultSheet>
        </div>
      </div>
      <Footer />
    </>
  );
}
