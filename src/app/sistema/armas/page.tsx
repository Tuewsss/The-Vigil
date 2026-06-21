import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import sectionStyles from "@/components/Section.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sistema de Armas — O Sistema — The Sacred Blood: The Vigil",
  description: "Calibre, lâmina e traço: o catálogo de armas de fogo, brancas e improvisadas da Vigília.",
};

interface Trait {
  name: string;
  description: string;
}

interface Firearm {
  name: string;
  damage: string;
  capacity: string;
  traits: string;
}

interface MeleeWeapon {
  name: string;
  damage: string;
  traits: string;
}

const RANGES: Trait[] = [
  { name: "Corpo a corpo", description: "Armas brancas e improvisadas." },
  { name: "Curto", description: "Espingardas, pistolas de bolso." },
  { name: "Médio", description: "Revólveres, pistolas, submetralhadoras." },
  { name: "Longo", description: "Rifles." },
];

const ADVANTAGES: Trait[] = [
  { name: "Confiável", description: "Só emperra no 1 natural." },
  { name: "Preciso", description: "Gastar uma ação para mirar dá +1 dado no pool." },
  { name: "Recarga Rápida", description: "Recarrega como ação rápida (clipe, pente, top-break)." },
  {
    name: "Rajada",
    description: "Dispara em automático: escolha atingir até 3 alvos próximos OU +Dano em um só. Esvazia o carregador depressa.",
  },
  { name: "Dispersão", description: "Vantagem para acertar a curta distância; o Dano cai a Médio e some a Longo." },
  { name: "Sangramento", description: "Em Ótimo+, o alvo perde Vida a cada turno até estancar (ação de Medicina ou improviso)." },
  { name: "Perfurante", description: "Ignora parte da proteção/armadura." },
  { name: "Aparar", description: "Pode ser usada para defender (reação), somando Combate à Defesa." },
  { name: "Ocultável", description: "Fácil de esconder; Vantagem para portar disfarçado e bônus de surpresa." },
  { name: "Silenciável", description: "Aceita supressor ou é naturalmente silenciosa: não atrai atenção." },
  { name: "Brutal", description: "No Crítico, decepa/estraçalha: efeito máximo + complicação narrativa pro alvo." },
  { name: "Arremessável", description: "Pode ser lançada sem penalidade." },
  { name: "Alcance (extensão)", description: "Atinge a uma casa de distância; ataca primeiro contra quem se aproxima." },
  { name: "Contundente", description: "Em Ótimo+, atordoa em vez de sangrar; pode ser usada não-letal." },
  { name: "Versátil", description: "Também serve como ferramenta (abrir, prender, alavancar)." },
  { name: "Robusta", description: "Não quebra; resiste a maus-tratos." },
];

const DISADVANTAGES: Trait[] = [
  { name: "Emperra", description: "No Fracasso, trava; gaste uma ação para desemperrar." },
  { name: "Recarga Lenta", description: "Recarregar consome o turno inteiro." },
  { name: "Recarga Muito Lenta", description: "Cartucho por cartucho; vários turnos." },
  {
    name: "Ruidosa",
    description:
      "O disparo ecoa: role na tabela de atrair atenção (reforços, criatura, testemunha). Decisivo em cenas de furtividade.",
  },
  { name: "Duas Mãos", description: "Ocupa as duas mãos." },
  { name: "Pesada", description: "Desvantagem em Iniciativa ou ao trocar de arma rápido." },
  { name: "Frágil", description: "Pode quebrar no Fracasso contra alvo duro." },
  { name: "Volumosa", description: "Impossível de esconder." },
  { name: "Ilegal", description: "Portá-la traz consequências sociais/legais (teste de Encobrir)." },
  { name: "Mecanismo Duro", description: "Disparos/golpes apressados sofrem Desvantagem." },
  { name: "Desajeitada", description: "Desvantagem em espaços apertados." },
];

const REVOLVERS: Firearm[] = [
  { name: "Webley Mk VI (.455)", damage: "7", capacity: "6", traits: "Confiável, Recarga Rápida (top-break), Ruidosa" },
  { name: "Colt New Service (.45)", damage: "7", capacity: "6", traits: "Confiável, Ruidosa" },
  { name: "S&W Hand Ejector", damage: "6", capacity: "6", traits: "Preciso, Confiável, Ruidosa" },
  {
    name: "Nagant M1895",
    damage: "5",
    capacity: "7",
    traits: "Silenciável (selo de gás), Mecanismo Duro, Recarga Muito Lenta, Ruidosa*",
  },
];

const PISTOLS: Firearm[] = [
  { name: "Colt M1911 (.45 ACP)", damage: "7", capacity: "7", traits: "Confiável, Recarga Rápida, Ruidosa" },
  { name: "Luger P08 (9mm)", damage: "6", capacity: "8", traits: "Preciso, Recarga Rápida, Emperra (sensível a sujeira), Ruidosa" },
  {
    name: "Mauser C96 (7.63)",
    damage: "6",
    capacity: "10",
    traits: "Alcance estendido (atira a Longo com Desvantagem leve), Volumosa, Recarga Lenta, Ruidosa",
  },
  { name: "FN Model 1910 (.380)", damage: "4", capacity: "7", traits: "Ocultável, Curto, Ruidosa" },
  { name: "Browning M1900 (.32)", damage: "4", capacity: "7", traits: "Ocultável, Curto, Ruidosa" },
];

const RIFLES: Firearm[] = [
  { name: "Lee-Enfield SMLE Mk III (.303)", damage: "9", capacity: "10", traits: "Confiável, Recarga Rápida (pentes), Ruidosa" },
  { name: "Gewehr 98 (8mm)", damage: "9", capacity: "5", traits: "Preciso, Ruidosa" },
  { name: "Springfield M1903 (.30-06)", damage: "9", capacity: "5", traits: "Preciso, Ruidosa" },
  { name: "Mosin–Nagant (7.62×54R)", damage: "9", capacity: "5", traits: "Robusta, Confiável, Mecanismo Duro, Ruidosa" },
  { name: "Berthier Mle 1907/15 (8mm)", damage: "8", capacity: "3", traits: "Recarga Frequente (clipe pequeno), Ruidosa" },
];

const SHOTGUNS: Firearm[] = [
  { name: "Winchester Model 1897 (12)", damage: "12", capacity: "5", traits: "Dispersão, Brutal, Recarga Lenta, Ruidosa" },
  { name: "Remington Model 10 (12)", damage: "12", capacity: "6", traits: "Dispersão, Brutal, Recarga Lenta, Ruidosa" },
  {
    name: "Cano Duplo",
    damage: "12",
    capacity: "2",
    traits: "Dispersão, Brutal, Descarga Dupla (dispara os dois canos: +metade do Dano, gasta ambos), Recarga Lenta, Ruidosa",
  },
];

const SMGS: Firearm[] = [
  { name: "MP 18 (9mm)", damage: "6", capacity: "20–32", traits: "Rajada, Emperra, Pesada, Ruidosa" },
  { name: "Thompson M1921 (.45)", damage: "7", capacity: "20 / 50 (tambor)", traits: "Rajada, Brutal, Pesada, Ruidosa" },
];

const KNIVES: MeleeWeapon[] = [
  {
    name: "Punhal Fairbairn",
    damage: "4",
    traits: "Sangramento, Ocultável, Leve — feito para matar em silêncio (bônus extra no ataque furtivo)",
  },
  { name: "Faca Bowie", damage: "5", traits: "Sangramento, Versátil" },
  { name: "Faca de caça", damage: "4", traits: "Sangramento, Versátil, Comum" },
  { name: "Stiletto italiano", damage: "4", traits: "Perfurante, Ocultável, Sangramento, Frágil" },
  { name: "Dirk escocesa", damage: "5", traits: "Sangramento, Símbolo cultural" },
  { name: "Canivete de bolso", damage: "3", traits: "Ocultável, Leve, Versátil" },
];

const SWORDS: MeleeWeapon[] = [
  { name: "Sabre de cavalaria", damage: "6", traits: "Aparar, corte largo" },
  { name: "Espada de oficial", damage: "6", traits: "Aparar, Símbolo (impõe respeito/medo)" },
  { name: "Florete / Espada / Sabre de esgrima", damage: "5", traits: "Preciso, Aparar, Perfurante (estocada), Frágil (lâmina esportiva)" },
  { name: "Espada naval (cutelo)", damage: "6", traits: "Aparar, Robusta" },
];

const IMPROVISED: MeleeWeapon[] = [
  { name: "Bengala reforçada", damage: "4", traits: "Discreta (parece inofensiva), Aparar, Contundente" },
  { name: "Bengala-espada", damage: "5", traits: "Lâmina oculta (surpresa), Ilegal, Sangramento, Frágil" },
  { name: "Navalha", damage: "3", traits: "Sangramento, Ocultável, Leve" },
  { name: "Cassetete / Bastão policial", damage: "4", traits: "Contundente, opção não-letal" },
  { name: "Corrente", damage: "4", traits: "Alcance (extensão), Enredar (pode desarmar/prender)" },
  { name: "Martelo", damage: "5", traits: "Contundente, Comum" },
  { name: "Machadinha de caça", damage: "6", traits: "Sangramento, Perfurante, Arremessável" },
];

const HISTORICAL: MeleeWeapon[] = [
  { name: "Espada medieval herdada", damage: "7", traits: "Aparar, Pesada, Símbolo, (opcional: Duas Mãos para +Dano)" },
  { name: "Machado de guerra antigo", damage: "7", traits: "Perfurante, Brutal, Pesada" },
  { name: "Alabarda decorativa", damage: "7", traits: "Alcance (golpeia primeiro), Duas Mãos, Pesada, Desajeitada" },
  { name: "Baioneta", damage: "4", traits: "Versátil — solta funciona como faca; acoplada ao rifle, vira lança (ganha Alcance)" },
];

function TraitGrid({ traits }: { traits: Trait[] }) {
  return (
    <div className={styles.skills}>
      {traits.map((trait) => (
        <div key={trait.name} className={styles.skill}>
          <h4>
            <span className={styles.skillDot} />
            {trait.name}
          </h4>
          <p>{trait.description}</p>
        </div>
      ))}
    </div>
  );
}

function FirearmTable({ weapons }: { weapons: Firearm[] }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.wTable}>
        <thead>
          <tr>
            <th>Arma</th>
            <th>Dano</th>
            <th>Cap.</th>
            <th>Traços</th>
          </tr>
        </thead>
        <tbody>
          {weapons.map((w) => (
            <tr key={w.name}>
              <td>{w.name}</td>
              <td>{w.damage}</td>
              <td>{w.capacity}</td>
              <td>{w.traits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MeleeTable({ weapons }: { weapons: MeleeWeapon[] }) {
  return (
    <div className={styles.tableWrap}>
      <table className={styles.wTable}>
        <thead>
          <tr>
            <th>Arma</th>
            <th>Dano</th>
            <th>Traços</th>
          </tr>
        </thead>
        <tbody>
          {weapons.map((w) => (
            <tr key={w.name}>
              <td>{w.name}</td>
              <td>{w.damage}</td>
              <td>{w.traits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ArmasPage() {
  return (
    <>
      <Nav />
      <article>
        <section>
          <Link href="/sistema" className={styles.back}>
            ← Voltar ao Sistema
          </Link>
          <header className={styles.header}>
            <span className={styles.seal}>IV</span>
            <div className={styles.classification}>Documento Técnico · Sistema de Jogo</div>
            <h1 className={styles.title}>Sistema de Armas</h1>
            <p className={styles.epithet}>Calibre, Lâmina &amp; Traço</p>
          </header>
          <p className={`${sectionStyles.lede} ${styles.lede}`}>
            Era ~1910–1930. Todas as armas usam a Tabela de Resultados já existente. Armas de fogo testam{" "}
            <strong>Pontaria</strong> (Corpo); armas brancas e improvisadas testam <strong>Combate</strong> (Corpo). O{" "}
            <strong>Dano</strong> listado é um valor base — a qualidade do acerto define quanto disso o alvo leva.
          </p>
        </section>

        <section>
          <Reveal as="div" className={styles.chapter}>
            <h2 className={styles.chapterTitle}>1. Regra Universal de Dano</h2>
            <p className={sectionStyles.body} style={{ marginTop: 0 }}>
              Você rola o ataque normalmente (pool de d20, fica com o maior, soma a perícia). Leia o resultado na
              Tabela e aplique o Dano assim:
            </p>

            <div className={styles.results}>
              <div className={styles.resultsHead}>Efeito do Dano por Resultado</div>
              <div className={`${styles.resRow} ${styles.fail}`}>
                <span className={styles.resRange}>Fracasso</span>
                <span className={styles.resLabel}>Erra</span>
                <span className={styles.resMean}>
                  A arma pode emperrar/quebrar (se tiver o traço) ou criar uma complicação: acertar aliado, ficar
                  exposto, derrubar a arma.
                </span>
              </div>
              <div className={styles.resRow}>
                <span className={styles.resRange}>Ruim</span>
                <span className={styles.resLabel}>Raspão</span>
                <span className={styles.resMean}>Acerto de raspão → metade do Dano (arredonda pra baixo).</span>
              </div>
              <div className={styles.resRow}>
                <span className={styles.resRange}>Bom</span>
                <span className={styles.resLabel}>Dano base</span>
                <span className={styles.resMean}>Dano base, cheio.</span>
              </div>
              <div className={styles.resRow}>
                <span className={styles.resRange}>Ótimo</span>
                <span className={styles.resLabel}>Dano + traço</span>
                <span className={styles.resMean}>Dano base e ativa o traço (Sangramento, Atordoar, etc.).</span>
              </div>
              <div className={`${styles.resRow} ${styles.crit}`}>
                <span className={styles.resRange}>Crítico</span>
                <span className={styles.resLabel}>Dano dobrado</span>
                <span className={styles.resMean}>
                  Dano dobrado, ignora proteção, e ativa o efeito máximo do traço.
                </span>
              </div>
            </div>

            <div className={styles.callout}>
              <div className={styles.calloutTitle}>Ataque Furtivo</div>
              <p>
                Alvo desprevenido, via Furtividade: sobe <strong>um nível</strong> na tabela acima. Uma faca contra um
                pescoço desprevenido é mortal — é por isso que feiticeiros temem becos escuros tanto quanto monstros.
              </p>
            </div>
          </Reveal>

          <Reveal as="div" className={styles.chapter}>
            <h2 className={styles.chapterTitle}>2. Alcance</h2>
            <p className={sectionStyles.body} style={{ marginTop: 0 }}>
              Cada arma tem uma faixa ideal. Atacar fora da faixa impõe Desvantagem (e, no caso de armas de fogo, o
              Dano pode cair).
            </p>
            <TraitGrid traits={RANGES} />
          </Reveal>

          <Reveal as="div" className={styles.chapter}>
            <h2 className={styles.chapterTitle}>3. Glossário de Traços</h2>

            <div className={styles.skillGroup}>
              <div className={styles.groupHead}>Vantagens</div>
              <TraitGrid traits={ADVANTAGES} />
            </div>

            <div className={styles.skillGroup}>
              <div className={styles.groupHead}>Desvantagens</div>
              <TraitGrid traits={DISADVANTAGES} />
            </div>
          </Reveal>

          <Reveal as="div" className={styles.chapter}>
            <h2 className={styles.chapterTitle}>4. Armas de Fogo</h2>

            <div className={styles.tableHead}>
              <h3>Revólveres</h3>
              <span className={styles.tableTag}>Médio · Pontaria</span>
            </div>
            <FirearmTable weapons={REVOLVERS} />
            <p className={styles.footnote}>
              * A Nagant é o único revólver da lista que aceita supressor de verdade. Sem ele, é barulhenta como
              qualquer outra; com ele, vira a arma do assassino.
            </p>

            <div className={styles.tableHead}>
              <h3>Pistolas Semiautomáticas</h3>
              <span className={styles.tableTag}>Médio · Pontaria</span>
            </div>
            <FirearmTable weapons={PISTOLS} />

            <div className={styles.tableHead}>
              <h3>Rifles</h3>
              <span className={styles.tableTag}>Longo · Pontaria · Duas Mãos</span>
            </div>
            <FirearmTable weapons={RIFLES} />

            <div className={styles.tableHead}>
              <h3>Espingardas</h3>
              <span className={styles.tableTag}>Curto · Pontaria · Duas Mãos</span>
            </div>
            <FirearmTable weapons={SHOTGUNS} />

            <div className={styles.tableHead}>
              <h3>Submetralhadoras</h3>
              <span className={styles.tableTag}>Médio · Pontaria · Duas Mãos</span>
            </div>
            <FirearmTable weapons={SMGS} />
          </Reveal>

          <Reveal as="div" className={styles.chapter}>
            <h2 className={styles.chapterTitle}>5. Armas Brancas</h2>

            <div className={styles.tableHead}>
              <h3>Facas e Punhais</h3>
              <span className={styles.tableTag}>Corpo a corpo · Combate</span>
            </div>
            <MeleeTable weapons={KNIVES} />

            <div className={styles.tableHead}>
              <h3>Espadas</h3>
              <span className={styles.tableTag}>Corpo a corpo · Combate</span>
            </div>
            <MeleeTable weapons={SWORDS} />
          </Reveal>

          <Reveal as="div" className={styles.chapter}>
            <h2 className={styles.chapterTitle}>6. Armas Improvisadas Comuns</h2>
            <p className={styles.chapterSubtitle}>Corpo a corpo · Combate</p>
            <MeleeTable weapons={IMPROVISED} />
          </Reveal>

          <Reveal as="div" className={styles.chapter}>
            <h2 className={styles.chapterTitle}>7. Armas Históricas Ainda Encontradas</h2>
            <MeleeTable weapons={HISTORICAL} />

            <div className={styles.callout}>
              <div className={styles.calloutTitle}>Notas de Mesa</div>
              <p>
                <strong>Proteção/armadura é opcional.</strong> Se você adotar, o traço Perfurante e o efeito do
                Crítico (&ldquo;ignora proteção&rdquo;) passam a importar muito.
              </p>
              <p>
                <strong>Ruidosa é o traço mais importante deste jogo.</strong> Num cenário de horror, descarregar um
                rifle num corredor escuro raramente é grátis. Recompense quem escolhe a faca, a Nagant silenciada ou
                o estrangulamento.
              </p>
              <p>
                <strong>Munição escassa</strong> funciona melhor que munição infinita: faça o jogador anotar cada
                tiro. O medo de ouvir o &ldquo;click&rdquo; do tambor vazio é parte do gênero.
              </p>
            </div>
          </Reveal>
        </section>
      </article>
      <Footer />
    </>
  );
}
