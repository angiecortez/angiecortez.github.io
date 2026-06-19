import styles from './Hero.module.css'

export function Hero() {
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
              <Line k="role"    v={'"Full Stack Developer"'}  color="string" />
              <Line k="exp"     v={'"6+ años"'}               color="green"  />
              <Line k="company" v={'"Thoughtworks"'}          color="green2" />
              <Line k="stack"   v={'["React", "TypeScript", "Node.js"]'} color="array" />
              <Line k="lang"    v={'["Español", "English"]'}  color="amber"  />
              <Line k="location" v={'"Lima, Perú"'}           color="muted"  />
            </div>
          </div>

          <div className={styles.right}>
            <p className={styles.desc}>
              Más de <strong>6 años</strong> construyendo productos digitales con
              React, TypeScript y Node.js. Actualmente en{' '}
              <span className={styles.highlight}>Thoughtworks</span>, creando
              experiencias que impactan a miles de personas en Latam.
            </p>
            <div className={styles.ctas}>
              <a href="#projects" className={styles.ctaPrimary}>Ver proyectos</a>
              <a
                href="/assets/docs/angiecortez.pdf"
                target="_blank"
                rel="noreferrer"
                className={styles.ctaSecondary}
              >
                $ download cv
              </a>
            </div>
            <div className={styles.stats}>
              <Stat num="6+" label="años exp." />
              <div className={styles.statDiv} />
              <Stat num="7" label="empresas" />
              <div className={styles.statDiv} />
              <Stat num="ES/EN" label="idiomas" />
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
