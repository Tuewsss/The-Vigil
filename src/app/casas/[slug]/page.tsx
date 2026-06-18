import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BloodTree from "@/components/BloodTree";
import sectionStyles from "@/components/Section.module.css";
import { HOUSES, getHouse } from "@/data/houses";
import styles from "./page.module.css";

export function generateStaticParams() {
  return HOUSES.map((house) => ({ slug: house.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const house = getHouse(slug);

  if (!house) {
    return {};
  }

  return {
    title: `Casa ${house.title} — The Sacred Blood: The Vigil`,
    description: house.description,
  };
}

export default async function HousePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const house = getHouse(slug);

  if (!house) {
    notFound();
  }

  return (
    <>
      <Nav />
      <article>
        <section>
          <Link href="/#casas" className={styles.back}>
            ← Voltar aos arquivos
          </Link>
          <header className={styles.header}>
            <span className={styles.seal}>{house.seal}</span>
            <div className={styles.classification}>
              {house.classification}
              {house.hostileTag && (
                <>
                  {" · "}
                  <span className={styles.hostile}>{house.hostileTag}</span>
                </>
              )}
            </div>
            <h1 className={styles.title}>{house.title}</h1>
            <p className={styles.epithet}>{house.epithet}</p>
          </header>
          <p className={`${sectionStyles.lede} ${styles.lede}`}>{house.description}</p>
        </section>

        <section>
          <div className={sectionStyles.eyebrow}>Linhagem de Sangue</div>
          <h2 className={sectionStyles.heading}>Árvore Genealógica</h2>
          <BloodTree roots={house.genealogy} />
        </section>

        <section>
          <div className={sectionStyles.eyebrow}>Registro Histórico</div>
          <h2 className={sectionStyles.heading}>História da Casa</h2>
          {house.history.length > 0 ? (
            house.history.map((chapter, index) => (
              <div key={index} className={styles.chapter}>
                <h3 className={styles.chapterTitle}>{chapter.title}</h3>
                {chapter.location && <p className={styles.chapterLocation}>{chapter.location}</p>}
                {chapter.paragraphs.map((paragraph, pIndex) => {
                  const subheading = paragraph.match(/^⎯+\s*(.+?)\s*⎯+$/);
                  if (subheading) {
                    return (
                      <div key={pIndex} className={styles.subDivider}>
                        <span>{subheading[1]}</span>
                      </div>
                    );
                  }
                  return (
                    <p key={pIndex} className={sectionStyles.body}>
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            ))
          ) : (
            <p className={sectionStyles.body}>Este registro ainda aguarda redação.</p>
          )}
        </section>
      </article>
      <Footer />
    </>
  );
}
