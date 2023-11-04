import './Projects.scss'
import { Project } from '../../models/Project'
import ProjectCard from './project-card/ProjectCard'
import ProjectFilter from './project-filter/ProjectFilter'
import { ProjectTag } from '../../models/ProjectTag'
import { useState } from 'react'

interface Props {
  projects: Project[]
}

const Projects = ({projects} : Props) => {
  const [filterTag, setFilterTag] = useState<ProjectTag | null>(null);

  const onFilterClick = (tag: ProjectTag | null) => {
    if (tag == null) {
      return setFilterTag(null);
    };

    if (filterTag == tag) {
      return setFilterTag(null)
    }

    setFilterTag(tag);
  }

  const filteredProjects = projects.filter(project => {
    if (filterTag == null) return true;

    return project.tags.includes(filterTag);
  });

  const projectsCards = filteredProjects.map(project =>
    <ProjectCard project={project} key={project.name} />
  )

  return (
    <div className='project-section'>
      <ProjectFilter filterTag={filterTag} onFilterClick={onFilterClick}/>
      <div className='project-card-container'>
        {projectsCards}
      </div>
    </div>
  )
}

export default Projects