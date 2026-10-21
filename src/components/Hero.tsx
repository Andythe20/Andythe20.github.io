import { cvLink, profile, socials, specialties } from '../data/portfolio'
import {
  ArrowRightIcon,
  CodeIcon,
  DatabaseIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ServerIcon,
  SparkIcon,
  ToolsIcon,
} from './icons'
import './Hero.css'

const specialtyIcons = {
  servicios: ServerIcon,
  datos: DatabaseIcon,
  arquitectura: CodeIcon,
  devops: ToolsIcon,
}

const socialIcons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  Email: MailIcon,
  Teléfono: PhoneIcon,
}

export default function Hero() {
  return (
    <section className="hero section" id="inicio">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">
            <SparkIcon size={14} /> Disponible para nuevas oportunidades
          </p>

          <h1 className="hero__title">
            Hola, soy <span className="hero__name">{profile.name}</span>
          </h1>

          <p className="hero__role">
            <span className="hero__role-title">{profile.title}</span>
            <span className="hero__role-sep" aria-hidden="true" />
            <span className="hero__role-sub">{profile.role}</span>
          </p>

          <p className="hero__summary">{profile.summary}</p>

          <ul className="hero__highlights">
            {profile.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="hero__actions">
            <a
              className="btn btn-primary"
              href="https://github.com/Andythe20"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitHubIcon /> Ver GitHub
            </a>
            <a className="btn btn-ghost" href="#contacto">
              Contactarme <ArrowRightIcon />
            </a>
            <a className="btn btn-ghost" href={cvLink.href} download>
              <DownloadIcon /> Descargar CV
            </a>
          </div>

          <div className="hero__meta">
            <span className="hero__location">
              <MapPinIcon size={15} /> {profile.location}
            </span>
            <span className="hero__socials">
              {socials.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons]
                if (!Icon) return null
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.external ? '_blank' : undefined}
                    rel={social.external ? 'noreferrer noopener' : undefined}
                    aria-label={social.label}
                    title={social.label}
                  >
                    <Icon />
                  </a>
                )
              })}
            </span>
          </div>
        </div>

        <div className="hero__visual">
          <div className="specialty-card card">
            <p className="specialty-card__eyebrow">Especialidad</p>
            <h2 className="specialty-card__title">
              Backend con Java, de la API al despliegue
            </h2>

            <ul className="specialty-card__list">
              {specialties.map((item) => {
                const Icon =
                  specialtyIcons[item.id as keyof typeof specialtyIcons] ?? CodeIcon
                return (
                  <li key={item.id}>
                    <span className="specialty-card__icon">
                      <Icon size={18} />
                    </span>
                    <span className="specialty-card__text">
                      <span className="specialty-card__label">{item.title}</span>
                      <span className="specialty-card__detail">{item.detail}</span>
                    </span>
                  </li>
                )
              })}
            </ul>

            <p className="specialty-card__foot">
              También construyo apps Android en Kotlin (Jetpack Compose) y aplicaciones de
              escritorio con Tauri y Rust.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
