"use client";

import { useRef } from "react";
import type { FamilyMember, Spouse } from "@/data/houses";
import styles from "./BloodTree.module.css";

function MemberCard({ member }: { member: FamilyMember | Spouse }) {
  const cardClassName = `${styles.card} ${member.status === "alive" ? styles.alive : styles.dead}`;

  return (
    <div className={cardClassName}>
      <div className={styles.nameLine}>
        <span className={styles.statusMark}>{member.status === "alive" ? "●" : "†"}</span>
        <span className={styles.name}>{member.name}</span>
        {member.leader && <span className={styles.crown}>♛</span>}
      </div>
      {member.role && <span className={styles.role}>{member.role}</span>}
      {member.years && <span className={styles.years}>{member.years}</span>}
    </div>
  );
}

function TreeNode({ member }: { member: FamilyMember }) {
  return (
    <li>
      {member.spouse ? (
        <div className={styles.couple}>
          <MemberCard member={member} />
          <span className={styles.bond}>⚭</span>
          <MemberCard member={member.spouse} />
        </div>
      ) : (
        <MemberCard member={member} />
      )}
      {member.children && member.children.length > 0 && (
        <ul>
          {member.children.map((child) => (
            <TreeNode key={child.id} member={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function BloodTree({ roots }: { roots: FamilyMember[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  if (roots.length === 0) {
    return <div className={styles.empty}>A árvore genealógica ainda não foi desenterrada destes arquivos.</div>;
  }

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    drag.current = { active: true, startX: e.clientX, scrollLeft: wrapper.scrollLeft };
    wrapper.classList.add(styles.dragging);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const wrapper = wrapperRef.current;
    if (!wrapper || !drag.current.active) return;
    wrapper.scrollLeft = drag.current.scrollLeft - (e.clientX - drag.current.startX);
  };

  const endDrag = () => {
    drag.current.active = false;
    wrapperRef.current?.classList.remove(styles.dragging);
  };

  return (
    <>
      <div
        className={styles.wrapper}
        ref={wrapperRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        <ul className={styles.tree}>
          {roots.map((root) => (
            <TreeNode key={root.id} member={root} />
          ))}
        </ul>
      </div>
      <p className={styles.dragHint}>← arraste para o lado para ver a árvore completa →</p>
    </>
  );
}
