import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.comment}>{'// '}</span>
        <span className={styles.text}>
          made with care by{' '}
          <span className={styles.name}>Angie Cortez</span>
          {' '}· 2025
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
