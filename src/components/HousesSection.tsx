import FileCard from "./FileCard";
import Reveal from "./Reveal";
import sectionStyles from "./Section.module.css";
import styles from "./Houses.module.css";
import { getHouse } from "@/data/houses";

const HUMAN_HOUSE_SLUGS = ["clement", "barone"];

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
    </section>
  );
}
