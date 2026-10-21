import { timeline } from '../data/portfolio'
import './About.css'

export default function About() {
  return (
    <section className="section" id="sobre-mi">
      <div className="container about__grid">
        <div className="about__text">
          <header className="section-header">
            <p className="eyebrow">Sobre mí</p>
            <h2 className="section-title">El tipo de desarrollador que quiero ser</h2>
          </header>

          <p>
            Me considero un desarrollador de software con base sólida en backend. Me gusta
            entender a fondo un dominio —cómo se fiscaliza un vehículo, cómo se monitorean
            sensores, cómo se vende un producto— y después modelarlo en código limpio:
            entidades bien pensadas, contratos claros entre servicios, consultas de base de
            datos que no duelen y código que otra persona puede mantener.
          </p>

          <p>
            Busco seguir creciendo como ingeniero fullstack con alma de backend: poder
            meterme en la lógica de negocio y la arquitectura (microservicios, arquitectura
            limpia, CI/CD y despliegue en la nube) sin dejar de lado la experiencia de quien
            usa el producto, construyendo interfaces claras con React, Vue o Kotlin.
          </p>

          <p>
            Lo que más me motiva a seguir aprendiendo es infraestructura en la nube (Kubernetes y
            AWS a fondo), arquitectura orientada a eventos y microservicios desacoplados, y
            la intersección entre IA aplicada y software de producto: visión artificial,
            modelos de lenguaje y RAG aplicados a problemas reales. También estoy metido en
            Rust y Tauri para llevar ese backend hasta el escritorio.
          </p>

          <div className="about__facts">
            <div className="about__fact">
              <span className="about__fact-label">Formación</span>
              <span className="about__fact-value">
                Analista Programador, DUOC UC Viña del Mar (2024–2026)
              </span>
            </div>
            <div className="about__fact">
              <span className="about__fact-label">Certificación</span>
              <span className="about__fact-value">
                PCEP — Certified Entry-Level Python Programmer (2025)
              </span>
            </div>
            <div className="about__fact">
              <span className="about__fact-label">Metodología</span>
              <span className="about__fact-value">
                Scrum, trabajo en equipo y revisiones de código
              </span>
            </div>
          </div>
        </div>

        <ol className="timeline">
          {timeline.map((entry) => (
            <li className="timeline__item" key={`${entry.period}-${entry.title}`}>
              <span className="timeline__marker" aria-hidden="true" />
              <div className="timeline__content">
                <span className="timeline__period">{entry.period}</span>
                <h3 className="timeline__title">{entry.title}</h3>
                <span className="timeline__place">{entry.place}</span>
                <p className="timeline__description">{entry.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
