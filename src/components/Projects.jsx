import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import projects from '../data/projects'
import useScrollFadeIn from '../hooks/useScrollFadeIn'

export default function Projects() {
  const { ref, ...motionProps } = useScrollFadeIn()

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div ref={ref} {...motionProps}>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
            <div className="w-12 h-1 bg-brand mx-auto mt-3 rounded-full" />
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="bg-page-bg rounded-2xl p-6 border border-gray-100 hover:border-brand/30 hover:shadow-md transition-all duration-300">
      <h3 className="text-lg font-bold text-gray-800 mb-2">{project.name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-5">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 bg-brand/10 text-brand rounded-md text-xs font-medium"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-sm">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-gray-700 transition-colors"
          >
            <FiGithub size={15} />
            GitHub
          </a>
        )}
        {project.deploy && (
          <a
            href={project.deploy}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-brand hover:text-brand-hover transition-colors"
          >
            <FiExternalLink size={15} />
            Live
          </a>
        )}
      </div>
    </div>
  )
}
