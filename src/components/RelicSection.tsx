import Reveal from "./Reveal";
import OathPanel from "./OathPanel";
import sectionStyles from "./Section.module.css";

export default function RelicSection() {
  return (
    <section id="reliquia">
      <div className={sectionStyles.eyebrow}>Briefing III — A Relíquia</div>
      <h2 className={sectionStyles.heading}>Sanguis Sanctus</h2>
      <Reveal as="p" className={sectionStyles.body}>
        No coração da ordem repousa o <span className={sectionStyles.relic}>Santo Sangue</span> — uma relíquia dita
        ser sangue de um santo, ou de algo muito mais antigo e perigoso. Foi sobre ele que homens e criaturas juraram,
        em outra era, a trégua que ainda segura o mundo.
      </Reveal>
      <Reveal as="p" className={sectionStyles.body}>
        Quem jura sobre o Santo Sangue fica <strong>preso à palavra dada</strong>. É por isso que, entre os agentes
        da Vigília, caminham coisas que não deveriam existir — leais não por bondade, mas porque o próprio sangue as
        condena se traírem. Quebre o juramento, e o sangue o denuncia. Ou o consome.
      </Reveal>

      <Reveal>
        <OathPanel />
      </Reveal>
    </section>
  );
}
