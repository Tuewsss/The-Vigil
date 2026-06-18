import Reveal from "./Reveal";
import sectionStyles from "./Section.module.css";
import styles from "./Briefing.module.css";

export default function WorldSection() {
  return (
    <section id="mundo">
      <div className={sectionStyles.eyebrow}>Briefing I — Inglaterra, 1920</div>
      <h2 className={sectionStyles.heading}>Um país de luto</h2>
      <p className={sectionStyles.lede}>
        A guerra acabou, mas ninguém venceu. E onde a dor abriu fendas, algo do outro lado começou a responder.
      </p>

      <Reveal className={styles.briefing}>
        <div className={styles.stamp}>
          <span>Gravação recuperada · Cilindro de cera</span>
          <span>Confidencial — Vigilia</span>
        </div>
        <p>
          Certo. Está gravando? Bom.
          <br />
          Anota o que eu vou dizer, porque eu não repito — e quem ouvir isto depois precisa entender o que a gente
          está enfrentando.
        </p>
        <p>
          Olha em volta. Uma geração inteira ficou enterrada na lama da França. E os que voltaram... a gripe levou
          quase todos. Não tem uma casa neste país — uma só — sem um retrato de luto sobre a lareira. As mães vestem
          preto. Os pais não falam mais. Cada um virou uma ilha, trancado com o próprio morto. E à noite, na sala de
          visita, à luz de vela, eu vejo gente desesperada de mãos dadas em volta de uma mesa, implorando para que os
          mortos respondam.
        </p>
        <p className={styles.aside}>[pausa]</p>
        <p>Esse é o problema. Às vezes... alguma coisa responde.</p>
        <p>
          Você sente isso? A dor abriu rachaduras no mundo. Onde antes havia uma parede firme — entre o que é natural
          e o que nunca, nunca deveria ser visto — hoje há fendas. Finas como fio de cabelo, no começo. Mas crescem.
          Eu vi crescer.
        </p>
        <p>
          Médium charlatão chamando o que não sabe nem nomear. Soldado que voltou com alguma coisa no bolso, trazida
          dos campos da França, das colônias do Império. E aqui, nas sombras de uma Inglaterra que ainda queima
          lampião a gás, o sobrenatural está se chegando ao nosso lado do véu. Faminto. Pela primeira vez em séculos.
        </p>
        <p className={styles.aside}>[a voz baixa]</p>
        <p>Mas tem quem guarde essa fronteira. Tem. Há muito tempo...</p>
        <p>Agora desliga isso.</p>
        <div className={styles.endStamp}>
          <span className={styles.tag}>[ fim do registro ]</span>
          <span>Agente de campo · local e data omitidos</span>
        </div>
      </Reveal>
    </section>
  );
}
