import { Project } from '../../models/Project'

interface Props {
  projects: Project[]
}

const Projects = ({projects} : Props) => {
  const projectsCards = projects.map(project =>
    <div>{project.name}</div>
  )

  return (
    <>
      {projectsCards}
    </>
  )
}

export default Projects