import { useState } from 'react'
import type { Project } from '../data/portfolio'
import { ExternalLinkIcon, GitHubIcon, ImageIcon } from './icons'
import './ProjectCard.css'

type Props = {
  project: Project
  featured?: boolean
}

const initials = (name: string) => {
  const base = name.split(/[—–]/)[0].trim()
  const words = base.split(/\s+/).filter(Boolean)
  if (words.length > 1) {
    return words
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase()
  }
  const word = words[0] ?? ''
  const isAcronym = word === word.toUpperCase() && /[A-Z]/.test(word)
  if (isAcronym && word.length <= 5) {
    return word
  }
  const capitals = word.replace(/[^A-Z]/g, '')
  if (capitals.length > 1) {
    return capitals.slice(0, 3).toUpperCase()
  }
  return word.slice(0, 2).toUpperCase()
}

const fileName = (path: string) => path.split('/').pop() ?? path

export default function ProjectCard({ project, featured = false }: Props) {
  const [imageFailed, setImageFailed] = useState(false)
  const [mobileFailed, setMobileFailed] = useState(false)
  const [architectureFailed, setArchitectureFailed] = useState(false)

  const isGitHub = (href: string) => href.includes('github.com')

  return (
    <article className={`project-card card${featured ? ' project-card--featured' : ''}`}>
      <div className="project-card__gallery">
        <figure className="project-card__media">
          {project.status && <span className="project-card__status">{project.status}</span>}

          <div className="monitor">
            <div className="monitor__screen">
              <div className="monitor__chrome">
                <span className="monitor__dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="monitor__url">
                  {project.browserLabel ?? fileName(project.image)}
                </span>
              </div>
              <div className="monitor__viewport">
                {imageFailed ? (
                  <div className="project-card__placeholder" aria-hidden="true">
                    <span>{initials(project.name)}</span>
                    <small>{fileName(project.image)}</small>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    onError={() => setImageFailed(true)}
                  />
                )}
              </div>
            </div>
            <div className="monitor__chin" aria-hidden="true" />
            <div className="monitor__stand" aria-hidden="true" />
            <div className="monitor__base" aria-hidden="true" />
          </div>
        </figure>

        {project.imageCaption && (
          <p className="project-card__caption">{project.imageCaption}</p>
        )}

        {project.mobileImage && (
          <figure className="project-card__mobile">
            <div className="phone">
              <span className="phone__notch" aria-hidden="true" />
              <div className="phone__screen">
                {mobileFailed ? (
                  <div className="project-card__mobile-placeholder" aria-hidden="true">
                    <ImageIcon size={22} />
                    <small>{fileName(project.mobileImage)}</small>
                  </div>
                ) : (
                  <img
                    src={project.mobileImage}
                    alt={project.mobileImageAlt ?? project.name}
                    loading="lazy"
                    onError={() => setMobileFailed(true)}
                  />
                )}
              </div>
              <span className="phone__bar" aria-hidden="true" />
            </div>
            {project.mobileImageCaption && (
              <figcaption className="project-card__mobile-caption">
                {project.mobileImageCaption}
              </figcaption>
            )}
          </figure>
        )}
      </div>

      <div className="project-card__body">
        <header className="project-card__header">
          <h3>{project.name}</h3>
          <p className="project-card__tagline">{project.tagline}</p>
        </header>

        <p className="project-card__description">{project.description}</p>

        <div className="project-card__problem">
          <span className="project-card__problem-label">Problema que resuelve</span>
          <p>{project.problem}</p>
        </div>

        {project.role && (
          <p className="project-card__role">
            <span className="project-card__role-label">Mi rol</span>
            {project.role}
          </p>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <ul className="project-card__highlights">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        <div className="project-card__stack">
          {project.stack.map((tech) => (
            <span className="tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        {project.ecosystem && project.ecosystem.length > 0 && (
          <div className="project-card__ecosystem">
            <span className="project-card__ecosystem-label">Ecosistema completo</span>
            <ul>
              {project.ecosystem.map((item) => (
                <li key={item.href}>
                  <a href={item.href} target="_blank" rel="noreferrer noopener">
                    {item.label} <ExternalLinkIcon size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.privateNote && (
          <p className="project-card__private">
            <ImageIcon size={15} /> {project.privateNote}
          </p>
        )}

        {project.links.length > 0 && (
          <div className="project-card__links">
            {project.links.map((link) => (
              <a
                key={link.href}
                className={`btn btn-sm ${isGitHub(link.href) ? 'btn-ghost' : 'btn-primary'}`}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer noopener' : undefined}
                download={!link.external ? true : undefined}
              >
                {isGitHub(link.href) ? <GitHubIcon size={15} /> : null}
                {link.label}
                {link.external ? <ExternalLinkIcon size={14} /> : null}
              </a>
            ))}
          </div>
        )}
      </div>

      {project.architectureImage && (
        <figure className="project-figure">
          <div className="project-figure__frame">
            {architectureFailed ? (
              <div className="project-figure__placeholder">
                <ImageIcon size={26} />
                <span className="project-figure__placeholder-title">
                  Espacio reservado para la imagen de arquitectura
                </span>
                <span className="project-figure__placeholder-file">
                  {fileName(project.architectureImage)}
                </span>
              </div>
            ) : (
              <img
                src={project.architectureImage}
                alt={project.architectureAlt ?? project.name}
                loading="lazy"
                onError={() => setArchitectureFailed(true)}
              />
            )}
          </div>
          {project.architectureCaption && (
            <figcaption className="project-figure__caption">
              {project.architectureCaption}
            </figcaption>
          )}
        </figure>
      )}
    </article>
  )
}
