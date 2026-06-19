import { projects } from '../../data'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.dollar}>$</span>
          <span className={styles.cmd}>ls ./projects</span>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imgWrap}>
                {p.image ? (
                  <img src={p.image} alt={p.title} className={styles.img} />
                ) : (
                  <div className={styles.imgPlaceholder}>
                    <span className={styles.placeholderText}>{p.title[0]}</span>
                  </div>
                )}
              </div>

              <div className={styles.info}>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.desc}>{p.description}</p>
                <div className={styles.stack}>
                  {p.stack.map(s => (
                    <span key={s} className={styles.tag}>{s}</span>
                  ))}
                </div>
                <div className={styles.links}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className={styles.linkGh}>
                      GitHub
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className={styles.linkDemo}>
                      Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
