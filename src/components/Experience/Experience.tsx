import { experience } from '../../data'
import { useLang } from '../../context/LanguageContext'
import { t } from '../../i18n/translations'
import styles from './Experience.module.css'

export function Experience() {
  const { lang } = useLang()
  const tr = t[lang]

  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.dollar}>$</span>
          <span className={styles.cmd}>{tr.experience.cmd}</span>
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

                <p className={styles.desc}>{item.description[lang]}</p>

                {item.achievements.length > 0 && (
                  <ul className={styles.achievements}>
                    {item.achievements.map((a, j) => (
                      <li key={j}>
                        <span className={styles.arrow}>→</span> {a[lang]}
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
