import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import OccultSheet from "@/components/OccultSheet";
import styles from "@/components/Occult.module.css";

export const metadata: Metadata = {
  title: "Feitiçaria — Sobrenatural — The Sacred Blood: The Vigil",
  description: "A magia das bruxas: Reserva de Mana, Naturezas, Afinidades e os feitiços conhecidos.",
};

export default function FeiticariaPage() {
  return (
    <>
      <Nav />
      <div className={styles.pg}>
        <div className={styles.wrap}>
          <Link href="/sistema/sobrenatural" className={styles.back}>
            ← Sobrenatural
          </Link>

          <OccultSheet
            theme="feiticaria"
            stamp="Feitiçaria"
            slabNum="I · IV"
            slabTitle="Feitiçaria"
            docHead="A Magia das Bruxas"
          >
            <p className={styles.bodyP}>
              A Feitiçaria é poder emprestado. Onde o vampiro queima a própria essência, a bruxa puxa energia de
              fora de si — de pactos, linhagens e entidades antigas. É a única magia que o mundo pode ver: ela dobra
              o ar, queima a matéria, deixa marca. Quando uma bruxa age, todos na cena percebem.
            </p>
            <p className={styles.bodyP}>
              Todo feitiço é resolvido pela rolagem de sempre: pool de <strong>Sobrenatural</strong> (o atributo),
              fica com o maior, soma <strong>Feitiçaria</strong> (a perícia), lê na tabela.
            </p>
            <p className={styles.note}>Apenas personagens bruxas possuem uma Reserva de Mana.</p>

            <p className={styles.groupLabel}>A Reserva de Mana</p>
            <p className={styles.bodyP}>A Mana alimenta os feitiços. Como tudo no sistema, nasce da ficha:</p>
            <p className={styles.note}>Reserva de Mana = 10 + (Sobrenatural × 5) + (Feitiçaria × 5)</p>
            <div className={styles.tableWrap}>
              <table className={styles.otable}>
                <thead>
                  <tr>
                    <th>Sobrenatural / Feitiçaria</th>
                    <th>Mana</th>
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
              Ao contrário do Sangue — que só se recupera bebendo —, a Mana volta com o tempo:
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
                    <td>Descanso curto (uma cena de repouso)</td>
                    <td>Metade da Reserva</td>
                  </tr>
                  <tr>
                    <td>Descanso longo ou ritual</td>
                    <td>Tudo</td>
                  </tr>
                  <tr>
                    <td>Fontes sobrenaturais (locais de poder, sacrifícios, relíquias)</td>
                    <td>Ganhos extras, a critério do narrador</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={styles.groupLabel}>As Bruxas</p>
            <p className={styles.bodyP}>
              Três naturezas. A escolha molda quanto poder se carrega e quanto preço se paga por ele.
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
                    <td>Bruxa de Sangue</td>
                    <td>Nascida em linhagem antiga; poder hereditário e a maior afinidade mágica.</td>
                    <td>Domina duas Afinidades em vez de uma.</td>
                  </tr>
                  <tr>
                    <td>Bruxa Pactuada</td>
                    <td>Humana que recebeu um fragmento do poder de uma bruxa verdadeira. Serve a outra.</td>
                    <td>Uma Afinidade. Mana base −5. Não lança feitiços Supremos nem Proibidos.</td>
                  </tr>
                  <tr>
                    <td>Bruxa Infernal</td>
                    <td>Alma que morreu, chamou a atenção do Diabo e voltou — em troca da liberdade eterna.</td>
                    <td>Uma Afinidade. Mana base +5. Única que pode lançar o Julgamento Infernal — mas o Diabo cobra.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={styles.groupLabel}>Afinidades</p>
            <p className={styles.bodyP}>
              Cada bruxa domina uma Afinidade: sua escola. Os feitiços da própria escola custam metade da Mana
              (arredonda pra baixo, mínimo 1). A bruxa começa com o feitiço-assinatura da escola e desenvolve outros
              dentro dela com o tempo.
            </p>
            <div className={styles.tableWrap}>
              <table className={styles.otable}>
                <thead>
                  <tr>
                    <th>Afinidade</th>
                    <th>A arte de...</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Maldições</td>
                    <td>Fazer o azar grudar: dor, falha e ruína lançadas à distância.</td>
                  </tr>
                  <tr>
                    <td>Fogo Infernal</td>
                    <td>Chama negra que consome matéria e magia. A mais direta e destrutiva.</td>
                  </tr>
                  <tr>
                    <td>Ilusões</td>
                    <td>Mentiras que os sentidos engolem — o que não está lá, e o que se esconde.</td>
                  </tr>
                  <tr>
                    <td>Invocação</td>
                    <td>Chamar o que não pertence a este mundo para servir: familiares, servos, passagens.</td>
                  </tr>
                  <tr>
                    <td>Alquimia</td>
                    <td>Transformar a matéria: elixires que curam, venenos que corroem.</td>
                  </tr>
                  <tr>
                    <td>Necromancia</td>
                    <td>A fronteira entre vivos e mortos: falar com espíritos, erguer cadáveres.</td>
                  </tr>
                  <tr>
                    <td>Controle Mental</td>
                    <td>Dobrar a vontade alheia: sono, medo, domínio.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={styles.groupLabel}>Lançando Feitiços</p>
            <p className={styles.bodyP}>Para lançar, pague o custo em Mana (metade, se for da sua Afinidade). Depois:</p>
            <p className={styles.groupNote}>
              Feitiços de ataque são resolvidos como qualquer ataque: pool de Sobrenatural + Feitiçaria, lido na
              tabela. Dano fixo, como o das armas — e fere o sobrenatural. Feitiços de efeito (ilusão, invocação,
              maldição) apenas custam Mana e funcionam. Quando há uma vítima resistindo, ela rola para escapar (em
              geral Sangue Frio, ou Percepção contra ilusões).
            </p>

            <p className={styles.groupLabel}>Feitiços Comuns</p>
            <p className={styles.groupNote}>Qualquer bruxa conhece.</p>
            <div className={styles.tableWrap}>
              <table className={styles.otable}>
                <thead>
                  <tr>
                    <th>Feitiço</th>
                    <th>Custo</th>
                    <th>Efeito</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mãos da Bruxa</td>
                    <td>1</td>
                    <td>Move pequenos objetos à distância, sem toque.</td>
                  </tr>
                  <tr>
                    <td>Visão Arcana</td>
                    <td>2</td>
                    <td>Enxerga magia, maldições e presenças sobrenaturais. Duração: 1 cena.</td>
                  </tr>
                  <tr>
                    <td>Correntes Sombrias</td>
                    <td>3</td>
                    <td>Correntes escuras sobem do chão e prendem um alvo. Ele resiste com Vigor.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={styles.groupLabel}>Feitiços de Afinidade</p>
            <p className={styles.groupNote}>A assinatura de cada escola.</p>
            <div className={styles.tableWrap}>
              <table className={styles.otable}>
                <thead>
                  <tr>
                    <th>Feitiço</th>
                    <th>Escola</th>
                    <th>Custo</th>
                    <th>Efeito</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Maldição do Azar</td>
                    <td>Maldições</td>
                    <td>5</td>
                    <td>O alvo passa a rolar em Desvantagem por alguns turnos. Resiste com Sangue Frio.</td>
                  </tr>
                  <tr>
                    <td>Chama Negra</td>
                    <td>Fogo Infernal</td>
                    <td>4</td>
                    <td>Dano 6. As chamas queimam matéria e magia: o alvo perde mais 2 de Vida por turno até apagá-las.</td>
                  </tr>
                  <tr>
                    <td>Espelho das Mentiras</td>
                    <td>Ilusões</td>
                    <td>4</td>
                    <td>Cria uma ilusão realista — sons, formas, objetos pequenos. Quem desconfia resiste com Percepção.</td>
                  </tr>
                  <tr>
                    <td>Invocar Familiar</td>
                    <td>Invocação</td>
                    <td>4</td>
                    <td>Chama um servo sobrenatural (corvo, gato, rato) que vê e age por você, até ser dispersado.</td>
                  </tr>
                  <tr>
                    <td>Elixir Mutável</td>
                    <td>Alquimia</td>
                    <td>4</td>
                    <td>Prepara um frasco. Bebido, cura 8 de Vida; arremessado e quebrado, vira ácido (dano 5 na área).</td>
                  </tr>
                  <tr>
                    <td>Erguer os Mortos</td>
                    <td>Necromancia</td>
                    <td>6</td>
                    <td>Reanima cadáveres próximos como servos frágeis. A quantidade acompanha o resultado na tabela.</td>
                  </tr>
                  <tr>
                    <td>Sono Profundo</td>
                    <td>Controle Mental</td>
                    <td>4</td>
                    <td>Induz uma criatura ao sono. Alvos fortes resistem com Sangue Frio.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={styles.groupLabel}>Feitiços Supremos &amp; Proibidos</p>
            <p className={styles.groupNote}>Vetados às Pactuadas.</p>
            <div className={styles.tableWrap}>
              <table className={styles.otable}>
                <thead>
                  <tr>
                    <th>Feitiço</th>
                    <th>Custo</th>
                    <th>Efeito</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Transformação Monstruosa</td>
                    <td>10</td>
                    <td>Forma demoníaca por 3 turnos: +1 dado em Corpo, Vantagem em Reflexo, +2 de dano e feitiços custam −1 Mana.</td>
                  </tr>
                  <tr>
                    <td>Roubo de Alma (Proibido)</td>
                    <td>15</td>
                    <td>Arranca parte da essência do alvo, enfraquecendo-o de forma duradoura: −1 num atributo até que se recupere — se um dia se recuperar.</td>
                  </tr>
                  <tr>
                    <td>Julgamento Infernal (só Bruxas Infernais)</td>
                    <td>Drena toda a Mana</td>
                    <td>A área inteira vira um domínio infernal por instantes: dano 12 em área ampla, ignorando proteção.</td>
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
