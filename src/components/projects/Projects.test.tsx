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
    description: "description 1",
    tags: ['C#']
  },
  {
    name: 'Project 2',
    thumbnail_img: '2.png',
    thumbnail_gif: '2.gif',
    demo_link: 'demo2.link',
    code_link: 'code2.link',
    description: "description 2",
    tags: ['TypeScript', 'React']
  }
]

describe('Projects component', () => {
  it('displays project name for each project ', () => {
    // Arrange Act
    render(<Projects projects={projects} />);

    // Assert
    for (const project of projects) {
      expect(screen.getByText(project.name)).not.toBeNull();
    }
  })
})