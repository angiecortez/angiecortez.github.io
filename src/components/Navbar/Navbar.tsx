import { useState, useEffect } from 'react'
import { useLang } from '../../context/LanguageContext'
import { t } from '../../i18n/translations'
import styles from './Navbar.module.css'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang } = useLang()
  const tr = t[lang]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#home" className={styles.logo}>
        <span className={styles.tilde}>~/</span>
        <span>angie-cortez</span>
      </a>

      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        <a href="#skills"     className={styles.link} onClick={close}>skills</a>
        <a href="#experience" className={styles.link} onClick={close}>experience</a>
        <a href="#projects"   className={styles.link} onClick={close}>projects</a>
        <a href="#contact"    className={styles.cta}  onClick={close}>{tr.nav.contact}</a>
        <button
          className={styles.langToggle}
          onClick={() => { setLang(lang === 'es' ? 'en' : 'es'); close() }}
          aria-label="Switch language"
        >
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
      </div>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
