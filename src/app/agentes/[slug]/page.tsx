import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import sectionStyles from "@/components/Section.module.css";
import { AGENTS, getAgent, getVida, getSanidade } from "@/data/agents";
import styles from "./page.module.css";

export function generateStaticParams() {
  return AGENTS.map((agent) => ({ slug: agent.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgent(slug);

  if (!agent) {
    return {};
  }

  return {
    title: `${agent.codename} — The Sacred Blood: The Vigil`,
    description: agent.summary,
  };
}

const ATTRIBUTE_LABELS: Record<string, string> = {
  corpo: "Corpo",
  menteEspirito: "Mente & Espírito",
  socialSegredo: "Social & Segredo",
  sobrenatural: "Sobrenatural",
};

export default async function AgentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const agent = getAgent(slug);

  if (!agent) {
    notFound();
  }

  let photoClassName = styles.photo;
  if (agent.photo) photoClassName += ` ${styles.photoWithImage}`;
  else if (agent.redacted) photoClassName += ` ${styles.redactedPhoto}`;

  const identityClassName = agent.redacted ? `${styles.identity} ${styles.redacted}` : styles.identity;
  const skillEntries = agent.skills ? Object.entries(agent.skills) : [];

  return (
    <>
      <Nav />
      <article>
        <section>
          <Link href="/agentes" className={styles.back}>
            ← Voltar ao arquivo
          </Link>
          <div className={styles.dossier}>
            <div className={styles.photoColumn}>
              <div className={photoClassName}>
                {agent.photo ? (
                  <Image
                    src={agent.photo}
                    alt={agent.name}
                    fill
                    sizes="160px"
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                  />
                ) : agent.redacted ? (
                  "SEM REGISTRO FOTOGRÁFICO"
                ) : (
                  agent.seal
                )}
              </div>

              {agent.attributes && (
                <div className={styles.vitalsAside}>
                  <div className={styles.vital}>
                    <span className={styles.vitalLabel}>Vida</span>
                    <span className={styles.vitalValue}>{getVida(agent)}</span>
                  </div>
                  <div className={styles.vital}>
                    <span className={styles.vitalLabel}>Sanidade</span>
                    <span className={styles.vitalValue}>{getSanidade(agent)}</span>
                  </div>
                </div>
              )}
            </div>
            <div className={identityClassName}>
              <div className={styles.classification}>
                {agent.classification}
                {agent.status === "Classificado" && (
                  <>
                    {" · "}
                    <span className={styles.hostile}>Selado por ordem superior</span>
                  </>
                )}
              </div>
              <div className={styles.codename}>{agent.codename}</div>
              <h1 className={styles.title}>
                {agent.redacted ? <span className={styles.redact}>{agent.name}</span> : agent.name}
              </h1>
              <p className={styles.epithet}>{agent.role}</p>

              <div className={styles.statsGrid}>
                <div>
                  <div className={styles.statLabel}>Idade</div>
                  <div className={styles.statValue}>{agent.age}</div>
                </div>
                <div>
                  <div className={styles.statLabel}>Sexo</div>
                  <div className={styles.statValue}>{agent.gender}</div>
                </div>
                <div>
                  <div className={styles.statLabel}>Status</div>
                  <div className={styles.statValue}>{agent.status}</div>
                </div>
                {agent.house && (
                  <div>
                    <div className={styles.statLabel}>Casa / Afiliação</div>
                    <div className={styles.statValue}>{agent.house}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <p className={`${sectionStyles.lede} ${styles.lede}`}>{agent.summary}</p>

          {agent.attributes && (
            <div className={styles.attrGrid}>
              {Object.entries(agent.attributes).map(([key, value]) => (
                <div key={key} className={styles.attr}>
                  <div className={styles.attrLabel}>{ATTRIBUTE_LABELS[key] ?? key}</div>
                  <div className={styles.attrValue}>{value}</div>
                </div>
              ))}
            </div>
          )}

          {skillEntries.length > 0 && (
            <div className={styles.skillsGrid}>
              {skillEntries.map(([name, points]) => (
                <div key={name} className={styles.skillRow}>
                  <span className={styles.skillName}>{name}</span>
                  <span className={styles.skillDots}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={i < points ? styles.dotFilled : styles.dotEmpty}>
                        ●
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>

        <section>
          <div className={sectionStyles.eyebrow}>Histórico</div>
          <h2 className={sectionStyles.heading}>Dossiê</h2>
          {agent.bio.map((paragraph, index) => (
            <p key={index} className={sectionStyles.body}>
              {paragraph}
            </p>
          ))}
        </section>

        {agent.missions.length > 0 && (
          <section>
            <div className={sectionStyles.eyebrow}>Registro de Campo</div>
            <h2 className={sectionStyles.heading}>Missões</h2>
            {agent.missions.map((mission, index) => (
              <div key={index} className={styles.mission}>
                <div className={styles.missionHeader}>
                  <h3 className={styles.missionTitle}>{mission.title}</h3>
                  <span className={styles.missionStatus}>{mission.status}</span>
                </div>
                <p className={sectionStyles.body}>{mission.summary}</p>
              </div>
            ))}
          </section>
        )}
      </article>
      <Footer />
    </>
  );
}
