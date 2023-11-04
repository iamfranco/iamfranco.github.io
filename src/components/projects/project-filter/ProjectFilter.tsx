import classNames from 'classnames';
import { ProjectTag } from '../../../models/ProjectTag';
import './ProjectFilter.scss';

interface Props {
  filterTags: ProjectTag[],
  onFilterClick: (tag: ProjectTag | null) => void
}

const ProjectFilter = ({filterTags, onFilterClick} : Props) => {
  const allProjectsButton = (
    <div 
      key={`filter button all-projects`}
      className={classNames(
        'project-filter-tag', 
        filterTags.length==0 && 'active'
      )}
      onClick={() => onFilterClick(null)}
    >
      All Projects
    </div>
  );

  const tags = Object.values(ProjectTag);
  const tagButtons = tags.map(tag => (
    <div 
      key={`filter button ${tag}`}
      className={classNames(
        'project-filter-tag',
        filterTags.includes(tag) && 'active'
      )}
      onClick={() => onFilterClick(tag)}
    >
      {tag}
    </div>
  ))

  return (
    <div id='project-filter'>
      {allProjectsButton}
      {tagButtons}
    </div>
  )
}

export default ProjectFilter