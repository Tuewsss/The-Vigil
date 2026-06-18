import FileCard from "./FileCard";
import Reveal from "./Reveal";
import sectionStyles from "./Section.module.css";
import styles from "./Houses.module.css";
import { getHouse } from "@/data/houses";

const HUMAN_HOUSE_SLUGS = ["clement"];
const UNNATURAL_LINEAGE_SLUGS = ["demdike", "chattox", "de-vere", "dragomir"];

export default function HousesSection() {
  return (
    <section id="casas">
      <div className={sectionStyles.eyebrow}>Registro IV — Casas & Linhagens</div>
      <h2 className={sectionStyles.heading}>As Casas</h2>
      <p className={sectionStyles.lede}>
        Dois lados de uma mesma ferida: as casas humanas que ergueram a ordem, e as linhagens que sangraram sob ela.
      </p>

      <Reveal as="div" className={styles.groupLabel}>
        Casas Humanas da Vigília
      </Reveal>
      <div className={styles.files}>
        {HUMAN_HOUSE_SLUGS.map((slug) => {
          const house = getHouse(slug);
          if (!house) return null;
          return <FileCard key={house.slug} {...house} />;
        })}
      </div>

      <Reveal as="div" className={styles.groupLabel}>
        Linhagens Não-Naturais
      </Reveal>
      <div className={styles.files}>
        {UNNATURAL_LINEAGE_SLUGS.map((slug) => {
          const house = getHouse(slug);
          if (!house) return null;
          return <FileCard key={house.slug} {...house} />;
        })}
        <FileCard
          seal="█"
          classification="Classificação"
          hostileTag="Selado por ordem superior"
          title={<span className={styles.redact}>████████</span>}
          epithet="“As outras.”"
          description={
            <>
              Há mais coisas sob o pacto do que bruxas e vampiros. <span className={styles.redact}>████ ███████</span>{" "}
              permanece <span className={styles.redact}>█████████</span>, e os poucos que{" "}
              <span className={styles.redact}>██████</span> não falam sobre isso.{" "}
              <span className={styles.redact}>████████████████.</span>
            </>
          }
          redacted
        />
      </div>
    </section>
  );
}
