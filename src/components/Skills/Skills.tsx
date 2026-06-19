import { skills } from '../../data'
import styles from './Skills.module.css'

const categories = [
  { key: 'frontend' as const, label: 'frontend',  colorClass: 'pink'  },
  { key: 'backend'  as const, label: 'backend',   colorClass: 'green' },
  { key: 'tools'    as const, label: 'tools',     colorClass: 'gray'  },
]

export function Skills() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.dollar}>$</span>
          <span className={styles.cmd}>ls ./skills</span>
        </div>

        <div className={styles.grid}>
          {categories.map(({ key, label, colorClass }) => (
            <div key={key} className={styles.group}>
              <div className={styles.groupHeader}>
                <span className={styles.comment}>{'// '}</span>
                <span className={styles.groupLabel}>{label}</span>
              </div>
              <div className={styles.tags}>
                {skills[key].map(skill => (
                  <span key={skill} className={`${styles.tag} ${styles[colorClass]}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
