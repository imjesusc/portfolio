import { Card, Title } from '../atoms'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Suspense } from 'react'
export const Projects = ({ projects }) => {
  return (
    <section className="p-4 grid gap-4 w-full  max-w-[--max-w-screen] m-auto">
      <Title type="secondary" title="Proyectos" className="font-semibold" />

      <div
        className={classNames('grid grid-cols-1', 'm-auto w-full', 'tablet:grid-cols-2 gap-4', 'laptop:grid-cols-3')}
      >
        {projects.map((project) => (
          <Suspense key={project.id} fallback={<div>Loading...</div>}>
            <Card
              key={project.id}
              img={project.img}
              title={project.title}
              description={project.description}
              demo={project.demo}
              repository={project.repository}
              tecnologies={project.tecnologies}
            />
          </Suspense>
        ))}
      </div>
    </section>
  )
}

Projects.propTypes = {
  projects: PropTypes.array,
}
