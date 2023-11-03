import './ProjectCard.scss'
import { Project } from '../../models/Project'

interface Props {
  project: Project
}

const ProjectCard = ({project} : Props) => {
  return (
    <div className='project-card'>
      <img src={project.thumbnail_img} alt="" />
      <div className='project-words'>
        <div className='title'>{project.name}</div>
        <div className='description' dangerouslySetInnerHTML={{__html: project.description}} />
        <div className='button-container'>
          <div className='button'>Code</div>
          <div className='button'>Code</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard