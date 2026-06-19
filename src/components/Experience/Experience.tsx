import { experience } from '../../data'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.dollar}>$</span>
          <span className={styles.cmd}>git log --experience --oneline</span>
        </div>

        <div className={styles.list}>
          {experience.map((item, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.left}>
                <span className={`${styles.period} ${item.current ? styles.current : ''}`}>
                  {item.period}
                </span>
                {item.current && <span className={styles.badge}>now</span>}
              </div>

              <div className={styles.connector}>
                <div className={styles.dot} />
                <div className={styles.line} />
              </div>

              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <div>
                    <p className={styles.periodMobile}>{item.period}</p>
                    <h3 className={styles.company}>{item.company}</h3>
                    <p className={styles.role}>{item.role}</p>
                    <p className={styles.location}>{item.location}</p>
                  </div>
                </div>

                <p className={styles.desc}>{item.description}</p>

                {item.achievements.length > 0 && (
                  <ul className={styles.achievements}>
                    {item.achievements.map((a, j) => (
                      <li key={j}>
                        <span className={styles.arrow}>→</span> {a}
                      </li>
                    ))}
                  </ul>
                )}

                <div className={styles.stack}>
                  {item.stack.map(s => (
                    <span key={s} className={styles.tag}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
