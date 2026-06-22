import { useLang } from '../../context/LanguageContext'
import { t } from '../../i18n/translations'
import styles from './Contact.module.css'

export function Contact() {
  const { lang } = useLang()
  const tr = t[lang].contact

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.dollar}>$</span>
          <span className={styles.cmd}>./contact.sh</span>
        </div>

        <div className={styles.body}>
          <div className={styles.left}>
            <h2 className={styles.title}>{tr.title}</h2>
            <p className={styles.desc}>{tr.desc}</p>

            <div className={styles.links}>
              <a href="mailto:angiecorteztay1@gmail.com" className={styles.linkItem}>
                <span className={styles.linkIcon}>✉</span>
                <div>
                  <span className={styles.linkLabel}>Email</span>
                  <span className={styles.linkValue}>angiecorteztay1@gmail.com</span>
                </div>
              </a>

              <a
                href="https://wa.me/51946896796"
                target="_blank"
                rel="noreferrer"
                className={styles.linkItem}
              >
                <span className={styles.linkIcon}>📱</span>
                <div>
                  <span className={styles.linkLabel}>{tr.whatsapp}</span>
                  <span className={styles.linkValue}>{tr.phone}</span>
                </div>
              </a>

              <a
                href="https://github.com/angiecortez"
                target="_blank"
                rel="noreferrer"
                className={styles.linkItem}
              >
                <span className={styles.linkIcon}>⌥</span>
                <div>
                  <span className={styles.linkLabel}>GitHub</span>
                  <span className={styles.linkValue}>github.com/angiecortez</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/angiecortez/"
                target="_blank"
                rel="noreferrer"
                className={styles.linkItem}
              >
                <span className={styles.linkIcon}>in</span>
                <div>
                  <span className={styles.linkLabel}>LinkedIn</span>
                  <span className={styles.linkValue}>linkedin.com/in/angiecortez</span>
                </div>
              </a>
            </div>
          </div>

          <div className={styles.terminal}>
            <div className={styles.termBar}>
              <div className={styles.dot} style={{ background: '#F09595' }} />
              <div className={styles.dot} style={{ background: '#EF9F27' }} />
              <div className={styles.dot} style={{ background: '#97C459' }} />
              <span className={styles.termTitle}>message.sh</span>
            </div>
            <div className={styles.termBody}>
              <p className={styles.termLine}>
                <span className={styles.termDollar}>$</span> {tr.echoCmd}
              </p>
              <p className={styles.termOutput}>{tr.echoOut}</p>
              <p className={styles.termLine}>
                <span className={styles.termDollar}>$</span> send --to angiecorteztay1@gmail.com
              </p>
              <p className={styles.termOutput}>
                <span className={styles.termGreen}>✓</span> Message sent successfully
              </p>
              <p className={styles.termLine}>
                <span className={styles.termDollar}>$</span>
                <span className={styles.termCursor} />
              </p>
            </div>
            <div className={styles.ctaWrap}>
              <a href="mailto:angiecorteztay1@gmail.com" className={styles.cta}>
                {tr.send}
              </a>
              <a
                href={lang === 'es' ? '/assets/docs/angiecortez.pdf' : '/assets/docs/angiecortez-en.pdf'}
                target="_blank"
                rel="noreferrer"
                className={styles.ctaAlt}
              >
                {tr.downloadCV}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
