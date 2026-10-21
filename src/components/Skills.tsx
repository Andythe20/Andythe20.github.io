import { skillGroups } from '../data/portfolio'
import {
  CodeIcon,
  DatabaseIcon,
  MobileIcon,
  MonitorIcon,
  ServerIcon,
  ToolsIcon,
} from './icons'
import './Skills.css'

const groupIcons = {
  frontend: CodeIcon,
  backend: ServerIcon,
  datos: DatabaseIcon,
  movil: MobileIcon,
  herramientas: ToolsIcon,
  escritorio: MonitorIcon,
}

export default function Skills() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">Tecnologías y conocimientos</p>
          <h2 className="section-title">El stack con el que trabajo a diario</h2>
          <p className="section-lead">
            Herramientas que uso en proyectos reales, ordenadas por área. Prefiero
            concentrarme en pocas tecnologías que conozco bien antes que en una lista larga
            de plugins.
          </p>
        </header>

        <div className="skills__grid">
          {skillGroups.map((group) => {
            const Icon = groupIcons[group.id as keyof typeof groupIcons] ?? CodeIcon
            return (
              <article className="skill-card card" key={group.id}>
                <header className="skill-card__header">
                  <span className="skill-card__icon">
                    <Icon />
                  </span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.summary}</p>
                  </div>
                </header>
                <ul className="skill-card__items">
                  {group.items.map((item) => (
                    <li className="tag" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
