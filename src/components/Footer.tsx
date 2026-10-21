import { profile } from '../data/portfolio'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <span className="site-footer__mark" aria-hidden="true">
            AO
          </span>
          <div>
            <p className="site-footer__name">{profile.name}</p>
            <p className="site-footer__role">{profile.title} · {profile.role}</p>
          </div>
        </div>

        <nav className="site-footer__links" aria-label="Enlaces del pie de página">
          <a href="https://github.com/Andythe20" target="_blank" rel="noreferrer noopener">
            <GitHubIcon size={16} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/andres-ortega-suazo/" target="_blank" rel="noreferrer noopener">
            <LinkedInIcon size={16} /> LinkedIn
          </a>
          <a href="mailto:andresortegasuazo@gmail.com">
            <MailIcon size={16} /> Email
          </a>
        </nav>
      </div>

      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} {profile.name}. Construido con React, TypeScript y Vite.</p>
        <p>Valparaíso, Chile</p>
      </div>
    </footer>
  )
}
