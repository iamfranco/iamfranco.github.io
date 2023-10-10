import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Project } from '../../models/Project';
import Projects from './Projects';

const projects: Project[] = [
  {
    name: 'Project 1',
    thumbnail_img: '1.png',
    thumbnail_gif: '1.gif',
    demo_link: 'demo1.link',
    code_link: 'code1.link',
    tags: ['C#']
  },
  {
    name: 'Project 2',
    thumbnail_img: '2.png',
    thumbnail_gif: '2.gif',
    demo_link: 'demo2.link',
    code_link: 'code2.link',
    tags: ['TypeScript', 'React']
  }
]

describe('Projects component', () => {
  it('it displays name for each project', () => {
    // Arrange Act
    render(<Projects projects={projects} />);

    screen.debug()

    // Assert
    for (const project of projects) {
      const projectName = screen.queryByText(project.name);
      expect(projectName).not.toBeNull();
    }
  })
})