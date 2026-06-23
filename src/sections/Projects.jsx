import { useState } from 'react'
import { projects } from '../data/projects'
import SectionTitle from '../components/SectionTitle'
import ProjectCard, { ProjectModal } from '../components/ProjectCard'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="obras" className="section-padding bg-surface">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          label="Portfolio"
          title="Obras destacadas"
          description="Selección de proyectos de infraestructura civil en los que participó como jefe o director de obra."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetail={setSelectedProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
