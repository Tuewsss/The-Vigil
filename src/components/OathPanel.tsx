"use client";

import { useState } from "react";
import styles from "./Oath.module.css";

const MODERN = {
  title: "O Juramento do Santo Sangue",
  lines: [
    <>Sobre o Santo Sangue, eu juro.</>,
    <>Juro guardar a fronteira — e jamais cruzá-la.</>,
    <>
      Juro não trazer o não-natural ao mundo dos vivos,
      <br />
      nem entregar os vivos àquilo que se arrasta do outro lado.
    </>,
    <>
      Juro proteger ambos os lados do véu,
      <br />
      sem nunca os unir.
    </>,
    <>E juro não me tornar aquilo que vigio.</>,
    <>Que o sangue me prenda à palavra.</>,
    <>Que o sangue me julgue, se eu falhar.</>,
  ],
  latin: "— Sanguis me ligat. Sanguis me iudicat.",
  translation: '("O sangue me prende. O sangue me julga.")',
  hint: "(clique no juramento para revelar a forma antiga)",
};

const ANCIENT = {
  title: "O Juramento do Santo Sangue",
  lines: [
    <>Sobre o Santo Sangue, eu juro.</>,
    <>Juro caçar o não-natural até o último que respire sob este céu.</>,
    <>Juro não conhecer trégua, nem pena, nem descanso, enquanto restar um só deles sobre a terra.</>,
    <>
      Juro matar o velho e o recém-nascido, a fera e a sua cria — pois o que nasce torto não se endireita, e a
      semente do impuro só pare o impuro.
    </>,
    <>Juro queimar seus filhos, salgar suas tocas, e não deixar pedra, osso ou nome de pé.</>,
    <>Juro não chorar aquilo que destruo, pois a piedade é traição, e a misericórdia, o primeiro passo da derrota.</>,
    <>Juro entregar minha vida, meu sangue e minha alma a esta lâmina, até que o mundo amanheça limpo.</>,
    <>Que o sangue me arme contra eles.</>,
    <>Que o sangue me absolva do que eu fizer em seu nome.</>,
  ],
  latin: "— Sanguis me armat. Sanguis me absolvit.",
  translation: '("O sangue me arma. O sangue me absolve.")',
  hint: "(clique no juramento para retornar à forma atual)",
};

const LINE_STEP_MS = 70;
const LINE_BASE_MS = 140;
const FADE_OUT_MS = 360;
const FORM_DURATION_MS = 700;

type Phase = "idle" | "out" | "in";

export default function OathPanel() {
  const [ancient, setAncient] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const oath = ancient ? ANCIENT : MODERN;

  const handleToggle = () => {
    if (phase !== "idle") return;

    setPhase("out");
    window.setTimeout(() => {
      setAncient((v) => !v);
      setPhase("in");
      const tailDelay = LINE_BASE_MS + oath.lines.length * LINE_STEP_MS + 2 * LINE_STEP_MS;
      window.setTimeout(() => setPhase("idle"), tailDelay + FORM_DURATION_MS);
    }, FADE_OUT_MS);
  };

  const lineDelay = (i: number) => `${LINE_BASE_MS + i * LINE_STEP_MS}ms`;
  const tailDelay = (offset: number) =>
    `${LINE_BASE_MS + oath.lines.length * LINE_STEP_MS + offset * LINE_STEP_MS}ms`;

  return (
    <div
      className={`${styles.oath} ${ancient ? styles.ancient : ""} ${
        phase === "out" ? styles.dissolving : ""
      } ${phase === "in" ? styles.forming : ""}`}
    >
      <div className={styles.title} style={phase === "in" ? { animationDelay: "0ms" } : undefined}>
        {oath.title}
      </div>
      <div className={styles.lines}>
        {oath.lines.map((line, i) => (
          <p key={i} style={phase === "in" ? { animationDelay: lineDelay(i) } : undefined}>
            {line}
          </p>
        ))}
      </div>
      <button
        type="button"
        className={styles.latin}
        onClick={handleToggle}
        aria-pressed={ancient}
        disabled={phase !== "idle"}
        style={phase === "in" ? { animationDelay: tailDelay(0) } : undefined}
      >
        {oath.latin}
      </button>
      <p className={styles.translation} style={phase === "in" ? { animationDelay: tailDelay(1) } : undefined}>
        {oath.translation}
      </p>
      <p className={styles.hint} style={phase === "in" ? { animationDelay: tailDelay(2) } : undefined}>
        {oath.hint}
      </p>
    </div>
  );
}