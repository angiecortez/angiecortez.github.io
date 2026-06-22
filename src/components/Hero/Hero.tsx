import { useLang } from '../../context/LanguageContext'
import { t } from '../../i18n/translations'
import styles from './Hero.module.css'

export function Hero() {
  const { lang } = useLang()
  const tr = t[lang]

  const desc = tr.hero.desc
    .replace('<b>', '<strong>').replace('</b>', '</strong>')
    .replace('<hl>', `<span class="${styles.highlight}">`).replace('</hl>', '</span>')

  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>

        <div className={styles.prompt}>
          <span className={styles.user}>angie@portfolio</span>
          <span className={styles.sep}>:</span>
          <span className={styles.dir}>~</span>
          <span className={styles.dollar}> $</span>
          <span className={styles.cmd}> whoami</span>
        </div>

        <div className={styles.nameBlock}>
          <div className={styles.nameFirst}>Angie</div>
          <div className={styles.nameLast}>
            Cortez.<span className={styles.cursor} />
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.terminal}>
            <div className={styles.termBar}>
              <div className={styles.dot} style={{ background: '#F09595' }} />
              <div className={styles.dot} style={{ background: '#EF9F27' }} />
              <div className={styles.dot} style={{ background: '#97C459' }} />
              <span className={styles.termLabel}>output</span>
            </div>
            <div className={styles.termBody}>
              <Line k="role"     v={'"Full Stack Developer"'}           color="string" />
              <Line k="exp"      v={tr.hero.expValue}                   color="green"  />
              <Line k="company"  v={'"Thoughtworks"'}                   color="green2" />
              <Line k="stack"    v={'["React", "TypeScript", "Node.js"]'} color="array" />
              <Line k="lang"     v={tr.hero.langValue}                  color="amber"  />
              <Line k="location" v={'"Lima, Perú"'}                     color="muted"  />
            </div>
          </div>

          <div className={styles.right}>
            <p
              className={styles.desc}
              dangerouslySetInnerHTML={{ __html: desc }}
            />
            <div className={styles.ctas}>
              <a href="#projects" className={styles.ctaPrimary}>{tr.hero.viewProjects}</a>
              <a
                href={lang === 'es' ? '/assets/docs/angiecortez.pdf' : '/assets/docs/angiecortez-en.pdf'}
                target="_blank"
                rel="noreferrer"
                className={styles.ctaSecondary}
              >
                $ download cv
              </a>
            </div>
            <div className={styles.stats}>
              <Stat num="6+" label={tr.hero.yearsExp} />
              <div className={styles.statDiv} />
              <Stat num="7" label={tr.hero.companies} />
              <div className={styles.statDiv} />
              <Stat num="ES/EN" label={tr.hero.languages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Line({ k, v, color }: { k: string; v: string; color: string }) {
  return (
    <div className={styles.line}>
      <span className={styles.key}>{k}</span>
      <span className={styles.colon}>:</span>
      <span className={`${styles.val} ${styles[`val_${color}`]}`}> {v}</span>
    </div>
  )
}

function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div className={styles.stat}>
      <span className={styles.statNum}>{num}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
}
