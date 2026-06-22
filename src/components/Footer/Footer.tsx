import { useLang } from '../../context/LanguageContext'
import { t } from '../../i18n/translations'
import styles from './Footer.module.css'

export function Footer() {
  const { lang } = useLang()
  const tr = t[lang]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.comment}>{'// '}</span>
        <span className={styles.text}>
          {tr.footer.made}{' '}
          <span className={styles.name}>Angie Cortez</span>
          {' '}· 2026
        </span>
        <div className={styles.socials}>
          <a href="https://github.com/angiecortez" target="_blank" rel="noreferrer" className={styles.link}>gh</a>
          <a href="https://www.linkedin.com/in/angiecortez/" target="_blank" rel="noreferrer" className={styles.link}>in</a>
          <a href="mailto:angiecorteztay1@gmail.com" className={styles.link}>✉</a>
        </div>
      </div>
    </footer>
  )
}
