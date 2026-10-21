import { cvLink, profile, socials } from '../data/portfolio'
import {
  DownloadIcon,
  ExternalLinkIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SparkIcon,
} from './icons'
import './Contact.css'

const contactMeta = {
  Email: { icon: MailIcon, value: 'andresortegasuazo@gmail.com' },
  Teléfono: { icon: PhoneIcon, value: '+56 9 3560 9990' },
  GitHub: { icon: GitHubIcon, value: 'github.com/Andythe20' },
  LinkedIn: { icon: LinkedInIcon, value: 'in/andres-ortega-suazo' },
}

export default function Contact() {
  return (
    <section className="section" id="contacto">
      <div className="container contact__grid">
        <div className="contact__text">
          <header className="section-header">
            <p className="eyebrow">Contacto</p>
            <h2 className="section-title">¿Hablamos de tu equipo?</h2>
            <p className="section-lead">
              Si buscas un desarrollador backend/fullstack para construir APIs, microservicios
              o productos digitales, escríbeme. Respondo rápido y me interesa entender el
              problema antes que la solución.
            </p>
          </header>

          <div className="contact__actions">
            <a
              className="btn btn-primary"
              href="mailto:andresortegasuazo@gmail.com?subject=Oportunidad%20laboral%20-%20Contacto%20por%20el%20portafolio"
            >
              <MailIcon /> Escribir por email
            </a>
            <a className="btn btn-ghost" href={cvLink.href} download>
              <DownloadIcon /> Descargar CV (PDF)
            </a>
          </div>

          <ul className="contact__list">
            {socials.map((social) => {
              const meta = contactMeta[social.label as keyof typeof contactMeta]
              if (!meta) return null
              const Icon = meta.icon
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.external ? '_blank' : undefined}
                    rel={social.external ? 'noreferrer noopener' : undefined}
                  >
                    <span className="contact__icon">
                      <Icon size={18} />
                    </span>
                    <span className="contact__channel">
                      <span className="contact__label">{social.label}</span>
                      <span className="contact__value">{meta.value}</span>
                    </span>
                    {social.external ? <ExternalLinkIcon size={15} /> : null}
                  </a>
                </li>
              )
            })}
            <li>
              <span className="contact__row">
                <span className="contact__icon">
                  <MapPinIcon size={18} />
                </span>
                <span className="contact__channel">
                  <span className="contact__label">Ubicación</span>
                  <span className="contact__value">{profile.location}</span>
                </span>
              </span>
            </li>
          </ul>
        </div>

        <aside className="contact__card card">
          <p className="contact__card-eyebrow">
            <SparkIcon size={14} /> Estado actual
          </p>
          <h3 className="contact__card-title">Disponible para nuevas oportunidades</h3>
          <p className="contact__card-text">
            Busco un equipo donde pueda aportar en el backend y seguir creciendo hacia el
            trabajo fullstack, en un proyecto real con despliegue a producción y buenas
            prácticas de ingeniería.
          </p>
          <ul className="contact__card-list">
            <li>Trabajo remoto o híbrido en Chile</li>
            <li>Interesado en backend, APIs y arquitectura de microservicios</li>
            <li>Disponible para pruebas técnicas y proyectos por Sprint</li>
          </ul>
          <a
            className="contact__card-link"
            href="https://www.linkedin.com/in/andres-ortega-suazo/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Conectemos por LinkedIn <ExternalLinkIcon size={14} />
          </a>
        </aside>
      </div>
    </section>
  )
}
