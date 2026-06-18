import Link from "next/link";
import Reveal from "./Reveal";
import styles from "./AgentDrawer.module.css";
import type { Agent } from "@/data/agents";

export default function AgentDrawer({ agent }: { agent: Agent }) {
  const drawerClassName = agent.redacted ? `${styles.drawer} ${styles.redacted}` : styles.drawer;

  return (
    <Link href={`/agentes/${agent.slug}`} className={styles.drawerLink}>
      <Reveal as="article" className={drawerClassName}>
        <div className={styles.plate}>
          <span className={styles.seal}>{agent.seal}</span>
          <div>
            <div className={styles.codename}>{agent.codename}</div>
            <div className={styles.classification}>{agent.classification}</div>
          </div>
        </div>
        <h3 className={styles.name}>
          {agent.redacted ? <span className={styles.redact}>{agent.name}</span> : agent.name}
        </h3>
        <span className={styles.role}>{agent.role}</span>
        <div className={styles.statusRow}>
          <span>
            Idade: <b>{agent.age}</b>
          </span>
          <span>
            Status: <b>{agent.status}</b>
          </span>
        </div>
        <div className={styles.open}>[ abrir ficha ]</div>
      </Reveal>
    </Link>
  );
}
