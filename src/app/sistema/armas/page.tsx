import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Dossier from "@/components/Dossier";
import DragScroll from "@/components/DragScroll";
import doc from "@/components/Document.module.css";

export const metadata: Metadata = {
  title: "Sistema de Armas — O Sistema — The Sacred Blood: The Vigil",
  description: "Calibre, lâmina e traço: o catálogo de armas de fogo, brancas e improvisadas da Vigília.",
};

interface Entry {
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

const RANGES: Entry[] = [
  { name: "Corpo a corpo", description: "Armas brancas e improvisadas." },
  { name: "Curto", description: "Espingardas, pistolas de bolso." },
  { name: "Médio", description: "Revólveres, pistolas, submetralhadoras." },
  { name: "Longo", description: "Rifles." },
];

const ADVANTAGES: Entry[] = [
  { name: "Confiável", description: "Só emperra no 1 natural." },
  { name: "Preciso", description: "Gastar uma ação para mirar dá +1 dado no pool." },
  { name: "Recarga Rápida", description: "Recarrega como ação rápida (clipe, pente, top-break)." },
  {
    name: "Rajada",
    description: "Dispara em automático: escolha atingir até 3 alvos próximos ou +metade do Dano em um só. Esvazia o carregador depressa.",
  },
  { name: "Dispersão", description: "Vantagem para acertar a curta distância; o Dano cai a Médio e some a Longo." },
  { name: "Sangramento", description: "Em Ótimo+, o alvo perde Vida a cada turno até estancar (ação de Medicina ou improviso)." },
  { name: "Perfurante", description: "Ignora parte da proteção/armadura." },
  {
    name: "Aparar",
    description: "Permite a reação de Aparar (defesa com Combate, corpo a corpo). Numa aparada perfeita, quebra a guarda do inimigo e abre um contra-golpe. Ver Combate.",
  },
  { name: "Ocultável", description: "Fácil de esconder; Vantagem para portar disfarçado e bônus de surpresa." },
  { name: "Silenciável", description: "Aceita supressor ou é naturalmente silenciosa: não atrai atenção." },
  { name: "Brutal", description: "No Crítico, decepa/estraçalha: efeito máximo + complicação narrativa pro alvo." },
  { name: "Arremessável", description: "Pode ser lançada sem penalidade." },
  { name: "Alcance", description: "Atinge a uma casa de distância; ataca primeiro contra quem se aproxima." },
  { name: "Alcance Estendido", description: "(Armas de fogo) pode atacar a uma faixa de alcance além da sua categoria, com Desvantagem." },
  { name: "Contundente", description: "Em Ótimo+, atordoa em vez de sangrar; pode ser usada não-letal." },
  { name: "Versátil", description: "Também serve como ferramenta (abrir, prender, alavancar)." },
  { name: "Robusta", description: "Não quebra; resiste a maus-tratos." },
  { name: "Leve", description: "Pequena e ágil; fácil de manejar, favorece ataques rápidos e furtivos." },
  { name: "Comum", description: "Barata e fácil de encontrar ou substituir; não levanta suspeita." },
  { name: "Símbolo", description: "Carrega peso cultural ou de autoridade; pode impor respeito ou medo (vantagem situacional em Intimidação ou Lábia)." },
  { name: "Discreta", description: "Parece inofensiva; não desperta suspeita até ser usada (vantagem na surpresa)." },
  { name: "Enredar", description: "Em vez de ferir, pode prender ou desarmar o alvo." },
];

const DISADVANTAGES: Entry[] = [
  { name: "Emperra", description: "No Fracasso, trava; gaste uma ação para desemperrar." },
  { name: "Recarga Lenta", description: "Recarregar consome o turno inteiro." },
  { name: "Recarga Muito Lenta", description: "Cartucho por cartucho; vários turnos." },
  { name: "Recarga Frequente", description: "Carregador muito pequeno: a recarga é rápida, mas acontece o tempo todo." },
  {
    name: "Ruidosa",
    description: "O disparo ecoa e atrai atenção: o narrador decide as consequências (reforços, criatura, testemunha). Decisivo em cenas de furtividade.",
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
  { name: "Nagant M1895", damage: "5", capacity: "7", traits: "Silenciável (selo de gás), Mecanismo Duro, Recarga Muito Lenta, Ruidosa" },
];

const PISTOLS: Firearm[] = [
  { name: "Colt M1911 (.45 ACP)", damage: "7", capacity: "7", traits: "Confiável, Recarga Rápida, Ruidosa" },
  { name: "Luger P08 (9mm)", damage: "6", capacity: "8", traits: "Preciso, Recarga Rápida, Emperra (sensível a sujeira), Ruidosa" },
  { name: "Mauser C96 (7.63)", damage: "6", capacity: "10", traits: "Alcance Estendido, Volumosa, Recarga Lenta, Ruidosa" },
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
  { name: "Dirk escocesa", damage: "5", traits: "Sangramento, Símbolo" },
  { name: "Canivete de bolso", damage: "3", traits: "Ocultável, Leve, Versátil" },
];

const SWORDS: MeleeWeapon[] = [
  { name: "Sabre de cavalaria", damage: "6", traits: "Aparar (corte largo)" },
  { name: "Espada de oficial", damage: "6", traits: "Aparar, Símbolo (impõe respeito/medo)" },
  { name: "Florete / Espada / Sabre de esgrima", damage: "5", traits: "Preciso, Aparar, Perfurante (estocada), Frágil (lâmina esportiva)" },
  { name: "Espada naval (cutelo)", damage: "6", traits: "Aparar, Robusta" },
];

const IMPROVISED: MeleeWeapon[] = [
  { name: "Bengala reforçada", damage: "4", traits: "Discreta, Aparar, Contundente" },
  { name: "Bengala-espada", damage: "5", traits: "Lâmina oculta (surpresa), Ilegal, Sangramento, Frágil" },
  { name: "Navalha", damage: "3", traits: "Sangramento, Ocultável, Leve" },
  { name: "Cassetete / Bastão policial", damage: "4", traits: "Contundente, opção não-letal" },
  { name: "Corrente", damage: "4", traits: "Alcance, Enredar" },
  { name: "Martelo", damage: "5", traits: "Contundente, Comum" },
  { name: "Machadinha de caça", damage: "6", traits: "Sangramento, Perfurante, Arremessável" },
];

const HISTORICAL: MeleeWeapon[] = [
  { name: "Espada medieval herdada", damage: "7", traits: "Aparar, Pesada, Símbolo (opcional: Duas Mãos para +Dano)" },
  { name: "Machado de guerra antigo", damage: "7", traits: "Perfurante, Brutal, Pesada" },
  { name: "Alabarda decorativa", damage: "7", traits: "Alcance (golpeia primeiro), Duas Mãos, Pesada, Desajeitada" },
  { name: "Baioneta", damage: "4", traits: "Versátil — solta funciona como faca; acoplada ao rifle, vira lança (ganha Alcance)" },
];

function EntryGlossary({ entries }: { entries: Entry[] }) {
  return (
    <div className={doc.glossary}>
      {entries.map((entry) => (
        <div key={entry.name} className={doc.termCard}>
          <h5>{entry.name}</h5>
          <p>{entry.description}</p>
        </div>
      ))}
    </div>
  );
}

function FirearmTable({ weapons }: { weapons: Firearm[] }) {
  return (
    <DragScroll className={doc.tableWrap}>
      <table className={doc.wTable}>
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
    </DragScroll>
  );
}

function MeleeTable({ weapons }: { weapons: MeleeWeapon[] }) {
  return (
    <DragScroll className={doc.tableWrap}>
      <table className={doc.wTable}>
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
    </DragScroll>
  );
}

export default function ArmasPage() {
  return (
    <>
      <Nav />
      <article>
        <section>
          <Dossier
            gnum="Gaveta IV"
            plateTitle="O Sistema"
            plateSub="Manual Operacional · Sistema de Armas"
            eyebrow="Ref. SIS-IV — Custódia da Ordem — Não reproduzir"
            heading="Sistema de Armas"
            signoff="Arquivado pela custódia da Ordem — Gaveta IV, circulação restrita."
            lede={
              <>
                Você rola o ataque normalmente (pool de d20, fica com o maior, soma a perícia e os modificadores). O{" "}
                <strong>Dano</strong> listado é um valor base — a qualidade do acerto define quanto disso o alvo
                leva.
              </>
            }
          >
            <section className={doc.panel} id="dano">
              <div className={doc.tab}>
                <span className={doc.tabNum}>I.</span>
                <h3>Regra Universal de Dano</h3>
              </div>
              <p className={doc.body}>Leia o resultado na tabela e aplique o dano:</p>
              <div className={doc.ledger} role="table" aria-label="Efeito do Dano por Resultado">
                <div className={`${doc.row} ${doc.rowBad}`}>
                  <span className={doc.band}>Fracasso</span>
                  <span className={doc.range}>Erra</span>
                  <span className={doc.what}>
                    A arma pode emperrar/quebrar (se tiver o traço) ou criar uma complicação: acertar aliado, ficar
                    exposto, derrubar a arma.
                  </span>
                </div>
                <div className={doc.row}>
                  <span className={doc.band}>Ruim</span>
                  <span className={doc.range}>Raspão</span>
                  <span className={doc.what}>Acerto de raspão → metade do Dano (arredonda pra baixo).</span>
                </div>
                <div className={doc.row}>
                  <span className={doc.band}>Bom</span>
                  <span className={doc.range}>Dano base</span>
                  <span className={doc.what}>Dano base, cheio.</span>
                </div>
                <div className={doc.row}>
                  <span className={doc.band}>Ótimo</span>
                  <span className={doc.range}>Dano + traço</span>
                  <span className={doc.what}>Dano base e ativa o traço (Sangramento, Atordoar, etc.).</span>
                </div>
                <div className={`${doc.row} ${doc.rowCrit}`}>
                  <span className={doc.band}>Crítico</span>
                  <span className={doc.range}>Dano dobrado</span>
                  <span className={doc.what}>Dano dobrado, ignora proteção, e ativa o efeito máximo do traço.</span>
                </div>
              </div>
            </section>

            <hr className={doc.rule} />

            <section className={doc.panel} id="alcance">
              <div className={doc.tab}>
                <span className={doc.tabNum}>II.</span>
                <h3>Alcance</h3>
              </div>
              <EntryGlossary entries={RANGES} />
            </section>

            <hr className={doc.rule} />

            <section className={doc.panel} id="tracos">
              <div className={doc.tab}>
                <span className={doc.tabNum}>III.</span>
                <h3>Glossário de Traços</h3>
              </div>
              <p className={doc.cap}>Vantagens</p>
              <EntryGlossary entries={ADVANTAGES} />
              <p className={doc.cap} style={{ marginTop: "1rem" }}>
                Desvantagens
              </p>
              <EntryGlossary entries={DISADVANTAGES} />
            </section>

            <hr className={doc.rule} />

            <section className={doc.panel} id="fogo">
              <div className={doc.tab}>
                <span className={doc.tabNum}>IV.</span>
                <h3>Armas de Fogo</h3>
              </div>

              <div className={doc.tableHead}>
                <h4>Revólveres</h4>
                <span className={doc.tableTag}>Médio · Pontaria</span>
              </div>
              <FirearmTable weapons={REVOLVERS} />

              <div className={doc.tableHead}>
                <h4>Pistolas Semiautomáticas</h4>
                <span className={doc.tableTag}>Médio · Pontaria</span>
              </div>
              <FirearmTable weapons={PISTOLS} />
              <p className={doc.footnote}>
                Curto (nas pistolas de bolso): o alcance efetivo da arma é Curto, não o Médio da categoria.
              </p>

              <div className={doc.tableHead}>
                <h4>Rifles</h4>
                <span className={doc.tableTag}>Longo · Pontaria · Duas Mãos</span>
              </div>
              <FirearmTable weapons={RIFLES} />

              <div className={doc.tableHead}>
                <h4>Espingardas</h4>
                <span className={doc.tableTag}>Curto · Pontaria · Duas Mãos</span>
              </div>
              <FirearmTable weapons={SHOTGUNS} />

              <div className={doc.tableHead}>
                <h4>Submetralhadoras</h4>
                <span className={doc.tableTag}>Médio · Pontaria · Duas Mãos</span>
              </div>
              <FirearmTable weapons={SMGS} />
            </section>

            <hr className={doc.rule} />

            <section className={doc.panel} id="brancas">
              <div className={doc.tab}>
                <span className={doc.tabNum}>V.</span>
                <h3>Armas Brancas</h3>
              </div>

              <div className={doc.tableHead}>
                <h4>Facas e Punhais</h4>
                <span className={doc.tableTag}>Corpo a corpo · Combate</span>
              </div>
              <MeleeTable weapons={KNIVES} />

              <div className={doc.tableHead}>
                <h4>Espadas</h4>
                <span className={doc.tableTag}>Corpo a corpo · Combate</span>
              </div>
              <MeleeTable weapons={SWORDS} />
            </section>

            <hr className={doc.rule} />

            <section className={doc.panel} id="improvisadas">
              <div className={doc.tab}>
                <span className={doc.tabNum}>VI.</span>
                <h3>Armas Improvisadas Comuns</h3>
              </div>
              <p className={doc.note} style={{ marginBottom: "0.8rem" }}>
                Corpo a corpo · Combate
              </p>
              <MeleeTable weapons={IMPROVISED} />
            </section>

            <hr className={doc.rule} />

            <section className={doc.panel} id="historicas">
              <div className={doc.tab}>
                <span className={doc.tabNum}>VII.</span>
                <h3>Armas Históricas Ainda Encontradas</h3>
              </div>
              <MeleeTable weapons={HISTORICAL} />
            </section>
          </Dossier>
        </section>
      </article>
      <Footer />
    </>
  );
}
