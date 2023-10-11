import './ProjectCard.css'
import { Project } from '../../models/Project'

interface Props {
  project: Project
}

const ProjectCard = ({project} : Props) => {
  return (
    <div className='projectCard'>
      <img src={project.thumbnail_img} alt="" />
      <div className='title'>{project.name}</div>
      <div className='button'>Code</div>
    </div>
  )
}

export default ProjectCard