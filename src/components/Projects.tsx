import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'
import './Projects.css'

export default function Projects() {
  return (
    <section className="section" id="proyectos">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">Proyectos destacados</p>
          <h2 className="section-title">Sistemas que construí y que resuelven algo real</h2>
          <p className="section-lead">
            Un ecosistema de microservicios con inteligencia artificial para digitalizar la
            fiscalización vehicular municipal, y una API REST con aplicación de escritorio
            para ordenar las ventas y el stock de un negocio. Cada proyecto incluye el
            contexto, el problema que ataca, mi rol y el código disponible.
          </p>
        </header>

        <div className="projects__list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>
      </div>
    </section>
  )
}
