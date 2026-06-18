import Reveal from "./Reveal";
import sectionStyles from "./Section.module.css";

export default function OrderSection() {
  return (
    <section id="ordem">
      <div className={sectionStyles.eyebrow}>Briefing II — A Ordem</div>
      <h2 className={sectionStyles.heading}>A Vigília</h2>
      <Reveal as="p" className={sectionStyles.body}>
        <strong>A Vigília</strong> é uma ordem secular e secreta, escondida atrás de nomes tediosos e portas sem
        placa. Foi fundada em <strong>1812</strong> pela <strong>família Clement</strong> — e nasceu com um propósito
        brutal: caçar e exterminar toda raça não-natural que andasse sobre a terra. Bruxas. Vampiros. E outras coisas
        que os registros preferem não nomear.
      </Reveal>
      <Reveal as="p" className={sectionStyles.body}>
        Hoje a Vigília não caça mais. Gerações atrás, a ordem trocou a espada por um pacto: uma trégua que sustenta o
        equilíbrio entre o mundo natural e o sobrenatural. O inimigo deixou de ser &quot;o que não é natural&quot; e
        passou a ser <strong>quem rompe esse equilíbrio</strong> — renegados, cultos, relíquias amaldiçoadas, e os
        que abrem portas sem saber fechá-las.
      </Reveal>
      <Reveal as="p" className={sectionStyles.body}>
        Mas o massacre dos primeiros tempos deixou uma cicatriz funda. O sobrenome <strong>Clement</strong> — que, em
        inglês, quer dizer <em>misericordioso</em> — tornou-se, na boca dos Não-Naturais, sinônimo de tudo o que há
        de cruel. E agora, com o mundo natural enfraquecido pela guerra e pela peste, há quem queira finalmente{" "}
        <strong>dar o troco</strong>.
      </Reveal>
    </section>
  );
}
