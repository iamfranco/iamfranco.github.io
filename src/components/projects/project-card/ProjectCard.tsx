import './ProjectCard.scss'
import { Project } from '../../../models/Project'
import classNames from 'classnames';
import { useState } from 'react';

interface Props {
  project: Project
}

const ProjectCard = ({project} : Props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const tags = project.tags.map(tag => (
    <div className='tag' key={`${project.name} ${tag}`}>{tag}</div>
  ));

  const getButton = (link: string, className: string, label: string) => ( link && 
    <a 
      href={link} 
      className={classNames('button', className)} 
      target='_blank'
    >{label}</a>
  );

  const buttons = (
    <>
      {getButton(project.code_link, 'code', 'Code')}
      {getButton(project.demo_link, 'demo', 'Demo')}
    </>
  );

  const mainHref = project.demo_link || project.code_link;

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  }

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  }

  return (
    <div
      className='project-card' 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <a href={mainHref} target='_blank'>
        <img 
          src={isMouseOver ? project.thumbnail_gif : project.thumbnail_img} 
          alt={`${project.name} thumbnail`} />
      </a>
      <div className='project-words'>
        <a href={mainHref} target='_blank' className='title'>{project.name}</a>
        <div className='tags-container'>
          {tags}
        </div>

        <div className='description' dangerouslySetInnerHTML={{__html: project.description}} />
        <div className='button-container'>
          {buttons}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard