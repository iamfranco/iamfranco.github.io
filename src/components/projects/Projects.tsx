import './Projects.css'
import { Project } from '../../models/Project'
import ProjectCard from '../project-card/ProjectCard'

interface Props {
  projects: Project[]
}

const Projects = ({projects} : Props) => {
  const projectsCards = projects.map(project =>
    <ProjectCard project={project} />
  )

  return (
    <div className='projectSection'>
      <div className='projectCardContainer'>
        {projectsCards}
      </div>
    </div>
  )
}

export default Projects