import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import OccultSheet from "@/components/OccultSheet";
import styles from "@/components/Occult.module.css";

export const metadata: Metadata = {
  title: "Sobrenatural — O Sistema — The Sacred Blood: The Vigil",
  description: "O que não pertence a este mundo não obedece às suas regras: Sangue, Feitiçaria e Ocultismo.",
};

export default function SobrenaturalPage() {
  return (
    <>
      <Nav />
      <div className={styles.pg}>
        <div className={styles.wrap}>
          <Link href="/sistema" className={styles.back}>
            ← Atributos Fortes
          </Link>

          <header className={styles.hero}>
            <p className={styles.heroEye}>Atributo Forte · IV</p>
            <h1 className={styles.heroTitle}>SOBRENATURAL</h1>
            <div className={styles.heroRule} />
            <p className={styles.heroLede}>
              O que não pertence a este mundo não obedece às suas regras. Três forças — sangue, feitiço e o
              inominável — que não se aprendem: se carregam.
            </p>
          </header>

          <Link href="/sistema/sobrenatural/feiticaria" className={styles.cardLink}>
            <OccultSheet
              theme="feiticaria"
              stamp="Feitiçaria"
              slabNum="I · IV"
              slabTitle="Feitiçaria"
              docHead="A Magia das Bruxas"
              asideNote="« O que a Feitiçaria cria, o mundo inteiro pode ver queimar. »"
            >
              <p className={styles.bodyP}>
                A única magia que o mundo pode testemunhar. A Feitiçaria é visível, sensível — você a vê dobrar o ar
                antes de chegar, sente quando passa por você mesmo sem tocar. É a magia que deixa marca no corpo do
                mundo: queima, aperta, estraçalha. Capaz de ferir. Capaz de tirar uma vida.
              </p>
              <div className={styles.ledger}>
                <div className={styles.lrow}>
                  <span className={styles.lrowK}>Atributo</span>
                  <span className={styles.lrowV}>Sobrenatural — define o pool de dados; Feitiçaria acrescenta o bônus fixo.</span>
                </div>
                <div className={styles.lrow}>
                  <span className={styles.lrowK}>Quem porta</span>
                  <span className={styles.lrowV}>Bruxas e herdeiros das linhagens — os que carregam o dom que não se escolhe.</span>
                </div>
                <div className={styles.lrow}>
                  <span className={styles.lrowK}>Natureza</span>
                  <span className={styles.lrowV}>Magia direta e declarada. Inegável. Quando a Feitiçaria age, todos na cena percebem.</span>
                </div>
                <div className={styles.lrow}>
                  <span className={styles.lrowK}>Alcance</span>
                  <span className={styles.lrowV}>Fere criaturas sobrenaturais onde nenhuma arma convencional deixaria marca.</span>
                </div>
              </div>
            </OccultSheet>
          </Link>

          <Link href="/sistema/sobrenatural/sangue" className={styles.cardLink}>
            <OccultSheet
              theme="sangue"
              stamp="Sangue"
              slabNum="II · IV"
              slabTitle="Sangue"
              docHead="O Poder dos Vampiros"
              asideNote="« Sangue não mente. Sangue revela. »"
            >
              <p className={styles.bodyP}>
                O Sangue não é apenas o que corre nas veias — é combustível, arma e maldição ao mesmo tempo. Os que
                dominam esta perícia carregam algo que não é inteiramente humano: o poder mais antigo que os
                vampiros guardam como segredo. Mágico e físico simultaneamente. Suave como uma promessa, letal como
                um julgamento.
              </p>
              <div className={styles.ledger}>
                <div className={styles.lrow}>
                  <span className={styles.lrowK}>Atributo</span>
                  <span className={styles.lrowV}>Sobrenatural — define o pool de dados; Sangue acrescenta o bônus fixo.</span>
                </div>
                <div className={styles.lrow}>
                  <span className={styles.lrowK}>Quem porta</span>
                  <span className={styles.lrowV}>Vampiros e aqueles com sangue alterado — por linhagem, ritual ou pacto.</span>
                </div>
                <div className={styles.lrow}>
                  <span className={styles.lrowK}>Natureza</span>
                  <span className={styles.lrowV}>
                    Poder dual: age no plano físico e no mágico ao mesmo tempo. Pode fortalecer, dominar, drenar ou
                    revelar.
                  </span>
                </div>
                <div className={styles.lrow}>
                  <span className={styles.lrowK}>Limite</span>
                  <span className={styles.lrowV}>Todo uso tem custo. E mãos humanas não tocam quem o domina de verdade.</span>
                </div>
              </div>
            </OccultSheet>
          </Link>

          <div className={styles.locked}>
            <OccultSheet
              theme="ocultismo"
              stamp="Ocultismo"
              slabNum="III · IV"
              slabTitle="Ocultismo"
              docHead="O Que Nunca Foi Revelado"
              asideNote="« O Ocultismo não responde perguntas. Ele faz o mundo admitir que as tinha. »"
            >
              <p className={styles.bodyP}>
                Não é magia. É a lacuna entre o que existe e o que nunca deveria ter existido. O Ocultismo não se vê
                — é como névoa: você sabe que está ali, mas nunca diretamente. Jamais foi compreendido por inteiro,
                jamais foi nomeado com segurança. Revela o que não poderia ser revelado, e sempre cobra por isso de
                formas que não se antecipam.
              </p>
              <div className={styles.ledger}>
                <div className={styles.lrow}>
                  <span className={styles.lrowK}>Atributo</span>
                  <span className={styles.lrowV}>Sobrenatural — define o pool de dados; Ocultismo acrescenta o bônus fixo.</span>
                </div>
                <div className={styles.lrow}>
                  <span className={styles.lrowK}>Quem porta</span>
                  <span className={styles.lrowV}>Aqueles que olharam para o que não devia ser visto — e não encontraram o caminho de volta.</span>
                </div>
                <div className={styles.lrow}>
                  <span className={styles.lrowK}>Natureza</span>
                  <span className={styles.lrowV}>Invisível e indireta. O Ocultismo não age: ele revela. E o que revela raramente traz conforto.</span>
                </div>
                <div className={styles.lrow}>
                  <span className={styles.lrowK}>Custo</span>
                  <span className={styles.lrowV}>Toda revelação tem peso. O uso do Ocultismo quase sempre cobra da Sanidade de quem invoca.</span>
                </div>
              </div>
              <span className={styles.lockedTag}>[ ainda em catalogação ]</span>
            </OccultSheet>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
