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
  const [filterTags, setFilterTags] = useState<ProjectTag[]>([]);

  const onFilterClick = (tag: ProjectTag | null) => {
    if (tag == null) {
      return setFilterTags([]);
    };

    if (filterTags.includes(tag)) {
      return setFilterTags(currentTags => currentTags.filter(t => t != tag))
    }

    setFilterTags(currentTags => [...currentTags, tag]);
  }

  const filteredProjects = projects.filter(project => {
    if (filterTags.length == 0) return true;

    for (const tag of filterTags) {
      if (project.tags.includes(tag)) return true
    }

    return false;
  });

  const projectsCards = filteredProjects.map(project =>
    <ProjectCard project={project} key={project.name} />
  )

  return (
    <div className='project-section'>
      <ProjectFilter filterTags={filterTags} onFilterClick={onFilterClick}/>
      <div className='project-card-container'>
        {projectsCards}
      </div>
    </div>
  )
}

export default Projects