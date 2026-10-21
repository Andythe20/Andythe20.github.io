import { useEffect, useState } from 'react'
import { navLinks } from '../data/portfolio'
import { CloseIcon, MenuIcon } from './icons'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (id: string) => {
    setOpen(false)
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a className="brand" href="#inicio" onClick={(e) => { e.preventDefault(); go('inicio') }}>
          <span className="brand__mark" aria-hidden="true">
            AO
          </span>
          <span className="brand__text">
            Andrés Ortega
            <span>Desarrollador de software</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a className="btn btn-primary btn-sm header-cta" href="#contacto" onClick={(e) => { e.preventDefault(); go('contacto') }}>
            Contactarme
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div id="menu-movil" className={`mobile-menu${open ? ' is-open' : ''}`} hidden={!open}>
        <nav aria-label="Navegación móvil">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); go(link.id) }}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn-primary btn-sm"
            href="#contacto"
            onClick={(e) => { e.preventDefault(); go('contacto') }}
          >
            Contactarme
          </a>
        </nav>
      </div>
    </header>
  )
}
